// Bundles src/ (three.js included, tree-shaken) into dist/game.js for Chromium 108 (Samsung TVs 2024+).
// Also stamps the version from mypc-app.json into src/version.js and every ?v= in index.html.
import fs from 'node:fs';
import { build } from 'esbuild';
const man = JSON.parse(fs.readFileSync('mypc-app.json', 'utf8'));
const V = man.version;
fs.writeFileSync('src/version.js', `export const VERSION = '${V}';\n`);
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/\?v=[0-9.]+/g, '?v=' + V);
fs.writeFileSync('index.html', html);
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', target: 'chrome108', outfile: 'dist/game.js', legalComments: 'eof', sourcemap: false });
const kb = (fs.statSync('dist/game.js').size / 1024).toFixed(0);
console.log('dist/game.js', kb + ' KB', 'version', V);
