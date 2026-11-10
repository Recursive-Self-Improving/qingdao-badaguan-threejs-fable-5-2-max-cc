// HDR post chain: scene → light shafts (radial blur of the sky around the sun) → bloom
// (progressive down/up-sample) → filmic tone mapping, grading, vignette and grain.
// The sky writes alpha = 0, everything else alpha = 1, which gives the shaft mask for free.

import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { ATMOS } from '../world/atmosphere.js';

const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
	vUv = uv;
	gl_Position = vec4( position.xy, 0.0, 1.0 );
}`;

// half-float targets keep highlights for bloom and tone mapping; 8-bit is the fallback
let RT_TYPE = THREE.HalfFloatType;

function rt(w, h, opts = {}) {
  return new THREE.WebGLRenderTarget(Math.max(1, w | 0), Math.max(1, h | 0), {
    type: RT_TYPE,
    format: THREE.RGBAFormat,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: false,
    stencilBuffer: false,
    ...opts,
  });
}

const BLOOM_LEVELS = 5;

export class PostFX {
  constructor(renderer, { samples = 4 } = {}) {
    this.renderer = renderer;
    const ext = renderer.extensions;
    if (!ext.has('EXT_color_buffer_float') && !ext.has('EXT_color_buffer_half_float')) RT_TYPE = THREE.UnsignedByteType;
    this.samples = Math.min(samples, renderer.capabilities.maxSamples || 0);
    this.quad = new FullScreenQuad();
    this.enabled = { bloom: true, godrays: true };
    this.sunScreen = new THREE.Vector3();
    this.rtScene = null;

    this.matMask = new THREE.ShaderMaterial({
      uniforms: { tScene: { value: null }, uSun: { value: new THREE.Vector2() }, uAspect: { value: 1 } },
      vertexShader: VERT,
      fragmentShader: /* glsl */ `
				uniform sampler2D tScene;
				uniform vec2 uSun;
				uniform float uAspect;
				varying vec2 vUv;
				void main() {
					vec4 c = texture2D( tScene, vUv );
					float sky = 1.0 - c.a;
					vec2 d = ( vUv - uSun ) * vec2( uAspect, 1.0 );
					float r = length( d );
					float l = dot( c.rgb, vec3( 0.3, 0.55, 0.15 ) );
					vec3 col = c.rgb * ( 1.0 / max( l, 1e-3 ) ) * min( l, 6.0 );
					float w = sky * ( exp( - r * r * 9.0 ) + 0.18 * exp( - r * r * 1.4 ) );
					gl_FragColor = vec4( col * w, 1.0 );
				}`,
      depthTest: false,
      depthWrite: false,
    });

    this.matRadial = new THREE.ShaderMaterial({
      uniforms: { tMap: { value: null }, uSun: { value: new THREE.Vector2() }, uStep: { value: 0.1 } },
      vertexShader: VERT,
      fragmentShader: /* glsl */ `
				uniform sampler2D tMap;
				uniform vec2 uSun;
				uniform float uStep;
				varying vec2 vUv;
				const int TAPS = 8;
				void main() {
					vec2 delta = ( uSun - vUv ) * uStep;
					vec3 acc = vec3( 0.0 );
					vec2 uv = vUv;
					for ( int i = 0; i < TAPS; i ++ ) {
						acc += texture2D( tMap, uv ).rgb;
						uv += delta;
					}
					gl_FragColor = vec4( acc / float( TAPS ), 1.0 );
				}`,
      depthTest: false,
      depthWrite: false,
    });

    this.matPrefilter = new THREE.ShaderMaterial({
      uniforms: { tMap: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 1.0 }, uKnee: { value: 0.6 } },
      vertexShader: VERT,
      fragmentShader: /* glsl */ `
				uniform sampler2D tMap;
				uniform vec2 uTexel;
				uniform float uThreshold;
				uniform float uKnee;
				varying vec2 vUv;
				vec3 pre( vec3 c ) {
					c = min( c, vec3( 40.0 ) );
					float br = max( c.r, max( c.g, c.b ) );
					float soft = clamp( br - uThreshold + uKnee, 0.0, 2.0 * uKnee );
					soft = soft * soft / ( 4.0 * uKnee + 1e-4 );
					float contrib = max( soft, br - uThreshold ) / max( br, 1e-4 );
					return c * contrib;
				}
				void main() {
					// 4-tap box with per-tap weighting to tame fireflies
					vec3 a = pre( texture2D( tMap, vUv + uTexel * vec2( - 1.0, - 1.0 ) ).rgb );
					vec3 b = pre( texture2D( tMap, vUv + uTexel * vec2( 1.0, - 1.0 ) ).rgb );
					vec3 c = pre( texture2D( tMap, vUv + uTexel * vec2( - 1.0, 1.0 ) ).rgb );
					vec3 d = pre( texture2D( tMap, vUv + uTexel * vec2( 1.0, 1.0 ) ).rgb );
					float wa = 1.0 / ( 1.0 + max( a.r, max( a.g, a.b ) ) );
					float wb = 1.0 / ( 1.0 + max( b.r, max( b.g, b.b ) ) );
					float wc = 1.0 / ( 1.0 + max( c.r, max( c.g, c.b ) ) );
					float wd = 1.0 / ( 1.0 + max( d.r, max( d.g, d.b ) ) );
					gl_FragColor = vec4( ( a * wa + b * wb + c * wc + d * wd ) / ( wa + wb + wc + wd ), 1.0 );
				}`,
      depthTest: false,
      depthWrite: false,
    });

    this.matDown = new THREE.ShaderMaterial({
      uniforms: { tMap: { value: null }, uTexel: { value: new THREE.Vector2() } },
      vertexShader: VERT,
      fragmentShader: /* glsl */ `
				uniform sampler2D tMap;
				uniform vec2 uTexel;
				varying vec2 vUv;
				void main() {
					// 13-tap downsample (Jimenez, "Next Generation Post Processing in Call of Duty: AW")
					vec3 A = texture2D( tMap, vUv + uTexel * vec2( - 2.0, - 2.0 ) ).rgb;
					vec3 B = texture2D( tMap, vUv + uTexel * vec2( 0.0, - 2.0 ) ).rgb;
					vec3 C = texture2D( tMap, vUv + uTexel * vec2( 2.0, - 2.0 ) ).rgb;
					vec3 D = texture2D( tMap, vUv + uTexel * vec2( - 1.0, - 1.0 ) ).rgb;
					vec3 E = texture2D( tMap, vUv + uTexel * vec2( 1.0, - 1.0 ) ).rgb;
					vec3 F = texture2D( tMap, vUv + uTexel * vec2( - 2.0, 0.0 ) ).rgb;
					vec3 G = texture2D( tMap, vUv ).rgb;
					vec3 H = texture2D( tMap, vUv + uTexel * vec2( 2.0, 0.0 ) ).rgb;
					vec3 I = texture2D( tMap, vUv + uTexel * vec2( - 1.0, 1.0 ) ).rgb;
					vec3 J = texture2D( tMap, vUv + uTexel * vec2( 1.0, 1.0 ) ).rgb;
					vec3 K = texture2D( tMap, vUv + uTexel * vec2( - 2.0, 2.0 ) ).rgb;
					vec3 L = texture2D( tMap, vUv + uTexel * vec2( 0.0, 2.0 ) ).rgb;
					vec3 M = texture2D( tMap, vUv + uTexel * vec2( 2.0, 2.0 ) ).rgb;
					vec3 c = ( D + E + I + J ) * 0.125;
					c += ( A + B + G + F ) * 0.03125;
					c += ( B + C + H + G ) * 0.03125;
					c += ( F + G + L + K ) * 0.03125;
					c += ( G + H + M + L ) * 0.03125;
					gl_FragColor = vec4( c, 1.0 );
				}`,
      depthTest: false,
      depthWrite: false,
    });

    this.matUp = new THREE.ShaderMaterial({
      uniforms: { tMap: { value: null }, uTexel: { value: new THREE.Vector2() } },
      vertexShader: VERT,
      fragmentShader: /* glsl */ `
				uniform sampler2D tMap;
				uniform vec2 uTexel;
				varying vec2 vUv;
				void main() {
					// 3×3 tent
					vec3 c = texture2D( tMap, vUv ).rgb * 4.0;
					c += texture2D( tMap, vUv + uTexel * vec2( - 1.0, 0.0 ) ).rgb * 2.0;
					c += texture2D( tMap, vUv + uTexel * vec2( 1.0, 0.0 ) ).rgb * 2.0;
					c += texture2D( tMap, vUv + uTexel * vec2( 0.0, - 1.0 ) ).rgb * 2.0;
					c += texture2D( tMap, vUv + uTexel * vec2( 0.0, 1.0 ) ).rgb * 2.0;
					c += texture2D( tMap, vUv + uTexel * vec2( - 1.0, - 1.0 ) ).rgb;
					c += texture2D( tMap, vUv + uTexel * vec2( 1.0, - 1.0 ) ).rgb;
					c += texture2D( tMap, vUv + uTexel * vec2( - 1.0, 1.0 ) ).rgb;
					c += texture2D( tMap, vUv + uTexel * vec2( 1.0, 1.0 ) ).rgb;
					gl_FragColor = vec4( c / 16.0, 1.0 );
				}`,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    this.matFinal = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null },
        tBloom: { value: null },
        tRays: { value: null },
        uBloom: { value: 0.5 },
        uRays: { value: 0.5 },
        uRayColor: { value: new THREE.Color(1, 0.8, 0.6) },
        uExposure: { value: 1 },
        uSaturation: { value: 1 },
        uContrast: { value: 1 },
        uWarmth: { value: 0 },
        uVignette: { value: 0.3 },
        uTime: { value: 0 },
        uFade: { value: 1 },
        uRes: { value: new THREE.Vector2(1, 1) },
      },
      vertexShader: VERT,
      fragmentShader: /* glsl */ `
				uniform sampler2D tScene;
				uniform sampler2D tBloom;
				uniform sampler2D tRays;
				uniform float uBloom;
				uniform float uRays;
				uniform vec3 uRayColor;
				uniform float uExposure;
				uniform float uSaturation;
				uniform float uContrast;
				uniform float uWarmth;
				uniform float uVignette;
				uniform float uTime;
				uniform float uFade;
				uniform vec2 uRes;
				varying vec2 vUv;

				// ACES filmic fit (Stephen Hill)
				vec3 RRTAndODTFit( vec3 v ) {
					vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
					vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
					return a / b;
				}
				vec3 aces( vec3 color ) {
					const mat3 inM = mat3( 0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777 );
					const mat3 outM = mat3( 1.60475, - 0.10208, - 0.00327, - 0.53108, 1.10813, - 0.07276, - 0.07367, - 0.00605, 1.07602 );
					color = inM * color;
					color = RRTAndODTFit( color );
					color = outM * color;
					return clamp( color, 0.0, 1.0 );
				}
				float hash12( vec2 p ) {
					vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
					p3 += dot( p3, p3.yzx + 33.33 );
					return fract( ( p3.x + p3.y ) * p3.z );
				}
				void main() {
					vec3 col = texture2D( tScene, vUv ).rgb;
					col += texture2D( tRays, vUv ).rgb * uRayColor * uRays;
					col += texture2D( tBloom, vUv ).rgb * uBloom;

					// white balance: warm ↔ cool
					col *= vec3( 1.0 + uWarmth, 1.0, 1.0 - uWarmth * 1.4 );
					col *= uExposure;

					// vignette in scene-referred space
					vec2 q = vUv - 0.5;
					float vig = 1.0 - uVignette * smoothstep( 0.25, 0.95, dot( q, q ) * 2.2 );
					col *= vig;

					col = aces( col / 0.6 );

					// display-referred grade
					float l = dot( col, vec3( 0.2126, 0.7152, 0.0722 ) );
					col = mix( vec3( l ), col, uSaturation );
					col = ( col - 0.5 ) * uContrast + 0.5;
					col = clamp( col, 0.0, 1.0 );

					// sRGB
					col = mix( col * 12.92, 1.055 * pow( col, vec3( 1.0 / 2.4 ) ) - 0.055, step( 0.0031308, col ) );

					// fine grain + dither against banding in the sky
					float g = hash12( vUv * uRes + fract( uTime ) * 61.0 ) - 0.5;
					col += g * ( 0.022 * ( 1.0 - l * 0.6 ) + 1.0 / 255.0 );
					gl_FragColor = vec4( col * uFade, 1.0 );
				}`,
      depthTest: false,
      depthWrite: false,
    });

    this.bloomRTs = [];
    this.rayRTs = [];
    this.setSize(1, 1);
  }

  setSize(w, h) {
    this.w = w;
    this.h = h;
    if (this.rtScene) this.rtScene.dispose();
    this.rtScene = rt(w, h, { depthBuffer: true, samples: this.samples });
    for (const r of this.bloomRTs) r.dispose();
    for (const r of this.rayRTs) r.dispose();
    this.bloomRTs = [];
    let bw = w >> 1,
      bh = h >> 1;
    for (let i = 0; i < BLOOM_LEVELS; i++) {
      this.bloomRTs.push(rt(bw, bh));
      bw >>= 1;
      bh >>= 1;
    }
    this.rayRTs = [rt(w / 3, h / 3), rt(w / 3, h / 3)];
    this.matFinal.uniforms.uRes.value.set(w, h);
  }

  setSamples(samples) {
    samples = Math.min(samples, this.renderer.capabilities.maxSamples || 0);
    if (samples === this.samples) return;
    this.samples = samples;
    this.setSize(this.w, this.h);
  }

  _blit(mat, target) {
    this.quad.material = mat;
    this.renderer.setRenderTarget(target);
    this.quad.render(this.renderer);
  }

  render(scene, camera, atmosphere, time, fade = 1) {
    const r = this.renderer;
    const s = atmosphere.state;

    r.setRenderTarget(this.rtScene);
    r.setClearColor(0x000000, 1);
    r.clear();
    r.render(scene, camera);

    // --- light shafts
    let rays = 0;
    if (this.enabled.godrays && s.godrays > 0.01) {
      const sunDir = ATMOS.uSunDir.value;
      const p = this.sunScreen.copy(camera.position).addScaledVector(sunDir, 1000).project(camera);
      const fwd = camera.getWorldDirection(_v);
      const facing = fwd.dot(sunDir);
      if (facing > 0.05 && p.z < 1) {
        const off = Math.max(Math.abs(p.x), Math.abs(p.y));
        rays = s.godrays * Math.min(1, (facing - 0.05) * 4) * (1 - Math.min(1, Math.max(0, off - 1.0) / 0.7));
      }
      if (rays > 0.003) {
        const su = this.matMask.uniforms.uSun.value.set(p.x * 0.5 + 0.5, p.y * 0.5 + 0.5);
        this.matMask.uniforms.tScene.value = this.rtScene.texture;
        this.matMask.uniforms.uAspect.value = this.w / this.h;
        this._blit(this.matMask, this.rayRTs[0]);
        this.matRadial.uniforms.uSun.value.copy(su);
        let src = 0;
        const filterLen = 0.9;
        for (let pass = 1; pass <= 3; pass++) {
          this.matRadial.uniforms.tMap.value = this.rayRTs[src].texture;
          this.matRadial.uniforms.uStep.value = filterLen * Math.pow(8, -pass);
          this._blit(this.matRadial, this.rayRTs[1 - src]);
          src = 1 - src;
        }
        this.matFinal.uniforms.tRays.value = this.rayRTs[src].texture;
      }
    }

    // --- bloom
    const doBloom = this.enabled.bloom && s.bloom > 0.01;
    if (doBloom) {
      const b = this.bloomRTs;
      this.matPrefilter.uniforms.tMap.value = this.rtScene.texture;
      this.matPrefilter.uniforms.uTexel.value.set(0.5 / this.w, 0.5 / this.h);
      this._blit(this.matPrefilter, b[0]);
      for (let i = 1; i < b.length; i++) {
        this.matDown.uniforms.tMap.value = b[i - 1].texture;
        this.matDown.uniforms.uTexel.value.set(1 / b[i - 1].width, 1 / b[i - 1].height);
        this._blit(this.matDown, b[i]);
      }
      r.autoClear = false;
      for (let i = b.length - 1; i > 0; i--) {
        this.matUp.uniforms.tMap.value = b[i].texture;
        this.matUp.uniforms.uTexel.value.set(1 / b[i].width, 1 / b[i].height);
        this._blit(this.matUp, b[i - 1]);
      }
      r.autoClear = true;
    }

    const u = this.matFinal.uniforms;
    u.tScene.value = this.rtScene.texture;
    u.tBloom.value = doBloom ? this.bloomRTs[0].texture : null;
    u.uBloom.value = doBloom ? s.bloom * 0.16 : 0;
    u.uRays.value = rays > 0.003 ? rays * 0.9 : 0;
    u.uRayColor.value.copy(ATMOS.uFogSunColor.value).multiplyScalar(0.55);
    u.uExposure.value = s.exposure;
    u.uSaturation.value = s.saturation;
    u.uContrast.value = s.contrast;
    u.uWarmth.value = s.warmth;
    u.uVignette.value = s.vignette;
    u.uTime.value = time;
    u.uFade.value = fade;
    this._blit(this.matFinal, null);
  }
}

const _v = new THREE.Vector3();
