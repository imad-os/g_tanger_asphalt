// Downloads elevation for the Tangier area (AWS Terrain Tiles, Terrarium encoding; sources incl. SRTM / NASA, public)
// and writes raw/terrain.bin: a grid in the game's metric frame (see tools/geo.mjs), Float32 metres.
import fs from 'node:fs';
import { PNG } from 'pngjs';
import { GEO, toXY } from './geo.mjs';

const Z = 14;
const lon2x = lon => (lon + 180) / 360 * 2 ** Z;
const lat2y = lat => (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * 2 ** Z;
const [S, W, N, E] = GEO.bbox;
const x0 = Math.floor(lon2x(W)), x1 = Math.floor(lon2x(E)), y0 = Math.floor(lat2y(N)), y1 = Math.floor(lat2y(S));
const tiles = {};
fs.mkdirSync('raw/tiles', { recursive: true });
for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) {
    const f = `raw/tiles/${Z}_${x}_${y}.png`;
    if (!fs.existsSync(f)) {
        const r = await fetch(`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${Z}/${x}/${y}.png`);
        if (!r.ok) throw new Error('tile ' + r.status);
        fs.writeFileSync(f, Buffer.from(await r.arrayBuffer()));
    }
    tiles[x + '_' + y] = PNG.sync.read(fs.readFileSync(f));
}
function elev(lat, lon) {
    const fx = lon2x(lon), fy = lat2y(lat);
    const tx = Math.floor(fx), ty = Math.floor(fy);
    const t = tiles[tx + '_' + ty]; if (!t) return 0;
    const px = (fx - tx) * 256 - 0.5, py = (fy - ty) * 256 - 0.5;
    const ix = Math.max(0, Math.min(254, Math.floor(px))), iy = Math.max(0, Math.min(254, Math.floor(py)));
    const ax = Math.min(1, Math.max(0, px - ix)), ay = Math.min(1, Math.max(0, py - iy));
    const h = (i, j) => { const o = (j * 256 + i) * 4; return t.data[o] * 256 + t.data[o + 1] + t.data[o + 2] / 256 - 32768; };
    return (h(ix, iy) * (1 - ax) + h(ix + 1, iy) * ax) * (1 - ay) + (h(ix, iy + 1) * (1 - ax) + h(ix + 1, iy + 1) * ax) * ay;
}
// grid over the bbox in metres
const a = toXY(S, W), b = toXY(N, E);
const STEP = GEO.terrainStep;
const nx = Math.ceil((b.x - a.x) / STEP) + 1, nz = Math.ceil((a.z - b.z) / STEP) + 1;
const grid = new Float32Array(nx * nz);
for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const x = a.x + i * STEP, z = b.z + j * STEP;
    const ll = GEO.toLL(x, z);
    grid[j * nx + i] = elev(ll.lat, ll.lon);
}
fs.writeFileSync('raw/terrain.bin', Buffer.from(grid.buffer));
fs.writeFileSync('raw/terrain.json', JSON.stringify({ x0: a.x, z0: b.z, step: STEP, nx, nz }));
let mn = 1e9, mx = -1e9; for (const v of grid) { mn = Math.min(mn, v); mx = Math.max(mx, v); }
console.log('terrain', nx, nz, 'min', mn.toFixed(1), 'max', mx.toFixed(1));
