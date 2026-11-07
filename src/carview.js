// A car on screen: body + four wheels (shared geometry), its own paint, a soft shadow and nitro flames.
// LOD: wheels and flames are dropped far away, the whole car beyond the fog.
import * as THREE from 'three';
import { partGeometry, modelInfo } from './assets.js';
import { carMaterial, glowMaterial, shadeMaterial } from './shaders.js';

const WHEELS = ['wfl', 'wfr', 'wbl', 'wbr'];

// physics dimensions read from the model
export function carDims(model) {
    const info = modelInfo(model);
    const body = info.parts.find(p => p.name === 'body');
    const wheels = WHEELS.map(n => {
        const p = info.parts.find(q => q.name === n);
        return p ? { x: p.pivot[0], y: p.pivot[1], z: p.pivot[2], r: p.radius } : null;
    });
    // some models name wheels differently: fill from the body box
    const w = body.max[0] - body.min[0], l = body.max[2] - body.min[2], h = body.max[1];
    for (let k = 0; k < 4; k++) if (!wheels[k]) wheels[k] = { x: (k & 1 ? -1 : 1) * w * 0.4, y: 0.35, z: (k < 2 ? 1 : -1) * l * 0.32, r: 0.35 };
    return { w, l, h, cg: Math.min(0.62, h * 0.38), wheels, front: body.max[2], back: body.min[2] };
}

let flameGeo = null, shadowGeo = null;
function getFlame() {
    if (flameGeo) return flameGeo;
    const g = new THREE.ConeGeometry(0.16, 1, 8, 1, true);
    g.rotateX(-Math.PI / 2); g.translate(0, 0, -0.5);
    const n = g.attributes.position.count, c = new Uint8Array(n * 4);
    for (let i = 0; i < n; i++) {
        const z = g.attributes.position.getZ(i);
        const t = -z;   // 0 at the pipe, 1 at the tip
        c[i * 4] = 120 + 135 * (1 - t); c[i * 4 + 1] = 160 * (1 - t) + 60; c[i * 4 + 2] = 255; c[i * 4 + 3] = 255 * (1 - t * 0.9);
    }
    g.setAttribute('col', new THREE.BufferAttribute(c, 4, true));
    flameGeo = g; return g;
}
function getShadow() {
    if (shadowGeo) return shadowGeo;
    const g = new THREE.PlaneGeometry(1, 1); g.rotateX(-Math.PI / 2);
    const c = new Uint8Array(4 * 4); for (let i = 0; i < 4; i++) { c[i * 4 + 3] = 140; }
    g.setAttribute('col', new THREE.BufferAttribute(c, 4, true));
    shadowGeo = g; return g;
}
let shadowMat = null, flameMat = null;

export class CarView {
    constructor(scene, model, paint, roof) {
        this.scene = scene;
        this.root = new THREE.Group();
        this.root.matrixAutoUpdate = false;
        const info = modelInfo(model);
        this.mat = carMaterial(paint, roof, info.roofY);
        this.body = new THREE.Mesh(partGeometry(model, 'body'), this.mat);
        this.body.matrixAutoUpdate = false;
        this.root.add(this.body);
        // extra non-wheel parts (spoilers) are kept with the body
        for (const p of info.parts) if (p.name !== 'body' && p.name[0] !== 'w') {
            const m = new THREE.Mesh(partGeometry(model, p.name), this.mat); m.matrixAutoUpdate = false; this.root.add(m);
        }
        this.wheels = [];
        const dims = carDims(model);
        this.dims = dims;
        for (let k = 0; k < 4; k++) {
            const has = info.parts.find(p => p.name === WHEELS[k]);
            const m = new THREE.Mesh(has ? partGeometry(model, WHEELS[k]) : partGeometry('debris_tire', 'body'), this.mat);
            m.matrixAutoUpdate = false;
            m.userData.base = new THREE.Vector3(dims.wheels[k].x, dims.wheels[k].y, dims.wheels[k].z);
            this.root.add(m); this.wheels.push(m);
        }
        shadowMat = shadowMat || shadeMaterial();
        this.shadow = new THREE.Mesh(getShadow(), shadowMat);
        this.shadow.matrixAutoUpdate = false;
        this.shadow.renderOrder = 1;
        scene.add(this.shadow);
        flameMat = flameMat || glowMaterial();
        this.flames = [];
        for (const sx of [0.35, -0.35]) {
            const f = new THREE.Mesh(getFlame(), flameMat);
            f.position.set(sx * dims.w * 0.6, dims.h * 0.28, dims.back - 0.05);
            f.visible = false; f.renderOrder = 2;
            this.root.add(f); this.flames.push(f);
        }
        this.q = new THREE.Quaternion(); this.e = new THREE.Euler(); this.tmp = new THREE.Matrix4(); this.v3 = new THREE.Vector3(); this.s3 = new THREE.Vector3(1, 1, 1);
        scene.add(this.root);
        this.lod = 0;
    }
    // roof: a second colour for the roof panel (-1 / undefined = the body colour)
    setPaint(hex, roof) { this.mat.uniforms.uPaint.value.setHex(hex); this.mat.uniforms.uRoof.value.setHex(roof >= 0 ? roof : hex); }

    // v: Vehicle; a: interpolation (the state is already the latest); camDist decides the LOD
    sync(v, camDist, nitro, braking) {
        const R = v.R;
        // root matrix: columns = left, up, forward; translation = centre of mass minus cg height along up
        const m = this.root.matrix.elements;
        const cg = this.dims.cg;
        m[0] = R[0]; m[1] = R[1]; m[2] = R[2]; m[3] = 0;
        m[4] = R[3]; m[5] = R[4]; m[6] = R[5]; m[7] = 0;
        m[8] = R[6]; m[9] = R[7]; m[10] = R[8]; m[11] = 0;
        const cz = v.cgZ || 0;
        m[12] = v.px - R[3] * cg - R[6] * cz; m[13] = v.py - R[4] * cg - R[7] * cz; m[14] = v.pz - R[5] * cg - R[8] * cz; m[15] = 1;
        this.root.matrixWorldNeedsUpdate = true;
        const near = camDist < 140;
        this.lod = camDist > 900 ? 2 : near ? 0 : 1;
        this.root.visible = this.lod < 2;
        for (let k = 0; k < 4; k++) {
            const w = this.wheels[k], wh = v.wheels[k];
            w.visible = this.lod === 0 || camDist < 260;
            if (!w.visible) continue;
            const b = w.userData.base;
            // wheel: suspension travel, steering (front), spin about its axle (local X)
            const steer = wh.front ? v.steerNow : 0;
            this.e.set(wh.spinAngle, steer, 0, 'YXZ');
            this.q.setFromEuler(this.e);
            this.v3.set(b.x, b.y + (0.1 - (wh.contact ? wh.travel - 0.25 : 0.12)) * 0.6, b.z);
            w.matrix.compose(this.v3, this.q, this.s3);
        }
        const nf = nitro > 0 && this.lod === 0;
        for (const f of this.flames) { f.visible = nf; if (nf) { const s = 0.7 + nitro * (0.8 + Math.random() * 0.5); f.scale.set(1, 1, s * 1.6); f.updateMatrix(); } }
        this.mat.uniforms.uBrake.value = braking;
        // shadow: flat on the ground under the car, fades with height
        const sm = this.shadow.matrix.elements;
        const yaw = Math.atan2(R[6], R[8]);
        const cs = Math.cos(yaw), sn = Math.sin(yaw);
        const gy = v.groundY !== undefined ? v.groundY : v.py - 0.6;
        const h = Math.max(0, v.py - gy - 0.5);
        const k = Math.max(0.3, 1 - h * 0.12);
        const W = this.dims.w * 1.15 * k, L = this.dims.l * 1.05 * k;
        sm[0] = cs * W; sm[1] = 0; sm[2] = -sn * W; sm[3] = 0;
        sm[4] = 0; sm[5] = 1; sm[6] = 0; sm[7] = 0;
        sm[8] = sn * L; sm[9] = 0; sm[10] = cs * L; sm[11] = 0;
        sm[12] = v.px; sm[13] = gy + 0.06; sm[14] = v.pz; sm[15] = 1;
        this.shadow.matrixWorldNeedsUpdate = true;
        this.shadow.visible = this.lod === 0 && h < 8;
    }
    dispose() {
        this.scene.remove(this.root); this.scene.remove(this.shadow);
        this.mat.dispose();
    }
}
