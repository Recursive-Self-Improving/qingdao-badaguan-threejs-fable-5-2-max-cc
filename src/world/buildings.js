// The "world architecture fair": villas in eight period styles, grown from a seed per lot,
// plus the two landmarks everyone looks for — Huashi Lou (the granite castle on the headland)
// and the blue-green Princess House on Juyongguan Rd.

import * as THREE from 'three';
import { ChunkedBuilders } from '../core/geo.js';
import { RNG, lerp, clamp, TAU, vnoise } from '../core/math.js';
import { VILLAS, LANDMARKS } from './layout.js';
import { stuccoTextures, graniteTextures, roofTextures, windowAtlas, windowUV, WINDOW_TYPES, fenceTexture } from '../core/textures.js';
import { patchMaterial, SKY_GLSL } from './atmosphere.js';

const COL = (hex) => {
  const c = new THREE.Color(hex);
  return [c.r, c.g, c.b];
};
const UV_SCALE = { stucco: 1 / 3, granite: 1 / 1.9, ashlar: 1 / 2.8, roofRed: 1 / 2.2, roofSlate: 1 / 2.2, trim: 1, window: 1, fence: 1 };

// ---------------------------------------------------------------------------------------------
// Low-level helpers
// ---------------------------------------------------------------------------------------------
function makeCtx(cb, x, y, z, rot) {
  const M = new THREE.Matrix4().makeRotationY(rot).setPosition(x, y, z);
  const ctx = {
    M,
    x,
    z,
    rot,
    b(name) {
      const b = cb.get(name, x, z);
      b.setMatrix(M);
      b.uvScale = UV_SCALE[name] ?? 1;
      return b;
    },
    // run fn with a builder temporarily placed in a local frame
    local(b, mat, fn) {
      const prev = b.matrix;
      b.setMatrix(new THREE.Matrix4().multiplyMatrices(M, mat));
      fn();
      b.setMatrix(prev);
    },
    world(lx, ly, lz) {
      return new THREE.Vector3(lx, ly, lz).applyMatrix4(M);
    },
    dir(lx, ly, lz) {
      return new THREE.Vector3(lx, ly, lz).transformDirection(M);
    },
  };
  return ctx;
}

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (a) => {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};

// convex polygon whose normal should agree with `out`; UVs projected on (uAxis, vAxis)
function facePoly(B, pts, out, uAxis = null, vAxis = null) {
  const n = cross(sub(pts[1], pts[0]), sub(pts[2], pts[0]));
  if (dot(n, out) < 0) pts = pts.slice().reverse();
  const nn = norm(cross(sub(pts[1], pts[0]), sub(pts[2], pts[0])));
  if (!uAxis) {
    // horizontal direction within the plane, and the in-plane "up"
    uAxis = norm(cross([0, 1, 0], nn));
    if (Math.abs(nn[1]) > 0.99) uAxis = [1, 0, 0];
    vAxis = norm(cross(nn, uAxis));
  }
  B.poly(pts, uAxis, vAxis, [0, 0, 0]);
}
// roof plane: faces up, tile courses run along `eave`
function roofPoly(R, pts, eave) {
  const n = cross(sub(pts[1], pts[0]), sub(pts[2], pts[0]));
  if (n[1] < 0) pts = pts.slice().reverse();
  const nn = norm(cross(sub(pts[1], pts[0]), sub(pts[2], pts[0])));
  let v = norm(cross(nn, eave));
  if (v[1] < 0) v = [-v[0], -v[1], -v[2]];
  R.poly(pts, eave, v, [0, 0, 0]);
}
// textured quad (bl, br, tr, tl seen from outside) with explicit atlas UVs
function quadFacing(B, a, b, c, d, out, uv) {
  const n = cross(sub(b, a), sub(d, a));
  if (dot(n, out) < 0) B.quad(b, a, d, c, uv);
  else B.quad(a, b, c, d, uv);
}

// Wall from (ax,az) to (bx,bz) — outside on the right-hand side — pierced by openings
// [{u0,u1,v0,v1,…}] given in wall coordinates. `fill(P, depth, opening)` glazes each one.
function wall(B, ax, az, bx, bz, y0, y1, openings, fill, depth = 0.14) {
  const L = Math.hypot(bx - ax, bz - az);
  const tx = (bx - ax) / L,
    tz = (bz - az) / L;
  const nx = -tz,
    nz = tx;
  const P = (u, v, d = 0) => [ax + tx * u - nx * d, y0 + v, az + tz * u - nz * d];
  const H = y1 - y0;
  const us = [0, L],
    vs = [0, H];
  for (const o of openings) {
    us.push(o.u0, o.u1);
    vs.push(o.v0, o.v1);
  }
  const uniq = (a) => [...new Set(a.map((v) => Math.round(v * 1000) / 1000))].sort((p, q) => p - q);
  const U = uniq(us),
    V = uniq(vs);
  const inside = (u, v) => openings.some((o) => u > o.u0 && u < o.u1 && v > o.v0 && v < o.v1);
  for (let j = 0; j < V.length - 1; j++) {
    let start = -1;
    for (let i = 0; i < U.length; i++) {
      const solid = i < U.length - 1 && !inside((U[i] + U[i + 1]) / 2, (V[j] + V[j + 1]) / 2);
      if (solid && start < 0) start = i;
      if (!solid && start >= 0) {
        const u0 = U[start],
          u1 = U[i],
          v0 = V[j],
          v1 = V[j + 1];
        B.quad(P(u0, v0), P(u1, v0), P(u1, v1), P(u0, v1), [u0, y0 + v0, u1, y0 + v1]);
        start = -1;
      }
    }
  }
  const D = depth;
  for (const o of openings) {
    B.quad(P(o.u0, o.v0), P(o.u0, o.v0, D), P(o.u0, o.v1, D), P(o.u0, o.v1));
    B.quad(P(o.u1, o.v0, D), P(o.u1, o.v0), P(o.u1, o.v1), P(o.u1, o.v1, D));
    B.quad(P(o.u0, o.v0), P(o.u1, o.v0), P(o.u1, o.v0, D), P(o.u0, o.v0, D));
    B.quad(P(o.u0, o.v1, D), P(o.u1, o.v1, D), P(o.u1, o.v1), P(o.u0, o.v1));
    if (fill) fill(P, D, o);
  }
  return { P, L, nx, nz };
}

function fillWindow(ctx, S) {
  return (P, D, o) => {
    const W = ctx.b('window');
    W.setColor(...(o.type === 'door' ? S.doorCol || S.frame : S.frame));
    W.quad(P(o.u0, o.v0, D), P(o.u1, o.v0, D), P(o.u1, o.v1, D), P(o.u0, o.v1, D), windowUV(o.type, o.lit));
    const T = ctx.b('trim');
    if (o.type !== 'door' && o.type !== 'french') {
      T.setColor(...S.trimCol);
      const e = 0.07,
        h = 0.08,
        p = 0.06;
      T.quad(P(o.u0 - e, o.v0 - h, -p), P(o.u1 + e, o.v0 - h, -p), P(o.u1 + e, o.v0, -p), P(o.u0 - e, o.v0, -p));
      T.quad(P(o.u0 - e, o.v0, -p), P(o.u1 + e, o.v0, -p), P(o.u1 + e, o.v0, 0), P(o.u0 - e, o.v0, 0));
    }
    if (o.shutters) {
      T.setColor(...S.shutterCol);
      const sw = (o.u1 - o.u0) * 0.47,
        p = 0.035;
      T.quad(P(o.u0 - sw - 0.03, o.v0, -p), P(o.u0 - 0.03, o.v0, -p), P(o.u0 - 0.03, o.v1, -p), P(o.u0 - sw - 0.03, o.v1, -p));
      T.quad(P(o.u1 + 0.03, o.v0, -p), P(o.u1 + sw + 0.03, o.v0, -p), P(o.u1 + sw + 0.03, o.v1, -p), P(o.u1 + 0.03, o.v1, -p));
    }
    if (o.lintel) {
      // rock-faced granite lintel, the signature of Qingdao's German-period houses
      const G = ctx.b('granite');
      G.setColor(...S.stoneCol);
      const p = 0.045,
        e = 0.16;
      G.quad(P(o.u0 - e, o.v1, -p), P(o.u1 + e, o.v1, -p), P(o.u1 + e, o.v1 + 0.3, -p), P(o.u0 - e, o.v1 + 0.3, -p));
      G.quad(P(o.u0 - e, o.v1, 0), P(o.u1 + e, o.v1, 0), P(o.u1 + e, o.v1, -p), P(o.u0 - e, o.v1, -p));
    }
  };
}

// The four walls of a rectangular block, floor by floor, with a rhythm of windows.
function blockWalls(ctx, S, rng, cx, cz, w, d, base, floors, fh, opts = {}) {
  const hw = w / 2,
    hd = d / 2;
  const sides = [
    [cx - hw, cz + hd, cx + hw, cz + hd], // 0 front (+z)
    [cx + hw, cz + hd, cx + hw, cz - hd], // 1 right (+x)
    [cx + hw, cz - hd, cx - hw, cz - hd], // 2 back
    [cx - hw, cz - hd, cx - hw, cz + hd], // 3 left
  ];
  const record = [];
  for (let si = 0; si < 4; si++) {
    if (opts.skip && opts.skip.includes(si)) continue;
    const [ax, az, bx, bz] = sides[si];
    const L = Math.hypot(bx - ax, bz - az);
    const margin = opts.margin ?? 1.0;
    const nB = Math.max(1, Math.floor((L - 2 * margin + 0.6) / S.bay));
    const pitch = (L - 2 * margin) / nB;
    for (let f = 0; f < floors; f++) {
      const ops = [];
      const mat = f === 0 && S.stoneGround ? 'granite' : S.wallMat;
      const door = opts.door && opts.door.side === si && f === 0 ? opts.door : null;
      if (door) {
        const t = WINDOW_TYPES.door;
        ops.push({ u0: door.u - t.w / 2, u1: door.u + t.w / 2, v0: 0.02, v1: 0.02 + t.h, type: 'door', lit: false });
      }
      for (let i = 0; i < nB; i++) {
        const uc = margin + pitch * (i + 0.5);
        let type = f === 0 ? S.win0 : S.win;
        if (opts.winType) type = opts.winType;
        const t = WINDOW_TYPES[type];
        if (door && Math.abs(uc - door.u) < (t.w + WINDOW_TYPES.door.w) / 2 + 0.35) continue;
        if (rng.chance(si === 0 ? S.blank * 0.4 : S.blank)) continue;
        const sill = type === 'french' ? 0.03 : S.sill;
        ops.push({
          u0: uc - t.w / 2,
          u1: uc + t.w / 2,
          v0: sill,
          v1: Math.min(sill + t.h, fh - 0.25),
          type,
          lit: rng.chance(0.42),
          shutters: S.shutters && type !== 'french' && t.w < 1.3 && pitch > t.w * 2.05,
          lintel: S.lintel && mat !== 'granite',
        });
      }
      const B = ctx.b(mat);
      B.setColor(...(mat === 'granite' ? S.stoneCol : S.wallCol));
      wall(B, ax, az, bx, bz, base + f * fh, base + (f + 1) * fh, ops, fillWindow(ctx, S));
      record.push({ si, f, ops, ax, az, bx, bz, y0: base + f * fh });
    }
  }
  return { sides, record };
}

function axisMap(cx, cz, axis) {
  return axis === 'x' ? (a, y, b) => [cx + a, y, cz + b] : (a, y, b) => [cx + b, y, cz + a];
}

// Gable roof (optionally with clipped "jerkinhead" ends, typical of the German period)
function roofGable(ctx, S, cx, cz, w, d, y, pitch, o = {}) {
  const axis = o.axis || 'x';
  const over = o.over ?? 0.45,
    verge = o.verge ?? 0.32;
  const P = axisMap(cx, cz, axis);
  const A = (axis === 'x' ? w : d) / 2,
    Bh = (axis === 'x' ? d : w) / 2;
  const tan = Math.tan(pitch);
  const rise = Bh * tan,
    yr = y + rise,
    ye = y - over * tan;
  const eave = axis === 'x' ? [1, 0, 0] : [0, 0, 1],
    across = axis === 'x' ? [0, 0, 1] : [1, 0, 0];
  const R = ctx.b(S.roofMat);
  R.setColor(...S.roofCol);
  const T = ctx.b('trim');
  const half = o.half ? 0.36 : 0;
  const cB = half * Bh,
    yc = yr - half * rise,
    Rr = A + verge - cB;
  const ends = o.ends || [-1, 1];
  for (const s of [-1, 1]) {
    const pts = half
      ? [P(-Rr, yr, 0), P(Rr, yr, 0), P(A + verge, yc, s * cB), P(A + verge, ye, s * (Bh + over)), P(-A - verge, ye, s * (Bh + over)), P(-A - verge, yc, s * cB)]
      : [P(-A - verge, yr, 0), P(A + verge, yr, 0), P(A + verge, ye, s * (Bh + over)), P(-A - verge, ye, s * (Bh + over))];
    R.setColor(...S.roofCol);
    roofPoly(R, pts, eave);
    T.setColor(...S.soffitCol);
    facePoly(
      T,
      pts.map((p) => [p[0], p[1] - 0.11, p[2]]),
      [0, -1, 0]
    );
    T.setColor(...S.trimCol);
    const zz = s * (Bh + over);
    facePoly(T, [P(-A - verge, ye - 0.11, zz), P(A + verge, ye - 0.11, zz), P(A + verge, ye + 0.02, zz), P(-A - verge, ye + 0.02, zz)], axis === 'x' ? [0, 0, s] : [s, 0, 0]);
  }
  for (const e of ends) {
    const out = axis === 'x' ? [e, 0, 0] : [0, 0, e];
    const Wb = ctx.b(o.gableMat || S.wallMat);
    Wb.setColor(...(o.gableCol || S.wallCol));
    const wpts = half ? [P(e * A, y, -Bh), P(e * A, y, Bh), P(e * A, yc, cB), P(e * A, yc, -cB)] : [P(e * A, y, -Bh), P(e * A, y, Bh), P(e * A, yr, 0)];
    facePoly(Wb, wpts, out, across, [0, 1, 0]);
    if (half) {
      R.setColor(...S.roofCol);
      roofPoly(R, [P(e * Rr, yr, 0), P(e * (A + verge), yc, -cB), P(e * (A + verge), yc, cB)], across);
    }
    // bargeboards
    T.setColor(...S.trimCol);
    const av = e * (A + verge);
    for (const s of [-1, 1]) {
      const yTop = half ? yc : yr,
        bTop = half ? s * cB : 0;
      facePoly(T, [P(av, yTop, bTop), P(av, ye, s * (Bh + over)), P(av, ye - 0.17, s * (Bh + over)), P(av, yTop - 0.2, bTop)], out);
    }
    // half-timbering in the gable
    if (S.timber && rise > 1.6) {
      T.setColor(...S.timberCol);
      const n = Math.max(2, Math.round(Bh / 0.75));
      for (let i = -n + 1; i < n; i++) {
        const b = (i / n) * Bh;
        const top = y + (Bh - Math.abs(b)) * tan - 0.1;
        const lim = half ? Math.min(top, yc - 0.05) : top;
        if (lim - y < 0.3) continue;
        facePoly(T, [P(e * (A + 0.025), y, b - 0.06), P(e * (A + 0.025), y, b + 0.06), P(e * (A + 0.025), lim, b + 0.06), P(e * (A + 0.025), lim, b - 0.06)], out);
      }
      facePoly(T, [P(e * (A + 0.025), y - 0.08, -Bh), P(e * (A + 0.025), y - 0.08, Bh), P(e * (A + 0.025), y + 0.08, Bh), P(e * (A + 0.025), y + 0.08, -Bh)], out);
    }
    // attic light
    if (o.attic !== false && rise > 2.4) {
      const type = o.atticType || 'small';
      const t = WINDOW_TYPES[type];
      const yw = y + rise * 0.24;
      const W = ctx.b('window');
      W.setColor(...S.frame);
      const a = e * (A + 0.035);
      quadFacing(W, P(a, yw, -t.w / 2), P(a, yw, t.w / 2), P(a, yw + t.h, t.w / 2), P(a, yw + t.h, -t.w / 2), out, windowUV(type, o.rng ? o.rng.chance(0.3) : false));
    }
  }
  return { yr, rise, ye };
}

function roofHip(ctx, S, cx, cz, w, d, y, pitch, o = {}) {
  let axis = w >= d ? 'x' : 'z';
  const over = o.over ?? 0.5;
  const P = axisMap(cx, cz, axis);
  const A = Math.max(w, d) / 2,
    Bh = Math.min(w, d) / 2;
  const tan = Math.tan(pitch);
  const rise = Bh * tan,
    yr = y + rise,
    ye = y - over * tan,
    R0 = A - Bh;
  const eave = axis === 'x' ? [1, 0, 0] : [0, 0, 1],
    across = axis === 'x' ? [0, 0, 1] : [1, 0, 0];
  const R = ctx.b(o.mat || S.roofMat);
  R.setColor(...(o.col || S.roofCol));
  for (const s of [-1, 1]) {
    const pts = R0 > 0.05 ? [P(-R0, yr, 0), P(R0, yr, 0), P(A + over, ye, s * (Bh + over)), P(-A - over, ye, s * (Bh + over))] : [P(0, yr, 0), P(A + over, ye, s * (Bh + over)), P(-A - over, ye, s * (Bh + over))];
    roofPoly(R, pts, eave);
    roofPoly(R, [P(s * R0, yr, 0), P(s * (A + over), ye, -(Bh + over)), P(s * (A + over), ye, Bh + over)], across);
  }
  const T = ctx.b('trim');
  T.setColor(...S.soffitCol);
  facePoly(T, [P(-A - over, ye - 0.02, -Bh - over), P(A + over, ye - 0.02, -Bh - over), P(A + over, ye - 0.02, Bh + over), P(-A - over, ye - 0.02, Bh + over)], [0, -1, 0]);
  T.setColor(...S.trimCol);
  for (const s of [-1, 1]) {
    facePoly(T, [P(-A - over, ye - 0.13, s * (Bh + over)), P(A + over, ye - 0.13, s * (Bh + over)), P(A + over, ye + 0.02, s * (Bh + over)), P(-A - over, ye + 0.02, s * (Bh + over))], axis === 'x' ? [0, 0, s] : [s, 0, 0]);
    facePoly(T, [P(s * (A + over), ye - 0.13, -Bh - over), P(s * (A + over), ye - 0.13, Bh + over), P(s * (A + over), ye + 0.02, Bh + over), P(s * (A + over), ye + 0.02, -Bh - over)], axis === 'x' ? [s, 0, 0] : [0, 0, s]);
  }
  return { yr, rise, ye, axis };
}

function roofMansard(ctx, S, rng, cx, cz, w, d, y) {
  const inset = 0.85,
    h1 = 2.35,
    o = 0.18;
  const A = w / 2,
    Bh = d / 2;
  const R = ctx.b(S.roofMat);
  R.setColor(...S.roofCol);
  const lo = (sx, sz) => [cx + sx * (A + o), y, cz + sz * (Bh + o)];
  const hi = (sx, sz) => [cx + sx * (A - inset), y + h1, cz + sz * (Bh - inset)];
  roofPoly(R, [lo(-1, 1), lo(1, 1), hi(1, 1), hi(-1, 1)], [1, 0, 0]);
  roofPoly(R, [lo(-1, -1), lo(1, -1), hi(1, -1), hi(-1, -1)], [1, 0, 0]);
  roofPoly(R, [lo(1, -1), lo(1, 1), hi(1, 1), hi(1, -1)], [0, 0, 1]);
  roofPoly(R, [lo(-1, -1), lo(-1, 1), hi(-1, 1), hi(-1, -1)], [0, 0, 1]);
  roofHip(ctx, S, cx, cz, w - 2 * inset, d - 2 * inset, y + h1, 0.36, { over: 0.12 });
  // cornice
  const T = ctx.b('trim');
  T.setColor(...S.trimCol);
  T.box(cx, y - 0.02, cz + Bh + 0.12, w + 0.5, 0.2, 0.26, 'xXyYZ');
  T.box(cx, y - 0.02, cz - Bh - 0.12, w + 0.5, 0.2, 0.26, 'xXyYz');
  T.box(cx + A + 0.12, y - 0.02, cz, 0.26, 0.2, d + 0.5, 'XyYzZ');
  T.box(cx - A - 0.12, y - 0.02, cz, 0.26, 0.2, d + 0.5, 'xyYzZ');
  // dormers
  const W = ctx.b('window');
  const dorm = (px, pz, fx, fz) => {
    const Bd = ctx.b('stucco');
    Bd.setColor(...S.wallCol);
    const wd = 1.2,
      hh = 1.45,
      dep = 0.95;
    const bx = px - fx * dep * 0.5,
      bz = pz - fz * dep * 0.5;
    Bd.box(bx, y + 0.42 + hh / 2, bz, fx ? dep : wd, hh, fz ? dep : wd, 'xXYzZ');
    T.setColor(...S.trimCol);
    T.box(bx, y + 0.42 + hh + 0.06, bz, (fx ? dep : wd) + 0.2, 0.12, (fz ? dep : wd) + 0.2);
    W.setColor(...S.frame);
    const t = WINDOW_TYPES.std;
    const qx = px + fx * 0.02,
      qz = pz + fz * 0.02;
    const tx = -fz,
      tz = fx;
    const a = [qx - tx * 0.45, y + 0.6, qz - tz * 0.45],
      b = [qx + tx * 0.45, y + 0.6, qz + tz * 0.45];
    quadFacing(W, a, b, [b[0], y + 1.75, b[2]], [a[0], y + 1.75, a[2]], [fx, 0, fz], windowUV('std', rng.chance(0.4)));
  };
  const nx = Math.max(1, Math.floor(w / 3.2)),
    nz = Math.max(1, Math.floor(d / 3.6));
  for (let i = 0; i < nx; i++) {
    const px = cx + (-0.5 + (i + 0.5) / nx) * (w - 2.2);
    dorm(px, cz + Bh + 0.05, 0, 1);
    dorm(px, cz - Bh - 0.05, 0, -1);
  }
  for (let i = 0; i < nz; i++) {
    const pz = cz + (-0.5 + (i + 0.5) / nz) * (d - 2.4);
    dorm(cx + A + 0.05, pz, 1, 0);
    dorm(cx - A - 0.05, pz, -1, 0);
  }
  return { yr: y + h1 + ((Math.min(w, d) - 2 * inset) / 2) * Math.tan(0.36) };
}

function roofFlat(ctx, S, cx, cz, w, d, y) {
  const T = ctx.b('trim');
  T.setColor(...S.trimCol);
  T.box(cx, y + 0.1, cz, w + 0.36, 0.2, d + 0.36);
  const Bd = ctx.b('stucco');
  Bd.setColor(...S.wallCol);
  const h = 0.6,
    t = 0.18;
  Bd.box(cx, y + 0.2 + h / 2, cz + d / 2 - t / 2, w, h, t, 'xXYzZ');
  Bd.box(cx, y + 0.2 + h / 2, cz - d / 2 + t / 2, w, h, t, 'xXYzZ');
  Bd.box(cx + w / 2 - t / 2, y + 0.2 + h / 2, cz, t, h, d - 2 * t, 'xXYzZ');
  Bd.box(cx - w / 2 + t / 2, y + 0.2 + h / 2, cz, t, h, d - 2 * t, 'xXYzZ');
}

function roofPyramid(ctx, S, cx, cz, w, d, y, h, over = 0.3, mat = null, col = null) {
  const R = ctx.b(mat || S.roofMat);
  R.setColor(...(col || S.roofCol));
  const A = w / 2 + over,
    Bh = d / 2 + over;
  const ye = y - 0.12;
  const ap = [cx, y + h, cz];
  roofPoly(R, [ap, [cx - A, ye, cz + Bh], [cx + A, ye, cz + Bh]], [1, 0, 0]);
  roofPoly(R, [ap, [cx - A, ye, cz - Bh], [cx + A, ye, cz - Bh]], [1, 0, 0]);
  roofPoly(R, [ap, [cx + A, ye, cz - Bh], [cx + A, ye, cz + Bh]], [0, 0, 1]);
  roofPoly(R, [ap, [cx - A, ye, cz - Bh], [cx - A, ye, cz + Bh]], [0, 0, 1]);
  const T = ctx.b('trim');
  T.setColor(...S.soffitCol);
  facePoly(T, [[cx - A, ye - 0.01, cz - Bh], [cx + A, ye - 0.01, cz - Bh], [cx + A, ye - 0.01, cz + Bh], [cx - A, ye - 0.01, cz + Bh]], [0, -1, 0]);
}

function chimney(ctx, S, x, z, y0, y1) {
  const Bd = ctx.b(S.chimneyMat || 'stucco');
  Bd.setColor(...(S.chimneyCol || S.wallCol));
  Bd.box(x, (y0 + y1) / 2, z, 0.72, y1 - y0, 0.72, 'xXzZ');
  const T = ctx.b('trim');
  T.setColor(...S.trimCol);
  T.box(x, y1 + 0.06, z, 0.92, 0.12, 0.92);
  T.setColor(0.32, 0.16, 0.11);
  T.cylinder(x - 0.16, y1 + 0.12, z, 0.1, 0.09, 0.34, 6, { capTop: true });
  T.cylinder(x + 0.16, y1 + 0.12, z, 0.1, 0.09, 0.34, 6, { capTop: true });
}

// gabled dormer sitting on the front (+z, s=1) or back slope of a roof whose ridge runs along x
function dormer(ctx, S, rng, ax, cz, Bh, y, pitch, s = 1) {
  const tan = Math.tan(pitch);
  const zf = cz + s * Bh * 0.74;
  const yb = y + Bh * 0.26 * tan;
  const hw = 0.68,
    hh = 1.18;
  const zAt = (yy) => cz + s * (Bh - (yy - y) / tan);
  const Bd = ctx.b(S.wallMat === 'granite' ? 'stucco' : S.wallMat);
  Bd.setColor(...S.wallCol);
  const t = WINDOW_TYPES.small;
  const op = [{ u0: hw - t.w / 2, u1: hw + t.w / 2, v0: 0.2, v1: 0.2 + t.h, type: 'small', lit: rng.chance(0.35) }];
  if (s > 0) wall(Bd, ax - hw, zf, ax + hw, zf, yb, yb + hh, op, fillWindow(ctx, S), 0.08);
  else wall(Bd, ax + hw, zf, ax - hw, zf, yb, yb + hh, op, fillWindow(ctx, S), 0.08);
  for (const e of [-1, 1]) {
    facePoly(Bd, [[ax + e * hw, yb, zf], [ax + e * hw, yb + hh, zf], [ax + e * hw, yb + hh, zAt(yb + hh)]], [e, 0, 0]);
  }
  const yr2 = yb + hh + 0.55,
    ye2 = yb + hh - 0.08,
    ov = 0.2;
  const R = ctx.b(S.roofMat);
  R.setColor(...S.roofCol);
  for (const e of [-1, 1]) {
    roofPoly(R, [[ax, yr2, zf + s * ov], [ax, yr2, zAt(yr2)], [ax + e * (hw + ov), ye2, zAt(ye2)], [ax + e * (hw + ov), ye2, zf + s * ov]], [0, 0, 1]);
  }
  facePoly(Bd, [[ax - hw, yb + hh, zf], [ax + hw, yb + hh, zf], [ax, yr2 - 0.04, zf]], [0, 0, s]);
}

function plinth(ctx, S, cx, cz, w, d, base) {
  const G = ctx.b('granite');
  G.setColor(...S.stoneCol);
  G.box(cx, (base - 1.8) / 2, cz, w + 0.16, base + 1.8, d + 0.16, 'xXYzZ', 0.82);
}

function steps(ctx, S, x, z, base, width = 1.9, dirZ = 1) {
  const G = ctx.b('granite');
  G.setColor(...S.stoneCol);
  const n = Math.max(1, Math.ceil(base / 0.17));
  const rise = base / n;
  for (let i = 0; i < n; i++) {
    const top = base - i * rise;
    G.box(x, (top - 1.0) / 2, z + dirZ * (0.16 + i * 0.3), width, top + 1.0, 0.32, 'xXYzZ');
  }
  return n * 0.3 + 0.3;
}

function quoins(ctx, S, cx, cz, w, d, y0, y1) {
  const G = ctx.b('granite');
  G.setColor(...S.stoneCol);
  const t = 0.05;
  let k = 0;
  for (let y = y0 + 0.24; y < y1 - 0.2; y += 0.43, k++) {
    const la = k % 2 ? 0.62 : 0.4,
      lb = k % 2 ? 0.4 : 0.62;
    for (const sx of [-1, 1])
      for (const sz of [-1, 1]) {
        G.box(cx + sx * (w / 2 - la / 2 + t), y, cz + sz * (d / 2 + t / 2), la, 0.36, t, sz > 0 ? 'xXyYZ' : 'xXyYz');
        G.box(cx + sx * (w / 2 + t / 2), y, cz + sz * (d / 2 - lb / 2 + t), t, 0.36, lb, sx > 0 ? 'XyYzZ' : 'xyYzZ');
      }
  }
}

function band(ctx, col, cx, cz, w, d, y, h = 0.12, p = 0.06) {
  const T = ctx.b('trim');
  T.setColor(...col);
  T.box(cx, y, cz + d / 2 + p / 2, w + 2 * p, h, p, 'xXyYZ');
  T.box(cx, y, cz - d / 2 - p / 2, w + 2 * p, h, p, 'xXyYz');
  T.box(cx + w / 2 + p / 2, y, cz, p, h, d, 'XyYzZ');
  T.box(cx - w / 2 - p / 2, y, cz, p, h, d, 'xyYzZ');
}

// battlements around a rectangle
function crenelRect(ctx, mat, col, cx, cz, w, d, y, h = 0.55, mer = 0.62) {
  const B = ctx.b(mat);
  B.setColor(...col);
  const t = 0.34;
  const run = (ax, az, bx, bz, faces) => {
    const L = Math.hypot(bx - ax, bz - az);
    const along = Math.abs(bx - ax) > Math.abs(bz - az);
    B.box((ax + bx) / 2, y + h / 2, (az + bz) / 2, along ? L : t, h, along ? t : L);
    const n = Math.max(2, Math.round(L / 1.25));
    for (let i = 0; i < n; i++) {
      const f = (i + 0.5) / n;
      B.box(lerp(ax, bx, f), y + h + mer / 2, lerp(az, bz, f), along ? L / n * 0.52 : t, mer, along ? t : (L / n) * 0.52);
    }
  };
  const hw = w / 2 - t / 2,
    hd = d / 2 - t / 2;
  run(cx - w / 2, cz + hd, cx + w / 2, cz + hd);
  run(cx - w / 2, cz - hd, cx + w / 2, cz - hd);
  run(cx + hw, cz - d / 2 + t, cx + hw, cz + d / 2 - t);
  run(cx - hw, cz - d / 2 + t, cx - hw, cz + d / 2 - t);
}

function crenelRound(ctx, mat, col, cx, cz, r, y, n = 12, h = 0.55, mer = 0.62) {
  const B = ctx.b(mat);
  B.setColor(...col);
  B.cylinder(cx, y, cz, r, r, h, 20, { capTop: false });
  B.cylinder(cx, y, cz, r - 0.36, r - 0.36, h + 0.001, 20);
  // ring top
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU;
    const m = new THREE.Matrix4().makeRotationY(-a).setPosition(cx + Math.cos(a) * (r - 0.18), 0, cz + Math.sin(a) * (r - 0.18));
    ctx.local(B, m, () => B.box(0, y + h + mer / 2, 0, 0.36, mer, ((TAU * r) / n) * 0.5));
  }
}

function roundWindows(ctx, S, rng, cx, cz, r, y, angles, type = 'tall', scale = 0.8) {
  const W = ctx.b('window');
  W.setColor(...S.frame);
  const t = WINDOW_TYPES[type];
  const hw = (t.w * scale) / 2,
    hh = t.h * scale;
  for (const a of angles) {
    const c = Math.cos(a),
      s = Math.sin(a);
    const px = cx + c * (r + 0.03),
      pz = cz + s * (r + 0.03);
    const tx = -s,
      tz = c;
    quadFacing(W, [px - tx * hw, y, pz - tz * hw], [px + tx * hw, y, pz + tz * hw], [px + tx * hw, y + hh, pz + tz * hw], [px - tx * hw, y + hh, pz - tz * hw], [c, 0, s], windowUV(type, rng.chance(0.4)));
  }
}

function tower(ctx, S, rng, cx, cz, r, base, top, kind, cap, fh) {
  const mat = S.towerMat || S.wallMat;
  const col = mat === 'granite' || mat === 'ashlar' ? S.stoneCol : S.wallCol;
  const R = ctx.b(S.roofMat);
  if (kind === 'round') {
    const B = ctx.b(mat);
    B.setColor(...col);
    B.cylinder(cx, -1.6, cz, r, r, top + 1.6, 18, { shadeBottom: 0.85 });
    for (let y = base + 1.0; y + 1.6 < top; y += fh) roundWindows(ctx, S, rng, cx, cz, r, y, [0.5, 1.57, 2.64].map((a) => a + rng.range(-0.1, 0.1)), 'tall', 0.72);
    band(ctx, S.trimCol, cx, cz, 0, 0, -99); // no-op keeps trim builder warm
    if (cap === 'cone') {
      R.setColor(...S.roofCol);
      R.cylinder(cx, top - 0.15, cz, r + 0.38, 0.03, r * 2.1, 18);
    } else if (cap === 'bell') {
      R.setColor(...S.roofCol);
      const hs = r * 2.3;
      const prof = [
        [r + 0.34, 0],
        [r + 0.26, 0.2],
        [r * 0.74, 0.52],
        [r * 0.3, 0.8],
        [0.03, 1],
      ];
      for (let i = 0; i < prof.length - 1; i++) R.cylinder(cx, top - 0.12 + prof[i][1] * hs, cz, prof[i][0], prof[i + 1][0], (prof[i + 1][1] - prof[i][1]) * hs, 16);
    } else {
      const B2 = ctx.b(mat);
      B2.setColor(...col);
      B2.cylinder(cx, top - 0.3, cz, r, r + 0.24, 0.3, 18);
      crenelRound(ctx, mat, col, cx, cz, r + 0.24, top, 10);
      const T = ctx.b('trim');
      T.setColor(0.3, 0.3, 0.3);
      T.cylinder(cx, top + 0.02, cz, r, r, 0.02, 18, { capTop: true });
    }
  } else {
    const w = r * 2;
    const S2 = { ...S, bay: 9, blank: 0, win: 'small', win0: 'small', shutters: false, lintel: false, stoneGround: mat === 'granite' };
    const fl = Math.max(1, Math.round((top - base) / fh));
    blockWalls(ctx, { ...S2, wallMat: mat === 'granite' ? 'granite' : S.wallMat }, rng, cx, cz, w, w, base, fl, (top - base) / fl, { margin: 0.6 });
    plinth(ctx, S, cx, cz, w, w, base);
    if (cap === 'spire') roofPyramid(ctx, S, cx, cz, w, w, top, w * 2.3, 0.28);
    else if (cap === 'crenel') {
      crenelRect(ctx, mat === 'granite' ? 'granite' : 'stucco', col, cx, cz, w + 0.3, w + 0.3, top);
    } else roofPyramid(ctx, S, cx, cz, w, w, top, w * 0.75, 0.4);
  }
}

// ---------------------------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------------------------
const FRAMES = { white: '#f3efe6', green: '#3b5646', red: '#6b332a', cream: '#e8dfc8', brown: '#3f2e24', blue: '#6d7f8a' };
const STONES = ['#ffffff', '#f3ece2', '#fbf1e4', '#e9e6e2'];
function styleSpec(style, rng) {
  const base = {
    wallMat: 'stucco',
    roofMat: 'roofRed',
    roofCol: rng.pick([[1, 1, 1], [0.9, 0.86, 0.84], [1.06, 0.98, 0.92], [0.8, 0.76, 0.74]]),
    stoneCol: COL(rng.pick(STONES)),
    trimCol: COL('#efe9dc'),
    soffitCol: COL('#b9ad9a'),
    frame: COL(FRAMES.white),
    shutterCol: COL(FRAMES.green),
    timberCol: COL('#4a3526'),
    bay: 2.7,
    blank: 0.16,
    sill: 0.95,
    win: 'std',
    win0: 'std',
    shutters: false,
    lintel: false,
    stoneGround: false,
    timber: false,
    plinth: rng.range(0.6, 0.95),
    floors: 2,
    fh: 3.15,
  };
  const pick = (...a) => COL(rng.pick(a));
  switch (style) {
    case 'german':
      return {
        ...base,
        wallCol: pick('#e5cf9a', '#dcbc72', '#ead9b2', '#d2ad6c', '#ede6d3', '#cdb98e'),
        frame: pick(FRAMES.white, FRAMES.green, FRAMES.red, FRAMES.cream),
        roof: rng.pick(['halfhip', 'halfhip', 'gable', 'hip']),
        pitch: rng.range(0.82, 0.96),
        floors: rng.pick([2, 2, 3]),
        wing: rng.chance(0.6),
        tower: rng.chance(0.42) ? rng.pick(['round-cone', 'round-bell', 'square-pyramid']) : null,
        dormers: rng.chance(0.7),
        quoins: rng.chance(0.6),
        lintel: rng.chance(0.55),
        stoneGround: rng.chance(0.22),
        shutters: rng.chance(0.3),
        shutterCol: pick(FRAMES.green, FRAMES.red),
        win: 'tall',
        win0: 'tall',
        porch: 'gable',
        plinth: rng.range(0.8, 1.15),
      };
    case 'tudor':
      return {
        ...base,
        wallCol: pick('#efe8d6', '#e9dfc6', '#f2efe6'),
        frame: COL(FRAMES.brown),
        trimCol: COL('#4a3526'),
        soffitCol: COL('#3a2a1f'),
        roof: 'gable',
        pitch: rng.range(0.9, 1.02),
        roofCol: rng.pick([[0.86, 0.8, 0.78], [0.76, 0.72, 0.7], [0.95, 0.9, 0.86]]),
        wing: true,
        timber: true,
        tower: null,
        dormers: rng.chance(0.5),
        chimneys: 2,
        porch: 'gable',
        bayWin: rng.chance(0.5),
        stoneGround: rng.chance(0.3),
      };
    case 'spanish':
      return {
        ...base,
        wallCol: pick('#f3ece0', '#f0dcc0', '#ecc9a6', '#f6f1e7'),
        frame: COL(FRAMES.brown),
        roof: 'hip',
        pitch: rng.range(0.4, 0.5),
        roofCol: [1.1, 1.0, 0.92],
        wing: rng.chance(0.5),
        tower: rng.chance(0.5) ? 'square-pyramid' : null,
        porch: 'arcade',
        win: 'std',
        win0: rng.pick(['arch', 'french']),
        soffitCol: COL('#5a4334'),
      };
    case 'french':
      return {
        ...base,
        wallCol: pick('#ddd8cc', '#cfcabd', '#e6ddc9', '#d1cbc5'),
        roof: 'mansard',
        roofMat: 'roofSlate',
        roofCol: [1, 1, 1],
        pitch: 0.4,
        wing: false,
        tower: null,
        shutters: rng.chance(0.65),
        shutterCol: pick(FRAMES.blue, FRAMES.green, '#8a8f8a'),
        win: 'tall',
        win0: 'french',
        blank: 0.05,
        bandFloor: true,
        quoins: rng.chance(0.4),
        porch: 'balcony',
        chimneys: 2,
      };
    case 'nordic':
      return {
        ...base,
        wallCol: pick('#7fb3a4', '#9bb7c6', '#d8a48c', '#c5cc9d', '#a3473b', '#e6d9a8'),
        roof: 'gable',
        roofMat: rng.chance(0.3) ? 'roofSlate' : 'roofRed',
        pitch: rng.range(0.98, 1.1),
        wing: rng.chance(0.55),
        tower: rng.chance(0.5) ? 'square-spire' : null,
        dormers: rng.chance(0.5),
        porch: 'gable',
        win: 'std',
        win0: 'std',
        bandFloor: true,
      };
    case 'colonial':
      return {
        ...base,
        wallCol: pick('#f1ede4', '#b3604a', '#e8dfc8', '#a9573f'),
        roof: 'hip',
        roofMat: rng.chance(0.5) ? 'roofSlate' : 'roofRed',
        roofCol: [1, 1, 1],
        pitch: rng.range(0.52, 0.62),
        wing: false,
        tower: null,
        shutters: rng.chance(0.75),
        shutterCol: pick(FRAMES.green, '#2a2f2c', FRAMES.blue),
        porch: 'columns',
        blank: 0.04,
        chimneys: 2,
        win: 'std',
        win0: 'tall',
      };
    case 'modern':
      return {
        ...base,
        wallCol: pick('#f4f1ea', '#ece4d2', '#e9dcb5', '#f0ead8'),
        frame: pick('#39424a', FRAMES.brown),
        trimCol: COL('#e6e0d2'),
        roof: 'flat',
        wing: rng.chance(0.4),
        tower: null,
        porch: 'canopy',
        roundBay: true,
        win: 'wide',
        win0: 'wide',
        bay: 3.6,
        bandFloor: true,
        blank: 0.1,
      };
    default:
      // granite
      return {
        ...base,
        wallMat: 'granite',
        wallCol: COL(rng.pick(STONES)),
        frame: pick(FRAMES.white, FRAMES.green, FRAMES.red),
        roof: rng.pick(['hip', 'gable', 'halfhip']),
        pitch: rng.range(0.7, 0.9),
        wing: rng.chance(0.45),
        tower: rng.chance(0.45) ? rng.pick(['round-crenel', 'round-cone']) : null,
        dormers: rng.chance(0.4),
        porch: 'arcade',
        win: 'tall',
        win0: rng.pick(['tall', 'arch']),
        towerMat: 'granite',
        chimneyMat: 'granite',
      };
  }
}

function porch(ctx, S, rng, kind, x, zFront, base, fh) {
  const T = ctx.b('trim');
  if (kind === 'gable') {
    const w = 2.7,
      dep = 1.7;
    const G = ctx.b('granite');
    G.setColor(...S.stoneCol);
    G.box(x, (base - 1.2) / 2, zFront + dep / 2, w, base + 1.2, dep, 'xXYZ');
    T.setColor(...(S.timber ? S.timberCol : S.trimCol));
    for (const sx of [-1, 1]) T.box(x + sx * (w / 2 - 0.12), base + 1.2, zFront + dep - 0.14, 0.16, 2.4, 0.16);
    roofGable(ctx, S, x, zFront + dep / 2 - 0.1, w, dep + 0.2, base + 2.42, 0.72, { axis: 'z', over: 0.25, verge: 0.18, attic: false, ends: [1] });
    return steps(ctx, S, x, zFront + dep, base, 1.8) + dep;
  }
  if (kind === 'columns') {
    const w = 5.2,
      dep = 2.2,
      h = fh * 2 - 0.3;
    const G = ctx.b('granite');
    G.setColor(...S.stoneCol);
    G.box(x, (base - 1.2) / 2, zFront + dep / 2, w, base + 1.2, dep, 'xXYZ');
    T.setColor(...COL('#f4f1ea'));
    for (let i = 0; i < 4; i++) {
      const cxx = x - w / 2 + 0.35 + (i * (w - 0.7)) / 3;
      T.cylinder(cxx, base, zFront + dep - 0.32, 0.19, 0.16, h, 10);
      T.box(cxx, base + 0.08, zFront + dep - 0.32, 0.5, 0.16, 0.5);
      T.box(cxx, base + h - 0.07, zFront + dep - 0.32, 0.46, 0.14, 0.46);
    }
    T.box(x, base + h + 0.2, zFront + dep / 2, w + 0.1, 0.4, dep + 0.1);
    const S2 = { ...S, wallCol: COL('#f4f1ea'), wallMat: 'stucco', timber: false };
    roofGable(ctx, S2, x, zFront + dep / 2, w + 0.1, dep + 0.1, base + h + 0.4, 0.42, { axis: 'z', over: 0.2, verge: 0.2, attic: false, ends: [1] });
    return steps(ctx, S, x, zFront + dep, base, 3.2) + dep;
  }
  if (kind === 'arcade') {
    const n = 3,
      bw = 2.3,
      w = n * bw + 0.4,
      dep = 2.3,
      h = 2.9;
    const G = ctx.b('granite');
    G.setColor(...S.stoneCol);
    G.box(x, (base - 1.2) / 2, zFront + dep / 2, w, base + 1.2, dep, 'xXYZ');
    const mat = S.wallMat;
    const Bd = ctx.b(mat);
    Bd.setColor(...S.wallCol);
    const zf = zFront + dep - 0.2;
    for (let i = 0; i <= n; i++) Bd.box(x - w / 2 + 0.2 + i * bw, base + h / 2, zf, 0.4, h, 0.4, 'xXzZ');
    Bd.box(x, base + h + 0.25, zf, w, 0.5, 0.4);
    // haunches make each opening read as an arch
    for (let i = 0; i < n; i++) {
      const x0 = x - w / 2 + 0.4 + i * bw,
        x1 = x0 + bw - 0.4;
      for (const zz of [zf + 0.2, zf - 0.2]) {
        const out = [0, 0, zz > zf ? 1 : -1];
        for (let k = 0; k < 4; k++) {
          const a0 = (k / 4) * (Math.PI / 2),
            a1 = ((k + 1) / 4) * (Math.PI / 2);
          const r = 0.62;
          facePoly(Bd, [[x0, base + h, zz], [x0 + r - Math.cos(a0) * r, base + h - r + Math.sin(a0) * r, zz], [x0 + r - Math.cos(a1) * r, base + h - r + Math.sin(a1) * r, zz]], out);
          facePoly(Bd, [[x1, base + h, zz], [x1 - r + Math.cos(a0) * r, base + h - r + Math.sin(a0) * r, zz], [x1 - r + Math.cos(a1) * r, base + h - r + Math.sin(a1) * r, zz]], out);
        }
      }
    }
    // lean-to tiled roof
    const R = ctx.b(S.roofMat);
    R.setColor(...S.roofCol);
    roofPoly(R, [[x - w / 2 - 0.2, base + h + 1.35, zFront], [x + w / 2 + 0.2, base + h + 1.35, zFront], [x + w / 2 + 0.2, base + h + 0.45, zf + 0.55], [x - w / 2 - 0.2, base + h + 0.45, zf + 0.55]], [1, 0, 0]);
    T.setColor(...S.soffitCol);
    facePoly(T, [[x - w / 2 - 0.2, base + h + 1.25, zFront], [x + w / 2 + 0.2, base + h + 1.25, zFront], [x + w / 2 + 0.2, base + h + 0.35, zf + 0.55], [x - w / 2 - 0.2, base + h + 0.35, zf + 0.55]], [0, -1, 0]);
    return steps(ctx, S, x, zFront + dep, base, 2.0) + dep;
  }
  if (kind === 'canopy') {
    T.setColor(...S.trimCol);
    T.box(x, base + 2.62, zFront + 0.8, 3.0, 0.16, 1.6);
    T.cylinder(x + 1.2, base, zFront + 1.4, 0.09, 0.09, 2.55, 8);
    const G = ctx.b('granite');
    G.setColor(...S.stoneCol);
    G.box(x, (base - 1.2) / 2, zFront + 0.7, 2.6, base + 1.2, 1.4, 'xXYZ');
    return steps(ctx, S, x, zFront + 1.4, base, 1.9) + 1.4;
  }
  // 'balcony': a small railed balcony over the door, carried on brackets
  T.setColor(...S.trimCol);
  T.box(x, base + fh - 0.06, zFront + 0.55, 2.6, 0.14, 1.1);
  T.box(x - 1.0, base + fh - 0.36, zFront + 0.3, 0.14, 0.5, 0.6);
  T.box(x + 1.0, base + fh - 0.36, zFront + 0.3, 0.14, 0.5, 0.6);
  const F = ctx.b('fence');
  F.setColor(1, 1, 1);
  const y0 = base + fh + 0.01,
    y1 = y0 + 0.95;
  const rail = (ax, az, bx, bz) => F.quad([ax, y0, az], [bx, y0, bz], [bx, y1, bz], [ax, y1, az], [0, 0, Math.hypot(bx - ax, bz - az) / 1.5, 1]);
  rail(x - 1.28, zFront + 1.08, x + 1.28, zFront + 1.08);
  rail(x - 1.28, zFront + 0.02, x - 1.28, zFront + 1.08);
  rail(x + 1.28, zFront + 1.08, x + 1.28, zFront + 0.02);
  return steps(ctx, S, x, zFront, base, 1.9);
}

function ivy(ctx, forest, rng, rec, heightTop) {
  if (!forest) return;
  const { ax, az, bx, bz } = rec[0];
  const L = Math.hypot(bx - ax, bz - az);
  const tx = (bx - ax) / L,
    tz = (bz - az) / L,
    nx = -tz,
    nz = tx;
  const y0 = rec[0].y0;
  const H = heightTop - y0;
  const seed = rng.range(0, 100);
  const n = Math.round(L * H * 1.9);
  const nrm = ctx.dir(nx, 0, nz);
  for (let i = 0; i < n; i++) {
    const u = rng.range(0, L),
      v = H * Math.pow(rng.next(), 1.35);
    if (vnoise(u * 0.45 + seed, v * 0.45, 5) < 0.34 + (v / H) * 0.3) continue;
    // leave the panes clear
    let blocked = false;
    for (const r of rec) {
      const vv = y0 + v - r.y0;
      for (const o of r.ops) if (u > o.u0 - 0.1 && u < o.u1 + 0.1 && vv > o.v0 - 0.1 && vv < o.v1 + 0.1) blocked = true;
    }
    if (blocked) continue;
    const p = ctx.world(ax + tx * u + nx * 0.09, y0 + v, az + tz * u + nz * 0.09);
    forest.addCard('ivy', p, nrm, rng.range(0.6, 0.95), lerp(0.75, 1, v / H), 0.12);
  }
}

// ---------------------------------------------------------------------------------------------
// A villa
// ---------------------------------------------------------------------------------------------
function buildVilla(cb, v, colliders, forest) {
  const rng = new RNG(v.seed);
  const S = styleSpec(v.style, rng);
  const ctx = makeCtx(cb, v.x, v.y, v.z, v.rot);
  const w = v.w,
    d = v.d;
  const base = S.plinth,
    fh = S.fh,
    floors = S.floors;
  const eave = base + floors * fh;
  const hw = w / 2,
    hd = d / 2;

  // wing (front-facing cross gable) on one side
  const wingSide = rng.sign();
  let wing = null;
  if (S.wing) {
    const ww = clamp(w * rng.range(0.36, 0.46), 4.2, 6.4);
    const wp = rng.range(1.8, 3.2);
    wing = { cx: wingSide * (hw - ww / 2), cz: hd + wp / 2 - 0.4, w: ww, d: wp + 0.8, floors };
  }
  // front door on the free part of the façade
  const freeL = wing ? w - wing.w : w;
  const doorX = wing ? -wingSide * (hw - freeL / 2) + rng.range(-0.4, 0.4) : S.porch === 'columns' || S.porch === 'balcony' ? 0 : rng.range(-0.25, 0.25) * w;
  const doorU = doorX + hw;

  plinth(ctx, S, 0, 0, w, d, base);
  const main = blockWalls(ctx, S, rng, 0, 0, w, d, base, floors, fh, { door: { side: 0, u: doorU } });
  if (S.quoins) quoins(ctx, S, 0, 0, w, d, base, eave);
  if (S.bandFloor) for (let f = 1; f < floors; f++) band(ctx, S.trimCol, 0, 0, w, d, base + f * fh);
  band(ctx, S.trimCol, 0, 0, w, d, eave - 0.08, 0.16, 0.08);

  // main roof
  let ridgeY = eave + 1;
  if (S.roof === 'gable' || S.roof === 'halfhip') {
    const r = roofGable(ctx, S, 0, 0, w, d, eave, S.pitch, { half: S.roof === 'halfhip', rng, gableCol: S.wallCol, gableMat: S.wallMat === 'granite' ? 'granite' : 'stucco' });
    ridgeY = r.yr;
    if (S.dormers) {
      const n = w > 13 ? 2 : 1;
      for (let i = 0; i < n; i++) {
        let ax = n === 1 ? -wingSide * w * 0.18 : (i - 0.5) * w * 0.42;
        if (wing && Math.abs(ax - wing.cx) < wing.w / 2 + 1.0) ax = -wingSide * w * 0.24;
        dormer(ctx, S, rng, ax, 0, hd, eave, S.pitch, 1);
        if (rng.chance(0.5)) dormer(ctx, S, rng, ax, 0, hd, eave, S.pitch, -1);
      }
    }
  } else if (S.roof === 'hip') {
    ridgeY = roofHip(ctx, S, 0, 0, w, d, eave, S.pitch).yr;
  } else if (S.roof === 'mansard') {
    ridgeY = roofMansard(ctx, S, rng, 0, 0, w, d, eave).yr;
  } else {
    roofFlat(ctx, S, 0, 0, w, d, eave);
    ridgeY = eave + 0.8;
  }

  if (wing) {
    plinth(ctx, S, wing.cx, wing.cz, wing.w, wing.d, base);
    blockWalls(ctx, S, rng, wing.cx, wing.cz, wing.w, wing.d, base, floors, fh, { skip: [2], margin: 0.8 });
    if (S.quoins) quoins(ctx, S, wing.cx, wing.cz, wing.w, wing.d, base, eave);
    band(ctx, S.trimCol, wing.cx, wing.cz, wing.w, wing.d, eave - 0.08, 0.16, 0.08);
    if (S.roof === 'flat') roofFlat(ctx, S, wing.cx, wing.cz, wing.w, wing.d, eave);
    else if (S.roof === 'hip') {
      // cross-hip: extend back into the main roof
      roofHip(ctx, S, wing.cx, wing.cz - hd / 2, wing.w, wing.d + hd, eave, S.pitch);
    } else {
      roofGable(ctx, S, wing.cx, wing.cz - hd / 2, wing.w, wing.d + hd, eave, S.pitch, { axis: 'z', half: S.roof === 'halfhip', ends: [1], rng, gableMat: S.wallMat === 'granite' ? 'granite' : 'stucco' });
    }
    colliders.addBox(...xz(ctx.world(wing.cx, 0, wing.cz)), wing.w / 2 + 0.15, wing.d / 2 + 0.15, v.rot);
  }

  // tower at the free front corner
  if (S.tower) {
    const [kind, cap] = S.tower.split('-');
    const r = kind === 'round' ? rng.range(1.75, 2.15) : rng.range(1.5, 1.8);
    const tx = -wingSide * (hw - (kind === 'round' ? 0.2 : r - 0.3)),
      tz = hd - (kind === 'round' ? 0.2 : r - 0.6);
    const top = eave + rng.range(1.6, 3.2);
    tower(ctx, S, rng, tx, tz, r, base, top, kind, cap, fh);
    const p = ctx.world(tx, 0, tz);
    if (kind === 'round') colliders.addCircle(p.x, p.z, r + 0.15);
    else colliders.addBox(p.x, p.z, r + 0.15, r + 0.15, v.rot);
  }

  // rounded bay of the 1930s "moderne" houses
  if (S.roundBay) {
    const r = Math.min(d * 0.36, 3.0);
    const bxx = wingSide * hw,
      bzz = hd - r;
    const Bd = ctx.b('stucco');
    Bd.setColor(...S.wallCol);
    Bd.cylinder(bxx, -1.6, bzz, r, r, eave + 1.6 + 0.8, 18, { shadeBottom: 0.85 });
    const T = ctx.b('trim');
    T.setColor(...S.trimCol);
    T.cylinder(bxx, eave, bzz, r + 0.18, r + 0.18, 0.2, 18, { capTop: true });
    for (let f = 0; f < floors; f++) {
      const a0 = wingSide > 0 ? -1.2 : Math.PI - 1.2;
      roundWindows(ctx, S, rng, bxx, bzz, r, base + f * fh + 0.95, [0, 0.6, 1.2, 1.8, 2.4].map((a) => a0 + a), 'std', 0.95);
    }
    const p = ctx.world(bxx, 0, bzz);
    colliders.addCircle(p.x, p.z, r + 0.15);
  }

  // entrance
  const reach = porch(ctx, S, rng, S.porch, doorX, hd, base, fh);

  // bay window
  if (S.bayWin && !wing) {
    const bx = -Math.sign(doorX || 1) * w * 0.26;
    const S2 = { ...S, bay: 9, blank: 0, shutters: false };
    plinth(ctx, S, bx, hd + 0.5, 2.8, 1.0, base);
    blockWalls(ctx, S2, rng, bx, hd + 0.5, 2.8, 1.0, base, 1, fh, { skip: [2], winType: 'wide', margin: 0.2 });
    roofPyramid(ctx, S, bx, hd + 0.3, 2.8, 1.4, base + fh, 0.7, 0.2);
  }

  // chimneys
  const nch = S.chimneys ?? (rng.chance(0.75) ? 1 : 0);
  for (let i = 0; i < nch; i++) {
    const cxm = nch === 2 ? (i ? 1 : -1) * (hw - 1.4) : rng.range(-0.3, 0.3) * w;
    chimney(ctx, S, cxm, rng.range(-0.5, 0.2) * hd, eave + 0.2, ridgeY + rng.range(0.7, 1.2));
  }

  // creeper turning crimson on a side or back wall
  if (forest && rng.chance(0.34)) {
    const si = rng.pick([1, 2, 3]);
    const rec = main.record.filter((r) => r.si === si);
    if (rec.length) ivy(ctx, forest, rng, rec, eave);
  }

  colliders.addBox(v.x, v.z, hw + 0.15, hd + 0.15, v.rot);
  v.doorLocal = { x: doorX, z: hd + reach };
  v.height = ridgeY;
  v.spec = S;
}
const xz = (p) => [p.x, p.z];

// ---------------------------------------------------------------------------------------------
// Princess House (公主樓): blue-green walls, white trim, steep red roofs and a needle spire
// ---------------------------------------------------------------------------------------------
function buildPrincess(cb, v, colliders) {
  const rng = new RNG(1933);
  const ctx = makeCtx(cb, v.x, v.y, v.z, v.rot);
  const S = {
    ...styleSpec('nordic', rng),
    wallCol: COL('#6fb3a8'),
    trimCol: COL('#f6f3ea'),
    frame: COL('#f6f3ea'),
    soffitCol: COL('#d9d2c2'),
    roofMat: 'roofRed',
    roofCol: [0.92, 0.84, 0.8],
    stoneCol: COL('#f3ece2'),
    pitch: 1.06,
    timber: false,
    shutters: false,
    lintel: false,
    stoneGround: false,
    bandFloor: true,
    win: 'std',
    win0: 'std',
    blank: 0.05,
    plinth: 0.9,
  };
  const w = 9.6,
    d = 8.0,
    fh = 3.05,
    base = S.plinth,
    floors = 2,
    eave = base + floors * fh;
  const hw = w / 2,
    hd = d / 2;
  plinth(ctx, S, 0, 0, w, d, base);
  blockWalls(ctx, S, rng, 0, 0, w, d, base, floors, fh, { door: { side: 0, u: hw - 1.2 } });
  band(ctx, S.trimCol, 0, 0, w, d, base + fh);
  band(ctx, S.trimCol, 0, 0, w, d, eave - 0.08, 0.16, 0.08);
  // white corner boards
  const T = ctx.b('trim');
  T.setColor(...S.trimCol);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) T.box(sx * (hw + 0.02), base + (floors * fh) / 2, sz * (hd + 0.02), 0.22, floors * fh, 0.22);
  const r = roofGable(ctx, S, 0, 0, w, d, eave, S.pitch, { rng, atticType: 'std' });
  dormer(ctx, S, rng, -1.9, 0, hd, eave, S.pitch, 1);
  dormer(ctx, S, rng, 1.4, 0, hd, eave, S.pitch, -1);
  // front cross-gable
  const wg = { cx: 2.3, cz: hd + 1.0, w: 4.4, d: 2.8 };
  plinth(ctx, S, wg.cx, wg.cz, wg.w, wg.d, base);
  blockWalls(ctx, S, rng, wg.cx, wg.cz, wg.w, wg.d, base, floors, fh, { skip: [2], margin: 0.7 });
  for (const sx of [-1, 1]) T.box(wg.cx + sx * (wg.w / 2 + 0.02), base + (floors * fh) / 2, wg.cz + wg.d / 2 + 0.02, 0.22, floors * fh, 0.22);
  roofGable(ctx, S, wg.cx, wg.cz - hd / 2, wg.w, wg.d + hd, eave, 1.15, { axis: 'z', ends: [1], rng, atticType: 'std' });
  // the slender tower with its needle spire
  const tw = 2.7,
    tx = -hw + 0.5,
    tz = hd - 0.2,
    ttop = eave + 3.4;
  const S2 = { ...S, bay: 9, blank: 0, win: 'small', win0: 'std' };
  plinth(ctx, S, tx, tz, tw, tw, base);
  blockWalls(ctx, S2, rng, tx, tz, tw, tw, base, 3, (ttop - base) / 3, { margin: 0.5 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) T.box(tx + sx * (tw / 2 + 0.02), base + (ttop - base) / 2, tz + sz * (tw / 2 + 0.02), 0.2, ttop - base, 0.2);
  band(ctx, S.trimCol, tx, tz, tw, tw, ttop - 0.1, 0.2, 0.1);
  // spire: a flared skirt, then the needle
  roofPyramid(ctx, S, tx, tz, tw, tw, ttop, 1.5, 0.42);
  roofPyramid(ctx, S, tx, tz, tw * 0.62, tw * 0.62, ttop + 0.72, 7.4, 0.0);
  T.setColor(0.25, 0.25, 0.25);
  T.cylinder(tx, ttop + 8.0, tz, 0.035, 0.02, 1.3, 5);
  // low side wing with its own steep roof
  const lw = { cx: -hw - 1.6, cz: -0.6, w: 3.4, d: 5.2 };
  plinth(ctx, S, lw.cx, lw.cz, lw.w, lw.d, base);
  blockWalls(ctx, S, rng, lw.cx, lw.cz, lw.w, lw.d, base, 1, fh, { skip: [1], margin: 0.8 });
  roofGable(ctx, S, lw.cx, lw.cz, lw.w, lw.d, base + fh, 1.0, { axis: 'z', rng, attic: false });
  chimney(ctx, { ...S, chimneyCol: COL('#f6f3ea') }, 1.0, -1.0, eave + 1.5, r.yr + 1.1);
  const reach = porch(ctx, S, rng, 'gable', hw - 1.2 - hw + hw, hd, base, fh);
  colliders.addBox(v.x, v.z, hw + 0.15, hd + 0.15, v.rot);
  let p = ctx.world(wg.cx, 0, wg.cz);
  colliders.addBox(p.x, p.z, wg.w / 2 + 0.1, wg.d / 2 + 0.1, v.rot);
  p = ctx.world(tx, 0, tz);
  colliders.addBox(p.x, p.z, tw / 2 + 0.1, tw / 2 + 0.1, v.rot);
  p = ctx.world(lw.cx, 0, lw.cz);
  colliders.addBox(p.x, p.z, lw.w / 2 + 0.1, lw.d / 2 + 0.1, v.rot);
  v.doorLocal = { x: hw - 1.2, z: hd + reach + 1.7 };
  v.height = ttop + 8;
}

// ---------------------------------------------------------------------------------------------
// Huashi Lou (花石樓): rock-faced granite, a round five-storey tower with battlements and a
// polygonal bay looking out over Taiping Bay
// ---------------------------------------------------------------------------------------------
function buildHuashi(cb, colliders) {
  const L = LANDMARKS.huashi;
  const rng = new RNG(1931);
  const ctx = makeCtx(cb, L.x, L.y, L.z, L.rot);
  const stone = COL('#fff8ec');
  const S = {
    ...styleSpec('granite', rng),
    wallMat: 'ashlar',
    towerMat: 'ashlar',
    wallCol: stone,
    stoneCol: stone,
    frame: COL('#e9e3d4'),
    trimCol: COL('#cfc6b4'),
    soffitCol: COL('#8a8274'),
    roofMat: 'roofRed',
    roofCol: [0.85, 0.8, 0.78],
    win: 'tall',
    win0: 'arch',
    bay: 2.9,
    blank: 0.06,
    lintel: false,
    shutters: false,
    stoneGround: false,
    plinth: 1.0,
  };
  const A = (name) => {
    const b = ctx.b('ashlar');
    b.setColor(...stone);
    return b;
  };
  const base = 1.0,
    fh = 3.4;
  // main block, three storeys under a battlemented terrace
  const w = 13.6,
    d = 10.4,
    eave = base + 3 * fh;
  A().box(0, (base - 3) / 2, 0, w + 0.3, base + 3, d + 0.3, 'xXYzZ', 0.8);
  blockWalls(ctx, S, rng, 0, 0, w, d, base, 3, fh, { door: { side: 2, u: w * 0.5 } });
  band(ctx, S.trimCol, 0, 0, w, d, base + fh, 0.18, 0.08);
  band(ctx, S.trimCol, 0, 0, w, d, eave - 0.12, 0.24, 0.14);
  crenelRect(ctx, 'ashlar', stone, 0, 0, w + 0.3, d + 0.3, eave);
  const T = ctx.b('trim');
  T.setColor(0.36, 0.35, 0.33);
  T.box(0, eave + 0.02, 0, w - 0.4, 0.04, d - 0.4, 'Y');

  // taller rear block with a small red-tiled cap
  const rb = { cx: 3.4, cz: -d / 2 + 2.4, w: 6.0, d: 4.8, top: base + 4 * fh };
  blockWalls(ctx, { ...S, win0: 'tall' }, rng, rb.cx, rb.cz, rb.w, rb.d, eave, 1, fh, { margin: 0.9 });
  band(ctx, S.trimCol, rb.cx, rb.cz, rb.w, rb.d, rb.top - 0.1, 0.2, 0.12);
  roofHip(ctx, S, rb.cx, rb.cz, rb.w, rb.d, rb.top, 0.62, { over: 0.35 });

  // the round tower at the seaward corner
  const tr = 3.15,
    tx = -w / 2 + 0.6,
    tz = d / 2 - 0.4,
    ttop = base + 5 * fh + 0.4;
  A().cylinder(tx, -3, tz, tr, tr, ttop + 3, 24, { shadeBottom: 0.8 });
  for (let f = 0; f < 5; f++) {
    const y = base + f * fh + 1.0;
    roundWindows(ctx, S, rng, tx, tz, tr, y, [0.35, 1.25, 2.15, 3.05, 3.95].map((a) => a + (f % 2) * 0.2), f === 0 ? 'arch' : 'tall', f === 4 ? 0.7 : 0.82);
  }
  // corbelled gallery and battlements
  A().cylinder(tx, ttop - 0.7, tz, tr, tr + 0.42, 0.7, 24);
  crenelRound(ctx, 'ashlar', stone, tx, tz, tr + 0.42, ttop, 14, 0.6, 0.7);
  T.setColor(0.36, 0.35, 0.33);
  T.cylinder(tx, ttop + 0.02, tz, tr + 0.1, tr + 0.1, 0.02, 24, { capTop: true });
  for (const yb of [base + fh, base + 3 * fh]) {
    T.setColor(...S.trimCol);
    T.cylinder(tx, yb - 0.09, tz, tr + 0.07, tr + 0.07, 0.18, 24);
  }
  // flagstaff
  T.setColor(0.2, 0.2, 0.2);
  T.cylinder(tx, ttop, tz, 0.05, 0.03, 4.2, 6);

  // polygonal bay on the sea front, two storeys with a balustraded terrace
  const br = 3.3,
    bx = 2.6,
    bz = d / 2;
  const pts = [];
  for (let i = 0; i <= 4; i++) {
    const a = (i / 4) * Math.PI;
    pts.push([bx + Math.cos(a) * br, bz + Math.sin(a) * br * 0.86]);
  }
  const btop = base + 2 * fh;
  for (let i = 0; i < 4; i++) {
    const p0 = pts[i + 1],
      p1 = pts[i];
    const Lw = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
    A().quad([p0[0], -3, p0[1]], [p1[0], -3, p1[1]], [p1[0], base, p1[1]], [p0[0], base, p0[1]], [0, -3, Lw, base]);
    for (let f = 0; f < 2; f++) {
      const t = WINDOW_TYPES[f === 0 ? 'arch' : 'tall'];
      const op = [{ u0: Lw / 2 - t.w / 2, u1: Lw / 2 + t.w / 2, v0: 0.85, v1: 0.85 + t.h, type: f === 0 ? 'arch' : 'tall', lit: rng.chance(0.5) }];
      wall(A(), p0[0], p0[1], p1[0], p1[1], base + f * fh, base + (f + 1) * fh, op, fillWindow(ctx, S));
    }
  }
  // bay roof slab + parapet
  const slab = pts.map((p) => [p[0] + (p[0] - bx) * 0.05, p[1] + (p[1] - bz) * 0.05]);
  T.setColor(...S.trimCol);
  T.prism(slab.slice().reverse(), btop - 0.02, btop + 0.2, { capTop: true });
  for (let i = 0; i < 4; i++) {
    const p0 = pts[i + 1],
      p1 = pts[i];
    const m = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
    const ang = Math.atan2(p1[1] - p0[1], p1[0] - p0[0]);
    const Lw = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
    const mm = new THREE.Matrix4().makeRotationY(-ang).setPosition(m[0], 0, m[1]);
    const Ab = A();
    ctx.local(Ab, mm, () => {
      Ab.box(0, btop + 0.2 + 0.28, 0, Lw, 0.56, 0.3);
      for (const f of [-0.3, 0.3]) Ab.box(f * Lw, btop + 0.2 + 0.56 + 0.3, 0, Lw * 0.26, 0.6, 0.3);
    });
  }

  // seaward terrace with a stone balustrade, and steps down to the lawn
  const tz0 = d / 2,
    tdep = 4.6;
  A().box(-0.6, (base - 3) / 2 - 0.25, tz0 + tdep / 2, w + 3.4, base + 2.5, tdep, 'xXYZ', 0.8);
  const bal = ctx.b('ashlar');
  bal.setColor(...stone);
  const by = base - 0.5;
  bal.box(-0.6, by + 0.45, tz0 + tdep - 0.15, w + 3.4, 0.9, 0.3);
  bal.box(-0.6 - (w + 3.4) / 2 + 0.15, by + 0.45, tz0 + tdep / 2, 0.3, 0.9, tdep - 0.3);
  bal.box(-0.6 + (w + 3.4) / 2 - 0.15, by + 0.45, tz0 + tdep / 2, 0.3, 0.9, tdep - 0.3);
  // entrance steps on the landward side
  steps(ctx, S, 0, -d / 2, base, 3.2, -1);
  T.setColor(...S.trimCol);
  T.box(0, base + 2.9, -d / 2 - 0.9, 3.6, 0.2, 1.8);
  for (const sx of [-1, 1]) A().box(sx * 1.55, base + 1.4, -d / 2 - 1.55, 0.5, 2.8, 0.5);

  colliders.addBox(L.x, L.z, w / 2 + 0.2, d / 2 + 0.2, L.rot);
  let p = ctx.world(tx, 0, tz);
  colliders.addCircle(p.x, p.z, tr + 0.2);
  p = ctx.world(bx, 0, bz + 1);
  colliders.addCircle(p.x, p.z, br);
  // balustrade
  const c0 = ctx.world(-0.6 - (w + 3.4) / 2, 0, tz0 + tdep - 0.15),
    c1 = ctx.world(-0.6 + (w + 3.4) / 2, 0, tz0 + tdep - 0.15);
  colliders.addSegment(c0.x, c0.z, c1.x, c1.z, 0.2);
  L.height = ttop;
}

// ---------------------------------------------------------------------------------------------
export function buildBuildings(scene, colliders, forest) {
  const cb = new ChunkedBuilders(200);
  for (const v of VILLAS) {
    if (v.kind === 'princess') buildPrincess(cb, v, colliders);
    else buildVilla(cb, v, colliders, forest);
  }
  buildHuashi(cb, colliders);

  const st = stuccoTextures(),
    gr = graniteTextures('rubble'),
    ash = graniteTextures('ashlar'),
    rr = roofTextures('red'),
    rs = roofTextures('slate'),
    wa = windowAtlas();
  const std = (o) => new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0, ...o });
  const mats = {
    stucco: std({ map: st.map, normalMap: st.normalMap, roughness: 0.94 }),
    granite: std({ map: gr.map, normalMap: gr.normalMap, roughness: 0.9 }),
    ashlar: std({ map: ash.map, normalMap: ash.normalMap, roughness: 0.9 }),
    roofRed: std({ map: rr.map, normalMap: rr.normalMap, roughness: 0.78 }),
    roofSlate: std({ map: rs.map, normalMap: rs.normalMap, roughness: 0.6 }),
    trim: std({ roughness: 0.8 }),
    window: std({ map: wa.map, roughnessMap: wa.roughnessMap, emissiveMap: wa.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0, roughness: 1 }),
    fence: std({ map: fenceTexture(), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.55, metalness: 0.4 }),
  };
  mats.stucco.normalScale.set(0.5, 0.5);
  mats.granite.normalScale.set(0.45, 0.45);
  mats.ashlar.normalScale.set(1.0, 1.0);
  mats.roofRed.normalScale.set(1.0, 1.0);

  // window panes mirror the sky and catch the sun
  patchMaterial(mats.window, 'window', (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWN;\nvarying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWN = normal;\nvWP = position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWN;\nvarying vec3 vWP;\nuniform vec3 uLightDir;\nuniform vec3 uLightColor;')
      .replace('#include <fog_pars_fragment>', `#include <fog_pars_fragment>\n${SKY_GLSL}`)
      .replace(
        '#include <opaque_fragment>',
        /* glsl */ `
				{
					vec3 Vw = normalize( cameraPosition - vWP );
					vec3 Nw = normalize( vWN );
					float glass = 1.0 - smoothstep( 0.1, 0.3, roughnessFactor );
					float fr = 0.07 + 0.93 * pow( 1.0 - max( dot( Nw, Vw ), 0.0 ), 4.0 );
					vec3 Rw = reflect( - Vw, Nw );
					outgoingLight += skyThroughAir( vWP, normalize( Rw + vec3( 0.0, 0.06, 0.0 ) ) ) * fr * glass * 0.8;
					outgoingLight += uLightColor * pow( max( dot( Rw, uLightDir ), 0.0 ), 90.0 ) * glass * 1.2;
				}
				#include <opaque_fragment>`
      );
  });

  const group = new THREE.Group();
  group.name = 'buildings';
  cb.buildMeshes(mats, group, { window: { cast: false }, fence: { cast: false } });
  scene.add(group);
  return { group, mats };
}
