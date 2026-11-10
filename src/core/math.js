// Small deterministic math toolkit: seeded RNG, value noise, interpolation helpers.

export function mulberry32(seed) {
  let a = seed | 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class RNG {
  constructor(seed = 1) {
    this.f = mulberry32(seed);
  }
  next() {
    return this.f();
  }
  range(a, b) {
    return a + (b - a) * this.f();
  }
  int(a, b) {
    return Math.floor(a + (b - a + 1) * this.f());
  }
  pick(arr) {
    return arr[Math.floor(this.f() * arr.length)];
  }
  chance(p) {
    return this.f() < p;
  }
  sign() {
    return this.f() < 0.5 ? -1 : 1;
  }
  // approx. normal distribution, mean 0, sd ~1
  gauss() {
    return (this.f() + this.f() + this.f() + this.f() - 2) * 1.2247;
  }
  // weighted pick: items = [[value, weight], ...]
  weighted(items) {
    let total = 0;
    for (const it of items) total += it[1];
    let r = this.f() * total;
    for (const it of items) {
      r -= it[1];
      if (r <= 0) return it[0];
    }
    return items[items.length - 1][0];
  }
}

export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const saturate = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = saturate((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
export const remap = (x, a, b, c, d) => c + ((d - c) * (x - a)) / (b - a);

export function hash2(ix, iy, seed = 0) {
  let h = (Math.imul(ix, 374761393) + Math.imul(iy, 668265263) + Math.imul(seed, 1442695041)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

// 2D value noise in [0,1]
export function vnoise(x, y, seed = 0) {
  const ix = Math.floor(x),
    iy = Math.floor(y);
  const fx = x - ix,
    fy = y - iy;
  const u = fx * fx * (3 - 2 * fx),
    v = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy, seed),
    b = hash2(ix + 1, iy, seed),
    c = hash2(ix, iy + 1, seed),
    d = hash2(ix + 1, iy + 1, seed);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

export function fbm(x, y, octaves = 4, seed = 0) {
  let s = 0,
    a = 0.5,
    f = 1,
    n = 0;
  for (let i = 0; i < octaves; i++) {
    s += a * vnoise(x * f, y * f, seed + i * 17);
    n += a;
    a *= 0.5;
    f *= 2.03;
  }
  return s / n;
}

// Tileable value noise: lattice wraps with `period` (integer)
export function tnoise(x, y, period, seed = 0) {
  const ix = Math.floor(x),
    iy = Math.floor(y);
  const fx = x - ix,
    fy = y - iy;
  const u = fx * fx * (3 - 2 * fx),
    v = fy * fy * (3 - 2 * fy);
  const w = (i) => ((i % period) + period) % period;
  const a = hash2(w(ix), w(iy), seed),
    b = hash2(w(ix + 1), w(iy), seed),
    c = hash2(w(ix), w(iy + 1), seed),
    d = hash2(w(ix + 1), w(iy + 1), seed);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

// Tileable fbm sampled with u,v in [0,1)
export function tfbm(u, v, basePeriod = 4, octaves = 4, seed = 0) {
  let s = 0,
    a = 0.5,
    n = 0,
    p = basePeriod;
  for (let i = 0; i < octaves; i++) {
    s += a * tnoise(u * p, v * p, p, seed + i * 31);
    n += a;
    a *= 0.5;
    p *= 2;
  }
  return s / n;
}

// Catmull-Rom through an array of [x, y(, ...)] control points; returns function(t in 0..1)
export function catmullRom(points, closed = false) {
  const n = points.length;
  const dim = points[0].length;
  const get = (i) => {
    if (closed) return points[((i % n) + n) % n];
    return points[clamp(i, 0, n - 1)];
  };
  const segs = closed ? n : n - 1;
  return (t) => {
    const ft = saturate(t) * segs;
    let i = Math.floor(ft);
    if (i >= segs) i = segs - 1;
    const f = ft - i;
    const p0 = get(i - 1),
      p1 = get(i),
      p2 = get(i + 1),
      p3 = get(i + 2);
    const out = new Array(dim);
    const f2 = f * f,
      f3 = f2 * f;
    for (let k = 0; k < dim; k++) {
      out[k] =
        0.5 *
        (2 * p1[k] + (-p0[k] + p2[k]) * f + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * f2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * f3);
    }
    return out;
  };
}

// Piecewise smooth 1D interpolation through sorted (x, y) knots (monotone-ish cubic Hermite)
export function curve1D(knots) {
  const xs = knots.map((k) => k[0]);
  const ys = knots.map((k) => k[1]);
  const n = xs.length;
  const m = new Array(n);
  for (let i = 0; i < n; i++) {
    if (i === 0) m[i] = (ys[1] - ys[0]) / (xs[1] - xs[0]);
    else if (i === n - 1) m[i] = (ys[n - 1] - ys[n - 2]) / (xs[n - 1] - xs[n - 2]);
    else m[i] = 0.5 * ((ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]) + (ys[i] - ys[i - 1]) / (xs[i] - xs[i - 1]));
  }
  return (x) => {
    if (x <= xs[0]) return ys[0];
    if (x >= xs[n - 1]) return ys[n - 1];
    let lo = 0,
      hi = n - 1;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (xs[mid] <= x) lo = mid;
      else hi = mid;
    }
    const h = xs[hi] - xs[lo];
    const t = (x - xs[lo]) / h;
    const t2 = t * t,
      t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * ys[lo] + (t3 - 2 * t2 + t) * h * m[lo] + (-2 * t3 + 3 * t2) * ys[hi] + (t3 - t2) * h * m[hi];
  };
}

export function smin(a, b, k) {
  const h = saturate(0.5 + (0.5 * (b - a)) / k);
  return lerp(b, a, h) - k * h * (1 - h);
}

export const TAU = Math.PI * 2;
