// Engine sound, made sample by sample on the audio thread (AudioWorklet, loaded by src/audio.js).
// Petrol / diesel: every cylinder fires once per two crank turns; each firing sends a pressure pulse down the
// exhaust (a short burst whose size follows the load), the pulses ring the exhaust (three resonances + a pipe
// echo), and intake roar (noise shaped by the same pulses), valve ticks, turbo whistle and blow-off, and overrun
// pops are added on top. So a 3-cylinder sounds like a 3-cylinder (firing rate = rpm / 60 * 3 / 2) and a
// cross-plane V8 burbles (its banks fire unevenly). Electric: motor and gear whine that follow the motor speed,
// plus road roar. No allocation in process().
const TAU = Math.PI * 2;

class Res {   // band pass with 0 dB peak (RBJ cookbook), direct form I
    constructor() { this.x1 = 0; this.x2 = 0; this.y1 = 0; this.y2 = 0; this.b0 = 0; this.a1 = 0; this.a2 = 0; }
    set(f, q, sr) {
        const w = TAU * f / sr, al = Math.sin(w) / (2 * q), a0 = 1 + al;
        this.b0 = al / a0; this.a1 = 2 * Math.cos(w) / a0; this.a2 = -(1 - al) / a0;
    }
    run(x) {
        const y = this.b0 * (x - this.x2) + this.a1 * this.y1 + this.a2 * this.y2;
        this.x2 = this.x1; this.x1 = x; this.y2 = this.y1; this.y1 = y; return y;
    }
}

class Engine extends AudioWorkletProcessor {
    static get parameterDescriptors() {
        return [
            { name: 'rpm', defaultValue: 900, minValue: 0, maxValue: 20000, automationRate: 'k-rate' },
            { name: 'load', defaultValue: 0, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
            { name: 'speed', defaultValue: 0, minValue: 0, maxValue: 200, automationRate: 'k-rate' },
            { name: 'gain', defaultValue: 0, minValue: 0, maxValue: 2, automationRate: 'k-rate' }
        ];
    }
    constructor(opt) {
        super();
        const o = (opt && opt.processorOptions) || {};
        const sr = this.sr = sampleRate;
        this.cyl = o.cyl || 4; this.turbo = !!o.turbo; this.ev = !!o.ev; this.diesel = !!o.diesel;
        this.rpmMax = o.rpmMax || 6500; this.drive = o.drive || 0.6;
        let seed = (o.seed || 1) * 9301 + 49297;
        this.rand = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
        // firing: evenly spaced over the 720° cycle; small fixed differences between cylinders (real engines are
        // never perfect), cross-plane V8: banks fire L R L L R L R R
        const n = this.cyl;
        this.fireAt = new Float32Array(n); this.amp = new Float32Array(n); this.bank = new Uint8Array(n);
        const v8 = [0, 1, 0, 0, 1, 0, 1, 1];
        for (let i = 0; i < n; i++) {
            const at = i / n + (this.rand() - 0.5) * 0.012 / n;
            this.fireAt[i] = at - Math.floor(at);
            this.amp[i] = 1 + (this.rand() - 0.5) * 0.14;
            this.bank[i] = n === 8 ? v8[i] : n >= 6 ? i & 1 : 0;
        }
        this.phase = 0; this.next = 0;
        // one pulse generator per bank: gamma-shaped pressure burst
        this.pt = new Float32Array(2).fill(1e9); this.pa = new Float32Array(2); this.ptau = new Float32Array(2);
        // exhaust: body / mid / rasp resonances per bank, then a short pipe echo
        this.r1 = [new Res(), new Res()]; this.r2 = [new Res(), new Res()]; this.r3 = [new Res(), new Res()];
        const big = n >= 8 ? 1 : n >= 6 ? 0.85 : n >= 4 ? 0.7 : 0.6;
        this.f1 = this.diesel ? 75 : n >= 8 ? 90 : n >= 6 ? 105 : 115; this.f2 = 420 / Math.sqrt(big); this.f3 = this.diesel ? 1500 : 1900;
        // only the cross-plane V8 has two clearly different banks (its burble); even-firing engines sound as one
        const v8x = n === 8;
        for (let b = 0; b < 2; b++) {
            this.r1[b].set(this.f1 * (b && v8x ? 1.08 : 1), 2.2, sr);
            this.r2[b].set(this.f2 * (b && v8x ? 0.93 : 1), 3.0, sr);
            this.r3[b].set(this.f3, 2.0, sr);
        }
        this.echo = new Float32Array(2048); this.ew = 0;
        this.eLen = Math.round(sr * (n >= 8 ? 0.0062 : n >= 6 ? 0.0055 : 0.0042));
        this.bankLag = n === 8 ? Math.round(sr * 0.0007) : 0;
        this.lagBuf = new Float32Array(64); this.lw = 0;
        // intake / mechanical / turbo / EV state
        this.env = 0; this.lpN = 0; this.hpN = 0; this.road = 0; this.road2 = 0;
        this.boost = 0; this.tw = 0; this.bov = 0; this.lastLoad = 0;
        this.ticks = 0; this.tickT = 1e9;
        this.wp1 = 0; this.wp2 = 0; this.wp3 = 0;
        this.dc = 0; this.dcx = 0; this.out = 0;
        this.rpmS = 0; this.loadS = 0; this.wob = 0; this.wobT = 0;
        this.popT = 1e9; this.popA = 0;
    }
    pulse(b, a, tau) {
        // a new burst rides on what is left of the last one
        this.pt[b] = 0; this.pa[b] = a; this.ptau[b] = tau;
    }
    process(inputs, outputs, P) {
        const out = outputs[0][0]; if (!out) return true;
        const sr = this.sr, N = out.length;
        const rpmT = P.rpm[0], loadT = P.load[0], spd = P.speed[0], gain = P.gain[0];
        const ev = this.ev;
        for (let i = 0; i < N; i++) {
            // smooth the controls per sample (no zipper noise)
            this.rpmS += (rpmT - this.rpmS) * 0.0012;
            this.loadS += (loadT - this.loadS) * 0.0015;
            const load = this.loadS;
            const noise = this.rand() * 2 - 1;
            // road roar for every car: low rumble that grows with speed
            this.road += (noise - this.road) * 0.02; this.road2 += (this.road - this.road2) * 0.05;
            let y = this.road2 * Math.min(1.2, spd * 0.03) * 0.9;
            if (ev) {
                const f = this.rpmS / 60;   // motor revolutions per second
                this.wp1 += TAU * f * 3 / sr; this.wp2 += TAU * f * 7.3 / sr; this.wp3 += TAU * f * 0.5 / sr;
                if (this.wp1 > TAU) this.wp1 -= TAU; if (this.wp2 > TAU) this.wp2 -= TAU; if (this.wp3 > TAU) this.wp3 -= TAU;
                const lv = 0.25 + load * 0.75, fade = Math.min(1, f / 15);
                y += (Math.sin(this.wp1) * 0.09 + Math.sin(this.wp2) * 0.035 * lv + Math.sin(this.wp3) * 0.05) * lv * fade;
                // inverter hiss under load
                this.hpN = noise - this.lpN; this.lpN += (noise - this.lpN) * 0.3;
                y += this.hpN * 0.012 * load * fade;
            } else {
                // idle wobble: a real idle hunts a little
                this.wobT -= 1; if (this.wobT <= 0) { this.wobT = sr * (0.2 + this.rand() * 0.3); this.wob = (this.rand() - 0.5) * 0.03; }
                const rpm = Math.max(300, this.rpmS * (1 + (this.rpmS < 1200 ? this.wob : this.wob * 0.2)));
                const cps = rpm / 120;   // full 720° cycles per second
                const prev = this.phase;
                this.phase += cps / sr;
                const n = this.cyl;
                const interval = 1 / (cps * n);   // seconds between firings
                // fire every cylinder whose point we just passed
                for (let c = 0; c < n; c++) {
                    const at = this.fireAt[c];
                    if ((prev < at && this.phase >= at) || (prev < at + 1 && this.phase >= at + 1)) {
                        const jitter = 1 + (this.rand() - 0.5) * 0.12;
                        const a = (0.22 + 0.78 * load) * this.amp[c] * jitter * (this.diesel ? 1.15 : 1);
                        const tau = Math.max(0.0005, Math.min(0.004, interval * 0.22));
                        this.pulse(this.bank[c], a, tau);
                        if (load < 0.05 && rpm > this.rpmMax * 0.45 && n >= 6 && this.rand() < 0.035) { this.popT = 0; this.popA = 0.6 + this.rand() * 0.6; }
                        this.tickT = 0;
                    }
                }
                if (this.phase >= 1) this.phase -= 1;
                // the two banks' pulses through their resonances
                let ex = 0;
                for (let b = 0; b < 2; b++) {
                    const t = this.pt[b];
                    let p = 0;
                    if (t < 0.03) { const u = t / this.ptau[b]; p = this.pa[b] * u * Math.exp(1 - u); this.pt[b] = t + 1 / sr; }
                    let s = this.r1[b].run(p) * 2.4 + this.r2[b].run(p) * 0.7 + this.r3[b].run(p) * (0.15 + 0.35 * load) + p * 0.35;
                    if (b) { this.lagBuf[this.lw & 63] = s; s = this.lagBuf[(this.lw - this.bankLag) & 63]; this.lw++; }
                    ex += s;
                    if (b === 0) this.env += (p - this.env) * 0.05;
                }
                // pipe echo (gives the metal pipe colour)
                const e = this.echo[(this.ew - this.eLen) & 2047];
                ex = ex + e * 0.45; this.echo[this.ew & 2047] = ex * 0.55; this.ew++;
                y += ex * this.drive;
                // intake roar: noise shaped by the firing pulses, louder with load and rpm
                this.hpN = noise - this.lpN; this.lpN += (noise - this.lpN) * 0.18;
                y += this.hpN * this.env * (0.15 + load * 0.6) * Math.min(1, rpm / this.rpmMax + 0.2) * 1.4;
                // valve train tick (diesel: injector clatter, much louder)
                if (this.tickT < 0.002) { y += noise * (this.diesel ? 0.09 : 0.012) * (1 - this.tickT / 0.002); this.tickT += 1 / sr; }
                // overrun pops
                if (this.popT < 0.012) { y += noise * this.popA * Math.exp(-this.popT * 400) * 0.5; this.popT += 1 / sr; }
                // turbo: boost builds with load and rpm; whistle; blow-off hiss when the throttle closes on boost
                if (this.turbo) {
                    const bt = load * Math.min(1, rpm / (this.rpmMax * 0.5));
                    this.boost += (bt - this.boost) * (bt > this.boost ? 0.00006 : 0.0004);
                    if (this.lastLoad - load > 0.002 && this.boost > 0.45) this.bov = Math.max(this.bov, this.boost * 0.9);
                    this.tw += TAU * (2200 + this.boost * 4200 + rpm * 0.25) / sr; if (this.tw > TAU) this.tw -= TAU;
                    y += Math.sin(this.tw) * this.boost * this.boost * 0.016;
                    if (this.bov > 0.001) { y += this.hpN * this.bov * 0.18; this.bov *= 0.99985; }
                }
                this.lastLoad = load;
            }
            // DC block, gentle saturation (loud firing compresses like a real recording)
            const hp = y - this.dcx + 0.995 * this.dc; this.dcx = y; this.dc = hp;
            out[i] = Math.tanh(hp * 1.6) * 0.62 * gain;
        }
        for (let c = 1; c < outputs[0].length; c++) outputs[0][c].set(out);
        return true;
    }
}
registerProcessor('engine', Engine);
