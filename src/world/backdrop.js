// The far distance — what you actually see from Badaguan on a clear day: the TV tower on
// Taiping Shan to the north, the towers of the new city across Fushan Bay to the east with the
// Fushan ridge behind them, the low houses of Huiquan Cape to the west, and ships out at sea.

import * as THREE from 'three';
import { GeoBuilder } from '../core/geo.js';
import { farHeight } from './layout.js';
import { makeCanvas, canvasTexture } from '../core/textures.js';
import { RNG, fbm, lerp } from '../core/math.js';

export function buildBackdrop(scene) {
  const group = new THREE.Group();
  group.name = 'backdrop';
  const rng = new RNG(2008);

  // ---------------------------------------------------------------- far shore of Fushan Bay
  const land = new GeoBuilder();
  land.setColor(0.2, 0.24, 0.2);
  const y = 2.5;
  const strip = (pts) => land.poly(pts.map((p) => [p[0], y, p[1]]), [1, 0, 0], [0, 0, 1], [0, 0, 0]);
  strip([[2250, -2600], [2250, 900], [6000, 900], [6000, -2600]].reverse());
  strip([[1000, -6000], [1000, -2500], [6000, -2500], [6000, -6000]].reverse());
  const landMesh = new THREE.Mesh(land.build(), new THREE.MeshLambertMaterial({ vertexColors: true }));
  group.add(landMesh);

  // ---------------------------------------------------------------- the skyline
  const towers = [];
  const cluster = (cx, cz, sx, sz, n, hMin, hMax) => {
    for (let i = 0; i < n; i++) {
      const x = cx + rng.gauss() * sx,
        z = cz + rng.gauss() * sz;
      if (x < 2280 && z > -2480) continue;
      const h = lerp(hMin, hMax, Math.pow(rng.next(), 2.2));
      const w = rng.range(22, 46);
      towers.push({ x, z, h, w, d: w * rng.range(0.7, 1.3), tone: rng.range(0.75, 1.1) });
    }
  };
  cluster(2600, -700, 260, 520, 46, 50, 250); // the business district behind May Fourth Square
  cluster(2900, -1700, 420, 420, 34, 40, 190);
  cluster(1900, -2900, 620, 260, 36, 30, 130); // north shore of the bay
  cluster(2700, 250, 260, 300, 18, 30, 110);
  const c = makeCanvas(64, 128);
  {
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 64, 128);
    const r2 = new RNG(88);
    for (let yy = 2; yy < 128; yy += 4)
      for (let xx = 2; xx < 64; xx += 4) {
        if (r2.chance(0.38)) {
          const warm = r2.chance(0.6);
          const l = r2.range(120, 255);
          ctx.fillStyle = warm ? `rgb(${l},${l * 0.78},${l * 0.45})` : `rgb(${l * 0.8},${l * 0.9},${l})`;
          ctx.fillRect(xx, yy, 2, 2);
        }
      }
  }
  const lights = canvasTexture(c, { repeat: true, aniso: false });
  lights.magFilter = THREE.NearestFilter;
  const towerMat = new THREE.MeshStandardMaterial({ color: 0x8f9aa6, roughness: 0.35, metalness: 0.3, emissiveMap: lights, emissive: 0xffffff, emissiveIntensity: 0 });
  const box = new THREE.BoxGeometry(1, 1, 1);
  box.translate(0, 0.5, 0);
  // repeat the lights texture with the size of each tower
  const uv = box.getAttribute('uv');
  const towerMesh = new THREE.InstancedMesh(box, towerMat, towers.length);
  const m4 = new THREE.Matrix4(),
    col = new THREE.Color();
  towers.forEach((t, i) => {
    m4.makeScale(t.w, t.h, t.d).setPosition(t.x, y, t.z);
    towerMesh.setMatrixAt(i, m4);
    towerMesh.setColorAt(i, col.setRGB(0.56 * t.tone, 0.6 * t.tone, 0.66 * t.tone));
  });
  towerMesh.frustumCulled = false;
  group.add(towerMesh);

  // ---------------------------------------------------------------- mountain silhouettes
  const ridge = (x0, z0, x1, z1, hMax, width, seed, tone) => {
    const g = new GeoBuilder();
    g.setColor(...tone);
    const n = 46;
    const dx = x1 - x0,
      dz = z1 - z0;
    const L = Math.hypot(dx, dz);
    const nx = -dz / L,
      nz = dx / L;
    let prev = null;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const env = Math.pow(Math.sin(Math.PI * t), 0.6);
      const h = hMax * env * (0.45 + 0.75 * fbm(t * 5 + seed, seed * 1.7, 4, seed));
      const p = { x: x0 + dx * t, z: z0 + dz * t, h };
      if (prev) {
        for (const s of [-1, 1]) {
          const a = [prev.x, prev.h, prev.z],
            b = [p.x, p.h, p.z];
          const a2 = [prev.x + nx * s * width, 0, prev.z + nz * s * width],
            b2 = [p.x + nx * s * width, 0, p.z + nz * s * width];
          if (s > 0) g.quad(a2, b2, b, a);
          else g.quad(b2, a2, a, b);
        }
      }
      prev = p;
    }
    const m = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ vertexColors: true }));
    group.add(m);
  };
  ridge(3900, -3200, 4300, 900, 330, 900, 3, [0.24, 0.28, 0.25]); // Fushan
  ridge(5200, -6200, 7400, -1200, 760, 1500, 7, [0.26, 0.3, 0.3]); // Laoshan, far to the east
  ridge(-4200, -4800, -1500, -5600, 260, 900, 11, [0.24, 0.28, 0.25]);

  // ---------------------------------------------------------------- TV tower on Taiping Shan
  {
    const tx = -180,
      tz = -1560;
    const base = farHeight(tx, tz);
    const g = new GeoBuilder();
    g.setColor(0.72, 0.74, 0.76);
    g.cylinder(tx, base - 5, tz, 9, 5, 125, 12);
    g.setColor(0.62, 0.66, 0.72);
    g.cylinder(tx, base + 108, tz, 6, 17, 10, 16);
    g.cylinder(tx, base + 118, tz, 17, 15, 12, 16);
    g.cylinder(tx, base + 130, tz, 15, 4, 12, 16);
    g.setColor(0.75, 0.3, 0.26);
    g.cylinder(tx, base + 142, tz, 3, 1.2, 46, 8);
    g.setColor(0.86, 0.86, 0.86);
    g.cylinder(tx, base + 188, tz, 1.2, 0.5, 30, 6);
    const m = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ vertexColors: true }));
    group.add(m);
    // aircraft-warning beacon
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(3.2, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2a1a }));
    beacon.position.set(tx, base + 219, tz);
    group.add(beacon);
    group.userData.beacon = beacon;
  }

  // ---------------------------------------------------------------- Huiquan Cape: hotels and red roofs
  {
    const g = new GeoBuilder();
    for (let i = 0; i < 46; i++) {
      const x = rng.range(-1050, -560),
        z = rng.range(60, 500);
      const h0 = farHeight(x, z);
      if (h0 < 3.5) continue;
      const tall = rng.chance(0.16);
      const w = tall ? rng.range(18, 30) : rng.range(10, 20),
        h = tall ? rng.range(40, 78) : rng.range(8, 16);
      const tone = rng.range(0.8, 1.05);
      g.setColor(0.86 * tone, 0.82 * tone, 0.72 * tone);
      g.box(x, h0 + h / 2 - 2, z, w, h + 4, w * rng.range(0.7, 1.2), 'xXzZ');
      g.setColor(0.62, 0.26, 0.17);
      g.box(x, h0 + h + 0.8, z, w + 1, 2.2, w + 1);
    }
    const m = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ vertexColors: true }));
    group.add(m);
  }

  // ---------------------------------------------------------------- ships on the roads
  const ships = [];
  {
    const mk = (len, colHull) => {
      const g = new GeoBuilder();
      g.setColor(...colHull);
      g.box(0, 5, 0, len, 12, len * 0.15);
      g.setColor(0.9, 0.9, 0.88);
      g.box(-len * 0.36, 17, 0, len * 0.12, 14, len * 0.13);
      const cols = [[0.7, 0.3, 0.2], [0.2, 0.4, 0.6], [0.75, 0.6, 0.25], [0.3, 0.5, 0.4]];
      for (let i = 0; i < 7; i++) {
        g.setColor(...cols[i % cols.length]);
        g.box(-len * 0.2 + i * len * 0.09, 13.5, 0, len * 0.08, 5 + (i % 3) * 2.5, len * 0.12);
      }
      const m = new THREE.Mesh(g.build(), new THREE.MeshLambertMaterial({ vertexColors: true }));
      return m;
    };
    const defs = [
      [-900, 3300, 230, [0.2, 0.22, 0.28], 0.35, 5],
      [1400, 4600, 300, [0.5, 0.16, 0.12], Math.PI + 0.2, 4],
      [3200, 2600, 190, [0.16, 0.24, 0.2], 0.1, 6],
    ];
    for (const [x, z, len, colr, heading, speed] of defs) {
      const m = mk(len, colr);
      m.position.set(x, 0, z);
      m.rotation.y = heading;
      group.add(m);
      ships.push({ m, heading, speed });
    }
  }

  scene.add(group);

  function update(dt, time, night) {
    towerMat.emissiveIntensity = night * 1.6;
    const b = group.userData.beacon;
    if (b) b.visible = night > 0.3 && Math.sin(time * 2.2) > -0.2;
    for (const s of ships) {
      s.m.position.x += Math.cos(s.heading) * s.speed * dt;
      s.m.position.z -= Math.sin(s.heading) * s.speed * dt;
    }
  }
  return { group, update };
}
