// Things that move: leaves drifting down along the autumn streets, gulls wheeling over the
// bay, and the sailing dinghies of the "sailing city" out on the water.

import * as THREE from 'three';
import { ATMOS_GLSL, injectAtmos } from './atmosphere.js';
import { BOUNDS, shoreZ, LANDMARKS } from './layout.js';
import { GeoBuilder } from '../core/geo.js';
import { RNG, TAU } from '../core/math.js';

// ---------------------------------------------------------------------------------------------
// Falling leaves: a box of instanced quads that wraps around the visitor. Where leaves fall,
// how many and what colour comes from the leaf map baked by the planting plan.
// ---------------------------------------------------------------------------------------------
export function buildFallingLeaves(scene, ocean, leafMap, count = 1500) {
  const quad = new THREE.PlaneGeometry(1, 1);
  const geo = new THREE.InstancedBufferGeometry();
  geo.index = quad.index;
  geo.setAttribute('position', quad.getAttribute('position'));
  geo.setAttribute('uv', quad.getAttribute('uv'));
  const seed = new Float32Array(count * 4);
  const rng = new RNG(1212);
  for (let i = 0; i < count * 4; i++) seed[i] = rng.next();
  geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seed, 4));
  geo.instanceCount = count;

  const uniforms = {
    tDepth: { value: ocean.depthTexture },
    uGrid: ocean.uniforms.uGrid,
    tLeafMap: { value: leafMap },
    uMapRect: { value: new THREE.Vector4(BOUNDS.minX, BOUNDS.minZ, 1 / (BOUNDS.maxX - BOUNDS.minX), 1 / (BOUNDS.maxZ - BOUNDS.minZ)) },
    uAmount: { value: 1 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: /* glsl */ `
			attribute vec4 aSeed;
			uniform float uTime;
			uniform vec3 uCamPos;
			uniform vec4 uWind;
			uniform sampler2D tDepth;
			uniform vec4 uGrid;
			uniform sampler2D tLeafMap;
			uniform vec4 uMapRect;
			uniform float uAmount;
			varying vec3 vColor;
			varying vec2 vUv;
			varying vec3 vNrm;
			varying vec3 vWorld;
			const vec3 BOX = vec3( 62.0, 0.0, 62.0 );
			void main() {
				vUv = uv;
				vec2 base = aSeed.xy * BOX.xz;
				vec2 rel = mod( base - uCamPos.xz + BOX.xz * 0.5, BOX.xz ) - BOX.xz * 0.5;
				vec2 wxz = uCamPos.xz + rel;
				float t = uTime * ( 0.5 + aSeed.z * 0.45 ) + aSeed.w * 61.0;
				float cycle = fract( t / 8.5 );
				// which fall of this slot are we in → re-randomise each time round
				float gen = floor( t / 8.5 );
				float r1 = fract( sin( gen * 12.9898 + aSeed.x * 78.233 ) * 43758.5453 );
				wxz += uWind.xy * uWind.z * cycle * 6.0;
				wxz += vec2( sin( t * 1.1 + aSeed.x * 20.0 ), cos( t * 0.83 + aSeed.y * 20.0 ) ) * 0.75;
				float ground = texture2D( tDepth, ( wxz - uGrid.xy ) * uGrid.zw ).r;
				float top = 4.0 + r1 * 8.5;
				float y = ground + 0.06 + top * ( 1.0 - cycle );
				vec4 lm = texture2D( tLeafMap, ( wxz - uMapRect.xy ) * uMapRect.zw );
				float present = step( fract( aSeed.x * 91.7 + r1 * 13.3 ), lm.a * uAmount );
				// only where it is land
				present *= step( 0.5, ground );
				// tumble
				float a1 = t * ( 2.2 + aSeed.x * 3.0 ) + aSeed.y * 6.0;
				float a2 = t * ( 1.4 + aSeed.y * 2.2 ) + aSeed.x * 6.0;
				float c1 = cos( a1 ), s1 = sin( a1 ), c2 = cos( a2 ), s2 = sin( a2 );
				float size = ( 0.11 + 0.07 * aSeed.z ) * present * smoothstep( 0.0, 0.05, cycle );
				vec3 p = vec3( position.xy * size, 0.0 );
				p = vec3( p.x, p.y * c2, p.y * s2 );
				p = vec3( p.x * c1 + p.z * s1, p.y, - p.x * s1 + p.z * c1 );
				vec3 n = vec3( s1 * c2, - s2, c1 * c2 );
				vNrm = n;
				vec3 wp = vec3( wxz.x, y, wxz.y ) + p;
				vWorld = wp;
				vColor = lm.rgb * ( 0.8 + 0.4 * aSeed.w );
				gl_Position = projectionMatrix * viewMatrix * vec4( wp, 1.0 );
			}`,
    fragmentShader: /* glsl */ `
			uniform vec3 uLightDir;
			uniform vec3 uLightColor;
			uniform vec3 uAmbient;
			varying vec3 vColor;
			varying vec2 vUv;
			varying vec3 vNrm;
			varying vec3 vWorld;
			${ATMOS_GLSL}
			void main() {
				// a little fan-shaped blade
				vec2 q = vUv - vec2( 0.5, 0.12 );
				float r = length( q );
				float ang = abs( atan( q.x, q.y ) );
				float leaf = step( r, 0.78 - 0.1 * cos( ang * 6.0 ) ) * step( ang, 1.0 );
				leaf = max( leaf, step( abs( q.x ), 0.03 ) * step( - 0.12, q.y ) * step( q.y, 0.1 ) );
				if ( leaf < 0.5 ) discard;
				vec3 V = normalize( cameraPosition - vWorld );
				float ndl = abs( dot( normalize( vNrm ), uLightDir ) );
				float back = pow( max( dot( V, - uLightDir ), 0.0 ), 3.0 );
				vec3 col = vColor * ( uAmbient * 1.1 + uLightColor * ( 0.12 + 0.2 * ndl + 0.35 * back ) );
				vec3 ray = vWorld - cameraPosition;
				float dist = length( ray );
				vec4 fog = atmosFog( cameraPosition, ray / dist, dist );
				gl_FragColor = vec4( mix( col, fog.rgb, fog.a ), 1.0 );
			}`,
    side: THREE.DoubleSide,
    fog: false,
  });
  mat.onBeforeCompile = (shader) => injectAtmos(shader);
  mat.customProgramCacheKey = () => 'fallingLeaves';
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.name = 'falling-leaves';
  scene.add(mesh);
  return { mesh, uniforms };
}

// ---------------------------------------------------------------------------------------------
// Gulls
// ---------------------------------------------------------------------------------------------
export function buildGulls(scene, count = 34) {
  // one bird, wings along ±X: body, and two-segment wings; aWing = 0 at the body … 1 at the tips
  const pos = [],
    wing = [],
    col = [],
    idx = [];
  const v = (x, y, z, w, c) => {
    pos.push(x, y, z);
    wing.push(w);
    col.push(c, c, c);
    return pos.length / 3 - 1;
  };
  // body (a flat diamond with a little depth)
  const b0 = v(0, 0, -0.26, 0, 0.95),
    b1 = v(0.06, 0, 0, 0, 0.95),
    b2 = v(0, 0, 0.24, 0, 0.9),
    b3 = v(-0.06, 0, 0, 0, 0.95),
    b4 = v(0, 0.05, -0.02, 0, 1.0);
  idx.push(b0, b4, b1, b1, b4, b2, b2, b4, b3, b3, b4, b0, b0, b1, b3, b1, b2, b3);
  for (const s of [-1, 1]) {
    const r0 = v(s * 0.05, 0.01, -0.1, 0, 0.92),
      r1 = v(s * 0.05, 0.01, 0.08, 0, 0.92),
      m0 = v(s * 0.36, 0.02, -0.12, 0.5, 0.82),
      m1 = v(s * 0.36, 0.02, 0.06, 0.5, 0.82),
      t0 = v(s * 0.72, 0, -0.03, 1, 0.25),
      t1 = v(s * 0.66, 0, 0.07, 1, 0.3);
    idx.push(r0, m0, r1, r1, m0, m1, m0, t0, m1, m1, t0, t1);
  }
  const geo = new THREE.InstancedBufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('aWing', new THREE.Float32BufferAttribute(wing, 1));
  geo.setAttribute('aShade', new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  const orbit = new Float32Array(count * 4),
    par = new Float32Array(count * 4);
  const rng = new RNG(7007);
  const H = LANDMARKS.huashi;
  const homes = [
    [-150, 250, 70],
    [0, 235, 60],
    [90, 262, 45],
    [H.x - 10, H.z + 40, 45],
    [300, 290, 60],
    [390, 330, 55],
    [-280, 270, 60],
    [60, 330, 110],
  ];
  for (let i = 0; i < count; i++) {
    const h = homes[i % homes.length];
    orbit.set([h[0] + rng.range(-25, 25), rng.range(7, 34), h[1] + rng.range(-20, 25), h[2] * rng.range(0.35, 1)], i * 4);
    par.set([rng.range(5.5, 9) * rng.sign(), rng.range(0, TAU), rng.range(5, 7.5), rng.range(0.85, 1.25)], i * 4);
  }
  geo.setAttribute('aOrbit', new THREE.InstancedBufferAttribute(orbit, 4));
  geo.setAttribute('aPar', new THREE.InstancedBufferAttribute(par, 4));
  geo.instanceCount = count;
  const mat = new THREE.ShaderMaterial({
    vertexShader: /* glsl */ `
			attribute float aWing;
			attribute vec3 aShade;
			attribute vec4 aOrbit;
			attribute vec4 aPar;
			uniform float uTime;
			varying vec3 vShade;
			varying vec3 vWorld;
			void main() {
				float speed = aPar.x;
				float ang = aPar.y + uTime * speed / aOrbit.w;
				// a wobbling, slowly breathing circle
				float rad = aOrbit.w * ( 1.0 + 0.25 * sin( uTime * 0.11 + aPar.y * 3.0 ) );
				vec3 c = vec3( aOrbit.x + cos( ang ) * rad, aOrbit.y + 3.0 * sin( uTime * 0.23 + aPar.y * 5.0 ), aOrbit.z + sin( ang ) * rad );
				vec2 fwd = vec2( - sin( ang ), cos( ang ) ) * sign( speed );
				// flap in bursts, glide in between
				float burst = smoothstep( 0.1, 0.7, sin( uTime * 0.37 + aPar.y * 7.0 ) );
				float flap = sin( uTime * aPar.z + aPar.y * 11.0 ) * mix( 0.1, 0.55, burst );
				vec3 p = position * aPar.w * 1.5;
				p.y += flap * aWing * aWing * 0.75 * aPar.w + aWing * 0.1;
				// bank into the turn
				float bank = 0.35 * sign( speed );
				float cb = cos( bank ), sb = sin( bank );
				p = vec3( p.x * cb - p.y * sb, p.x * sb + p.y * cb, p.z );
				// local +z → travel direction
				vec3 right = vec3( fwd.y, 0.0, - fwd.x );
				vec3 w = c + right * p.x + vec3( 0.0, p.y, 0.0 ) + vec3( fwd.x, 0.0, fwd.y ) * ( - p.z );
				vShade = aShade;
				vWorld = w;
				gl_Position = projectionMatrix * viewMatrix * vec4( w, 1.0 );
			}`,
    fragmentShader: /* glsl */ `
			uniform vec3 uLightColor;
			uniform vec3 uAmbient;
			varying vec3 vShade;
			varying vec3 vWorld;
			${ATMOS_GLSL}
			void main() {
				vec3 col = vShade * ( uAmbient * 1.6 + uLightColor * 0.22 );
				vec3 ray = vWorld - cameraPosition;
				float dist = length( ray );
				vec4 fog = atmosFog( cameraPosition, ray / dist, dist );
				gl_FragColor = vec4( mix( col, fog.rgb, fog.a ), 1.0 );
			}`,
    side: THREE.DoubleSide,
    fog: false,
  });
  mat.onBeforeCompile = (shader) => injectAtmos(shader);
  mat.customProgramCacheKey = () => 'gulls';
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.name = 'gulls';
  scene.add(mesh);
  return mesh;
}

// ---------------------------------------------------------------------------------------------
// Sailing dinghies
// ---------------------------------------------------------------------------------------------
export function buildSailboats(scene) {
  const boats = [];
  const rng = new RNG(470);
  const mk = (sailCol) => {
    const g = new GeoBuilder();
    // hull: a shallow wedge
    g.setColor(0.93, 0.93, 0.9);
    const L = 6.4,
      W = 2.1,
      Hh = 0.8;
    const deck = [[-L / 2, W * 0.42], [L * 0.1, W / 2], [L / 2, 0], [L * 0.1, -W / 2], [-L / 2, -W * 0.42]];
    g.prism(deck.map((p) => [p[0], p[1]]), -0.25, Hh, { capTop: true });
    g.setColor(0.25, 0.3, 0.38);
    g.box(-0.4, Hh + 0.18, 0, 1.9, 0.36, 1.1);
    // mast and boom
    g.setColor(0.8, 0.8, 0.8);
    g.cylinder(0.6, Hh, 0, 0.05, 0.035, 8.6, 5);
    g.box(-0.9, Hh + 1.05, 0, 3.0, 0.06, 0.06);
    const geo = g.build();
    const hull = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
    // sails (double sided, slightly bellied)
    const s = new GeoBuilder();
    s.setColor(...sailCol);
    const y0 = Hh + 1.1,
      y1 = Hh + 8.5;
    s.tri3([0.55, y0, 0], [-2.35, y0, 0.25], [0.55, y1, 0]);
    s.setColor(sailCol[0] * 0.96, sailCol[1] * 0.96, sailCol[2] * 0.96);
    s.tri3([0.7, y0 - 0.2, 0], [3.1, Hh + 0.2, 0.2], [0.65, y1 - 1.4, 0]);
    const sail = new THREE.Mesh(s.build(), new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }));
    const grp = new THREE.Group();
    grp.add(hull, sail);
    return grp;
  };
  const sails = [[1, 1, 0.97], [1, 1, 0.97], [0.98, 0.96, 0.9], [0.92, 0.3, 0.22], [1, 1, 0.97], [0.2, 0.42, 0.72], [1, 0.97, 0.9], [0.96, 0.78, 0.25], [1, 1, 0.97]];
  sails.forEach((c, i) => {
    const grp = mk(c);
    // slow elliptical beats well clear of the shore
    const cx = rng.range(-320, 420),
      cz = shoreZ(Math.max(-330, Math.min(420, cx))) + rng.range(170, 620);
    const b = { grp, cx, cz, rx: rng.range(70, 190), rz: rng.range(40, 120), speed: rng.range(1.6, 3.0) * rng.sign(), phase: rng.range(0, TAU), heel: rng.range(0.1, 0.24) };
    scene.add(grp);
    boats.push(b);
  });
  function update(time) {
    for (const b of boats) {
      const a = b.phase + (time * b.speed) / ((b.rx + b.rz) * 0.5);
      const x = b.cx + Math.cos(a) * b.rx,
        z = b.cz + Math.sin(a) * b.rz;
      const dx = -Math.sin(a) * b.rx * Math.sign(b.speed),
        dz = Math.cos(a) * b.rz * Math.sign(b.speed);
      b.grp.position.set(x, 0.05 + 0.12 * Math.sin(time * 0.9 + b.phase * 3), z);
      // hull's +x is the bow
      b.grp.rotation.set(b.heel + 0.04 * Math.sin(time * 0.7 + b.phase), Math.atan2(-dz, dx), 0.03 * Math.sin(time * 1.1 + b.phase), 'YXZ');
    }
  }
  update(0);
  return { boats, update };
}
