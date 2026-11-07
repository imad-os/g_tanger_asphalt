# This repository is a My PC app or game

**Main instruction: before every task, fetch the latest My PC guide from GitHub and follow it.**

1. Guide (always fetch it fresh, never work from memory or a saved copy):
   https://raw.githubusercontent.com/imad-os/g/main/sdk/GUIDE.md
   (if that fails: https://imad-os.github.io/g/sdk/GUIDE.md)
2. SDK (load it with a `<script>` tag from this address; never copy it into this repo):
   https://imad-os.github.io/g/sdk/mypc-sdk.js
3. Working example: https://github.com/imad-os/g/tree/main/sdk/example

The guide says how the app must be built (files, `mypc-app.json`, lifecycle, TV remote input,
screen, performance, languages, publishing). Follow every MUST, finish each task with its
checklist, and when the guide has changed, update this app to match it. If anything in this file
disagrees with the guide, the guide wins.

Touch controls: My PC draws a customizable pad on phones by itself (guide, "Touch controls"); do not build one, or set `"touch": false` in `mypc-app.json`.

For multiplayer use `MyPC.multiplayer` (section "Multiplayer" of the guide): no own lobby, no backend, no Firebase keys.

For every release: bump `version` in `mypc-app.json` and the same `?v=<version>` on every own file
`index.html` loads (section 10 of the guide), so TVs never open old cached files.

When a task is done: commit, push, and tell the owner the address to paste into the My PC
App Store Manager (https://imad-os.github.io/g/installer/): `https://<owner>.github.io/<repo>/`
(GitHub Pages: Settings → Pages → Deploy from a branch → main / root), and to press **Update** next to
the app in the App Store Manager once GitHub Pages has published it.

## This game (Tangier Asphalt)

- Owner rules from My PC apply here too: push straight to `main` (no branches / PRs); never say something
  works without a real browser run and a screenshot; strings in en / fr / es / ar (`src/i18n.js`); every
  screen works with the remote alone; buttons are A B X Y in the Nintendo places + the **+** button.
- Build: `npm install` then `npm run build` (esbuild bundles `src/` into `dist/game.js`, stamps the
  version from `mypc-app.json` into `index.html`). Commit `dist/game.js`: GitHub Pages serves it as is.
- Data pipeline (only when routes or models change; `raw/` is not committed):
  - OpenStreetMap: edit `osm/request.json` and push; the GitHub Action `.github/workflows/osm.yml` runs
    `tools/osm-fetch.mjs` (Overpass is blocked from the cloud container) and commits `osm/*.json`.
  - Heights: `node tools/terrain.mjs` (AWS Terrain Tiles, public) -> `raw/terrain.bin`.
  - Routes: waypoints in `tools/routes-def.mjs`, then `node tools/build-routes.mjs` -> `assets/routes/*`.
  - Models: Kenney CC0 kits in `raw/` (car, racing, nature), `node tools/build-models.mjs` -> `assets/models.*`.
- Physics checks: `node tests/physics.mjs` prints 0-100 km/h, top speed, 100-0 braking, skid pad g,
  ramp jumps and crash results; keep them in the real-car ranges listed in README.md after any change to
  `src/vehicle.js` or `src/collide.js`.
- Browser checks (Playwright, SDK from a local My PC checkout `SDK=/path/to/g/sdk/mypc-sdk.js`):
  `tests/shot.mjs "?dev=<route>&bot" out.png 20000`, `tests/wrecks.mjs`, `tests/trace-race.mjs`,
  `tests/fps-proof.mjs` (60 fps under CPU throttling, screenshots). `?dev=<route>&bot&car=gt&2p&time=night`.
- Steering sign: `Input` gives `ctl.steer` + = LEFT (the car frame, +X left); `node tests/steer-check.mjs` must PASS
  after any input / vehicle change. Mapping: `node tests/controls-check.mjs` (listens 3 s, any button).
- No drift without the drift button (owner report 2026-11-07): steering lock is capped by grip (`Vehicle.lockAt`, AI uses it
  too), ESC only slows a too-fast rotation, traction control leaves room for side grip, tyre peak 7.5°. `node tests/nodrift-check.mjs`
  and `tests/nodrift-browser.mjs [folder]` (dev params `&notraffic&rivals=0`) must PASS.
- Cars: everyday cars first (owner request 2026-11-07); `city` = the owner's own car, detailed model built in
  `tools/model-city.mjs` from their photos (white, red roof; `roof` colour
  per car, `roofY` from tools/build-models.mjs). Original names only, no makers' names or badges.
- Engine sound: `assets/engine-worklet.js` (loaded by src/audio.js; old oscillators only without AudioWorklet).
  `node tests/engine-sound.mjs <folder>`: firing Hz must match, no clipping / NaN, WAV per car to listen to.
- 60 fps on the TV: draw calls stay low (world in 100 m chunks, 4 merged meshes each, culled by distance),
  no allocation per frame, dynamic resolution in `Session.budget`, quality tiers in `src/main.js`.
