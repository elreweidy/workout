/* ═══════════════════════════════════════════
   OLYMPUS — CONSTANTS, DATA & ENGINE SYSTEMS
═══════════════════════════════════════════ */
const QUOTES = [
  { t:"No citizen has a right to be an amateur in the matter of physical training. What a disgrace it is for a man to grow old without ever seeing the beauty and strength of which his body is capable.", a:"Socrates" },
  { t:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.", a:"Aristotle" },
  { t:"The impediment to action advances action. What stands in the way becomes the way.", a:"Marcus Aurelius" },
  { t:"Waste no more time arguing about what a good man should be. Be one.", a:"Marcus Aurelius" },
  { t:"He who has a why to live can bear almost any how.", a:"Nietzsche" },
  { t:"Strength does not come from physical capacity. It comes from an indomitable will.", a:"Gandhi" },
  { t:"The successful warrior is the average man, with laser-like focus.", a:"Bruce Lee" },
  { t:"Do not pray for an easy life, pray for the strength to endure a difficult one.", a:"Bruce Lee" },
  { t:"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.", a:"Bruce Lee" },
  { t:"Discipline equals freedom.", a:"Jocko Willink" },
  { t:"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", a:"Muhammad Ali" },
  { t:"The pain you feel today will be the strength you feel tomorrow.", a:"Schwarzenegger" },
  { t:"The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not.", a:"Schwarzenegger" },
  { t:"The worst thing I can be is the same as everybody else. I hate that.", a:"Schwarzenegger" },
  { t:"Blood, sweat, and respect. First two you give, last one you earn.", a:"Dwayne Johnson" },
  { t:"The iron never lies to you. You can walk outside and listen to all kinds of talk. The iron will always kick you the real deal.", a:"Henry Rollins" },
  { t:"The body achieves what the mind believes.", a:"Napoleon Hill" },
  { t:"Your body can stand almost anything. It's your mind that you have to convince.", a:"Unknown" },
  { t:"The hard days are the best because that's when champions are made.", a:"Gabby Douglas" },
  { t:"When you want to succeed as bad as you want to breathe, then you'll be successful.", a:"Eric Thomas" },
  { t:"If you want something you've never had, you must be willing to do something you've never done.", a:"Thomas Jefferson" },
  { t:"What you do today can improve all your tomorrows.", a:"Ralph Marston" },
  { t:"To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.", a:"Buddha" },
  { t:"Physical fitness is the basis of dynamic and creative intellectual activity.", a:"JFK" },
  { t:"Rome wasn't built in a day, but they worked on it every single day.", a:"Unknown" },
  { t:"Champions don't show up to get everything they want; they show up to give everything they have.", a:"Unknown" },
  { t:"Don't count the days, make the days count.", a:"Muhammad Ali" },
  { t:"The only person you are destined to become is the person you decide to be.", a:"Emerson" },
  { t:"Fall seven times, stand up eight.", a:"Japanese Proverb" },
  { t:"A year from now you may wish you had started today.", a:"Karen Lamb" }
];

/* ═══════════════════════════════════════════
   PROFILE SYSTEM — Multiple Routine Support
   Each profile: { id, name, icon, desc, routine: [...days], images: {...} }
═══════════════════════════════════════════ */
const PROFILES = { ppl: OLYMPUS_PPL_PROFILE };

if (typeof CORE_FORTRESS_PROFILE !== 'undefined') {
  PROFILES.core = CORE_FORTRESS_PROFILE;
}

if (typeof HOME_GYM_PROFILE !== 'undefined') {
  PROFILES.home = HOME_GYM_PROFILE;
}

if (typeof KHADIJA_PROFILE !== 'undefined') {
  PROFILES.khadija = KHADIJA_PROFILE;
}


const ACTIVE_PROFILE_KEY = 'oly_active_profile';

const DAY_ORDER = [6, 0, 1, 2, 3, 4, 5];
const SKEY = 'olympus_v12';
const YT_SVG = '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>';
const SEARCH_SVG = '<svg viewBox="0 0 24 24" width="14" height="14"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
/* ═══════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════ */
const $ = id => document.getElementById(id);
// Local calendar date (YYYY-MM-DD). toISOString() is UTC and rolls the day over at 2-3 AM in Egypt.
const ymd = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const today = () => ymd(new Date());
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const LS = {
  get: k => localStorage.getItem(k),
  set: (k, v) => { try { localStorage.setItem(k, v); } catch(e) { UI.toast('Storage full!'); } },
  del: k => localStorage.removeItem(k)
};

/* ═══════════════════════════════════════════
   APPLICATION STATE
═══════════════════════════════════════════ */
const STATE = {
  routine: [], selDay: new Date().getDay(), openId: null,
  calDate: new Date(), hovZone: null
};

/* ═══════════════════════════════════════════
   AUDIO SYNTHESIS
═══════════════════════════════════════════ */
const SFX = (() => {
  let ctx = null;
  const init = () => { if (LS.get('oly_opt_sound') === '0') return; if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') ctx.resume(); };
  const tone = (freq, type, dur, vol, delay = 0) => {
    if (LS.get('oly_opt_sound') === '0') return;
    try {
      init(); const t = ctx.currentTime + delay;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type; o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + dur * 0.1);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + dur + 0.1);
    } catch (e) {}
  };
  return {
    init,
    tick: () => tone(800, 'sine', 0.1, 0.05),
    set: () => { tone(660, 'triangle', 0.25, 0.05); tone(990, 'triangle', 0.3, 0.04, 0.07); },
    pr: () => { [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, 'triangle', 0.9, 0.05, i * 0.09)); },
    restEnd: () => { [0, 0.22, 0.44].forEach((d, i) => tone(i === 2 ? 1175 : 880, 'sine', 0.18, 0.09, d)); },
    conquer: () => { [440, 554.37, 659.25, 880].forEach((f, i) => tone(f, 'triangle', 1.5, 0.03, i * 0.05)); tone(55, 'sine', 2, 0.1, 0.1); }
  };
})();

/* ═══════════════════════════════════════════
   CONFETTI — only animates while particles are alive (no idle battery drain)
═══════════════════════════════════════════ */
const FX = (() => {
  const cv = $('cv'), cx = cv.getContext('2d');
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  let parts = [], raf = 0;
  const size = () => { const r = window.devicePixelRatio || 1; cv.width = innerWidth * r; cv.height = innerHeight * r; cx.setTransform(r, 0, 0, r, 0, 0); };
  const loop = () => {
    cx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter(p => {
      p.vy += 0.12; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot); cx.globalAlpha = Math.min(1, p.life / 40);
      cx.fillStyle = p.c; cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore();
      return p.life > 0 && p.y < innerHeight + 40;
    });
    raf = parts.length ? requestAnimationFrame(loop) : 0;
  };
  const burst = (n = 140) => {
    if (reduce) return;
    const accent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#5cc6c8';
    const colors = [accent, '#ffffff', '#f2c14e', '#6fdc9b', '#a993ff'];
    for (let i = 0; i < n; i++) {
      parts.push({ x: innerWidth / 2 + (Math.random() - 0.5) * 80, y: innerHeight * 0.35, vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 12 - 4,
        w: 6 + Math.random() * 6, h: 3 + Math.random() * 4, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, life: 120 + Math.random() * 60, c: colors[i % colors.length] });
    }
    if (!raf) raf = requestAnimationFrame(loop);
  };
  return { init: () => { window.addEventListener('resize', debounce(size, 200)); size(); }, burst };
})();

/* ═══════════════════════════════════════════
   IMAGE SYSTEM
═══════════════════════════════════════════ */
const ImageSys = {
  save: (id, src) => {
    const img = new Image();
    img.onload = () => {
      const maxW = 600; let w = img.width, h = img.height;
      if (w > maxW) { h = Math.round((maxW / w) * h); w = maxW; }
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      const d = c.toDataURL('image/jpeg', 0.7);
      try { localStorage.setItem('oly_img_' + id, d); App.refreshZone(id, d); UI.toast('Reflection Bound'); } catch { UI.toast('Storage Full!'); }
    };
    if (typeof src === 'string') img.src = src;
    else { const r = new FileReader(); r.onload = e => img.src = e.target.result; r.readAsDataURL(src); }
  }
};
