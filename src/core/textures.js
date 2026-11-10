// Procedural textures. Everything in the scene is generated in the browser — there are no
// image assets — so each surface below is painted into a canvas (or a data texture) at start-up.

import * as THREE from 'three';
import { RNG, tfbm, hash2, clamp, lerp, smoothstep } from './math.js';

let maxAniso = 8;
export function setMaxAnisotropy(a) {
  maxAniso = a;
}

export function makeCanvas(w, h = w) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

export function canvasTexture(c, { srgb = true, repeat = true, aniso = true, mips = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso ? maxAniso : 1;
  if (!mips) {
    t.generateMipmaps = false;
    t.minFilter = THREE.LinearFilter;
  }
  return t;
}

// Fill a canvas pixel by pixel: fn(u, v, x, y, out[4]) with u,v in [0,1)
function fillPixels(c, fn) {
  const ctx = c.getContext('2d');
  const w = c.width,
    h = c.height;
  const img = ctx.createImageData(w, h);
  const d = img.data;
  const out = [0, 0, 0, 255];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      out[3] = 255;
      fn(x / w, y / h, x, y, out);
      const o = (y * w + x) * 4;
      d[o] = out[0];
      d[o + 1] = out[1];
      d[o + 2] = out[2];
      d[o + 3] = out[3];
    }
  }
  ctx.putImageData(img, 0, 0);
  return ctx;
}

// Modulate an already painted canvas per pixel: fn(u, v, x, y, rgba[4]) mutates rgba
function mapPixels(c, fn) {
  const ctx = c.getContext('2d');
  const w = c.width,
    h = c.height;
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  const px = [0, 0, 0, 0];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4;
      px[0] = d[o];
      px[1] = d[o + 1];
      px[2] = d[o + 2];
      px[3] = d[o + 3];
      fn(x / w, y / h, x, y, px);
      d[o] = px[0];
      d[o + 1] = px[1];
      d[o + 2] = px[2];
      d[o + 3] = px[3];
    }
  }
  ctx.putImageData(img, 0, 0);
  return ctx;
}

// Draw something that must tile: calls draw(ctx) translated to the 9 neighbouring tiles as needed
function drawWrapped(ctx, w, h, x, y, r, draw) {
  for (let ox = -1; ox <= 1; ox++) {
    for (let oy = -1; oy <= 1; oy++) {
      const px = x + ox * w,
        py = y + oy * h;
      if (px < -r || px > w + r || py < -r || py > h + r) continue;
      ctx.save();
      ctx.translate(px, py);
      draw(ctx);
      ctx.restore();
    }
  }
}

function boxBlur(src, w, h, r) {
  const tmp = new Float32Array(w * h);
  const dst = new Float32Array(w * h);
  const n = 2 * r + 1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let s = 0;
      for (let k = -r; k <= r; k++) s += src[y * w + ((x + k + w) % w)];
      tmp[y * w + x] = s / n;
    }
  }
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let s = 0;
      for (let k = -r; k <= r; k++) s += tmp[((y + k + h) % h) * w + x];
      dst[y * w + x] = s / n;
    }
  }
  return dst;
}

// height field (Float32Array, canvas row order) → tangent-space normal map texture
export function normalTextureFromHeight(height, w, h, strength = 2, opts = {}) {
  const c = makeCanvas(w, h);
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(w, h);
  const d = img.data;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const xl = (x - 1 + w) % w,
        xr = (x + 1) % w,
        yu = (y - 1 + h) % h,
        yd = (y + 1) % h;
      const dx = (height[y * w + xr] - height[y * w + xl]) * strength;
      const dy = (height[yd * w + x] - height[yu * w + x]) * strength;
      // canvas rows run downwards while texture v runs upwards → +dy maps to +green
      let nx = -dx,
        ny = dy,
        nz = 1;
      const l = Math.hypot(nx, ny, nz);
      nx /= l;
      ny /= l;
      nz /= l;
      const o = (y * w + x) * 4;
      d[o] = (nx * 0.5 + 0.5) * 255;
      d[o + 1] = (ny * 0.5 + 0.5) * 255;
      d[o + 2] = (nz * 0.5 + 0.5) * 255;
      d[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvasTexture(c, { srgb: false, ...opts });
}

function heightFromCanvas(c) {
  const w = c.width,
    h = c.height;
  const d = c.getContext('2d').getImageData(0, 0, w, h).data;
  const out = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) out[i] = d[i * 4] / 255;
  return out;
}

const hex = (h) => [(h >> 16) & 255, (h >> 8) & 255, h & 255];
const rgbStr = (r, g, b, a = 1) => `rgba(${r | 0},${g | 0},${b | 0},${a})`;

const cache = new Map();
function memo(key, fn) {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key);
}

// ---------------------------------------------------------------------------------------------
// Utility noise textures
// ---------------------------------------------------------------------------------------------
export function noiseTexture() {
  return memo('noise', () => {
    const S = 256;
    const data = new Uint8Array(S * S * 4);
    for (let y = 0; y < S; y++) {
      for (let x = 0; x < S; x++) {
        const u = x / S,
          v = y / S;
        const o = (y * S + x) * 4;
        data[o] = tfbm(u, v, 4, 5, 11) * 255;
        data[o + 1] = tfbm(u, v, 8, 4, 23) * 255;
        data[o + 2] = tfbm(u, v, 32, 2, 37) * 255;
        data[o + 3] = tfbm(u, v, 16, 3, 51) * 255;
      }
    }
    const t = new THREE.DataTexture(data, S, S, THREE.RGBAFormat);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.generateMipmaps = true;
    t.needsUpdate = true;
    return t;
  });
}

// tileable ripple normal map for the sea (rg = slope)
export function waterNormalTexture() {
  return memo('waterNormal', () => {
    const S = 256;
    const hgt = new Float32Array(S * S);
    for (let y = 0; y < S; y++) {
      for (let x = 0; x < S; x++) {
        const u = x / S,
          v = y / S;
        // sharpened crests
        const a = tfbm(u, v, 6, 4, 71);
        const b = tfbm(u, v, 12, 3, 97);
        hgt[y * S + x] = Math.pow(1 - Math.abs(a * 2 - 1), 1.6) * 0.7 + b * 0.3;
      }
    }
    const data = new Uint8Array(S * S * 4);
    for (let y = 0; y < S; y++) {
      for (let x = 0; x < S; x++) {
        const dx = (hgt[y * S + ((x + 1) % S)] - hgt[y * S + ((x - 1 + S) % S)]) * 6;
        const dy = (hgt[((y + 1) % S) * S + x] - hgt[((y - 1 + S) % S) * S + x]) * 6;
        const o = (y * S + x) * 4;
        data[o] = clamp(128 - dx * 127, 0, 255);
        data[o + 1] = clamp(128 - dy * 127, 0, 255);
        data[o + 2] = hgt[y * S + x] * 255;
        data[o + 3] = 255;
      }
    }
    const t = new THREE.DataTexture(data, S, S, THREE.RGBAFormat);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.generateMipmaps = true;
    t.anisotropy = maxAniso;
    t.needsUpdate = true;
    return t;
  });
}

// ---------------------------------------------------------------------------------------------
// Ground
// ---------------------------------------------------------------------------------------------
export function grassTexture() {
  return memo('grass', () => {
    const S = 512;
    const c = makeCanvas(S);
    const ctx = fillPixels(c, (u, v, x, y, o) => {
      const n = tfbm(u, v, 6, 4, 3);
      const m = tfbm(u, v, 3, 3, 9);
      const g = hash2(x, y, 5) - 0.5;
      const dry = smoothstep(0.5, 0.75, m);
      o[0] = lerp(58, 96, n) + dry * 34 + g * 14;
      o[1] = lerp(82, 122, n) + dry * 12 + g * 16;
      o[2] = lerp(34, 50, n) - dry * 4 + g * 8;
    });
    const rng = new RNG(77);
    ctx.lineCap = 'round';
    for (let i = 0; i < 9000; i++) {
      const x = rng.range(0, S),
        y = rng.range(0, S);
      const len = rng.range(3, 8),
        a = rng.range(-0.6, 0.6) - Math.PI / 2;
      const yel = rng.chance(0.2);
      const l = rng.range(0.7, 1.25);
      ctx.strokeStyle = yel ? rgbStr(150 * l, 140 * l, 62 * l, 0.5) : rgbStr(70 * l, 112 * l, 40 * l, 0.55);
      ctx.lineWidth = rng.range(0.7, 1.4);
      drawWrapped(ctx, S, S, x, y, 10, (k) => {
        k.beginPath();
        k.moveTo(0, 0);
        k.lineTo(Math.cos(a) * len, Math.sin(a) * len);
        k.stroke();
      });
    }
    return canvasTexture(c);
  });
}

export function sandTexture() {
  return memo('sand', () => {
    const S = 256;
    const c = makeCanvas(S);
    fillPixels(c, (u, v, x, y, o) => {
      const n = tfbm(u, v, 5, 4, 21);
      const g = hash2(x, y, 3) - 0.5;
      const sp = hash2(x, y, 9) > 0.985 ? -38 : 0;
      const k = 0.9 + n * 0.2;
      o[0] = 214 * k + g * 16 + sp;
      o[1] = 192 * k + g * 15 + sp;
      o[2] = 148 * k + g * 14 + sp;
    });
    return canvasTexture(c);
  });
}

export function rockTextures() {
  return memo('rock', () => {
    const S = 512;
    const c = makeCanvas(S);
    const hgt = new Float32Array(S * S);
    fillPixels(c, (u, v, x, y, o) => {
      const n = tfbm(u, v, 5, 5, 41);
      const r1 = 1 - Math.abs(tfbm(u, v, 7, 4, 57) * 2 - 1);
      const crack = smoothstep(0.9, 0.985, r1);
      const strata = tfbm(u * 0.4, v * 2.2, 8, 3, 63);
      const g = hash2(x, y, 7) - 0.5;
      let k = 0.7 + n * 0.55 + (strata - 0.5) * 0.25;
      k *= 1 - crack * 0.55;
      o[0] = 132 * k + g * 14;
      o[1] = 104 * k + g * 12;
      o[2] = 88 * k + g * 11;
      hgt[y * S + x] = n * 0.8 + strata * 0.3 - crack * 0.5;
    });
    return { map: canvasTexture(c), normalMap: normalTextureFromHeight(hgt, S, S, 5) };
  });
}

export function soilTexture() {
  return memo('soil', () => {
    const S = 256;
    const c = makeCanvas(S);
    const ctx = fillPixels(c, (u, v, x, y, o) => {
      const n = tfbm(u, v, 6, 4, 81);
      const g = hash2(x, y, 13) - 0.5;
      const k = 0.75 + n * 0.5;
      o[0] = 92 * k + g * 18;
      o[1] = 74 * k + g * 15;
      o[2] = 52 * k + g * 12;
    });
    const rng = new RNG(5);
    for (let i = 0; i < 1300; i++) {
      const x = rng.range(0, S),
        y = rng.range(0, S),
        a = rng.range(0, Math.PI),
        len = rng.range(3, 9);
      const l = rng.range(0.6, 1.3);
      ctx.strokeStyle = rng.chance(0.5) ? rgbStr(126 * l, 96 * l, 58 * l, 0.6) : rgbStr(60 * l, 48 * l, 34 * l, 0.6);
      ctx.lineWidth = rng.range(0.6, 1.3);
      drawWrapped(ctx, S, S, x, y, 10, (k) => {
        k.beginPath();
        k.moveTo(0, 0);
        k.lineTo(Math.cos(a) * len, Math.sin(a) * len);
        k.stroke();
      });
    }
    return canvasTexture(c);
  });
}

// Fallen leaves: neutral-coloured leaf shapes with alpha — tinted per street in the shader
export function litterTexture() {
  return memo('litter', () => {
    const S = 512;
    const c = makeCanvas(S);
    const ctx = c.getContext('2d');
    const rng = new RNG(4242);
    for (let i = 0; i < 2100; i++) {
      const x = rng.range(0, S),
        y = rng.range(0, S);
      const rot = rng.range(0, Math.PI * 2);
      const sz = rng.range(5.5, 10.5);
      const L = rng.range(150, 255);
      const g = rng.range(0.78, 1.0),
        b = rng.range(0.55, 1.0);
      const fan = rng.chance(0.5);
      drawWrapped(ctx, S, S, x, y, 14, (k) => {
        k.rotate(rot);
        k.fillStyle = rgbStr(L, L * g, L * b, 1);
        k.beginPath();
        if (fan) {
          // ginkgo-like fan
          k.moveTo(0, sz * 0.7);
          k.quadraticCurveTo(-sz * 1.0, -sz * 0.1, -sz * 0.55, -sz * 0.75);
          k.quadraticCurveTo(0, -sz * 1.0, sz * 0.55, -sz * 0.75);
          k.quadraticCurveTo(sz * 1.0, -sz * 0.1, 0, sz * 0.7);
        } else {
          k.ellipse(0, 0, sz * 0.5, sz * 0.95, 0, 0, Math.PI * 2);
        }
        k.fill();
        k.strokeStyle = rgbStr(L * 0.6, L * g * 0.55, L * b * 0.5, 0.55);
        k.lineWidth = 0.8;
        k.beginPath();
        k.moveTo(0, sz * 0.8);
        k.lineTo(0, -sz * 0.7);
        k.stroke();
      });
    }
    return canvasTexture(c);
  });
}

export function asphaltTexture() {
  return memo('asphalt', () => {
    const S = 512;
    const c = makeCanvas(S);
    const ctx = fillPixels(c, (u, v, x, y, o) => {
      const n = tfbm(u, v, 4, 4, 101);
      const g = hash2(x, y, 17);
      const speck = g > 0.94 ? 26 : g < 0.07 ? -16 : 0;
      const k = 0.86 + n * 0.3;
      o[0] = 66 * k + (g - 0.5) * 16 + speck;
      o[1] = 66 * k + (g - 0.5) * 16 + speck;
      o[2] = 70 * k + (g - 0.5) * 16 + speck;
    });
    const rng = new RNG(31);
    ctx.lineCap = 'round';
    for (let i = 0; i < 9; i++) {
      let x = rng.range(0, S),
        y = rng.range(0, S),
        a = rng.range(0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(28,28,30,0.55)';
      ctx.lineWidth = rng.range(0.8, 1.6);
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let k = 0; k < 18; k++) {
        a += rng.range(-0.5, 0.5);
        x += Math.cos(a) * 9;
        y += Math.sin(a) * 9;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    return canvasTexture(c);
  });
}

// granite setts for the pavements
export function paverTextures() {
  return memo('pavers', () => {
    const S = 512;
    const c = makeCanvas(S);
    const hc = makeCanvas(S);
    const ctx = c.getContext('2d'),
      hx = hc.getContext('2d');
    ctx.fillStyle = '#5f594f';
    ctx.fillRect(0, 0, S, S);
    hx.fillStyle = '#000';
    hx.fillRect(0, 0, S, S);
    const rng = new RNG(808);
    const rows = 16,
      rh = S / rows,
      cols = 8,
      cw = S / cols;
    for (let r = 0; r < rows; r++) {
      const off = (r % 2) * cw * 0.5;
      for (let i = -1; i <= cols; i++) {
        const x = i * cw + off,
          y = r * rh;
        const l = rng.range(0.82, 1.1);
        const tint = rng.next();
        let col = [158 * l, 150 * l, 138 * l];
        if (tint > 0.86) col = [168 * l, 142 * l, 126 * l];
        else if (tint < 0.12) col = [132 * l, 132 * l, 134 * l];
        const j = 1.6;
        for (const ox of [0, -S, S]) {
          ctx.fillStyle = rgbStr(col[0], col[1], col[2]);
          ctx.fillRect(x + ox + j, y + j, cw - 2 * j, rh - 2 * j);
          hx.fillStyle = rgbStr(255 * rng.range(0.8, 1), 0, 0);
          hx.fillRect(x + ox + j + 1, y + j + 1, cw - 2 * j - 2, rh - 2 * j - 2);
        }
      }
    }
    mapPixels(c, (u, v, x, y, p) => {
      const g = (hash2(x, y, 19) - 0.5) * 22 + (tfbm(u, v, 8, 3, 111) - 0.5) * 26;
      p[0] = clamp(p[0] + g, 0, 255);
      p[1] = clamp(p[1] + g, 0, 255);
      p[2] = clamp(p[2] + g, 0, 255);
    });
    const hgt = boxBlur(heightFromCanvas(hc), S, S, 1);
    return { map: canvasTexture(c), normalMap: normalTextureFromHeight(hgt, S, S, 2.2) };
  });
}

// ---------------------------------------------------------------------------------------------
// Vegetation
// ---------------------------------------------------------------------------------------------
export function barkTextures(kind = 'furrow') {
  return memo('bark-' + kind, () => {
    const W = 256,
      H = 512;
    const c = makeCanvas(W, H);
    const hgt = new Float32Array(W * H);
    if (kind === 'plane') {
      // London plane: exfoliating patches of cream, olive and grey
      fillPixels(c, (u, v, x, y, o) => {
        const n1 = tfbm(u, v * 2, 3, 3, 201);
        const n2 = tfbm(u + 0.37, v * 2, 5, 3, 211);
        const g = (hash2(x, y, 23) - 0.5) * 14;
        let col;
        if (n1 > 0.6) col = [178, 170, 138];
        else if (n2 > 0.56) col = [124, 128, 96];
        else if (n2 < 0.42) col = [98, 90, 76];
        else col = [146, 138, 110];
        const streak = (tfbm(u * 3, v * 0.5, 16, 2, 221) - 0.5) * 22;
        o[0] = col[0] + g + streak;
        o[1] = col[1] + g + streak;
        o[2] = col[2] + g + streak * 0.7;
        hgt[y * W + x] = (n1 > 0.58 ? 0.2 : n2 > 0.56 ? 0.5 : 0.8) + g * 0.004;
      });
      return { map: canvasTexture(c), normalMap: normalTextureFromHeight(boxBlur(hgt, W, H, 1), W, H, 1.6) };
    }
    const pal = {
      furrow: [[104, 92, 78], [58, 50, 42]],
      ginkgo: [[128, 118, 102], [70, 62, 52]],
      pine: [[128, 100, 82], [62, 46, 38]],
      smooth: [[182, 160, 134], [140, 114, 92]],
      cedar: [[92, 82, 72], [48, 42, 38]],
    }[kind] || [[104, 92, 78], [58, 50, 42]];
    const smooth = kind === 'smooth';
    fillPixels(c, (u, v, x, y, o) => {
      // vertically stretched ridges
      const a = tfbm(u, v * 0.22, 10, 4, 231);
      const b = tfbm(u, v * 0.6, 22, 3, 241);
      let ridge = 1 - Math.abs(a * 2 - 1);
      ridge = smooth ? 0.6 + 0.4 * tfbm(u, v, 4, 3, 251) : Math.pow(ridge, kind === 'pine' ? 2.6 : 1.7) * 0.75 + b * 0.25;
      const plate = kind === 'pine' ? smoothstep(0.3, 0.5, tfbm(u, v * 0.5, 6, 2, 261)) : 1;
      const k = ridge * (0.7 + 0.3 * plate);
      const g = (hash2(x, y, 29) - 0.5) * 16;
      o[0] = lerp(pal[1][0], pal[0][0], k) + g;
      o[1] = lerp(pal[1][1], pal[0][1], k) + g;
      o[2] = lerp(pal[1][2], pal[0][2], k) + g;
      if (kind === 'pine') o[0] += (1 - k) * 22; // reddish fissures
      hgt[y * W + x] = k;
    });
    return { map: canvasTexture(c), normalMap: normalTextureFromHeight(hgt, W, H, smooth ? 1.2 : 4) };
  });
}

function leafPath(ctx, kind, s) {
  ctx.beginPath();
  if (kind === 'ginkgo') {
    ctx.moveTo(0, s * 0.5);
    ctx.quadraticCurveTo(-s * 0.2, s * 0.1, -s * 0.66, -s * 0.2);
    ctx.quadraticCurveTo(-s * 0.5, -s * 0.62, -s * 0.06, -s * 0.56);
    ctx.lineTo(0, -s * 0.36);
    ctx.lineTo(s * 0.06, -s * 0.56);
    ctx.quadraticCurveTo(s * 0.5, -s * 0.62, s * 0.66, -s * 0.2);
    ctx.quadraticCurveTo(s * 0.2, s * 0.1, 0, s * 0.5);
  } else if (kind === 'maple' || kind === 'plane' || kind === 'ivy') {
    const lobes = kind === 'ivy' ? 3 : 5;
    const sharp = kind === 'maple' ? 2.2 : kind === 'plane' ? 1.1 : 0.9;
    const base = kind === 'maple' ? 0.34 : 0.5;
    const span = kind === 'ivy' ? 2.2 : 3.9;
    for (let i = 0; i <= 60; i++) {
      const t = i / 60;
      const th = -Math.PI / 2 + (t - 0.5) * span;
      const lob = Math.pow(Math.abs(Math.cos(((t - 0.5) * span * lobes) / (span / Math.PI) / 1)), sharp);
      const r = s * (base + (1 - base) * lob) * 0.62;
      const x = Math.cos(th) * r,
        y = Math.sin(th) * r + s * 0.12;
      if (i === 0) ctx.moveTo(0, s * 0.42);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(0, s * 0.42);
  } else if (kind === 'blossom') {
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      ctx.moveTo(Math.cos(a) * s * 0.26 + s * 0.24, Math.sin(a) * s * 0.26);
      ctx.arc(Math.cos(a) * s * 0.26, Math.sin(a) * s * 0.26, s * 0.24, 0, Math.PI * 2);
    }
  } else {
    // simple pointed oval
    ctx.moveTo(0, s * 0.62);
    ctx.quadraticCurveTo(-s * 0.36, 0, 0, -s * 0.62);
    ctx.quadraticCurveTo(s * 0.36, 0, 0, s * 0.62);
  }
  ctx.closePath();
}

// 2×2 atlas of leaf clusters. Channels: R = luminance, G = per-leaf hue offset, A = coverage.
export function leafAtlas(kind) {
  return memo('leaf-' + kind, () => {
    const S = 512,
      C = S / 2;
    const c = makeCanvas(S);
    const ctx = c.getContext('2d');
    const rng = new RNG(1000 + kind.length * 77 + kind.charCodeAt(0) * 13 + kind.charCodeAt(1));
    ctx.lineCap = 'round';
    for (let cell = 0; cell < 4; cell++) {
      const ox = (cell % 2) * C + C / 2,
        oy = Math.floor(cell / 2) * C + C / 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(ox - C / 2 + 3, oy - C / 2 + 3, C - 6, C - 6);
      ctx.clip();
      ctx.translate(ox, oy);
      if (kind === 'cedar') {
        // a drooping frond: main stem with side twigs carrying whorls of short needles
        const twig = (x0, y0, ang, len, w) => {
          const n = Math.max(3, Math.floor(len / 7));
          for (let i = 0; i <= n; i++) {
            const t = i / n;
            const x = x0 + Math.cos(ang) * len * t,
              y = y0 + Math.sin(ang) * len * t;
            for (let k = 0; k < 15; k++) {
              const a = rng.range(0, Math.PI * 2);
              const l = rng.range(7, 14) * w;
              const L = rng.range(120, 255);
              ctx.strokeStyle = rgbStr(L, rng.range(0, 255), 0, 1);
              ctx.lineWidth = rng.range(1.8, 3.2);
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
              ctx.stroke();
            }
          }
        };
        const y0 = rng.range(-10, 10);
        twig(-C * 0.46, y0, rng.range(-0.08, 0.08), C * 0.9, 1.1);
        for (let i = 0; i < 22; i++) {
          const t = rng.range(0.02, 0.98);
          const sgn = i % 2 ? 1 : -1;
          twig(-C * 0.46 + C * 0.9 * t, y0, sgn * rng.range(0.6, 1.3), rng.range(26, 62) * (1 - t * 0.4), 1);
        }
      } else if (kind === 'pine') {
        for (let i = 0; i < 7; i++) {
          const cx = rng.range(-C * 0.28, C * 0.28),
            cy = rng.range(-C * 0.28, C * 0.28);
          for (let k = 0; k < 70; k++) {
            const a = rng.range(0, Math.PI * 2);
            const l = rng.range(18, 40);
            const L = rng.range(110, 255);
            ctx.strokeStyle = rgbStr(L, rng.range(0, 255), 0, 1);
            ctx.lineWidth = rng.range(1.0, 1.9);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + Math.cos(a) * l, cy + Math.sin(a) * l);
            ctx.stroke();
          }
        }
      } else if (kind === 'juniper') {
        for (let i = 0; i < 520; i++) {
          const a = rng.range(0, Math.PI * 2),
            r = Math.sqrt(rng.next()) * C * 0.42;
          const x = Math.cos(a) * r * 0.82,
            y = Math.sin(a) * r;
          const L = rng.range(110, 255);
          ctx.fillStyle = rgbStr(L, rng.range(0, 255), 0, 1);
          ctx.beginPath();
          ctx.ellipse(x, y, rng.range(3, 6), rng.range(5, 11), rng.range(-0.5, 0.5), 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        const spec = {
          ginkgo: [26, 31],
          maple: [19, 40],
          plane: [12, 56],
          ivy: [15, 42],
          blossom: [22, 26],
          oval: [30, 30],
          small: [48, 20],
          dense: [150, 17],
        }[kind] || [28, 30];
        const [count, size] = spec;
        for (let i = 0; i < count; i++) {
          const a = rng.range(0, Math.PI * 2),
            r = Math.pow(rng.next(), kind === 'dense' ? 0.5 : 0.7) * C * (kind === 'dense' ? 0.42 : 0.36);
          const s = size * rng.range(0.8, 1.2);
          const L = rng.range(165, 255);
          const G = rng.range(0, 255);
          ctx.save();
          ctx.translate(Math.cos(a) * r, Math.sin(a) * r);
          ctx.rotate(rng.range(0, Math.PI * 2));
          // foreshortening: leaves are seen at all angles
          ctx.scale(1, rng.range(0.55, 1));
          leafPath(ctx, kind, s);
          ctx.fillStyle = rgbStr(L, G, 0, 1);
          ctx.fill();
          ctx.strokeStyle = rgbStr(L * 0.72, G, 0, 0.9);
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(0, s * 0.5);
          ctx.lineTo(0, -s * 0.36);
          if (kind !== 'ginkgo' && kind !== 'blossom') {
            ctx.moveTo(0, s * 0.1);
            ctx.lineTo(-s * 0.26, -s * 0.2);
            ctx.moveTo(0, s * 0.1);
            ctx.lineTo(s * 0.26, -s * 0.2);
          }
          ctx.stroke();
          ctx.restore();
        }
      }
      ctx.restore();
    }
    // → raw RGBA (avoids premultiplied-alpha fringes), flipped to texture row order
    const src = ctx.getImageData(0, 0, S, S).data;
    const data = new Uint8Array(S * S * 4);
    for (let y = 0; y < S; y++) {
      for (let x = 0; x < S; x++) {
        const si = (y * S + x) * 4,
          di = ((S - 1 - y) * S + x) * 4;
        const a = src[si + 3];
        if (a < 8) {
          data[di] = 205;
          data[di + 1] = 128;
          data[di + 2] = 0;
          data[di + 3] = 0;
        } else {
          data[di] = src[si];
          data[di + 1] = src[si + 1];
          data[di + 2] = 0;
          data[di + 3] = a;
        }
      }
    }
    const t = new THREE.DataTexture(data, S, S, THREE.RGBAFormat);
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.generateMipmaps = true;
    t.anisotropy = 4;
    t.needsUpdate = true;
    return t;
  });
}

// ---------------------------------------------------------------------------------------------
// Architecture
// ---------------------------------------------------------------------------------------------
export function stuccoTextures() {
  return memo('stucco', () => {
    const S = 256;
    const c = makeCanvas(S);
    const hgt = new Float32Array(S * S);
    fillPixels(c, (u, v, x, y, o) => {
      const n = tfbm(u, v, 4, 4, 301);
      const f = tfbm(u, v, 48, 2, 311);
      const streak = tfbm(u * 6, v * 0.35, 8, 2, 321);
      const k = 232 + (n - 0.5) * 22 + (f - 0.5) * 14 - Math.max(0, streak - 0.6) * 46;
      o[0] = k;
      o[1] = k;
      o[2] = k - 2;
      hgt[y * S + x] = f * 0.6 + n * 0.4;
    });
    return { map: canvasTexture(c), normalMap: normalTextureFromHeight(hgt, S, S, 1.6) };
  });
}

// Laoshan granite. kind: 'rubble' (random masonry for garden walls and plinths),
// 'ashlar' (coursed, rock-faced blocks — Huashi Lou)
export function graniteTextures(kind = 'rubble') {
  return memo('granite-' + kind, () => {
    const S = 512;
    const c = makeCanvas(S);
    const hgt = new Float32Array(S * S);
    const rng = new RNG(kind === 'rubble' ? 909 : 919);
    const tones = [
      [186, 170, 148],
      [172, 158, 140],
      [196, 176, 150],
      [160, 150, 138],
      [190, 164, 142],
      [150, 142, 132],
      [204, 188, 160],
    ];
    if (kind === 'rubble') {
      // jittered-grid Voronoi cells = stones; the gap between first and second nearest = mortar
      const GX = 9,
        GY = 8;
      const seeds = [];
      for (let j = 0; j < GY; j++)
        for (let i = 0; i < GX; i++) {
          const t = rng.pick(tones);
          const l = rng.range(0.86, 1.08);
          seeds.push({ x: (i + rng.range(0.15, 0.85)) / GX, y: (j + rng.range(0.15, 0.85)) / GY, c: [t[0] * l, t[1] * l, t[2] * l], h: rng.range(0.7, 1) });
        }
      fillPixels(c, (u, v, x, y, o) => {
        const ci = Math.floor(u * GX),
          cj = Math.floor(v * GY);
        let d1 = 9,
          d2 = 9,
          best = null;
        for (let dj = -1; dj <= 1; dj++)
          for (let di = -1; di <= 1; di++) {
            const ii = (ci + di + GX) % GX,
              jj = (cj + dj + GY) % GY;
            const s = seeds[jj * GX + ii];
            let dx = Math.abs(u - s.x),
              dy = Math.abs(v - s.y);
            if (dx > 0.5) dx = 1 - dx;
            if (dy > 0.5) dy = 1 - dy;
            dx *= GX / GY;
            const d = Math.hypot(dx, dy * 1.25);
            if (d < d1) {
              d2 = d1;
              d1 = d;
              best = s;
            } else if (d < d2) d2 = d;
          }
        const edge = d2 - d1;
        const stone = smoothstep(0.004, 0.02, edge);
        const g = hash2(x, y, 41);
        const grain = (g - 0.5) * 26 + (g > 0.95 ? -30 : g < 0.04 ? 24 : 0);
        const n = (tfbm(u, v, 16, 3, 331) - 0.5) * 22;
        const m = [138, 128, 114];
        o[0] = lerp(m[0], best.c[0] + grain + n, stone);
        o[1] = lerp(m[1], best.c[1] + grain + n, stone);
        o[2] = lerp(m[2], best.c[2] + grain + n, stone);
        hgt[y * S + x] = stone * (best.h * 0.6 + smoothstep(0.0, 0.09, edge) * 0.4) + n * 0.006;
      });
    } else {
      const rows = 8,
        rh = S / rows;
      const blocks = [];
      for (let r = 0; r < rows; r++) {
        let x = rng.range(-60, 0);
        while (x < S) {
          const w = rng.range(70, 150);
          const t = rng.pick(tones);
          const l = rng.range(0.9, 1.08);
          blocks.push({ r, x0: x, x1: x + w, c: [t[0] * l, t[1] * l, t[2] * l], h: rng.range(0.75, 1) });
          x += w;
        }
      }
      const byRow = [];
      for (let r = 0; r < rows; r++) byRow.push(blocks.filter((b) => b.r === r));
      fillPixels(c, (u, v, x, y, o) => {
        const r = Math.min(rows - 1, Math.floor(y / rh));
        const yy = y - r * rh;
        let blk = byRow[r][0];
        for (const b of byRow[r]) if (x >= b.x0 && x < b.x1) blk = b;
        const ex = Math.min(x - blk.x0, blk.x1 - x, yy, rh - yy);
        const stone = smoothstep(1.2, 3.2, ex);
        const g = hash2(x, y, 43);
        const grain = (g - 0.5) * 26 + (g > 0.95 ? -30 : g < 0.04 ? 24 : 0);
        const n = (tfbm(u, v, 12, 3, 341) - 0.5) * 26;
        o[0] = lerp(118, blk.c[0] + grain + n, stone);
        o[1] = lerp(110, blk.c[1] + grain + n, stone);
        o[2] = lerp(100, blk.c[2] + grain + n, stone);
        hgt[y * S + x] = stone * (blk.h * 0.55 + smoothstep(0, 16, ex) * 0.3) + n * 0.01;
      });
    }
    return { map: canvasTexture(c), normalMap: normalTextureFromHeight(boxBlur(hgt, S, S, 1), S, S, 3) };
  });
}

// roof tiles: 'red' = Qingdao's orange-red clay tiles, 'slate' = grey mansard slates
export function roofTextures(kind = 'red') {
  return memo('roof-' + kind, () => {
    const S = 512;
    const c = makeCanvas(S);
    const hgt = new Float32Array(S * S);
    const rows = 16,
      rh = S / rows,
      cols = 16,
      cw = S / cols;
    const rng = new RNG(kind === 'red' ? 1203 : 1217);
    const tile = [];
    for (let r = 0; r < rows; r++)
      for (let i = 0; i < cols; i++) {
        let col;
        const t = rng.next();
        if (kind === 'red') {
          const l = rng.range(0.82, 1.12);
          col = [184 * l, 86 * l, 52 * l];
          if (t > 0.9) col = [150 * l, 66 * l, 44 * l];
          else if (t < 0.1) col = [204 * l, 108 * l, 62 * l];
          else if (t > 0.84) col = [120 * l, 78 * l, 60 * l];
        } else {
          const l = rng.range(0.8, 1.15);
          col = [98 * l, 102 * l, 108 * l];
          if (t > 0.88) col = [84 * l, 92 * l, 88 * l];
        }
        tile.push({ col, tilt: rng.range(-0.08, 0.08) });
      }
    fillPixels(c, (u, v, x, y, o) => {
      const r = Math.floor(y / rh);
      const yy = (y - r * rh) / rh; // 0 at the top of a course (in shadow of the course above)
      const off = (r % 2) * 0.5;
      const fx = x / cw + off;
      const i = ((Math.floor(fx) % cols) + cols) % cols;
      const xx = fx - Math.floor(fx);
      const t = tile[r * cols + i];
      const gap = smoothstep(0.0, 0.06, Math.min(xx, 1 - xx));
      // rounded lower corners of beaver-tail tiles
      const corner = kind === 'red' ? smoothstep(0.0, 0.16, Math.min(xx, 1 - xx) + (1 - yy) * 0.8) : 1;
      const shade = (0.6 + 0.4 * smoothstep(0.0, 0.3, yy)) * (0.75 + 0.25 * gap) * (0.82 + 0.18 * corner);
      const grime = 1 - Math.max(0, tfbm(u * 3, v * 0.4, 6, 3, 351) - 0.55) * 0.9;
      const moss = kind === 'red' ? smoothstep(0.66, 0.8, tfbm(u, v, 5, 3, 361)) * 0.35 : 0;
      const g = (hash2(x, y, 47) - 0.5) * 18;
      const k = shade * grime;
      o[0] = lerp(t.col[0] * k + g, 96, moss);
      o[1] = lerp(t.col[1] * k + g, 92, moss);
      o[2] = lerp(t.col[2] * k + g, 66, moss);
      hgt[y * S + x] = yy * 0.9 + t.tilt * (xx - 0.5) + gap * 0.1;
    });
    return { map: canvasTexture(c), normalMap: normalTextureFromHeight(hgt, S, S, 3.2) };
  });
}

// Window & door atlas: 4 × 4 cells; rows 0–1 are the eight types, rows 2–3 the same types lit from inside.
// Returns colour, emissive and roughness (G) textures sharing one layout.
export const WINDOW_TYPES = {
  tall: { i: 0, w: 1.0, h: 1.9 },
  std: { i: 1, w: 1.1, h: 1.5 },
  small: { i: 2, w: 0.8, h: 0.8 },
  arch: { i: 3, w: 1.1, h: 1.9 },
  door: { i: 4, w: 1.25, h: 2.3 },
  french: { i: 5, w: 1.3, h: 2.3 },
  round: { i: 6, w: 0.85, h: 0.85 },
  wide: { i: 7, w: 2.0, h: 1.5 },
};
export function windowUV(type, lit) {
  const i = WINDOW_TYPES[type].i;
  const col = i % 4,
    row = Math.floor(i / 4) + (lit ? 2 : 0);
  const e = 0.004;
  return [col / 4 + e, 1 - (row + 1) / 4 + e, (col + 1) / 4 - e, 1 - row / 4 - e];
}
export function windowAtlas() {
  return memo('windows', () => {
    const S = 1024,
      C = S / 4;
    const cm = makeCanvas(S),
      ce = makeCanvas(S),
      cr = makeCanvas(S);
    const m = cm.getContext('2d'),
      e = ce.getContext('2d'),
      r = cr.getContext('2d');
    e.fillStyle = '#000';
    e.fillRect(0, 0, S, S);
    r.fillStyle = 'rgb(0,170,0)';
    r.fillRect(0, 0, S, S);
    const rng = new RNG(31337);
    const FRAME = '#efe9dc';
    const names = Object.keys(WINDOW_TYPES);
    for (let pass = 0; pass < 2; pass++) {
      for (const name of names) {
        const t = WINDOW_TYPES[name];
        const col = t.i % 4,
          row = Math.floor(t.i / 4) + pass * 2;
        const lit = pass === 1;
        for (const ctx of [m, e, r]) {
          ctx.save();
          ctx.translate(col * C, row * C);
          ctx.beginPath();
          ctx.rect(0, 0, C, C);
          ctx.clip();
          ctx.scale(C / t.w, C / t.h); // draw in metres
        }
        const W = t.w,
          H = t.h;
        const glass = (x, y, w, h) => {
          const g = m.createLinearGradient(0, y, 0, y + h);
          g.addColorStop(0, '#5a6c7c');
          g.addColorStop(0.5, '#2c3742');
          g.addColorStop(1, '#1c242c');
          m.fillStyle = g;
          m.fillRect(x, y, w, h);
          // net curtains
          m.fillStyle = 'rgba(214,210,196,0.34)';
          const cwid = w * rng.range(0.16, 0.3);
          m.fillRect(x, y, cwid, h);
          m.fillRect(x + w - cwid, y, cwid, h);
          r.fillStyle = 'rgb(0,18,0)';
          r.fillRect(x, y, w, h);
          if (lit) {
            const ge = e.createLinearGradient(0, y, 0, y + h);
            const warm = rng.chance(0.75);
            ge.addColorStop(0, warm ? '#c08a48' : '#9aa6a8');
            ge.addColorStop(0.6, warm ? '#ffd596' : '#dfe8e6');
            ge.addColorStop(1, warm ? '#e0a860' : '#b6c2c2');
            e.fillStyle = ge;
            e.fillRect(x, y, w, h);
            e.fillStyle = 'rgba(60,30,10,0.42)';
            e.fillRect(x, y, cwid, h);
            e.fillRect(x + w - cwid, y, cwid, h);
          }
        };
        const bars = (x, y, w, h, nx, ny, t2 = 0.035) => {
          for (const ctx of [m, e, r]) {
            ctx.fillStyle = ctx === m ? FRAME : ctx === e ? '#000' : 'rgb(0,150,0)';
            for (let i = 1; i < nx; i++) ctx.fillRect(x + (w * i) / nx - t2 / 2, y, t2, h);
            for (let j = 1; j < ny; j++) ctx.fillRect(x, y + (h * j) / ny - t2 / 2, w, t2);
          }
        };
        const frameAll = (f) => {
          m.fillStyle = FRAME;
          m.fillRect(0, 0, W, H);
          return [f, f, W - 2 * f, H - 2 * f];
        };
        if (name === 'tall' || name === 'std' || name === 'small' || name === 'wide') {
          const [x, y, w, h] = frameAll(0.075);
          glass(x, y, w, h);
          const nx = name === 'wide' ? 3 : 2,
            ny = name === 'tall' ? 4 : name === 'small' ? 2 : 3;
          bars(x, y, w, h, nx, ny);
          // central mullion a little heavier
          bars(x, y, w, h, nx === 3 ? 3 : 2, 1, 0.06);
        } else if (name === 'french') {
          const [x, y, w, h] = frameAll(0.08);
          glass(x, y, w, h * 0.86);
          bars(x, y, w, h * 0.86, 2, 4);
          bars(x, y, w, h, 2, 1, 0.08);
          m.fillStyle = FRAME;
          m.fillRect(x, y + h * 0.86, w, h * 0.14);
        } else if (name === 'arch' || name === 'round') {
          // stone surround outside the arch
          m.fillStyle = '#b9ac98';
          m.fillRect(0, 0, W, H);
          const path = (ctx, inset) => {
            ctx.beginPath();
            if (name === 'round') ctx.ellipse(W / 2, H / 2, W / 2 - inset, H / 2 - inset, 0, 0, Math.PI * 2);
            else {
              const rr = W / 2 - inset;
              ctx.moveTo(inset, H - inset);
              ctx.lineTo(inset, rr + inset);
              ctx.arc(W / 2, rr + inset, rr, Math.PI, 0);
              ctx.lineTo(W - inset, H - inset);
              ctx.closePath();
            }
          };
          path(m, 0.02);
          m.fillStyle = FRAME;
          m.fill();
          for (const ctx of [m, e, r]) {
            ctx.save();
            path(ctx, 0.09);
            ctx.clip();
          }
          glass(0, 0, W, H);
          bars(0, 0, W, H, 2, name === 'round' ? 2 : 4);
          for (const ctx of [m, e, r]) ctx.restore();
        } else if (name === 'door') {
          m.fillStyle = FRAME;
          m.fillRect(0, 0, W, H);
          // transom light
          glass(0.09, 0.09, W - 0.18, 0.36);
          bars(0.09, 0.09, W - 0.18, 0.36, 3, 1);
          // panelled leaf
          const dx = 0.09,
            dy = 0.52,
            dw = W - 0.18,
            dh = H - dy - 0.04;
          m.fillStyle = '#3d4a3a';
          m.fillRect(dx, dy, dw, dh);
          m.fillStyle = '#4b5a47';
          for (let j = 0; j < 3; j++) for (let i = 0; i < 2; i++) m.fillRect(dx + 0.07 + (i * dw) / 2, dy + 0.07 + (j * dh) / 3, dw / 2 - 0.14, dh / 3 - 0.14);
          m.fillStyle = '#c8a24a';
          m.fillRect(dx + dw - 0.14, dy + dh * 0.5, 0.05, 0.12);
          r.fillStyle = 'rgb(0,140,0)';
          r.fillRect(dx, dy, dw, dh);
        }
        for (const ctx of [m, e, r]) ctx.restore();
      }
    }
    const map = canvasTexture(cm, { repeat: false });
    const emissiveMap = canvasTexture(ce, { repeat: false });
    const roughnessMap = canvasTexture(cr, { repeat: false, srgb: false });
    return { map, emissiveMap, roughnessMap };
  });
}

// wrought-iron railing (alpha)
export function fenceTexture() {
  return memo('fence', () => {
    const W = 256,
      H = 256;
    const c = makeCanvas(W, H);
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = '#1f2a24';
    ctx.fillStyle = '#1f2a24';
    ctx.lineCap = 'butt';
    const n = 8;
    for (let i = 0; i < n; i++) {
      const x = ((i + 0.5) / n) * W;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(x, H);
      ctx.lineTo(x, 26);
      ctx.stroke();
      // spear tip
      ctx.beginPath();
      ctx.moveTo(x - 8, 30);
      ctx.lineTo(x, 2);
      ctx.lineTo(x + 8, 30);
      ctx.closePath();
      ctx.fill();
    }
    ctx.lineWidth = 9;
    for (const y of [58, H - 26]) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
    // scrolls between the rails
    ctx.lineWidth = 4;
    for (let i = 0; i < n; i += 2) {
      const x = ((i + 1) / n) * W;
      ctx.beginPath();
      ctx.arc(x, H - 62, 15, 0, Math.PI * 2);
      ctx.stroke();
    }
    const t = canvasTexture(c, { repeat: true });
    t.wrapT = THREE.ClampToEdgeWrapping;
    return t;
  });
}

export function woodTexture() {
  return memo('wood', () => {
    const S = 256;
    const c = makeCanvas(S);
    fillPixels(c, (u, v, x, y, o) => {
      const plank = Math.floor(u * 8);
      const seam = smoothstep(0.0, 0.03, Math.min(u * 8 - plank, plank + 1 - u * 8));
      const l = 0.85 + hash2(plank, 3, 5) * 0.3;
      const grain = tfbm(u * 2 + plank * 0.37, v * 0.25, 24, 3, 401);
      const k = l * (0.8 + grain * 0.4) * (0.55 + 0.45 * seam);
      o[0] = 142 * k;
      o[1] = 112 * k;
      o[2] = 84 * k;
    });
    return canvasTexture(c);
  });
}
