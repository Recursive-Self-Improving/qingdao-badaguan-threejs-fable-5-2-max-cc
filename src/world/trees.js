// Trees. Every species of Badaguan's "one pass, one tree" planting is grown procedurally:
// a tapering trunk-and-limb skeleton, plus a crown made of thousands of instanced leaf cards
// that sway in the wind, glow when back-lit and thin out with distance.

import * as THREE from 'three';
import { RNG, clamp, lerp, smoothstep, saturate, TAU } from '../core/math.js';
import { GeoBuilder } from '../core/geo.js';
import { leafAtlas, barkTextures } from '../core/textures.js';
import { patchMaterial, injectAtmos } from './atmosphere.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const _t = V(),
  _n = V(),
  _b = V(),
  _ref = V(),
  _q = new THREE.Quaternion(),
  _q2 = new THREE.Quaternion(),
  _m = new THREE.Matrix4(),
  _m2 = new THREE.Matrix4(),
  _x = V(),
  _y = V(),
  _z = V(),
  Z = V(0, 0, 1),
  UP = V(0, 1, 0);

// ---------------------------------------------------------------------------------------------
// Skeleton helpers
// ---------------------------------------------------------------------------------------------
function tube(g, pts, sides, uRepeat = 2) {
  const a0 = pts[0],
    a1 = pts[pts.length - 1];
  _ref.set(0, 0, 1);
  if (Math.abs(a1.z - a0.z) > Math.hypot(a1.x - a0.x, a1.y - a0.y)) _ref.set(1, 0, 0);
  const rings = [];
  let vAcc = 0;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i],
      a = pts[Math.max(0, i - 1)],
      b = pts[Math.min(pts.length - 1, i + 1)];
    _t.set(b.x - a.x, b.y - a.y, b.z - a.z).normalize();
    _n.crossVectors(_t, _ref).normalize();
    _b.crossVectors(_t, _n).normalize();
    if (i > 0) vAcc += Math.hypot(p.x - pts[i - 1].x, p.y - pts[i - 1].y, p.z - pts[i - 1].z);
    rings.push(g.n);
    for (let j = 0; j <= sides; j++) {
      const ang = (j / sides) * TAU;
      const c = Math.cos(ang),
        s = Math.sin(ang);
      const nx = _n.x * c + _b.x * s,
        ny = _n.y * c + _b.y * s,
        nz = _n.z * c + _b.z * s;
      g.vert(p.x + nx * p.r, p.y + ny * p.r, p.z + nz * p.r, nx, ny, nz, (j / sides) * uRepeat, vAcc * 0.45);
    }
  }
  for (let i = 0; i < rings.length - 1; i++) {
    for (let j = 0; j < sides; j++) {
      const a = rings[i] + j,
        b = rings[i + 1] + j;
      g.tri(a, a + 1, b);
      g.tri(a + 1, b + 1, b);
    }
  }
}

// quadratic Bézier limb from p0 via control c to p1, sampled into a tapering tube path
function limbPath(p0, c, p1, r0, r1, segs = 4) {
  const pts = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs,
      u = 1 - t;
    pts.push({
      x: u * u * p0.x + 2 * u * t * c.x + t * t * p1.x,
      y: u * u * p0.y + 2 * u * t * c.y + t * t * p1.y,
      z: u * u * p0.z + 2 * u * t * c.z + t * t * p1.z,
      r: lerp(r0, r1, Math.pow(t, 0.8)),
    });
  }
  return pts;
}
function along(pts, t) {
  const f = clamp(t, 0, 1) * (pts.length - 1);
  const i = Math.min(Math.floor(f), pts.length - 2);
  const k = f - i;
  return { x: lerp(pts[i].x, pts[i + 1].x, k), y: lerp(pts[i].y, pts[i + 1].y, k), z: lerp(pts[i].z, pts[i + 1].z, k), r: lerp(pts[i].r, pts[i + 1].r, k) };
}
function randDir(rng, out) {
  const u = rng.range(-1, 1),
    a = rng.range(0, TAU);
  const s = Math.sqrt(1 - u * u);
  return out.set(Math.cos(a) * s, u, Math.sin(a) * s);
}

// card: position, orientation (quaternion), size, shading normal, ao, random, hue
function pushCard(cards, pos, quat, sx, sy, sn, ao, rng) {
  cards.push({ x: pos.x, y: pos.y, z: pos.z, qx: quat.x, qy: quat.y, qz: quat.z, qw: quat.w, sx, sy, nx: sn.x, ny: sn.y, nz: sn.z, ao, rand: rng.next(), hue: rng.next() });
}
function facing(normal, roll) {
  _q.setFromUnitVectors(Z, normal);
  _q2.setFromAxisAngle(Z, roll);
  return _q.multiply(_q2);
}

// ---------------------------------------------------------------------------------------------
// Generators
// ---------------------------------------------------------------------------------------------
function makeBroadleaf(rng, P) {
  const g = new GeoBuilder();
  const cards = [];
  const H = P.height * rng.range(0.92, 1.08),
    th = P.trunkH * rng.range(0.9, 1.1),
    tr = P.trunkR;
  const leanA = rng.range(0, TAU),
    leanM = rng.range(0, P.lean ?? 0.25);
  const lx = Math.cos(leanA) * leanM,
    lz = Math.sin(leanA) * leanM;
  const trunkTop = P.leader ? H * 0.93 : th;
  const tp = [{ x: 0, y: -0.5, z: 0, r: tr * 1.5 }];
  const nSeg = P.leader ? 7 : 3;
  for (let i = 0; i <= nSeg; i++) {
    const t = i / nSeg;
    const y = trunkTop * t;
    const wob = Math.sin(t * Math.PI * 1.3) * 0.12 * (P.wobble ?? 1);
    tp.push({
      x: lx * y * 0.12 + wob * lz * 2,
      y,
      z: lz * y * 0.12 - wob * lx * 2,
      r: i === 0 ? tr * 1.3 : lerp(tr, P.leader ? tr * 0.16 : tr * 0.78, Math.pow(t, P.leader ? 0.9 : 1)),
    });
  }
  tube(g, tp, P.sides ?? 7, 2);

  const nodes = [];
  const crownR = P.crownR * rng.range(0.92, 1.08);
  const crownMidY = th + (H - th) * 0.52;
  const crownHalfH = (H - th) * 0.56;
  // point of the trunk path at height y (tp[0] is the buried root, tp[1..] rise evenly to trunkTop)
  const topAt = (y) => along(tp, (1 + (y / trunkTop) * nSeg) / (nSeg + 1));

  const nL = P.limbs;
  const az0 = rng.range(0, TAU);
  for (let i = 0; i < nL; i++) {
    const az = az0 + (i / nL) * TAU + rng.range(-0.3, 0.3);
    const ca = Math.cos(az),
      sa = Math.sin(az);
    let p0, p1, c;
    if (P.leader) {
      // whorled, ascending limbs along a central leader (ginkgo)
      const hf = (i + rng.range(0.1, 0.9)) / nL;
      const y0 = lerp(th, trunkTop * 0.86, hf);
      const b = topAt(y0);
      const prof = Math.pow(Math.sin(Math.PI * (0.22 + 0.74 * hf)), 0.7);
      const reach = crownR * prof * rng.range(0.85, 1.1);
      const rise = reach * Math.tan(P.limbEl) * rng.range(0.8, 1.15);
      p0 = { x: b.x, y: y0, z: b.z, r: b.r };
      p1 = { x: b.x + ca * reach, y: Math.min(y0 + rise, H * 0.97), z: b.z + sa * reach };
      c = { x: b.x + ca * reach * 0.6, y: y0 + rise * 0.25, z: b.z + sa * reach * 0.6 };
    } else {
      // a few big limbs forking from the head of the trunk, arching up and out
      const b = tp[tp.length - 1];
      const reach = crownR * rng.range(0.55, 0.9);
      const top = lerp(th + (H - th) * 0.72, H * 0.98, rng.next());
      p0 = { x: b.x, y: th * rng.range(0.9, 1.0), z: b.z, r: b.r };
      p1 = { x: b.x + ca * reach, y: top, z: b.z + sa * reach };
      const up = (H - th) * (P.arch ?? 0.6);
      c = { x: b.x + ca * reach * 0.25, y: th + up, z: b.z + sa * reach * 0.25 };
    }
    const r0 = p0.r * (P.limbR ?? 0.62);
    const pts = limbPath(p0, c, p1, r0, Math.max(r0 * 0.16, 0.02), 3);
    tube(g, pts, 4, 1.5);
    for (const t of [0.62, 0.86, 1.0]) nodes.push(along(pts, t));
    for (let s = 0; s < (P.subs ?? 2); s++) {
      const t = rng.range(0.35, 0.8);
      const b0 = along(pts, t);
      const az2 = az + rng.sign() * rng.range(0.5, 1.3);
      const l2 = crownR * rng.range(0.35, 0.6);
      const e = { x: b0.x + Math.cos(az2) * l2, y: b0.y + l2 * rng.range(0.25, 0.8), z: b0.z + Math.sin(az2) * l2 };
      const cc = { x: (b0.x + e.x) / 2, y: b0.y + (e.y - b0.y) * 0.25, z: (b0.z + e.z) / 2 };
      const sp = limbPath(b0, cc, e, b0.r * 0.6, 0.02, 2);
      tube(g, sp, 3, 1);
      nodes.push(along(sp, 0.7), along(sp, 1));
    }
  }
  if (P.leader) nodes.push({ x: tp[tp.length - 1].x, y: H * 0.95, z: tp[tp.length - 1].z });

  const per = Math.max(1, Math.round(P.cards / nodes.length));
  const d = V(),
    pos = V(),
    nrm = V(),
    sn = V(),
    jit = V();
  for (const node of nodes) {
    for (let k = 0; k < per; k++) {
      randDir(rng, d);
      d.y = d.y * 0.85 + 0.12;
      d.normalize();
      const rr = P.puffR * rng.range(0.4, 1.0);
      pos.set(node.x + d.x * rr, node.y + d.y * rr * 0.8, node.z + d.z * rr);
      // keep inside the species' silhouette
      const hr = Math.hypot(pos.x, pos.z);
      if (hr > crownR * 1.12) {
        pos.x *= (crownR * 1.12) / hr;
        pos.z *= (crownR * 1.12) / hr;
      }
      pos.y = clamp(pos.y, th * 0.92, H * 1.04);
      randDir(rng, jit);
      nrm.copy(d).addScaledVector(jit, 0.75).normalize();
      const q = facing(nrm, rng.range(0, TAU));
      sn.set(pos.x / crownR, (pos.y - crownMidY) / crownHalfH, pos.z / crownR);
      const rel = sn.length();
      sn.normalize().multiplyScalar(0.7).addScaledVector(d, 0.3);
      sn.y += 0.18;
      sn.normalize();
      const ao = lerp(0.42, 1, smoothstep(0.3, 1.0, rel)) * lerp(0.74, 1, saturate(sn.y * 0.7 + 0.6));
      const s = P.cardSize * rng.range(0.82, 1.22);
      pushCard(cards, pos, q, s, s, sn, ao, rng);
    }
  }
  return { geo: g.build(), cards, height: H, crownR };
}

function makeCedar(rng, P) {
  const g = new GeoBuilder();
  const cards = [];
  const H = P.height * rng.range(0.88, 1.1);
  const clear = P.clear;
  const baseR = P.baseR * rng.range(0.9, 1.1);
  const lx = rng.range(-0.02, 0.02),
    lz = rng.range(-0.02, 0.02);
  const tp = [{ x: 0, y: -0.5, z: 0, r: P.trunkR * 1.5 }];
  for (let i = 0; i <= 6; i++) {
    const t = i / 6;
    tp.push({ x: lx * H * t, y: H * 0.985 * t, z: lz * H * t, r: lerp(P.trunkR * (i === 0 ? 1.25 : 1), 0.03, Math.pow(t, 0.85)) });
  }
  tube(g, tp, 8, 2);
  const pos = V(),
    sn = V();
  let tier = 0;
  for (let y = clear; y < H * 0.96; y += lerp(0.8, 0.6, (y - clear) / (H - clear))) {
    const f = (y - clear) / (H - clear);
    const R = baseR * Math.pow(1 - f, 0.82) * rng.range(0.86, 1.1) + 0.3;
    const n = Math.round(lerp(7, 4, f));
    const off = tier * 1.1 + rng.range(0, 1);
    tier++;
    for (let i = 0; i < n; i++) {
      const az = off + (i / n) * TAU + rng.range(-0.25, 0.25);
      const L = R * rng.range(0.85, 1.1);
      // drooping tips, but never lower than the clearance this tree keeps over the ground
      const maxDroop = Math.asin(clamp((y - P.minTip) / L, 0, 0.55));
      let droop = Math.min(rng.range(0.16, 0.36) + (1 - f) * 0.12, maxDroop);
      // where there is no room to hang, sweep the limb up a little so limbs do not line up
      if (maxDroop < 0.14) droop = rng.range(-0.24, maxDroop);
      // basis: X = along the branch (out and slightly down), Y = across, Z = normal
      _x.set(Math.cos(az) * Math.cos(droop), -Math.sin(droop), Math.sin(az) * Math.cos(droop));
      _y.set(-Math.sin(az), 0, Math.cos(az));
      // roll the frond a little about its own axis
      _q2.setFromAxisAngle(_x, rng.range(-0.35, 0.35));
      _y.applyQuaternion(_q2);
      _z.crossVectors(_x, _y).normalize();
      _m.makeBasis(_x, _y, _z);
      _q.setFromRotationMatrix(_m);
      pos.set(lx * y + _x.x * L * 0.5, y + _x.y * L * 0.5, lz * y + _x.z * L * 0.5);
      sn.set(Math.cos(az) * 0.5, 0.8, Math.sin(az) * 0.5).normalize();
      pushCard(cards, pos, _q, L * 1.1, clamp(L * 0.95, 1.3, 4.0), sn, rng.range(0.82, 1), rng);
    }
  }
  // the leader
  for (let i = 0; i < 2; i++) {
    _x.set(0, 1, 0);
    _y.set(Math.cos(i * 1.57), 0, Math.sin(i * 1.57));
    _z.crossVectors(_x, _y).normalize();
    _m.makeBasis(_x, _y, _z);
    _q.setFromRotationMatrix(_m);
    pos.set(lx * H, H * 0.94, lz * H);
    pushCard(cards, pos, _q, 1.9, 1.0, UP, 1, rng);
  }
  return { geo: g.build(), cards, height: H, crownR: baseR };
}

function makePine(rng, P) {
  const g = new GeoBuilder();
  const cards = [];
  const H = P.height * rng.range(0.8, 1.2);
  const leanA = rng.range(-0.5, 0.5); // archetype's own lean; instances add a shared wind lean
  const lean = rng.range(0.1, 0.32) * H;
  const tp = [{ x: 0, y: -0.5, z: 0, r: P.trunkR * 1.5 }];
  const S = rng.range(-0.5, 0.5);
  for (let i = 0; i <= 5; i++) {
    const t = i / 5;
    const bend = Math.sin(t * Math.PI) * S * 0.9;
    tp.push({
      x: Math.cos(leanA) * lean * t * t - Math.sin(leanA) * bend,
      y: H * 0.93 * t,
      z: Math.sin(leanA) * lean * t * t + Math.cos(leanA) * bend,
      r: lerp(P.trunkR * (i === 0 ? 1.25 : 1), P.trunkR * 0.3, t),
    });
  }
  tube(g, tp, 7, 2);
  const pads = [];
  const nB = rng.int(5, 8);
  for (let i = 0; i < nB; i++) {
    const hf = lerp(0.42, 0.98, (i + rng.next()) / nB);
    const b = along(tp, (hf * 5 + 1) / 6);
    const az = rng.range(0, TAU);
    const len = rng.range(1.4, 3.3) * (0.6 + hf * 0.6) * (H / 9);
    const e = { x: b.x + Math.cos(az) * len, y: b.y + len * rng.range(0.05, 0.35), z: b.z + Math.sin(az) * len };
    const c = { x: (b.x + e.x) / 2, y: b.y + (e.y - b.y) * 0.1, z: (b.z + e.z) / 2 };
    const pts = limbPath(b, c, e, b.r * 0.55, 0.03, 2);
    tube(g, pts, 3, 1);
    pads.push(e, along(pts, 0.6));
  }
  pads.push({ x: tp[6].x, y: H * 0.97, z: tp[6].z });
  const pos = V(),
    nrm = V(),
    sn = V(),
    jit = V();
  const per = Math.max(2, Math.round(P.cards / pads.length));
  const cx = tp[6].x * 0.6,
    cz = tp[6].z * 0.6;
  for (const pad of pads) {
    for (let k = 0; k < per; k++) {
      const a = rng.range(0, TAU),
        r = rng.range(0, 0.95) * (H / 9);
      pos.set(pad.x + Math.cos(a) * r, pad.y + rng.range(-0.25, 0.4), pad.z + Math.sin(a) * r);
      randDir(rng, jit);
      // mostly flat pads, a few upright cards for side-on volume
      if (k % 4 === 3) nrm.set(Math.cos(a), 0.15, Math.sin(a)).normalize();
      else nrm.set(jit.x * 0.42, 1, jit.z * 0.42).normalize();
      const q = facing(nrm, rng.range(0, TAU));
      sn.set(pos.x - cx, 0, pos.z - cz).normalize().multiplyScalar(0.45);
      sn.y = 0.85;
      sn.normalize();
      const s = P.cardSize * rng.range(0.85, 1.25) * (H / 9);
      pushCard(cards, pos, q, s, s, sn, rng.range(0.78, 1), rng);
    }
  }
  return { geo: g.build(), cards, height: H, crownR: 3.2 * (H / 9) };
}

function makeJuniper(rng, P) {
  const g = new GeoBuilder();
  const cards = [];
  const H = P.height * rng.range(0.85, 1.15),
    R = P.radius * rng.range(0.9, 1.1);
  tube(
    g,
    [
      { x: 0, y: -0.4, z: 0, r: 0.16 },
      { x: 0, y: 0.5, z: 0, r: 0.12 },
      { x: 0, y: H * 0.6, z: 0, r: 0.05 },
    ],
    6,
    1
  );
  const pos = V(),
    sn = V();
  const n = P.cards;
  const twist = rng.sign() * rng.range(0.4, 0.7);
  for (let i = 0; i < n; i++) {
    const t = (i + rng.next()) / n;
    const y = 0.35 + t * (H - 0.5);
    const r = R * (0.5 + 0.5 * Math.sin(Math.PI * Math.min(t * 1.45, 1))) * (1 - smoothstep(0.62, 1.0, t) * 0.82);
    const az = i * 2.39996 + rng.range(-0.2, 0.2);
    const tilt = 0.35 + t * 0.5;
    _z.set(Math.cos(az) * Math.cos(tilt), Math.sin(tilt), Math.sin(az) * Math.cos(tilt)).normalize();
    _y.set(0, 1, 0).addScaledVector(_z, -_z.y).normalize();
    _q2.setFromAxisAngle(_z, twist);
    _y.applyQuaternion(_q2);
    _x.crossVectors(_y, _z).normalize();
    _m.makeBasis(_x, _y, _z);
    _q.setFromRotationMatrix(_m);
    pos.set(Math.cos(az) * r * 0.62, y, Math.sin(az) * r * 0.62);
    sn.set(Math.cos(az) * 0.85, 0.4, Math.sin(az) * 0.85).normalize();
    const s = lerp(1.5, 1.0, t) * (R / 1.2);
    pushCard(cards, pos, _q, s * 1.1, s * 1.55, sn, rng.range(0.72, 1), rng);
  }
  return { geo: g.build(), cards, height: H, crownR: R };
}

function makeBush(rng, P) {
  const cards = [];
  const R = P.radius * rng.range(0.85, 1.2),
    H = P.height * rng.range(0.85, 1.2);
  const pos = V(),
    nrm = V(),
    sn = V(),
    jit = V();
  for (let i = 0; i < P.cards; i++) {
    randDir(rng, nrm);
    nrm.y = Math.abs(nrm.y) * 0.9 + 0.1;
    nrm.normalize();
    const rr = rng.range(0.55, 1);
    pos.set(nrm.x * R * rr, 0.12 + nrm.y * H * rr, nrm.z * R * rr);
    randDir(rng, jit);
    sn.copy(nrm);
    nrm.addScaledVector(jit, 0.5).normalize();
    const q = facing(nrm, rng.range(0, TAU));
    const s = P.cardSize * rng.range(0.85, 1.2);
    pushCard(cards, pos, q, s, s, sn, lerp(0.6, 1, saturate(pos.y / H)), rng);
  }
  return { geo: null, cards, height: H, crownR: R };
}

// ---------------------------------------------------------------------------------------------
// Species
// ---------------------------------------------------------------------------------------------
const hex = (h) => new THREE.Color(h);

// palette per season: [A, B, accent, accentAmount, density, translucency]
// seasons: 0 spring · 1 summer · 2 autumn · 3 winter
function pal(a, b, c, amt, density, trans) {
  return { a: hex(a), b: hex(b), c: hex(c), amt, density, trans };
}
export const SPECIES = {
  ginkgo: {
    bark: 'ginkgo', leaf: 'ginkgo', variants: 3, trunkR: 0.25, deciduous: true,
    gen: (r) => makeBroadleaf(r, { height: 13.5, trunkH: 3.1, trunkR: 0.25, leader: true, limbs: 10, limbEl: 0.72, crownR: 3.5, puffR: 1.3, subs: 1, cards: 112, cardSize: 1.55, lean: 0.12, wobble: 0.5 }),
    seasons: [pal(0x9fbf45, 0xb5cf58, 0x86ad3a, 0.2, 0.85, 0.8), pal(0x4f8a2e, 0x64993a, 0x3f7628, 0.2, 1, 0.6), pal(0xe6b21c, 0xf2cf3e, 0xc4a626, 0.14, 0.9, 0.95), pal(0xb89a3a, 0xb89a3a, 0xb89a3a, 0, 0.0, 0.3)],
  },
  maple: {
    bark: 'furrow', leaf: 'maple', variants: 3, trunkR: 0.2, deciduous: true,
    gen: (r) => makeBroadleaf(r, { height: 9.5, trunkH: 2.5, trunkR: 0.2, limbs: 5, crownR: 4.2, puffR: 1.45, subs: 2, cards: 98, cardSize: 1.65, arch: 0.5 }),
    seasons: [pal(0x9dbb4a, 0xb4c85a, 0xc98a4a, 0.15, 0.85, 0.8), pal(0x4c8030, 0x5e9038, 0x3d6c28, 0.2, 1, 0.6), pal(0xd8641a, 0xb8301a, 0xe3a628, 0.3, 0.9, 0.85), pal(0x8a5a3a, 0x8a5a3a, 0x8a5a3a, 0, 0.0, 0.3)],
  },
  plane: {
    bark: 'plane', leaf: 'plane', variants: 3, trunkR: 0.42, deciduous: true,
    gen: (r) => makeBroadleaf(r, { height: 16.5, trunkH: 4.2, trunkR: 0.42, limbs: 4, crownR: 7.2, puffR: 2.35, subs: 3, cards: 110, cardSize: 2.65, arch: 0.72, limbR: 0.7, sides: 10 }),
    seasons: [pal(0xa3c04e, 0xb6cf5e, 0x8fb040, 0.2, 0.8, 0.8), pal(0x4a7d30, 0x5d8f3a, 0x416f2a, 0.2, 1, 0.55), pal(0xb48a30, 0x8e6a2a, 0x7e8a38, 0.3, 0.74, 0.7), pal(0x8a6a3a, 0x8a6a3a, 0x8a6a3a, 0, 0.04, 0.3)],
  },
  broad: {
    bark: 'furrow', leaf: 'oval', variants: 3, trunkR: 0.22, deciduous: true,
    gen: (r) => makeBroadleaf(r, { height: 10.5, trunkH: 2.6, trunkR: 0.22, limbs: 5, crownR: 4.1, puffR: 1.5, subs: 2, cards: 66, cardSize: 1.95, arch: 0.6 }),
    seasons: [pal(0x8fb845, 0xa5c955, 0x7aa63a, 0.2, 0.85, 0.75), pal(0x3f7329, 0x528634, 0x356524, 0.2, 1, 0.5), pal(0x4f7a2c, 0x6a8a30, 0xb09a2c, 0.2, 0.92, 0.6), pal(0x6a5a3a, 0x6a5a3a, 0x6a5a3a, 0, 0.0, 0.3)],
  },
  peach: {
    bark: 'furrow', leaf: 'oval', variants: 2, trunkR: 0.11, deciduous: true,
    gen: (r) => makeBroadleaf(r, { height: 4.3, trunkH: 0.95, trunkR: 0.11, limbs: 4, crownR: 2.25, puffR: 0.86, subs: 2, cards: 84, cardSize: 1.08, arch: 0.45, sides: 6 }),
    seasons: [pal(0xf29ab8, 0xf7b9cf, 0xe0668f, 0.25, 0.95, 0.9), pal(0x4d7f2e, 0x5f9036, 0x3f6e28, 0.2, 1, 0.55), pal(0xc98a2a, 0xb55c22, 0x8a9038, 0.3, 0.52, 0.75), pal(0x6a4a3a, 0x6a4a3a, 0x6a4a3a, 0, 0.0, 0.3)],
    blossom: [1, 0, 0, 0],
  },
  crabapple: {
    bark: 'furrow', leaf: 'oval', variants: 2, trunkR: 0.12, deciduous: true,
    gen: (r) => makeBroadleaf(r, { height: 5.3, trunkH: 1.5, trunkR: 0.12, limbs: 5, crownR: 1.95, puffR: 0.84, subs: 1, cards: 75, cardSize: 1.05, arch: 0.75, sides: 6 }),
    seasons: [pal(0xf6c9d6, 0xfbe3ea, 0xe98aa8, 0.3, 0.95, 0.9), pal(0x4a7c2d, 0x5c8e36, 0x3c6b27, 0.2, 1, 0.55), pal(0xd29a28, 0xc56a20, 0xa82018, 0.2, 0.6, 0.75), pal(0x6a4a3a, 0x6a4a3a, 0x6a4a3a, 0, 0.0, 0.3)],
    blossom: [1, 0, 0, 0],
  },
  crape: {
    bark: 'smooth', leaf: 'oval', variants: 2, trunkR: 0.09, deciduous: true,
    gen: (r) => makeBroadleaf(r, { height: 4.5, trunkH: 0.55, trunkR: 0.1, limbs: 4, crownR: 1.95, puffR: 0.78, subs: 2, cards: 46, cardSize: 0.92, arch: 0.8, sides: 6 }),
    seasons: [pal(0x9aba4a, 0xafcb58, 0x86a83c, 0.2, 0.8, 0.8), pal(0x4b7d2e, 0xd85a9e, 0xc23f8a, 0.42, 1, 0.6), pal(0xcf5c20, 0xb53a1a, 0xdb962a, 0.3, 0.62, 0.8), pal(0x8a6a5a, 0x8a6a5a, 0x8a6a5a, 0, 0.0, 0.3)],
  },
  cedar: {
    bark: 'cedar', leaf: 'cedar', variants: 3, trunkR: 0.34, deciduous: false, uvAO: 1,
    gen: (r) => makeCedar(r, { height: 18, clear: 3.3, minTip: 2.8, baseR: 5.0, trunkR: 0.34 }),
    seasons: [pal(0x34543f, 0x456650, 0x6a8a66, 0.3, 1, 0.2), pal(0x2f4e3a, 0x3f5f4a, 0x587a5c, 0.3, 1, 0.2), pal(0x2e4a39, 0x3e5c49, 0x567259, 0.3, 1, 0.2), pal(0x2b4636, 0x3a5746, 0x506b54, 0.3, 1, 0.2)],
  },
  cedarLow: {
    bark: 'cedar', leaf: 'cedar', variants: 2, trunkR: 0.3, deciduous: false, uvAO: 1,
    gen: (r) => makeCedar(r, { height: 14, clear: 1.5, minTip: 0.5, baseR: 4.4, trunkR: 0.3 }),
    seasons: [pal(0x34543f, 0x456650, 0x6a8a66, 0.3, 1, 0.2), pal(0x2f4e3a, 0x3f5f4a, 0x587a5c, 0.3, 1, 0.2), pal(0x2e4a39, 0x3e5c49, 0x567259, 0.3, 1, 0.2), pal(0x2b4636, 0x3a5746, 0x506b54, 0.3, 1, 0.2)],
  },
  pine: {
    bark: 'pine', leaf: 'pine', variants: 4, trunkR: 0.2, deciduous: false,
    gen: (r) => makePine(r, { height: 9, trunkR: 0.2, cards: 50, cardSize: 2.05 }),
    seasons: [pal(0x2a4a2c, 0x36592f, 0x5a7a3a, 0.25, 1, 0.2), pal(0x25432a, 0x31532f, 0x496a38, 0.25, 1, 0.2), pal(0x24402a, 0x304f30, 0x47633a, 0.25, 1, 0.2), pal(0x223c28, 0x2c4a2d, 0x415c36, 0.25, 1, 0.2)],
  },
  juniper: {
    bark: 'cedar', leaf: 'juniper', variants: 3, trunkR: 0.14, deciduous: false,
    gen: (r) => makeJuniper(r, { height: 6.4, radius: 1.25, cards: 44 }),
    seasons: [pal(0x24482d, 0x315a38, 0x4a7446, 0.25, 1, 0.12), pal(0x20422b, 0x2d5535, 0x3f6841, 0.25, 1, 0.12), pal(0x1f4029, 0x2b5133, 0x3b623e, 0.25, 1, 0.12), pal(0x1d3c27, 0x284c30, 0x375b3a, 0.25, 1, 0.12)],
  },
  bush: {
    bark: null, leaf: 'dense', variants: 3, trunkR: 0, deciduous: false,
    gen: (r) => makeBush(r, { radius: 0.9, height: 1.0, cards: 10, cardSize: 1.25 }),
    seasons: [pal(0x3f6a2a, 0x558434, 0x8ab04a, 0.25, 1, 0.3), pal(0x2f5524, 0x41692c, 0x55803a, 0.2, 1, 0.3), pal(0x2e4e22, 0x40622a, 0x7a2c1c, 0.12, 1, 0.3), pal(0x2a4620, 0x385626, 0x4a6a30, 0.1, 1, 0.3)],
  },
  // cheap stand-ins for the woods beyond the streets
  wood: {
    bark: 'furrow', leaf: 'small', variants: 3, trunkR: 0.25, deciduous: true,
    gen: (r) => makeBroadleaf(r, { height: 12.5, trunkH: 3.2, trunkR: 0.25, limbs: 3, crownR: 4.8, puffR: 2.5, subs: 0, cards: 27, cardSize: 4.2, arch: 0.6, sides: 6 }),
    seasons: [pal(0x8fb845, 0xa5c955, 0x7aa63a, 0.2, 0.9, 0.6), pal(0x3f7329, 0x528634, 0x356524, 0.2, 1, 0.45), pal(0x4a702b, 0x7a8a30, 0xb8862a, 0.22, 0.94, 0.55), pal(0x6a5a3a, 0x6a5a3a, 0x6a5a3a, 0, 0.05, 0.3)],
  },
  ivy: {
    bark: null, leaf: 'ivy', variants: 0, trunkR: 0, deciduous: true,
    seasons: [pal(0x6a9a3a, 0x80ad46, 0x9a5a3a, 0.1, 0.8, 0.5), pal(0x356a26, 0x467c2e, 0x2c5a20, 0.2, 1, 0.4), pal(0xa82a18, 0xc8541a, 0x5c6c2a, 0.25, 0.92, 0.7), pal(0x5a3a2a, 0x5a3a2a, 0x5a3a2a, 0, 0.05, 0.3)],
  },
};

// ---------------------------------------------------------------------------------------------
// Materials
// ---------------------------------------------------------------------------------------------
const LEAF_VERT_PARS = /* glsl */ `
attribute vec3 aNrm;
attribute vec4 aInfo;
uniform vec4 uWind;
uniform float uTime;
uniform vec4 uLeafP;
uniform vec3 uCamPos;
varying vec4 vInfo;
varying vec2 vCardUv;
`;
const LEAF_BEGIN = /* glsl */ `
vec3 transformed = vec3( position );
vec3 iPos = instanceMatrix[ 3 ].xyz;
float camD = distance( uCamPos, iPos );
// thin the crown with the season; drop distant cards and enlarge the survivors
float lodKeep = 1.0 - 0.6 * smoothstep( 70.0, 300.0, camD );
float keep = step( aInfo.x, uLeafP.y ) * step( fract( aInfo.x * 13.37 ), lodKeep );
// cards about to hit the lens shrink away instead of smearing across the view
float cardSize = length( instanceMatrix[ 0 ].xyz );
transformed *= keep * inversesqrt( lodKeep ) * smoothstep( 0.22 * cardSize + 0.25, 0.5 * cardSize + 0.8, camD );
`;
const LEAF_PROJECT = /* glsl */ `
vec4 mvPosition = instanceMatrix * vec4( transformed, 1.0 );
vec3 wpos = mvPosition.xyz;
{
	float ph = dot( iPos.xz, vec2( 0.13, 0.11 ) );
	float gust = sin( uTime * 1.25 + ph ) * 0.6 + sin( uTime * 2.3 + ph * 1.9 ) * 0.3;
	float sway = uWind.z * aInfo.y * 0.011;
	wpos.xz += uWind.xy * ( gust * sway + sway * 0.6 );
	float fl = sin( uTime * ( 3.5 + aInfo.x * 5.0 ) + aInfo.x * 43.0 + position.x * 3.0 );
	wpos += aNrm * fl * 0.045 * uWind.z * min( aInfo.y * 0.4, 1.0 );
}
mvPosition = viewMatrix * vec4( wpos, 1.0 );
gl_Position = projectionMatrix * mvPosition;
`;

function patchLeafDepth(mat, uniforms) {
  mat.onBeforeCompile = (shader) => {
    injectAtmos(shader);
    for (const k in uniforms) shader.uniforms[k] = uniforms[k];
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${LEAF_VERT_PARS}`)
      .replace('#include <uv_vertex>', `#include <uv_vertex>\n#ifdef USE_MAP\n vMapUv = ( uv * 0.94 + 0.03 + vec2( floor( aInfo.x * 2.0 ), floor( fract( aInfo.x * 7.31 ) * 2.0 ) ) ) * 0.5;\n#endif`)
      .replace('#include <begin_vertex>', LEAF_BEGIN)
      .replace('#include <project_vertex>', LEAF_PROJECT);
  };
  mat.customProgramCacheKey = () => 'leafdepth';
}

function makeLeafMaterial(spec) {
  const uniforms = {
    uLeafA: { value: new THREE.Color() },
    uLeafB: { value: new THREE.Color() },
    uLeafC: { value: new THREE.Color() },
    uLeafP: { value: new THREE.Vector4(0.2, 1, 0.6, spec.uvAO ? 1 : 0) }, // accent amount, density, translucency, uv-AO
  };
  const mat = new THREE.MeshLambertMaterial({ map: leafAtlas(spec.leaf), alphaTest: 0.4, side: THREE.DoubleSide });
  patchMaterial(
    mat,
    'leaf',
    (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\n${LEAF_VERT_PARS}`)
        .replace(
          '#include <uv_vertex>',
          `#include <uv_vertex>
					vCardUv = uv;
					vInfo = aInfo;
					vMapUv = ( uv * 0.94 + 0.03 + vec2( floor( aInfo.x * 2.0 ), floor( fract( aInfo.x * 7.31 ) * 2.0 ) ) ) * 0.5;`
        )
        .replace('#include <defaultnormal_vertex>', 'vec3 transformedNormal = normalize( mat3( viewMatrix ) * aNrm );')
        .replace('#include <begin_vertex>', LEAF_BEGIN)
        .replace('#include <project_vertex>', LEAF_PROJECT)
        .replace(
          '#include <worldpos_vertex>',
          `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
						vec4 worldPosition = vec4( wpos, 1.0 );
					#endif`
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
					uniform vec3 uLeafA;
					uniform vec3 uLeafB;
					uniform vec3 uLeafC;
					uniform vec4 uLeafP;
					varying vec4 vInfo;
					varying vec2 vCardUv;`
        )
        .replace(
          '#include <map_fragment>',
          /* glsl */ `
					vec4 texel = texture2D( map, vMapUv, - 0.7 );
					float hueMix = fract( vInfo.w + texel.g * 0.75 );
					vec3 leafCol = mix( uLeafA, uLeafB, smoothstep( 0.15, 0.85, hueMix ) );
					leafCol = mix( leafCol, uLeafC, step( 1.0 - uLeafP.x, fract( hueMix * 3.7 + vInfo.x ) ) );
					float ao = vInfo.z * mix( 1.0, mix( 0.38, 1.0, vCardUv.x ), uLeafP.w );
					diffuseColor.rgb = leafCol * ( 0.42 + 0.72 * texel.r ) * ao;
					// far away the mip-mapped coverage would fall under the alpha test and thin the crowns out
					diffuseColor.a = texel.a * ( 1.0 + 2.2 * smoothstep( 25.0, 170.0, length( vViewPosition ) ) );`
        )
        .replace(
          '#include <normal_fragment_begin>',
          `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
					vec3 normal = normalize( vNormal );
					vec3 nonPerturbedNormal = normal;`
        )
        .replace(
          '#include <lights_lambert_pars_fragment>',
          /* glsl */ `
					varying vec3 vViewPosition;
					struct LambertMaterial {
						vec3 diffuseColor;
						float specularStrength;
					};
					void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
						float ndl = dot( geometryNormal, directLight.direction );
						float dotNL = saturate( ( ndl + 0.4 ) / 1.4 );
						reflectedLight.directDiffuse += dotNL * directLight.color * BRDF_Lambert( material.diffuseColor );
						// sunlight filtering through the blades towards the eye
						float back = pow( saturate( dot( geometryViewDir, - directLight.direction ) ), 2.5 );
						float thin = saturate( 0.75 - ndl * 0.5 );
						reflectedLight.directDiffuse += directLight.color * ( uLeafP.z * back * thin * 1.35 ) * BRDF_Lambert( material.diffuseColor );
					}
					void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
					}
					#define RE_Direct RE_Direct_Lambert
					#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert`
        );
    },
    uniforms
  );
  const depth = new THREE.MeshDepthMaterial();
  patchLeafDepth(depth, uniforms);
  return { mat, depth, uniforms };
}

const barkMats = {};
function barkMaterial(kind) {
  if (!barkMats[kind]) {
    const t = barkTextures(kind);
    barkMats[kind] = new THREE.MeshStandardMaterial({ map: t.map, normalMap: t.normalMap, roughness: 1, metalness: 0 });
    barkMats[kind].normalScale.set(0.9, 0.9);
  }
  return barkMats[kind];
}

// ---------------------------------------------------------------------------------------------
// Forest: collects placements, then bakes instanced meshes per species
// ---------------------------------------------------------------------------------------------
export class Forest {
  constructor() {
    this.items = {}; // species → [{x,y,z,scale,rot,variant,hue,lean}]
    this.loose = {}; // species → extra cards in world space (ivy on walls …)
    this.leaf = {}; // species → { mesh, uniforms, total }
    this.group = new THREE.Group();
    this.group.name = 'forest';
    this.season = 2;
    this.fraction = 1;
    this.archetypes = {};
    this._rng = new RNG(99);
  }

  archetype(name, variant) {
    const key = name + variant;
    if (!this.archetypes[key]) this.archetypes[key] = SPECIES[name].gen(new RNG(7000 + variant * 131 + name.length * 17 + name.charCodeAt(0)));
    return this.archetypes[key];
  }

  // returns the collision radius of the trunk
  add(name, x, y, z, scale = 1, rot = 0, lean = null) {
    const spec = SPECIES[name];
    const list = this.items[name] || (this.items[name] = []);
    const variant = Math.floor(this._rng.next() * spec.variants);
    list.push({ x, y, z, scale, rot, variant, hue: this._rng.next(), lean });
    return spec.trunkR * scale;
  }

  // a free-standing leaf card in world space (used for ivy)
  addCard(name, pos, normal, size, ao = 1, sway = 0.15) {
    const list = this.loose[name] || (this.loose[name] = []);
    list.push({ x: pos.x, y: pos.y, z: pos.z, nx: normal.x, ny: normal.y, nz: normal.z, size, ao, sway });
  }

  build(scene) {
    const mat = new THREE.Matrix4(),
      card = new THREE.Matrix4(),
      rotM = new THREE.Matrix4(),
      q = new THREE.Quaternion(),
      p = V(),
      s = V(),
      nn = V(),
      leanQ = new THREE.Quaternion();
    const quad = new THREE.PlaneGeometry(1, 1);
    const names = new Set([...Object.keys(this.items), ...Object.keys(this.loose)]);
    this.stats = { trees: 0, cards: 0 };
    // Leaves are bucketed into coarse map cells so whole neighbourhoods can be frustum-culled
    // (also from each shadow cascade); trunks go into one BatchedMesh per bark, which culls
    // every tree individually and still draws in a single call.
    const CELL = 300;
    const cellOf = (x, z) => `${Math.floor((x + 900) / CELL)}_${Math.floor((z + 900) / CELL)}`;
    const trunkSets = {};

    for (const name of names) {
      const spec = SPECIES[name];
      const list = this.items[name] || [];
      const loose = this.loose[name] || [];
      const counts = {};
      for (const it of list) {
        const k = cellOf(it.x, it.z);
        counts[k] = (counts[k] || 0) + this.archetype(name, it.variant).cards.length;
      }
      for (const c of loose) {
        const k = cellOf(c.x, c.z);
        counts[k] = (counts[k] || 0) + 1;
      }
      const cells = {};
      let total = 0;
      const srng = new RNG(4321 + list.length * 7 + loose.length);
      for (const k in counts) {
        const n = counts[k];
        total += n;
        // shuffled write order so that lowering `count` thins every tree evenly
        const order = new Uint32Array(n);
        for (let i = 0; i < n; i++) order[i] = i;
        for (let i = n - 1; i > 0; i--) {
          const j = Math.floor(srng.next() * (i + 1));
          const t = order[i];
          order[i] = order[j];
          order[j] = t;
        }
        cells[k] = { M: new Float32Array(n * 16), N: new Float32Array(n * 3), I: new Float32Array(n * 4), order, w: 0, n };
      }
      if (total === 0) continue;

      for (const it of list) {
        const arch = this.archetype(name, it.variant);
        q.setFromAxisAngle(UP, it.rot);
        if (it.lean) {
          leanQ.setFromAxisAngle(_x.set(it.lean[1], 0, -it.lean[0]).normalize(), Math.hypot(it.lean[0], it.lean[1]));
          q.premultiply(leanQ);
        }
        mat.compose(p.set(it.x, it.y, it.z), q, s.set(it.scale, it.scale, it.scale));
        if (arch.geo && spec.bark) {
          const set = trunkSets[spec.bark] || (trunkSets[spec.bark] = { geos: new Map(), insts: [], v: 0, i: 0 });
          const key = name + it.variant;
          if (!set.geos.has(key)) {
            set.geos.set(key, arch.geo);
            set.v += arch.geo.getAttribute('position').count;
            set.i += arch.geo.index.count;
          }
          set.insts.push({ key, m: mat.clone() });
        }
        rotM.makeRotationFromQuaternion(q);
        const cell = cells[cellOf(it.x, it.z)];
        const { M, N, I } = cell;
        for (const c of arch.cards) {
          const o = cell.order[cell.w++];
          _q.set(c.qx, c.qy, c.qz, c.qw);
          card.compose(_x.set(c.x, c.y, c.z), _q, _y.set(c.sx, c.sy, 1));
          _m2.multiplyMatrices(mat, card);
          _m2.toArray(M, o * 16);
          nn.set(c.nx, c.ny, c.nz).applyMatrix4(rotM);
          N[o * 3] = nn.x;
          N[o * 3 + 1] = nn.y;
          N[o * 3 + 2] = nn.z;
          I[o * 4] = c.rand;
          I[o * 4 + 1] = c.y * it.scale;
          I[o * 4 + 2] = c.ao;
          I[o * 4 + 3] = (c.hue * 0.55 + it.hue) % 1;
        }
        this.stats.trees++;
      }
      // loose cards
      const lr = new RNG(555);
      for (const c of loose) {
        const cell = cells[cellOf(c.x, c.z)];
        const { M, N, I } = cell;
        const o = cell.order[cell.w++];
        nn.set(c.nx, c.ny, c.nz);
        _q.setFromUnitVectors(Z, nn);
        _q2.setFromAxisAngle(Z, lr.range(0, TAU));
        _q.multiply(_q2);
        card.compose(_x.set(c.x, c.y, c.z), _q, _y.set(c.size, c.size, 1));
        card.toArray(M, o * 16);
        N[o * 3] = c.nx * 0.6;
        N[o * 3 + 1] = c.ny * 0.6 + 0.45;
        N[o * 3 + 2] = c.nz * 0.6;
        I[o * 4] = lr.next();
        I[o * 4 + 1] = c.sway;
        I[o * 4 + 2] = c.ao;
        I[o * 4 + 3] = lr.next();
      }

      const lm = makeLeafMaterial(spec);
      const meshes = [];
      for (const k in cells) {
        const cell = cells[k];
        const geo = quad.clone();
        geo.setAttribute('aNrm', new THREE.InstancedBufferAttribute(cell.N, 3));
        geo.setAttribute('aInfo', new THREE.InstancedBufferAttribute(cell.I, 4));
        const mesh = new THREE.InstancedMesh(geo, lm.mat, 1);
        mesh.instanceMatrix = new THREE.InstancedBufferAttribute(cell.M, 16);
        mesh.count = cell.n;
        mesh.customDepthMaterial = lm.depth;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.computeBoundingSphere();
        mesh.boundingSphere.radius += 6; // wind sway and the distance-LOD enlargement
        mesh.userData.total = cell.n;
        mesh.name = 'leaves-' + name;
        this.group.add(mesh);
        meshes.push(mesh);
      }
      this.leaf[name] = { meshes, uniforms: lm.uniforms, total, spec };
      this.stats.cards += total;
      this.stats[name] = `${list.length}/${total}`;
    }

    for (const bark in trunkSets) {
      const set = trunkSets[bark];
      const bm = new THREE.BatchedMesh(set.insts.length, set.v, set.i, barkMaterial(bark));
      const ids = {};
      set.geos.forEach((g, k) => (ids[k] = bm.addGeometry(g)));
      for (const it of set.insts) bm.setMatrixAt(bm.addInstance(ids[it.key]), it.m);
      bm.sortObjects = false;
      bm.perObjectFrustumCulled = true;
      bm.castShadow = true;
      bm.receiveShadow = true;
      bm.name = 'trunks-' + bark;
      this.group.add(bm);
    }
    this.applySeason(this.season);
    scene.add(this.group);
    return this.stats;
  }

  // fraction of leaf cards to draw (quality setting)
  setFraction(f) {
    this.fraction = f;
    for (const k in this.leaf) for (const m of this.leaf[k].meshes) m.count = Math.max(1, Math.floor(m.userData.total * f));
  }

  // with a multisampled target, alpha-to-coverage turns the hard alpha-test edges of the
  // leaf cards into smooth ones
  setAlphaToCoverage(on) {
    for (const k in this.leaf) {
      const m = this.leaf[k].meshes[0].material;
      if (m.alphaToCoverage !== on) {
        m.alphaToCoverage = on;
        m.needsUpdate = true;
      }
    }
  }

  applySeason(i) {
    this.season = i;
    this.blendSeason(i, i, 0);
  }

  // remember the palette currently on screen …
  capture() {
    for (const k in this.leaf) {
      const u = this.leaf[k].uniforms;
      const c = this.leaf[k].cap || (this.leaf[k].cap = { a: new THREE.Color(), b: new THREE.Color(), c: new THREE.Color(), p: new THREE.Vector4() });
      c.a.copy(u.uLeafA.value);
      c.b.copy(u.uLeafB.value);
      c.c.copy(u.uLeafC.value);
      c.p.copy(u.uLeafP.value);
    }
  }

  // … and fade from it to season i
  blendFromCapture(i, t) {
    for (const k in this.leaf) {
      const { uniforms, spec, cap } = this.leaf[k];
      if (!cap) continue;
      const b = spec.seasons[i];
      uniforms.uLeafA.value.copy(cap.a).lerp(b.a, t);
      uniforms.uLeafB.value.copy(cap.b).lerp(b.b, t);
      uniforms.uLeafC.value.copy(cap.c).lerp(b.c, t);
      uniforms.uLeafP.value.x = lerp(cap.p.x, b.amt, t);
      uniforms.uLeafP.value.y = lerp(cap.p.y, b.density, t);
      uniforms.uLeafP.value.z = lerp(cap.p.z, b.trans, t);
    }
  }

  // cross-fade between two seasons (0 spring · 1 summer · 2 autumn · 3 winter)
  blendSeason(i0, i1, t) {
    for (const k in this.leaf) {
      const { uniforms, spec } = this.leaf[k];
      const a = spec.seasons[i0],
        b = spec.seasons[i1];
      uniforms.uLeafA.value.copy(a.a).lerp(b.a, t);
      uniforms.uLeafB.value.copy(a.b).lerp(b.b, t);
      uniforms.uLeafC.value.copy(a.c).lerp(b.c, t);
      uniforms.uLeafP.value.x = lerp(a.amt, b.amt, t);
      uniforms.uLeafP.value.y = lerp(a.density, b.density, t);
      uniforms.uLeafP.value.z = lerp(a.trans, b.trans, t);
    }
  }
}
