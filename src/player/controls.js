// First-person visitor: pointer-lock mouse look, WASD / arrow keys, walking that follows the
// relief and collides with walls, houses and trunks, plus a free-flight mode and touch input.

import * as THREE from 'three';
import { heightAt, PLAY } from '../world/layout.js';
import { clamp } from '../core/math.js';

// ---------------------------------------------------------------------------------------------
// Static 2D colliders in a uniform hash grid
// ---------------------------------------------------------------------------------------------
export class Colliders {
  constructor(cell = 8) {
    this.cell = cell;
    this.map = new Map();
    this.items = [];
    this._stamp = 0;
  }
  _insert(item, minX, minZ, maxX, maxZ) {
    item.stamp = 0;
    this.items.push(item);
    const c = this.cell;
    for (let ix = Math.floor(minX / c); ix <= Math.floor(maxX / c); ix++) {
      for (let iz = Math.floor(minZ / c); iz <= Math.floor(maxZ / c); iz++) {
        const k = ix * 8192 + iz;
        let a = this.map.get(k);
        if (!a) this.map.set(k, (a = []));
        a.push(item);
      }
    }
  }
  addCircle(x, z, r) {
    this._insert({ t: 0, x, z, r }, x - r, z - r, x + r, z + r);
  }
  // oriented rectangle: half extents hw (local x), hd (local z), rotation about Y
  addBox(x, z, hw, hd, rot = 0) {
    const c = Math.cos(rot),
      s = Math.sin(rot);
    const ex = Math.abs(hw * c) + Math.abs(hd * s),
      ez = Math.abs(hw * s) + Math.abs(hd * c);
    this._insert({ t: 1, x, z, hw, hd, c, s }, x - ex, z - ez, x + ex, z + ez);
  }
  addSegment(x0, z0, x1, z1, half = 0.25) {
    this._insert(
      { t: 2, x0, z0, x1, z1, half },
      Math.min(x0, x1) - half,
      Math.min(z0, z1) - half,
      Math.max(x0, x1) + half,
      Math.max(z0, z1) + half
    );
  }
  // push the circle (p.x, p.z, radius) out of everything it overlaps
  resolve(p, radius) {
    const c = this.cell;
    let hit = false;
    for (let pass = 0; pass < 2; pass++) {
      const stamp = ++this._stamp;
      const ix0 = Math.floor((p.x - radius) / c),
        ix1 = Math.floor((p.x + radius) / c);
      const iz0 = Math.floor((p.z - radius) / c),
        iz1 = Math.floor((p.z + radius) / c);
      for (let ix = ix0; ix <= ix1; ix++) {
        for (let iz = iz0; iz <= iz1; iz++) {
          const a = this.map.get(ix * 8192 + iz);
          if (!a) continue;
          for (let k = 0; k < a.length; k++) {
            const it = a[k];
            if (it.stamp === stamp) continue;
            it.stamp = stamp;
            if (it.t === 0) {
              const dx = p.x - it.x,
                dz = p.z - it.z;
              const rr = it.r + radius;
              const d2 = dx * dx + dz * dz;
              if (d2 < rr * rr && d2 > 1e-8) {
                const d = Math.sqrt(d2);
                p.x = it.x + (dx / d) * rr;
                p.z = it.z + (dz / d) * rr;
                hit = true;
              }
            } else if (it.t === 1) {
              const dx = p.x - it.x,
                dz = p.z - it.z;
              const lx = dx * it.c - dz * it.s,
                lz = dx * it.s + dz * it.c;
              const cx = clamp(lx, -it.hw, it.hw),
                cz = clamp(lz, -it.hd, it.hd);
              let ox = lx - cx,
                oz = lz - cz;
              const d2 = ox * ox + oz * oz;
              let nlx = lx,
                nlz = lz;
              if (d2 < 1e-10) {
                // centre is inside: leave through the nearest face
                const px = it.hw - Math.abs(lx),
                  pz = it.hd - Math.abs(lz);
                if (px < pz) nlx = Math.sign(lx || 1) * (it.hw + radius);
                else nlz = Math.sign(lz || 1) * (it.hd + radius);
              } else if (d2 < radius * radius) {
                const d = Math.sqrt(d2);
                nlx = cx + (ox / d) * radius;
                nlz = cz + (oz / d) * radius;
              } else continue;
              p.x = it.x + nlx * it.c + nlz * it.s;
              p.z = it.z - nlx * it.s + nlz * it.c;
              hit = true;
            } else {
              const ex = it.x1 - it.x0,
                ez = it.z1 - it.z0;
              const l2 = ex * ex + ez * ez;
              let t = l2 > 0 ? ((p.x - it.x0) * ex + (p.z - it.z0) * ez) / l2 : 0;
              t = clamp(t, 0, 1);
              const qx = it.x0 + ex * t,
                qz = it.z0 + ez * t;
              const dx = p.x - qx,
                dz = p.z - qz;
              const rr = radius + it.half;
              const d2 = dx * dx + dz * dz;
              if (d2 < rr * rr && d2 > 1e-8) {
                const d = Math.sqrt(d2);
                p.x = qx + (dx / d) * rr;
                p.z = qz + (dz / d) * rr;
                hit = true;
              }
            }
          }
        }
      }
      if (!hit) break;
    }
    return hit;
  }
}

// ---------------------------------------------------------------------------------------------
const EYE = 1.66;
const RADIUS = 0.38;
const WADE_LIMIT = -0.75; // the visitor wades no deeper than the knees
const RUN_SPEED = 8.5;

export class Player {
  constructor(camera, dom, colliders) {
    this.camera = camera;
    this.dom = dom;
    this.colliders = colliders;
    this.pos = new THREE.Vector3(0, 10, 0);
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.mode = 'walk';
    this.onGround = true;
    this.vy = 0;
    this.enabled = false;
    this.locked = false;
    this.dragging = false;
    this.keys = new Set();
    this.bob = 0;
    this.bobAmp = 0;
    this.speed = 0;
    this.sensitivity = 0.0022;
    this.touchMove = { id: -1, x0: 0, y0: 0, x: 0, y: 0 };
    this.touchLook = { id: -1, x: 0, y: 0 };
    this.vertical = 0; // touch buttons: +1 up, −1 down
    this.onLockChange = null;
    this.onModeChange = null;
    this.onBlocked = null; // (reason) when walking is not possible here
    this._tmp = { x: 0, z: 0 };
    this._bind();
  }

  setPose(x, y, z, headingDeg = 0, pitchDeg = 0) {
    this.pos.set(x, y, z);
    this.yaw = (-headingDeg * Math.PI) / 180;
    this.pitch = (pitchDeg * Math.PI) / 180;
    this.vel.set(0, 0, 0);
    this.vy = 0;
    this._apply(0);
  }

  // stand on the ground at (x, z)
  place(x, z, headingDeg = 0) {
    const changed = this.mode !== 'walk';
    this.mode = 'walk';
    this.onGround = true;
    this.setPose(x, heightAt(x, z) + EYE, z, headingDeg, 0);
    if (changed && this.onModeChange) this.onModeChange('walk');
  }

  // null if one can stand at (x, z); otherwise why not
  walkBlock(x, z) {
    if (x < PLAY.minX || x > PLAY.maxX || z < PLAY.minZ || z > PLAY.maxZ) return 'bounds';
    if (heightAt(x, z) < WADE_LIMIT) return 'water';
    return null;
  }

  get heading() {
    return (((-this.yaw * 180) / Math.PI) % 360 + 360) % 360;
  }

  // returns false when the change is refused (no landing on open water or outside the district)
  setMode(mode) {
    if (mode === this.mode) return true;
    if (mode === 'walk') {
      const why = this.walkBlock(this.pos.x, this.pos.z);
      if (why) {
        if (this.onBlocked) this.onBlocked(why);
        return false;
      }
    }
    this.mode = mode;
    if (mode === 'fly') {
      this.vel.y = 2.5;
      this.onGround = false;
    } else {
      this.vy = this.vel.y;
      this.onGround = false;
      // do not carry flight speed into a walk
      const hs = Math.hypot(this.vel.x, this.vel.z);
      if (hs > RUN_SPEED) {
        this.vel.x *= RUN_SPEED / hs;
        this.vel.z *= RUN_SPEED / hs;
      }
    }
    if (this.onModeChange) this.onModeChange(mode);
    return true;
  }

  // `force` lets the title screen ask for the lock inside its click handler, before control is handed over
  requestLock(force = false) {
    if ((!this.enabled && !force) || this.locked) return;
    try {
      const p = this.dom.requestPointerLock?.();
      if (p && p.catch) p.catch(() => {});
    } catch (e) {
      /* drag-to-look remains available */
    }
  }

  _bind() {
    const dom = this.dom;
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === dom;
      if (this.onLockChange) this.onLockChange(this.locked);
    });
    dom.addEventListener('mousedown', (e) => {
      if (!this.enabled) return;
      if (e.button === 0) {
        this.dragging = true;
        this.requestLock();
      }
    });
    window.addEventListener('mouseup', () => (this.dragging = false));
    window.addEventListener('mousemove', (e) => {
      if (!this.enabled) return;
      if (this.locked || this.dragging) {
        // guard against the occasional huge spurious delta some browsers emit
        const mx = clamp(e.movementX || 0, -200, 200),
          my = clamp(e.movementY || 0, -200, 200);
        this.yaw -= mx * this.sensitivity;
        this.pitch -= my * this.sensitivity;
        this.pitch = clamp(this.pitch, -1.5, 1.5);
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      this.keys.add(e.code);
      if (!this.enabled) return;
      if (e.code === 'KeyF' && !e.repeat) this.setMode(this.mode === 'fly' ? 'walk' : 'fly');
      if (e.code === 'Space' && this.mode === 'walk' && this.onGround) {
        this.vy = 4.7;
        this.onGround = false;
      }
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());

    // touch: left part of the screen is a virtual stick, the rest looks around
    const tm = this.touchMove,
      tl = this.touchLook;
    dom.addEventListener(
      'touchstart',
      (e) => {
        if (!this.enabled) return;
        for (const t of e.changedTouches) {
          if (t.clientX < window.innerWidth * 0.4 && tm.id < 0) {
            tm.id = t.identifier;
            tm.x0 = tm.x = t.clientX;
            tm.y0 = tm.y = t.clientY;
          } else if (tl.id < 0) {
            tl.id = t.identifier;
            tl.x = t.clientX;
            tl.y = t.clientY;
          }
        }
        e.preventDefault();
      },
      { passive: false }
    );
    dom.addEventListener(
      'touchmove',
      (e) => {
        for (const t of e.changedTouches) {
          if (t.identifier === tm.id) {
            tm.x = t.clientX;
            tm.y = t.clientY;
          } else if (t.identifier === tl.id) {
            this.yaw -= (t.clientX - tl.x) * 0.0045;
            this.pitch = clamp(this.pitch - (t.clientY - tl.y) * 0.0045, -1.5, 1.5);
            tl.x = t.clientX;
            tl.y = t.clientY;
          }
        }
        e.preventDefault();
      },
      { passive: false }
    );
    const end = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === tm.id) tm.id = -1;
        if (t.identifier === tl.id) tl.id = -1;
      }
    };
    dom.addEventListener('touchend', end);
    dom.addEventListener('touchcancel', end);
  }

  _input() {
    const k = this.keys;
    let ix = 0,
      iz = 0,
      iy = 0;
    if (k.has('KeyW') || k.has('ArrowUp')) iz += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) iz -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) ix += 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) ix -= 1;
    if (k.has('KeyE') || k.has('Space')) iy += 1;
    if (k.has('KeyQ') || k.has('KeyC')) iy -= 1;
    iy += this.vertical;
    const tm = this.touchMove;
    if (tm.id >= 0) {
      const dx = (tm.x - tm.x0) / 60,
        dy = (tm.y - tm.y0) / 60;
      ix += clamp(dx, -1, 1);
      iz += clamp(-dy, -1, 1);
    }
    const l = Math.hypot(ix, iz);
    if (l > 1) {
      ix /= l;
      iz /= l;
    }
    return { ix, iz, iy: clamp(iy, -1, 1), run: k.has('ShiftLeft') || k.has('ShiftRight') };
  }

  update(dt) {
    dt = Math.min(dt, 0.1);
    const inp = this.enabled ? this._input() : { ix: 0, iz: 0, iy: 0, run: false };
    const sy = Math.sin(this.yaw),
      cy = Math.cos(this.yaw);
    // forward = (−sin yaw, 0, −cos yaw); right = (cos yaw, 0, −sin yaw)
    const p = this.pos,
      v = this.vel;

    if (this.mode === 'fly') {
      const speed = inp.run ? 55 : 15;
      const cp = Math.cos(this.pitch),
        sp = Math.sin(this.pitch);
      const tx = (-sy * cp * inp.iz + cy * inp.ix) * speed;
      const tz = (-cy * cp * inp.iz - sy * inp.ix) * speed;
      const ty = (sp * inp.iz + inp.iy) * speed;
      const a = 1 - Math.exp(-dt * 5);
      v.x += (tx - v.x) * a;
      v.y += (ty - v.y) * a;
      v.z += (tz - v.z) * a;
      p.addScaledVector(v, dt);
      p.x = clamp(p.x, PLAY.minX - 900, PLAY.maxX + 900);
      p.z = clamp(p.z, PLAY.minZ - 900, PLAY.maxZ + 1100);
      const floor = Math.max(heightAt(p.x, p.z), 0) + 1.3;
      if (p.y < floor) {
        p.y = floor;
        if (v.y < 0) v.y = 0;
      }
      p.y = Math.min(p.y, 700);
      this.bobAmp *= Math.exp(-dt * 8);
    } else {
      const speed = inp.run ? RUN_SPEED : 3.6;
      const tx = (-sy * inp.iz + cy * inp.ix) * speed;
      const tz = (-cy * inp.iz - sy * inp.ix) * speed;
      const a = 1 - Math.exp(-dt * (this.onGround ? 11 : 3));
      v.x += (tx - v.x) * a;
      v.z += (tz - v.z) * a;

      // advance in short slices so that a long frame cannot step through a wall
      const q = this._tmp;
      const n = Math.min(12, Math.max(1, Math.ceil((Math.hypot(v.x, v.z) * dt) / 0.3)));
      for (let i = 0; i < n; i++) {
        q.x = p.x + (v.x * dt) / n;
        q.z = p.z + (v.z * dt) / n;
        if (this.colliders) this.colliders.resolve(q, RADIUS);
        q.x = clamp(q.x, PLAY.minX, PLAY.maxX);
        q.z = clamp(q.z, PLAY.minZ, PLAY.maxZ);
        // do not wade out past the knees: slide along the shoreline instead
        // (a step that does not go deeper is always allowed, so one can always walk back out)
        const here = heightAt(p.x, p.z);
        if (this._tooDeep(q.x, q.z, here)) {
          if (!this._tooDeep(q.x, p.z, here)) q.z = p.z;
          else if (!this._tooDeep(p.x, q.z, here)) q.x = p.x;
          else {
            q.x = p.x;
            q.z = p.z;
          }
        }
        p.x = q.x;
        p.z = q.z;
      }

      const ground = heightAt(p.x, p.z) + EYE;
      if (this.onGround) {
        p.y += (ground - p.y) * (1 - Math.exp(-dt * 16));
        if (ground - p.y > 0.6) p.y = ground - 0.6;
      } else {
        this.vy -= 13.5 * dt;
        p.y += this.vy * dt;
        if (p.y <= ground) {
          p.y = ground;
          this.vy = 0;
          this.onGround = true;
        }
      }
      v.y = 0;
      const hs = Math.hypot(v.x, v.z);
      this.speed = hs;
      const targetAmp = this.onGround ? Math.min(hs / 3.6, 1.6) : 0;
      this.bobAmp += (targetAmp - this.bobAmp) * (1 - Math.exp(-dt * 6));
      this.bob += dt * (5.2 + hs * 1.25);
    }
    this._apply(dt);
  }

  _tooDeep(x, z, here) {
    const h = heightAt(x, z);
    return h < WADE_LIMIT && h < here;
  }

  _apply() {
    const c = this.camera;
    const bobY = this.mode === 'walk' ? Math.sin(this.bob * 2) * 0.028 * this.bobAmp : 0;
    const bobX = this.mode === 'walk' ? Math.cos(this.bob) * 0.016 * this.bobAmp : 0;
    c.position.set(this.pos.x + Math.cos(this.yaw) * bobX, this.pos.y + bobY, this.pos.z - Math.sin(this.yaw) * bobX);
    c.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
  }
}
