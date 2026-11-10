// 青島八大關 — entry point: builds the district step by step behind the title screen,
// then runs the frame loop and wires the interface to the world.

import * as THREE from 'three';
import { Atmosphere, ATMOS, CAMERA_FAR, PRESETS, PRESET_ORDER } from './world/atmosphere.js';
import { Sky } from './world/sky.js';
import { Ocean } from './world/ocean.js';
import { buildTerrain, litterUniforms } from './world/terrain.js';
import { buildRoads } from './world/roads.js';
import { Forest } from './world/trees.js';
import { plantAll } from './world/planting.js';
import { buildBuildings } from './world/buildings.js';
import { buildProps } from './world/props.js';
import { buildBackdrop } from './world/backdrop.js';
import { buildFallingLeaves, buildGulls, buildSailboats } from './world/life.js';
import { PostFX } from './fx/post.js';
import { Player, Colliders } from './player/controls.js';
import { Tour } from './player/tour.js';
import { HUD } from './ui/hud.js';
import { Ambient } from './audio/ambient.js';
import { setMaxAnisotropy } from './core/textures.js';
import { ROAD_BY_ID, heightAt, coastDist } from './world/layout.js';
import { lerp, saturate } from './core/math.js';

const params = new URLSearchParams(location.search);
const $ = (s) => document.querySelector(s);
const nextPaint = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

const QUALITY = {
  high: { maxPixels: 3.3e6, prCap: 2, samples: 4, shadow: 2048, shadowDist: 300, leaf: 1, godrays: true },
  medium: { maxPixels: 2.0e6, prCap: 1.5, samples: 2, shadow: 1536, shadowDist: 240, leaf: 0.72, godrays: true },
  low: { maxPixels: 1.15e6, prCap: 1, samples: 0, shadow: 1024, shadowDist: 170, leaf: 0.45, godrays: false },
};
const QUALITY_ORDER = ['high', 'medium', 'low'];
// per season: fallen-leaf cover, drifting leaves, lawn dryness
const SEASON = [
  { litter: 0.1, fall: 0.0, dry: 0.1, name: '春 · 碧桃海棠' },
  { litter: 0.04, fall: 0.0, dry: 0.0, name: '夏 · 紫薇濃蔭' },
  { litter: 1.0, fall: 1.0, dry: 1.0, name: '秋 · 銀杏楓紅' },
  { litter: 0.5, fall: 0.06, dry: 1.5, name: '冬 · 雪松常青' },
];

class App {
  constructor() {
    this.canvas = $('#scene');
    this.lastFrame = 0;
    this.time = 0;
    this.frames = 0;
    this.ready = false;
    this.started = false;
    this.quality = QUALITY[params.get('q')] ? params.get('q') : 'high';
    this.autoQuality = !params.get('q');
    this.season = 2;
    this._seasonCap = null;
    this._seasonT = 1;
    this.slow = 0;
    this.shotMode = params.has('shot');
  }

  async init() {
    const renderer = (this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: false,
      alpha: false,
    }));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    setMaxAnisotropy(Math.min(8, renderer.capabilities.getMaxAnisotropy()));

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.25, CAMERA_FAR);
    this.scene.add(this.camera);

    this.atmosphere = new Atmosphere(this.scene);
    this.post = new PostFX(renderer, { samples: QUALITY[this.quality].samples });
    this.colliders = new Colliders(8);
    this.player = new Player(this.camera, this.canvas, this.colliders);
    this.audio = new Ambient();

    const steps = [
      ['鋪開海與天', () => {
        this.sky = new Sky(this.scene, this.atmosphere);
        this.ocean = new Ocean(this.scene, this.atmosphere);
      }],
      ['堆起山勢與沙灘', () => {
        this.terrain = buildTerrain(this.scene);
      }],
      ['修築十條關路', () => {
        this.roads = buildRoads(this.scene);
      }],
      ['一關一樹', () => {
        this.forest = new Forest();
        this.planting = plantAll(this.forest, this.colliders, this.scene);
      }],
      ['蓋起萬國建築', () => {
        this.buildings = buildBuildings(this.scene, this.colliders, this.forest);
      }],
      ['砌石牆 · 立街燈', () => {
        this.props = buildProps(this.scene, this.colliders, this.forest);
      }],
      ['遠山 · 帆影 · 海鷗', () => {
        this.backdrop = buildBackdrop(this.scene);
        this.gulls = buildGulls(this.scene);
        this.boats = buildSailboats(this.scene);
        this.leaves = buildFallingLeaves(this.scene, this.ocean, this.planting.leafMap);
      }],
      ['枝葉成蔭', () => {
        const stats = this.forest.build(this.scene);
        console.info('forest', JSON.stringify(stats));
        this.terrain.paintLitter(this.planting.litterAt);
      }],
    ];
    for (let i = 0; i < steps.length; i++) {
      this.progress(i / steps.length, steps[i][0] + '…');
      await nextPaint();
      steps[i][1]();
    }
    this.progress(1, '');

    this.tour = new Tour(this.camera);
    this.hud = new HUD(this);
    this.applyQuality();
    if (PRESETS[params.get('preset')]) this.atmosphere.set(params.get('preset'), 0);
    const season = Number.parseInt(params.get('season'), 10);
    if (season >= 0 && season <= 3) this.setSeason(season, true);
    this.applySeasonUniforms(this.season, this.season, 1);
    this.hud.syncButtons();

    window.addEventListener('resize', () => this.resize());
    this.bindKeys();
    this.player.onLockChange = (locked) => {
      if (!locked && this.started && !this.hud.overlayOpen && !this.tour.active && !document.body.classList.contains('touch')) this.hud.toast('點擊畫面，繼續遊覽', 3.5);
    };
    this.player.onModeChange = () => this.hud.syncButtons();
    this.player.onBlocked = (why) => this.hud.toast(why === 'water' ? '海面上無法步行 · 請先飛回岸上' : '這裡已在景區之外 · 請先飛回八大關', 3);

    // the title screen plays over a slow flight
    this.tour.start(0.02);

    const cam = params.get('cam');
    if (cam || this.shotMode) {
      // development / screenshot entry: skip the title
      this.tour.stop();
      this.started = true;
      $('#intro').classList.add('hidden');
      if (params.has('ui')) this.hud.start();
      this.player.enabled = true;
      if (cam) {
        const [x, y, z, h, p] = cam.split(',').map(Number);
        this.player.mode = 'fly';
        this.player.setPose(x, y, z, h || 0, p || 0);
      } else this.placeAtStart();
    }

    this.ready = true;
    $('#intro').classList.remove('loading');
    $('#progress').style.opacity = 0;
    const start = $('#start');
    start.disabled = false;
    start.addEventListener('click', () => this.start());
    renderer.setAnimationLoop(() => this.frame());
  }

  progress(f, label) {
    $('#loadbar').style.transform = `scaleX(${f})`;
    $('#loadlabel').textContent = label;
  }

  placeAtStart() {
    // on Juyongguan Rd among the ginkgos, looking west into the low sun
    const r = ROAD_BY_ID.juyong;
    let p = r.pts[0];
    for (const q of r.pts) if (Math.abs(q.x - 62) < Math.abs(p.x - 62)) p = q;
    this.player.place(p.x, p.z + 0.8, 268);
  }

  async start() {
    if (this.started) return;
    this.started = true;
    this.audio.start();
    // ask for the pointer while we are still inside the click (some browsers insist on it)
    this.player.requestLock(true);
    const fade = $('#fade');
    fade.classList.add('on');
    $('#intro').classList.add('hidden');
    await new Promise((r) => setTimeout(r, 750));
    this.tour.stop();
    this.placeAtStart();
    this.hud.start();
    this.player.enabled = !this.hud.overlayOpen;
    this.hud.syncButtons();
    fade.classList.remove('on');
    this.adaptAt = this.time + 4;
  }

  // ------------------------------------------------------------------ actions
  setPreset(name) {
    if (!PRESETS[name] || name === this.atmosphere.name) return;
    this.atmosphere.set(name, 4.5);
    this.hud.syncButtons();
    this.hud.toast(PRESETS[name].label);
  }

  setSeason(i, instant = false) {
    if (!Number.isInteger(i)) return;
    i = ((i % 4) + 4) % 4;
    if (i === this.season && !instant) return;
    // blend from whatever is on screen right now, so changing again mid-way never snaps
    this.forest.capture();
    this._seasonCap = { litter: litterUniforms.uLitterAmount.value, dry: litterUniforms.uDry.value, fall: this.leaves.uniforms.uAmount.value };
    this.season = i;
    this._seasonT = instant ? 1 : 0;
    if (instant) this.applySeasonUniforms(i, i, 1);
    if (this.hud) {
      this.hud.syncButtons();
      if (!instant) this.hud.toast(SEASON[i].name);
    }
  }

  applySeasonUniforms(a, b, t) {
    this.forest.blendSeason(a, b, t);
    litterUniforms.uLitterAmount.value = lerp(SEASON[a].litter, SEASON[b].litter, t);
    litterUniforms.uDry.value = lerp(SEASON[a].dry, SEASON[b].dry, t);
    this.leaves.uniforms.uAmount.value = lerp(SEASON[a].fall, SEASON[b].fall, t);
  }

  toggleTour() {
    if (!this.started) return;
    if (this.tour.active) {
      this.tour.stop();
      const c = this.camera.position,
        o = this.tour.pose();
      this.player.mode = 'fly';
      this.player.setPose(c.x, c.y, c.z, o.heading, o.pitch);
      this.player.enabled = !this.hud.overlayOpen;
      this.hud.toast('由你接手 · 飛行中');
    } else {
      this.tour.start();
      this.player.enabled = false;
      this.hud.toast('自動導覽 · 按 T 接手', 3);
    }
    this.hud.syncButtons();
  }

  toggleFly() {
    if (this.tour.active) return this.toggleTour();
    if (this.player.setMode(this.player.mode === 'fly' ? 'walk' : 'fly')) this.hud.toast(this.player.mode === 'fly' ? '飛行 · E 升 Q 降' : '步行');
  }

  toggleSound() {
    const on = this.audio.toggle();
    this.hud.syncButtons();
    this.hud.toast(on ? '環境聲 開' : '環境聲 關', 1.4);
  }

  cycleQuality() {
    this.autoQuality = false;
    this.quality = QUALITY_ORDER[(QUALITY_ORDER.indexOf(this.quality) + 1) % QUALITY_ORDER.length];
    this.applyQuality();
    this.hud.syncButtons();
  }

  applyQuality() {
    const q = QUALITY[this.quality];
    const shadow = Number(params.get('shadow')) || q.shadow;
    this.atmosphere.setShadowQuality(shadow, q.shadowDist);
    this.forest.setFraction(Number(params.get('leaf')) || q.leaf);
    this.post.setSamples(q.samples);
    this.forest.setAlphaToCoverage(this.post.samples > 0 && !params.has('noa2c'));
    this.post.enabled.godrays = q.godrays;
    this.resize();
  }

  async teleport(x, z) {
    const fade = $('#fade');
    fade.classList.add('on');
    await new Promise((r) => setTimeout(r, 500));
    if (this.tour.active) {
      this.tour.stop();
      this.hud.syncButtons();
    }
    const heading = this.player.heading;
    this.player.place(x, z, heading);
    this.player.enabled = !this.hud.overlayOpen;
    this.hud.syncButtons();
    fade.classList.remove('on');
  }

  bindKeys() {
    window.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      if (e.code === 'Escape') {
        this.hud.toggle('bigmap', false);
        this.hud.toggle('help', false);
        return;
      }
      if (!this.started) {
        if (e.code === 'Enter' && this.ready) this.start();
        return;
      }
      const d = /^Digit([1-4])$/.exec(e.code);
      if (d) this.setPreset(PRESET_ORDER[Number(d[1]) - 1]);
      else if (e.code === 'KeyT') this.toggleTour();
      else if (e.code === 'KeyM') this.hud.toggle('bigmap');
      else if (e.code === 'KeyH') this.hud.toggle('help');
      else if (e.code === 'KeyN') this.toggleSound();
      else if (e.code === 'KeyP') {
        this.photo = !this.photo;
        this.hud.setPhoto(this.photo);
        if (this.photo) this.hud.toast('拍照模式 · 再按 P 顯示介面', 1.6);
      } else if (e.code === 'BracketRight') this.setSeason(this.season + 1);
      else if (e.code === 'BracketLeft') this.setSeason(this.season - 1);
    });
  }

  resize() {
    const w = window.innerWidth,
      h = window.innerHeight;
    const q = QUALITY[this.quality];
    let pr = Math.min(window.devicePixelRatio || 1, q.prCap);
    pr = Math.min(pr, Math.sqrt(q.maxPixels / (w * h)));
    pr *= Number(params.get('scale')) || 1;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.post.setSize(Math.max(2, Math.round(w * pr)), Math.max(2, Math.round(h * pr)));
  }

  // step the quality down if this machine cannot keep up
  adapt(dt) {
    if (!this.autoQuality || !this.started || this.time < (this.adaptAt || 0) || document.hidden) return;
    // a single long frame is a hitch (tab switch, shader compile), not a slow machine
    if (dt > 0.25) return;
    // below ~27 fps counts as slow; a steady 30 Hz display does not
    this.slow = dt > 1 / 27 ? this.slow + dt : Math.max(0, this.slow - dt * 2);
    if (this.slow > 2.2) {
      this.slow = 0;
      const i = QUALITY_ORDER.indexOf(this.quality);
      if (i < QUALITY_ORDER.length - 1) {
        this.quality = QUALITY_ORDER[i + 1];
        this.applyQuality();
        this.hud.syncButtons();
        this.hud.toast('已自動調低畫質，讓畫面更流暢', 2.6);
        this.adaptAt = this.time + 3;
      } else this.autoQuality = false;
    }
  }

  frame() {
    const now = performance.now();
    const rawDt = this.lastFrame ? (now - this.lastFrame) / 1000 : 1 / 60;
    this.lastFrame = now;
    const dt = Math.min(rawDt, 0.1);
    this.time += dt;
    const cam = this.camera;

    if (this.tour.active) this.tour.update(dt);
    else this.player.update(dt);

    // keep depth precision sensible when high above the ground
    const alt = cam.position.y - Math.max(heightAt(cam.position.x, cam.position.z), 0);
    const near = alt > 30 ? 1.2 : 0.25;
    if (near !== cam.near) {
      cam.near = near;
      cam.updateProjectionMatrix();
    }

    if (this._seasonT < 1) {
      this._seasonT = Math.min(1, this._seasonT + dt / 2.6);
      const t = this._seasonT,
        e = t * t * (3 - 2 * t),
        to = SEASON[this.season],
        cap = this._seasonCap;
      this.forest.blendFromCapture(this.season, e);
      litterUniforms.uLitterAmount.value = lerp(cap.litter, to.litter, e);
      litterUniforms.uDry.value = lerp(cap.dry, to.dry, e);
      this.leaves.uniforms.uAmount.value = lerp(cap.fall, to.fall, e);
    }

    ATMOS.uCamPos.value.copy(cam.position);
    this.atmosphere.update(dt, this.time);
    this.sky.update();
    this.ocean.update(cam);
    const night = ATMOS.uNight.value;
    this.props.updateLamps(dt, cam.position, night, this.post.h * 0.83);
    this.buildings.mats.window.emissiveIntensity = night * 2.4;
    this.backdrop.update(dt, this.time, night);
    this.boats.update(this.time);
    this.hud.update(dt);

    if (this.audio.enabled) {
      const p = cam.position;
      const lit = this.planting.litterAt(p.x, p.z);
      this.audio.update(dt, {
        coast: coastDist(p.x, p.z),
        gust: ATMOS.uWind.value.z,
        night,
        fog: saturate(this.atmosphere.state.fogDensity / 0.012),
        walking: !this.tour.active && this.player.mode === 'walk' && this.player.onGround,
        speed: this.player.speed,
        bob: this.player.bob,
        leaves: lit ? lit[3] * litterUniforms.uLitterAmount.value : 0,
        altitude: alt,
      });
    }

    this.post.render(this.scene, cam, this.atmosphere, this.time, 1);
    this.frames++;
    this.adapt(rawDt);
    if (params.has('fps') && this.frames % 20 === 0) $('#fps').textContent = `${Math.round(1 / Math.max(rawDt, 1e-3))} fps`;
  }
}

const app = new App();
window.__app = app;
app.init().catch((e) => {
  console.error(e);
  $('#loadlabel').textContent = '載入失敗：' + (e && e.message ? e.message : e);
});
