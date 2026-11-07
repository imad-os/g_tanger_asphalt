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
const KEY_NAMES = { ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Space: 'Space', Enter: 'Enter', ShiftLeft: 'Shift', ShiftRight: 'R Shift', ControlLeft: 'Ctrl', ControlRight: 'R Ctrl', AltLeft: 'Alt', AltRight: 'R Alt' };
export function bindLabel(b) {
    if (!b) return '—';
    if (b.c) return '⌨ ' + (KEY_NAMES[b.c] || b.c.replace(/^Key|^Digit/, '').replace(/^Numpad/, 'Num '));
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
        this.prev = { camera: 0, nitro: 0, drift: 0 };
        this.lastDriftDown = -1; this.spin = false;
        this.lastNitroDown = -1;
        this.double = false;
        this.auto = true;            // auto accelerate
        this.curve = 1.4;            // steering response: 1 direct ... 2 gentle near the centre
        this.dead = 0.15;            // stick dead zone
    }
}

export class Input {
    constructor() {
        this.players = [new Player(), new Player()];
        this.pads = {};             // dev -> { b: Float32Array(24), a: Float32Array(4) }
        this.acts = {};             // dev -> { action: true }
        this.capture = null;        // { player, action, slot, until, cb, held, best }
        this.keys = {};             // keyboard keys held (KeyboardEvent.code), when the page gets them itself
        this.join = null;           // function(dev) during the 2-player lobby
        this.menuCb = null;         // function(action, dev) for menus
        this.time = 0;
        this.onKey = (e) => {
            const down = e.type === 'keydown';
            if (down && e.repeat) return;
            this.keys[e.code] = down;
            if (this.capture) { if (down) this.offer({ c: e.code }, 3, 'key:' + e.code); else this.capture.held.delete('key:' + e.code); }
        };
        window.addEventListener('keydown', this.onKey); window.addEventListener('keyup', this.onKey);
    }
    load(saved) {
        if (!saved) return;
        for (let p = 0; p < 2; p++) if (saved[p]) {
            const m = defaultMap();
            for (const k of ACTIONS) if (Array.isArray(saved[p].map && saved[p].map[k])) m[k] = saved[p].map[k];
            this.players[p].map = m;
            this.players[p].auto = saved[p].auto !== false;
            if (saved[p].curve) this.players[p].curve = saved[p].curve;
            if (saved[p].dead !== undefined) this.players[p].dead = saved[p].dead;
        }
    }
    save() { return this.players.map(p => ({ map: p.map, auto: p.auto, curve: p.curve, dead: p.dead })); }

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
        if (this.capture && this.mine(dev)) {
            // OK comes as confirm + jump: the jump is preferred; a pad or keyboard key reported at the same time wins
            if (pressed) this.offer({ k: action }, action === 'confirm' ? 0 : 1, 'act:' + action);
            else this.capture.held.delete('act:' + action);
            return;
        }
        if (pressed && this.menuCb) this.menuCb(action, dev, false);
    }
    onButton(i, pressed, value, dev) {
        const p = this.pad(dev);
        p.b[i] = pressed ? Math.max(0.01, value || 1) : 0;
        if (pressed && this.join && this.join(dev, 'btn:' + i)) return;
        if (this.capture && this.mine(dev)) {
            if (pressed) this.offer({ b: i }, 2, dev + ':b' + i); else this.capture.held.delete(dev + ':b' + i);
        }
    }
    onAxes(axes, dev) {
        const p = this.pad(dev);
        for (let k = 0; k < 4 && k < axes.length; k++) {
            const v = axes[k];
            if (this.capture && this.mine(dev)) {
                const id = dev + ':a' + k + (v < 0 ? '-' : '+');
                if (Math.abs(v) > 0.7 && Math.abs(p.a[k]) <= 0.7) this.offer({ a: k, s: v < 0 ? -1 : 1 }, 2, id);
                if (Math.abs(v) < 0.3) { this.capture.held.delete(dev + ':a' + k + '-'); this.capture.held.delete(dev + ':a' + k + '+'); }
            }
            p.a[k] = v;
        }
    }
    mine(dev) { return this.capture.player === 0 ? this.owner(dev) !== 1 : this.owner(dev) === 1 || !this.players[1].devs; }
    // listen for the next button of ANY kind (pad button, trigger, stick direction, remote / keyboard key) for
    // `secs` seconds. Whatever is already held when it starts (the OK that opened it) is ignored until released.
    startCapture(player, action, slot, cb, secs) {
        const held = new Set();
        for (const dev in this.pads) {
            const pd = this.pads[dev];
            for (let i = 0; i < pd.b.length; i++) if (pd.b[i] > 0) held.add(dev + ':b' + i);
            for (let k = 0; k < 4; k++) if (Math.abs(pd.a[k]) > 0.5) held.add(dev + ':a' + k + (pd.a[k] < 0 ? '-' : '+'));
        }
        for (const dev in this.acts) for (const a in this.acts[dev]) if (this.acts[dev][a]) held.add('act:' + a);
        for (const k in this.keys) if (this.keys[k]) held.add('key:' + k);
        this.capture = { player, action, slot, until: performance.now() + (secs || 3) * 1000, cb, held, best: null, at: 0, start: performance.now() };
        this.capTimer = setInterval(() => this.tickCapture(), 30);
    }
    // a press during listening: the best kind within 80 ms wins (button / key > action)
    offer(bind, prio, id) {
        const c = this.capture;
        if (c.held.has(id) || performance.now() - c.start < 120) return;
        if (!c.best || prio > c.bestP) { c.best = bind; c.bestP = prio; if (!c.at) c.at = performance.now(); }
    }
    tickCapture() {
        const c = this.capture;
        if (!c) { clearInterval(this.capTimer); return; }
        const now = performance.now();
        if (c.best && now - c.at > 80) { this.finishCapture(c.best); return; }
        if (!c.best && now > c.until) { this.capture = null; clearInterval(this.capTimer); if (c.cb) c.cb(null); }
    }
    cancelCapture() { if (this.capture) { this.capture = null; clearInterval(this.capTimer); } }
    finishCapture(bind) {
        const c = this.capture; this.capture = null; clearInterval(this.capTimer);
        const list = this.players[c.player].map[c.action];
        // a button keeps one job per player: remove it from other actions
        const same = (x) => (x.b !== undefined && x.b === bind.b) || (x.a !== undefined && x.a === bind.a && x.s === bind.s) || (x.k && x.k === bind.k) || (x.c && x.c === bind.c);
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
                else { const x = pd.a[b.a] * b.s, dz = P.dead; v = x > dz ? (x - dz) / (1 - dz) : 0; }
                if (v > best) best = v;
            }
        } else if (b.c) {
            if (this.keys[b.c]) best = 1;
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
        for (let p = 0; p < 2; p++) {
            const P = this.players[p], c = P.ctl;
            const l = this.act(p, 'left'), r = this.act(p, 'right');
            // + = left: the car's own frame (+X is left), so pressing right turns right
            let st = l - r;
            // a gentle curve: fine control near the centre of the stick
            st = Math.sign(st) * Math.pow(Math.abs(st), P.curve);
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
            // double press of drift = 360 spin stunt
            P.spin = false;
            if (c.handbrake && !P.prev.drift) { if (this.time - P.lastDriftDown < 0.32) { P.spin = true; P.lastDriftDown = -1; } else P.lastDriftDown = this.time; }
            P.prev.drift = c.handbrake;
        }
    }
    dispose() { window.removeEventListener('keydown', this.onKey); window.removeEventListener('keyup', this.onKey); this.cancelCapture(); }
    clearHeld() { this.keys = {}; for (const d in this.acts) this.acts[d] = {}; for (const d in this.pads) { this.pads[d].b.fill(0); this.pads[d].a.fill(0); } }
}
