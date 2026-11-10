// The Yellow Sea in Taiping Bay: a camera-centred polar grid with summed sine swell,
// analytic per-pixel normals, Fresnel sky reflection, sun glitter, depth-tinted shallows
// and animated surf where the water meets the sand and the reefs.

import * as THREE from 'three';
import { ATMOS_GLSL, SKY_GLSL, injectAtmos } from './atmosphere.js';
import { noiseTexture, waterNormalTexture } from '../core/textures.js';
import { BOUNDS, CELL, GRID } from './layout.js';

const WAVES_GLSL = /* glsl */ `
const int NW = 5;
const vec2 WDIR[5] = vec2[5]( vec2( -0.18, -0.984 ), vec2( 0.31, -0.951 ), vec2( -0.52, -0.854 ), vec2( 0.12, -0.993 ), vec2( -0.71, -0.704 ) );
const float WLEN[5] = float[5]( 37.0, 23.0, 13.5, 8.2, 5.1 );
const float WAMP[5] = float[5]( 0.15, 0.10, 0.055, 0.032, 0.018 );

float seaWaves( vec2 p, float t, float dist, float fadeNear, float fadeFar, out vec2 slope ) {
	float h = 0.0;
	slope = vec2( 0.0 );
	for ( int i = 0; i < NW; i ++ ) {
		float L = WLEN[ i ];
		float k = 6.2831853 / L;
		float c = sqrt( 9.81 / k ) * 0.5;
		float ph = k * ( dot( WDIR[ i ], p ) - c * t ) + float( i ) * 1.7;
		float fade = 1.0 - smoothstep( L * fadeNear, L * fadeFar, dist );
		float a = WAMP[ i ] * fade;
		h += a * sin( ph );
		slope += a * k * cos( ph ) * WDIR[ i ];
	}
	return h;
}
`;

function polarGrid(rings = 76, segs = 112, r0 = 1.2, growth = 1.128) {
  const pos = [0, 0, 0];
  let r = r0;
  for (let i = 0; i < rings; i++) {
    for (let j = 0; j < segs; j++) {
      const a = (j / segs) * Math.PI * 2;
      pos.push(Math.cos(a) * r, 0, Math.sin(a) * r);
    }
    r *= growth;
  }
  const idx = [];
  for (let j = 0; j < segs; j++) idx.push(0, 1 + ((j + 1) % segs), 1 + j);
  for (let i = 0; i < rings - 1; i++) {
    const a = 1 + i * segs,
      b = 1 + (i + 1) * segs;
    for (let j = 0; j < segs; j++) {
      const j2 = (j + 1) % segs;
      idx.push(a + j, a + j2, b + j, a + j2, b + j2, b + j);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return g;
}

export class Ocean {
  constructor(scene, atmosphere) {
    this.atmosphere = atmosphere;
    // terrain elevation as a filterable half-float texture → water depth in the shader
    const half = new Uint16Array(GRID.nx * GRID.nz);
    for (let i = 0; i < half.length; i++) half[i] = THREE.DataUtils.toHalfFloat(GRID.data[i]);
    const depthTex = new THREE.DataTexture(half, GRID.nx, GRID.nz, THREE.RedFormat, THREE.HalfFloatType);
    depthTex.minFilter = depthTex.magFilter = THREE.LinearFilter;
    depthTex.wrapS = depthTex.wrapT = THREE.ClampToEdgeWrapping;
    depthTex.needsUpdate = true;
    this.depthTexture = depthTex;

    this.uniforms = {
      tDepth: { value: depthTex },
      tNoise: { value: noiseTexture() },
      tWaterN: { value: waterNormalTexture() },
      uGrid: { value: new THREE.Vector4(BOUNDS.minX - CELL * 0.5, BOUNDS.minZ - CELL * 0.5, 1 / (GRID.nx * CELL), 1 / (GRID.nz * CELL)) },
      uShallow: { value: new THREE.Color() },
      uDeep: { value: new THREE.Color() },
    };

    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
				uniform float uTime;
				uniform sampler2D tDepth;
				uniform vec4 uGrid;
				varying vec3 vWorld;
				${WAVES_GLSL}
				void main() {
					vec4 wp = modelMatrix * vec4( position, 1.0 );
					vec2 uv = ( wp.xz - uGrid.xy ) * uGrid.zw;
					float inGrid = step( 0.0, uv.x ) * step( uv.x, 1.0 ) * step( 0.0, uv.y ) * step( uv.y, 1.0 );
					float depth = mix( 12.0, - texture2D( tDepth, uv ).r, inGrid );
					float dist = length( wp.xz - cameraPosition.xz );
					vec2 slope;
					float h = seaWaves( wp.xz, uTime, dist, 3.0, 7.0, slope );
					h *= smoothstep( 0.05, 2.6, depth );
					// the slow breathing of the swash on the beach
					h += 0.085 * sin( uTime * 0.62 + wp.x * 0.021 ) * ( 1.0 - smoothstep( 0.0, 2.2, depth ) );
					wp.y += h;
					vWorld = wp.xyz;
					gl_Position = projectionMatrix * viewMatrix * wp;
				}`,
      fragmentShader: /* glsl */ `
				uniform float uTime;
				uniform sampler2D tDepth;
				uniform sampler2D tNoise;
				uniform sampler2D tWaterN;
				uniform vec4 uGrid;
				uniform vec3 uShallow;
				uniform vec3 uDeep;
				uniform vec3 uLightDir;
				uniform vec3 uLightColor;
				uniform vec3 uAmbient;
				varying vec3 vWorld;
				${ATMOS_GLSL}
				${SKY_GLSL}
				${WAVES_GLSL}

				void main() {
					vec2 p = vWorld.xz;
					vec3 toCam = cameraPosition - vWorld;
					float dist = length( toCam );
					vec3 V = toCam / dist;

					vec2 uv = ( p - uGrid.xy ) * uGrid.zw;
					vec2 e = min( uv, 1.0 - uv );
					float inGrid = smoothstep( 0.0, 0.02, min( e.x, e.y ) );
					float terr = texture2D( tDepth, uv ).r;
					float depth = mix( 12.0, vWorld.y - terr, inGrid );

					// --- surface normal: swell + two scales of ripples
					vec2 slope;
					seaWaves( p, uTime, dist, 40.0, 130.0, slope );
					slope *= smoothstep( 0.05, 2.6, depth );
					float t = uTime;
					vec2 r1 = texture2D( tWaterN, p * 0.105 + t * vec2( 0.013, 0.021 ) ).rg - 0.5;
					vec2 r2 = texture2D( tWaterN, p * 0.037 + t * vec2( - 0.009, 0.012 ) ).rg - 0.5;
					vec2 r3 = texture2D( tWaterN, p * 0.41 + t * vec2( 0.03, - 0.02 ) ).rg - 0.5;
					float nearK = 1.0 - smoothstep( 20.0, 220.0, dist );
					slope += ( r1 * 0.5 + r2 * 0.75 + r3 * 0.28 * nearK ) * ( 0.42 + 0.3 * nearK );
					vec3 N = normalize( vec3( - slope.x, 1.0, - slope.y ) );

					float ndv = max( dot( N, V ), 0.0 );
					float fres = 0.02 + 0.98 * pow( 1.0 - ndv, 5.0 );
					fres *= 0.9;

					// --- reflection of the sky
					vec3 R = reflect( - V, N );
					R.y = abs( R.y );
					vec3 refl = skyThroughAir( vWorld, R );

					// --- water body, tinted by depth; the sand shows through in the shallows
					vec3 lightK = uAmbient * 1.15 + uLightColor * max( uLightDir.y, 0.0 ) * 0.3;
					vec3 body = mix( uShallow, uDeep, 1.0 - exp( - max( depth, 0.0 ) * 0.33 ) );
					vec3 sand = vec3( 0.52, 0.45, 0.31 ) * lightK * 0.8;
					body = mix( sand, body, 1.0 - exp( - max( depth, 0.0 ) * 1.5 ) );
					// light scattered back out of wave crests facing the sun
					float crest = max( dot( normalize( vec3( slope.x, 0.0, slope.y ) + 1e-4 ), - uLightDir ), 0.0 );
					body += uShallow * crest * length( slope ) * 1.6 * max( uLightDir.y, 0.05 );

					vec3 col = mix( body, refl, fres );

					// --- sun (or moon) glitter
					float rl = max( dot( R, uLightDir ), 0.0 );
					float glitter = pow( rl, 520.0 ) * 26.0 + pow( rl, 60.0 ) * 0.5 + pow( rl, 9.0 ) * 0.035;
					col += uLightColor * glitter * ( 0.25 + 0.75 * fres ) * 0.55;

					// --- surf
					float foam = 0.0;
					if ( inGrid > 0.0 ) {
						float d = max( depth, 0.0 );
						float n1 = texture2D( tNoise, p * 0.043 + t * 0.006 ).r;
						float n2 = texture2D( tNoise, p * 0.31 + vec2( t * 0.03, - t * 0.021 ) ).g;
						float n3 = texture2D( tNoise, p * 0.9 - t * 0.04 ).b;
						float edge = smoothstep( 0.22 + n1 * 0.22, 0.02, d );
						// successive lines of spent surf sliding up the slope
						float band = sin( d * 7.5 - t * 1.15 + n1 * 9.0 );
						float bands = smoothstep( 0.8, 0.99, band ) * smoothstep( 1.25, 0.2, d ) * smoothstep( 0.0, 0.15, d );
						foam = max( edge * 0.9, bands * 0.55 );
						foam *= smoothstep( 0.34, 0.7, n2 * 0.65 + n3 * 0.35 + foam * 0.4 );
						foam *= inGrid;
					}
					vec3 foamCol = vec3( 0.92, 0.94, 0.95 ) * ( uAmbient * 1.5 + uLightColor * max( uLightDir.y, 0.0 ) * 0.33 );
					col = mix( col, foamCol, clamp( foam, 0.0, 1.0 ) * 0.92 );

					float alpha = mix( 1.0, smoothstep( 0.0, 0.2, depth ), inGrid );

					vec4 fog = atmosFog( cameraPosition, - V, dist );
					col = mix( col, fog.rgb, fog.a );
					gl_FragColor = vec4( col, alpha );
				}`,
      transparent: true,
      depthWrite: true,
      fog: false,
    });
    mat.onBeforeCompile = (shader) => injectAtmos(shader);
    mat.customProgramCacheKey = () => 'ocean';

    this.mesh = new THREE.Mesh(polarGrid(), mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 950;
    scene.add(this.mesh);
  }

  update(camera) {
    this.mesh.position.set(camera.position.x, 0, camera.position.z);
    const s = this.atmosphere.state;
    this.uniforms.uShallow.value.setRGB(s.waterShallow[0], s.waterShallow[1], s.waterShallow[2]);
    this.uniforms.uDeep.value.setRGB(s.waterDeep[0], s.waterDeep[1], s.waterDeep[2]);
  }
}
