// Geography of the district: coastline, relief, the real street grid of Badaguan
// (3 north–south × 7 east–west "pass" roads + the coastal Huanghai Rd), lots and villas.
//
// Coordinates: +X = east, +Z = south (towards the sea), +Y = up, metres. Sea level = 0.
// The plan is a condensed (~0.6×) but topologically faithful version of the real place.

import { RNG, fbm, smoothstep, saturate, lerp, clamp, curve1D, catmullRom, smin } from '../core/math.js';

export const BOUNDS = { minX: -480, maxX: 500, minZ: -440, maxZ: 410 }; // extent of the fine height grid
export const CELL = 2;
export const PLAY = { minX: -362, maxX: 462, minZ: -362, maxZ: 348 }; // soft limits for the visitor

// ---------------------------------------------------------------------------------------------
// Coastline
// ---------------------------------------------------------------------------------------------
// South shore (Taiping Bay → Huashi Lou headland → Taiping Cape) as z = f(x)
const southShore = curve1D([
  [-1500, 760],
  [-950, 700],
  [-720, 640],
  [-580, 520],
  [-480, 340],
  [-410, 270],
  [-335, 246],
  [-220, 227],
  [-90, 217],
  [40, 223],
  [128, 239],
  [160, 259],
  [196, 297],
  [232, 277],
  [258, 247],
  [300, 241],
  [340, 290],
  [380, 326],
  [420, 304],
  [455, 234],
  [640, 120],
]);
// East shore (Fushan Bay side) as x = f(z)
const eastShore = curve1D([
  [-2400, 900],
  [-1300, 760],
  [-700, 640],
  [-420, 566],
  [-200, 524],
  [-60, 500],
  [60, 486],
  [150, 478],
  [230, 466],
  [300, 440],
  [345, 398],
  [430, 320],
]);
const rockSouth = curve1D([
  [-1500, 1],
  [-470, 1],
  [-405, 0.92],
  [-350, 0.2],
  [-325, 0],
  [112, 0],
  [136, 0.3],
  [158, 1],
  [2000, 1],
]);

// approx. signed distance to the shoreline (positive inland)
export function coastDist(x, z) {
  const zs = southShore(x);
  const dzs = (southShore(x + 1.5) - southShore(x - 1.5)) / 3;
  const dS = (zs - z) / Math.sqrt(1 + dzs * dzs);
  const xe = eastShore(z);
  const dxe = (eastShore(z + 1.5) - eastShore(z - 1.5)) / 3;
  const dE = (xe - x) / Math.sqrt(1 + dxe * dxe);
  return smin(dS, dE, 16);
}

export function rockiness(x, z) {
  const zs = southShore(x);
  const dS = zs - z;
  const dE = eastShore(z) - x;
  // (the spline may overshoot slightly, hence the clamps) — with a ragged edge where sand meets reef
  let rs = saturate(rockSouth(x));
  if (rs > 0.02 && rs < 0.98) rs = saturate(rs + (fbm(x / 9, z / 9, 2, 31) - 0.5) * 0.7);
  // blend to full rock where the east shore is the nearer one
  const k = saturate((dS - dE) / 30 + 0.5);
  return saturate(lerp(rs, 1, k));
}

export function shoreZ(x) {
  return southShore(x);
}
export function shoreX(z) {
  return eastShore(z);
}

const gauss2 = (dx, dz, r) => Math.exp(-(dx * dx + dz * dz) / (r * r));

function landHeight(x, z) {
  const u = Math.max(0, 138 - z);
  const rise = u <= 520 ? u : 520 + 320 * (1 - Math.exp(-(u - 520) / 320));
  let h = 3.3 + rise * 0.058;
  h += (fbm(x / 250 + 3.1, z / 250 - 1.7, 3, 5) - 0.5) * 10 * smoothstep(135, 20, z);
  // Taiping Cape plateau and the knoll that carries Huashi Lou
  h += 3.4 * gauss2(x - 352, z - 222, 92) + 2.6 * gauss2(x - 203, z - 256, 36);
  // distant relief: Taiping Shan (N), the Zhongshan-park hills (W), Huiquan Cape (SW)
  h += 104 * gauss2(x + 180, z + 1560, 640) + 58 * gauss2(x + 1380, z + 520, 540) + 30 * gauss2(x + 800, z - 380, 230);
  h += 46 * gauss2(x - 1900, z + 1500, 800);
  return h;
}

function coastProfile(d, rock, x, z) {
  // sandy beach
  let hb;
  if (d < 0) hb = Math.max(-18, d * 0.042);
  else if (d < 14) hb = d * 0.052;
  else if (d < 40) hb = 0.728 + (d - 14) * 0.037;
  else hb = 1.69 + smoothstep(40, 41.6, d) * 1.5;
  if (rock <= 0.001) return hb;
  // rocky shore with reefs
  const n = fbm(x / 13 + 9.3, z / 13 - 4.1, 4, 7);
  const n2 = fbm(x / 4.5, z / 4.5, 2, 13);
  let hr;
  if (d < 0) {
    hr = Math.max(-18, d * 0.13) + (n - 0.43) * 3.6 * smoothstep(-48, -3, d) + (n2 - 0.5) * 0.7 * smoothstep(-20, 0, d);
  } else {
    const ramp = d < 12 ? d * 0.25 : 3.0 + (d - 12) * 0.022;
    hr = ramp + (n - 0.42) * 2.6 * smoothstep(28, 2, d) + (n2 - 0.5) * 0.8 * smoothstep(20, 0, d);
  }
  return lerp(hb, hr, rock);
}

// relief before any man-made flattening
function land0(x, z) {
  const d = coastDist(x, z);
  const land = landHeight(x, z);
  if (d >= 84) return land;
  const prof = coastProfile(d, rockiness(x, z), x, z);
  return lerp(prof, land, smoothstep(46, 84, d));
}

// ---------------------------------------------------------------------------------------------
// Roads
// ---------------------------------------------------------------------------------------------
// The real "one pass, one tree" planting — each street carries a single species.
export const TREE_INFO = {
  ginkgo: { tc: '銀杏', en: 'Ginkgo', note: '深秋一路金黃，落葉緩掃' },
  maple: { tc: '五角楓', en: 'Painted maple', note: '霜染楓紅，層林盡染' },
  plane: { tc: '法國梧桐', en: 'London plane', note: '老梧桐夾道，枝椏如傘' },
  cedar: { tc: '雪松', en: 'Deodar cedar', note: '雪松成列，四季常青' },
  juniper: { tc: '龍柏', en: 'Dragon juniper', note: '龍柏盤旋，蒼翠挺拔' },
  peach: { tc: '碧桃', en: 'Flowering peach', note: '春來花開，粉紅如帶' },
  crabapple: { tc: '海棠', en: 'Crabapple', note: '人稱「花街」，秋實纍纍' },
  crape: { tc: '紫薇', en: 'Crape myrtle', note: '盛夏紫薇，百日紅' },
  pine: { tc: '黑松', en: 'Black pine', note: '礁石黑松，海風為伴' },
};

const zWusheng = (x) => -330 + 6 * Math.sin(x / 200);
const zJiayu = (x) => -250 + 5 * Math.sin(x / 180 + 1);
const zHangu = (x) => -170 + 5 * Math.sin(x / 210 + 2);
const zZhengyang = (x) => -90 + 4 * Math.sin(x / 190 + 0.5);
const zLinhuai = (x) => -10 + 5 * Math.sin(x / 170 + 3);
const zJuyong = (x) => 70 + 4 * Math.sin(x / 200 + 4);
const zShanhai = (x) => 150 + 0.00007 * (x + 90) * (x + 90);
const xShao = (z) => -215 + 8 * Math.sin(z / 150);
const xNingwu = (z) => 6 * Math.sin(z / 170 + 1);
const xZijing = (z) => 215 + 8 * Math.sin(z / 140 + 2);

function sampleEW(fz, x0, x1) {
  const pts = [];
  const n = Math.ceil((x1 - x0) / 2);
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push({ x, z: fz(x) });
  }
  return pts;
}
function sampleNS(fx, z0, z1) {
  const pts = [];
  const n = Math.ceil((z1 - z0) / 2);
  for (let i = 0; i <= n; i++) {
    const z = z0 + ((z1 - z0) * i) / n;
    pts.push({ x: fx(z), z });
  }
  return pts;
}
function samplePath(ctrl) {
  const f = catmullRom(ctrl);
  // dense sample then resample at ~2 m
  const dense = [];
  for (let i = 0; i <= 2000; i++) dense.push(f(i / 2000));
  const pts = [{ x: dense[0][0], z: dense[0][1] }];
  let acc = 0;
  for (let i = 1; i < dense.length; i++) {
    acc += Math.hypot(dense[i][0] - dense[i - 1][0], dense[i][1] - dense[i - 1][1]);
    if (acc >= 2) {
      pts.push({ x: dense[i][0], z: dense[i][1] });
      acc = 0;
    }
  }
  const last = dense[dense.length - 1];
  pts.push({ x: last[0], z: last[1] });
  return pts;
}

const EW_X0 = -372,
  EW_X1 = 372;

function road(id, sc, tc, en, tree, kind, pts, half = 3.25, sw = 2.6) {
  return { id, sc, tc, en, tree, kind, pts, half, sw };
}

const shanhaiEnd = 336;
const huanghaiCtrl = [
  [shanhaiEnd, zShanhai(shanhaiEnd)],
  [372, 166],
  [408, 176],
  [430, 202],
  [433, 238],
  [416, 268],
  [386, 287],
  [352, 271],
  [320, 229],
  [292, 213],
  [264, 209],
  [246, 198],
  [239, 178],
  [240, zShanhai(240)],
];

export const ROADS = [
  road('wusheng', '武胜关路', '武勝關路', 'Wushengguan Rd', 'plane', 'EW', sampleEW(zWusheng, EW_X0, EW_X1)),
  road('jiayu', '嘉峪关路', '嘉峪關路', 'Jiayuguan Rd', 'maple', 'EW', sampleEW(zJiayu, EW_X0, EW_X1)),
  road('hangu', '函谷关路', '函谷關路', 'Hanguguan Rd', 'plane', 'EW', sampleEW(zHangu, EW_X0, EW_X1)),
  road('zhengyang', '正阳关路', '正陽關路', 'Zhengyangguan Rd', 'crape', 'EW', sampleEW(zZhengyang, EW_X0, EW_X1)),
  road('linhuai', '临淮关路', '臨淮關路', 'Linhuaiguan Rd', 'juniper', 'EW', sampleEW(zLinhuai, EW_X0, EW_X1)),
  road('juyong', '居庸关路', '居庸關路', 'Juyongguan Rd', 'ginkgo', 'EW', sampleEW(zJuyong, EW_X0, EW_X1)),
  road('shanhai', '山海关路', '山海關路', 'Shanhaiguan Rd', 'plane', 'EW', sampleEW(zShanhai, EW_X0, shanhaiEnd), 3.0, 2.4),
  road('shaoguan', '韶关路', '韶關路', 'Shaoguan Rd', 'peach', 'NS', sampleNS(xShao, zWusheng(-215) - 10, zShanhai(-215) + 10), 3.0),
  road('ningwu', '宁武关路', '寧武關路', 'Ningwuguan Rd', 'crabapple', 'NS', sampleNS(xNingwu, zWusheng(0) - 10, zShanhai(0) + 10), 3.0),
  road('zijing', '紫荆关路', '紫荊關路', 'Zijingguan Rd', 'cedar', 'NS', sampleNS(xZijing, zWusheng(215) - 10, zShanhai(215) + 10), 3.0),
  road('huanghai', '黄海路', '黃海路', 'Huanghai Rd', 'pine', 'PATH', samplePath(huanghaiCtrl), 3.0, 2.4),
];
export const ROAD_BY_ID = Object.fromEntries(ROADS.map((r) => [r.id, r]));

// tangents, right-hand normals, arclength
for (const r of ROADS) {
  const p = r.pts;
  let s = 0;
  for (let i = 0; i < p.length; i++) {
    const a = p[Math.max(0, i - 1)],
      b = p[Math.min(p.length - 1, i + 1)];
    let tx = b.x - a.x,
      tz = b.z - a.z;
    const l = Math.hypot(tx, tz) || 1;
    tx /= l;
    tz /= l;
    p[i].tx = tx;
    p[i].tz = tz;
    p[i].nx = -tz; // right-hand side when travelling along the road
    p[i].nz = tx;
    if (i > 0) s += Math.hypot(p[i].x - p[i - 1].x, p[i].z - p[i - 1].z);
    p[i].s = s;
  }
  r.length = s;
}

// --- intersections (every NS road crosses every EW road) -------------------------------------
export const INTERSECTIONS = [];
{
  const ew = [zWusheng, zJiayu, zHangu, zZhengyang, zLinhuai, zJuyong, zShanhai];
  const ewIds = ['wusheng', 'jiayu', 'hangu', 'zhengyang', 'linhuai', 'juyong', 'shanhai'];
  const ns = [xShao, xNingwu, xZijing];
  const nsIds = ['shaoguan', 'ningwu', 'zijing'];
  for (let a = 0; a < ew.length; a++) {
    for (let b = 0; b < ns.length; b++) {
      let x = ns[b](0),
        z = ew[a](x);
      for (let k = 0; k < 8; k++) {
        x = ns[b](z);
        z = ew[a](x);
      }
      INTERSECTIONS.push({ x, z, a: ewIds[a], b: nsIds[b] });
    }
  }
  INTERSECTIONS.push({ x: 240, z: zShanhai(240), a: 'shanhai', b: 'huanghai' });
}
for (const it of INTERSECTIONS) it.y = land0(it.x, it.z);

// relief with a level plateau at every junction, so crossing carriageways agree in height
function land1(x, z) {
  let h = land0(x, z);
  for (let i = 0; i < INTERSECTIONS.length; i++) {
    const it = INTERSECTIONS[i];
    const dx = x - it.x,
      dz = z - it.z;
    const d2 = dx * dx + dz * dz;
    if (d2 < 36 * 36) {
      const w = smoothstep(36, 7, Math.sqrt(d2));
      h = lerp(h, it.y, w);
    }
  }
  return h;
}

// road surface elevation (lightly smoothed along the road)
for (const r of ROADS) {
  const p = r.pts;
  const raw = p.map((q) => Math.max(land1(q.x, q.z), 2.9));
  const win = r.id === 'huanghai' ? 7 : 2;
  for (let i = 0; i < p.length; i++) {
    let s = 0,
      n = 0;
    for (let k = -win; k <= win; k++) {
      const j = clamp(i + k, 0, p.length - 1);
      s += raw[j];
      n++;
    }
    p[i].y = s / n;
  }
}

// --- spatial hash of road samples ---------------------------------------------------------------
const RH = 12;
const roadHash = new Map();
const rkey = (ix, iz) => ix * 4096 + iz;
ROADS.forEach((r, ri) => {
  r.index = ri;
  r.pts.forEach((p, pi) => {
    const k = rkey(Math.floor(p.x / RH), Math.floor(p.z / RH));
    let a = roadHash.get(k);
    if (!a) roadHash.set(k, (a = []));
    a.push(ri, pi);
  });
});

const _nr = { road: null, i: 0, dist: Infinity, lateral: 0, beyond: false };
// Nearest road sample to (x, z) within `maxDist`; optionally ignoring one road.
// Returns a shared object (copy what you need) or null.
export function nearestRoad(x, z, maxDist = 24, exclude = null) {
  const r = Math.ceil(maxDist / RH);
  const cx = Math.floor(x / RH),
    cz = Math.floor(z / RH);
  let best = maxDist * maxDist,
    bestR = -1,
    bestI = -1;
  for (let ix = cx - r; ix <= cx + r; ix++) {
    for (let iz = cz - r; iz <= cz + r; iz++) {
      const a = roadHash.get(rkey(ix, iz));
      if (!a) continue;
      for (let k = 0; k < a.length; k += 2) {
        const road = ROADS[a[k]];
        if (road === exclude) continue;
        const p = road.pts[a[k + 1]];
        const dx = x - p.x,
          dz = z - p.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < best) {
          best = d2;
          bestR = a[k];
          bestI = a[k + 1];
        }
      }
    }
  }
  if (bestR < 0) return null;
  const road = ROADS[bestR];
  const p = road.pts[bestI];
  const dx = x - p.x,
    dz = z - p.z;
  const along = dx * p.tx + dz * p.tz;
  _nr.road = road;
  _nr.i = bestI;
  _nr.lateral = dx * p.nx + dz * p.nz;
  // beyond the open end of a road → measure as "not beside it"
  _nr.beyond = (bestI === 0 && along < -1.2) || (bestI === road.pts.length - 1 && along > 1.2);
  _nr.dist = Math.sqrt(best);
  return _nr;
}

// point on a road at arclength s, offset sideways (positive = right-hand side)
export function roadPoint(road, s, offset = 0, out = {}) {
  const p = road.pts;
  let lo = 0,
    hi = p.length - 1;
  s = clamp(s, 0, road.length);
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (p[mid].s <= s) lo = mid;
    else hi = mid;
  }
  const a = p[lo],
    b = p[hi];
  const t = b.s > a.s ? (s - a.s) / (b.s - a.s) : 0;
  const nx = lerp(a.nx, b.nx, t),
    nz = lerp(a.nz, b.nz, t);
  out.x = lerp(a.x, b.x, t) + nx * offset;
  out.z = lerp(a.z, b.z, t) + nz * offset;
  out.y = lerp(a.y, b.y, t);
  out.tx = lerp(a.tx, b.tx, t);
  out.tz = lerp(a.tz, b.tz, t);
  out.nx = nx;
  out.nz = nz;
  return out;
}

// ---------------------------------------------------------------------------------------------
// Lots & villas
// ---------------------------------------------------------------------------------------------
export const LOTS = [];
export const VILLAS = [];
export const LANDMARKS = {
  huashi: { x: 203, z: 257, rot: Math.PI * 0.08, tc: '花石樓', en: 'Huashi Lou · the Granite Castle', sub: '黃海路 18 號 · 1930 年代' },
  princess: { x: 0, z: 0, rot: 0, tc: '公主樓', en: 'Princess House', sub: '居庸關路 10 號 · 北歐風格' },
};

export const VILLA_STYLES = ['german', 'tudor', 'spanish', 'french', 'nordic', 'colonial', 'modern', 'granite'];

{
  const rng = new RNG(20261110);
  const LOT_DEPTH = 27;
  const ewRoads = ROADS.filter((r) => r.kind === 'EW');
  for (const r of ewRoads) {
    // arclength positions of the crossings on this road
    const cuts = [0];
    for (const it of INTERSECTIONS) {
      if (it.a !== r.id) continue;
      let bi = 0,
        bd = 1e9;
      for (let i = 0; i < r.pts.length; i++) {
        const d = Math.hypot(r.pts[i].x - it.x, r.pts[i].z - it.z);
        if (d < bd) {
          bd = d;
          bi = i;
        }
      }
      cuts.push(r.pts[bi].s);
    }
    cuts.push(r.length);
    cuts.sort((a, b) => a - b);
    for (const side of [-1, 1]) {
      if (r.id === 'shanhai' && side === 1) continue; // the seaward side is park and beach
      for (let c = 0; c < cuts.length - 1; c++) {
        const first = c === 0,
          last = c === cuts.length - 2;
        let s0 = cuts[c] + (first ? 30 : 12);
        let s1 = cuts[c + 1] - (last ? (r.id === 'shanhai' ? 12 : 30) : 12);
        if (r.id === 'shanhai' && last) s1 = r.length - 6;
        const L = s1 - s0;
        if (L < 26) continue;
        const n = Math.max(1, Math.round(L / rng.range(42, 52)));
        // random widths
        const ws = [];
        let tot = 0;
        for (let i = 0; i < n; i++) {
          const w = rng.range(0.82, 1.18);
          ws.push(w);
          tot += w;
        }
        let s = s0;
        for (let i = 0; i < n; i++) {
          const w = (ws[i] / tot) * L;
          const lot = {
            id: LOTS.length,
            road: r,
            side,
            s0: s,
            s1: s + w,
            width: w,
            depth: LOT_DEPTH,
            front: r.half + r.sw + 0.35,
            seed: rng.int(1, 1e9),
            corner: (i === 0 && !first) || (i === n - 1 && !last),
          };
          s += w;
          LOTS.push(lot);
        }
      }
    }
  }

  // Princess House: a lot on the north side of Juyongguan Rd between Ningwuguan and Zijingguan Rds
  let princessLot = null;
  {
    let best = 1e9;
    for (const lot of LOTS) {
      if (lot.road.id !== 'juyong' || lot.side !== -1) continue;
      const m = roadPoint(lot.road, (lot.s0 + lot.s1) / 2);
      const d = Math.abs(m.x - 96);
      if (d < best && lot.width > 34) {
        best = d;
        princessLot = lot;
      }
    }
  }

  for (const lot of LOTS) {
    const r = lot.road;
    const lrng = new RNG(lot.seed);
    const sm = (lot.s0 + lot.s1) / 2;
    const fp = roadPoint(r, sm, lot.side * lot.front);
    // local frame: u along the road, v into the lot
    const ux = fp.tx,
      uz = fp.tz;
    const vx = fp.nx * lot.side,
      vz = fp.nz * lot.side;
    lot.fx = fp.x;
    lot.fz = fp.z;
    lot.ux = ux;
    lot.uz = uz;
    lot.vx = vx;
    lot.vz = vz;
    lot.roadY = fp.y;
    lot.gateU = lrng.range(-0.28, 0.28) * lot.width;

    let kind = 'villa';
    if (lot === princessLot) kind = 'princess';
    else if (lot.width < 30 || lrng.chance(0.24)) kind = 'garden';
    lot.kind = kind;
    if (kind === 'garden') continue;

    const style =
      kind === 'princess'
        ? 'princess'
        : lrng.weighted([
            ['german', 3],
            ['tudor', 2],
            ['spanish', 1.6],
            ['french', 1.4],
            ['nordic', 1.5],
            ['colonial', 1.3],
            ['modern', 1.1],
            ['granite', 1.5],
          ]);
    const w = kind === 'princess' ? 13 : lrng.range(11, 16.5);
    const d = kind === 'princess' ? 10 : lrng.range(8.5, 11.5);
    const setback = lrng.range(7.5, 10.5);
    const cu = clamp(lrng.range(-0.12, 0.12) * lot.width, -(lot.width / 2 - w / 2 - 6), lot.width / 2 - w / 2 - 6);
    const cv = setback + d / 2;
    const x = fp.x + ux * cu + vx * cv;
    const z = fp.z + uz * cu + vz * cv;
    // rotation about Y so that the villa's local +Z (its front) points back to the road (-v)
    const rot = Math.atan2(-vx, -vz);
    const villa = { id: VILLAS.length, lot, style, w, d, x, z, rot, seed: lrng.int(1, 1e9), cu, cv, kind };
    lot.villa = villa;
    lot.gateU = clamp(cu + lrng.range(-2, 2), -lot.width / 2 + 4, lot.width / 2 - 4);
    VILLAS.push(villa);
    if (kind === 'princess') {
      LANDMARKS.princess.x = x;
      LANDMARKS.princess.z = z;
      LANDMARKS.princess.rot = rot;
    }
  }
}

// pad (levelled ground) under each villa
const PADS = [];
for (const v of VILLAS) {
  const hw = v.w / 2 + 3.2,
    hd = v.d / 2 + 3.2;
  const c = Math.cos(v.rot),
    s = Math.sin(v.rot);
  let hmax = -1e9,
    hsum = 0;
  for (const [lx, lz] of [
    [-v.w / 2, -v.d / 2],
    [v.w / 2, -v.d / 2],
    [v.w / 2, v.d / 2],
    [-v.w / 2, v.d / 2],
    [0, 0],
  ]) {
    const h = land1(v.x + lx * c + lz * s, v.z - lx * s + lz * c);
    hmax = Math.max(hmax, h);
    hsum += h;
  }
  v.y = lerp(hsum / 5, hmax, 0.6);
  PADS.push({ x: v.x, z: v.z, c, s, hw, hd, y: v.y });
}
// Huashi Lou sits on its own levelled terrace
{
  const L = LANDMARKS.huashi;
  L.y = 6.2;
  PADS.push({ x: L.x, z: L.z, c: Math.cos(L.rot), s: Math.sin(L.rot), hw: 15, hd: 13, y: L.y, fall: 12 });
}

const padHash = new Map();
const PH = 32;
PADS.forEach((p, i) => {
  const r = Math.hypot(p.hw, p.hd) + (p.fall || 7) + 1;
  for (let ix = Math.floor((p.x - r) / PH); ix <= Math.floor((p.x + r) / PH); ix++)
    for (let iz = Math.floor((p.z - r) / PH); iz <= Math.floor((p.z + r) / PH); iz++) {
      const k = rkey(ix, iz);
      let a = padHash.get(k);
      if (!a) padHash.set(k, (a = []));
      a.push(i);
    }
});

// ---------------------------------------------------------------------------------------------
// Final relief
// ---------------------------------------------------------------------------------------------
function finalHeight(x, z) {
  let h = land1(x, z);
  // carve the road corridor
  const nr = nearestRoad(x, z, 22);
  if (nr && !nr.beyond) {
    const road = nr.road;
    const outer = road.half + road.sw + 1.2;
    const t = smoothstep(outer + 7, outer, nr.dist);
    if (t > 0) h = lerp(h, road.pts[nr.i].y - 0.07, t);
  }
  // level the building pads
  const a = padHash.get(rkey(Math.floor(x / PH), Math.floor(z / PH)));
  if (a) {
    for (let k = 0; k < a.length; k++) {
      const p = PADS[a[k]];
      const dx = x - p.x,
        dz = z - p.z;
      // world → pad-local (inverse rotation about Y)
      const lx = dx * p.c - dz * p.s,
        lz = dx * p.s + dz * p.c;
      const ox = Math.max(Math.abs(lx) - p.hw, 0),
        oz = Math.max(Math.abs(lz) - p.hd, 0);
      const d = Math.hypot(ox, oz);
      const fall = p.fall || 7;
      if (d < fall) h = lerp(h, p.y, smoothstep(fall, 0, d));
    }
  }
  return h;
}

export const GRID = {
  nx: Math.round((BOUNDS.maxX - BOUNDS.minX) / CELL) + 1,
  nz: Math.round((BOUNDS.maxZ - BOUNDS.minZ) / CELL) + 1,
  data: null,
};
GRID.data = new Float32Array(GRID.nx * GRID.nz);
for (let j = 0; j < GRID.nz; j++) {
  const z = BOUNDS.minZ + j * CELL;
  for (let i = 0; i < GRID.nx; i++) {
    GRID.data[j * GRID.nx + i] = finalHeight(BOUNDS.minX + i * CELL, z);
  }
}

// Terrain elevation anywhere (bilinear inside the fine grid, analytic relief outside)
export function heightAt(x, z) {
  const gx = (x - BOUNDS.minX) / CELL,
    gz = (z - BOUNDS.minZ) / CELL;
  if (gx < 0 || gz < 0 || gx >= GRID.nx - 1 || gz >= GRID.nz - 1) return land0(x, z);
  const ix = Math.floor(gx),
    iz = Math.floor(gz);
  const fx = gx - ix,
    fz = gz - iz;
  const d = GRID.data,
    o = iz * GRID.nx + ix;
  const a = d[o],
    b = d[o + 1],
    c = d[o + GRID.nx],
    e = d[o + GRID.nx + 1];
  return a + (b - a) * fx + (c - a) * fz + (a - b - c + e) * fx * fz;
}
export const farHeight = land0;

export function slopeAt(x, z) {
  const e = 1.5;
  const dx = (heightAt(x + e, z) - heightAt(x - e, z)) / (2 * e);
  const dz = (heightAt(x, z + e) - heightAt(x, z - e)) / (2 * e);
  return Math.hypot(dx, dz);
}

// world position → villa-local helper
export function villaToWorld(v, lx, lz, out = {}) {
  const c = Math.cos(v.rot),
    s = Math.sin(v.rot);
  out.x = v.x + lx * c + lz * s;
  out.z = v.z - lx * s + lz * c;
  return out;
}

// Is the point inside any lot? returns the lot or null (used for planting and collisions)
export function lotAt(x, z) {
  for (const lot of LOTS) {
    const dx = x - lot.fx,
      dz = z - lot.fz;
    const u = dx * lot.ux + dz * lot.uz,
      v = dx * lot.vx + dz * lot.vz;
    if (Math.abs(u) <= lot.width / 2 && v >= 0 && v <= lot.depth) return lot;
  }
  return null;
}

export const POIS = [
  { id: 'beach', x: -60, z: 196, r: 150, tc: '第二海水浴場', en: 'No. 2 Bathing Beach · Taiping Bay', sub: '太平灣 · 細沙淺灘' },
  { id: 'cape', x: 388, z: 300, r: 60, tc: '太平角', en: 'Taiping Cape', sub: '礁石 · 黑松 · 濤聲' },
  { id: 'huashi', x: LANDMARKS.huashi.x, z: LANDMARKS.huashi.z, r: 46, tc: '花石樓', en: 'Huashi Lou · the Granite Castle', sub: '黃海路 18 號' },
  { id: 'princess', x: LANDMARKS.princess.x, z: LANDMARKS.princess.z, r: 30, tc: '公主樓', en: 'Princess House', sub: '居庸關路 10 號' },
];

// centre-line of Shanhaiguan Rd as z(x) — the edge between the villa streets and the seaside park
export const shanhaiZ = zShanhai;
