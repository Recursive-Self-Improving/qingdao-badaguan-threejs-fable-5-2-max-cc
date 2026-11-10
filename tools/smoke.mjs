// Interaction smoke test: goes through the title screen with a real click, walks, flies,
// switches time of day and season, travels via the map, runs the tour, and fails on any
// console error. One browser per process; always closed in `finally`.
//
//   ~/.claude/bin/heavy-gate -n 1 -l smoke -- node tools/smoke.mjs
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const executablePath = [process.env.CHROME_PATH, '/root/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome', '/usr/bin/google-chrome'].filter(Boolean).find((p) => fs.existsSync(p));

const errors = [];
const results = [];
const check = (name, ok, detail = '') => {
  results.push({ name, ok });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
};

let browser;
try {
  browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--mute-audio', '--autoplay-policy=no-user-gesture-required'],
  });
  const page = await browser.newPage({ viewport: { width: 960, height: 540 }, deviceScaleFactor: 1 });
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  page.on('pageerror', (e) => errors.push(e.message));
  // tiny render scale: this test is about behaviour, not pixels
  await page.goto(`${pathToFileURL(path.join(root, 'index.html'))}?q=low&leaf=0.15&shadow=512&scale=0.3`, { waitUntil: 'load', timeout: 120000 });
  await page.waitForFunction(() => window.__app && window.__app.ready, null, { timeout: 300000 });
  const frames = (n) => page.evaluate((k) => new Promise((res) => {
    const app = window.__app;
    const target = app.frames + k;
    const tick = () => (app.frames >= target ? res() : setTimeout(tick, 50));
    tick();
  }), n);
  const state = () =>
    page.evaluate(() => {
      const a = window.__app;
      return {
        x: a.player.pos.x,
        y: a.player.pos.y,
        z: a.player.pos.z,
        yaw: a.player.yaw,
        mode: a.player.mode,
        preset: a.atmosphere.name,
        season: a.season,
        tour: a.tour.active,
        started: a.started,
        enabled: a.player.enabled,
        quality: a.quality,
        sound: a.audio.enabled,
        hud: document.querySelector('#hud').classList.contains('on'),
        intro: !document.querySelector('#intro').classList.contains('hidden'),
        map: document.querySelector('#bigmap').classList.contains('on'),
        help: document.querySelector('#help').classList.contains('on'),
        place: document.querySelector('#place .name').textContent,
      };
    });

  let s = await state();
  check('title screen shown, tour playing behind it', s.intro && s.tour && !s.started);
  check('start button enabled once loaded', await page.isEnabled('#start'));

  await page.click('#start');
  await page.waitForFunction(() => window.__app.player.enabled, null, { timeout: 120000 });
  await frames(3);
  s = await state();
  check('entering: intro hidden, HUD on, walking', !s.intro && s.hud && s.mode === 'walk' && !s.tour, JSON.stringify({ x: s.x.toFixed(1), z: s.z.toFixed(1) }));
  await page.waitForFunction(() => document.querySelector('#place').classList.contains('show'), null, { timeout: 120000 });
  s = await state();
  check('place label names the street', s.place === '居庸關路', s.place);

  const p0 = await state();
  await page.keyboard.down('KeyW');
  await frames(6);
  await page.keyboard.up('KeyW');
  const p1 = await state();
  const moved = Math.hypot(p1.x - p0.x, p1.z - p0.z);
  check('W walks forward', moved > 0.4, `${moved.toFixed(2)} m`);

  await page.mouse.move(480, 270);
  await page.mouse.down();
  await page.mouse.move(600, 280, { steps: 4 });
  await page.mouse.up();
  await frames(1);
  const p2 = await state();
  check('dragging the mouse turns the view', Math.abs(p2.yaw - p1.yaw) > 0.05, `Δyaw ${(p2.yaw - p1.yaw).toFixed(2)}`);

  await page.keyboard.press('KeyF');
  await frames(1);
  check('F switches to flight', (await state()).mode === 'fly');
  await page.keyboard.down('KeyE');
  await frames(4);
  await page.keyboard.up('KeyE');
  const p3 = await state();
  check('E climbs', p3.y > p2.y + 0.5, `+${(p3.y - p2.y).toFixed(1)} m`);
  await page.keyboard.press('KeyF');
  await frames(1);
  check('F returns to walking', (await state()).mode === 'walk');

  // out over the bay there is nowhere to stand: the switch to walking must be refused
  await page.evaluate(() => {
    const a = window.__app;
    a.player.mode = 'fly';
    a.player.setPose(-60, 25, 320, 0, 0);
  });
  await frames(1);
  await page.keyboard.press('KeyF');
  await frames(1);
  const sea = await state();
  check('no landing on open water', sea.mode === 'fly' && sea.y > 5, `mode ${sea.mode}, y ${sea.y.toFixed(1)}`);
  await page.evaluate(() => window.__app.placeAtStart());
  await frames(1);
  // wading: walking straight out to sea stops at knee depth and still lets you turn back
  await page.evaluate(() => {
    const a = window.__app;
    a.player.place(-60, 216, 180);
  });
  // run far enough that only the wading limit can stop us (the limit is ~18 m out from the waterline)
  await page.keyboard.down('ShiftLeft');
  await page.keyboard.down('KeyW');
  await frames(40);
  await page.keyboard.up('KeyW');
  await page.keyboard.up('ShiftLeft');
  await frames(2);
  const wet = await page.evaluate(() => {
    const a = window.__app;
    const L = a.player.pos;
    return { z: L.z, depth: a.camera.position.y - 1.66 };
  });
  await page.keyboard.down('KeyS');
  await frames(6);
  await page.keyboard.up('KeyS');
  const back = await page.evaluate(() => window.__app.player.pos.z);
  check('wading stops at the knees and one can walk back out', wet.depth < -0.55 && wet.depth > -0.95 && wet.z < 245 && back < wet.z - 0.5, `depth ${wet.depth.toFixed(2)} m, z ${wet.z.toFixed(1)} → ${back.toFixed(1)}`);
  await page.evaluate(() => window.__app.placeAtStart());
  await frames(1);

  await page.keyboard.press('Digit2');
  await frames(1);
  check('2 selects clear noon', (await state()).preset === 'noon');
  await page.keyboard.press('BracketRight');
  await frames(1);
  check('] advances the season to winter', (await state()).season === 3);
  await page.keyboard.press('BracketLeft');
  await frames(1);
  check('[ goes back to autumn', (await state()).season === 2);

  await page.keyboard.press('KeyM');
  await frames(1);
  check('M opens the big map', (await state()).map);
  // click a spot on Zhengyangguan Rd (roughly the middle of the sheet)
  const box = await page.locator('#bigmap canvas').boundingBox();
  await page.mouse.click(box.x + box.width * 0.4, box.y + box.height * 0.385);
  await page.waitForFunction(() => !document.querySelector('#fade').classList.contains('on') && !document.querySelector('#bigmap').classList.contains('on'), null, { timeout: 120000 });
  await frames(2);
  const p4 = await state();
  check('clicking the map travels there', !p4.map && Math.hypot(p4.x - p3.x, p4.z - p3.z) > 40 && p4.enabled, JSON.stringify({ x: p4.x.toFixed(0), z: p4.z.toFixed(0) }));

  await page.keyboard.press('KeyH');
  await frames(1);
  check('H opens help', (await state()).help);
  await page.keyboard.press('Escape');
  await frames(1);
  const p5 = await state();
  check('Esc closes it and gives control back', !p5.help && p5.enabled);

  await page.keyboard.press('KeyT');
  await frames(2);
  check('T starts the guided tour', (await state()).tour);
  await page.keyboard.press('KeyT');
  await frames(1);
  const p6 = await state();
  check('T again hands over in flight', !p6.tour && p6.mode === 'fly' && p6.enabled);

  const q0 = (await state()).quality;
  await page.click('#tools [data-act="quality"]');
  await frames(1);
  const q1 = (await state()).quality;
  check('quality button cycles', q1 !== q0, `${q0} → ${q1}`);
  const before = (await state()).sound;
  await page.click('#tools [data-act="sound"]');
  await frames(1);
  check('sound button toggles', (await state()).sound !== before);
  await page.click('#seasons button[data-i="0"]');
  await frames(1);
  check('season pill selects spring', (await state()).season === 0);
  await page.click('#times button[data-k="night"]');
  await frames(1);
  check('time pill selects night', (await state()).preset === 'night');
  await frames(2);

  check('no console errors', errors.length === 0, errors.slice(0, 4).join(' | '));
} catch (e) {
  check('test run completed', false, e.message);
} finally {
  if (browser) await browser.close();
}
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} checks passed`);
process.exitCode = failed ? 1 : 0;
