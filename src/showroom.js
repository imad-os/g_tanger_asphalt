// The menu backdrop: the selected car turning slowly on a lit platform. One car, a floor disc, a sky dome.
import * as THREE from 'three';
import { CarView, carDims } from './carview.js';
import { Vehicle, SPECS } from './vehicle.js';
import { U } from './shaders.js';
import { setTime } from './game.js';

export class Showroom {
    constructor(quality) {
        this.scene = new THREE.Scene();
        this.cam = new THREE.PerspectiveCamera(34, 16 / 9, 0.5, 200);
        this.angle = 0.6; this.car = null; this.carId = '';
        // floor: concentric rings in vertex colours (dark with a bright rim)
        const g = new THREE.CircleGeometry(9, 64, 0, Math.PI * 2); g.rotateX(-Math.PI / 2);
        const n = g.attributes.position.count, col = new Uint8Array(n * 4), nrm = new Int8Array(n * 4);
        for (let i = 0; i < n; i++) {
            const x = g.attributes.position.getX(i), z = g.attributes.position.getZ(i), r = Math.hypot(x, z) / 9;
            const rim = r > 0.97 ? 1 : 0;
            const v = rim ? 230 : 40 + (1 - r) * 30;
            col[i * 4] = rim ? 255 : v; col[i * 4 + 1] = rim ? 190 : v; col[i * 4 + 2] = rim ? 40 : v + 6; col[i * 4 + 3] = 0;
            nrm[i * 4 + 1] = 127;
        }
        g.setAttribute('col', new THREE.BufferAttribute(col, 4, true)); g.setAttribute('normal', new THREE.BufferAttribute(nrm, 4, true));
        this.floor = new THREE.Mesh(g, new THREE.ShaderMaterial({
            uniforms: U,
            vertexShader: 'attribute vec4 col; varying vec3 vC; varying vec2 vP; void main(){ vC = col.rgb; vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
            fragmentShader: 'varying vec3 vC; varying vec2 vP; void main(){ float r = length(vP) / 9.0; float g = 0.5 + 0.5 * sin(r * 70.0); vec3 c = vec3(0.07, 0.075, 0.09) * (1.6 - r) * (0.9 + 0.1 * g); c += vec3(1.0, 0.62, 0.12) * smoothstep(0.955, 0.975, r) * (1.0 - smoothstep(0.985, 1.0, r)) * 1.2; c += vec3(1.0, 0.62, 0.12) * exp(-abs(r - 0.62) * 80.0) * 0.25; gl_FragColor = vec4(c, 1.0); }'
        }));
        this.scene.add(this.floor);
        const bg = new THREE.Mesh(new THREE.SphereGeometry(80, 24, 12), new THREE.ShaderMaterial({
            side: THREE.BackSide, depthWrite: false,
            vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
            fragmentShader: 'varying vec3 vD; void main(){ float h = vD.y; vec3 c = mix(vec3(0.02,0.03,0.06), vec3(0.06,0.12,0.22), smoothstep(-0.1, 0.6, h)); c += vec3(1.0,0.45,0.1) * exp(-abs(h - 0.02) * 30.0) * 0.35; gl_FragColor = vec4(c,1.0); }'
        }));
        this.scene.add(bg);
        this.veh = null;
    }
    show(carId, paint, roof) {
        if (this.carId !== carId) {
            if (this.car) this.car.dispose();
            const spec = SPECS[carId];
            this.car = new CarView(this.scene, spec.model, paint, roof);
            this.veh = new Vehicle(spec, carDims(spec.model));
            this.veh.setPose(0, this.car.dims.cg + 0.03, 0, 0);
            for (const w of this.veh.wheels) { w.contact = true; w.travel = 0.25; }
            this.carId = carId;
        }
        this.car.setPaint(paint, roof);
    }
    update(dt) {
        this.angle += dt * 0.35;
        if (!this.veh) return;
        const h = this.angle / 2;
        this.veh.qy = Math.sin(h); this.veh.qw = Math.cos(h); this.veh.qx = 0; this.veh.qz = 0; this.veh.updateR();
        this.veh.groundY = 0;
        this.car.sync(this.veh, 5, 0, 0);
    }
    render(renderer) {
        setTime('day');
        U.uSun.value.set(-0.55, 0.7, -0.45).normalize();   // key light from the camera side
        U.uFogFar.value = 1e4; U.uFogNear.value = 1e4 - 1;
        const s = renderer.getSize(this.sz || (this.sz = new THREE.Vector2()));
        this.cam.aspect = s.x / s.y; this.cam.updateProjectionMatrix();
        // the car sits on the right half of the screen, the menus on the left
        this.cam.position.set(-7.5, 2.6, -9.2); this.cam.lookAt(2.6, 0.9, 0);
        renderer.setViewport(0, 0, s.x, s.y);
        renderer.render(this.scene, this.cam);
    }
}
