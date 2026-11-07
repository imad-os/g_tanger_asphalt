// Converts the Kenney CC0 glTF models (raw/, see tools/get-assets.mjs) into one small binary file the game
// loads at start: assets/models.bin + assets/models.json.
// Every model is baked to vertex colours (the palette texture or material colour is sampled per vertex), so the
// whole world can be drawn with one material and merged into a few draw calls per road chunk.
// Vertex: position float32 x3, normal int8 x4 (xyz + 0), colour uint8 x4 (rgb + flag).
// Flags: 0 plain, 255 car paint (tinted by the livery), 128 glass, 64 lights (glow at night / brake).
import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const RAW = path.join(ROOT, 'raw');

// name -> [file, scale, options]
const MODELS = {
    // player / rival cars (car kit units: ~2.3 long; real cars ~4.4 m)
    car_city:        ['car/hatchback-sports.glb', [1.8, 2.1, 1.72], { car: 1 }],   // taller, shorter compact hatch (white, red roof)
    car_hatch:       ['car/hatchback-sports.glb', 1.85, { car: 1 }],
    car_volt:        ['car/sedan-sports.glb', 1.85, { car: 1, drop: ['spoiler'] }],  // smooth electric saloon
    car_wedge:       ['proc:wedge', 1, { car: 1 }],                                // angular electric pickup, built below
    car_suvlux:      ['car/suv-luxury.glb', 1.95, { car: 1 }],
    car_police:      ['car/police.glb', 1.95, { car: 1 }],
    car_gt:          ['racing/raceCarRed.glb', 3.5, { car: 1, paintMat: 'red' }],
    // traffic
    tr_taxi:         ['car/taxi.glb', 1.95, { car: 1 }],
    tr_sedan:        ['car/sedan.glb', 1.95, { car: 1 }],
    tr_suv:          ['car/suv.glb', 1.95, { car: 1 }],
    tr_van:          ['car/van.glb', 2.0, { car: 1 }],
    tr_truck:        ['car/truck.glb', 2.2, { car: 1 }],
    tr_delivery:     ['car/delivery.glb', 2.2, { car: 1 }],
    // wheels (the car models carry their own wheel meshes; these are spares for crash debris)
    debris_tire:     ['car/debris-tire.glb', 1.9, {}],
    debris_bumper:   ['car/debris-bumper.glb', 1.9, { paint: 1 }],
    debris_door:     ['car/debris-door.glb', 1.9, { paint: 1 }],
    debris_spoiler:  ['car/debris-spoiler-a.glb', 1.9, { paint: 1 }],
    debris_plate:    ['car/debris-plate-a.glb', 1.9, {}],
    cone:            ['car/cone.glb', 1.6, {}],
    box:             ['car/box.glb', 1.6, {}],
    // road side
    barrier_red:     ['racing/barrierRed.glb', 4, {}],
    barrier_white:   ['racing/barrierWhite.glb', 4, {}],
    barrier_wall:    ['racing/barrierWall.glb', 4, {}],
    light_modern:    ['racing/lightPostModern.glb', 4.5, { lights: 1 }],
    light_large:     ['racing/lightPostLarge.glb', 4.5, { lights: 1 }],
    overhead_lights: ['racing/overheadLights.glb', 4.5, {}],
    billboard:       ['racing/billboard.glb', 4.5, {}],
    ramp:            ['racing/ramp.glb', 6, {}],
    pylon:           ['racing/pylon.glb', 4, {}],
    flag_checkers:   ['racing/flagCheckers.glb', 4.5, {}],
    banner_red:      ['racing/bannerTowerRed.glb', 4.5, {}],
    banner_green:    ['racing/bannerTowerGreen.glb', 4.5, {}],
    grandstand:      ['racing/grandStand.glb', 4.5, {}],
    rail:            ['racing/rail.glb', 4, {}],
    // nature
    palm_tall:       ['nature/tree_palmTall.glb', 9, {}],
    palm_detailed:   ['nature/tree_palmDetailedTall.glb', 9, {}],
    palm:            ['nature/tree_palm.glb', 8, {}],
    palm_bend:       ['nature/tree_palmBend.glb', 8, {}],
    tree:            ['nature/tree_default.glb', 9, {}],
    tree_oak:        ['nature/tree_oak.glb', 9, {}],
    tree_fat:        ['nature/tree_fat.glb', 8, {}],
    bush:            ['nature/plant_bushLarge.glb', 5, {}],
    rock_a:          ['nature/rock_largeA.glb', 7, {}],
    rock_b:          ['nature/rock_largeB.glb', 7, {}],
    rock_tall:       ['nature/rock_tallA.glb', 7, {}],
    cactus:          ['nature/cactus_tall.glb', 5, {}]
};

const pngCache = {};
function loadPng(file) {
    if (!pngCache[file]) pngCache[file] = PNG.sync.read(fs.readFileSync(file));
    return pngCache[file];
}

function mat4FromNode(n) {
    if (n.matrix) return n.matrix.slice();
    const t = n.translation || [0, 0, 0], r = n.rotation || [0, 0, 0, 1], s = n.scale || [1, 1, 1];
    const [x, y, z, w] = r;
    const x2 = x + x, y2 = y + y, z2 = z + z, xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2,
        wx = w * x2, wy = w * y2, wz = w * z2;
    return [(1 - (yy + zz)) * s[0], (xy + wz) * s[0], (xz - wy) * s[0], 0,
        (xy - wz) * s[1], (1 - (xx + zz)) * s[1], (yz + wx) * s[1], 0,
        (xz + wy) * s[2], (yz - wx) * s[2], (1 - (xx + yy)) * s[2], 0,
        t[0], t[1], t[2], 1];
}
function mul(a, b) {
    const o = new Array(16);
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
        let v = 0; for (let k = 0; k < 4; k++) v += a[k * 4 + r] * b[c * 4 + k]; o[c * 4 + r] = v;
    }
    return o;
}

function readGlb(file) {
    const b = fs.readFileSync(file);
    const jl = b.readUInt32LE(12);
    const json = JSON.parse(b.slice(20, 20 + jl).toString());
    const binStart = 20 + jl + 8;
    const binLen = b.readUInt32LE(20 + jl);
    return { json, bin: b.slice(binStart, binStart + binLen) };
}
function accessor(g, i) {
    const a = g.json.accessors[i], bv = g.json.bufferViews[a.bufferView];
    const comps = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 }[a.type];
    const off = (bv.byteOffset || 0) + (a.byteOffset || 0);
    const stride = bv.byteStride || 0;
    const out = new Float64Array(a.count * comps);
    const size = { 5126: 4, 5123: 2, 5125: 4, 5121: 1 }[a.componentType];
    const st = stride || size * comps;
    for (let k = 0; k < a.count; k++) for (let c = 0; c < comps; c++) {
        const p = off + k * st + c * size;
        let v;
        if (a.componentType === 5126) v = g.bin.readFloatLE(p);
        else if (a.componentType === 5123) v = g.bin.readUInt16LE(p);
        else if (a.componentType === 5125) v = g.bin.readUInt32LE(p);
        else v = g.bin.readUInt8(p);
        out[k * comps + c] = v;
    }
    return out;
}

// centre wheels on their own pivot so they can spin; bounding boxes
function pivots(parts) {
    for (const p of parts) {
    let mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
    for (let k = 0; k < p.pos.length; k += 3) for (let c = 0; c < 3; c++) { mn[c] = Math.min(mn[c], p.pos[k + c]); mx[c] = Math.max(mx[c], p.pos[k + c]); }
    p.min = mn; p.max = mx;
    p.pivot = [0, 0, 0];
    if (p.name[0] === 'w') {
        p.pivot = [(mn[0] + mx[0]) / 2, (mn[1] + mx[1]) / 2, (mn[2] + mx[2]) / 2];
        for (let k = 0; k < p.pos.length; k += 3) for (let c = 0; c < 3; c++) p.pos[k + c] -= p.pivot[c];
        p.radius = (mx[1] - mn[1]) / 2;
    }
}
}

// An angular electric pickup made of flat stainless panels (no kit model has that shape). Same scale and frame as
// the kit cars: +Z forward, +X left, y up. Paint flag 255 (stainless by default), glass 128, light bars 64.
function wedge() {
    const body = { name: 'body', pos: [], nrm: [], col: [], idx: [] };
    const PAINT = [200, 200, 200, 255], GLASS = [28, 34, 44, 128], DARK = [38, 40, 44, 0], LIGHT_F = [255, 250, 235, 64], LIGHT_R = [235, 30, 30, 64];
    function poly(pts, c) {   // flat convex polygon, counter-clockwise seen from outside (the normal follows the winding)
        const a = pts[0], b = pts[1], d = pts[2];
        let nx = (b[1] - a[1]) * (d[2] - a[2]) - (b[2] - a[2]) * (d[1] - a[1]);
        let ny = (b[2] - a[2]) * (d[0] - a[0]) - (b[0] - a[0]) * (d[2] - a[2]);
        let nz = (b[0] - a[0]) * (d[1] - a[1]) - (b[1] - a[1]) * (d[0] - a[0]);
        const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
        const base = body.pos.length / 3;
        for (const q of pts) { body.pos.push(q[0], q[1], q[2]); body.nrm.push(nx, ny, nz); body.col.push(...c); }
        for (let k = 1; k < pts.length - 1; k++) body.idx.push(base, base + k, base + k + 1);
    }
    const W = 1.42, lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    // side profile (z, y): bottom front, nose, roof apex, tail top, bottom back
    const A = [3.1, 0.78], B = [3.18, 1.28], C = [0.35, 2.42], D = [-3.1, 1.72], E = [-3.1, 0.78];
    const B2 = lerp(B, C, 0.42), C2 = lerp(C, D, 0.28);
    const P = (zy, x) => [x, zy[1], zy[0]];
    // sides (x = +W faces +x, x = -W faces -x)
    poly([A, B, B2, C, C2, D, E].map(q => P(q, W)).reverse(), PAINT);
    poly([A, B, B2, C, C2, D, E].map(q => P(q, -W)), PAINT);
    // around the profile: each edge a strip across the width (normal outwards)
    const strip = (q1, q2, c, inset) => poly([P(q1, -W + inset), P(q1, W - inset), P(q2, W - inset), P(q2, -W + inset)], c);
    strip(A, B, PAINT, 0);          // nose
    strip(B, B2, PAINT, 0);         // bonnet
    strip(B2, C, GLASS, 0);         // windscreen
    strip(C, C2, GLASS, 0);         // rear window
    strip(C2, D, PAINT, 0);         // tonneau cover
    strip(D, E, PAINT, 0);          // tailgate
    strip(E, A, DARK, 0);           // floor
    // side windows (just outside the panels) and the beltline
    const win = [[1.7, 1.66], [0.42, 2.27], [-0.95, 2.03], [-0.95, 1.66]];
    poly(win.map(q => P(q, W + 0.01)).reverse(), GLASS);
    poly(win.map(q => P(q, -W - 0.01)), GLASS);
    // light bars across the nose and the tailgate
    poly([[-W + 0.08, 1.16, 3.17], [W - 0.08, 1.16, 3.17], [W - 0.08, 1.24, 3.185], [-W + 0.08, 1.24, 3.185]].map(q => [q[0], q[1], q[2] + 0.005]), LIGHT_F);
    poly([[-W + 0.08, 1.56, -3.105], [W - 0.08, 1.56, -3.105], [W - 0.08, 1.64, -3.105], [-W + 0.08, 1.64, -3.105]].reverse(), LIGHT_R);
    // dark wheel arches on both sides (flat trapezoids just outside the panels)
    for (const wz of [2.05, -2.05]) for (const sx of [1, -1]) {
        const arch = [[wz + 0.9, 0.78], [wz + 0.55, 1.42], [wz - 0.55, 1.42], [wz - 0.9, 0.78]];
        const pts = arch.map(q => P(q, sx * (W + 0.005)));
        poly(sx > 0 ? pts.reverse() : pts, DARK);
    }
    // wheels from the kit (big, like an off-roader)
    const wg = readGlb(path.join(RAW, 'car/wheel-default.glb'));
    const wp = accessor(wg, wg.json.meshes[0].primitives[0].attributes.POSITION), wn = accessor(wg, wg.json.meshes[0].primitives[0].attributes.NORMAL);
    const wi = accessor(wg, wg.json.meshes[0].primitives[0].indices);
    const R = 0.68, S = R / 0.3;
    const parts = [body];
    for (const [name, x, z] of [['wfl', 1.08, 2.05], ['wfr', -1.08, 2.05], ['wbl', 1.08, -2.05], ['wbr', -1.08, -2.05]]) {
        const w = { name, pos: [], nrm: [], col: [], idx: [] };
        const sx = x > 0 ? 1 : -1;   // the hub faces outwards
        for (let k = 0; k < wp.length / 3; k++) {
            w.pos.push(x + wp[k * 3] * S * 1.3 * sx, R + wp[k * 3 + 1] * S, z + wp[k * 3 + 2] * S);
            w.nrm.push(wn[k * 3] * sx, wn[k * 3 + 1], wn[k * 3 + 2]);
            const r = Math.hypot(wp[k * 3 + 1], wp[k * 3 + 2]) / 0.3;
            const c = r > 0.72 ? [34, 34, 38] : [150, 156, 166];   // tyre / aero cover
            w.col.push(c[0], c[1], c[2], 0);
        }
        for (let t = 0; t < wi.length; t += 3) sx > 0 ? w.idx.push(wi[t], wi[t + 1], wi[t + 2]) : w.idx.push(wi[t], wi[t + 2], wi[t + 1]);
        parts.push(w);
    }
    return parts;
}

function convert(name, [file, scale, opt]) {
    if (file.startsWith('proc:')) { const parts = wedge(); pivots(parts); return { parts, opt }; }
    const full = path.join(RAW, file);
    const g = readGlb(full);
    const parts = []; // { name, pos[], nrm[], col[], idx[] }
    const texFile = g.json.images && g.json.images[0] && g.json.images[0].uri ? path.join(path.dirname(full), g.json.images[0].uri) : null;
    const png = texFile && fs.existsSync(texFile) ? loadPng(texFile) : null;

    function sample(u, v) {
        u = u - Math.floor(u); v = v - Math.floor(v);
        const x = Math.min(png.width - 1, Math.floor(u * png.width)), y = Math.min(png.height - 1, Math.floor(v * png.height));
        const i = (y * png.width + x) * 4;
        return [png.data[i], png.data[i + 1], png.data[i + 2]];
    }
    function visit(ni, parent, top) {
        const n = g.json.nodes[ni];
        const m = mul(parent, mat4FromNode(n));
        const nm = (n.name || '').toLowerCase();
        let partName = top;
        // wheels: front / back + left / right; a wheel with no side (the SUV's spare on the tailgate) is a body part
        if (/wheel/.test(nm)) partName = !/left|right/.test(nm) ? 'spare' : /front|fl|fr/.test(nm) ? (/left/.test(nm) ? 'wfl' : 'wfr') : (/left/.test(nm) ? 'wbl' : 'wbr');
        if (opt.drop && opt.drop.includes(partName === 'spare' ? 'spare' : nm)) return;
        if (n.mesh != null) {
            let part = parts.find(p => p.name === partName);
            if (!part) { part = { name: partName, pos: [], nrm: [], col: [], idx: [] }; parts.push(part); }
            for (const pr of g.json.meshes[n.mesh].primitives) {
                const P = accessor(g, pr.attributes.POSITION);
                const N = pr.attributes.NORMAL != null ? accessor(g, pr.attributes.NORMAL) : null;
                const T = pr.attributes.TEXCOORD_0 != null ? accessor(g, pr.attributes.TEXCOORD_0) : null;
                const I = pr.indices != null ? accessor(g, pr.indices) : null;
                const mat = g.json.materials[pr.material] || {};
                const pbr = mat.pbrMetallicRoughness || {};
                const fac = pbr.baseColorFactor || [1, 1, 1, 1];
                const mname = (mat.name || '').toLowerCase();
                const base = part.pos.length / 3;
                const cnt = P.length / 3;
                for (let k = 0; k < cnt; k++) {
                    const x = P[k * 3], y = P[k * 3 + 1], z = P[k * 3 + 2];
                    part.pos.push(m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]);
                    let nx = 0, ny = 1, nz = 0;
                    if (N) {
                        const a = N[k * 3], b = N[k * 3 + 1], c = N[k * 3 + 2];
                        nx = m[0] * a + m[4] * b + m[8] * c; ny = m[1] * a + m[5] * b + m[9] * c; nz = m[2] * a + m[6] * b + m[10] * c;
                        const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
                    }
                    part.nrm.push(nx, ny, nz);
                    let c;
                    if (png && T && pbr.baseColorTexture) c = sample(T[k * 2], T[k * 2 + 1]);
                    else c = [fac[0] * 255, fac[1] * 255, fac[2] * 255].map(v => Math.round(v)); // Kenney stores sRGB values here
                    if (mname === 'leafsgreen') c = [64, 150, 58];
                    if (mname === 'leafsdark') c = [40, 110, 45];
                    let flag = 0;
                    if (mname === 'glass' || mname === 'window') flag = 128;
                    if (opt.paintMat && mname === opt.paintMat) { flag = 255; c = [200, 200, 200]; }
                    part.col.push(c[0], c[1], c[2], flag);
                }
                if (I) for (let k = 0; k < I.length; k++) part.idx.push(base + I[k]);
                else for (let k = 0; k < cnt; k++) part.idx.push(base + k);
            }
        }
        for (const c of n.children || []) visit(c, m, partName);
    }
    const scene = g.json.scenes[g.json.scene || 0];
    const sc = Array.isArray(scale) ? scale : [scale, scale, scale];   // [x, y, z]: a model can be made taller / shorter
    const S = [sc[0], 0, 0, 0, 0, sc[1], 0, 0, 0, 0, sc[2], 0, 0, 0, 0, 1];
    for (const r of scene.nodes) visit(r, S, 'body');

    // car kit: the paint is the most used saturated colour of the body (by triangle area); glass the darkest blue grey.
    const body = parts.find(p => p.name === 'body');
    if ((opt.car || opt.paint) && !opt.paintMat && body) {
        const area = new Map();
        for (let t = 0; t < body.idx.length; t += 3) {
            const a = body.idx[t], b = body.idx[t + 1], c = body.idx[t + 2];
            const ax = body.pos[b * 3] - body.pos[a * 3], ay = body.pos[b * 3 + 1] - body.pos[a * 3 + 1], az = body.pos[b * 3 + 2] - body.pos[a * 3 + 2];
            const bx = body.pos[c * 3] - body.pos[a * 3], by = body.pos[c * 3 + 1] - body.pos[a * 3 + 1], bz = body.pos[c * 3 + 2] - body.pos[a * 3 + 2];
            const ar = Math.hypot(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx);
            const key = body.col.slice(a * 4, a * 4 + 3).join(',');
            area.set(key, (area.get(key) || 0) + ar);
        }
        const sat = k => { const [r, g2, b] = k.split(',').map(Number); return Math.max(r, g2, b) - Math.min(r, g2, b); };
        const ranked = [...area.entries()].sort((x, y) => y[1] - x[1]);
        const found = ranked.find(([k]) => sat(k) > 60 && !/^255,179,72$/.test(k) || (name === 'tr_taxi' && k === '255,179,72'));
        const paint = found ? found[0] : null;
        const pc = paint ? paint.split(',').map(Number) : null;
        const lum = c => 0.3 * c[0] + 0.59 * c[1] + 0.11 * c[2];
        const dir = c => { const m = (c[0] + c[1] + c[2]) / 3; const d = [c[0] - m, c[1] - m, c[2] - m]; const l = Math.hypot(...d) || 1; return d.map(v => v / l); };
        const pd = pc && dir(pc);
        for (const p of parts) for (let k = 0; k < p.col.length; k += 4) {
            const c = p.col.slice(k, k + 3);
            const [r, g2, b] = c;
            if (pc && p.name === 'body' && sat(c.join(',')) > 40) {
                const d = dir(c);
                if (d[0] * pd[0] + d[1] * pd[1] + d[2] * pd[2] > 0.97) {
                    const f = Math.max(0, Math.min(255, Math.round(200 * lum(c) / lum(pc))));
                    p.col[k] = p.col[k + 1] = p.col[k + 2] = f; p.col[k + 3] = 255; continue;
                }
            }
            if (p.col[k + 3] === 0 && b > r + 15 && b >= g2 && r < 120 && b < 170) p.col[k + 3] = 128; // window tint
        }
        opt.paintColor = paint;
    }
    // lights: brightest near-white / red small faces at the very front / back of a car body
    if (opt.car && body) {
        let minZ = 1e9, maxZ = -1e9;
        for (let k = 2; k < body.pos.length; k += 3) { minZ = Math.min(minZ, body.pos[k]); maxZ = Math.max(maxZ, body.pos[k]); }
        for (let v = 0; v < body.pos.length / 3; v++) {
            const z = body.pos[v * 3 + 2], [r, g2, b] = body.col.slice(v * 4, v * 4 + 3);
            if (body.col[v * 4 + 3]) continue;
            if (z > maxZ - 0.25 && r > 220 && g2 > 200 && b > 150) body.col[v * 4 + 3] = 64;        // headlight
            if (z < minZ + 0.25 && r > 180 && g2 < 90 && b < 90) body.col[v * 4 + 3] = 64;          // tail light
        }
    }
    pivots(parts);
    return { parts, opt };
}

// Kenney car kit models face +Z with the left side on +X (right-handed, y up): the game uses the same frame.
function mirrorX(parts) {
    for (const p of parts) {
        for (let k = 0; k < p.pos.length; k += 3) { p.pos[k] = -p.pos[k]; p.nrm[k] = -p.nrm[k]; }
        p.pivot[0] = -p.pivot[0];
        for (let t = 0; t < p.idx.length; t += 3) { const a = p.idx[t + 1]; p.idx[t + 1] = p.idx[t + 2]; p.idx[t + 2] = a; }
        const a = p.min[0]; p.min[0] = -p.max[0]; p.max[0] = -a;
        if (p.name === 'wfl') p.name = 'wfr'; else if (p.name === 'wfr') p.name = 'wfl';
        else if (p.name === 'wbl') p.name = 'wbr'; else if (p.name === 'wbr') p.name = 'wbl';
    }
}

function roofLine(parts, name) {
    // the roof panel: painted surface within ~0.2 m of the highest painted point (a flat-top wedge has none)
    if (name === 'car_wedge') return 99;
    const b = parts.find(p => p.name === 'body');
    let top = -1e9;
    for (let v = 0; v < b.pos.length / 3; v++) if (b.col[v * 4 + 3] === 255) top = Math.max(top, b.pos[v * 3 + 1]);
    return +(top - 0.22).toFixed(3);
}

const chunks = [];
let offset = 0;
const index = {};
function push(buf) {
    const pad = (4 - (offset % 4)) % 4;
    if (pad) { chunks.push(Buffer.alloc(pad)); offset += pad; }
    const at = offset; chunks.push(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)); offset += buf.byteLength; return at;
}
let tris = 0;
for (const [name, def] of Object.entries(MODELS)) {
    const { parts, opt } = convert(name, def);
    if (opt.car) {
        const b = parts.find(p => p.name === 'body');
        const cx = (b.min[0] + b.max[0]) / 2, cz = (b.min[2] + b.max[2]) / 2;
        for (const p of parts) {
            if (p.name[0] === 'w') { p.pivot[0] -= cx; p.pivot[2] -= cz; }
            else for (let k = 0; k < p.pos.length; k += 3) { p.pos[k] -= cx; p.pos[k + 2] -= cz; }
            p.min[0] -= cx; p.max[0] -= cx; p.min[2] -= cz; p.max[2] -= cz;
        }
    }
    // rest the model on y = 0
    let minY = 1e9;
    for (const p of parts) for (let k = 1; k < p.pos.length; k += 3) minY = Math.min(minY, p.pos[k] + p.pivot[1]);
    const out = [];
    for (const p of parts) {
        for (let k = 1; k < p.pos.length; k += 3) if (p.name[0] !== 'w') p.pos[k] -= minY;
        if (p.name[0] === 'w') p.pivot[1] -= minY;
        p.min[1] -= minY; p.max[1] -= minY;
        const n = p.pos.length / 3;
        const nrm = new Int8Array(n * 4);
        for (let v = 0; v < n; v++) for (let c = 0; c < 3; c++) nrm[v * 4 + c] = Math.round(p.nrm[v * 3 + c] * 127);
        const entry = {
            name: p.name, n, i: p.idx.length,
            pos: push(new Float32Array(p.pos)), nrm: push(nrm), col: push(new Uint8Array(p.col)),
            idx: push(new Uint16Array(p.idx)), pivot: p.pivot.map(v => +v.toFixed(4)),
            min: p.min.map(v => +v.toFixed(3)), max: p.max.map(v => +v.toFixed(3))
        };
        if (p.radius) entry.radius = +p.radius.toFixed(4);
        tris += p.idx.length / 3;
        out.push(entry);
    }
    index[name] = { parts: out };
    if (opt.paintColor) index[name].paint = opt.paintColor.split(',').map(Number);
    if (opt.paintMat) index[name].paint = [232, 85, 83];
    // the roof line: paint above the top of the side windows can take a second colour (two-tone roofs)
    if (opt.car) index[name].roofY = roofLine(parts, name);
}
fs.mkdirSync(path.join(ROOT, 'assets'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'assets/models.bin'), Buffer.concat(chunks));
fs.writeFileSync(path.join(ROOT, 'assets/models.json'), JSON.stringify(index));
console.log('models', Object.keys(index).length, 'bytes', offset, 'triangles', tris);
