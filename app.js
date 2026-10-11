/* ═══════════════════════════════════════════
   UI SYSTEM — sheets, toast, history
═══════════════════════════════════════════ */
const UI = (() => {
  let toastTimer;
  const toast = msg => { const t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2800); };
  const openLB = src => { $('lb-img').src = src; $('lb').classList.add('open'); SFX.tick(); };
  const closeLB = () => { $('lb').classList.remove('open'); };
  const openModal = id => {
    if (id === 'cal-modal') renderCal();
    if (id === 'set-modal') App.renderSettings();
    $(id).classList.add('open');
    document.body.style.overflow = 'hidden';
    SFX.tick();
  };
  const closeModal = id => {
    $(id).classList.remove('open');
    if (!document.querySelector('.modal-bg.open')) { document.body.style.overflow = ''; App.syncTabs(); }
  };

  const donePrefix = () => 'oly_done_' + (STATE.activeProfileId || 'ppl') + '_';

  const getWorkoutDates = () => {
    const s = new Set(), prefix = donePrefix();
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith(prefix) && localStorage.getItem(k) === 'true') s.add(k.substring(prefix.length, prefix.length + 10));
    }
    // A day with logged sets counts too, even if no movement was marked done
    const pid = STATE.activeProfileId;
    History.keys().forEach(key => (History.entries(key) || []).forEach(e => { if (e.pid === pid) s.add(e.date); }));
    return s;
  };

  // The week strip carries the "trained this week" dots that the old heatmap showed.
  const buildHeatmap = () => App.buildNav();

  const getRank = t => t < 10 ? "Spartan Recruit" : t < 30 ? "Proven Hoplite" : t < 60 ? "Elysian Champion" : t < 100 ? "Demigod" : "Olympian Ascendant";
  const getRankAr = t => t < 10 ? "بداية الرحلة 🌱" : t < 30 ? "مثابرة 🌸" : t < 60 ? "متألقة ✨" : t < 100 ? "بطلة 👑" : "أسطورة 💎";

  // Consecutive scheduled training days completed. Rest days don't break it,
  // and today only counts once you've trained (so the streak doesn't reset at midnight).
  const getStreak = () => {
    const dates = getWorkoutDates(); let streak = 0;
    const d = new Date();
    for (let guard = 0; guard < 400; guard++) {
      const ds = ymd(d), dow = d.getDay();
      const day = STATE.routine.find(r => r.id === dow);
      const isRest = !day || !day.exercises.length;
      if (dates.has(ds)) streak++;
      else if (!isRest && guard > 0) break;
      d.setDate(d.getDate() - 1);
    }
    return streak;
  };

  const renderCal = () => {
    const isAr = isArUI();
    const y = STATE.calDate.getFullYear(), m = STATE.calDate.getMonth();
    $('cal-label').textContent = new Date(y, m).toLocaleString(isAr ? 'ar-EG' : 'en-US', { month: 'long', year: 'numeric' });
    $('cal-head').innerHTML = (isAr ? ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'] : ['S', 'M', 'T', 'W', 'T', 'F', 'S']).map(d => '<div class="cal-dow">' + d + '</div>').join('');
    const first = new Date(y, m, 1).getDay(), total = new Date(y, m + 1, 0).getDate();
    const td = today(), allDays = getWorkoutDates();
    let html = '';
    for (let i = 0; i < first; i++) html += '<div></div>';
    for (let i = 1; i <= total; i++) {
      const ds = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(i).padStart(2, '0');
      html += '<button class="cal-day' + (allDays.has(ds) ? ' has' : '') + (ds === td ? ' today' : '') + (ds === STATE.calSel ? ' sel' : '') + '" data-date="' + ds + '">' + i + '</button>';
    }
    $('cal-days').innerHTML = html;
    $('st-total').textContent = allDays.size;
    $('rank-title').textContent = isAr ? getRankAr(allDays.size) : getRank(allDays.size);
    const ms = y + '-' + String(m + 1).padStart(2, '0');
    $('st-month').textContent = Array.from(allDays).filter(d => d.startsWith(ms)).length;
    $('st-streak').textContent = getStreak();
    renderDayDetail(STATE.calSel);
    renderRecords();
  };

  // What was done on a given date: completed movements + logged sets.
  const renderDayDetail = ds => {
    const box = $('cal-detail'); if (!box) return;
    if (!ds) { box.innerHTML = ''; return; }
    const isAr = isArUI(), pid = STATE.activeProfileId, prefix = donePrefix() + ds + '_';
    const allEx = STATE.routine.flatMap(d => d.exercises);
    const names = new Map();
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith(prefix) && localStorage.getItem(k) === 'true') {
        const ex = allEx.find(e => e.id === k.slice(prefix.length));
        if (ex) names.set(ex.id, { name: App.displayName(ex), sets: '' });
      }
    }
    History.onDate(ds, pid).forEach(e => {
      const ex = allEx.find(x => x.id === e.exId);
      const sets = e.sets.map(s => (parseFloat(s.w) ? fmtKg(parseFloat(s.w)) + '×' : '') + (s.r || '✓')).join(' · ');
      names.set(e.exId, { name: ex ? App.displayName(ex) : e.n, sets });
    });
    const title = new Date(ds + 'T12:00').toLocaleDateString(isAr ? 'ar-EG' : 'en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const order = id => { const i = allEx.findIndex(x => x.id === id); return i < 0 ? 999 : i; };
    const rows = Array.from(names.entries()).sort((a, b) => order(a[0]) - order(b[0])).map(e => e[1]);
    box.innerHTML = '<div class="detail-title">' + escHtml(title) + '</div>' + (rows.length
      ? '<ul class="detail-list">' + rows.map(n => '<li><span>' + escHtml(n.name) + '</span><em>' + escHtml(n.sets) + '</em></li>').join('') + '</ul>'
      : '<div class="detail-empty">' + T('Nothing logged this day.', 'لا يوجد تمارين في هذا اليوم.') + '</div>');
  };

  // Best set ever for every lift in the current program.
  const renderRecords = () => {
    const box = $('rec-list'), wrap = $('records'); if (!box || !wrap) return;
    if (isArUI()) { wrap.style.display = 'none'; return; }
    const seen = new Set(), rows = [];
    STATE.routine.forEach(d => d.exercises.forEach(ex => {
      if (!Rx.tracked(ex) || Rx.isTimed(ex)) return;
      const k = Rx.key(ex); if (seen.has(k)) return; seen.add(k);
      const b = History.bestSet(k);
      if (b) rows.push({ name: ex.name, s: b.s, date: b.date, score: History.score(b.s) });
    }));
    wrap.style.display = rows.length ? '' : 'none';
    rows.sort((a, b) => (parseFloat(b.s.w) || 0) - (parseFloat(a.s.w) || 0));
    box.innerHTML = rows.map(r => {
      const w = parseFloat(r.s.w);
      return '<div class="rec-row"><span class="rec-name">' + escHtml(r.name) + '</span><span class="rec-val">' +
        (w ? fmtKg(w) + ' kg × ' + escHtml(r.s.r) : escHtml(r.s.r) + ' reps') + '</span><span class="rec-e1rm">' + (w ? 'e1RM ' + fmtKg(r.score) + ' · ' : '') + fmtShortDate(r.date) + '</span></div>';
    }).join('');
  };

  const buildProfileSwitcher = () => {
    const list = $('profile-list'); if (!list) return;
    list.innerHTML = '';
    Object.values(PROFILES).forEach(p => {
      const active = p.id === STATE.activeProfileId;
      const btn = document.createElement('button');
      btn.className = 'profile-btn' + (active ? ' active' : '');
      btn.innerHTML = '<span class="pf-icon">' + p.icon + '</span><span><span class="pf-name">' + escHtml(p.name.replace(/^🌸\s*/, '')) + '</span><span class="pf-desc" style="display:block">' + escHtml(p.desc) + '</span></span>';
      btn.onclick = () => { if (!active) App.switchProfile(p.id); else closeModal('profile-modal'); };
      list.appendChild(btn);
    });
  };

  return { toast, openLB, closeLB, openModal, closeModal, buildHeatmap, renderCal, renderDayDetail, getStreak, getWorkoutDates, buildProfileSwitcher,
    calShift: d => { STATE.calDate.setMonth(STATE.calDate.getMonth() + d); renderCal(); SFX.tick(); }
  };
})();

/* ═══════════════════════════════════════════
   MAIN APPLICATION
═══════════════════════════════════════════ */
const App = (() => {
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const AR_DAYS = {
    "Saturday": "السبت", "Sunday": "الأحد", "Monday": "الإثنين", "Tuesday": "الثلاثاء", "Wednesday": "الأربعاء", "Thursday": "الخميس", "Friday": "الجمعة"
  };
  const AR_DAYS_SHORT = { "Saturday": "سبت", "Sunday": "أحد", "Monday": "إثن", "Tuesday": "ثلا", "Wednesday": "أرب", "Thursday": "خمي", "Friday": "جمع" };

  const AR_TYPE = { "main": "رئيسي", "posture": "قوام", "abs": "بطن", "bonus": "إضافي", "warmup": "إحماء" };
  const TYPE_LABEL = { warmup: 'Warm-up', main: 'Main', bonus: 'Accessory', abs: 'Core', posture: 'Posture' };

  const AR_FOCUS = {
    "Cardio & Core": "كارديو وبطن",
    "Upper Body & Posture": "الجزء العلوي والقوام",
    "Lower Body & Balance": "الجزء السفلي والتوازن",
    "REST": "استراحة"
  };

  // Arabic exercise name translations for Khadija profile
  const AR_EXERCISE_NAMES = {
    "Gentle Full-Body Warm-up":        "إحماء خفيف لكامل الجسم",
    "Modified Jumping Jacks":          "قفز الجاك المعدّل",
    "Standing Torso Twists":           "تدوير الجذع وقوفاً",
    "Knee-Supported Side Plank":       "بلانك جانبي بدعم الركبتين",
    "Bird-Dog Stability Hold (Optional)": "تمرين الكلب والطائر (اختياري)",
    "Glute Rainbows (Optional)":       "قوس قزح الأرداف (اختياري)",
    "Wall Push-Ups":                   "تمرين الضغط على الجدار",
    "Standing Arm Circles":            "دوائر الذراعين وقوفاً",
    "Prone Cobra Hold":                "تمرين وضعية الكوبرا",
    "Wall Angels":                     "ملاك الجدار",
    "Doorway Chest Stretch (Optional)": "تمدد الصدر بالباب (اختياري)",
    "Seated Hand Pressures (Optional)": "ضغط الكفين جالسةً (اختياري)",
    "Chair Squats":                    "سكوات بالكرسي",
    "Glute Bridges":                   "جسر الأرداف",
    "Standing Calf Raises":            "رفع الكعبين وقوفاً",
    "Single-Leg Balance Hold":         "توازن على ساق واحدة",
    "Standing Side Leg Raises (Optional)": "رفع الساق جانباً (اختياري)",
    "Wall Sit Hold (Optional)":        "جلسة الجدار (اختياري)"
  };

  const displayName = ex => isArUI() ? (AR_EXERCISE_NAMES[ex.name] || ex.name) : ex.name;
  const isCustomId = id => /^ex\d{12,}$/.test(id);

  // Localize reps/sets text to Arabic
  const localizeReps = (reps, isAr) => {
    if (!isAr) return reps;
    return String(reps || '')
      .replace(/(\d+)\s*mins?/gi, '$1 دقيقة')
      .replace(/(\d+)\s*s\s*Hold/gi, 'ثبات $1 ثانية')
      .replace(/(\d+)\s*s\s*Press/gi, 'ضغط $1 ثانية')
      .replace(/(\d+)\s*s\s*\/side/gi, '$1 ثانية/جانب')
      .replace(/(\d+)\s*s\s*\/leg/gi, '$1 ثانية/ساق')
      .replace(/(\d+)\s*s$/gi, '$1 ثانية')
      .replace(/\/side/gi, '/جانب')
      .replace(/\/leg/gi, '/ساق')
      .replace(/(\d+)\s*circles/gi, '$1 دائرة')
      .replace(/\bMax Hold\b/gi, 'أقصى ثبات')
      .replace(/\bFailure\b/gi, 'حتى التعب')
      .replace(/\bWarmup\b/gi, 'إحماء');
  };

  const setText = (id, txt) => { const el = $(id); if (el) el.textContent = txt; };

  const translateUI = () => {
    const isAr = isArUI();
    document.documentElement.lang = isAr ? 'ar' : 'en';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    setText('logo-text', isAr ? '🌸 خديجة' : 'OLYMPUS');
    updateProfileIndicator();
    $('tab-focus').hidden = isAr;

    const tabs = isAr ? ['اليوم', 'تركيز', 'سجلّي', 'البرنامج'] : ['Today', 'Focus', 'History', 'Program'];
    document.querySelectorAll('.tabbar .tab-lbl').forEach((el, i) => { el.textContent = tabs[i]; });

    setText('profile-title', isAr ? 'اختاري البرنامج' : 'Select program');
    setText('cal-title', isAr ? 'سجل إنجازاتي' : 'History');
    setText('set-title', isAr ? 'الإعدادات' : 'Settings');
    const rankSub = document.querySelector('#cal-modal .rank-sub');
    if (rankSub) rankSub.textContent = isAr ? 'مستواكِ الحالي' : 'Current rank';
    const lbl = (id, en, ar) => { const el = $(id)?.nextElementSibling; if (el) el.textContent = isAr ? ar : en; };
    lbl('st-total', 'Workouts', 'إنجازاتي');
    lbl('st-streak', 'Streak', 'أيام متتالية');
    lbl('st-month', 'This month', 'هذا الشهر');

    const rm = $('rest-msg');
    rm.querySelector('.rest-icon').textContent = isAr ? '🌸' : '🧘';
    rm.querySelector('.rest-title').textContent = isAr ? 'يوم الراحة والنقاهة 🌸' : 'Elysian Stillness';
    rm.querySelector('.rest-sub').textContent = isAr
      ? 'الراحة ليست كسلاً، هي جزء أساسي من رحلتكِ. جسمكِ يبني قوته الآن! ✨'
      : 'The gods, too, rested. Recovery is the silent forge where true strength is solidified. Walk, stretch, sleep 8 hours, eat your protein.';

    const rt = $('rest-timer');
    rt.querySelector('[data-rt="-15"]').setAttribute('aria-label', isAr ? 'إنقاص ١٥ ثانية' : 'Subtract 15 seconds');
    rt.querySelector('[data-rt="+15"]').setAttribute('aria-label', isAr ? 'زيادة ١٥ ثانية' : 'Add 15 seconds');
    rt.querySelector('[data-rt="skip"]').textContent = isAr ? 'تخطي' : 'Skip';
  };

  /* ═══ FIREBASE REALTIME DATABASE SYNC ═══
     REST API, no SDK. Only the keys that changed are PATCHed, so two devices
     never overwrite each other's history. With a private sync code the data
     lives under /sync/<code>; without one it falls back to the old shared
     /workout_sync node (kept so existing devices don't lose sync). */
  const FIREBASE_URL = 'https://khadija-workout-default-rtdb.firebaseio.com';
  const SYNC_PREFIXES = ['oly_done_', 'oly_log_', 'oly_sess_'];
  const SYNC_CODE_KEY = 'oly_sync_code';
  const SYNC_CODE_RE = /^[A-Za-z0-9_-]{16,64}$/;
  const recentLocal = {};   // key -> ms of last local write (protects in-flight writes from stale pulls)
  let lastSync = 0;

  const syncCode = () => { const c = LS.get(SYNC_CODE_KEY); return c && SYNC_CODE_RE.test(c) ? c : ''; };
  const syncUrl = () => FIREBASE_URL + (syncCode() ? '/sync/' + syncCode() : '/workout_sync') + '.json';
  const isSyncKey = k => SYNC_PREFIXES.some(p => k.startsWith(p));
  const allSyncKeys = () => { const out = []; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && isSyncKey(k)) out.push(k); } return out; };

  const syncUp = keys => {
    if (!keys || !keys.length || !FIREBASE_URL) return Promise.resolve(false);
    const body = {};
    keys.forEach(k => { const v = localStorage.getItem(k); if (v != null) { body[k] = v; recentLocal[k] = Date.now(); } });
    if (!Object.keys(body).length || !navigator.onLine) return Promise.resolve(false);
    return fetch(syncUrl(), { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(r => { if (r.ok) lastSync = Date.now(); return r.ok; })
      .catch(() => false);
  };

  const syncDown = () => {
    if (!FIREBASE_URL || !navigator.onLine || document.hidden) return Promise.resolve(false);
    return fetch(syncUrl())
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        lastSync = Date.now();
        if (!data) return true;
        let changed = false;
        const now = Date.now();
        Object.entries(data).forEach(([k, v]) => {
          if (!isSyncKey(k) || typeof v !== 'string') return;
          if (recentLocal[k] && now - recentLocal[k] < 60000) return;
          if (localStorage.getItem(k) !== v) { localStorage.setItem(k, v); changed = true; }
        });
        if (!changed) return true;
        History.invalidate();
        updateProgress(); buildNav();
        // Don't yank the page out from under someone who's typing a weight.
        const a = document.activeElement;
        if (a && a.classList && a.classList.contains('log-in')) return true;
        const day = curDay();
        if (day && day.exercises.length) renderExercises(day.exercises);
        return true;
      })
      .catch(() => false);
  };

  const setSyncCode = code => {
    code = String(code || '').trim();
    if (code && !SYNC_CODE_RE.test(code)) { UI.toast(T('Code must be 16+ letters, numbers, - or _', 'الرمز يجب أن يكون ١٦ حرفاً على الأقل')); return; }
    if (code) LS.set(SYNC_CODE_KEY, code); else LS.del(SYNC_CODE_KEY);
    // Push everything this device has, then pull what the other devices have.
    syncUp(allSyncKeys()).then(() => syncDown()).then(ok => {
      renderSettings();
      UI.toast(ok ? T('Synced ✓', 'تمت المزامنة ✓') : T('Saved — will sync when online', 'تم الحفظ — ستتم المزامنة عند الاتصال'));
    });
  };

  const genSyncCode = () => {
    const a = new Uint8Array(15); crypto.getRandomValues(a);
    const abc = 'abcdefghjkmnpqrstuvwxyz23456789';
    const raw = Array.from(a, b => abc[b % abc.length]).join('');
    return raw.slice(0, 5) + '-' + raw.slice(5, 10) + '-' + raw.slice(10);
  };

  const renderSettings = () => {
    const code = syncCode(), st = $('sync-status');
    $('sync-code').value = code;
    const when = lastSync ? new Date(lastSync).toLocaleTimeString(isArUI() ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit' }) : '';
    if (code) {
      st.className = 'set-help good';
      st.textContent = T('🔒 Private sync is on' + (when ? ' · last synced ' + when : ''), '🔒 المزامنة الخاصة مفعّلة' + (when ? ' · آخر مزامنة ' + when : ''));
    } else {
      st.className = 'set-help warn';
      st.textContent = T('⚠ Using the old shared sync channel, which anyone can read. Tap "New", then enter the same code on your other devices.',
        '⚠ المزامنة الحالية غير خاصة. اضغطي "New" ثم أدخلي نفس الرمز على أجهزتك الأخرى.');
    }
    $('opt-sound').checked = LS.get('oly_opt_sound') !== '0';
    $('opt-vibe').checked = LS.get('oly_opt_vibe') !== '0';
  };

  const doneKey = id => 'oly_done_' + STATE.activeProfileId + '_' + today() + '_' + id;
  const isDone = id => LS.get(doneKey(id)) === 'true';
  const curDay = () => STATE.routine.find(r => r.id === STATE.selDay);
  const isToday = () => STATE.selDay === new Date().getDay();
  const dayName = id => { const d = STATE.routine.find(r => r.id === id); return d ? d.day : DAY_NAMES[id]; };
  const dayLabel = id => isArUI() ? AR_DAYS[dayName(id)] : dayName(id);

  const RING_C = 2 * Math.PI * 28;
  const updateProgress = () => {
    const day = curDay(), isAr = isArUI();
    const exs = day ? day.exercises : [];
    const done = exs.filter(e => isDone(e.id)).length;
    const pct = exs.length ? Math.round(done / exs.length * 100) : 0;
    $('ring-fg').style.strokeDashoffset = String(RING_C * (1 - pct / 100));
    $('ring-txt').textContent = exs.length ? (done === exs.length ? '✓' : pct + '%') : '—';

    const meta = $('day-meta');
    if (!exs.length) { meta.innerHTML = ''; }
    else {
      const sets = exs.filter(Rx.tracked).reduce((t, e) => t + Rx.sets(e), 0);
      const mins = Rx.estimateMin(exs);
      meta.innerHTML = isAr
        ? '<span><b>' + exs.length + '</b> تمارين</span><span><b>' + sets + '</b> جولة</span><span>~<b>' + mins + '</b> دقيقة</span><span><b>' + done + '/' + exs.length + '</b> ✓</span>'
        : '<span><b>' + exs.length + '</b> movements</span><span><b>' + sets + '</b> sets</span><span>~<b>' + mins + '</b> min</span><span><b>' + done + '/' + exs.length + '</b> done</span>';
    }

    // Logs always belong to today's date, so say so when looking at another day.
    const note = $('preview-note');
    if (!isToday() && exs.length) {
      note.hidden = false;
      note.innerHTML = '<span>' + escHtml(T('Viewing ' + dayLabel(STATE.selDay) + ' — anything you log counts for today.', 'تعرضين يوم ' + dayLabel(STATE.selDay) + ' — أي تمرين تسجلينه يُحسب لليوم.')) + '</span><button data-go="today">' + T('Today', 'اليوم') + '</button>';
    } else note.hidden = true;

    const actions = $('hero-actions'), btn = $('btn-arena');
    actions.hidden = !exs.length;
    actions.classList.toggle('done', !!exs.length && done === exs.length);
    if (exs.length) {
      if (done === exs.length) btn.textContent = T('✓ Session complete — view history', '✓ أحسنتِ! عرض سجلّي');
      else if (isAr) btn.textContent = done ? '🌸 أكملي التمرين' : '🌸 ابدئي التمرين';
      else btn.textContent = done ? '▶ Resume — ' + (exs.length - done) + ' to go' : '▶ Start focus mode';
    }
  };

  const sortBySavedOrder = list => {
    const savedOrder = LS.get('oly_order_' + STATE.activeProfileId + '_' + STATE.selDay);
    if (!savedOrder) return list;
    try {
      const orderArr = JSON.parse(savedOrder);
      return list.slice().sort((a, b) => {
        let ia = orderArr.indexOf(a.id), ib = orderArr.indexOf(b.id);
        if (ia === -1) ia = 999; if (ib === -1) ib = 999;
        return ia - ib;
      });
    } catch (e) { return list; }
  };

  /* ── Card header: everything you need at a glance ── */
  const headInner = (ex, i) => {
    const isAr = isArUI(), done = isDone(ex.id);
    const typeLbl = isAr ? (AR_TYPE[ex.type] || ex.type) : (TYPE_LABEL[ex.type] || ex.type);
    const equipLbl = isAr ? (ex.equip === 'Bodyweight' || !ex.equip ? 'وزن الجسم' : ex.equip) : (ex.equip || 'Bodyweight');
    const parts = [];
    if (Rx.tracked(ex)) {
      parts.push(ex.sets + ' × ' + (isAr ? localizeReps(ex.reps, true) : ex.reps));
      const r = Rx.rest(ex); if (r) parts.push((isAr ? 'راحة ' : 'rest ') + fmtClock(r));
      const last = !isAr && History.last(Rx.key(ex));
      if (last) {
        const top = last.sets.reduce((b, s) => (History.score(s) > History.score(b) ? s : b), last.sets[0]);
        parts.push('last ' + (parseFloat(top.w) ? fmtKg(parseFloat(top.w)) + '×' : '') + (top.r || '—'));
      }
    } else parts.push(isAr ? localizeReps(ex.reps, true) : (/warm/i.test(ex.reps || '') ? '~5 min' : ex.reps));

    let pips = '';
    if (Rx.tracked(ex)) {
      const n = Rx.sets(ex), got = Log.get(ex).s.filter(s => s.d).length;
      if (n <= 6) { pips = '<span class="ex-pips" aria-hidden="true">'; for (let k = 0; k < n; k++) pips += '<i' + (k < got ? ' class="on"' : '') + '></i>'; pips += '</span>'; }
    }
    const fk = Figures.keyFor(ex);
    const num = '<span class="ex-num">' + (done ? '✓' : String(i + 1).padStart(2, '0')) + '</span>';
    return (fk ? '<span class="ex-thumb">' + Figures.render(fk, { hijab: isAr }) + num + '</span>' : num) +
      '<span class="ex-head-main">' +
        '<span class="ex-kicker">' + escHtml(typeLbl + ' · ' + equipLbl) + '</span>' +
        '<span class="ex-name">' + escHtml(displayName(ex)) + '</span>' +
        '<span class="ex-sub">' + escHtml(parts.join(' · ')) + '</span>' +
      '</span>' + pips + '<span class="ex-chev" aria-hidden="true">▼</span>';
  };

  const bodyInner = (ex, idx, count) => {
    const isAr = isArUI(), done = isDone(ex.id);
    const ytQuery = isAr ? ex.name + ' female proper form shorts' : ex.name + ' proper form';
    const ytUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(ytQuery);
    const cues = isAr ? (ex.descAr || ex.descEn || ex.desc) : (ex.descEn || ex.desc);
    const cuesHtml = cues && cues.length ? '<ul class="ex-desc">' + cues.map(d => '<li>' + escHtml(d) + '</li>').join('') + '</ul>' : '';
    const target = isAr ? ex.targetAr : ex.targetEn;
    const img = LS.get('oly_img_' + ex.id) || null;
    const fk = Figures.keyFor(ex);
    const fig = fk ? '<div class="ex-fig">' + Figures.render(fk, { hijab: isAr, label: (isAr ? 'طريقة أداء ' : 'How to do ') + displayName(ex) }) + '</div>' : '';
    const searchUrl = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(ex.name + (isAr ? ' تمرين' : ' exercise'));
    const openHow = ex.type === 'warmup' || !Rx.tracked(ex) || isAr;

    return fig + '<div class="tracker-slot">' + Tracker.html(ex, done) + '</div>' +
      '<details class="howto"' + (openHow ? ' open' : '') + '><summary>' + (isAr ? 'طريقة الأداء والصورة' : 'How to · cues & image') + '</summary>' +
        '<div class="howto-body">' +
          (fk && !img ? '' : '<div class="paste-zone" id="zone-' + ex.id + '" data-id="' + ex.id + '">' + zoneInner(ex.id, img, searchUrl) + '</div>') +
          (target ? '<div class="ex-target">🎯 <b>' + escHtml(target.split('|')[0].trim()) + '</b>' + (target.includes('|') ? ' · ' + escHtml(target.split('|').slice(1).join('|').trim()) : '') + '</div>' : '') +
          cuesHtml +
          (ex.focus && !isAr ? '<div class="ex-cue">💡 ' + escHtml(ex.focus) + '</div>' : '') +
          (fk && !img ? '<button class="photo-link" data-action="addphoto" data-id="' + ex.id + '">📷 ' + T('Add your own photo', 'أضيفي صورتك') + '</button>' : '') +
        '</div>' +
      '</details>' +
      '<div class="card-actions">' +
        '<a href="' + ytUrl + '" target="_blank" rel="noopener" class="btn yt-btn">' + YT_SVG + (isAr ? 'شاهدي' : 'Form') + '</a>' +
        '<button class="btn mark-btn' + (done ? ' done' : '') + '" data-action="toggle" data-id="' + ex.id + '">' + markLabel(done) + '</button>' +
      '</div>' +
      '<div class="card-tools">' +
        '<button class="tool-btn" data-action="up" data-id="' + ex.id + '" aria-label="' + T('Move up', 'تحريك لأعلى') + '"' + (idx === 0 ? ' disabled' : '') + '>↑</button>' +
        '<button class="tool-btn" data-action="down" data-id="' + ex.id + '" aria-label="' + T('Move down', 'تحريك لأسفل') + '"' + (idx === count - 1 ? ' disabled' : '') + '>↓</button>' +
        '<button class="tool-btn" data-action="edit" data-id="' + ex.id + '" aria-label="' + T('Edit', 'تعديل') + '">✎</button>' +
        '<button class="tool-btn del" data-action="delete" data-id="' + ex.id + '" aria-label="' + T('Delete', 'حذف') + '">🗑</button>' +
      '</div>';
  };

  const markLabel = done => done ? T('✓ Done', '✨ تم بنجاح!') : T('Mark done', '🌸 أنجزي التمرين');

  const renderExercises = list => {
    const grid = $('ex-grid'); grid.innerHTML = '';
    const isAr = isArUI();
    const ordered = sortBySavedOrder(list);
    if (!ordered.some(e => e.id === STATE.openId)) STATE.openId = (ordered.find(e => !isDone(e.id)) || {}).id || null;
    const frag = document.createDocumentFragment();
    ordered.forEach((ex, i) => {
      const open = ex.id === STATE.openId;
      const card = document.createElement('article');
      card.className = 'ex-card t-' + ex.type + (isDone(ex.id) ? ' done' : '') + (open ? ' open' : '');
      card.id = 'card-' + ex.id;
      card.dataset.idx = i;
      card.draggable = !('ontouchstart' in window);
      if (isAr) card.setAttribute('dir', 'rtl');
      card.innerHTML = '<button class="ex-head" data-action="expand" data-id="' + ex.id + '" aria-expanded="' + open + '">' + headInner(ex, i) + '</button>' +
        '<div class="ex-body">' + (open ? bodyInner(ex, i, ordered.length) : '') + '</div>';
      frag.appendChild(card);
    });
    grid.appendChild(frag);
    Figures.mount(grid.querySelector('.ex-card.open'));
    if (document.body.classList.contains('arena-mode')) updateArenaState(true);
  };

  const refreshHead = id => {
    const card = $('card-' + id), ex = findEx(id); if (!card || !ex) return;
    card.querySelector('.ex-head').innerHTML = headInner(ex, +card.dataset.idx);
  };

  // Accordion: one card open at a time. The body is built lazily when opened.
  const setOpen = (id, scroll) => {
    const prev = STATE.openId && $('card-' + STATE.openId);
    if (prev && STATE.openId !== id) {
      prev.classList.remove('open'); prev.querySelector('.ex-head').setAttribute('aria-expanded', 'false');
      prev.querySelector('.ex-body').innerHTML = '';
    }
    STATE.openId = id;
    const card = id && $('card-' + id);
    if (!card) return;
    const ex = findEx(id), count = $('ex-grid').children.length;
    if (!card.classList.contains('open')) card.querySelector('.ex-body').innerHTML = bodyInner(ex, +card.dataset.idx, count);
    card.classList.add('open'); card.querySelector('.ex-head').setAttribute('aria-expanded', 'true');
    Figures.mount(card);
    if (scroll) requestAnimationFrame(() => {
      const top = card.getBoundingClientRect().top + window.scrollY - (document.querySelector('.topbar').offsetHeight + 12);
      window.scrollTo({ top, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  };

  const toggleOpen = id => {
    if (STATE.openId === id) {
      const card = $('card-' + id);
      if (card) { card.classList.remove('open'); card.querySelector('.ex-head').setAttribute('aria-expanded', 'false'); card.querySelector('.ex-body').innerHTML = ''; }
      STATE.openId = null;
    } else setOpen(id, true);
    SFX.tick();
  };

  const zoneInner = (id, src, searchUrl) => src
    ? (LS.get('oly_img_' + id) ? '<button class="img-del" data-action="delimg" data-id="' + id + '" aria-label="Remove image">×</button>' : '') +
      '<img src="' + escHtml(src) + '" data-action="lightbox" data-src="' + escHtml(src) + '" loading="lazy" alt="">'
    : '<div class="paste-hint"><span>📷 ' + (isArUI() ? 'انقري لإضافة صورة' : ('ontouchstart' in window ? 'Tap to add a photo' : 'Click to add · Ctrl+V to paste')) + '</span>' +
      (searchUrl ? '<a href="' + searchUrl + '" target="_blank" rel="noopener" class="search-img-link" onclick="event.stopPropagation()">' + SEARCH_SVG + ' ' + (isArUI() ? 'بحث' : 'Find one') + '</a>' : '') + '</div>';

  const refreshZone = (id, src) => {
    const card = $('card-' + id), ex0 = findEx(id);
    // With a figure, the photo zone only exists while a photo does: rebuild the body.
    if (card && card.classList.contains('open') && ex0 && Figures.keyFor(ex0)) {
      card.querySelector('.ex-body').innerHTML = bodyInner(ex0, +card.dataset.idx, $('ex-grid').children.length);
      Figures.mount(card);
      return;
    }
    const z = $('zone-' + id); if (!z) return;
    const ex = findEx(id);
    z.innerHTML = zoneInner(id, src, ex ? 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(ex.name + ' exercise') : '');
  };

  const findEx = id => { for (const d of STATE.routine) { const e = d.exercises.find(x => x.id === id); if (e) return e; } return null; };

  // Next unfinished exercise after `id` on the current day (in display order).
  const nextPending = id => {
    const day = curDay(); if (!day) return null;
    const list = sortBySavedOrder(day.exercises);
    const idx = list.findIndex(e => e.id === id);
    return list.slice(idx + 1).concat(list.slice(0, Math.max(0, idx))).find(e => e.id !== id && !isDone(e.id)) || null;
  };

  const loadDay = id => {
    const day = STATE.routine.find(r => r.id === id);
    const isRest = !day || !day.exercises.length;
    const isAr = isArUI();
    $('rest-msg').style.display = isRest ? 'flex' : 'none';
    $('ex-grid').style.display = isRest ? 'none' : '';
    $('add-container').innerHTML = '';
    translateUI();

    const now = new Date(), d = new Date(now);
    d.setDate(now.getDate() + DAY_ORDER.indexOf(id) - DAY_ORDER.indexOf(now.getDay()));
    const dateTxt = d.toLocaleDateString(isAr ? 'ar-EG' : 'en-US', { month: 'long', day: 'numeric' });
    $('cur-date').textContent = id === now.getDay() ? T('Today · ', 'اليوم · ') + dateTxt : dateTxt;
    $('day-title').textContent = dayLabel(id);
    if (isRest) {
      $('day-focus').textContent = isAr ? 'راحة' : 'Rest day';
      $('ex-grid').innerHTML = '';
    } else {
      $('day-focus').textContent = isAr ? (AR_FOCUS[day.focus] || day.focus) : day.focus;
      renderExercises(day.exercises);
      $('add-container').innerHTML = '<button class="add-btn" data-action="add">' + (isAr ? '+ إضافة حركة جديدة' : '+ Add a movement') + '</button>';
    }
    updateProgress();
  };

  const selectDay = id => {
    if (id !== STATE.selDay) STATE.openId = null;
    STATE.selDay = id; buildNav(); loadDay(id); SFX.tick();
  };
  const shiftDay = delta => {
    const i = DAY_ORDER.indexOf(STATE.selDay);
    selectDay(DAY_ORDER[(i + delta + DAY_ORDER.length) % DAY_ORDER.length]);
  };

  /* Week strip: Saturday-first week that contains today, with trained-day dots. */
  const buildNav = () => {
    const nav = $('day-nav'), isAr = isArUI();
    const now = new Date(), todayId = now.getDay(), todayIdx = DAY_ORDER.indexOf(todayId);
    const dates = UI.getWorkoutDates();
    nav.innerHTML = DAY_ORDER.map((id, i) => {
      const d = new Date(now); d.setDate(now.getDate() + (i - todayIdx));
      const day = STATE.routine.find(r => r.id === id);
      const rest = !day || !day.exercises.length;
      const name = dayName(id);
      const cls = 'wk' + (id === STATE.selDay ? ' active' : '') + (id === todayId ? ' today' : '') + (rest ? ' rest' : '') + (dates.has(ymd(d)) ? ' trained' : '');
      return '<button class="' + cls + '" data-day-id="' + id + '" aria-label="' + escHtml(dayLabel(id)) + '"' + (id === STATE.selDay ? ' aria-current="date"' : '') + '>' +
        '<span class="wk-dow">' + (isAr ? AR_DAYS_SHORT[name] : name.slice(0, 3)) + '</span>' +
        '<span class="wk-num">' + d.getDate() + '</span><span class="wk-dot"></span></button>';
    }).join('');
  };

  const toggleDone = (id, opts = {}) => {
    const key = doneKey(id);
    const was = LS.get(key) === 'true';
    LS.set(key, String(!was));
    if (!opts.fromSet) { was ? SFX.tick() : SFX.conquer(); }
    else if (!was) SFX.conquer();
    if (!was) Session.touch();
    const btn = document.querySelector('[data-action="toggle"][data-id="' + id + '"]');
    const card = $('card-' + id);
    if (btn) { btn.classList.toggle('done', !was); btn.textContent = markLabel(!was); }
    if (card) card.classList.toggle('done', !was);
    refreshHead(id);
    updateProgress(); buildNav();
    syncUp([key]);

    if (!was) {
      // Guide straight to the next movement.
      const next = nextPending(id);
      if (STATE.openId === id && next) setTimeout(() => {
        if (STATE.openId !== id) return;
        setOpen(next.id, true);
        if (document.body.classList.contains('arena-mode')) updateArenaState(true);
      }, opts.fromSet ? 700 : 350);
      else if (document.body.classList.contains('arena-mode')) setTimeout(() => updateArenaState(), 600);
      maybeCelebrate();
    }
  };

  const moveEx = (id, delta) => {
    const day = curDay(); if (!day) return;
    const ids = sortBySavedOrder(day.exercises).map(e => e.id);
    const i = ids.indexOf(id), j = i + delta;
    if (i < 0 || j < 0 || j >= ids.length) return;
    [ids[i], ids[j]] = [ids[j], ids[i]];
    LS.set('oly_order_' + STATE.activeProfileId + '_' + STATE.selDay, JSON.stringify(ids));
    renderExercises(day.exercises);
    setOpen(id, true);
    SFX.tick();
  };

  const openEditor = (mode, id) => {
    $('ed-title').textContent = mode === 'add' ? T('Add movement', 'إضافة حركة') : T('Edit movement', 'تعديل الحركة');
    ['id', 'name', 'sets', 'reps', 'type', 'equip', 'rest', 'desc'].forEach(f => { const el = $('ed-' + f); if (el) el.value = ''; });
    $('ed-type').value = 'main';
    if (mode === 'edit') {
      const ex = curDay()?.exercises.find(e => e.id === id);
      if (ex) {
        ['id', 'name', 'sets', 'reps', 'type', 'equip'].forEach(f => { const el = $('ed-' + f); if (el) el.value = ex[f] || ''; });
        $('ed-rest').value = Rx.rest(ex) || '';
        const lines = ex.descEn || ex.desc;
        if (lines) $('ed-desc').value = lines.join('\n');
      }
    }
    UI.openModal('ed-modal');
    if (!('ontouchstart' in window)) setTimeout(() => $('ed-name').focus(), 80);
  };

  const saveRoutine = () => LS.set(App.getCurSKey(), JSON.stringify(STATE.routine));

  const saveEx = () => {
    const day = curDay(); if (!day) return;
    const exId = $('ed-id').value || 'ex' + Date.now();
    const idx = day.exercises.findIndex(e => e.id === exId);
    const prev = idx > -1 ? day.exercises[idx] : {};
    // Merge so library data (targets, Arabic cues, lib key for history) survives an edit
    const ex = Object.assign({}, prev, { id: exId });
    ['name', 'sets', 'reps', 'type', 'equip'].forEach(f => { ex[f] = $('ed-' + f).value.trim(); });
    const rest = parseInt($('ed-rest').value, 10);
    if (!isNaN(rest)) ex.rest = rest; else delete ex.rest;
    const lines = $('ed-desc').value.split('\n').map(s => s.trim()).filter(Boolean);
    ex.descEn = lines; delete ex.desc;
    if (prev.name && prev.name !== ex.name) { delete ex.descAr; delete ex.targetAr; }
    if (!ex.name) return UI.toast(T('A name is required.', 'الاسم مطلوب'));
    if (!ex.sets) ex.sets = '3';
    if (!ex.reps) ex.reps = '8-12';
    if (idx > -1) { ex.edited = true; day.exercises[idx] = ex; }
    else { if (day.exercises.length >= 15) return UI.toast(T('Max 15 movements per day.', 'الحد الأقصى ١٥ حركة')); day.exercises.push(ex); }
    saveRoutine();
    STATE.openId = ex.id;
    UI.closeModal('ed-modal'); loadDay(STATE.selDay); setOpen(ex.id, true); SFX.tick(); UI.toast(T('Movement saved', 'تم الحفظ'));
  };

  const removedKey = () => 'oly_removed_' + STATE.activeProfileId;
  const delEx = id => {
    if (!confirm(T('Remove this movement from the program?', 'حذف هذا التمرين؟'))) return;
    const day = curDay();
    day.exercises = day.exercises.filter(e => e.id !== id);
    // Remember deleted built-ins so a program upgrade doesn't bring them back.
    if (!isCustomId(id)) {
      let rm = []; try { rm = JSON.parse(LS.get(removedKey()) || '[]'); } catch (e) {}
      if (!rm.includes(id)) { rm.push(id); LS.set(removedKey(), JSON.stringify(rm)); }
    }
    saveRoutine();
    loadDay(STATE.selDay); SFX.tick(); UI.toast(T('Movement removed', 'تم الحذف'));
  };

  /* ── FOCUS MODE ── one movement on screen at a time */
  const updateArenaState = quiet => {
    if (!document.body.classList.contains('arena-mode')) return;
    document.querySelectorAll('.ex-card').forEach(c => c.classList.remove('arena-active'));
    let active = STATE.openId && $('card-' + STATE.openId);
    if (!active || active.classList.contains('done')) active = document.querySelector('.ex-card:not(.done)');
    const bar = $('focus-bar');
    if (active) {
      setOpen(active.id.replace('card-', ''), false);
      active.classList.add('arena-active');
      const cards = Array.from(document.querySelectorAll('.ex-card'));
      const left = cards.filter(c => !c.classList.contains('done')).length;
      bar.innerHTML = '<span><b>' + (cards.indexOf(active) + 1) + '</b> / ' + cards.length + ' · ' + left + ' ' + T('left', 'متبقي') + '</span><button class="btn" data-go="exit-focus">' + T('Exit focus', 'خروج') + '</button>';
      if (!quiet) window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (!quiet) {
      toggleArena();
    }
  };

  const celebratedKey = () => 'oly_celebrated_' + STATE.activeProfileId + '_' + today();
  const maybeCelebrate = () => {
    const day = curDay();
    if (!day || !day.exercises.length || !isToday()) return;
    if (!day.exercises.every(e => isDone(e.id))) return;
    if (LS.get(celebratedKey())) return;
    LS.set(celebratedKey(), '1');
    RestTimer.skip();
    if (document.body.classList.contains('arena-mode')) toggleArena();
    setTimeout(triggerCelebration, 500);
  };

  const triggerCelebration = () => {
    const isAr = isArUI();
    const sum = Session.summary();
    const stat = (v, l) => '<div class="celeb-stat"><div class="celeb-val">' + v + '</div><div class="celeb-lbl">' + l + '</div></div>';
    const stats = isAr
      ? stat(sum.minutes || '—', 'دقيقة') + stat(sum.sets, 'جولة') + stat(UI.getStreak(), 'أيام متتالية')
      : stat(sum.minutes || '—', 'Minutes') + stat(sum.sets, 'Sets') +
        (sum.volume ? stat(Math.round(sum.volume).toLocaleString(), 'kg volume') : '') + stat(sum.prs, sum.prs === 1 ? 'PR' : 'PRs') + stat(UI.getStreak(), 'Streak');
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    overlay.innerHTML = (isAr
      ? '<div class="celeb-text">🌸 أنـتـي رائعــة! 🌸</div><div class="celeb-sub">تم إكمال الحصّة بنجاح يا ملكة اللياقة</div>'
      : '<div class="celeb-text">SESSION COMPLETE</div><div class="celeb-sub">Olympus smiles upon you</div>') +
      '<div class="celeb-stats">' + stats + '</div><button class="btn btn-primary celeb-close">' + (isAr ? 'إغلاق' : 'Continue') + '</button>';
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('show'), 10);
    const close = () => { overlay.classList.remove('show'); setTimeout(() => overlay.remove(), 400); };
    overlay.addEventListener('click', close);
    FX.burst();
    SFX.conquer();
    setTimeout(close, 9000);
  };

  const toggleArena = () => {
    if (isArUI()) return;
    const day = curDay();
    const isArena = !document.body.classList.contains('arena-mode');
    if (isArena && (!day || !day.exercises.length || day.exercises.every(e => isDone(e.id)))) return;
    document.body.classList.toggle('arena-mode', isArena);
    if (isArena) updateArenaState();
    else document.querySelectorAll('.ex-card').forEach(c => c.classList.remove('arena-active'));
    syncTabs();
  };

  // Highlight the tab that matches what's on screen.
  const syncTabs = () => {
    const sheet = document.querySelector('.modal-bg.open');
    const cur = sheet ? ({ 'cal-modal': 'history', 'profile-modal': 'program' }[sheet.id] || '')
      : document.body.classList.contains('arena-mode') ? 'focus' : 'today';
    document.querySelectorAll('.tabbar .tab').forEach(t => t.classList.toggle('active', t.dataset.tab === cur));
  };

  const goToday = () => {
    if (document.body.classList.contains('arena-mode')) toggleArena();
    if (STATE.selDay !== new Date().getDay()) selectDay(new Date().getDay());
    window.scrollTo({ top: 0, behavior: 'smooth' });
    syncTabs();
  };

  const onTab = tab => {
    document.querySelectorAll('.modal-bg.open').forEach(m => UI.closeModal(m.id));
    if (tab === 'today') goToday();
    else if (tab === 'focus') {
      if (document.body.classList.contains('arena-mode')) return;
      if (!isToday()) selectDay(new Date().getDay());
      const day = curDay();
      if (!day || !day.exercises.length) return UI.toast(T('Rest day — nothing to focus on 🧘', 'يوم راحة 🌸'));
      if (day.exercises.every(e => isDone(e.id))) return UI.toast(T('All done today ✓', 'أنهيتِ تمرين اليوم ✓'));
      toggleArena();
    } else if (tab === 'history') { UI.openModal('cal-modal'); }
    else if (tab === 'program') { UI.buildProfileSwitcher(); UI.openModal('profile-modal'); }
    syncTabs();
  };

  const updateProfileIndicator = () => {
    const p = PROFILES[STATE.activeProfileId]; if (!p) return;
    setText('brand-icon', p.icon);
    setText('brand-sub', p.name.replace(/^🌸\s*/, ''));
  };

  /* Load a profile's routine. When the built-in program's version changes,
     upgrade to the new defaults while keeping movements the user added or edited
     and leaving out the ones they deleted. */
  const loadRoutine = id => {
    const P = PROFILES[id], sk = SKEY + '_' + id, vk = 'oly_rver_' + id, ver = String(P.version || 1);
    const fresh = () => JSON.parse(JSON.stringify(P.routine));
    let stored = null;
    try { stored = JSON.parse(LS.get(sk) || 'null'); } catch (e) {}
    let upgraded = false;
    if (Array.isArray(stored) && (LS.get(vk) || '1') !== ver) {
      let removed = []; try { removed = JSON.parse(LS.get('oly_removed_' + id) || '[]'); } catch (e) {}
      const next = fresh();
      next.forEach(d => { d.exercises = d.exercises.filter(e => !removed.includes(e.id)); });
      const nextAll = next.flatMap(d => d.exercises);
      const userImgs = [];
      stored.forEach(d => (d.exercises || []).forEach(ex => {
        const nd = next.find(x => x.id === d.id);
        if (isCustomId(ex.id)) { if (nd) nd.exercises.push(ex); }
        else if (ex.edited && nd) { const i = nd.exercises.findIndex(x => x.id === ex.id); if (i > -1) nd.exercises[i] = ex; }
        const im = LS.get('oly_img_' + ex.id);
        if (im) userImgs.push({ id: ex.id, name: ex.name, im });
      }));
      // Re-home pasted images by exercise name so they don't land on a different movement.
      userImgs.forEach(u => LS.del('oly_img_' + u.id));
      userImgs.forEach(u => {
        const m = isCustomId(u.id) ? { id: u.id } : nextAll.find(x => x.name === u.name);
        LS.set(m ? 'oly_img_' + m.id : 'oly_img_orphan_' + u.id, u.im);
      });
      for (let i = localStorage.length - 1; i >= 0; i--) { const k = localStorage.key(i); if (k && k.startsWith('oly_order_' + id + '_')) localStorage.removeItem(k); }
      stored = next; upgraded = true;
    }
    if (!Array.isArray(stored)) stored = fresh();
    LS.set(sk, JSON.stringify(stored)); LS.set(vk, ver);
    return { routine: stored, upgraded };
  };

  const activateProfile = id => {
    STATE.activeProfileId = id;
    LS.set(ACTIVE_PROFILE_KEY, id);
    document.body.classList.toggle('profile-khadija', id === 'khadija');
    const { routine, upgraded } = loadRoutine(id);
    STATE.routine = routine;
    STATE.openId = null;
    STATE.calSel = null;
    History.invalidate();
    return upgraded;
  };

  const tickClock = () => {
    const st = Session.start(), el = $('session-clock');
    if (!el) return;
    const live = st && Date.now() - st < 4 * 3600 * 1000;
    el.classList.toggle('live', !!live);
    if (!st) { el.textContent = T('READY', 'جاهزة'); return; }
    const d = Math.floor((Date.now() - st) / 1000);
    if (!live) { el.textContent = T('DONE', 'انتهت'); return; }
    const h = Math.floor(d / 3600), m = Math.floor(d / 60) % 60, s = d % 60;
    el.textContent = '⏱ ' + (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0');
  };

  return {
    loadDay, buildNav, toggleDone, refreshZone, refreshHead, openEditor, saveEx, delEx, updateProgress, toggleArena, updateArenaState,
    triggerCelebration, syncDown, syncUp, localizeReps, displayName, nextPending, findEx, updateProfileIndicator, renderSettings, syncTabs,
    cycleQuote: () => { const q = QUOTES[Math.floor(Math.random() * QUOTES.length)]; const el = $('oracle-quote'); el.style.opacity = 0; setTimeout(() => { el.innerHTML = '“' + escHtml(q.t) + '” <span class="oracle-author">— ' + escHtml(q.a) + '</span>'; el.style.opacity = 1; }, 300); },

    getCurSKey: () => SKEY + '_' + STATE.activeProfileId,

    switchProfile: id => {
      if (!PROFILES[id]) return;
      if (document.body.classList.contains('arena-mode')) toggleArena();
      RestTimer.skip();
      const upgraded = activateProfile(id);
      syncDown();
      UI.buildProfileSwitcher();
      buildNav();
      loadDay(STATE.selDay);
      tickClock();
      UI.closeModal('profile-modal');
      window.scrollTo({ top: 0 });
      SFX.conquer();
      UI.toast(upgraded ? 'Program upgraded · ' + PROFILES[id].name : (isArUI() ? 'أهلاً خديجة 🌸' : 'Switched to ' + PROFILES[id].name));
    },

    init: () => {
      let pid = LS.get(ACTIVE_PROFILE_KEY) || 'ppl';
      if (!PROFILES[pid]) pid = 'ppl';
      const upgraded = activateProfile(pid);
      syncDown();
      setInterval(syncDown, 20000);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) { syncDown(); tickClock(); } });

      // Focus-mode status bar sits right above the list
      const bar = document.createElement('div'); bar.className = 'focus-bar'; bar.id = 'focus-bar';
      $('ex-grid').before(bar);

      App.cycleQuote();
      tickClock(); setInterval(tickClock, 1000);

      buildNav(); loadDay(STATE.selDay);
      FX.init();
      if (upgraded) setTimeout(() => UI.toast('✨ Program upgraded — new exercise selection'), 800);

      // ═══ EVENT DELEGATION ═══
      document.addEventListener('pointerdown', () => SFX.init(), { once: true });
      $('lb').addEventListener('click', () => UI.closeLB());
      $('oracle-quote').addEventListener('click', () => App.cycleQuote());

      $('day-nav').addEventListener('click', e => {
        const btn = e.target.closest('.wk');
        if (btn) selectDay(parseInt(btn.dataset.dayId, 10));
      });

      $('btn-arena').addEventListener('click', () => {
        const day = curDay();
        if (day && day.exercises.length && day.exercises.every(e => isDone(e.id))) return onTab('history');
        if (isArUI()) {
          // No focus mode for Khadija: just jump to the next movement.
          const n = day && sortBySavedOrder(day.exercises).find(e => !isDone(e.id));
          if (n) setOpen(n.id, true);
          return;
        }
        toggleArena();
      });
      document.addEventListener('click', e => {
        const go = e.target.closest('[data-go]'); if (!go) return;
        if (go.dataset.go === 'today') goToday();
        if (go.dataset.go === 'exit-focus') toggleArena();
      });

      document.querySelector('.tabbar').addEventListener('click', e => {
        const t = e.target.closest('.tab'); if (t) onTab(t.dataset.tab);
      });
      $('btn-profiles').addEventListener('click', () => onTab('program'));
      $('btn-settings').addEventListener('click', () => UI.openModal('set-modal'));

      // Rest timer controls
      $('rest-timer').addEventListener('click', e => {
        const b = e.target.closest('[data-rt]'); if (!b) return;
        const a = b.dataset.rt;
        if (a === 'skip') RestTimer.skip(); else RestTimer.add(parseInt(a, 10));
      });

      // Desktop drag-to-reorder (phones use the ↑ ↓ buttons)
      let draggedCard = null;
      $('ex-grid').addEventListener('dragstart', e => {
        const card = e.target.closest('.ex-card');
        if (!card || e.target.closest('input, .ex-body')) { if (e.target.closest('.ex-body')) e.preventDefault(); return; }
        if (document.body.classList.contains('arena-mode')) { e.preventDefault(); return; }
        draggedCard = card;
        setTimeout(() => card.classList.add('dragged'), 0);
        e.dataTransfer.effectAllowed = 'move';
      });
      $('ex-grid').addEventListener('dragover', e => {
        if (!draggedCard) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const card = e.target.closest('.ex-card');
        if (card && card !== draggedCard) {
          const rect = card.getBoundingClientRect();
          const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
          $('ex-grid').insertBefore(draggedCard, next && card.nextSibling || card);
        }
      });
      $('ex-grid').addEventListener('dragend', () => {
        if (!draggedCard) return;
        draggedCard.classList.remove('dragged');
        draggedCard = null;
        const newOrder = Array.from($('ex-grid').querySelectorAll('.ex-card')).map(c => c.id.replace('card-', ''));
        LS.set('oly_order_' + STATE.activeProfileId + '_' + STATE.selDay, JSON.stringify(newOrder));
        const day = curDay(); if (day) renderExercises(day.exercises);
        SFX.tick();
      });

      $('ex-grid').addEventListener('click', e => {
        const action = e.target.closest('[data-action]');
        if (action) {
          const act = action.dataset.action, id = action.dataset.id;
          if (act === 'expand') return toggleOpen(id);
          if (act === 'edit') return openEditor('edit', id);
          if (act === 'delete') return delEx(id);
          if (act === 'up') return moveEx(id, -1);
          if (act === 'down') return moveEx(id, 1);
          if (act === 'delimg') { e.stopPropagation(); if (confirm(T('Remove this image?', 'حذف الصورة؟'))) { LS.del('oly_img_' + id); refreshZone(id, null); SFX.tick(); } return; }
          if (act === 'lightbox') return UI.openLB(action.dataset.src);
          if (act === 'addphoto') {
            const inp = document.createElement('input');
            inp.type = 'file'; inp.accept = 'image/*';
            inp.onchange = ev => { const file = ev.target.files[0]; if (file) ImageSys.save(id, file); };
            return inp.click();
          }
          if (act === 'toggle') return toggleDone(id);
          if (act === 'set') { const ex = findEx(id); if (ex) { Tracker.toggleSet(ex, parseInt(action.dataset.i, 10)); refreshHead(id); } return; }
          if (act === 'addset') { const ex = findEx(id); if (ex) { Tracker.addSet(ex); refreshHead(id); } return; }
        }
        if (e.target.closest('a, input, summary')) return;
        // Click-to-browse on empty paste zone
        const zone = e.target.closest('.paste-zone');
        if (zone && !zone.querySelector('img')) {
          const inp = document.createElement('input');
          inp.type = 'file'; inp.accept = 'image/*';
          inp.onchange = ev => { const file = ev.target.files[0]; if (file) ImageSys.save(zone.dataset.id, file); };
          inp.click();
        }
      });

      // Persist typed weights/reps as you go; Enter jumps to the next field
      $('ex-grid').addEventListener('change', e => {
        const inp = e.target.closest('.log-in'); if (!inp) return;
        const ex = findEx(inp.dataset.id);
        if (ex) Tracker.input(ex, parseInt(inp.dataset.i, 10), inp.dataset.f, inp.value);
      });
      $('ex-grid').addEventListener('keydown', e => {
        const inp = e.target.closest('.log-in'); if (!inp || e.key !== 'Enter') return;
        e.preventDefault();
        const row = inp.closest('.log-row');
        const nextIn = inp.nextElementSibling && inp.nextElementSibling.matches('.log-in') ? inp.nextElementSibling : null;
        if (nextIn) nextIn.focus();
        else { inp.blur(); row.querySelector('.set-chk').click(); }
      });
      $('ex-grid').addEventListener('focusin', e => { const inp = e.target.closest('.log-in'); if (inp) inp.select(); });

      // Hover tracking for Ctrl+V paste
      $('ex-grid').addEventListener('mouseover', e => { const z = e.target.closest('.paste-zone'); if (z) STATE.hovZone = z.dataset.id; });
      $('ex-grid').addEventListener('mouseout', e => { const z = e.target.closest('.paste-zone'); if (z) STATE.hovZone = null; });

      $('add-container').addEventListener('click', e => { if (e.target.closest('[data-action="add"]')) openEditor('add'); });

      // Ctrl+V paste into hovered zone
      document.addEventListener('paste', e => {
        if (!STATE.hovZone) return;
        const items = (e.clipboardData || e.originalEvent.clipboardData).items;
        for (const item of items) {
          if (item.kind === 'file' && item.type.startsWith('image/')) {
            e.preventDefault();
            ImageSys.save(STATE.hovZone, item.getAsFile());
            break;
          }
        }
      });

      // Sheets: close button, backdrop tap, Escape
      ['cal', 'ed', 'profile', 'set'].forEach(p => {
        $(p + '-close').addEventListener('click', () => UI.closeModal(p + '-modal'));
        $(p + '-modal').addEventListener('click', e => { if (e.target === e.currentTarget) UI.closeModal(p + '-modal'); });
      });
      $('cal-days').addEventListener('click', e => {
        const d = e.target.closest('.cal-day'); if (!d) return;
        STATE.calSel = d.dataset.date; UI.renderCal(); SFX.tick();
      });
      $('cal-prev').addEventListener('click', () => UI.calShift(-1));
      $('cal-next').addEventListener('click', () => UI.calShift(1));
      $('btn-save-ex').addEventListener('click', () => saveEx());

      // Settings
      $('btn-sync-gen').addEventListener('click', () => { $('sync-code').value = genSyncCode(); SFX.tick(); });
      $('btn-sync-save').addEventListener('click', () => setSyncCode($('sync-code').value));
      $('opt-sound').addEventListener('change', e => { LS.set('oly_opt_sound', e.target.checked ? '1' : '0'); SFX.tick(); });
      $('opt-vibe').addEventListener('change', e => LS.set('oly_opt_vibe', e.target.checked ? '1' : '0'));
      $('btn-export').addEventListener('click', () => DataSys.exportData());
      $('btn-import-trigger').addEventListener('click', () => $('file-import').click());
      $('file-import').addEventListener('change', e => DataSys.importData(e));
      $('btn-lock').addEventListener('click', () => { if (confirm(T('Lock this device? You will need the password again.', 'قفل الجهاز؟'))) { LS.del('oly_auth'); location.reload(); } });

      // Swipe in focus mode: left = skip to next movement, right = mark done
      let touchStartX = 0, touchStartY = 0;
      document.addEventListener('touchstart', e => { if (document.body.classList.contains('arena-mode')) { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; } }, { passive: true });
      document.addEventListener('touchend', e => {
        if (!document.body.classList.contains('arena-mode') || e.target.closest('input, .log, .set-dots, .rest-timer, .tabbar, .modal-bg')) return;
        const dx = e.changedTouches[0].screenX - touchStartX, dy = e.changedTouches[0].screenY - touchStartY;
        if (Math.abs(dx) < 110 || Math.abs(dy) > Math.abs(dx) * 0.6) return;
        const active = document.querySelector('.ex-card.arena-active');
        if (!active) return;
        const id = active.id.replace('card-', '');
        if (dx < 0) {
          const next = nextPending(id);
          if (next) { setOpen(next.id, false); updateArenaState(); SFX.tick(); }
        } else {
          toggleDone(id);
        }
      });

      // Keyboard shortcuts (desktop)
      document.addEventListener('keydown', e => {
        if (e.target.matches('input, textarea, select')) return;
        const arena = document.body.classList.contains('arena-mode');
        if (e.key === 'Escape') {
          const open = document.querySelectorAll('.modal-bg.open');
          if (open.length) open.forEach(m => UI.closeModal(m.id));
          else if (arena) toggleArena();
          UI.closeLB(); RestTimer.skip();
          return;
        }
        if (document.querySelector('.modal-bg.open')) return;
        if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey) toggleArena();
        if (!arena && e.key === 'ArrowRight') shiftDay(isArUI() ? -1 : 1);
        if (!arena && e.key === 'ArrowLeft') shiftDay(isArUI() ? 1 : -1);
        if (arena && e.key === 'Enter') {
          const active = document.querySelector('.ex-card.arena-active');
          if (active && !e.target.closest('button')) { e.preventDefault(); toggleDone(active.id.replace('card-', '')); }
        }
      });
    }
  };
})();

/* ═══════════════════════════════════════════
   DATA PORTABILITY
═══════════════════════════════════════════ */
const DataSys = {
  // Never exported/imported: the device unlock flag and the private sync code.
  skip: k => k === 'oly_auth' || k === 'oly_sync_code',
  exportData: () => {
    SFX.tick();
    const backup = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if ((k.startsWith('oly_') || k.startsWith('olympus_')) && !DataSys.skip(k)) backup[k] = localStorage.getItem(k);
    }
    const blob = new Blob([JSON.stringify(backup)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'olympus_backup_' + today() + '.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    UI.toast('Backup exported');
  },
  importData: e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      let data;
      try { data = JSON.parse(ev.target.result); } catch (err) { return UI.toast('Not a valid backup file.'); }
      if (!data || typeof data !== 'object' || Array.isArray(data)) return UI.toast('Not a valid backup file.');
      const keys = Object.keys(data).filter(k => (k.startsWith('oly_') || k.startsWith('olympus_')) && !DataSys.skip(k) && typeof data[k] === 'string');
      if (!keys.length) return UI.toast('No workout data found in that file.');
      if (!confirm('Import ' + keys.length + ' entries? Matching entries on this device will be replaced.')) return;
      try { keys.forEach(k => localStorage.setItem(k, data[k])); } catch (err) { return UI.toast('Storage full — import incomplete.'); }
      // Share the imported history with the other devices before reloading.
      App.syncUp(keys.filter(k => /^oly_(done|log|sess)_/.test(k))).finally(() => {
        UI.toast('Backup restored — reloading…'); setTimeout(() => location.reload(), 1200);
      });
    };
    reader.readAsText(file); e.target.value = '';
  }
};

window.addEventListener('load', App.init);
