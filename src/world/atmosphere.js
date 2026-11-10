// Atmosphere: shared uniforms, analytic height-fog + aerial perspective that is injected into
// every material, and the time-of-day presets that drive sun, sky, fog, lamps and grading.

import * as THREE from 'three';
import { SunLight } from 'three/addons/lights/SunLight.js';
import { lerp, saturate } from '../core/math.js';

export const CAMERA_FAR = 9000;

// Shared uniform objects — the same {value} references are handed to every program.
export const ATMOS = {
  uTime: { value: 0 },
  uSunDir: { value: new THREE.Vector3(0, 1, 0) }, // astronomical sun (sky glow, fog tint)
  uLightDir: { value: new THREE.Vector3(0, 1, 0) }, // key light: the sun by day, the moon by night
  uLightColor: { value: new THREE.Color(1, 1, 1) }, // key light radiance (colour × intensity)
  uFogColor: { value: new THREE.Color(0.6, 0.7, 0.8) },
  uFogSunColor: { value: new THREE.Color(1, 0.8, 0.6) },
  uFogParams: { value: new THREE.Vector4(0.001, 0.02, 0, 6) }, // height-fog density, falloff, base height, sun lobe power
  uFogParams2: { value: new THREE.Vector4(0.0001, CAMERA_FAR * 0.55, CAMERA_FAR * 0.97, 0) }, // haze density, far fade start/end
  uSkyZenith: { value: new THREE.Color(0.15, 0.3, 0.7) },
  uSkyHorizon: { value: new THREE.Color(0.6, 0.75, 0.9) },
  uSkyGlow: { value: new THREE.Color(1, 0.7, 0.4) },
  uAmbient: { value: new THREE.Color(0.5, 0.6, 0.8) }, // sky-light colour for custom shaders
  uWind: { value: new THREE.Vector4(0.86, 0.5, 1, 0) }, // dir.x, dir.z, strength, gust phase
  uCamPos: { value: new THREE.Vector3() }, // the viewer (also valid while rendering shadow maps)
  uNight: { value: 0 }, // 0 day … 1 night (lamps, windows)
  uSeason: { value: 0 },
};

// GLSL shared by the fog chunk, the sky dome and the sea
export const ATMOS_GLSL = /* glsl */ `
uniform vec3 uFogColor;
uniform vec3 uFogSunColor;
uniform vec4 uFogParams;
uniform vec4 uFogParams2;
uniform vec3 uSunDir;

// rgb = in-scattered colour, a = opacity of the air between eye and point
vec4 atmosFog( vec3 ro, vec3 rd, float dist ) {
	float b = uFogParams.y;
	float k = rd.y * b;
	float f = abs( k ) > 1e-5 ? ( 1.0 - exp( - dist * k ) ) / k : dist;
	float amount = uFogParams.x * exp( - ( ro.y - uFogParams.z ) * b ) * f + uFogParams2.x * dist;
	float fogFactor = 1.0 - exp( - amount );
	fogFactor = max( fogFactor, smoothstep( uFogParams2.y, uFogParams2.z, dist ) );
	float s = max( dot( rd, uSunDir ), 0.0 );
	vec3 col = mix( uFogColor, uFogSunColor, pow( s, uFogParams.w ) );
	return vec4( col, clamp( fogFactor, 0.0, 1.0 ) );
}
`;

export const SKY_GLSL = /* glsl */ `
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform vec3 uSkyGlow;

vec3 skyGradient( vec3 d ) {
	float y = clamp( d.y, 0.0, 1.0 );
	vec3 c = mix( uSkyHorizon, uSkyZenith, pow( y, 0.45 ) );
	float s = max( dot( d, uSunDir ), 0.0 );
	c += uSkyGlow * ( 0.28 * pow( s, 5.0 ) + 0.9 * pow( s, 40.0 ) );
	return c;
}
// what an infinitely distant point in direction d looks like (sky seen through the air)
vec3 skyThroughAir( vec3 ro, vec3 d ) {
	vec3 c = skyGradient( d );
	float pathLen = min( 900.0 / max( d.y, 0.012 ), 60000.0 );
	vec4 fog = atmosFog( ro, vec3( d.x, max( d.y, 0.0 ), d.z ), pathLen );
	return mix( c, fog.rgb, fog.a );
}
`;

let installed = false;
export function injectAtmos(shader) {
  for (const k in ATMOS) shader.uniforms[k] = ATMOS[k];
}

// Replace three's fog chunks and make every material receive the shared uniforms.
export function installAtmosphere() {
  if (installed) return;
  installed = true;
  THREE.ShaderChunk.fog_pars_vertex = /* glsl */ `
#ifdef USE_FOG
	varying vec3 vFogWorldPos;
#endif`;
  THREE.ShaderChunk.fog_vertex = /* glsl */ `
#ifdef USE_FOG
	vFogWorldPos = cameraPosition + mvPosition.xyz * mat3( viewMatrix );
#endif`;
  THREE.ShaderChunk.fog_pars_fragment = /* glsl */ `
#ifdef USE_FOG
	varying vec3 vFogWorldPos;
	${ATMOS_GLSL}
#endif`;
  THREE.ShaderChunk.fog_fragment = /* glsl */ `
#ifdef USE_FOG
	vec3 fogRay = vFogWorldPos - cameraPosition;
	float fogDist = length( fogRay );
	vec4 fogResult = atmosFog( cameraPosition, fogRay / max( fogDist, 1e-4 ), fogDist );
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogResult.rgb, fogResult.a );
#endif`;
  THREE.Material.prototype.onBeforeCompile = function (shader) {
    injectAtmos(shader);
  };
}

// Helper: add a shader patch to a built-in material while keeping the shared uniforms.
// `key` must be unique per distinct patch (three caches programs by it).
export function patchMaterial(material, key, patch, extraUniforms = null) {
  material.onBeforeCompile = (shader) => {
    injectAtmos(shader);
    if (extraUniforms) for (const k in extraUniforms) shader.uniforms[k] = extraUniforms[k];
    patch(shader);
  };
  material.customProgramCacheKey = () => key;
  return material;
}

// ---------------------------------------------------------------------------------------------
// Time-of-day presets.  All colours are linear, scene-referred.
// ---------------------------------------------------------------------------------------------
export const PRESETS = {
  dawn: {
    label: '晨霧',
    en: 'Sea-fog morning',
    sunAz: 118, sunEl: 13, lightAz: 118, lightEl: 13,
    lightColor: [1.0, 0.86, 0.68], lightIntensity: 2.6,
    hemiSky: [0.74, 0.8, 0.86], hemiGround: [0.42, 0.4, 0.36], hemiIntensity: 1.55,
    zenith: [0.42, 0.52, 0.66], horizon: [0.8, 0.8, 0.78], glow: [1.0, 0.82, 0.6], sunDisc: 14,
    fogColor: [0.68, 0.72, 0.75], fogSunColor: [1.15, 0.98, 0.78], fogDensity: 0.0115, fogFalloff: 0.03, fogSunPow: 5, haze: 0.00016,
    cloudCover: 0.3, cloudLit: [1.0, 0.94, 0.86], cloudDark: [0.62, 0.66, 0.72],
    stars: 0, moon: 0, night: 0,
    exposure: 1.0, saturation: 0.9, contrast: 1.0, warmth: 0.02, bloom: 0.55, godrays: 1.0, vignette: 0.32,
    waterShallow: [0.3, 0.42, 0.4], waterDeep: [0.1, 0.19, 0.22], wind: 0.6,
  },
  noon: {
    label: '晴午',
    en: 'Clear noon',
    sunAz: 196, sunEl: 37, lightAz: 196, lightEl: 37,
    lightColor: [1.0, 0.955, 0.88], lightIntensity: 4.3,
    hemiSky: [0.5, 0.66, 0.98], hemiGround: [0.36, 0.34, 0.28], hemiIntensity: 1.75,
    zenith: [0.1, 0.27, 0.7], horizon: [0.5, 0.68, 0.9], glow: [0.9, 0.86, 0.75], sunDisc: 40,
    fogColor: [0.56, 0.7, 0.88], fogSunColor: [0.86, 0.9, 0.94], fogDensity: 0.0005, fogFalloff: 0.02, fogSunPow: 8, haze: 0.00008,
    cloudCover: 0.5, cloudLit: [1.0, 0.99, 0.96], cloudDark: [0.6, 0.67, 0.8],
    stars: 0, moon: 0, night: 0,
    exposure: 0.98, saturation: 1.08, contrast: 1.04, warmth: 0.0, bloom: 0.35, godrays: 0.45, vignette: 0.25,
    waterShallow: [0.12, 0.34, 0.36], waterDeep: [0.022, 0.12, 0.2], wind: 0.9,
  },
  golden: {
    label: '金秋斜陽',
    en: 'Golden autumn afternoon',
    sunAz: 243, sunEl: 12.5, lightAz: 243, lightEl: 12.5,
    lightColor: [1.0, 0.68, 0.38], lightIntensity: 4.4,
    hemiSky: [0.5, 0.58, 0.84], hemiGround: [0.6, 0.44, 0.25], hemiIntensity: 1.45,
    zenith: [0.16, 0.29, 0.58], horizon: [0.72, 0.62, 0.58], glow: [1.12, 0.56, 0.2], sunDisc: 30,
    fogColor: [0.56, 0.56, 0.66], fogSunColor: [0.98, 0.6, 0.3], fogDensity: 0.001, fogFalloff: 0.022, fogSunPow: 6, haze: 0.00011,
    cloudCover: 0.54, cloudLit: [1.25, 0.84, 0.52], cloudDark: [0.44, 0.4, 0.52],
    stars: 0, moon: 0, night: 0,
    exposure: 0.96, saturation: 1.08, contrast: 1.06, warmth: 0.05, bloom: 0.6, godrays: 0.9, vignette: 0.34,
    waterShallow: [0.2, 0.36, 0.34], waterDeep: [0.04, 0.12, 0.18], wind: 0.8,
  },
  night: {
    label: '華燈夜色',
    en: 'Lamplit night',
    sunAz: 252, sunEl: -9, lightAz: 148, lightEl: 40,
    lightColor: [0.55, 0.68, 1.0], lightIntensity: 0.34,
    hemiSky: [0.17, 0.24, 0.5], hemiGround: [0.1, 0.085, 0.08], hemiIntensity: 0.62,
    zenith: [0.012, 0.022, 0.07], horizon: [0.06, 0.085, 0.17], glow: [0.5, 0.2, 0.1], sunDisc: 0,
    fogColor: [0.045, 0.06, 0.12], fogSunColor: [0.3, 0.16, 0.14], fogDensity: 0.0014, fogFalloff: 0.022, fogSunPow: 3, haze: 0.00014,
    cloudCover: 0.42, cloudLit: [0.16, 0.2, 0.33], cloudDark: [0.03, 0.04, 0.08],
    stars: 1, moon: 1, night: 1,
    exposure: 1.25, saturation: 1.0, contrast: 1.03, warmth: -0.02, bloom: 0.9, godrays: 0.0, vignette: 0.42,
    waterShallow: [0.03, 0.07, 0.11], waterDeep: [0.006, 0.018, 0.045], wind: 0.5,
  },
};
export const PRESET_ORDER = ['dawn', 'noon', 'golden', 'night'];

function lerpState(a, b, t, out) {
  for (const k in a) {
    const va = a[k],
      vb = b[k];
    if (typeof va === 'number') out[k] = lerp(va, vb, t);
    else if (Array.isArray(va)) {
      const o = out[k] || (out[k] = [0, 0, 0]);
      for (let i = 0; i < va.length; i++) o[i] = lerp(va[i], vb[i], t);
    }
  }
  // take the short way round for azimuths
  for (const k of ['sunAz', 'lightAz']) {
    let d = b[k] - a[k];
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    out[k] = a[k] + d * t;
  }
  return out;
}

function dirFromAzEl(az, el, out) {
  const a = (az * Math.PI) / 180,
    e = (el * Math.PI) / 180;
  // azimuth clockwise from north (−Z); east = +X
  return out.set(Math.sin(a) * Math.cos(e), Math.sin(e), -Math.cos(a) * Math.cos(e)).normalize();
}

export class Atmosphere {
  constructor(scene) {
    installAtmosphere();
    this.scene = scene;
    scene.fog = new THREE.FogExp2(0x8899aa, 0.0001); // only switches USE_FOG on; the maths is ours

    this.sun = new SunLight(0xffffff, 1);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.camera.far = 300;
    this.sun.shadow.bias = -0.00035;
    this.sun.shadow.normalBias = 0.12;
    this.sun.shadow.radius = 2.2;
    scene.add(this.sun);

    this.hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(this.hemi);

    this.name = 'golden';
    this.state = {};
    lerpState(PRESETS.golden, PRESETS.golden, 0, this.state);
    this._from = null;
    this._to = null;
    this._t = 1;
    this._dur = 1;
    this.moonDir = new THREE.Vector3();
    this.listeners = [];
    this.apply();
  }

  setShadowQuality(size, distance) {
    this.sun.shadow.mapSize.set(size, size);
    this.sun.shadow.camera.far = distance;
    if (this.sun.shadow.map) {
      this.sun.shadow.map.dispose();
      this.sun.shadow.map = null;
    }
  }

  set(name, seconds = 0) {
    if (!PRESETS[name]) return;
    this.name = name;
    if (seconds <= 0) {
      lerpState(PRESETS[name], PRESETS[name], 0, this.state);
      this._t = 1;
      this.apply();
    } else {
      this._from = lerpState(this.state, this.state, 0, {});
      this._to = PRESETS[name];
      this._t = 0;
      this._dur = seconds;
    }
    for (const fn of this.listeners) fn(name);
  }

  get transitioning() {
    return this._t < 1;
  }

  update(dt, time) {
    ATMOS.uTime.value = time;
    if (this._t < 1) {
      this._t = Math.min(1, this._t + dt / this._dur);
      const t = this._t;
      const e = t * t * (3 - 2 * t);
      lerpState(this._from, this._to, e, this.state);
      // dim the key light while it swings between sun and moon
      const swing = Math.abs(this._from.night - this._to.night);
      this.state.lightIntensity *= 1 - swing * Math.sin(Math.PI * e) * 0.9;
      this.apply();
    }
    // gusting wind
    const s = this.state;
    const gust = 0.72 + 0.28 * Math.sin(time * 0.31) * Math.sin(time * 0.17 + 1.3) + 0.12 * Math.sin(time * 0.9);
    ATMOS.uWind.value.z = s.wind * gust;
    ATMOS.uWind.value.w = time;
  }

  apply() {
    const s = this.state;
    dirFromAzEl(s.sunAz, s.sunEl, ATMOS.uSunDir.value);
    dirFromAzEl(s.lightAz, s.lightEl, ATMOS.uLightDir.value);
    this.moonDir.copy(ATMOS.uLightDir.value);
    this.sun.position.copy(ATMOS.uLightDir.value);
    this.sun.color.setRGB(s.lightColor[0], s.lightColor[1], s.lightColor[2]);
    this.sun.intensity = s.lightIntensity;
    ATMOS.uLightColor.value.setRGB(s.lightColor[0], s.lightColor[1], s.lightColor[2]).multiplyScalar(s.lightIntensity);
    this.hemi.color.setRGB(s.hemiSky[0], s.hemiSky[1], s.hemiSky[2]);
    this.hemi.groundColor.setRGB(s.hemiGround[0], s.hemiGround[1], s.hemiGround[2]);
    this.hemi.intensity = s.hemiIntensity;
    ATMOS.uAmbient.value.setRGB(s.hemiSky[0], s.hemiSky[1], s.hemiSky[2]).multiplyScalar(s.hemiIntensity / Math.PI);
    ATMOS.uFogColor.value.setRGB(s.fogColor[0], s.fogColor[1], s.fogColor[2]);
    ATMOS.uFogSunColor.value.setRGB(s.fogSunColor[0], s.fogSunColor[1], s.fogSunColor[2]);
    ATMOS.uFogParams.value.set(s.fogDensity, s.fogFalloff, 0, s.fogSunPow);
    ATMOS.uFogParams2.value.x = s.haze;
    ATMOS.uSkyZenith.value.setRGB(s.zenith[0], s.zenith[1], s.zenith[2]);
    ATMOS.uSkyHorizon.value.setRGB(s.horizon[0], s.horizon[1], s.horizon[2]);
    ATMOS.uSkyGlow.value.setRGB(s.glow[0], s.glow[1], s.glow[2]);
    ATMOS.uNight.value = saturate(s.night);
  }
}
