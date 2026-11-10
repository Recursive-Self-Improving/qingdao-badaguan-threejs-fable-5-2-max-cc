// Planting plan: street trees ("one pass, one tree"), villa gardens, the pine belt behind the
// beach, the wind-leaning black pines of Taiping Cape and the woods that close the horizon.

import * as THREE from 'three';
import { ROADS, LOTS, PLAY, BOUNDS, LANDMARKS, heightAt, coastDist, rockiness, nearestRoad, lotAt, shanhaiZ } from './layout.js';
import { offsetRuns, KERB, LITTER_BY_TREE } from './roads.js';
import { SPECIES } from './trees.js';
import { GeoBuilder } from '../core/geo.js';
import { soilTexture } from '../core/textures.js';
import { RNG, clamp, lerp, smoothstep, hash2 } from '../core/math.js';

// per street species: instance species, spacing along the kerb, set-back from the kerb, corner clearance, scale range
const STREET = {
  ginkgo: { sp: 'ginkgo', spacing: 8.6, off: 1.15, clear: 3.5, s: [0.88, 1.12] },
  maple: { sp: 'maple', spacing: 8.8, off: 1.15, clear: 3.5, s: [0.9, 1.15] },
  plane: { sp: 'plane', spacing: 12, off: 1.2, clear: 4.5, s: [0.88, 1.1] },
  cedar: { sp: 'cedar', spacing: 10.5, off: 1.7, clear: 5, s: [0.85, 1.12] },
  juniper: { sp: 'juniper', spacing: 6.6, off: 1.2, clear: 3, s: [0.85, 1.2] },
  peach: { sp: 'peach', spacing: 6.2, off: 1.2, clear: 3, s: [0.85, 1.15] },
  crabapple: { sp: 'crabapple', spacing: 6.6, off: 1.2, clear: 3, s: [0.88, 1.15] },
  crape: { sp: 'crape', spacing: 6.2, off: 1.2, clear: 3, s: [0.85, 1.15] },
};
const LITTER = {
  ...LITTER_BY_TREE,
  broad: [0.62, 0.5, 0.13, 0.6],
  wood: [0.56, 0.4, 0.14, 0.7],
  cedarLow: LITTER_BY_TREE.cedar,
};

export function plantAll(forest, colliders, scene) {
  const rng = new RNG(8128);
  const trees = []; // {x, z, r, lit}
  const hash = new Map();
  const HC = 10;
  const hk = (ix, iz) => ix * 4096 + iz;

  function register(x, z, r, lit) {
    const t = { x, z, r, lit };
    trees.push(t);
    const k = hk(Math.floor(x / HC), Math.floor(z / HC));
    let a = hash.get(k);
    if (!a) hash.set(k, (a = []));
    a.push(t);
  }
  function crowded(x, z, minD) {
    const cx = Math.floor(x / HC),
      cz = Math.floor(z / HC);
    const rr = Math.ceil(minD / HC);
    for (let ix = cx - rr; ix <= cx + rr; ix++)
      for (let iz = cz - rr; iz <= cz + rr; iz++) {
        const a = hash.get(hk(ix, iz));
        if (!a) continue;
        for (const t of a) if ((t.x - x) ** 2 + (t.z - z) ** 2 < minD * minD) return true;
      }
    return false;
  }
  function plant(name, x, z, scale, opts = {}) {
    const y = opts.y ?? heightAt(x, z);
    const spec = SPECIES[name];
    const tr = forest.add(name, x, y - 0.03, z, scale, rng.range(0, Math.PI * 2), opts.lean || null);
    const arch = forest.archetype(name, 0);
    register(x, z, (arch.crownR || 1) * scale, LITTER[name] || null);
    if (opts.collide !== false) {
      if (name === 'juniper') colliders.addCircle(x, z, 0.55 * scale);
      else if (name === 'cedarLow') colliders.addCircle(x, z, 1.9 * scale);
      else if (tr > 0.08) colliders.addCircle(x, z, tr + 0.1);
    }
    return spec;
  }

  // ---------------------------------------------------------------- street trees + tree pits
  const pits = new GeoBuilder();
  for (const road of ROADS) {
    if (road.tree === 'pine') continue;
    const cfg = STREET[road.tree];
    for (const side of [-1, 1]) {
      const runs = offsetRuns(road, side, road.half + cfg.off, (o) => o.half + o.sw + cfg.clear);
      let next = side > 0 ? cfg.spacing * 0.5 : cfg.spacing;
      let acc = 0;
      for (const run of runs) {
        // keep clear of the open road ends
        for (let i = 1; i < run.length; i++) {
          const a = run[i - 1],
            b = run[i];
          const seg = Math.hypot(b.x - a.x, b.z - a.z);
          while (acc + seg >= next) {
            const t = (next - acc) / seg;
            const x = lerp(a.x, b.x, t),
              z = lerp(a.z, b.z, t),
              y = lerp(a.y, b.y, t) + KERB;
            const sc = rng.range(cfg.s[0], cfg.s[1]);
            plant(cfg.sp, x + rng.range(-0.12, 0.12), z + rng.range(-0.12, 0.12), sc, { y });
            // soil pit in the pavement
            const h = cfg.sp === 'plane' || cfg.sp === 'cedar' ? 0.8 : 0.6;
            const tx = a.tx * h,
              tz = a.tz * h,
              nx = a.nx * h,
              nz = a.nz * h;
            const py = y + 0.012;
            pits.quad([x - tx - nx, py, z - tz - nz], [x - tx + nx, py, z - tz + nz], [x + tx + nx, py, z + tz + nz], [x + tx - nx, py, z + tz - nz]);
            next += cfg.spacing * rng.range(0.94, 1.06);
          }
          acc += seg;
        }
      }
    }
  }
  if (!pits.empty) {
    const geo = pits.build();
    // quads may face down depending on the side of the road: make them double sided
    const mat = new THREE.MeshStandardMaterial({ map: soilTexture(), roughness: 1, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const m = new THREE.Mesh(geo, mat);
    m.receiveShadow = true;
    scene.add(m);
  }

  // ---------------------------------------------------------------- black pines along Huanghai Rd
  const inland = (x, z) => {
    const e = 4;
    const gx = coastDist(x + e, z) - coastDist(x - e, z),
      gz = coastDist(x, z + e) - coastDist(x, z - e);
    const l = Math.hypot(gx, gz) || 1;
    return [gx / l, gz / l];
  };
  const pineLean = (x, z) => {
    const d = coastDist(x, z);
    const g = inland(x, z);
    const m = rng.range(0.05, 0.16) + smoothstep(60, 12, d) * rng.range(0.06, 0.2);
    return [g[0] * m, g[1] * m];
  };
  {
    const road = ROADS.find((r) => r.id === 'huanghai');
    for (const side of [-1, 1]) {
      const runs = offsetRuns(road, side, road.half + road.sw + 1.2, (o) => o.half + o.sw + 4);
      let next = rng.range(4, 9),
        acc = 0;
      for (const run of runs) {
        for (let i = 1; i < run.length; i++) {
          const a = run[i - 1],
            b = run[i];
          const seg = Math.hypot(b.x - a.x, b.z - a.z);
          while (acc + seg >= next) {
            const t = (next - acc) / seg;
            const off = rng.range(0, 3.5);
            const x = lerp(a.x, b.x, t) + a.nx * off,
              z = lerp(a.z, b.z, t) + a.nz * off;
            next += rng.range(7, 15);
            if (coastDist(x, z) < 9 || lotAt(x, z)) continue;
            if (Math.hypot(x - LANDMARKS.huashi.x, z - LANDMARKS.huashi.z) < 30) continue;
            plant('pine', x, z, rng.range(0.8, 1.25), { lean: pineLean(x, z) });
          }
          acc += seg;
        }
      }
    }
  }

  // ---------------------------------------------------------------- villa gardens
  const garden = [
    ['pine', 3],
    ['cedarLow', 1.6],
    ['broad', 3],
    ['maple', 1.1],
    ['ginkgo', 0.8],
    ['crabapple', 1.0],
    ['peach', 0.7],
    ['crape', 1.0],
    ['juniper', 1.4],
  ];
  for (const lot of LOTS) {
    const lr = new RNG(lot.seed + 17);
    const v = lot.villa;
    const toWorld = (u, w) => [lot.fx + lot.ux * u + lot.vx * w, lot.fz + lot.uz * u + lot.vz * w];
    const inVilla = (x, z, margin) => {
      if (!v) return false;
      const dx = x - v.x,
        dz = z - v.z;
      const c = Math.cos(v.rot),
        s = Math.sin(v.rot);
      const lx = dx * c - dz * s,
        lz = dx * s + dz * c;
      return Math.abs(lx) < v.w / 2 + margin && Math.abs(lz) < v.d / 2 + margin;
    };
    const n = v ? lr.int(3, 6) : lr.int(8, 12);
    let placed = 0;
    for (let tries = 0; tries < n * 12 && placed < n; tries++) {
      const u = lr.range(-lot.width / 2 + 2.2, lot.width / 2 - 2.2),
        w = lr.range(2.2, lot.depth - 1.2);
      const [x, z] = toWorld(u, w);
      if (inVilla(x, z, 3.6)) continue;
      // keep the path from the gate to the door open
      if (v && Math.abs(u - lot.gateU) < 2.4 && w < lot.villa.cv) continue;
      const name = lr.weighted(garden);
      const big = name === 'broad' || name === 'pine' || name === 'cedarLow' || name === 'maple' || name === 'ginkgo';
      if (crowded(x, z, big ? 5.5 : 3.2)) continue;
      if (big && inVilla(x, z, 5.5)) continue;
      plant(name, x, z, lr.range(0.8, 1.15), name === 'pine' ? { lean: [lr.range(-0.08, 0.08), lr.range(-0.08, 0.08)] } : {});
      placed++;
    }
    // a pair of junipers flanking the gate
    if (v && lr.chance(0.4)) {
      for (const sgn of [-1, 1]) {
        const [x, z] = toWorld(lot.gateU + sgn * 2.5, 1.7);
        if (!crowded(x, z, 2)) plant('juniper', x, z, lr.range(0.7, 0.9));
      }
    }
    // shrubs: a clipped row behind the wall, and foundation planting around the house
    const hedge = lr.chance(0.55);
    if (hedge) {
      for (let u = -lot.width / 2 + 1.2; u < lot.width / 2 - 1; u += 1.75) {
        if (Math.abs(u - lot.gateU) < 2.4) continue;
        const [x, z] = toWorld(u + lr.range(-0.15, 0.15), 1.05);
        forest.add('bush', x, heightAt(x, z) - 0.05, z, lr.range(0.85, 1.05), lr.range(0, 6.28));
      }
    }
    if (v) {
      const m = lr.int(3, 6);
      for (let i = 0; i < m; i++) {
        const sideU = lr.sign();
        const lx = lr.chance(0.5) ? sideU * (v.w / 2 + 1.1) : lr.range(-v.w / 2, v.w / 2);
        const lz = Math.abs(lx) > v.w / 2 ? lr.range(-v.d / 2, v.d / 2) : lr.sign() * (v.d / 2 + 1.1);
        const c = Math.cos(v.rot),
          s = Math.sin(v.rot);
        const x = v.x + lx * c + lz * s,
          z = v.z - lx * s + lz * c;
        // not in front of the door
        if (lz > 0 && Math.abs(lx) < 2.2) continue;
        forest.add('bush', x, heightAt(x, z) - 0.05, z, lr.range(0.75, 1.25), lr.range(0, 6.28));
      }
    }
  }

  // ---------------------------------------------------------------- parks, cape and enclosing woods
  const HU = LANDMARKS.huashi;
  const step = 7.5;
  for (let gz = BOUNDS.minZ + 6; gz < BOUNDS.maxZ - 4; gz += step) {
    for (let gx = BOUNDS.minX + 6; gx < BOUNDS.maxX - 4; gx += step) {
      const x = gx + rng.range(0, step),
        z = gz + rng.range(0, step);
      const h = heightAt(x, z);
      if (h < 2.6) continue;
      const d = coastDist(x, z);
      const rk = rockiness(x, z);
      if (d < (rk > 0.5 ? 9 : 48)) continue;
      const nr = nearestRoad(x, z, 14);
      if (nr && nr.dist < nr.road.half + nr.road.sw + 2.6 && !nr.beyond) continue;
      if (lotAt(x, z)) continue;
      const dh = Math.hypot(x - HU.x, z - HU.z);
      if (dh < 27) continue;
      const inPlay = x > PLAY.minX - 6 && x < PLAY.maxX + 6 && z > PLAY.minZ - 6 && z < PLAY.maxZ + 6;
      const seaside = z > shanhaiZ(x) + 6 && x < 236;
      const cape = x >= 236 && z > 120;
      const eastWood = x > 338 && !cape;
      let name, density, minD;
      const clump = hash2(Math.floor(x / 38), Math.floor(z / 38), 7); // clearings and thickets
      if (seaside) {
        name = rng.weighted([['pine', 5], ['broad', 1.2], ['plane', 0.5]]);
        density = 0.42 + clump * 0.25;
        minD = 6.5;
      } else if (cape) {
        name = rng.weighted([['pine', 6], ['cedarLow', 0.8], ['broad', 0.8]]);
        density = clump > 0.62 ? 0.12 : 0.6;
        if (dh < 46) density *= 0.35;
        minD = 6;
      } else if (inPlay) {
        name = rng.weighted([['pine', 3.6], ['broad', 3], ['cedarLow', 1.4], ['maple', 0.6], ['wood', 1.5], ['ginkgo', 0.3]]);
        density = eastWood ? 0.62 : 0.7;
        minD = 6;
      } else {
        name = rng.weighted([['wood', 4], ['pine', 1.8]]);
        density = 0.62;
        minD = 7.5;
      }
      if (!rng.chance(density)) continue;
      if (crowded(x, z, minD)) continue;
      const lean = name === 'pine' ? pineLean(x, z) : null;
      const sc = name === 'wood' ? rng.range(0.85, 1.35) : rng.range(0.8, 1.2);
      plant(name, x, z, sc, { lean, collide: inPlay });
    }
  }

  // ---------------------------------------------------------------- fallen-leaf field
  function litterAt(x, z) {
    const cx = Math.floor(x / HC),
      cz = Math.floor(z / HC);
    let r = 0,
      g = 0,
      b = 0,
      wsum = 0,
      amt = 0;
    for (let ix = cx - 1; ix <= cx + 1; ix++)
      for (let iz = cz - 1; iz <= cz + 1; iz++) {
        const a = hash.get(hk(ix, iz));
        if (!a) continue;
        for (const t of a) {
          if (!t.lit) continue;
          const dd = Math.hypot(t.x - x, t.z - z);
          const w = smoothstep(t.r * 1.7 + 1, t.r * 0.35, dd) * t.lit[3];
          if (w <= 0) continue;
          r += t.lit[0] * w;
          g += t.lit[1] * w;
          b += t.lit[2] * w;
          wsum += w;
          amt += w;
        }
      }
    if (wsum <= 0) return null;
    return [r / wsum, g / wsum, b / wsum, clamp(amt, 0, 1)];
  }

  // coarse map of what is falling where (colour + rate) for the drifting-leaf particles
  const LM = 256;
  const lm = new Uint8Array(LM * LM * 4);
  for (let j = 0; j < LM; j++) {
    for (let i = 0; i < LM; i++) {
      const x = BOUNDS.minX + ((i + 0.5) / LM) * (BOUNDS.maxX - BOUNDS.minX),
        z = BOUNDS.minZ + ((j + 0.5) / LM) * (BOUNDS.maxZ - BOUNDS.minZ);
      const l = litterAt(x, z);
      const o = (j * LM + i) * 4;
      if (l) {
        lm[o] = l[0] * 255;
        lm[o + 1] = l[1] * 255;
        lm[o + 2] = l[2] * 255;
        lm[o + 3] = l[3] * 255;
      }
    }
  }
  const leafMap = new THREE.DataTexture(lm, LM, LM, THREE.RGBAFormat);
  leafMap.minFilter = leafMap.magFilter = THREE.LinearFilter;
  leafMap.needsUpdate = true;

  return { trees, litterAt, leafMap, crowded };
}
