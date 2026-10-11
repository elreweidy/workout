/* ═══════════════════════════════════════════
   OLYMPUS — TRAINING LOG, HISTORY, PROGRESSION & REST TIMER
   Storage:
     oly_log_<profile>_<date>_<exId>  → {k: exerciseKey, n: name, s: [{w, r, d}]}
     oly_sess_<profile>_<date>        → session start timestamp (ms)
═══════════════════════════════════════════ */
const isArUI = () => STATE.activeProfileId === 'khadija';
const T = (en, ar) => isArUI() ? ar : en;
const fmtClock = s => Math.floor(s / 60) + ':' + String(Math.max(0, s % 60)).padStart(2, '0');
const fmtShortDate = ds => { const [y, m, d] = ds.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString(isArUI() ? 'ar-EG' : 'en-US', { month: 'short', day: 'numeric' }); };
const fmtKg = n => { const v = Math.round(n * 10) / 10; return (Number.isInteger(v) ? v : v.toFixed(1)).toString(); };
const escHtml = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ── PRESCRIPTION HELPERS ─────────────────── */
const Rx = {
  REST_DEFAULT: { main: 120, bonus: 75, abs: 45, posture: 45, warmup: 0 },
  sets: ex => { const m = String(ex.sets || '').match(/\d+/g); return m ? Math.max(1, Math.min(10, +m[m.length - 1])) : 1; },
  range: ex => { const m = String(ex.reps || '').match(/^\s*(\d+)(?:\s*-\s*(\d+))?/); return m ? [+m[1], +(m[2] || m[1])] : null; },
  isTimed: ex => /\d\s*s\b|hold|min/i.test(ex.reps || ''),
  isLoaded: ex => /dumbbell|barbell|ez bar|plate|weight|med ball|kettlebell/i.test(ex.equip || '') && !Rx.isTimed(ex),
  rest: ex => {
    const r = parseInt(ex.rest, 10);
    if (!isNaN(r) && r >= 0) return r;
    if (isArUI()) return ex.type === 'warmup' ? 0 : 30;
    return Rx.REST_DEFAULT[ex.type] != null ? Rx.REST_DEFAULT[ex.type] : 60;
  },
  rir: ex => {
    if (Rx.isTimed(ex) || isArUI()) return '';
    if (ex.type === 'main') return 'RIR 1-2';
    if (ex.type === 'bonus') return 'RIR 0-1';
    return '';
  },
  key: ex => ex.lib || (STATE.activeProfileId + ':' + String(ex.name || '').toLowerCase().trim()),
  tracked: ex => ex.type !== 'warmup',
  // Rough session length: ~40s of work per set + prescribed rest; warm-ups ~6 min.
  estimateMin: list => Math.round(list.reduce((t, ex) => t + (ex.type === 'warmup' ? 360 : Rx.sets(ex) * (40 + Rx.rest(ex))), 0) / 60)
};

/* ── LOG STORAGE ──────────────────────────── */
const Log = {
  key: (exId, date = today(), pid = STATE.activeProfileId) => 'oly_log_' + pid + '_' + date + '_' + exId,
  get: ex => {
    try {
      const v = JSON.parse(LS.get(Log.key(ex.id)) || 'null');
      if (v && Array.isArray(v.s)) return v;
    } catch (e) {}
    return { k: Rx.key(ex), n: ex.name, s: [] };
  },
  save: (ex, v) => {
    v.k = Rx.key(ex); v.n = ex.name;
    const key = Log.key(ex.id);
    LS.set(key, JSON.stringify(v));
    History.invalidate();
    App.syncUp([key]);
  }
};

/* ── HISTORY INDEX ────────────────────────── */
const History = (() => {
  let idx = null;
  const score = s => { const w = parseFloat(s.w) || 0, r = parseFloat(s.r) || 0; return w > 0 ? w * (1 + Math.min(r, 20) / 30) : r; };
  const build = () => {
    idx = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith('oly_log_')) continue;
      const rest = key.slice(8), u = rest.indexOf('_');
      const pid = rest.slice(0, u), date = rest.slice(u + 1, u + 11), exId = rest.slice(u + 12);
      let v; try { v = JSON.parse(localStorage.getItem(key)); } catch (e) { continue; }
      if (!v || !v.k || !Array.isArray(v.s)) continue;
      const sets = v.s.filter(s => s && s.d);
      if (!sets.length) continue;
      (idx[v.k] = idx[v.k] || []).push({ k: v.k, date, pid, exId, n: v.n, sets });
    }
    Object.values(idx).forEach(a => a.sort((x, y) => (x.date < y.date ? 1 : -1)));
  };
  const all = () => { if (!idx) build(); return idx; };
  const bestSet = (k, before) => {
    let best = null;
    (all()[k] || []).forEach(e => { if (before && e.date >= before) return; e.sets.forEach(s => { if (!best || score(s) > score(best.s)) best = { s, date: e.date, n: e.n }; }); });
    return best;
  };
  return {
    invalidate: () => { idx = null; },
    score,
    last: (k, before = today()) => (all()[k] || []).find(e => e.date < before) || null,
    best: (k, before = today()) => { const b = bestSet(k, before); return b ? score(b.s) : 0; },
    bestSet,
    onDate: (date, pid) => { const out = []; Object.values(all()).forEach(a => a.forEach(e => { if (e.date === date && e.pid === pid) out.push(e); })); return out; },
    keys: () => Object.keys(all()),
    entries: k => all()[k]
  };
})();

/* ── SESSION ──────────────────────────────── */
const Session = {
  key: () => 'oly_sess_' + STATE.activeProfileId + '_' + today(),
  start: () => parseInt(LS.get(Session.key()), 10) || 0,
  touch: () => {
    if (Session.start()) return;
    const k = Session.key();
    LS.set(k, String(Date.now()));
    App.syncUp([k]);
  },
  summary: () => {
    const pid = STATE.activeProfileId, td = today();
    const entries = History.onDate(td, pid);
    let sets = 0, volume = 0, prs = 0;
    entries.forEach(e => {
      sets += e.sets.length;
      e.sets.forEach(s => { volume += (parseFloat(s.w) || 0) * (parseFloat(s.r) || 0); });
      const prev = History.best(e.k, td);
      const todayBest = Math.max(...e.sets.map(History.score));
      if (prev > 0 && todayBest > prev) prs++;
    });
    const st = Session.start();
    return { sets, volume, prs, minutes: st ? Math.max(1, Math.round((Date.now() - st) / 60000)) : 0 };
  }
};
/* ── REST TIMER ───────────────────────────── */
const RestTimer = (() => {
  let end = 0, total = 0, iv = null, hideT = null;
  const baseTitle = document.title;
  const C = 2 * Math.PI * 26;
  const el = () => $('rest-timer');
  const render = left => {
    const e = el(); if (!e) return;
    e.querySelector('.rt-time').textContent = fmtClock(left);
    e.querySelector('.rt-ring-fg').style.strokeDashoffset = String(C * (1 - (total ? left / total : 0)));
    document.title = '⏱ ' + fmtClock(left) + ' · ' + T('Rest', 'راحة');
  };
  const tick = () => {
    const left = Math.max(0, Math.ceil((end - Date.now()) / 1000));
    render(left);
    if (left <= 0) finish();
  };
  const finish = () => {
    clearInterval(iv); iv = null;
    SFX.restEnd();
    try { if (navigator.vibrate && LS.get('oly_opt_vibe') !== '0') navigator.vibrate([220, 120, 220]); } catch (e) {}
    const e = el(); if (!e) return;
    e.classList.add('go');
    e.querySelector('.rt-time').textContent = T('GO', 'يلا!');
    document.title = baseTitle;
    clearTimeout(hideT); hideT = setTimeout(hide, 2600);
  };
  const hide = () => {
    clearInterval(iv); iv = null; clearTimeout(hideT);
    const e = el(); if (e) e.classList.remove('show', 'go');
    document.title = baseTitle;
  };
  const start = (sec, label) => {
    if (!sec) return;
    const e = el(); if (!e) return;
    clearTimeout(hideT);
    total = sec; end = Date.now() + sec * 1000;
    e.querySelector('.rt-label').textContent = label || T('Rest', 'راحة');
    e.querySelector('.rt-ring-fg').style.strokeDasharray = String(C);
    e.classList.remove('go'); e.classList.add('show');
    clearInterval(iv); iv = setInterval(tick, 250); tick();
  };
  const add = d => {
    if (!iv) return;
    end = Math.max(Date.now() + 1000, end + d * 1000);
    total = Math.max(total + d, Math.ceil((end - Date.now()) / 1000));
    tick(); SFX.tick();
  };
  document.addEventListener('visibilitychange', () => { if (!document.hidden && iv) tick(); });
  return { start, add, skip: () => { hide(); SFX.tick(); }, running: () => !!iv };
})();

/* ── CARD UI ──────────────────────────────── */
const Tracker = {
  /* Coaching line from last session: what to beat, or when to add load. */
  advice: ex => {
    if (!Rx.tracked(ex)) return null;
    const k = Rx.key(ex), last = History.last(k), range = Rx.range(ex), loaded = Rx.isLoaded(ex);
    if (!last) {
      if (isArUI()) return null;
      return { kind: 'first', text: loaded && range
        ? 'First time: pick a weight you can lift for ' + range[1] + ' reps with 1-2 left in the tank.'
        : 'First time: log what you do — next session you\'ll have a number to beat.' };
    }
    const top = range ? range[1] : null;
    const hitTop = !!top && !Rx.isTimed(ex) && last.sets.length >= Rx.sets(ex) && last.sets.every(s => (parseFloat(s.r) || 0) >= top);
    const w = Math.max(0, ...last.sets.map(s => parseFloat(s.w) || 0));
    const sum = last.sets.map(s => (parseFloat(s.w) ? fmtKg(parseFloat(s.w)) + '×' : '') + (s.r || '—')).join(' · ');
    if (hitTop && loaded && w > 0) {
      const nextW = w + (ex.inc || 2.5);
      return { kind: 'up', nextW, text: T('▲ You topped the range last time — go ' + fmtKg(nextW) + ' kg today.', '▲ وصلت للحد الأعلى — زوّد الوزن إلى ' + fmtKg(nextW) + ' كجم.') };
    }
    if (hitTop) return { kind: 'up', text: T('▲ Topped the range — add reps, slow the tempo, or add load.', '▲ ممتاز! زيدي التكرارات أو أبطئي الإيقاع.') };
    return { kind: 'beat', text: T('Last ' + fmtShortDate(last.date) + ': ' + sum + ' — beat one number.', 'آخر مرة ' + fmtShortDate(last.date) + ': ' + sum) };
  },

  html: (ex, exDone) => {
    const isAr = isArUI();
    const n = Rx.sets(ex), rest = Rx.rest(ex), rir = Rx.rir(ex);
    const repsTxt = isAr && typeof App !== 'undefined' ? App.localizeReps(ex.reps, true) : ex.reps;
    const chips =
      '<span class="rx-chip rx-main"><b>' + escHtml(ex.sets) + '</b> × <b>' + escHtml(repsTxt) + '</b></span>' +
      (rest ? '<span class="rx-chip">⏱ ' + fmtClock(rest) + '</span>' : '') +
      (rir ? '<span class="rx-chip" title="Reps In Reserve — stop this many reps before failure">' + rir + '</span>' : '');
    if (!Rx.tracked(ex)) {
      const warm = /warm/i.test(ex.reps || '') ? T('Warm-up · ~5 min', 'إحماء · ٥ دقائق تقريباً') : escHtml(repsTxt);
      return '<div class="rx-line"><span class="rx-chip rx-main">' + warm + '</span></div>';
    }
    let out = '<div class="rx-line">' + chips + '</div>';

    const log = Log.get(ex);
    const last = History.last(Rx.key(ex));
    const adv = Tracker.advice(ex);
    const rows = Math.max(n, log.s.length);

    if (isAr) {
      // Simple tap-to-complete set bubbles
      out += '<div class="set-dots" data-ex="' + ex.id + '">';
      for (let i = 0; i < rows; i++) {
        const d = log.s[i] && log.s[i].d;
        out += '<button class="set-dot' + (d ? ' done' : '') + '" data-action="set" data-id="' + ex.id + '" data-i="' + i + '" aria-label="جولة ' + (i + 1) + '">' + (d ? '✓' : (i + 1)) + '</button>';
      }
      return out + '</div>';
    }

    const loaded = Rx.isLoaded(ex), timed = Rx.isTimed(ex), range = Rx.range(ex);
    out += '<div class="log' + (loaded ? '' : ' nokg') + '" data-ex="' + ex.id + '">' +
      '<div class="log-row log-head"><span>Set</span><span>Prev</span>' + (loaded ? '<span>kg</span>' : '') + '<span>' + (timed ? 'Sec' : 'Reps') + '</span><span></span></div>';
    for (let i = 0; i < rows; i++) {
      const s = log.s[i] || {};
      const p = last ? (last.sets[i] || last.sets[last.sets.length - 1]) : null;
      const prevTxt = p ? ((parseFloat(p.w) ? fmtKg(parseFloat(p.w)) + '×' : '') + (p.r || '—')) : '—';
      let phW = p && parseFloat(p.w) ? fmtKg(parseFloat(p.w)) : '';
      let phR = p ? (p.r || '') : (range ? String(range[1]) : '');
      if (adv && adv.kind === 'up' && adv.nextW) { phW = fmtKg(adv.nextW); phR = range ? String(range[0]) : phR; }
      out += '<div class="log-row' + (s.d ? ' done' : '') + '" data-i="' + i + '">' +
        '<span class="set-n">' + (i + 1) + '</span>' +
        '<span class="prev">' + prevTxt + '</span>' +
        (loaded ? '<input class="log-in" data-f="w" data-id="' + ex.id + '" data-i="' + i + '" inputmode="decimal" enterkeyhint="next" autocomplete="off" placeholder="' + phW + '" value="' + escHtml(s.w || '') + '" aria-label="Set ' + (i + 1) + ' weight in kg">' : '') +
        '<input class="log-in" data-f="r" data-id="' + ex.id + '" data-i="' + i + '" inputmode="numeric" enterkeyhint="done" autocomplete="off" placeholder="' + phR + '" value="' + escHtml(s.r || '') + '" aria-label="Set ' + (i + 1) + (timed ? ' seconds' : ' reps') + '">' +
        '<button class="set-chk" data-action="set" data-id="' + ex.id + '" data-i="' + i + '" aria-label="Complete set ' + (i + 1) + '">✓</button>' +
        '</div>';
    }
    out += '<div class="log-foot"><button class="add-set" data-action="addset" data-id="' + ex.id + '">+ Set</button>' +
      (adv ? '<span class="log-hint ' + adv.kind + '">' + escHtml(adv.text) + '</span>' : '') + '</div></div>';
    return out;
  },

  /* Persist a typed value without completing the set. */
  input: (ex, i, f, val) => {
    const v = Log.get(ex);
    while (v.s.length <= i) v.s.push({ w: '', r: '', d: false });
    v.s[i][f] = String(val).trim().replace(',', '.');
    Log.save(ex, v);
  },

  addSet: ex => {
    const v = Log.get(ex);
    const n = Math.max(Rx.sets(ex), v.s.length);
    while (v.s.length < n + 1) v.s.push({ w: '', r: '', d: false });
    Log.save(ex, v);
    Tracker.refresh(ex);
    SFX.tick();
  },

  /* Re-render just this card's log section (keeps the rest of the page intact). */
  refresh: ex => {
    const card = $('card-' + ex.id); if (!card) return;
    const slot = card.querySelector('.tracker-slot'); if (!slot) return;
    slot.innerHTML = Tracker.html(ex, card.classList.contains('done'));
  },

  toggleSet: (ex, i) => {
    const card = $('card-' + ex.id);
    const v = Log.get(ex);
    while (v.s.length <= i) v.s.push({ w: '', r: '', d: false });
    const s = v.s[i];
    const row = card && card.querySelector('.log-row[data-i="' + i + '"]');

    if (!s.d) {
      if (row) {
        const wIn = row.querySelector('[data-f="w"]'), rIn = row.querySelector('[data-f="r"]');
        if (wIn) { s.w = (wIn.value || wIn.placeholder || '').trim().replace(',', '.'); wIn.value = s.w; }
        if (rIn) { s.r = (rIn.value || rIn.placeholder || '').trim(); rIn.value = s.r; }
      }
      s.d = true;
    } else {
      s.d = false;
    }
    Log.save(ex, v);
    Session.touch();

    // PR check against every previous session of this lift
    let pr = false;
    if (s.d && !isArUI()) {
      const k = Rx.key(ex), prev = History.best(k);
      const sc = History.score(s);
      const todayOthers = v.s.filter((x, j) => j !== i && x.d).map(History.score);
      if (prev > 0 && sc > prev && sc > Math.max(0, ...todayOthers)) {
        pr = true;
        UI.toast('🏆 PR · ' + (parseFloat(s.w) ? fmtKg(parseFloat(s.w)) + ' kg × ' : '') + s.r + (Rx.isTimed(ex) ? 's' : ' reps'));
      }
    }

    if (row) row.classList.toggle('done', s.d);
    const dot = card && card.querySelector('.set-dot[data-i="' + i + '"]');
    if (dot) { dot.classList.toggle('done', s.d); dot.textContent = s.d ? '✓' : (i + 1); }
    if (s.d) { pr ? SFX.pr() : SFX.set(); }
    else SFX.tick();

    // Keep the exercise's "conquered" state in sync with its sets
    const doneCount = v.s.filter(x => x.d).length;
    const allDone = doneCount >= Rx.sets(ex);
    const exDone = card && card.classList.contains('done');
    if (s.d && allDone && !exDone) App.toggleDone(ex.id, { fromSet: true });
    else if (!s.d && !allDone && exDone) App.toggleDone(ex.id, { fromSet: true });

    // Rest: between sets, or before the next exercise
    if (s.d) {
      const next = App.nextPending(ex.id);
      if (!allDone) {
        RestTimer.start(Rx.rest(ex), T('Rest · then set ' + (doneCount + 1) + ' of ' + Rx.sets(ex), 'راحة · ثم الجولة ' + (doneCount + 1)));
      } else if (next) {
        const nm = isArUI() ? App.displayName(next) : next.name;
        RestTimer.start(Rx.rest(ex), T('Next: ', 'التالي: ') + nm);
      }
    }
  }
};
