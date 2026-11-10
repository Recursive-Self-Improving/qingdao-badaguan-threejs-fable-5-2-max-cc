// Street furniture and the shoreline works: granite garden walls with gates, cast-iron lamp
// standards, benches, street-name plates, the sea wall and promenade, bathing huts, reefs,
// the viewing deck on Taiping Cape and the engraved "八大关" boulder.

import * as THREE from 'three';
import { ROADS, LOTS, INTERSECTIONS, ROAD_BY_ID, heightAt, coastDist, rockiness, shoreZ, lotAt, nearestRoad, roadPoint, shanhaiZ, villaToWorld } from './layout.js';
import { offsetRuns, KERB } from './roads.js';
import { ChunkedBuilders, GeoBuilder } from '../core/geo.js';
import { graniteTextures, fenceTexture, woodTexture, paverTextures, rockTextures, makeCanvas, canvasTexture } from '../core/textures.js';
import { ATMOS } from './atmosphere.js';
import { RNG, lerp, clamp, hash2, vnoise } from '../core/math.js';

const COL = (hex) => {
  const c = new THREE.Color(hex);
  return [c.r, c.g, c.b];
};

// vertical slab between two points with continuous texture coordinates
function slab(G, ax, az, bx, bz, y0, y1, thick, u0) {
  const L = Math.hypot(bx - ax, bz - az) || 1;
  const tx = (bx - ax) / L,
    tz = (bz - az) / L;
  const nx = -tz * thick * 0.5,
    nz = tx * thick * 0.5;
  const P = (t, y, s) => [ax + tx * L * t + nx * s, y, az + tz * L * t + nz * s];
  G.quad(P(0, y0, 1), P(1, y0, 1), P(1, y1, 1), P(0, y1, 1), [u0, y0, u0 + L, y1], [0.82, 0.82, 1, 1]);
  G.quad(P(1, y0, -1), P(0, y0, -1), P(0, y1, -1), P(1, y1, -1), [u0 + L, y0, u0, y1], [0.82, 0.82, 1, 1]);
  G.quad(P(0, y1, 1), P(1, y1, 1), P(1, y1, -1), P(0, y1, -1), [u0, 0, u0 + L, thick]);
  G.quad(P(0, y0, -1), P(0, y0, 1), P(0, y1, 1), P(0, y1, -1), [0, y0, thick, y1]);
  G.quad(P(1, y0, 1), P(1, y0, -1), P(1, y1, -1), P(1, y1, 1), [0, y0, thick, y1]);
}
function pillar(G, x, z, y0, y1, w, ang) {
  const m = new THREE.Matrix4().makeRotationY(ang).setPosition(x, 0, z);
  const prev = G.matrix;
  G.setMatrix(m);
  G.box(0, (y0 + y1) / 2, 0, w, y1 - y0, w, 'xXzZ', 0.85);
  G.box(0, y1 + 0.06, 0, w + 0.14, 0.12, w + 0.14);
  // pyramidal cap
  const h = w * 0.32,
    a = w / 2 + 0.03,
    yy = y1 + 0.12;
  G.tri3([-a, yy, a], [a, yy, a], [0, yy + h, 0]);
  G.tri3([a, yy, a], [a, yy, -a], [0, yy + h, 0]);
  G.tri3([a, yy, -a], [-a, yy, -a], [0, yy + h, 0]);
  G.tri3([-a, yy, -a], [-a, yy, a], [0, yy + h, 0]);
  G.setMatrix(prev);
}

export function buildProps(scene, colliders, forest) {
  const cb = new ChunkedBuilders(200);
  const rng = new RNG(60606);
  const lamps = []; // {x, y, z}
  const benches = [];
  const G = (x, z) => {
    const b = cb.get('granite', x, z);
    b.uvScale = 1 / 1.9;
    return b;
  };
  const F = (x, z) => cb.get('fence', x, z);
  const T = (x, z) => cb.get('trim', x, z);

  // ------------------------------------------------------------------ garden walls
  const lotsBySide = {};
  for (const lot of LOTS) {
    const k = lot.road.id + lot.side;
    (lotsBySide[k] || (lotsBySide[k] = [])).push(lot);
  }
  const styleOf = (seed) => {
    const r = new RNG(seed);
    const kind = r.weighted([
      ['solid', 4],
      ['rail', 4.5],
      ['low', 1.5],
    ]);
    const tint = r.pick(['#ffffff', '#f6efe4', '#fbf1e4', '#eeeae4', '#f3e9da']);
    return { kind, h: kind === 'solid' ? r.range(1.25, 1.65) : kind === 'rail' ? r.range(0.62, 0.85) : r.range(0.75, 1.0), tint: COL(tint), ivy: r.chance(0.3) };
  };
  const stoneDefault = styleOf(77);

  for (const road of ROADS) {
    if (road.id === 'huanghai') continue;
    for (const side of [-1, 1]) {
      if (road.id === 'shanhai' && side === 1) continue;
      const lots = lotsBySide[road.id + side] || [];
      const runs = offsetRuns(road, side, road.half + road.sw + 0.3, (o) => o.half + o.sw + 0.3);
      for (const run of runs) {
        let i = 0;
        const total = run[run.length - 1].s - run[0].s;
        const n = Math.max(1, Math.round(Math.abs(total) / 3.2));
        const pts = [];
        for (let k = 0; k <= n; k++) {
          const sT = run[0].s + (total * k) / n;
          while (i < run.length - 2 && run[i + 1].s < sT) i++;
          const a = run[i],
            b = run[i + 1];
          const t = clamp((sT - a.s) / (b.s - a.s || 1), 0, 1);
          pts.push({ x: lerp(a.x, b.x, t), z: lerp(a.z, b.z, t), y: lerp(a.y, b.y, t) + KERB, s: sT, nx: a.nx, nz: a.nz });
        }
        const GATE_HALF = 1.75;
        const mix = (p, q, t) => ({ x: lerp(p.x, q.x, t), z: lerp(p.z, q.z, t), y: lerp(p.y, q.y, t), s: lerp(p.s, q.s, t), nx: p.nx, nz: p.nz });
        // one stretch of wall from a to b in the given style
        const panel = (a, b, st, lot, withPillar) => {
          const g = G(a.x, a.z);
          g.setColor(...st.tint);
          const top = Math.max(a.y, b.y) + st.h,
            bot = Math.min(a.y, b.y) - 0.6;
          slab(g, a.x, a.z, b.x, b.z, bot, top, 0.38, a.s);
          // coping
          g.setColor(st.tint[0] * 1.06, st.tint[1] * 1.06, st.tint[2] * 1.06);
          slab(g, a.x, a.z, b.x, b.z, top, top + 0.09, 0.48, a.s);
          // tall posts only where an iron railing spans between them
          if (withPillar) pillar(g, a.x, a.z, bot, top + (st.kind === 'rail' ? 1.0 : 0.2), 0.46, Math.atan2(-(b.z - a.z), b.x - a.x));
          const L = Math.hypot(b.x - a.x, b.z - a.z);
          if (st.kind === 'rail') {
            const f = F(a.x, a.z);
            f.setColor(1, 1, 1);
            f.quad([a.x, top + 0.09, a.z], [b.x, top + 0.09, b.z], [b.x, top + 1.0, b.z], [a.x, top + 1.0, a.z], [0, 0, Math.max(1, Math.round(L / 1.6)), 1]);
          }
          colliders.addSegment(a.x, a.z, b.x, b.z, 0.24);
          // creeper on the street face
          if (st.ivy && forest) {
            const cnt = Math.round(L * st.h * 1.6);
            for (let q = 0; q < cnt; q++) {
              const t = rng.next(),
                v = rng.next();
              if (vnoise(a.s * 0.3 + t * L * 0.3, v * 2 + (lot ? lot.seed % 50 : 0), 9) < 0.42) continue;
              const px = lerp(a.x, b.x, t) - a.nx * 0.24,
                pz = lerp(a.z, b.z, t) - a.nz * 0.24;
              forest.addCard('ivy', { x: px, y: bot + 0.6 + v * (st.h + 0.15), z: pz }, { x: -a.nx, y: 0, z: -a.nz }, rng.range(0.55, 0.85), lerp(0.7, 1, v), 0.1);
            }
          }
        };
        for (let k = 0; k < n; k++) {
          const a = pts[k],
            b = pts[k + 1];
          const sm = (a.s + b.s) / 2;
          // which lot is behind this panel?
          let lot = null;
          if (road.kind === 'EW') {
            for (const l of lots) if (sm >= l.s0 - 0.01 && sm <= l.s1 + 0.01) lot = l;
          } else {
            lot = lotAt((a.x + b.x) / 2 + a.nx * 3, (a.z + b.z) / 2 + a.nz * 3);
          }
          const st = lot ? lot.wallStyle || (lot.wallStyle = styleOf(lot.seed + 5)) : stoneDefault;
          const rhythm = k % 2 === 0 || st.kind === 'rail';
          // the gate: its two pillars stand at gs ± GATE_HALF, and the wall is cut exactly there
          const gated = [];
          for (const l of road.kind === 'EW' ? lots : []) {
            if (!l.villa) continue;
            const gs = (l.s0 + l.s1) / 2 + l.gateU;
            if (b.s > gs - GATE_HALF && a.s < gs + GATE_HALF) gated.push([l, gs]);
          }
          if (!gated.length) {
            panel(a, b, st, lot, rhythm);
            continue;
          }
          const [glot, gs] = gated[0];
          const gst = glot.wallStyle || (glot.wallStyle = styleOf(glot.seed + 5));
          if (!glot.gateBuilt) {
            glot.gateBuilt = true;
            const gp = roadPoint(road, gs, side * (road.half + road.sw + 0.3));
            const y = gp.y + KERB;
            const ang = Math.atan2(-gp.tz, gp.tx);
            const g = G(gp.x, gp.z);
            g.setColor(...gst.tint);
            const hgt = Math.max(gst.h + 0.75, 1.9);
            for (const sg of [-1, 1]) {
              const px = gp.x + gp.tx * sg * GATE_HALF,
                pz = gp.z + gp.tz * sg * GATE_HALF;
              pillar(g, px, pz, y - 0.5, y + hgt, 0.62, ang);
              colliders.addCircle(px, pz, 0.36);
              // iron leaves standing open into the garden
              const f = F(gp.x, gp.z);
              f.setColor(1, 1, 1);
              const ix = gp.nx * side,
                iz = gp.nz * side;
              const ex = px - gp.tx * sg * 0.25 + ix * 1.35,
                ez = pz - gp.tz * sg * 0.25 + iz * 1.35;
              f.quad([px, y, pz], [ex, y, ez], [ex, y + 1.7, ez], [px, y + 1.7, pz], [0, 0, 1, 1]);
            }
            glot.gate = { x: gp.x, z: gp.z, y, nx: gp.nx * side, nz: gp.nz * side };
          }
          const ds = b.s - a.s;
          const t0 = (gs - GATE_HALF - a.s) / ds,
            t1 = (gs + GATE_HALF - a.s) / ds;
          if (t0 > 0.03) panel(a, mix(a, b, Math.min(t0, 1)), st, lot, rhythm);
          if (t1 < 0.97) panel(mix(a, b, Math.max(t1, 0)), b, st, lot, false);
        }
      }
    }
  }

  // ------------------------------------------------------------------ flagged paths from each gate to its front door
  {
    const pp = new GeoBuilder();
    pp.uvScale = 0.5;
    for (const lot of LOTS) {
      const v = lot.villa;
      if (!v || !lot.gate || !v.doorLocal) continue;
      const d = villaToWorld(v, v.doorLocal.x, v.doorLocal.z);
      const g = lot.gate;
      const L = Math.hypot(d.x - g.x, d.z - g.z);
      if (L < 1.5) continue;
      const tx = (d.x - g.x) / L,
        tz = (d.z - g.z) / L;
      const hw = 0.72;
      const n = Math.max(2, Math.round(L / 1.6));
      let prev = null;
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const x = g.x + (d.x - g.x) * t,
          z = g.z + (d.z - g.z) * t;
        const y = Math.max(heightAt(x - tz * hw, z + tx * hw), heightAt(x + tz * hw, z - tx * hw), heightAt(x, z)) + 0.05;
        const cur = { l: [x + tz * hw, y, z - tx * hw], r: [x - tz * hw, y, z + tx * hw], u: t * L };
        if (prev) pp.quad(prev.l, prev.r, cur.r, cur.l, [0, prev.u, 2 * hw, cur.u]);
        prev = cur;
      }
    }
    if (!pp.empty) {
      const pav = paverTextures();
      const m = new THREE.Mesh(pp.build(), new THREE.MeshStandardMaterial({ map: pav.map, normalMap: pav.normalMap, roughness: 0.92, color: 0xcfc8ba, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
      m.receiveShadow = true;
      scene.add(m);
    }
  }

  // ------------------------------------------------------------------ street lamps
  for (const road of ROADS) {
    const spacing = 31;
    for (const side of [-1, 1]) {
      const runs = offsetRuns(road, side, road.half + 0.5, (o) => o.half + o.sw + 1.5);
      let next = side > 0 ? 9 : 9 + spacing / 2,
        acc = 0;
      for (const run of runs) {
        for (let i = 1; i < run.length; i++) {
          const a = run[i - 1],
            b = run[i];
          const seg = Math.hypot(b.x - a.x, b.z - a.z);
          while (acc + seg >= next) {
            const t = (next - acc) / seg;
            lamps.push({ x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) + KERB, z: lerp(a.z, b.z, t) });
            next += spacing;
          }
          acc += seg;
        }
      }
    }
  }

  // ------------------------------------------------------------------ sea wall & promenade behind the beach
  const prom = [];
  {
    for (let x = -338; x <= 138; x += 3) {
      const dz = (shoreZ(x + 1) - shoreZ(x - 1)) / 2;
      const l = Math.hypot(1, dz);
      // inland unit normal of the shoreline
      prom.push({ x, z: shoreZ(x), nx: dz / l, nz: -1 / l });
    }
    const at = (p, off) => [p.x + p.nx * off, p.z + p.nz * off];
    const stairs = new Set();
    for (let k = 14; k < prom.length - 6; k += 26) stairs.add(k);
    const pv = new GeoBuilder();
    pv.uvScale = 0.5;
    for (let i = 0; i < prom.length - 1; i++) {
      const a = prom[i],
        b = prom[i + 1];
      const a0 = at(a, 40.5),
        b0 = at(b, 40.5),
        a1 = at(a, 41.9),
        b1 = at(b, 41.9),
        a2 = at(a, 47.6),
        b2 = at(b, 47.6);
      const ya = Math.max(heightAt(a2[0], a2[1]), 3.15) + 0.05,
        yb = Math.max(heightAt(b2[0], b2[1]), 3.15) + 0.05;
      const g = G(a.x, a.z);
      g.setColor(...COL('#f6efe4'));
      const u = i * 3;
      const open = stairs.has(i) || stairs.has(i - 1);
      if (!open) {
        // sea-facing wall and its top
        g.quad([a0[0], 0.6, a0[1]], [b0[0], 0.6, b0[1]], [b0[0], yb, b0[1]], [a0[0], ya, a0[1]], [u, 0.6, u + 3, ya]);
        g.quad([a0[0], ya, a0[1]], [b0[0], yb, b0[1]], [b1[0], yb, b1[1]], [a1[0], ya, a1[1]], [u, 0, u + 3, 1.4]);
        // parapet
        slab(g, at(a, 40.75)[0], at(a, 40.75)[1], at(b, 40.75)[0], at(b, 40.75)[1], Math.min(ya, yb), Math.max(ya, yb) + 0.78, 0.42, u);
        colliders.addSegment(at(a, 40.75)[0], at(a, 40.75)[1], at(b, 40.75)[0], at(b, 40.75)[1], 0.26);
      } else if (stairs.has(i)) {
        // a flight of granite steps down to the sand
        const mx = (a.x + prom[i + 2].x) / 2;
        const m = prom[i + 1];
        for (let s = 0; s < 8; s++) {
          const off = 41.7 - s * 0.36;
          const c = at(m, off);
          const top = ya - s * 0.2;
          const mm = new THREE.Matrix4().makeRotationY(Math.atan2(m.nx, m.nz)).setPosition(c[0], 0, c[1]);
          g.setMatrix(mm);
          g.box(0, (top - 1.4) / 2 + 0.2, 0, 5.6, top + 1.0, 0.4, 'xXYzZ');
          g.setMatrix(null);
        }
      }
      // paving
      pv.quad([a1[0], ya, a1[1]], [b1[0], yb, b1[1]], [b2[0], yb, b2[1]], [a2[0], ya, a2[1]], [u, 0, u + 3, 5.7]);
      if (i % 9 === 4) lamps.push({ x: at(a, 42.4)[0], y: ya, z: at(a, 42.4)[1] });
      if (i % 9 === 0 && !open) benches.push({ x: at(a, 43.2)[0], y: ya, z: at(a, 43.2)[1], ang: Math.atan2(-a.nx, -a.nz) });
    }
    const pav = paverTextures();
    const mat = new THREE.MeshStandardMaterial({ map: pav.map, normalMap: pav.normalMap, roughness: 0.9, color: 0xd9d2c4 });
    const m = new THREE.Mesh(pv.build(), mat);
    m.receiveShadow = true;
    scene.add(m);
  }

  // ------------------------------------------------------------------ bathing huts in seaside colours
  {
    const cols = ['#f3d98a', '#9cc7d8', '#f0b8a2', '#b8d6a8', '#f4efe2', '#e7a0a0', '#a9b9de'];
    for (let k = 0; k < 12; k++) {
      const p = prom[52 + k];
      if (!p) break;
      const cx = p.x + p.nx * 37.4,
        cz = p.z + p.nz * 37.4;
      const y = heightAt(cx, cz);
      const mm = new THREE.Matrix4().makeRotationY(Math.atan2(-p.nx, -p.nz)).setPosition(cx, y, cz);
      const t = T(cx, cz);
      t.setMatrix(mm);
      t.setColor(...COL(cols[k % cols.length]));
      t.box(0, 1.15, 0, 2.2, 2.5, 2.2, 'xXzZ', 0.9);
      // gable ends
      t.tri3([-1.1, 2.4, 1.1], [1.1, 2.4, 1.1], [0, 3.25, 1.1]);
      t.tri3([1.1, 2.4, -1.1], [-1.1, 2.4, -1.1], [0, 3.25, -1.1]);
      t.setColor(...COL('#f7f4ec'));
      t.box(0, 1.0, 1.11, 0.8, 1.9, 0.04, 'xXYZ');
      // roof
      t.setColor(...COL(k % 2 ? '#b5563a' : '#8f4a36'));
      t.quad([-1.3, 2.28, 1.3], [1.3, 2.28, 1.3], [1.3, 3.28, 0], [-1.3, 3.28, 0]);
      t.quad([1.3, 2.28, -1.3], [-1.3, 2.28, -1.3], [-1.3, 3.28, 0], [1.3, 3.28, 0]);
      t.setMatrix(null);
      colliders.addBox(cx, cz, 1.2, 1.2, Math.atan2(-p.nx, -p.nz));
    }
  }

  // ------------------------------------------------------------------ viewing deck at the tip of Taiping Cape
  const deck = { x: 384, z: 305, y: 0 };
  {
    deck.y = heightAt(deck.x, deck.z) + 0.1;
    const wb = new GeoBuilder();
    wb.uvScale = 1 / 1.6;
    wb.box(deck.x, deck.y - 0.6, deck.z, 11, 1.4, 7, 'xXYzZ');
    const t = T(deck.x, deck.z);
    t.setColor(...COL('#5a4a3a'));
    const rail = (ax, az, bx, bz) => {
      const L = Math.hypot(bx - ax, bz - az);
      const n = Math.round(L / 1.4);
      for (let i = 0; i <= n; i++) t.box(lerp(ax, bx, i / n), deck.y + 0.6, lerp(az, bz, i / n), 0.09, 1.1, 0.09);
      const mm = new THREE.Matrix4().makeRotationY(Math.atan2(-(bz - az), bx - ax)).setPosition((ax + bx) / 2, 0, (az + bz) / 2);
      t.setMatrix(mm);
      t.box(0, deck.y + 1.12, 0, L, 0.07, 0.13);
      t.box(0, deck.y + 0.62, 0, L, 0.05, 0.06);
      t.setMatrix(null);
      colliders.addSegment(ax, az, bx, bz, 0.15);
    };
    rail(deck.x - 5.4, deck.z + 3.4, deck.x + 5.4, deck.z + 3.4);
    rail(deck.x + 5.4, deck.z + 3.4, deck.x + 5.4, deck.z - 3.4);
    rail(deck.x - 5.4, deck.z + 3.4, deck.x - 5.4, deck.z - 0.5);
    // a coin telescope
    t.setColor(0.3, 0.33, 0.36);
    t.cylinder(deck.x + 2.5, deck.y, deck.z + 2.6, 0.07, 0.06, 1.25, 8);
    t.setColor(0.72, 0.74, 0.76);
    t.box(deck.x + 2.5, deck.y + 1.36, deck.z + 2.6, 0.2, 0.22, 0.5);
    benches.push({ x: deck.x - 2.6, y: deck.y, z: deck.z - 1.6, ang: 0 });
    benches.push({ x: deck.x + 1.2, y: deck.y, z: deck.z - 1.6, ang: 0 });
    const m = new THREE.Mesh(wb.build(), new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.85 }));
    m.castShadow = m.receiveShadow = true;
    scene.add(m);
  }

  // benches along Huanghai Rd, looking out to sea
  {
    const road = ROAD_BY_ID.huanghai;
    for (let s = 20; s < road.length - 20; s += 36) {
      const pL = roadPoint(road, s, road.half + road.sw * 0.7),
        pR = roadPoint(road, s, -(road.half + road.sw * 0.7));
      const p = coastDist(pL.x, pL.z) < coastDist(pR.x, pR.z) ? pL : pR;
      if (coastDist(p.x, p.z) > 70) continue;
      // face the nearer water
      const e = 4;
      const gx = coastDist(p.x + e, p.z) - coastDist(p.x - e, p.z),
        gz = coastDist(p.x, p.z + e) - coastDist(p.x, p.z - e);
      benches.push({ x: p.x, y: p.y + KERB, z: p.z, ang: Math.atan2(-gx, -gz) });
    }
  }
  for (const b of benches) {
    const t = T(b.x, b.z);
    const mm = new THREE.Matrix4().makeRotationY(b.ang).setPosition(b.x, b.y, b.z);
    t.setMatrix(mm);
    t.setColor(0.1, 0.13, 0.12);
    for (const sx of [-0.72, 0.72]) {
      t.box(sx, 0.22, 0.05, 0.06, 0.44, 0.5);
      t.box(sx, 0.62, -0.2, 0.06, 0.5, 0.06);
    }
    t.setColor(...COL('#7a5a3c'));
    for (let i = 0; i < 4; i++) t.box(0, 0.46, -0.13 + i * 0.12, 1.6, 0.04, 0.09);
    for (let i = 0; i < 3; i++) t.box(0, 0.6 + i * 0.13, -0.23 - i * 0.02, 1.6, 0.09, 0.035);
    t.setMatrix(null);
    colliders.addBox(b.x, b.z, 0.85, 0.3, b.ang);
  }

  // ------------------------------------------------------------------ lamp standards (instanced)
  const lampGeo = new GeoBuilder();
  lampGeo.setColor(1, 1, 1);
  lampGeo.cylinder(0, 0, 0, 0.13, 0.09, 0.55, 8);
  lampGeo.cylinder(0, 0.55, 0, 0.055, 0.04, 3.05, 8);
  lampGeo.cylinder(0, 3.6, 0, 0.1, 0.05, 0.08, 8);
  lampGeo.box(0, 4.18, 0, 0.42, 0.06, 0.42);
  lampGeo.cylinder(0, 4.2, 0, 0.26, 0.02, 0.2, 6);
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) lampGeo.box(sx * 0.15, 3.92, sz * 0.15, 0.025, 0.5, 0.025);
  const postMat = new THREE.MeshStandardMaterial({ color: 0x18221e, roughness: 0.5, metalness: 0.6 });
  const posts = new THREE.InstancedMesh(lampGeo.build(), postMat, lamps.length);
  const glassGeo = new THREE.CylinderGeometry(0.17, 0.12, 0.46, 6, 1);
  glassGeo.translate(0, 3.92, 0);
  const glassMat = new THREE.MeshStandardMaterial({ color: 0xf2ead6, roughness: 0.25, emissive: 0xffc27a, emissiveIntensity: 0, transparent: true, opacity: 0.9 });
  const glass = new THREE.InstancedMesh(glassGeo, glassMat, lamps.length);
  const m4 = new THREE.Matrix4();
  lamps.forEach((l, i) => {
    m4.makeRotationY(hash2(i, 3, 1) * 6.28).setPosition(l.x, l.y, l.z);
    posts.setMatrixAt(i, m4);
    glass.setMatrixAt(i, m4);
    colliders.addCircle(l.x, l.z, 0.16);
  });
  posts.castShadow = true;
  posts.frustumCulled = glass.frustumCulled = false;
  scene.add(posts, glass);

  // warm halos and pools of light — additive, driven by uNight
  const haloGeo = new THREE.BufferGeometry();
  const hp = new Float32Array(lamps.length * 3);
  lamps.forEach((l, i) => hp.set([l.x, l.y + 3.95, l.z], i * 3));
  haloGeo.setAttribute('position', new THREE.BufferAttribute(hp, 3));
  const haloMat = new THREE.ShaderMaterial({
    uniforms: { uNight: ATMOS.uNight, uScale: { value: 1 } },
    vertexShader: /* glsl */ `
			uniform float uScale;
			varying float vFade;
			void main() {
				vec4 mv = modelViewMatrix * vec4( position, 1.0 );
				gl_Position = projectionMatrix * mv;
				float d = - mv.z;
				gl_PointSize = clamp( uScale * 1.7 / d, 2.0, 160.0 );
				vFade = smoothstep( 900.0, 300.0, d );
			}`,
    fragmentShader: /* glsl */ `
			uniform float uNight;
			varying float vFade;
			void main() {
				vec2 p = gl_PointCoord - 0.5;
				float r = length( p ) * 2.0;
				float g = exp( - r * r * 7.0 ) + 0.35 * exp( - r * r * 1.6 );
				g *= smoothstep( 1.0, 0.7, r );
				gl_FragColor = vec4( vec3( 1.0, 0.66, 0.34 ) * g * uNight * 0.9 * vFade, 1.0 );
			}`,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
  });
  const halos = new THREE.Points(haloGeo, haloMat);
  halos.frustumCulled = false;
  halos.renderOrder = 960;
  scene.add(halos);

  const poolGeo = new THREE.PlaneGeometry(1, 1);
  poolGeo.rotateX(-Math.PI / 2);
  const poolMat = new THREE.ShaderMaterial({
    uniforms: { uNight: ATMOS.uNight },
    vertexShader: /* glsl */ `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4( position, 1.0 );
			}`,
    fragmentShader: /* glsl */ `
			uniform float uNight;
			varying vec2 vUv;
			void main() {
				float r = length( vUv - 0.5 ) * 2.0;
				float g = exp( - r * r * 4.5 ) * smoothstep( 1.0, 0.5, r );
				gl_FragColor = vec4( vec3( 1.0, 0.66, 0.34 ) * g * uNight * 0.26, 1.0 );
			}`,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    polygonOffset: true,
    polygonOffsetFactor: -4,
    polygonOffsetUnits: -4,
  });
  const pools = new THREE.InstancedMesh(poolGeo, poolMat, lamps.length);
  lamps.forEach((l, i) => {
    m4.makeScale(12, 1, 12).setPosition(l.x, l.y + 0.05, l.z);
    pools.setMatrixAt(i, m4);
  });
  pools.frustumCulled = false;
  pools.renderOrder = 940;
  scene.add(pools);

  // a handful of real lights that hop to the lamps nearest the visitor
  const live = [];
  for (let i = 0; i < 3; i++) {
    const pl = new THREE.PointLight(0xffb469, 0, 26, 1.6);
    scene.add(pl);
    live.push(pl);
  }
  let lampTimer = 0;
  function updateLamps(dt, camPos, night, pixelH) {
    glassMat.emissiveIntensity = night * 2.2;
    haloMat.uniforms.uScale.value = pixelH;
    halos.visible = pools.visible = night > 0.01;
    lampTimer -= dt;
    if (night < 0.01) {
      for (const pl of live) pl.intensity = 0;
      return;
    }
    if (lampTimer <= 0) {
      lampTimer = 0.4;
      const near = lamps
        .map((l) => ({ l, d: (l.x - camPos.x) ** 2 + (l.z - camPos.z) ** 2 }))
        .sort((a, b) => a.d - b.d)
        .slice(0, live.length);
      near.forEach((n, i) => live[i].position.set(n.l.x, n.l.y + 3.9, n.l.z));
    }
    for (const pl of live) pl.intensity = night * 46;
  }

  // ------------------------------------------------------------------ street-name plates
  {
    const S = 1024;
    const c = makeCanvas(S);
    const ctx = c.getContext('2d');
    const cell = (i) => [0, i * 85];
    ROADS.forEach((r, i) => {
      const [x, y] = cell(i);
      ctx.fillStyle = r.kind === 'NS' ? '#1f7a4d' : '#1c5fae';
      ctx.fillRect(x, y, S, 85);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.strokeRect(x + 5, y + 5, S - 10, 75);
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 50px "PingFang SC","Microsoft YaHei","Noto Sans CJK SC","Source Han Sans SC","WenQuanYi Zen Hei",sans-serif';
      // spread the characters like a real plate
      const chars = [...r.sc];
      const span = 500;
      chars.forEach((ch, k) => ctx.fillText(ch, x + S * 0.3 - span / 2 + (span * (k + 0.5)) / chars.length, y + 43));
      ctx.font = '600 30px "Helvetica Neue",Arial,sans-serif';
      ctx.fillText(r.en.replace(' Rd', ' LU').toUpperCase(), x + S * 0.78, y + 45);
    });
    const tex = canvasTexture(c, { repeat: false });
    const sb = new GeoBuilder();
    const pole = new GeoBuilder();
    for (const it of INTERSECTIONS) {
      const A = ROAD_BY_ID[it.a],
        B = ROAD_BY_ID[it.b];
      const nearPt = (road) => road.pts.reduce((best, p) => ((p.x - it.x) ** 2 + (p.z - it.z) ** 2 < (best.x - it.x) ** 2 + (best.z - it.z) ** 2 ? p : best), road.pts[0]);
      const pa = nearPt(A),
        pb = nearPt(B);
      // north-west-ish corner of the junction, on the pavement
      const px = it.x + pa.nx * -(A.half + 0.8) + pb.nx * (B.half + 0.8),
        pz = it.z + pa.nz * -(A.half + 0.8) + pb.nz * (B.half + 0.8);
      const nr = nearestRoad(px, pz, 20);
      if (!nr) continue;
      const y = pa.y + KERB;
      pole.cylinder(px, y, pz, 0.04, 0.035, 2.95, 6, { capTop: true });
      colliders.addCircle(px, pz, 0.12);
      const plate = (road, p, yy) => {
        const i = road.index;
        const v0 = 1 - ((i + 1) * 85) / S,
          v1 = 1 - (i * 85) / S;
        const hx = p.tx * 0.62,
          hz = p.tz * 0.62;
        const a = [px - hx, yy, pz - hz],
          b = [px + hx, yy, pz + hz];
        sb.quad(a, b, [b[0], yy + 0.3, b[2]], [a[0], yy + 0.3, a[2]], [0, v0, 1, v1]);
        sb.quad(b, a, [a[0], yy + 0.3, a[2]], [b[0], yy + 0.3, b[2]], [0, v0, 1, v1]);
      };
      plate(A, pa, y + 2.55);
      plate(B, pb, y + 2.2);
    }
    const sm = new THREE.Mesh(sb.build(), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.1 }));
    scene.add(sm);
    const pm = new THREE.Mesh(pole.build(), new THREE.MeshStandardMaterial({ color: 0x8a9096, roughness: 0.45, metalness: 0.7 }));
    pm.castShadow = true;
    scene.add(pm);
  }

  // ------------------------------------------------------------------ reefs: boulders strewn along the rocky shore
  {
    const rk = rockTextures();
    const geos = [];
    for (let v = 0; v < 3; v++) {
      const g = new THREE.IcosahedronGeometry(1, 2);
      const p = g.getAttribute('position');
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i),
          y = p.getY(i),
          z = p.getZ(i);
        const n = 0.72 + 0.5 * vnoise(x * 1.7 + v * 9, y * 1.7 + z * 1.3, 77 + v) + 0.2 * vnoise(x * 4 + 3, z * 4 + y * 3, 91);
        p.setXYZ(i, x * n, y * n * 0.7, z * n);
      }
      g.computeVertexNormals();
      geos.push(g);
    }
    const mat = new THREE.MeshStandardMaterial({ map: rk.map, normalMap: rk.normalMap, roughness: 0.92, color: 0xcfc2b8 });
    const lists = [[], [], []];
    const r2 = new RNG(4141);
    for (let k = 0; k < 5200; k++) {
      const x = r2.range(-470, 495),
        z = r2.range(130, 405);
      const d = coastDist(x, z);
      if (d < -30 || d > 11) continue;
      if (rockiness(x, z) < 0.6) continue;
      if (Math.hypot(x - deck.x, z - deck.z) < 8) continue;
      const s = r2.range(0.5, 2.6) * (d < -10 ? 1.25 : 1);
      lists[k % 3].push({ x, z, y: heightAt(x, z) + s * 0.12, s, r: r2.range(0, 6.28), sy: r2.range(0.6, 1.1) });
      if (s > 1.3 && d > -2) colliders.addCircle(x, z, s * 0.75);
    }
    const q = new THREE.Quaternion(),
      e = new THREE.Euler(),
      sc = new THREE.Vector3(),
      ps = new THREE.Vector3();
    lists.forEach((list, v) => {
      const im = new THREE.InstancedMesh(geos[v], mat, list.length);
      list.forEach((o, i) => {
        e.set(r2.range(-0.3, 0.3), o.r, r2.range(-0.3, 0.3));
        q.setFromEuler(e);
        m4.compose(ps.set(o.x, o.y, o.z), q, sc.set(o.s, o.s * o.sy, o.s));
        im.setMatrixAt(i, m4);
      });
      im.castShadow = im.receiveShadow = true;
      im.frustumCulled = false;
      scene.add(im);
    });
  }

  // ------------------------------------------------------------------ the engraved boulder
  {
    const x = 9,
      z = shanhaiZ(9) + 12;
    const y = heightAt(x, z);
    const g = new THREE.IcosahedronGeometry(1, 2);
    const p = g.getAttribute('position');
    for (let i = 0; i < p.count; i++) {
      const px = p.getX(i),
        py = p.getY(i),
        pz = p.getZ(i);
      const n = 0.86 + 0.26 * vnoise(px * 1.4 + 5, py * 1.4 + pz, 301);
      p.setXYZ(i, px * n * 2.5, py * n * 1.25, pz * n * 0.85);
    }
    g.computeVertexNormals();
    const boulder = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0xb9ae9e, roughness: 0.9, normalMap: rockTextures().normalMap }));
    boulder.position.set(x, y + 0.75, z);
    boulder.rotation.y = Math.PI; // faces the road (north)
    boulder.castShadow = boulder.receiveShadow = true;
    scene.add(boulder);
    const c = makeCanvas(512, 256);
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 512, 256);
    ctx.fillStyle = '#b3201a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '900 150px "STKaiti","KaiTi","Kaiti SC","BiauKai","AR PL UKai CN","Noto Serif CJK SC","Songti SC",serif';
    ctx.fillText('八大关', 256, 132);
    const tex = canvasTexture(c, { repeat: false });
    const label = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 1.65), new THREE.MeshStandardMaterial({ map: tex, alphaTest: 0.45, roughness: 0.7, side: THREE.DoubleSide }));
    label.position.set(x, y + 0.95, z - 1.0);
    label.rotation.y = Math.PI;
    scene.add(label);
    colliders.addBox(x, z, 2.4, 0.9, 0);
  }

  // ------------------------------------------------------------------ materials & meshes
  const gr = graniteTextures('rubble');
  const mats = {
    granite: new THREE.MeshStandardMaterial({ map: gr.map, normalMap: gr.normalMap, vertexColors: true, roughness: 0.9 }),
    fence: new THREE.MeshStandardMaterial({ map: fenceTexture(), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.55, metalness: 0.4, vertexColors: true }),
    trim: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }),
  };
  mats.granite.normalScale.set(0.45, 0.45);
  const group = new THREE.Group();
  group.name = 'props';
  cb.buildMeshes(mats, group, { fence: { cast: false } });
  scene.add(group);

  return { lamps, updateLamps, deck, prom };
}
