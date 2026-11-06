// Opens the game in Chromium (SDK from the local My PC checkout, standalone mode) and saves screenshots.
// node tests/shot.mjs <url query> <out.png> [waitMs] [keys...]
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SDK = process.env.SDK || '/home/user/g/sdk/mypc-sdk.js';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.bin': 'application/octet-stream', '.woff2': 'font/woff2', '.ogg': 'audio/ogg', '.svg': 'image/svg+xml', '.png': 'image/png' };
export function serve(port) {
    return new Promise(res => {
        const s = http.createServer((q, r) => {
            const u = decodeURIComponent(q.url.split('?')[0]);
            const f = path.join(ROOT, u === '/' ? 'index.html' : u);
            if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
            r.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream', 'Content-Length': fs.statSync(f).size });
            fs.createReadStream(f).pipe(r);
        }).listen(port, () => res(s));
    });
}
export async function open(query, opts = {}) {
    const server = await serve(opts.port || 8765);
    const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
    const page = await browser.newPage({ viewport: { width: opts.w || 1280, height: opts.h || 720 }, deviceScaleFactor: 1 });
    await page.route('**/mypc-sdk.js', r => r.fulfill({ path: SDK, contentType: 'text/javascript' }));
    let nlog = 0; page.on('console', m => { if (nlog++ > 40) return; if (m.type() === 'error' || m.type() === 'warning' || opts.log) console.log('[page]', m.type(), m.text().slice(0, 300)); });
    page.on('pageerror', e => console.log('[pageerror]', e.message));
    await page.goto('http://localhost:' + (opts.port || 8765) + '/index.html' + query);
    return { page, browser, server, close: async () => { await browser.close(); server.close(); } };
}
if (process.argv[1] && process.argv[1].endsWith('shot.mjs')) {
    const [, , q, out, wait] = process.argv;
    const keys = process.argv.slice(5);
    const s = await open(q || '');
    await s.page.waitForTimeout(+wait || 6000);
    for (const k of keys) { if (k.startsWith('wait')) await s.page.waitForTimeout(+k.slice(4)); else await s.page.keyboard.press(k); }
    await s.page.screenshot({ path: out || 'shot.png' });
    await s.close();
}
