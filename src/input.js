// Controls for one or two players. Everything comes through the My PC SDK: actions (TV remote, keyboards, the
// touch pad) and MyPC.gamepad (every button, trigger and stick of real pads and phone controllers).
// Every game action can be remapped per player to any pad button, trigger direction, stick direction or remote
// action; the maps are saved with MyPC.save('controls').
//
// Button names follow the Nintendo places (owner rule): standard index 0 = bottom = B, 1 = right = A,
// 2 = left = Y, 3 = top = X, 9 = +, 8 = −.

export const ACTIONS = ['accel', 'brake', 'left', 'right', 'nitro', 'drift', 'look', 'camera'];

export const PAD_NAMES = ['B', 'A', 'Y', 'X', 'L', 'R', 'ZL', 'ZR', '−', '+', 'L3', 'R3', 'Up', 'Down', 'Left', 'Right', 'Home', 'Capture'];
export const ACT_NAMES = { left: '◀', right: '▶', up: '▲', down: '▼', jump: 'OK', confirm: 'OK', run: 'Run', cancel: 'Back' };

export function defaultMap() {
    return {
        accel: [{ b: 7 }],
        brake: [{ b: 6 }, { k: 'down' }],
        left: [{ a: 0, s: -1 }, { b: 14 }, { k: 'left' }],
        right: [{ a: 0, s: 1 }, { b: 15 }, { k: 'right' }],
        nitro: [{ b: 0 }, { b: 5 }, { k: 'jump' }, { k: 'up' }],
        drift: [{ b: 1 }, { b: 4 }, { k: 'run' }],
        look: [{ b: 2 }, { k: 'cancel' }],
        camera: [{ b: 3 }, { b: 11 }]
    };
}
export function bindLabel(b) {
    if (!b) return '—';
    if (b.b !== undefined) return PAD_NAMES[b.b] || ('Button ' + b.b);
    if (b.a !== undefined) return (b.a < 2 ? 'L stick ' : 'R stick ') + (b.a % 2 === 0 ? (b.s < 0 ? '◀' : '▶') : (b.s < 0 ? '▲' : '▼'));
    if (b.k) return ACT_NAMES[b.k] || b.k;
    return '?';
}

class Player {
    constructor() {
        this.map = defaultMap();
        this.devs = null;            // null = every device (one player); else a Set of device ids
        this.ctl = { steer: 0, throttle: 0, brake: 0, nitro: 0, handbrake: 0, look: 0 };
        this.edge = { camera: 0, nitro: 0 };
        this.prev = { camera: 0, nitro: 0 };
        this.lastNitroDown = -1;
        this.double = false;
        this.auto = true;            // auto accelerate
    }
}

export class Input {
    constructor() {
        this.players = [new Player(), new Player()];
        this.pads = {};             // dev -> { b: Float32Array(24), a: Float32Array(4) }
        this.acts = {};             // dev -> { action: true }
        this.capture = null;        // { player, action, slot, until, cb }
        this.join = null;           // function(dev) during the 2-player lobby
        this.menuCb = null;         // function(action, dev) for menus
        this.time = 0;
    }
    load(saved) {
        if (!saved) return;
        for (let p = 0; p < 2; p++) if (saved[p]) {
            const m = defaultMap();
            for (const k of ACTIONS) if (Array.isArray(saved[p].map && saved[p].map[k])) m[k] = saved[p].map[k];
            this.players[p].map = m;
            this.players[p].auto = saved[p].auto !== false;
        }
    }
    save() { return this.players.map(p => ({ map: p.map, auto: p.auto })); }

    pad(dev) { return this.pads[dev] || (this.pads[dev] = { b: new Float32Array(24), a: new Float32Array(4) }); }
    owner(dev) {
        if (!this.players[1].devs) return 0;
        if (this.players[0].devs && this.players[0].devs.has(dev)) return 0;
        if (this.players[1].devs.has(dev)) return 1;
        return -1;
    }

    // ---- from the SDK ----
    onAction(action, pressed, repeat, dev) {
        const a = this.acts[dev] || (this.acts[dev] = {});
        if (repeat) { if (this.menuCb) this.menuCb(action, dev, true); return; }
        a[action] = pressed;
        if (pressed && this.join && this.join(dev, 'act:' + action)) return;
        if (pressed && this.capture && (this.capture.dev === undefined || this.capture.dev === dev || this.owner(dev) === this.capture.player)) {
            if (action === 'confirm') return;     // OK is reported as confirm + jump: keep the jump
            this.finishCapture({ k: action });
            return;
        }
        if (pressed && this.menuCb) this.menuCb(action, dev, false);
    }
    onButton(i, pressed, value, dev) {
        const p = this.pad(dev);
        p.b[i] = pressed ? Math.max(0.01, value || 1) : 0;
        if (pressed && this.join && this.join(dev, 'btn:' + i)) return;
        if (pressed && this.capture && (this.owner(dev) === this.capture.player || this.capture.any)) {
            if (i === 16) return;
            this.finishCapture({ b: i });
        }
    }
    onAxes(axes, dev) {
        const p = this.pad(dev);
        for (let k = 0; k < 4 && k < axes.length; k++) {
            const v = axes[k];
            if (this.capture && Math.abs(v) > 0.7 && Math.abs(p.a[k]) <= 0.7 && (this.owner(dev) === this.capture.player || this.capture.any)) {
                p.a[k] = v; this.finishCapture({ a: k, s: v < 0 ? -1 : 1 });
            }
            p.a[k] = v;
        }
    }
    startCapture(player, action, slot, cb) {
        this.capture = { player, action, slot, until: this.time + 5, cb };
    }
    finishCapture(bind) {
        const c = this.capture; this.capture = null;
        const list = this.players[c.player].map[c.action];
        // a button keeps one job per player: remove it from other actions
        const same = (x) => (x.b !== undefined && x.b === bind.b) || (x.a !== undefined && x.a === bind.a && x.s === bind.s) || (x.k && x.k === bind.k);
        for (const k of ACTIONS) { const l = this.players[c.player].map[k]; for (let j = l.length - 1; j >= 0; j--) if (same(l[j])) l.splice(j, 1); }
        if (c.slot < list.length) list[c.slot] = bind; else list.push(bind);
        if (c.cb) c.cb(bind);
    }

    // value of one binding for a player (0..1)
    value(p, b) {
        const P = this.players[p];
        let best = 0;
        if (b.b !== undefined || b.a !== undefined) {
            for (const dev in this.pads) {
                if (P.devs && !P.devs.has(dev)) continue;
                if (!P.devs && this.players[1].devs && this.players[1].devs.has(dev)) continue;
                const pd = this.pads[dev];
                let v = 0;
                if (b.b !== undefined) v = pd.b[b.b];
                else { const x = pd.a[b.a] * b.s; v = x > 0.15 ? (x - 0.15) / 0.85 : 0; }
                if (v > best) best = v;
            }
        } else if (b.k) {
            for (const dev in this.acts) {
                if (P.devs && !P.devs.has(dev)) continue;
                if (!P.devs && this.players[1].devs && this.players[1].devs.has(dev)) continue;
                if (this.acts[dev][b.k]) best = 1;
            }
        }
        return best;
    }
    act(p, name) {
        const l = this.players[p].map[name];
        let v = 0;
        for (let k = 0; k < l.length; k++) { const x = this.value(p, l[k]); if (x > v) v = x; }
        return v;
    }

    // called once per tick: fills players[p].ctl and edges
    poll(dt) {
        this.time += dt;
        if (this.capture && this.time > this.capture.until) { const c = this.capture; this.capture = null; if (c.cb) c.cb(null); }
        for (let p = 0; p < 2; p++) {
            const P = this.players[p], c = P.ctl;
            const l = this.act(p, 'left'), r = this.act(p, 'right');
            let st = r - l;
            // a gentle curve: fine control near the centre of the stick
            st = Math.sign(st) * Math.pow(Math.abs(st), 1.4);
            c.steer = st;
            c.throttle = this.act(p, 'accel');
            c.brake = this.act(p, 'brake');
            c.handbrake = this.act(p, 'drift') > 0.3 ? 1 : 0;
            const n = this.act(p, 'nitro') > 0.3 ? 1 : 0;
            c.nitro = n;
            c.look = this.act(p, 'look') > 0.3 ? 1 : 0;
            const cam = this.act(p, 'camera') > 0.3 ? 1 : 0;
            P.edge.camera = cam && !P.prev.camera ? 1 : 0; P.prev.camera = cam;
            P.double = false;
            if (n && !P.prev.nitro) { if (this.time - P.lastNitroDown < 0.32) P.double = true; P.lastNitroDown = this.time; }
            P.prev.nitro = n;
        }
    }
    clearHeld() { for (const d in this.acts) this.acts[d] = {}; for (const d in this.pads) { this.pads[d].b.fill(0); this.pads[d].a.fill(0); } }
}
