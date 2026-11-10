# AGENTS.md

Notes for agents (and humans) working on this repository.

## Project

Procedural three.js recreation of Badaguan, Qingdao. Source in `src/`, bundled by esbuild to
`dist/app.js` (IIFE, loaded by `index.html` with a classic `<script>` so the page also works from
`file://`). `dist/app.js` is intentionally kept in the repo — rebuild it with `npm run build`
after every source change.

- `src/world/layout.js` is the single source of truth for geography (coast, relief, roads,
  lots, villas). It has no three.js dependency and can be imported in Node for quick checks.
- All time-of-day values live in `PRESETS` in `src/world/atmosphere.js`.
- User-facing text is Traditional Chinese; in-world signage is Simplified (as on site).

## Verifying visually

`tools/shot.mjs` drives headless Chrome (SwiftShader). It is slow and memory-hungry, so:

```bash
~/.claude/bin/heavy-gate -n 1 -l shot -- node tools/shot.mjs <outDir> '<shots json>' \
  --w=880 --h=495 --q=low --query="leaf=0.4&shadow=1024"
```

Run it in the background, never under `timeout`. A shot is
`{ name, cam: [x, y, z, headingDeg, pitchDeg], walk?, preset?, frames?, set?, call? }`
(`walk: true` stands the visitor on the ground at x, z — the y is ignored).
`--intro=1` keeps the title screen (omit `cam`); `--jpeg=88` writes JPEGs.

`tools/smoke.mjs` is the interaction test (real click through the title screen, walking, flight,
presets, seasons, map travel, tour, no console errors). Run it the same way through the gate; it
exits non-zero on any failed check. `docs/*.jpg` are produced with `tools/shot.mjs` at full quality.

## Lessons

- **three r187**
  - `SunLight` (`three/addons/lights/SunLight.js`) is a built-in two-cascade CSM light that
    `WebGLRenderer` supports natively; its direction is its position (like `HemisphereLight`).
    Shadow distance is `sun.shadow.camera.far`.
  - Shadow maps are depth textures sampled with `sampler2DShadow`; the default shadow material is a
    plain `new MeshDepthMaterial()` (no RGBA packing). `PCFSoftShadowMap` is deprecated — use
    `PCFShadowMap`. A `customDepthMaterial` still gets `map` / `alphaTest` copied from the mesh's
    material each frame.
  - `THREE.Clock` is deprecated (warns at runtime); use `performance.now()` or `THREE.Timer`.
  - `BatchedMesh(maxInstances, maxVerts, maxIndices, material)` gives per-instance frustum culling
    (including in shadow passes) with one multi-draw — used for tree trunks.
- **Global shader uniforms**: every material gets the shared atmosphere uniforms through
  `Material.prototype.onBeforeCompile` (see `installAtmosphere`). A material with its own
  `onBeforeCompile` must call `injectAtmos(shader)` and set a unique `customProgramCacheKey`
  (three keys programs on `onBeforeCompile.toString()`, so closures with identical source collide).
  Use `patchMaterial(material, key, patch, uniforms)`.
- **Typed-array wrap-around**: writing a value outside 0..1 × 255 into a `Uint8Array` wraps
  modulo 256 (this produced a "rock" band across the beach when a spline overshot below 0).
  Clamp before writing normalised vertex attributes; clamp `curve1D` results that feed weights.
- **Alpha-tested foliage**
  - Upload leaf atlases as `DataTexture` from raw pixels; a canvas texture is un-premultiplied on
    upload and transparent texels turn black, giving dark fringes.
  - Mip-mapped coverage drops below the alpha test at distance and crowns dissolve; boost alpha
    with view distance in the fragment shader.
  - In shadow passes `cameraPosition` is the shadow camera — use the shared `uCamPos` uniform for
    any distance-based LOD in vertex shaders.
- **GeoBuilder**: `vert()` reuses module-level scratch vectors when a matrix is set; copy a
  computed normal into locals before calling it repeatedly (bug fixed in `tri3`).
- **Fallen-leaf layer on vertical faces** (kerbs) smears into stripes because it is mapped in
  world XZ — give those vertices a litter amount of 0.
- **CSS vertical titles**: `writing-mode: vertical-rl` on the large title rendered with all glyphs
  overlapping in headless Chrome with fallback CJK fonts; the title is stacked with one `<span>`
  per character instead.
- **Interaction pitfalls found in review** (all fixed — keep them fixed):
  - Feed frame-time heuristics a sane `dt`: one long frame after a tab switch must not trigger the
    automatic quality step-down, and a steady 30 Hz display is not a slow machine.
  - Move the walker in ≤0.3 m slices; a single long frame at running speed otherwise steps through
    a 0.4 m wall. Clamp horizontal speed when leaving flight.
  - A mode switch can strand the player: walking is refused over water deeper than the wading limit
    and outside `PLAY`; the wade test always allows a step that does not go deeper.
  - Anything that changes layout on the first `touchstart` (e.g. hiding hints with `display:none`)
    moves the button under the finger before the synthesized click — use `visibility:hidden` or
    decide from `matchMedia('(pointer: coarse)')` at load.
  - Blending between states (seasons) must start from what is on screen (`Forest.capture()`), not
    from the previous target, or a second change mid-blend snaps.
  - Toasts live outside `#hud`, above the overlays; photo mode disables pointer events on panels.
  - Garden walls are cut exactly at `gate ± 1.75 m` (the pillar positions), not at panel joints.
- **npm 12** does not run esbuild's postinstall script; esbuild works anyway (the platform
  binary package is installed as an optional dependency).
- **Local servers** must bind `127.0.0.1` explicitly (`tools/build.mjs` does).
