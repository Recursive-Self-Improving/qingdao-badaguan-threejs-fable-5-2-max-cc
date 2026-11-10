// Ambient sound, synthesised with WebAudio (no audio files): surf that swells and recedes,
// wind in the leaves, the odd gull over the bay, footsteps — crisper on fallen leaves — and,
// on foggy mornings, a distant foghorn.

export class Ambient {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.volume = 0.6;
    this.t = 0;
    this.nextGull = 6;
    this.nextHorn = 9;
    this.stepPhase = 0;
  }

  _noise(seconds, pink) {
    const ctx = this.ctx;
    const n = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let b0 = 0,
      b1 = 0,
      b2 = 0;
    for (let i = 0; i < n; i++) {
      const w = Math.random() * 2 - 1;
      if (pink) {
        // Paul Kellett's economical pink filter
        b0 = 0.99765 * b0 + w * 0.099046;
        b1 = 0.963 * b1 + w * 0.2965164;
        b2 = 0.57 * b2 + w * 1.0526913;
        d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.22;
      } else d[i] = w;
    }
    // cross-fade the ends so the loop is seamless
    const f = Math.floor(ctx.sampleRate * 0.25);
    for (let i = 0; i < f; i++) {
      const k = i / f;
      d[i] = d[i] * k + d[n - f + i] * (1 - k);
    }
    return buf;
  }

  _loop(buffer, filterType, freq, q) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.loopEnd = buffer.duration - 0.25;
    const f = ctx.createBiquadFilter();
    f.type = filterType;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.value = 0;
    src.connect(f).connect(g).connect(this.master);
    src.start(0, Math.random() * (buffer.duration - 0.5));
    return { src, filter: f, gain: g };
  }

  start() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
    } catch (e) {
      return;
    }
    const ctx = this.ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(ctx.destination);
    this.pink = this._noise(6, true);
    this.white = this._noise(3, false);
    this.sea = this._loop(this.pink, 'lowpass', 520, 0.3);
    this.swash = this._loop(this.white, 'bandpass', 2600, 0.5);
    this.wind = this._loop(this.pink, 'bandpass', 620, 0.35);
    this.leavesN = this._loop(this.white, 'highpass', 4200, 0.4);
    this.enabled = true;
    this.master.gain.setTargetAtTime(this.volume, ctx.currentTime, 1.2);
    this._resume();
    // browsers suspend audio in the background; pick it up again when the page returns
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.enabled) this._resume();
    });
  }

  _resume() {
    if (this.ctx && this.ctx.state !== 'running' && this.ctx.resume) this.ctx.resume().catch(() => {});
  }

  toggle() {
    if (!this.ctx) {
      this.start();
      return this.enabled;
    }
    this.enabled = !this.enabled;
    if (this.enabled) this._resume();
    this.master.gain.setTargetAtTime(this.enabled ? this.volume : 0, this.ctx.currentTime, 0.4);
    return this.enabled;
  }

  _gull(level) {
    const ctx = this.ctx;
    const t0 = ctx.currentTime + 0.05;
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    const out = ctx.createGain();
    out.gain.value = level;
    if (pan) {
      pan.pan.value = Math.random() * 1.6 - 0.8;
      out.connect(pan).connect(this.master);
    } else out.connect(this.master);
    const n = 2 + Math.floor(Math.random() * 4);
    const base = 1500 + Math.random() * 500;
    for (let k = 0; k < n; k++) {
      const ts = t0 + k * (0.3 + Math.random() * 0.08);
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = base * 1.25;
      bp.Q.value = 5;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, ts);
      g.gain.linearRampToValueAtTime(0.9, ts + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, ts + 0.27);
      osc.frequency.setValueAtTime(base * 0.8, ts);
      osc.frequency.linearRampToValueAtTime(base * 1.28, ts + 0.07);
      osc.frequency.exponentialRampToValueAtTime(base * 0.7, ts + 0.26);
      osc.connect(bp).connect(g).connect(out);
      osc.start(ts);
      osc.stop(ts + 0.3);
    }
  }

  _horn(level) {
    const ctx = this.ctx;
    const t0 = ctx.currentTime + 0.05;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 340;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(level, t0 + 0.5);
    g.gain.setValueAtTime(level, t0 + 2.6);
    g.gain.exponentialRampToValueAtTime(0.0005, t0 + 4.4);
    lp.connect(g).connect(this.master);
    for (const f of [98, 147.5]) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = f;
      o.connect(lp);
      o.start(t0);
      o.stop(t0 + 4.5);
    }
  }

  _step(level, leaves) {
    const ctx = this.ctx;
    const t0 = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.white;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = leaves ? 2800 + Math.random() * 1400 : 700 + Math.random() * 300;
    bp.Q.value = leaves ? 0.7 : 1.4;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(level, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + (leaves ? 0.2 : 0.09));
    src.connect(bp).connect(g).connect(this.master);
    src.start(t0, Math.random() * 2, 0.3);
  }

  // s: { coast (m to the water, + inland), gust 0..1.3, night 0..1, fog 0..1, walking, speed, bob, leaves 0..1, altitude }
  update(dt, s) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx;
    // while the context is not running its clock stands still: scheduling now would pile up
    if (ctx.state !== 'running') return;
    const now = ctx.currentTime;
    this.t += dt;
    const high = Math.max(0, 1 - s.altitude / 220);
    const near = Math.pow(Math.max(0, 1 - Math.max(s.coast, 0) / 320), 1.6) * (0.35 + 0.65 * high);
    // each wave: a slow build, a wash, a hiss as it drains back
    const ph = this.t * 0.118 * Math.PI * 2;
    const wave = Math.pow(0.5 + 0.5 * Math.sin(ph), 2.4) * 0.75 + Math.pow(0.5 + 0.5 * Math.sin(ph * 0.63 + 1.7), 2.0) * 0.25;
    const drain = Math.pow(0.5 + 0.5 * Math.sin(ph - 1.1), 3.0);
    this.sea.gain.gain.setTargetAtTime((0.1 + 0.5 * wave) * (0.06 + 0.94 * near), now, 0.25);
    this.sea.filter.frequency.setTargetAtTime(380 + 420 * wave, now, 0.3);
    this.swash.gain.gain.setTargetAtTime(0.05 * drain * near * near, now, 0.2);
    const inland = 0.35 + 0.65 * (1 - near);
    this.wind.gain.gain.setTargetAtTime((0.05 + 0.13 * s.gust) * (0.7 + 0.3 * (1 - high)), now, 0.6);
    this.wind.filter.frequency.setTargetAtTime(480 + 380 * s.gust, now, 0.8);
    this.leavesN.gain.gain.setTargetAtTime(0.012 * s.gust * s.gust * inland * high * (0.4 + 0.6 * s.leaves), now, 0.5);

    this.nextGull -= dt;
    if (this.nextGull <= 0) {
      this.nextGull = 5 + Math.random() * 14;
      if (near > 0.2 && s.night < 0.5) this._gull(0.035 * near * (0.5 + Math.random() * 0.5));
    }
    this.nextHorn -= dt;
    if (this.nextHorn <= 0) {
      this.nextHorn = 21 + Math.random() * 9;
      if (s.fog > 0.6) this._horn(0.07);
    }
    // footsteps on every half cycle of the head-bob
    if (s.walking && s.speed > 0.8) {
      const p = Math.floor(s.bob / Math.PI);
      if (p !== this.stepPhase) {
        this.stepPhase = p;
        this._step(0.05 + 0.03 * Math.min(s.speed / 8, 1), s.leaves > 0.45);
      }
    }
  }
}
