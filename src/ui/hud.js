// Interface: place names as you walk, time-of-day and season switches, the district map
// (small, and a large "one pass, one tree" sheet you can click to travel), help and toasts.

import { ROADS, TREE_INFO, POIS, LANDMARKS, VILLAS, PLAY, nearestRoad, heightAt, coastDist, rockiness } from '../world/layout.js';
import { PRESETS, PRESET_ORDER } from '../world/atmosphere.js';

const $ = (s) => document.querySelector(s);

const MAP = { x0: -400, x1: 500, z0: -390, z1: 390 };
const TREE_COLOR = {
  ginkgo: '#e0ad2a',
  maple: '#d2552a',
  plane: '#a8843c',
  cedar: '#2f6b4f',
  juniper: '#4c8a3a',
  peach: '#e58fb0',
  crabapple: '#d96a8a',
  crape: '#b05ac0',
  pine: '#2f7f86',
};
const SEASONS = ['春', '夏', '秋', '冬'];
const QUALITY = { high: '高', medium: '中', low: '低' };
const DIRS = ['北', '東北', '東', '東南', '南', '西南', '西', '西北'];

function drawBase(canvas, paper) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width,
    H = canvas.height;
  const sx = W / (MAP.x1 - MAP.x0),
    sz = H / (MAP.z1 - MAP.z0);
  const X = (x) => (x - MAP.x0) * sx,
    Z = (z) => (z - MAP.z0) * sz;
  // land / sea classification, block by block
  const step = paper ? 2 : 2;
  const img = ctx.createImageData(W, H);
  const d = img.data;
  const pal = paper
    ? { sea: [178, 205, 212], shallow: [200, 221, 222], sand: [229, 211, 160], rock: [176, 160, 140], land: [226, 218, 190], park: [205, 211, 170] }
    : { sea: [22, 44, 56], shallow: [34, 64, 76], sand: [150, 136, 100], rock: [84, 76, 68], land: [48, 56, 46], park: [58, 70, 50] };
  for (let py = 0; py < H; py += step) {
    for (let px = 0; px < W; px += step) {
      const x = MAP.x0 + (px + step / 2) / sx,
        z = MAP.z0 + (py + step / 2) / sz;
      const h = heightAt(x, z);
      let c;
      if (h < -1.2) c = pal.sea;
      else if (h < 0.02) c = pal.shallow;
      else {
        const cd = coastDist(x, z);
        if (cd < 42 && rockiness(x, z) < 0.5) c = pal.sand;
        else if (cd < 14) c = pal.rock;
        else c = cd < 90 || x > 236 ? pal.park : pal.land;
      }
      for (let yy = 0; yy < step; yy++)
        for (let xx = 0; xx < step; xx++) {
          const o = ((py + yy) * W + px + xx) * 4;
          d[o] = c[0];
          d[o + 1] = c[1];
          d[o + 2] = c[2];
          d[o + 3] = paper ? 255 : 235;
        }
    }
  }
  ctx.putImageData(img, 0, 0);

  // villas
  ctx.fillStyle = paper ? '#b4553a' : '#c0624a';
  for (const v of VILLAS) {
    ctx.save();
    ctx.translate(X(v.x), Z(v.z));
    ctx.rotate(-v.rot);
    ctx.fillRect((-v.w / 2) * sx, (-v.d / 2) * sz, v.w * sx, v.d * sz);
    ctx.restore();
  }
  // roads coloured by their tree
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (const pass of [0, 1]) {
    for (const r of ROADS) {
      ctx.beginPath();
      r.pts.forEach((p, i) => (i ? ctx.lineTo(X(p.x), Z(p.z)) : ctx.moveTo(X(p.x), Z(p.z))));
      if (pass === 0) {
        ctx.strokeStyle = paper ? '#fbf6ea' : 'rgba(244,236,220,0.9)';
        ctx.lineWidth = Math.max(2.2, r.half * 2 * sx * 1.25);
      } else {
        ctx.strokeStyle = TREE_COLOR[r.tree];
        ctx.lineWidth = Math.max(1.2, r.half * 2 * sx * 0.55);
      }
      ctx.stroke();
    }
  }
  // landmarks
  const star = (x, z, col) => {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(X(x), Z(z), paper ? 7 : 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = paper ? '#2a2622' : '#f4ecdc';
    ctx.lineWidth = paper ? 1.5 : 1;
    ctx.stroke();
  };
  star(LANDMARKS.huashi.x, LANDMARKS.huashi.z, '#8d8676');
  star(LANDMARKS.princess.x, LANDMARKS.princess.z, '#5fb3a8');

  if (paper) {
    ctx.fillStyle = '#2a2622';
    ctx.textBaseline = 'middle';
    const serif = '"Songti TC","Noto Serif TC","Noto Serif CJK TC","Source Han Serif TC","PMingLiU","Songti SC","SimSun","WenQuanYi Zen Hei",serif';
    for (const r of ROADS) {
      const tree = TREE_INFO[r.tree];
      ctx.font = `700 17px ${serif}`;
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(239,229,207,0.92)';
      const label = (txt, x, y, align = 'left') => {
        ctx.textAlign = align;
        ctx.strokeText(txt, x, y);
        ctx.fillText(txt, x, y);
      };
      if (r.kind === 'EW') {
        const p = r.pts[Math.floor(r.pts.length * 0.045)];
        ctx.fillStyle = '#2a2622';
        label(r.tc, X(p.x) - 8, Z(p.z) - 14);
        ctx.font = `13px ${serif}`;
        ctx.fillStyle = '#6b6258';
        label(tree.tc, X(p.x) + ctx.measureText(r.tc).width * 1.32, Z(p.z) - 14);
      } else if (r.kind === 'NS') {
        const p = r.pts[Math.floor(r.pts.length * 0.5)];
        // vertical label beside the road
        const chars = [...r.tc];
        ctx.fillStyle = '#2a2622';
        chars.forEach((ch, i) => label(ch, X(p.x) + 16, Z(p.z) - 152 + i * 19, 'center'));
        ctx.font = `13px ${serif}`;
        ctx.fillStyle = '#6b6258';
        [...tree.tc].forEach((ch, i) => label(ch, X(p.x) + 16, Z(p.z) - 152 + (chars.length + 0.6 + i) * 19 * 0.86 + 6, 'center'));
      } else {
        const p = r.pts[Math.floor(r.pts.length * 0.3)];
        ctx.fillStyle = '#2a2622';
        label(r.tc, X(p.x) + 14, Z(p.z) + 4);
        ctx.font = `13px ${serif}`;
        ctx.fillStyle = '#6b6258';
        label(tree.tc, X(p.x) + 14, Z(p.z) + 23);
      }
    }
    ctx.font = `700 17px ${serif}`;
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(239,229,207,0.92)';
    const place = (txt, x, z, col = '#2a2622', size = 17, italic = false) => {
      ctx.font = `${italic ? 'italic ' : '700 '}${size}px ${serif}`;
      ctx.textAlign = 'center';
      ctx.fillStyle = col;
      ctx.strokeText(txt, X(x), Z(z));
      ctx.fillText(txt, X(x), Z(z));
    };
    place('花石樓', LANDMARKS.huashi.x - 4, LANDMARKS.huashi.z + 20);
    place('公主樓', LANDMARKS.princess.x, LANDMARKS.princess.z - 16);
    place('第二海水浴場', -80, 192, '#7a6230');
    place('太平角', 352, 216, '#4a5a3a');
    ctx.strokeStyle = 'rgba(178,205,212,0.0)';
    place('太 平 灣', -40, 318, '#4d7480', 24);
    place('浮山灣', 488, 60, '#4d7480', 15);
    place('黃 海', 250, 366, '#4d7480', 15);
    // north arrow + scale
    ctx.strokeStyle = '#2a2622';
    ctx.fillStyle = '#2a2622';
    ctx.lineWidth = 1.5;
    const nx = W - 46,
      ny = 56;
    ctx.beginPath();
    ctx.moveTo(nx, ny - 26);
    ctx.lineTo(nx - 8, ny + 6);
    ctx.lineTo(nx, ny);
    ctx.lineTo(nx + 8, ny + 6);
    ctx.closePath();
    ctx.fill();
    ctx.font = `700 15px ${serif}`;
    ctx.textAlign = 'center';
    ctx.fillText('北', nx, ny + 22);
    ctx.beginPath();
    ctx.moveTo(40, H - 30);
    ctx.lineTo(40 + 100 * sx, H - 30);
    ctx.moveTo(40, H - 35);
    ctx.lineTo(40, H - 25);
    ctx.moveTo(40 + 100 * sx, H - 35);
    ctx.lineTo(40 + 100 * sx, H - 25);
    ctx.stroke();
    ctx.font = `12px ${serif}`;
    ctx.fillText('100 m', 40 + 50 * sx, H - 42);
  }
  return { X, Z, sx, sz };
}

export class HUD {
  constructor(app) {
    this.app = app;
    this.el = $('#hud');
    this.place = $('#place');
    this.placeKey = null;
    this.placeTimer = 0;
    this.tick = 0;
    this.hintTimer = 14;
    this.toastTimer = 0;
    this.started = false;

    // --- time of day
    const times = $('#times');
    PRESET_ORDER.forEach((k, i) => {
      const b = document.createElement('button');
      b.textContent = PRESETS[k].label.length > 2 ? PRESETS[k].label.slice(-2) : PRESETS[k].label;
      b.title = `${PRESETS[k].label} · ${PRESETS[k].en} (${i + 1})`;
      b.dataset.k = k;
      b.addEventListener('click', () => app.setPreset(k));
      times.appendChild(b);
    });
    // --- seasons
    const seasons = $('#seasons');
    SEASONS.forEach((s, i) => {
      const b = document.createElement('button');
      b.textContent = s;
      b.dataset.i = i;
      b.addEventListener('click', () => app.setSeason(i));
      seasons.appendChild(b);
    });
    // --- tools
    this.toolBtns = {};
    document.querySelectorAll('#tools button').forEach((b) => {
      this.toolBtns[b.dataset.act] = b;
      b.addEventListener('click', () => {
        const a = b.dataset.act;
        if (a === 'tour') app.toggleTour();
        else if (a === 'fly') app.toggleFly();
        else if (a === 'sound') app.toggleSound();
        else if (a === 'quality') app.cycleQuality();
        else if (a === 'help') this.toggle('help');
      });
    });
    document.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => this.toggle(b.dataset.close, false)));
    for (const id of ['bigmap', 'help'])
      $('#' + id).addEventListener('mousedown', (e) => {
        if (e.target.id === id) this.toggle(id, false);
      });

    // --- maps
    this.mini = $('#map canvas');
    this.miniBase = document.createElement('canvas');
    this.miniBase.width = this.mini.width;
    this.miniBase.height = this.mini.height;
    this.miniT = drawBase(this.miniBase, false);
    $('#map').addEventListener('click', () => this.toggle('bigmap'));
    this.big = $('#bigmap canvas');
    this.bigBase = null;
    this.big.addEventListener('click', (e) => {
      const r = this.big.getBoundingClientRect();
      const x = MAP.x0 + ((e.clientX - r.left) / r.width) * (MAP.x1 - MAP.x0),
        z = MAP.z0 + ((e.clientY - r.top) / r.height) * (MAP.z1 - MAP.z0);
      if (heightAt(x, z) < 0.3) return this.toast('那裡是海');
      this.toggle('bigmap', false);
      app.teleport(Math.min(Math.max(x, PLAY.minX + 2), PLAY.maxX - 2), Math.min(Math.max(z, PLAY.minZ + 2), PLAY.maxZ - 2));
    });
    const lg = $('#legend');
    const seen = new Set();
    for (const r of ROADS) {
      if (seen.has(r.tree)) continue;
      seen.add(r.tree);
      const names = ROADS.filter((q) => q.tree === r.tree)
        .map((q) => q.tc)
        .join('、');
      const s = document.createElement('span');
      const sw = document.createElement('i');
      sw.style.background = TREE_COLOR[r.tree];
      s.append(sw, `${TREE_INFO[r.tree].tc} — ${names}`);
      lg.appendChild(s);
    }

    // --- touch helpers (decided up front where possible, so nothing shifts under a first tap)
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) document.body.classList.add('touch');
    window.addEventListener(
      'touchstart',
      () => {
        document.body.classList.add('touch');
      },
      { once: true, passive: true }
    );
    document.querySelectorAll('[data-touch]').forEach((b) => {
      const v = b.dataset.touch === 'up' ? 1 : -1;
      const on = (e) => {
        e.preventDefault();
        if (app.player.mode !== 'fly') app.toggleFly();
        app.player.vertical = v;
      };
      const off = () => (app.player.vertical = 0);
      b.addEventListener('touchstart', on, { passive: false });
      b.addEventListener('touchend', off);
      b.addEventListener('touchcancel', off);
    });
    this.stick = $('#stick i');

    this.syncButtons();
  }

  get overlayOpen() {
    return $('#bigmap').classList.contains('on') || $('#help').classList.contains('on');
  }

  toggle(id, force) {
    const el = $('#' + id);
    const on = force ?? !el.classList.contains('on');
    if (on) {
      for (const o of ['bigmap', 'help']) if (o !== id) $('#' + o).classList.remove('on');
      if (id === 'bigmap') {
        if (!this.bigBase) {
          this.bigBase = document.createElement('canvas');
          this.bigBase.width = this.big.width;
          this.bigBase.height = this.big.height;
          this.bigT = drawBase(this.bigBase, true);
        }
        this.drawBig();
      }
      if (document.pointerLockElement) document.exitPointerLock();
    }
    el.classList.toggle('on', on);
    this.app.player.enabled = this.app.started && !this.overlayOpen && !this.app.tour.active;
  }

  start() {
    this.started = true;
    this.el.classList.add('on');
    this.hintTimer = 16;
  }

  toast(text, seconds = 2.4) {
    const t = $('#toast');
    t.textContent = text;
    t.classList.add('on');
    this.toastTimer = seconds;
  }

  setPhoto(on) {
    this.el.classList.toggle('photo', on);
    document.body.classList.toggle('photo', on);
  }

  syncButtons() {
    const app = this.app;
    document.querySelectorAll('#times button').forEach((b) => b.classList.toggle('on', b.dataset.k === app.atmosphere.name));
    document.querySelectorAll('#seasons button').forEach((b) => b.classList.toggle('on', Number(b.dataset.i) === app.season));
    const t = this.toolBtns;
    t.tour.classList.toggle('on', app.tour.active && this.started);
    t.fly.classList.toggle('on', app.player.mode === 'fly');
    t.fly.textContent = app.player.mode === 'fly' ? '步行' : '飛行';
    t.sound.classList.toggle('on', app.audio.enabled);
    t.quality.textContent = '畫質·' + QUALITY[app.quality];
    $('#modeLabel').textContent = app.tour.active ? '導覽中' : app.player.mode === 'fly' ? '飛行' : '步行';
  }

  _marker(ctx, T, x, z, heading, scale) {
    ctx.save();
    ctx.translate(T.X(x), T.Z(z));
    ctx.rotate((heading * Math.PI) / 180);
    ctx.fillStyle = '#ffd35c';
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1.5 * scale;
    ctx.beginPath();
    ctx.moveTo(0, -11 * scale);
    ctx.lineTo(7 * scale, 8 * scale);
    ctx.lineTo(0, 4 * scale);
    ctx.lineTo(-7 * scale, 8 * scale);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  drawBig() {
    if (!this.bigBase) return;
    const ctx = this.big.getContext('2d');
    ctx.drawImage(this.bigBase, 0, 0);
    const c = this.app.camera.position;
    this._marker(ctx, this.bigT, c.x, c.z, this._heading(), 1.5);
  }

  _heading() {
    const d = this.app.camera.getWorldDirection(this._v || (this._v = this.app.camera.position.clone()));
    return ((Math.atan2(d.x, -d.z) * 180) / Math.PI + 360) % 360;
  }

  update(dt) {
    const app = this.app;
    if (this.toastTimer > 0) {
      this.toastTimer -= dt;
      if (this.toastTimer <= 0) $('#toast').classList.remove('on');
    }
    if (!this.started) return;
    // virtual stick knob follows the thumb every frame
    const tm = app.player.touchMove;
    if (this.stick) {
      const dx = tm.id >= 0 ? Math.max(-32, Math.min(32, tm.x - tm.x0)) : 0,
        dy = tm.id >= 0 ? Math.max(-32, Math.min(32, tm.y - tm.y0)) : 0;
      this.stick.style.transform = `translate(${dx}px, ${dy}px)`;
    }
    if (this.hintTimer > 0) {
      this.hintTimer -= dt;
      if (this.hintTimer <= 0) $('#hint').classList.add('off');
    }
    this.tick -= dt;
    if (this.tick > 0) return;
    this.tick = 0.2;
    const c = app.camera.position;
    const heading = this._heading();

    // --- where are we?
    let key = null,
      name = '',
      en = '',
      note = '',
      lead = '';
    const high = c.y - Math.max(heightAt(c.x, c.z), 0) > 45;
    if (!high) {
      for (const p of POIS) {
        if (Math.hypot(c.x - p.x, c.z - p.z) < p.r) {
          const onRoad = nearestRoad(c.x, c.z, 6);
          if (p.id === 'beach' && (coastDist(c.x, c.z) > 47 || onRoad)) continue;
          key = p.id;
          name = p.tc;
          en = p.en;
          note = p.sub;
          break;
        }
      }
      if (!key) {
        const nr = nearestRoad(c.x, c.z, 11);
        if (nr) {
          const r = nr.road,
            t = TREE_INFO[r.tree];
          key = r.id;
          name = r.tc;
          en = r.en;
          lead = t.tc;
          note = t.note;
        }
      }
    }
    if (key !== this.placeKey) {
      this.placeKey = key;
      this.place.classList.remove('show');
      clearTimeout(this._pt);
      if (key) {
        this._pt = setTimeout(() => {
          this.place.querySelector('.name').textContent = name;
          this.place.querySelector('.en').textContent = en;
          const noteEl = this.place.querySelector('.note');
          noteEl.textContent = '';
          if (lead) {
            const b = document.createElement('b');
            b.textContent = lead;
            noteEl.append(b);
          }
          noteEl.append(note);
          this.place.classList.add('show');
        }, 650);
      }
    }

    // --- compass, minimap
    $('#compass').textContent = DIRS[Math.round(heading / 45) % 8];
    const ctx = this.mini.getContext('2d');
    ctx.clearRect(0, 0, this.mini.width, this.mini.height);
    ctx.drawImage(this.miniBase, 0, 0);
    this._marker(ctx, this.miniT, c.x, c.z, heading, 1.5);
    if ($('#bigmap').classList.contains('on')) this.drawBig();
  }
}
