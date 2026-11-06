// Tangier Asphalt: boot, the My PC lifecycle, the one loop (fixed 60 Hz updates), menus <-> races.
import * as THREE from 'three';
import { loadModels, loadRoutesIndex, loadRoute } from './assets.js';
import { Session } from './game.js';
import { Input } from './input.js';
import { UI } from './ui.js';
import { Hud } from './hud.js';
import { Sound } from './audio.js';
import { Career } from './career.js';
import { I18n } from './i18n.js';
import { Showroom } from './showroom.js';

const MyPC = window.MyPC;
const STEP = 1 / 60;
const App = {
    renderer: null, canvas: null, info: null, quality: null,
    input: new Input(), session: null, routes: null, hud: null, ui: null, sound: null, career: null, showroom: null,
    raf: 0, last: 0, acc: 0, running: false, frameMs: 0, state: 'boot', paused: false,
    fpsLog: [], workLog: [], logicLog: [], resizes: 0
};
window.TA = App;   // for the performance proof (tests/fps-proof.mjs)

function qualityFor(info) {
    const params = new URLSearchParams(location.search);
    const forced = params.get('q');
    const tier = forced || (info.quality && info.quality.tier) || 'mid';
    // internal resolution: the canvas is drawn at this fraction of 1080p and stretched by the GPU
    const base = { low: 0.6, mid: 0.8, high: 1 }[tier] || 0.8;
    return { tier, scale: base, minScale: tier === 'low' ? 0.45 : 0.55 };
}

function makeRenderer() {
    const canvas = document.getElementById('c');
    const r = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false, alpha: false, preserveDrawingBuffer: /proof/.test(location.search) });
    r.setPixelRatio(1);
    r.outputColorSpace = THREE.LinearSRGBColorSpace;
    r.toneMapping = THREE.NoToneMapping;
    r.sortObjects = true;
    r.info.autoReset = true;
    App.canvas = canvas;
    return r;
}

function resize() {
    App.resizes++;
    const s = App.session ? App.session.scale : App.quality.scale;
    const w = Math.round(1920 * s * Math.min(1, window.innerWidth / 1920 * 1.5)), h = Math.round(w * window.innerHeight / window.innerWidth);
    App.renderer.setSize(w, h, false);
    App.canvas.style.width = '100vw'; App.canvas.style.height = '100vh';
}

// ---- loop ----
function frame(ts) {
    App.raf = requestAnimationFrame(frame);
    const t0 = performance.now();
    if (!App.last) App.last = ts;
    const ms = ts - App.last;
    App.last = ts;
    App.acc += Math.min(100, ms);
    let n = 0;
    while (App.acc >= STEP * 1000 - 0.5 && n < 4) { update(STEP); App.acc -= STEP * 1000; n++; }
    const t1 = performance.now();
    if (App.acc > STEP * 1000 * 2) App.acc = 0;
    draw(ms);
    App.frameMs = ms;
    if (App.fpsLog.length < 20000) { App.fpsLog.push(ms); App.workLog.push(performance.now() - t0); App.logicLog.push(t1 - t0); }
}
function startLoop() { if (!App.raf) { App.last = 0; App.acc = 0; App.raf = requestAnimationFrame(frame); } App.running = true; }
function stopLoop() { if (App.raf) cancelAnimationFrame(App.raf); App.raf = 0; App.running = false; }

function update(dt) {
    App.input.poll(dt);
    if (App.state === 'race' && App.session) {
        App.session.update(dt, App.input);
        App.hud.update(App.session, dt);
        App.sound.update(App.session, dt);
        const race = App.session.race;
        if (race.allPlayersDone() && !App.finishT) App.finishT = 3.5;
        if (App.finishT) { App.finishT -= dt; if (App.finishT <= 0) { App.finishT = 0; endRace(); } }
    } else if (App.showroom && App.ui.wantsShowroom()) App.showroom.update(dt);
    App.ui.tick(dt);
}
function draw(ms) {
    if (App.state === 'race' && App.session) App.session.render(ms);
    else if (App.showroom && App.ui.wantsShowroom()) App.showroom.render(App.renderer);
}

// ---- races ----
async function startRace(cfg) {
    // cfg: { route, players: [{ car, paint, upgrades, assist }], rivals, laps, mode, event }
    App.ui.loading(true);
    App.state = 'loading';
    const meta = App.routes.routes.find(r => r.id === cfg.route);
    const data = await loadRoute(cfg.route);
    if (App.session) { App.session.dispose(); App.session = null; }
    const grid = App.career.grid(cfg);
    const session = new Session(App.renderer, meta, data, { grid, laps: cfg.laps || meta.laps, mode: cfg.mode, traffic: cfg.traffic !== false, trafficCount: App.quality.tier === 'low' ? 7 : 10, time: cfg.time }, App.quality);
    session.onScale = () => resize();
    session.onSound = (k, r, x) => App.sound.event(k, r, x, session);
    App.session = session;
    App.cfg = cfg;
    App.hud.begin(session, cfg);
    App.sound.begin(session);
    App.input.clearHeld();
    resize();
    App.state = 'race';
    App.ui.loading(false);
    App.ui.hide();
    MyPC.setMenu([{ id: 'restart', label: I18n.t('restart') }, { id: 'quit', label: I18n.t('quitRace') }]);
    MyPC.announce && MyPC.announce(meta.name);
}
function endRace(aborted) {
    const s = App.session; if (!s) return;
    const result = aborted ? null : App.career.result(App.cfg, s.race);
    App.sound.end(); App.hud.end();
    s.dispose(); App.session = null;
    App.state = 'menu';
    MyPC.setMenu([]);
    resize();
    if (result) {
        if (result.score) MyPC.submitScore(result.score, {});
        App.ui.results(result);
    } else App.ui.home();
}
App.startRace = startRace;
App.endRace = endRace;

// ---- My PC lifecycle ----
MyPC.init({
    ownMenu: true,
    onInit: async function (info) {
        App.info = info;
        try {
            I18n.set(info.lang);
            App.quality = qualityFor(info);
            App.renderer = makeRenderer();
            resize();
            window.addEventListener('resize', resize);
            await loadModels(p => MyPC.progress(p * 0.8));
            App.routes = await loadRoutesIndex();
            MyPC.progress(0.9);
            App.input.load(MyPC.load('controls', null));
            App.career = new Career(MyPC.load('career', null), App.routes);
            App.hud = new Hud(document.getElementById('hud'));
            App.sound = new Sound(info.volume || { music: 0.7, sfx: 0.8 });
            App.showroom = new Showroom(App.quality);
            App.ui = new UI(App, document.getElementById('ui'));
            App.input.menuCb = (a, dev, rep) => App.ui.input(a, dev, rep);
            MyPC.progress(1);
            MyPC.ready();
        } catch (e) {
            MyPC.report && MyPC.report(e, { where: 'init' });
            MyPC.fail(String(e && e.message || e));
        }
    },
    onStart: function () {
        App.sound.start();
        startLoop();
        const dev = new URLSearchParams(location.search).get('dev');
        if (dev) {   // test hook: ?dev=<route>[&car=gt][&bot][&2p][&time=night]
            const P = new URLSearchParams(location.search), bot = P.has('bot'), car = P.get('car') || 'race';
            const players = [{ car, bot }]; if (P.has('2p')) players.push({ car: P.get('car2') || 'sport', bot });
            startRace({ route: dev, players, rivals: 5, quick: true, time: P.get('time') || undefined });
        }
        else App.ui.title();
    },
    onPause: function () { stopLoop(); App.sound.pause(); App.paused = true; },
    onResume: function () { App.paused = false; App.input.clearHeld(); App.sound.resume(); startLoop(); },
    onDestroy: function () {
        stopLoop();
        window.removeEventListener('resize', resize);
        if (App.session) App.session.dispose();
        App.sound && App.sound.close();
        App.renderer && App.renderer.dispose();
    },
    onInput: function (action, pressed, repeat, dev) {
        if (action === 'menu' && pressed === false) { if (App.state === 'race') MyPC.pause(); else App.ui.input('cancel', dev, false); return; }
        App.input.onAction(action, pressed, repeat, dev);
    },
    onMenu: function (id) {
        if (id === 'restart' && App.cfg) { const c = App.cfg; endRace(true); startRace(c); }
        if (id === 'quit') endRace(true);
    },
    onVolume: function (v) { App.sound && App.sound.volume(v); }
});
if (MyPC.gamepad) {
    MyPC.gamepad.on('button', (i, pressed, value, dev) => App.input.onButton(i, pressed, value, dev));
    MyPC.gamepad.on('axes', (axes, dev) => App.input.onAxes(axes, dev));
}
