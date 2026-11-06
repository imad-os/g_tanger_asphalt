// Loads the baked models (assets/models.bin) and the routes. Geometry for a model part is created once and shared.
import * as THREE from 'three';
import { VERSION } from './version.js';

export const Models = { index: null, buf: null, geo: {} };

export async function loadModels(onProgress) {
    const [idx, bin] = await Promise.all([
        fetch('assets/models.json?v=' + VERSION).then(r => r.json()),
        fetchBin('assets/models.bin?v=' + VERSION, onProgress)
    ]);
    Models.index = idx; Models.buf = bin;
}

export async function fetchBin(url, onProgress) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(url + ' ' + r.status);
    if (!onProgress || !r.body || !r.headers.get('content-length')) return r.arrayBuffer();
    const total = +r.headers.get('content-length');
    const reader = r.body.getReader();
    const out = new Uint8Array(total);
    let got = 0;
    for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        out.set(value, got); got += value.length;
        onProgress(got / total);
    }
    return out.buffer;
}

// raw typed views of one part (for merging into chunk geometry)
export function partData(model, partName) {
    const m = Models.index[model];
    const p = m.parts.find(q => q.name === partName) || m.parts[0];
    const b = Models.buf;
    return {
        part: p,
        pos: new Float32Array(b, p.pos, p.n * 3),
        nrm: new Int8Array(b, p.nrm, p.n * 4),
        col: new Uint8Array(b, p.col, p.n * 4),
        idx: new Uint16Array(b, p.idx, p.i)
    };
}

export function partGeometry(model, partName) {
    const key = model + '/' + partName;
    if (Models.geo[key]) return Models.geo[key];
    const d = partData(model, partName);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(d.pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(d.nrm, 4, true));
    g.setAttribute('col', new THREE.BufferAttribute(d.col, 4, true));
    g.setIndex(new THREE.BufferAttribute(d.idx, 1));
    g.computeBoundingSphere();
    Models.geo[key] = g;
    return g;
}

export function modelInfo(model) { return Models.index[model]; }

export async function loadRoutesIndex() {
    return fetch('assets/routes.json?v=' + VERSION).then(r => r.json());
}
export async function loadRoute(id) {
    const [bin, bld] = await Promise.all([
        fetchBin('assets/routes/' + id + '.bin?v=' + VERSION),
        fetch('assets/routes/' + id + '.bld.json?v=' + VERSION).then(r => r.ok ? r.json() : []).catch(() => [])
    ]);
    return { bin, bld };
}
