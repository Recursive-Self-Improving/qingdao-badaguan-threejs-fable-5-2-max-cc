// Headless screenshot helper for visual checks during development.
//
//   node tools/shot.mjs <outDir> '<json array of shots>' [--w=1280 --h=720 --q=high]
//
// A shot is { name, cam: [x, y, z, headingDeg, pitchDeg], preset?, frames?, walk?, set?, call? }.
// One browser per process; always closed in `finally`.
// On shared machines run it through the memory gate:
//   ~/.claude/bin/heavy-gate -n 1 -l shot -- node tools/shot.mjs …
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flags = Object.fromEntries(args.filter((a) => a.startsWith('--')).map((a) => a.slice(2).split('=')));
const pos = args.filter((a) => !a.startsWith('--'));
const outDir = pos[0] || 'shots';
const shots = JSON.parse(pos[1] && fs.existsSync(pos[1]) ? fs.readFileSync(pos[1], 'utf8') : pos[1] || '[]');
const W = Number(flags.w || 1280),
  H = Number(flags.h || 720);
const query = flags.query ? '&' + flags.query : '';

const candidates = [
  process.env.CHROME_PATH,
  '/root/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome',
  '/usr/bin/google-chrome',
].filter(Boolean);
const executablePath = candidates.find((p) => fs.existsSync(p));

fs.mkdirSync(outDir, { recursive: true });
let browser;
try {
  browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--disable-gpu-vsync', '--mute-audio'],
  });
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  page.on('console', (m) => {
    const t = m.type();
    if (t === 'error' || t === 'warning' || flags.verbose) console.log(`[${t}]`, m.text().slice(0, 1500));
  });
  page.on('pageerror', (e) => console.log('[pageerror]', e.message, '\n', (e.stack || '').split('\n').slice(0, 6).join('\n')));
  const first = shots[0] || {};
  const url = `${pathToFileURL(path.join(root, 'index.html'))}?q=${flags.q || 'high'}${flags.intro ? '' : '&shot=1'}${first.cam && !flags.intro ? '&cam=' + first.cam.join(',') : ''}${first.preset ? '&preset=' + first.preset : ''}${query}`;
  const t0 = Date.now();
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForFunction(() => window.__app && window.__app.ready, null, { timeout: 300000 });
  console.log(`ready in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  for (const s of shots) {
    const t1 = Date.now();
    await page.evaluate((s) => {
      const app = window.__app;
      if (s.preset) app.atmosphere.set(s.preset, 0);
      if (s.cam) {
        if (s.walk) {
          // stand on the ground at (x, z); the y component is ignored
          app.player.place(s.cam[0], s.cam[2], s.cam[3] || 0);
          app.player.pitch = ((s.cam[4] || 0) * Math.PI) / 180;
        } else {
          app.player.mode = 'fly';
          app.player.setPose(...s.cam);
        }
      }
      // optional tweaks without evaluating code: { set: { "post.enabled.bloom": false }, call: ["a.b.method", arg…] }
      const walk = (p) => p.split('.').reduce((o, k) => o[k], app);
      if (s.set) {
        for (const [k, v] of Object.entries(s.set)) {
          const parts = k.split('.');
          const last = parts.pop();
          parts.reduce((o, key) => o[key], app)[last] = v;
        }
      }
      if (s.call) {
        const parts = s.call[0].split('.');
        const fn = parts.pop();
        const owner = parts.length ? walk(parts.join('.')) : app;
        owner[fn](...s.call.slice(1));
      }
      app.__target = app.frames + (s.frames || 4);
    }, s);
    await page.waitForFunction(() => window.__app.frames >= window.__app.__target, null, { timeout: 300000, polling: 100 });
    const file = path.join(outDir, `${s.name}.${flags.jpeg ? 'jpg' : 'png'}`);
    await page.screenshot({ path: file, timeout: 600000, ...(flags.jpeg ? { type: 'jpeg', quality: Number(flags.jpeg) > 1 ? Number(flags.jpeg) : 88 } : {}) });
    const info = await page.evaluate(() => {
      const i = window.__app.renderer.info;
      return `calls ${i.render.calls} tris ${i.render.triangles}`;
    });
    console.log(`shot ${s.name} (${((Date.now() - t1) / 1000).toFixed(1)}s) ${info}`);
  }
} catch (e) {
  console.log('[shot error]', e.message);
  process.exitCode = 1;
} finally {
  if (browser) await browser.close();
}
