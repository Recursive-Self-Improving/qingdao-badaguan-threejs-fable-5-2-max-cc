// Streets: asphalt carriageways, granite-sett pavements with kerbs, junction corners,
// and the carpet of fallen leaves that gathers along each kerb in autumn.

import * as THREE from 'three';
import { ROADS, INTERSECTIONS, ROAD_BY_ID, nearestRoad } from './layout.js';
import { ChunkedBuilders } from '../core/geo.js';
import { patchMaterial } from './atmosphere.js';
import { LITTER_PARS, litterUniforms } from './terrain.js';
import { asphaltTexture, paverTextures } from '../core/textures.js';
import { lerp, smoothstep } from '../core/math.js';

export const KERB = 0.15;

// colour (linear-ish) and amount of leaf litter each street tree sheds in late autumn
export const LITTER_BY_TREE = {
  ginkgo: [0.95, 0.66, 0.07, 1.0],
  maple: [0.86, 0.3, 0.07, 0.92],
  plane: [0.6, 0.4, 0.15, 0.85],
  crape: [0.74, 0.33, 0.1, 0.42],
  peach: [0.7, 0.48, 0.14, 0.38],
  crabapple: [0.76, 0.5, 0.1, 0.45],
  cedar: [0.42, 0.3, 0.16, 0.3],
  juniper: [0.4, 0.32, 0.18, 0.1],
  pine: [0.48, 0.34, 0.18, 0.34],
};

function lerpPt(a, b, t) {
  const o = {};
  for (const k in a) o[k] = lerp(a[k], b[k], t);
  return o;
}

// Polyline pieces running parallel to a road at `offset` on one side (+1 right, −1 left),
// trimmed exactly where they would enter the corridor of another road.
export function offsetRuns(road, side, offset, clearance = (o) => o.half + o.sw) {
  const runs = [];
  let cur = null,
    prev = null;
  const P = road.pts;
  for (let i = 0; i < P.length; i++) {
    const p = P[i];
    const x = p.x + p.nx * side * offset,
      z = p.z + p.nz * side * offset;
    let D = 1e9;
    const nr = nearestRoad(x, z, 30, road);
    if (nr && !nr.beyond) {
      // Shanhaiguan Rd simply continues as Huanghai Rd at its east end — no junction there
      const joined =
        (road.id === 'shanhai' && nr.road.id === 'huanghai' && nr.i < 10) ||
        (road.id === 'huanghai' && nr.road.id === 'shanhai' && nr.i > nr.road.pts.length - 10);
      if (!joined) D = nr.dist - clearance(nr.road);
    }
    const pt = { x, z, y: p.y, s: p.s, cx: p.x, cz: p.z, nx: p.nx * side, nz: p.nz * side, tx: p.tx, tz: p.tz, D };
    if (prev) {
      if (prev.D > 0 && D > 0) cur.push(pt);
      else if (prev.D > 0 && D <= 0) {
        cur.push(lerpPt(prev, pt, prev.D / (prev.D - D)));
        if (cur.length > 1) runs.push(cur);
        cur = null;
      } else if (prev.D <= 0 && D > 0) cur = [lerpPt(prev, pt, prev.D / (prev.D - D)), pt];
    } else if (D > 0) cur = [pt];
    prev = pt;
  }
  if (cur && cur.length > 1) runs.push(cur);
  return runs;
}

// point of a run at another lateral offset (relative to the run's own offset)
const shift = (p, d) => [p.x + p.nx * d, p.z + p.nz * d];

export function buildRoads(scene) {
  const cb = new ChunkedBuilders(190);

  for (const road of ROADS) {
    const lit = LITTER_BY_TREE[road.tree];
    const P = road.pts;
    const lined = ['zhengyang', 'shanhai', 'wusheng', 'ningwu', 'zijing'].includes(road.id) ? 1 : 0;
    // --- carriageway
    for (let i = 0; i < P.length - 1; i++) {
      const a = P[i],
        b = P[i + 1];
      const g = cb.get('road', a.x, a.z).useExtra();
      g.setColor(lit[0], lit[1], lit[2]);
      const h = road.half;
      // both overlapping ribbons must look the same inside a junction: clean asphalt
      const clearOf = (p) => {
        const nr = nearestRoad(p.x, p.z, 30, road);
        if (!nr || nr.beyond) return 1;
        if ((road.id === 'shanhai' && nr.road.id === 'huanghai' && nr.i < 10) || (road.id === 'huanghai' && nr.road.id === 'shanhai' && nr.i > nr.road.pts.length - 10)) return 1;
        return smoothstep(nr.road.half + 0.5, nr.road.half + nr.road.sw + 3.5, nr.dist);
      };
      const v = (p, lat, s) => {
        const k = p.jc ?? (p.jc = clearOf(p));
        g.setExtra(lat, s, lit[3] * k, lined * (k > 0.98 ? 1 : 0));
        return g.vert(p.x + p.nx * h * lat, p.y, p.z + p.nz * h * lat, 0, 1, 0, 0, 0);
      };
      const i0 = v(a, -1, a.s),
        i1 = v(a, 1, a.s),
        i2 = v(b, 1, b.s),
        i3 = v(b, -1, b.s);
      // +lat lies to the right of travel → (left a, right b, left b) faces up
      g.tri(i0, i2, i3);
      g.tri(i0, i1, i2);
    }
    // --- pavements with kerb
    for (const side of [-1, 1]) {
      const runs = offsetRuns(road, side, road.half);
      for (const run of runs) {
        for (let i = 0; i < run.length - 1; i++) {
          const a = run[i],
            b = run[i + 1];
          const g = cb.get('pave', a.x, a.z).useExtra();
          g.setColor(lit[0], lit[1], lit[2]);
          g.setExtra(0, 0, Math.min(1, lit[3] * 1.1), 0);
          const sw = road.sw;
          const a0 = shift(a, 0),
            a1 = shift(a, sw),
            b0 = shift(b, 0),
            b1 = shift(b, sw);
          const ya = a.y + KERB,
            yb = b.y + KERB;
          // top surface: u along the road, v across
          const uv = (p0, p1, q0, q1) => {
            const i0 = g.vert(p0[0], ya, p0[1], 0, 1, 0, a.s * 0.5, 0);
            const i1 = g.vert(p1[0], ya, p1[1], 0, 1, 0, a.s * 0.5, sw * 0.5);
            const i2 = g.vert(q1[0], yb, q1[1], 0, 1, 0, b.s * 0.5, sw * 0.5);
            const i3 = g.vert(q0[0], yb, q0[1], 0, 1, 0, b.s * 0.5, 0);
            if (side > 0) {
              g.tri(i0, i2, i3);
              g.tri(i0, i1, i2);
            } else {
              g.tri(i0, i3, i2);
              g.tri(i0, i2, i1);
            }
          };
          uv(a0, a1, b0, b1);
          // kerb face (towards the carriageway) — no leaves cling to it
          g.setExtra(0, 0, 0, 0);
          const nx = -a.nx,
            nz = -a.nz;
          const k0 = g.vert(a0[0], a.y - 0.05, a0[1], nx, 0, nz, a.s * 0.5, 0.9);
          const k1 = g.vert(b0[0], b.y - 0.05, b0[1], nx, 0, nz, b.s * 0.5, 0.9);
          const k2 = g.vert(b0[0], yb, b0[1], nx, 0, nz, b.s * 0.5, 1.0);
          const k3 = g.vert(a0[0], ya, a0[1], nx, 0, nz, a.s * 0.5, 1.0);
          if (side > 0) {
            g.tri(k0, k2, k1);
            g.tri(k0, k3, k2);
          } else {
            g.tri(k0, k1, k2);
            g.tri(k0, k2, k3);
          }
        }
      }
    }
  }

  // --- junction corners
  for (const it of INTERSECTIONS) {
    const A = ROAD_BY_ID[it.a],
      B = ROAD_BY_ID[it.b];
    const near = (road) => {
      let bi = 0,
        bd = 1e9;
      road.pts.forEach((p, i) => {
        const d = (p.x - it.x) ** 2 + (p.z - it.z) ** 2;
        if (d < bd) {
          bd = d;
          bi = i;
        }
      });
      return road.pts[bi];
    };
    const pa = near(A),
      pb = near(B);
    const litA = LITTER_BY_TREE[A.tree];
    for (const sa of [-1, 1]) {
      for (const sb of [-1, 1]) {
        const P = (a, b) => [it.x + pa.nx * sa * a + pb.nx * sb * b, it.z + pa.nz * sa * a + pb.nz * sb * b];
        const c = P(A.half + A.sw * 0.5, B.half + B.sw * 0.5);
        const nr = nearestRoad(c[0], c[1], 20, A);
        if (!nr || nr.beyond) continue; // open side of a T-junction
        const e = 0.04;
        const p00 = P(A.half, B.half),
          p10 = P(A.half + A.sw + e, B.half),
          p11 = P(A.half + A.sw + e, B.half + B.sw + e),
          p01 = P(A.half, B.half + B.sw + e);
        const y = pa.y + KERB - 0.004;
        const g = cb.get('pave', it.x, it.z).useExtra();
        g.setColor(litA[0], litA[1], litA[2]);
        g.setExtra(0, 0, litA[3], 0);
        const pts = [p00, p10, p11, p01].map((q) => [q[0], y, q[1]]);
        // orientation depends on the quadrant: make it face up
        const up = (pts[1][0] - pts[0][0]) * (pts[3][2] - pts[0][2]) - (pts[1][2] - pts[0][2]) * (pts[3][0] - pts[0][0]) < 0;
        if (up) g.quad(pts[0], pts[1], pts[2], pts[3]);
        else g.quad(pts[0], pts[3], pts[2], pts[1]);
        // kerb faces along both carriageways
        g.setExtra(0, 0, 0, 0);
        const face = (q0, q1) => {
          const lo0 = [q0[0], pa.y - 0.05, q0[1]],
            lo1 = [q1[0], pa.y - 0.05, q1[1]],
            hi1 = [q1[0], y, q1[1]],
            hi0 = [q0[0], y, q0[1]];
          // face must look towards the junction centre
          const mx = (q0[0] + q1[0]) / 2 - it.x,
            mz = (q0[1] + q1[1]) / 2 - it.z;
          const ex = q1[0] - q0[0],
            ez = q1[1] - q0[1];
          // quad(lo0, lo1, hi1, hi0) has its normal along (−ez, ex)
          if (-ez * mx + ex * mz < 0) g.quad(lo0, lo1, hi1, hi0);
          else g.quad(lo1, lo0, hi0, hi1);
        };
        face(p00, p10);
        face(p00, p01);
      }
    }
  }

  // --- materials
  const pav = paverTextures();
  const roadMat = new THREE.MeshStandardMaterial({ map: asphaltTexture(), roughness: 0.93, metalness: 0 });
  patchMaterial(
    roadMat,
    'road',
    (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
					attribute vec3 color;
					attribute vec4 aExtra;
					varying vec4 vLitter;
					varying vec4 vRoad;
					varying vec3 vWPos;`
        )
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
					vLitter = vec4( color, aExtra.z );
					vRoad = aExtra;
					vWPos = position;`
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
					varying vec4 vRoad;
					varying vec3 vWPos;
					${LITTER_PARS}`
        )
        .replace(
          '#include <map_fragment>',
          /* glsl */ `
					vec2 wuv = vWPos.xz;
					vec3 acol = texture2D( map, wuv * 0.17 ).rgb;
					float big = texture2D( tNoiseG, wuv * 0.019 ).r;
					float mid = texture2D( tNoiseG, wuv * 0.11 ).g;
					acol *= 0.8 + 0.4 * big;
					// lighter, polished wheel tracks
					float lane = abs( abs( vRoad.x ) - 0.5 );
					acol *= 1.0 + 0.09 * smoothstep( 0.22, 0.0, lane ) * ( 0.5 + mid );
					// a worn centre line on the through streets
					float line = smoothstep( 0.028, 0.016, abs( vRoad.x ) ) * step( fract( vRoad.y / 9.0 ), 0.5 ) * vRoad.w;
					line *= smoothstep( 0.3, 0.6, mid + big * 0.5 );
					acol = mix( acol, vec3( 0.62, 0.5, 0.2 ), line * 0.7 );
					// leaves are swept by traffic into the gutters
					float gutter = smoothstep( 0.35, 1.0, abs( vRoad.x ) );
					vec4 lit = litterLayer( wuv, ( gutter * 0.62 - 0.48 ) * vLitter.a - 0.04 );
					acol = mix( acol, lit.rgb, lit.a );
					diffuseColor.rgb = acol;`
        );
    },
    litterUniforms
  );

  const paveMat = new THREE.MeshStandardMaterial({ map: pav.map, normalMap: pav.normalMap, roughness: 0.9, metalness: 0 });
  paveMat.normalScale.set(0.7, 0.7);
  patchMaterial(
    paveMat,
    'pave',
    (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
					attribute vec3 color;
					attribute vec4 aExtra;
					varying vec4 vLitter;
					varying vec3 vWPos;`
        )
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
					vLitter = vec4( color, aExtra.z );
					vWPos = position;`
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
					varying vec3 vWPos;
					float gLitterCover;
					${LITTER_PARS}`
        )
        .replace(
          '#include <map_fragment>',
          /* glsl */ `
					#include <map_fragment>
					{
						vec2 wuv = vWPos.xz;
						diffuseColor.rgb *= 0.82 + 0.36 * texture2D( tNoiseG, wuv * 0.03 ).r;
						vec4 lit = litterLayer( wuv, - 0.2 );
						diffuseColor.rgb = mix( diffuseColor.rgb, lit.rgb, lit.a );
						gLitterCover = lit.a;
					}`
        )
        .replace(
          '#include <normal_fragment_maps>',
          `#include <normal_fragment_maps>
					normal = normalize( mix( normal, nonPerturbedNormal, gLitterCover * 0.85 ) );`
        );
    },
    litterUniforms
  );

  const group = new THREE.Group();
  group.name = 'roads';
  cb.buildMeshes({ road: roadMat, pave: paveMat }, group, { road: { cast: false }, pave: { cast: false } });
  scene.add(group);
  return group;
}
