// Sky dome: analytic gradient, sun and moon discs, drifting cloud deck, stars.
// It is drawn at the far plane and shares the fog/haze maths with everything else,
// so distant land and sea dissolve into exactly the colour of the horizon.

import * as THREE from 'three';
import { ATMOS, ATMOS_GLSL, SKY_GLSL, injectAtmos } from './atmosphere.js';
import { noiseTexture } from '../core/textures.js';

export class Sky {
  constructor(scene, atmosphere) {
    this.atmosphere = atmosphere;
    this.uniforms = {
      tNoise: { value: noiseTexture() },
      uSunDisc: { value: 20 },
      uMoonDir: { value: new THREE.Vector3(0, 1, 0) },
      uMoon: { value: 0 },
      uStars: { value: 0 },
      uCloudCover: { value: 0.4 },
      uCloudLit: { value: new THREE.Color(1, 1, 1) },
      uCloudDark: { value: new THREE.Color(0.5, 0.5, 0.6) },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
				varying vec3 vDir;
				void main() {
					vDir = position;
					vec4 p = projectionMatrix * viewMatrix * vec4( cameraPosition + position * 100.0, 1.0 );
					gl_Position = p.xyww; // pin to the far plane
				}`,
      fragmentShader: /* glsl */ `
				uniform float uTime;
				uniform sampler2D tNoise;
				uniform float uSunDisc;
				uniform vec3 uMoonDir;
				uniform float uMoon;
				uniform float uStars;
				uniform float uCloudCover;
				uniform vec3 uCloudLit;
				uniform vec3 uCloudDark;
				uniform vec3 uLightColor;
				varying vec3 vDir;
				${ATMOS_GLSL}
				${SKY_GLSL}

				float hash13( vec3 p ) {
					p = fract( p * 0.1031 );
					p += dot( p, p.zyx + 31.32 );
					return fract( ( p.x + p.y ) * p.z );
				}
				float cloudField( vec2 p ) {
					vec2 w = uTime * vec2( 0.0012, 0.0005 );
					float n = texture2D( tNoise, p * 0.085 + w ).r * 0.56;
					n += texture2D( tNoise, p * 0.21 + w * 2.3 ).g * 0.3;
					n += texture2D( tNoise, p * 0.62 + w * 4.0 ).a * 0.14;
					return n;
				}

				void main() {
					vec3 d = normalize( vDir );
					vec3 col = skyGradient( d );
					float mu = dot( d, uSunDir );

					// stars
					if ( uStars > 0.001 && d.y > 0.0 ) {
						vec3 sd = d * 190.0;
						vec3 cell = floor( sd );
						float h = hash13( cell );
						vec3 f = fract( sd ) - 0.5 - ( vec3( hash13( cell + 7.1 ), hash13( cell + 3.7 ), hash13( cell + 9.2 ) ) - 0.5 ) * 0.6;
						float star = step( 0.972, h ) * smoothstep( 0.2, 0.0, length( f ) );
						star *= 0.55 + 0.45 * sin( uTime * ( 1.5 + h * 3.0 ) + h * 90.0 );
						col += vec3( 0.9, 0.95, 1.0 ) * star * uStars * ( 0.4 + 1.6 * fract( h * 51.7 ) ) * smoothstep( 0.02, 0.25, d.y );
					}

					// moon
					float mm = dot( d, uMoonDir );
					float moonDisc = smoothstep( 0.99965, 0.99975, mm );
					col += uMoon * ( vec3( 1.0, 0.98, 0.9 ) * moonDisc * 5.0 + vec3( 0.25, 0.32, 0.5 ) * ( pow( max( mm, 0.0 ), 600.0 ) * 0.8 + pow( max( mm, 0.0 ), 30.0 ) * 0.12 ) );

					// sun
					float sun = smoothstep( 0.99988, 0.99995, mu );
					vec3 sunCol = normalize( uLightColor + 1e-4 ) * uSunDisc;

					// cloud deck
					float cov = 0.0;
					if ( d.y > 0.004 ) {
						vec2 p = d.xz / ( d.y + 0.09 );
						float n = clamp( ( cloudField( p ) - 0.5 ) * 2.5 + 0.5, 0.0, 1.0 );
						float th = mix( 0.9, 0.25, uCloudCover );
						cov = smoothstep( th, th + 0.24, n );
						if ( cov > 0.001 ) {
							vec2 toSun = normalize( uSunDir.xz + vec2( 1e-4 ) ) * 0.3;
							float n2 = clamp( ( cloudField( p + toSun ) - 0.5 ) * 2.5 + 0.5, 0.0, 1.0 );
							float lit = clamp( 0.55 + ( n - n2 ) * 2.2, 0.0, 1.0 );
							vec3 cc = mix( uCloudDark, uCloudLit, lit );
							// thin edges catch the sun
							float edge = 1.0 - smoothstep( th + 0.03, th + 0.34, n );
							cc += uSkyGlow * pow( max( mu, 0.0 ), 5.0 ) * edge * 1.4;
							float fade = smoothstep( 0.0, 0.2, d.y );
							cov *= fade * 0.94;
							col = mix( col, cc, cov );
						}
					}
					col += sunCol * sun * ( 1.0 - cov );

					// air between us and the sky
					float pathLen = min( 900.0 / max( d.y, 0.012 ), 60000.0 );
					vec4 fog = atmosFog( cameraPosition, vec3( d.x, max( d.y, 0.0 ), d.z ), pathLen );
					// let the sun's disc burn through haze a little
					col = mix( col, fog.rgb, fog.a * ( 1.0 - 0.55 * sun ) );
					gl_FragColor = vec4( col, 0.0 ); // alpha 0 marks sky for the light-shaft mask
				}`,
      side: THREE.BackSide,
      depthWrite: false,
      depthTest: true,
      fog: false,
    });
    mat.onBeforeCompile = (shader) => injectAtmos(shader);
    mat.customProgramCacheKey = () => 'sky';
    this.mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 4), mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 900; // after opaque geometry: only uncovered pixels are shaded
    this.mesh.matrixAutoUpdate = false;
    scene.add(this.mesh);
  }

  update() {
    const s = this.atmosphere.state;
    const u = this.uniforms;
    u.uSunDisc.value = s.sunDisc;
    u.uMoonDir.value.copy(ATMOS.uLightDir.value);
    u.uMoon.value = s.moon;
    u.uStars.value = s.stars;
    u.uCloudCover.value = s.cloudCover;
    u.uCloudLit.value.setRGB(s.cloudLit[0], s.cloudLit[1], s.cloudLit[2]);
    u.uCloudDark.value.setRGB(s.cloudDark[0], s.cloudDark[1], s.cloudDark[2]);
  }
}
