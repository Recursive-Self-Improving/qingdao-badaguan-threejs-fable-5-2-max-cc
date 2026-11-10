// Terrain: one non-uniform grid — 2 m cells across the district, stretching out to coarse
// cells for the distant hills and headlands — shaded by blending tiled ground textures.

import * as THREE from 'three';
import { BOUNDS, CELL, GRID, farHeight, coastDist, rockiness } from './layout.js';
import { patchMaterial, SKY_GLSL } from './atmosphere.js';
import { grassTexture, sandTexture, rockTextures, soilTexture, litterTexture, noiseTexture } from '../core/textures.js';
import { smoothstep, saturate } from '../core/math.js';

function axis(min, max, step, farMin, farMax) {
  const a = [];
  const left = [];
  let x = min,
    s = step * 2;
  while (x > farMin) {
    x -= s;
    left.push(Math.max(x, farMin));
    s = Math.min(s * 1.32, 900);
  }
  left.reverse();
  a.push(...left);
  const n = Math.round((max - min) / step);
  for (let i = 0; i <= n; i++) a.push(min + i * step);
  x = max;
  s = step * 2;
  while (x < farMax) {
    x += s;
    a.push(Math.min(x, farMax));
    s = Math.min(s * 1.32, 900);
  }
  return a;
}

// GLSL: leaf-litter layer shared by terrain, carriageways and pavements
export const LITTER_PARS = /* glsl */ `
uniform sampler2D tLitter;
uniform sampler2D tNoiseG;
uniform float uLitterAmount;
varying vec4 vLitter;
vec4 litterLayer( vec2 wuv, float extra ) {
	vec4 lt = texture2D( tLitter, wuv * 0.3 );
	vec4 lt2 = texture2D( tLitter, wuv * 0.19 + 0.37 );
	float n = texture2D( tNoiseG, wuv * 0.06 ).g * 0.65 + texture2D( tNoiseG, wuv * 0.31 ).r * 0.35;
	float amt = clamp( vLitter.a * uLitterAmount + extra, 0.0, 1.0 );
	float th = 1.0 - amt;
	float c1 = lt.a * smoothstep( th - 0.02, th + 0.16, n );
	float c2 = lt2.a * smoothstep( th + 0.1, th + 0.28, n );
	// where the fall is heaviest the ground disappears under a matted carpet
	float carpet = smoothstep( 0.6, 0.95, amt ) * smoothstep( th + 0.12, th + 0.42, n + 0.22 );
	vec3 col = mix( lt2.rgb * 0.9, lt.rgb, c1 );
	col = mix( vec3( 0.62, 0.55, 0.4 ) * ( 0.6 + 0.6 * n ), col, max( c1, c2 ) );
	return vec4( col * vLitter.rgb, max( max( c1, c2 ), carpet * 0.9 ) * step( 0.004, amt ) );
}
`;

export const litterUniforms = {
  tLitter: { value: null },
  tNoiseG: { value: null },
  uLitterAmount: { value: 1 },
  uDry: { value: 1 }, // how far the lawns have yellowed (season)
};

export function buildTerrain(scene) {
  litterUniforms.tLitter.value = litterTexture();
  litterUniforms.tNoiseG.value = noiseTexture();

  const xs = axis(BOUNDS.minX, BOUNDS.maxX, CELL, -9000, 9000);
  const zs = axis(BOUNDS.minZ, BOUNDS.maxZ, CELL, -9000, 1400);
  const nx = xs.length,
    nz = zs.length;
  const pos = new Float32Array(nx * nz * 3);
  const splat = new Uint8Array(nx * nz * 4);
  const litter = new Uint8Array(nx * nz * 4);
  const fineI0 = xs.indexOf(BOUNDS.minX),
    fineJ0 = zs.indexOf(BOUNDS.minZ);

  for (let j = 0; j < nz; j++) {
    const z = zs[j];
    const gj = j - fineJ0;
    for (let i = 0; i < nx; i++) {
      const x = xs[i];
      const gi = i - fineI0;
      const inFine = gi >= 0 && gi < GRID.nx && gj >= 0 && gj < GRID.nz;
      const h = inFine ? GRID.data[gj * GRID.nx + gi] : farHeight(x, z);
      const o = (j * nx + i) * 3;
      pos[o] = x;
      pos[o + 1] = h;
      pos[o + 2] = z;

      // material weights: sand, rock, bare soil, distant woods
      const d = coastDist(x, z);
      const rk = rockiness(x, z);
      let sand = 0,
        rock = 0,
        soil = 0,
        woods = 0;
      if (d < 60) {
        sand = (1 - rk) * smoothstep(42.6, 41.2, d);
        if (h < 0.2) sand = Math.max(sand, 1 - rk);
        rock = rk * smoothstep(30, 13, d);
        if (h < -0.3) rock = Math.max(rock, rk);
      }
      const far = Math.max(Math.abs(x) - 430, -z - 400, 0);
      woods = smoothstep(20, 160, far) * (d > 30 ? 1 : 0);
      const so = (j * nx + i) * 4;
      splat[so] = saturate(sand) * 255;
      splat[so + 1] = saturate(rock) * 255;
      splat[so + 2] = saturate(soil) * 255;
      splat[so + 3] = saturate(woods) * 255;
    }
  }

  const idx = new Uint32Array((nx - 1) * (nz - 1) * 6);
  let k = 0;
  for (let j = 0; j < nz - 1; j++) {
    for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i,
        b = a + 1,
        c = a + nx,
        e = c + 1;
      idx[k++] = a;
      idx[k++] = c;
      idx[k++] = b;
      idx[k++] = b;
      idx[k++] = c;
      idx[k++] = e;
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSplat', new THREE.BufferAttribute(splat, 4, true));
  geo.setAttribute('aLitter', new THREE.BufferAttribute(litter, 4, true));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  geo.computeVertexNormals();
  geo.computeBoundingSphere();

  const rock = rockTextures();
  const uniforms = {
    tSand: { value: sandTexture() },
    tRock: { value: rock.map },
    tSoil: { value: soilTexture() },
    ...litterUniforms,
  };
  const mat = new THREE.MeshStandardMaterial({ map: grassTexture(), roughness: 1, metalness: 0 });
  patchMaterial(
    mat,
    'terrain',
    (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
					attribute vec4 aSplat;
					attribute vec4 aLitter;
					varying vec4 vSplat;
					varying vec4 vLitter;
					varying vec3 vWPos;`
        )
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
					vSplat = aSplat;
					vLitter = aLitter;
					vWPos = position;`
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
					uniform sampler2D tSand;
					uniform sampler2D tRock;
					uniform sampler2D tSoil;
					uniform float uDry;
					uniform vec3 uLightDir;
					varying vec4 vSplat;
					varying vec3 vWPos;
					float gWet;
					${LITTER_PARS}`
        )
        .replace('#include <fog_pars_fragment>', `#include <fog_pars_fragment>\n${SKY_GLSL}`)
        .replace(
          '#include <map_fragment>',
          /* glsl */ `
					vec2 wuv = vWPos.xz;
					float nA = texture2D( tNoiseG, wuv * 0.013 ).r;
					float nB = texture2D( tNoiseG, wuv * 0.07 ).g;
					vec3 gcol = texture2D( map, wuv * 0.21 ).rgb;
					gcol = mix( gcol, texture2D( map, wuv * 0.053 + 0.3 ).rgb, 0.4 ) * ( 0.72 + 0.56 * nA );
					// late-autumn lawn: duller, with straw-coloured patches
					float dryG = smoothstep( 0.42, 0.75, nA * 0.6 + nB * 0.4 );
					gcol = mix( gcol, vec3( dot( gcol, vec3( 0.33 ) ) ) * vec3( 1.25, 1.12, 0.62 ), clamp( ( 0.28 + 0.34 * dryG ) * uDry, 0.0, 0.9 ) ) * 0.9;
					vec3 scol = texture2D( tSand, wuv * 0.33 ).rgb * ( 0.9 + 0.2 * nA );
					vec3 rcol = mix( texture2D( tRock, wuv * 0.13 ).rgb, texture2D( tRock, wuv * 0.031 ).rgb, 0.45 ) * ( 0.7 + 0.5 * nB );
					vec3 ocol = texture2D( tSoil, wuv * 0.36 ).rgb;
					vec3 wcol = vec3( 0.075, 0.115, 0.05 ) * ( 0.55 + 0.9 * nB ) + vec3( 0.07, 0.03, 0.0 ) * smoothstep( 0.55, 0.8, nA );
					float wS = smoothstep( 0.38, 0.62, vSplat.x + ( nB - 0.5 ) * 0.3 );
					float wR = smoothstep( 0.35, 0.65, vSplat.y + ( nB - 0.5 ) * 0.5 );
					float wO = smoothstep( 0.3, 0.7, vSplat.z + ( nB - 0.5 ) * 0.5 );
					float wW = vSplat.w;
					vec3 tcol = mix( gcol, ocol, wO );
					tcol = mix( tcol, wcol, wW );
					tcol = mix( tcol, scol, wS );
					tcol = mix( tcol, rcol, wR );
					// seaweed-dark, wet band on the reefs and damp sand by the waterline
					float tide = smoothstep( 0.34, 0.04, vWPos.y );
					gWet = tide * max( wS, wR * 0.8 );
					tcol *= mix( 1.0, 0.52, gWet );
					tcol = mix( tcol, tcol * vec3( 0.55, 0.62, 0.42 ), wR * smoothstep( 1.3, 0.2, vWPos.y ) * 0.6 );
					vec4 lit = litterLayer( wuv, 0.0 );
					tcol = mix( tcol, lit.rgb, lit.a * ( 1.0 - wS ) * ( 1.0 - wR ) );
					diffuseColor.rgb = tcol;`
        )
        .replace(
          '#include <roughnessmap_fragment>',
          `float roughnessFactor = mix( roughness, 0.16, gWet * wS );`
        )
        .replace(
          '#include <opaque_fragment>',
          /* glsl */ `
					{
						// wet sand mirrors the sky
						vec3 Vw = normalize( cameraPosition - vWPos );
						float fr = 0.03 + 0.97 * pow( 1.0 - max( Vw.y, 0.0 ), 5.0 );
						vec3 Rw = reflect( - Vw, vec3( 0.0, 1.0, 0.0 ) );
						outgoingLight += skyThroughAir( vWPos, Rw ) * fr * gWet * wS * 0.85;
					}
					#include <opaque_fragment>`
        );
    },
    uniforms
  );

  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  mesh.name = 'terrain';
  scene.add(mesh);

  // Fallen-leaf carpet: called once the trees are planted. fn(x, z) → [r, g, b, amount] or null
  function paintLitter(fn) {
    const attr = geo.getAttribute('aLitter');
    for (let gj = 0; gj < GRID.nz; gj++) {
      for (let gi = 0; gi < GRID.nx; gi++) {
        const i = gi + fineI0,
          j = gj + fineJ0;
        const o = (j * nx + i) * 4;
        const r = fn(xs[i], zs[j]);
        if (r) {
          litter[o] = r[0] * 255;
          litter[o + 1] = r[1] * 255;
          litter[o + 2] = r[2] * 255;
          litter[o + 3] = r[3] * 255;
        }
      }
    }
    attr.needsUpdate = true;
  }

  // mark bare soil under dense planting etc. fn(x,z) → 0..1
  function paintSoil(fn) {
    const attr = geo.getAttribute('aSplat');
    for (let gj = 0; gj < GRID.nz; gj++) {
      for (let gi = 0; gi < GRID.nx; gi++) {
        const i = gi + fineI0,
          j = gj + fineJ0;
        splat[(j * nx + i) * 4 + 2] = saturate(fn(xs[i], zs[j])) * 255;
      }
    }
    attr.needsUpdate = true;
  }

  return { mesh, paintLitter, paintSoil };
}
