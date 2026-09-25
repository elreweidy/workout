/* ═══════════════════════════════════════════
   UI SYSTEM
═══════════════════════════════════════════ */
const UI = (() => {
  let toastTimer;
  const toast = msg => { const t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 3000); };
  const openLB = src => { $('lb-img').src = src; $('lb').classList.add('open'); SFX.tick(); };
  const closeLB = () => { $('lb').classList.remove('open'); };
  const openModal = id => { $(id).classList.add('open'); if (id === 'cal-modal') renderCal(); SFX.tick(); };
  const closeModal = id => { $(id).classList.remove('open'); };

  const donePrefix = () => 'oly_done_' + (STATE.activeProfileId || 'ppl') + '_';

  const getWorkoutDates = () => {
    const s = new Set(), prefix = donePrefix();
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith(prefix) && localStorage.getItem(k) === 'true') s.add(k.substring(prefix.length, prefix.length + 10));
    }
    // A day with logged sets counts too, even if no movement was marked conquered
    const pid = STATE.activeProfileId;
    History.keys().forEach(key => (History.entries(key) || []).forEach(e => { if (e.pid === pid) s.add(e.date); }));
    return s;
  };

  const buildHeatmap = () => {
    const h = $('heatmap'); h.innerHTML = '';
    const dates = getWorkoutDates();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const ds = ymd(d);
      h.innerHTML += '<div class="h-dot' + (dates.has(ds) ? ' lit' : '') + '" title="' + ds + '"></div>';
    }
  };

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
    $('cal-label').textContent = new Date(y, m).toLocaleString(isAr ? 'ar-EG' : 'en-US', { month: 'long', year: 'numeric' }).toUpperCase();
    const days = $('cal-days'); days.innerHTML = '';
    const first = new Date(y, m, 1).getDay(), total = new Date(y, m + 1, 0).getDate();
    for (let i = 0; i < first; i++) days.innerHTML += '<div></div>';
    const td = today(), allDays = getWorkoutDates();
    for (let i = 1; i <= total; i++) {
      const ds = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(i).padStart(2, '0');
      days.innerHTML += '<div class="cal-day' + (allDays.has(ds) ? ' has' : '') + (ds === td ? ' today' : '') + (ds === STATE.calSel ? ' sel' : '') + '" data-date="' + ds + '">' + i + '</div>';
    }
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
        (w ? fmtKg(w) + ' kg × ' + r.s.r : r.s.r + ' reps') + '</span><span class="rec-e1rm">' + (w ? 'e1RM ' + fmtKg(r.score) : fmtShortDate(r.date)) + '</span></div>';
    }).join('');
  };

  const buildProfileSwitcher = () => {
    const list = $('profile-list'); if (!list) return;
    list.innerHTML = '';
    Object.values(PROFILES).forEach(p => {
      const active = p.id === STATE.activeProfileId;
      const btn = document.createElement('button');
      btn.className = 'profile-btn' + (active ? ' active' : '');
      btn.innerHTML = `<span class="pf-icon">${p.icon}</span><div class="pf-info"><div class="pf-name">${p.name}</div><div class="pf-desc">${p.desc}</div></div>`;
      btn.onclick = () => { if (!active) App.switchProfile(p.id); };
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
  const observer = new IntersectionObserver(ents => ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); observer.unobserve(e.target); } }), { threshold: 0.1 });

  const AR_DAYS = {
    "Saturday": "السبت", "Sunday": "الأحد", "Monday": "الإثنين", "Tuesday": "الثلاثاء", "Wednesday": "الأربعاء", "Thursday": "الخميس", "Friday": "الجمعة",
    "SAT": "السبت", "SUN": "الأحد", "MON": "الإثنين", "TUE": "الثلاثاء", "WED": "الأربعاء", "THU": "الخميس", "FRI": "الجمعة"
  };

  const AR_TYPE = {
    "main": "رئيسي", "posture": "قوام", "abs": "بطن", "bonus": "إضافي", "warmup": "إحماء"
  };

  const TYPE_LABEL = { warmup: 'Warm-up', main: 'Main', bonus: 'Accessory', abs: 'Core', posture: 'Posture' };
  const TYPE_ORDER = ['warmup', 'main', 'bonus', 'abs', 'posture'];

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

  const translateUI = () => {
    const isAr = isArUI();

    document.body.style.direction = isAr ? 'rtl' : 'ltr';
    document.body.style.fontFamily = isAr ? "'Tajawal', 'Inter', sans-serif" : "'Cormorant Garamond', serif";
    document.documentElement.lang = isAr ? 'ar' : 'en';

    const logoText = $('logo-text');
    if (logoText) {
      logoText.innerHTML = isAr ? '<span style="font-family:\'Tajawal\',sans-serif;letter-spacing:0.1em">🌸 خديجة</span>' : 'OLYMPUS';
    }
    updateProfileIndicator();

    if ($('btn-arena')) {
      if (isAr) {
        $('btn-arena').style.display = 'none';
        document.body.classList.remove('arena-mode');
      } else {
        $('btn-arena').style.display = '';
        $('btn-arena').textContent = document.body.classList.contains('arena-mode') ? '🚪 Exit Arena' : '⚔️ The Arena';
      }
    }
    if ($('btn-chronicles')) $('btn-chronicles').textContent = isAr ? "📅 سجل إنجازاتي" : "🏛️ Chronicles";

    if ($('cur-date')) {
      $('cur-date').textContent = new Date().toLocaleDateString(isAr ? 'ar-EG' : 'en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }
    if ($('profile-title')) $('profile-title').textContent = isAr ? 'اختاري البرنامج' : 'Select Routine';

    const addBtn = document.querySelector('.add-btn');
    if (addBtn) addBtn.textContent = isAr ? "+ إضافة حركة جديدة" : "+ Inscribe New Movement";

    if ($('rest-msg')) {
      const restIcon = $('rest-msg').querySelector('.rest-icon');
      const title = $('rest-msg').querySelector('.rest-title');
      const sub = $('rest-msg').querySelector('.rest-sub');
      if (restIcon) restIcon.textContent = isAr ? '🌸' : '🧘';
      if (title) title.textContent = isAr ? 'يوم الراحة والنقاهة 🌸' : 'Elysian Stillness';
      if (sub) sub.textContent = isAr
        ? 'الراحة ليست كسلاً، هي جزء أساسي من رحلتكِ. جسمكِ يبني قوته الآن! ✨'
        : "The gods, too, rested. Recovery is the silent forge where true strength is solidified. Walk, stretch, sleep 8 hours, eat your protein.";
    }

    if ($('cal-modal')) {
      const calTitle = $('cal-title');
      if (calTitle) calTitle.textContent = isAr ? 'سجل إنجازاتي' : 'Chronicles & Reflections';
      const rankSub = $('cal-modal').querySelector('.rank-sub');
      if (rankSub) rankSub.textContent = isAr ? 'مستواكِ الحالي' : 'Current Status of the Vessel';
      const lbl = (id, en, ar) => { const el = $(id)?.nextElementSibling; if (el) el.textContent = isAr ? ar : en; };
      lbl('st-total', 'Total Triumphs', 'إنجازاتي');
      lbl('st-streak', 'Training Streak', 'أيام متتالية');
      lbl('st-month', 'This Month', 'هذا الشهر');
      $('cal-prev').textContent = isAr ? '→ السابق' : '← Prev';
      $('cal-next').textContent = isAr ? 'التالي ←' : 'Next →';
    }

    const rt = $('rest-timer');
    if (rt) {
      rt.querySelector('[data-rt="-15"]').setAttribute('aria-label', isAr ? 'إنقاص ١٥ ثانية' : 'Subtract 15 seconds');
      rt.querySelector('[data-rt="+15"]').setAttribute('aria-label', isAr ? 'زيادة ١٥ ثانية' : 'Add 15 seconds');
      rt.querySelector('[data-rt="skip"]').textContent = isAr ? 'تخطي' : 'Skip';
    }
  };

  /* ═══ FIREBASE REALTIME DATABASE SYNC ═══
     REST API, no SDK. Only the keys that changed are PATCHed, so two devices
     never overwrite each other's history. */
  const FIREBASE_URL = 'https://khadija-workout-default-rtdb.firebaseio.com';
  const SYNC_PREFIXES = ['oly_done_', 'oly_log_', 'oly_sess_'];
  const recentLocal = {};   // key -> ms of last local write (protects in-flight writes from stale pulls)

  const syncUp = keys => {
    if (!keys || !keys.length || !FIREBASE_URL) return;
    const body = {};
    keys.forEach(k => { const v = localStorage.getItem(k); if (v != null) { body[k] = v; recentLocal[k] = Date.now(); } });
    if (!Object.keys(body).length || !navigator.onLine) return;
    fetch(FIREBASE_URL + '/workout_sync.json', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).catch(() => {});
  };

  const syncDown = () => {
    if (!FIREBASE_URL || !navigator.onLine || document.hidden) return;
    fetch(FIREBASE_URL + '/workout_sync.json')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (!data) return;
        let changed = false;
        const now = Date.now();
        Object.entries(data).forEach(([k, v]) => {
          if (!SYNC_PREFIXES.some(p => k.startsWith(p)) || typeof v !== 'string') return;
          if (recentLocal[k] && now - recentLocal[k] < 60000) return;
          if (localStorage.getItem(k) !== v) { localStorage.setItem(k, v); changed = true; }
        });
        if (!changed) return;
        History.invalidate();
        updateProgress(); UI.buildHeatmap();
        // Don't yank the page out from under someone who's typing a weight.
        const a = document.activeElement;
        if (a && a.classList && a.classList.contains('log-in')) return;
        const day = STATE.routine.find(r => r.id === STATE.selDay);
        if (day && day.exercises.length) renderExercises(day.exercises);
      })
      .catch(() => {});
  };

  const doneKey = id => 'oly_done_' + STATE.activeProfileId + '_' + today() + '_' + id;
  const isDone = id => LS.get(doneKey(id)) === 'true';
  const curDay = () => STATE.routine.find(r => r.id === STATE.selDay);

  const updateProgress = () => {
    const day = curDay();
    if (!day || !day.exercises.length) { $('prog-glow').style.width = '0%'; return; }
    const done = day.exercises.filter(e => isDone(e.id)).length;
    $('prog-glow').style.width = (done / day.exercises.length) * 100 + '%';
    const meta = $('day-meta');
    if (meta) {
      const tracked = day.exercises.filter(Rx.tracked);
      const sets = tracked.reduce((t, e) => t + Rx.sets(e), 0);
      const mins = Rx.estimateMin(day.exercises);
      meta.innerHTML = isArUI()
        ? '<span>' + day.exercises.length + ' تمارين</span><span>' + sets + ' جولة</span><span>~' + mins + ' دقيقة</span><span class="meta-done">' + done + '/' + day.exercises.length + ' ✓</span>'
        : '<span>' + day.exercises.length + ' movements</span><span>' + sets + ' working sets</span><span>~' + mins + ' min</span><span class="meta-done">' + done + '/' + day.exercises.length + ' done</span>';
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

  const renderExercises = list => {
    const grid = $('ex-grid'); grid.innerHTML = '';
    const isAr = isArUI();
    const ordered = sortBySavedOrder(list);
    const fList = STATE.curFilter === 'all' ? ordered : ordered.filter(e => e.type === STATE.curFilter);
    const frag = document.createDocumentFragment();

    fList.forEach((ex, i) => {
      const done = isDone(ex.id);
      const ytQuery = isAr ? ex.name + ' female proper form shorts' : ex.name + ' proper form';
      const ytUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(ytQuery);

      const cuesArr = isAr ? (ex.descAr || ex.descEn || ex.desc) : (ex.descEn || ex.desc);
      const standardDesc = cuesArr && cuesArr.length
        ? '<ul class="ex-desc standard-desc"' + (isAr ? ' dir="rtl"' : '') + '>' + cuesArr.map(d => '<li>' + escHtml(d) + '</li>').join('') + '</ul>'
        : '';

      const descHtmlEn = (ex.descEn || ex.desc || []).map(d => '<li>' + escHtml(d) + '</li>').join('');
      const descHtmlAr = (ex.descAr || []).map(d => '<li dir="rtl">' + escHtml(d) + '</li>').join('');

      const userImg = LS.get('oly_img_' + ex.id);
      const defaultImg = (PROFILES[STATE.activeProfileId]?.images || {})[ex.id] || null;
      const img = userImg || defaultImg;
      const searchUrl = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(ex.name + (isAr ? ' تمرين' : ' exercise'));

      const typeLbl = isAr ? (AR_TYPE[ex.type] || ex.type) : (TYPE_LABEL[ex.type] || ex.type);
      const nameLbl = displayName(ex);
      const equipLbl = isAr ? (ex.equip === 'Bodyweight' ? 'وزن الجسم' : (ex.equip || 'وزن الجسم')) : (ex.equip || 'Bodyweight');
      const formLbl = isAr ? 'طريقة الأداء' : 'Form';
      const conquerLbl = done ? (isAr ? '✨ تم بنجاح!' : 'Conquered') : (isAr ? '🌸 أنجزي التمرين' : 'Conquer');
      const targetLine = isAr ? ex.targetAr : ex.targetEn;
      const targetTxt = isAr
        ? (ex.targetAr ? '<div class="ex-targets"><div class="target-ar" dir="rtl">' + escHtml(ex.targetAr) + '</div></div>' : '')
        : (ex.targetEn ? '<div class="ex-targets"><div class="target-en">' + escHtml(ex.targetEn) + '</div>' + (ex.targetAr ? '<div class="target-ar" dir="rtl">' + escHtml(ex.targetAr) + '</div>' : '') + '</div>' : '');

      const card = document.createElement('div');
      card.className = 'ex-card reveal' + (done ? ' done' : '') + ' t-' + ex.type;
      card.id = 'card-' + ex.id;
      card.draggable = !('ontouchstart' in window);
      card.style.transitionDelay = Math.min(i * 0.04, 0.3) + 's';
      if (isAr) card.setAttribute('dir', 'rtl');

      card.innerHTML =
        '<div class="card-ctrl">' +
          '<button class="ctrl-btn" data-action="edit" data-id="' + ex.id + '" title="' + (isAr ? 'تعديل' : 'Modify') + '" aria-label="' + (isAr ? 'تعديل' : 'Edit') + '">✎</button>' +
          '<button class="ctrl-btn del" data-action="delete" data-id="' + ex.id + '" title="' + (isAr ? 'حذف' : 'Banish') + '" aria-label="' + (isAr ? 'حذف' : 'Delete') + '">×</button>' +
        '</div>' +
        '<div class="card-content">' +
          '<div class="card-header">' +
            '<div class="card-seq">' + (i + 1).toString().padStart(2, '0') + '</div>' +
            '<div class="header-titles">' +
              '<span class="ex-type">' + typeLbl + '</span>' +
              '<div class="ex-name">' + escHtml(nameLbl) + '</div>' +
              '<div class="ex-equip">' + escHtml(equipLbl) + (targetLine ? '<span class="ex-target-inline">' + escHtml(targetLine.split('|')[0].trim()) + '</span>' : '') + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="tracker-slot">' + Tracker.html(ex, done) + '</div>' +
          '<details class="howto"' + (window.innerWidth > 900 || ex.type === 'warmup' ? ' open' : '') + '><summary>' + (isAr ? 'طريقة الأداء والصورة' : 'How to · cues & image') + '</summary>' +
            standardDesc +
            (ex.focus && !isAr ? '<div class="ex-cue">💡 ' + escHtml(ex.focus) + '</div>' : '') +
            '<div class="arena-split-view">' +
              '<div class="paste-zone" id="zone-' + ex.id + '" data-id="' + ex.id + '">' + zoneInner(ex.id, img, searchUrl) + '</div>' +
              '<div class="arena-details-panel">' +
                targetTxt +
                '<div class="ex-bilingual-desc">' +
                  (isAr
                    ? (descHtmlAr ? '<ul class="ex-desc ar-desc" dir="rtl">' + descHtmlAr + '</ul>' : '')
                    : (descHtmlEn ? '<ul class="ex-desc">' + descHtmlEn + '</ul>' : '') + (descHtmlAr ? '<ul class="ex-desc ar-desc" dir="rtl">' + descHtmlAr + '</ul>' : '')
                  ) +
                '</div>' +
                (ex.focus ? '<div class="ex-focus">💡 ' + escHtml(ex.focus) + '</div>' : '') +
              '</div>' +
            '</div>' +
          '</details>' +
          '<div class="card-bottom">' +
            '<div class="card-actions">' +
              '<a href="' + ytUrl + '" target="_blank" rel="noopener" class="yt-btn">' + YT_SVG + ' ' + formLbl + '</a>' +
              '<button class="mark-btn' + (done ? ' done' : '') + '" data-action="toggle" data-id="' + ex.id + '">' + conquerLbl + '</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      frag.appendChild(card);
    });
    grid.appendChild(frag);
    grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    if (document.body.classList.contains('arena-mode')) updateArenaState(true);
  };

  const zoneInner = (id, src, searchUrl) => src
    ? '<button class="img-del" data-action="delimg" data-id="' + id + '" aria-label="Remove image">×</button>' +
      '<img src="' + src + '" data-action="lightbox" data-src="' + src + '" loading="lazy" alt="">'
    : '<div class="paste-hint"><span>📷</span>' + (isArUI() ? 'انقري لإضافة صورة' : 'Tap to add · Ctrl+V paste') +
      (searchUrl ? ' · <a href="' + searchUrl + '" target="_blank" rel="noopener" class="search-img-link" onclick="event.stopPropagation()">' + SEARCH_SVG + ' ' + (isArUI() ? 'بحث' : 'Find') + '</a>' : '') + '</div>';

  const refreshZone = (id, src) => {
    const z = $('zone-' + id); if (!z) return;
    const ex = findEx(id);
    const fallback = (PROFILES[STATE.activeProfileId]?.images || {})[id] || null;
    z.innerHTML = zoneInner(id, src || fallback, ex ? 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(ex.name + ' exercise') : '');
  };

  const findEx = id => { for (const d of STATE.routine) { const e = d.exercises.find(x => x.id === id); if (e) return e; } return null; };

  // Next unfinished exercise after `id` on the current day (in display order).
  const nextPending = id => {
    const day = curDay(); if (!day) return null;
    const list = sortBySavedOrder(day.exercises);
    const idx = list.findIndex(e => e.id === id);
    return list.slice(idx + 1).concat(list.slice(0, Math.max(0, idx))).find(e => e.id !== id && !isDone(e.id)) || null;
  };

  const renderFilters = day => {
    const box = $('filters'); if (!box) return;
    const types = TYPE_ORDER.filter(t => day && day.exercises.some(e => e.type === t));
    if (isArUI() || types.length < 2) { box.innerHTML = ''; return; }
    if (STATE.curFilter !== 'all' && !types.includes(STATE.curFilter)) STATE.curFilter = 'all';
    box.innerHTML = ['all'].concat(types).map(t =>
      '<button data-filter="' + t + '" class="filter-btn' + (STATE.curFilter === t ? ' active' : '') + '">' + (t === 'all' ? 'All' : TYPE_LABEL[t]) + '</button>').join('');
  };

  const loadDay = id => {
    const day = STATE.routine.find(r => r.id === id);
    const isRest = !day || !day.exercises.length;
    const isAr = isArUI();
    $('rest-msg').style.display = isRest ? 'flex' : 'none';
    $('ex-grid').style.display = isRest ? 'none' : '';
    $('add-container').innerHTML = '';
    translateUI();

    const dayName = day ? day.day : (Object.keys(AR_DAYS)[(id + 1) % 7] || '');
    $('day-title').textContent = isAr ? (AR_DAYS[dayName] || dayName) : dayName;
    renderFilters(isRest ? null : day);
    if (isRest) {
      $('day-focus').textContent = isAr ? 'راحة' : 'REST';
      $('ex-grid').innerHTML = '';
      if ($('day-meta')) $('day-meta').innerHTML = '';
    } else {
      $('day-focus').textContent = isAr ? (AR_FOCUS[day.focus] || day.focus) : day.focus;
      renderExercises(day.exercises);
      $('add-container').innerHTML = '<button class="add-btn reveal" data-action="add">' + (isAr ? '+ إضافة حركة جديدة' : '+ Inscribe New Movement') + '</button>';
      setTimeout(() => { const b = document.querySelector('.add-btn'); if (b) observer.observe(b); }, 50);
    }
    updateProgress();
  };

  const selectDay = id => { STATE.selDay = id; buildNav(); loadDay(id); SFX.tick(); };
  const shiftDay = delta => {
    const i = DAY_ORDER.indexOf(STATE.selDay);
    selectDay(DAY_ORDER[(i + delta + DAY_ORDER.length) % DAY_ORDER.length]);
  };

  const buildNav = () => {
    const nav = $('day-nav'); nav.innerHTML = '';
    const isAr = isArUI();
    const todayId = new Date().getDay();
    const nameOf = id => { const d = STATE.routine.find(r => r.id === id); return d ? d.day : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][id]; };

    const desktopContainer = document.createElement('div');
    desktopContainer.className = 'day-nav-desktop';
    DAY_ORDER.forEach(id => {
      const btn = document.createElement('button');
      btn.className = 'day-btn' + (id === STATE.selDay ? ' active' : '') + (id === todayId ? ' today-mark' : '');
      const dayName = nameOf(id);
      btn.textContent = isAr ? AR_DAYS[dayName] : dayName.slice(0, 3).toUpperCase();
      btn.dataset.dayId = id;
      desktopContainer.appendChild(btn);
    });
    nav.appendChild(desktopContainer);

    const mobileContainer = document.createElement('div');
    mobileContainer.className = 'day-nav-mobile';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-arrow-btn'; prevBtn.innerHTML = isAr ? '▶' : '◀'; prevBtn.setAttribute('aria-label', 'Previous day');
    prevBtn.addEventListener('click', e => { e.stopPropagation(); shiftDay(-1); });
    const dayDisplay = document.createElement('div');
    dayDisplay.className = 'nav-day-display';
    const curName = nameOf(STATE.selDay);
    dayDisplay.textContent = isAr ? AR_DAYS[curName] : curName;
    if (STATE.selDay === todayId) { dayDisplay.classList.add('today'); dayDisplay.textContent += isAr ? ' (اليوم)' : ' · Today'; }
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-arrow-btn'; nextBtn.innerHTML = isAr ? '◀' : '▶'; nextBtn.setAttribute('aria-label', 'Next day');
    nextBtn.addEventListener('click', e => { e.stopPropagation(); shiftDay(1); });
    mobileContainer.append(prevBtn, dayDisplay, nextBtn);
    nav.appendChild(mobileContainer);
  };

  const toggleDone = (id, opts = {}) => {
    const key = doneKey(id);
    const was = LS.get(key) === 'true';
    const isAr = isArUI();
    LS.set(key, String(!was));
    if (!opts.fromSet) { was ? SFX.tick() : SFX.conquer(); }
    else if (!was) SFX.conquer();
    if (!was) Session.touch();
    const btn = document.querySelector('[data-action="toggle"][data-id="' + id + '"]');
    const card = $('card-' + id);
    if (btn) { btn.classList.toggle('done', !was); btn.textContent = !was ? (isAr ? '✨ تم بنجاح!' : 'Conquered') : (isAr ? '🌸 أنجزي التمرين' : 'Conquer'); }
    if (card) card.classList.toggle('done', !was);
    updateProgress(); UI.buildHeatmap();
    syncUp([key]);

    if (!was) {
      if (document.body.classList.contains('arena-mode')) setTimeout(() => updateArenaState(), 600);
      maybeCelebrate();
    }
  };

  const openEditor = (mode, id) => {
    SFX.tick(); $('ed-modal').classList.add('open');
    $('ed-title').textContent = mode === 'add' ? 'Inscribe Movement' : 'Modify Movement';
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
    setTimeout(() => $('ed-name').focus(), 50);
  };

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
    if (!ex.name) return UI.toast('A Name is required.');
    if (!ex.sets) ex.sets = '3';
    if (!ex.reps) ex.reps = '8-12';
    if (idx > -1) day.exercises[idx] = ex;
    else { if (day.exercises.length >= 15) return UI.toast('Max limits reached.'); day.exercises.push(ex); }
    LS.set(App.getCurSKey(), JSON.stringify(STATE.routine));
    UI.closeModal('ed-modal'); loadDay(STATE.selDay); SFX.tick(); UI.toast('Movement Inscribed');
  };

  const delEx = id => {
    if (!confirm(isArUI() ? 'حذف هذا التمرين؟' : 'Banish this movement from the ritual?')) return;
    const day = curDay();
    day.exercises = day.exercises.filter(e => e.id !== id);
    LS.set(App.getCurSKey(), JSON.stringify(STATE.routine));
    loadDay(STATE.selDay); SFX.tick(); UI.toast(isArUI() ? 'تم الحذف' : 'Movement Banished');
  };

  const setFilter = f => {
    STATE.curFilter = f;
    loadDay(STATE.selDay); SFX.tick();
  };

  const updateArenaState = (quiet) => {
    if (!document.body.classList.contains('arena-mode')) return;
    document.querySelectorAll('.ex-card').forEach(c => c.classList.remove('arena-active'));
    const active = document.querySelector('.ex-card:not(.done)');
    if (active) {
      active.classList.add('arena-active');
      const d = active.querySelector('details.howto'); if (d) d.open = true;
      if (!quiet) active.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (!quiet) {
      toggleArena();
    }
  };

  const celebratedKey = () => 'oly_celebrated_' + STATE.activeProfileId + '_' + today();
  const maybeCelebrate = () => {
    const day = curDay();
    if (!day || !day.exercises.length || STATE.selDay !== new Date().getDay()) return;
    if (!day.exercises.every(e => isDone(e.id))) return;
    if (LS.get(celebratedKey())) return;
    LS.set(celebratedKey(), '1');
    RestTimer.skip();
    setTimeout(triggerCelebration, 500);
  };

  const triggerCelebration = () => {
    const isAr = isArUI();
    const sum = Session.summary();
    const stat = (v, l) => '<div class="celeb-stat"><div class="celeb-val">' + v + '</div><div class="celeb-lbl">' + l + '</div></div>';
    const stats = isAr
      ? stat(sum.minutes || '—', 'دقيقة') + stat(sum.sets, 'جولة') + stat(UI.getStreak(), 'أيام متتالية')
      : stat(sum.minutes || '—', 'Minutes') + stat(sum.sets, 'Sets') +
        (sum.volume ? stat(Math.round(sum.volume).toLocaleString(), 'kg Volume') : '') + stat(sum.prs, sum.prs === 1 ? 'PR' : 'PRs') + stat(UI.getStreak(), 'Streak');
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    overlay.innerHTML = (isAr
      ? '<div class="celeb-text">🌸 أنـتـي رائعــة! 🌸</div><div class="celeb-sub">تم إكمال الحصّة بنجاح يا ملكة اللياقة</div>'
      : '<div class="celeb-text">SESSION COMPLETE</div><div class="celeb-sub">Olympus Smiles Upon You</div>') +
      '<div class="celeb-stats">' + stats + '</div><button class="celeb-close">' + (isAr ? 'إغلاق' : 'Continue') + '</button>';
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('show'), 10);
    const close = () => { overlay.classList.remove('show'); setTimeout(() => overlay.remove(), 600); };
    overlay.addEventListener('click', close);
    for (let i = 0; i < 60; i++) setTimeout(() => FX.addRipple(Math.random() * window.innerWidth, Math.random() * window.innerHeight), i * 25);
    SFX.conquer();
    setTimeout(close, 9000);
  };

  const toggleArena = () => {
    if (isArUI()) return;
    const isArena = document.body.classList.toggle('arena-mode');
    $('btn-arena').textContent = isArena ? '🚪 Exit Arena' : '⚔️ The Arena';
    if (isArena) {
      UI.toast('Enter The Arena. Focus purely on the task ahead.');
      updateArenaState();
    } else {
      document.querySelectorAll('.ex-card').forEach(c => c.classList.remove('arena-active'));
    }
  };

  const updateProfileIndicator = () => {
    const p = PROFILES[STATE.activeProfileId];
    if (p && $('btn-profiles')) $('btn-profiles').innerHTML = p.icon + ' ' + p.name.replace(/^🌸\s*/, '') + ' ▾';
  };

  /* Load a profile's routine. When the built-in program's version changes,
     upgrade to the new defaults while keeping movements the user added. */
  const loadRoutine = id => {
    const P = PROFILES[id], sk = SKEY + '_' + id, vk = 'oly_rver_' + id, ver = String(P.version || 1);
    const fresh = () => JSON.parse(JSON.stringify(P.routine));
    let stored = null;
    try { stored = JSON.parse(LS.get(sk) || 'null'); } catch (e) {}
    let upgraded = false;
    if (Array.isArray(stored) && (LS.get(vk) || '1') !== ver) {
      const next = fresh();
      const nextAll = next.flatMap(d => d.exercises);
      const userImgs = [];
      stored.forEach(d => (d.exercises || []).forEach(ex => {
        if (/^ex\d{12,}$/.test(ex.id)) { const nd = next.find(x => x.id === d.id); if (nd) nd.exercises.push(ex); }
        const im = LS.get('oly_img_' + ex.id);
        if (im) userImgs.push({ id: ex.id, name: ex.name, im });
      }));
      // Re-home pasted images by exercise name so they don't land on a different movement.
      userImgs.forEach(u => LS.del('oly_img_' + u.id));
      userImgs.forEach(u => {
        const m = /^ex\d{12,}$/.test(u.id) ? { id: u.id } : nextAll.find(x => x.name === u.name);
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
    STATE.curFilter = 'all';
    STATE.calSel = null;
    History.invalidate();
    return upgraded;
  };

  const tickClock = () => {
    const st = Session.start(), el = $('session-clock');
    if (!el) return;
    if (!st) { el.textContent = T('READY', 'جاهزة'); return; }
    const d = Math.floor((Date.now() - st) / 1000);
    if (d > 4 * 3600) { el.textContent = T('SESSION DONE', 'انتهت الجلسة'); return; }
    el.textContent = T('SESSION ', 'الجلسة ') + Math.floor(d / 60).toString().padStart(2, '0') + ':' + (d % 60).toString().padStart(2, '0');
  };

  return {
    loadDay, buildNav, toggleDone, refreshZone, openEditor, saveEx, delEx, setFilter, updateProgress, toggleArena, updateArenaState,
    triggerCelebration, syncDown, syncUp, localizeReps, displayName, nextPending, findEx, updateProfileIndicator,
    cycleQuote: () => { const q = QUOTES[Math.floor(Math.random() * QUOTES.length)]; const el = $('oracle-quote'); el.style.opacity = 0; setTimeout(() => { el.innerHTML = '"' + q.t + '" <span class="oracle-author">— ' + q.a + '</span>'; el.style.opacity = 1; }, 300); },

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
      UI.buildHeatmap(); tickClock();
      UI.closeModal('profile-modal');
      SFX.conquer();
      UI.toast(upgraded ? 'Program upgraded · ' + PROFILES[id].name : (isArUI() ? 'أهلاً خديجة 🌸' : 'Switched to ' + PROFILES[id].name));
    },

    init: () => {
      let pid = LS.get(ACTIVE_PROFILE_KEY) || 'ppl';
      if (!PROFILES[pid]) pid = 'ppl';
      const upgraded = activateProfile(pid);
      syncDown();
      setInterval(syncDown, 15000);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) { syncDown(); tickClock(); } });

      App.cycleQuote();
      tickClock(); setInterval(tickClock, 1000);

      buildNav(); UI.buildHeatmap(); loadDay(STATE.selDay);
      FX.init();
      if (upgraded) setTimeout(() => UI.toast('✨ Program upgraded — new exercise selection'), 800);

      // ═══ EVENT DELEGATION ═══
      document.addEventListener('click', e => { SFX.init(); if (!e.target.closest('input, .log')) FX.addRipple(e.clientX, e.clientY); });
      $('lb').addEventListener('click', () => UI.closeLB());
      $('oracle-quote').addEventListener('click', () => App.cycleQuote());

      $('day-nav').addEventListener('click', e => {
        const btn = e.target.closest('.day-btn');
        if (btn) selectDay(parseInt(btn.dataset.dayId, 10));
      });

      document.querySelector('.sec-right').addEventListener('click', e => {
        const btn = e.target.closest('[data-filter]');
        if (btn) setFilter(btn.dataset.filter);
      });

      $('btn-chronicles').addEventListener('click', () => UI.openModal('cal-modal'));
      $('btn-arena').addEventListener('click', () => toggleArena());

      // Rest timer controls
      $('rest-timer').addEventListener('click', e => {
        const b = e.target.closest('[data-rt]'); if (!b) return;
        const a = b.dataset.rt;
        if (a === 'skip') RestTimer.skip(); else RestTimer.add(parseInt(a, 10));
      });

      let draggedCard = null;
      $('ex-grid').addEventListener('dragstart', e => {
        const card = e.target.closest('.ex-card');
        if (!card || e.target.closest('input')) return;
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
        SFX.tick();
      });

      $('ex-grid').addEventListener('click', e => {
        const action = e.target.closest('[data-action]');
        if (action) {
          const act = action.dataset.action, id = action.dataset.id;
          if (act === 'edit') return openEditor('edit', id);
          if (act === 'delete') return delEx(id);
          if (act === 'delimg') { e.stopPropagation(); if (confirm('Remove this image?')) { LS.del('oly_img_' + id); refreshZone(id, null); SFX.tick(); } return; }
          if (act === 'lightbox') return UI.openLB(action.dataset.src);
          if (act === 'toggle') return toggleDone(id);
          if (act === 'set') { const ex = findEx(id); if (ex) Tracker.toggleSet(ex, parseInt(action.dataset.i, 10)); return; }
          if (act === 'addset') { const ex = findEx(id); if (ex) Tracker.addSet(ex); return; }
          if (act === 'add') return openEditor('add');
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

      // Profile Switcher Events
      $('btn-profiles').addEventListener('click', () => { UI.buildProfileSwitcher(); UI.openModal('profile-modal'); });
      $('profile-close').addEventListener('click', () => UI.closeModal('profile-modal'));
      $('profile-modal').addEventListener('click', e => { if (e.target === e.currentTarget) UI.closeModal('profile-modal'); });

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

      $('cal-close').addEventListener('click', () => UI.closeModal('cal-modal'));
      $('ed-close').addEventListener('click', () => UI.closeModal('ed-modal'));
      $('cal-modal').addEventListener('click', e => { if (e.target === e.currentTarget) UI.closeModal('cal-modal'); });
      $('cal-days').addEventListener('click', e => {
        const d = e.target.closest('.cal-day'); if (!d) return;
        STATE.calSel = d.dataset.date; UI.renderCal(); SFX.tick();
      });
      $('ed-modal').addEventListener('click', e => { if (e.target === e.currentTarget) UI.closeModal('ed-modal'); });
      $('cal-prev').addEventListener('click', () => UI.calShift(isArUI() ? 1 : -1));
      $('cal-next').addEventListener('click', () => UI.calShift(isArUI() ? -1 : 1));
      $('btn-save-ex').addEventListener('click', () => saveEx());
      $('btn-export').addEventListener('click', () => DataSys.exportData());
      $('btn-import-trigger').addEventListener('click', () => $('file-import').click());
      $('file-import').addEventListener('change', e => DataSys.importData(e));

      // Swipe Navigation for Arena
      let touchStartX = 0, touchStartY = 0;
      document.addEventListener('touchstart', e => { if (document.body.classList.contains('arena-mode')) { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; } }, { passive: true });
      document.addEventListener('touchend', e => {
        if (!document.body.classList.contains('arena-mode') || e.target.closest('input, .log, .set-dots')) return;
        const dx = e.changedTouches[0].screenX - touchStartX, dy = e.changedTouches[0].screenY - touchStartY;
        if (Math.abs(dx) < 100 || Math.abs(dy) > Math.abs(dx)) return;
        const active = document.querySelector('.ex-card.arena-active');
        if (!active) return;
        if (dx < 0) {
          // Swipe left: skip to the next unfinished card
          const next = active.nextElementSibling;
          document.querySelectorAll('.ex-card').forEach(c => c.classList.remove('arena-active'));
          if (next && !next.classList.contains('done')) { next.classList.add('arena-active'); next.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
          else updateArenaState();
        } else {
          toggleDone(active.id.replace('card-', ''));
        }
      });

      // Keyboard Shortcuts
      document.addEventListener('keydown', e => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
        const arena = document.body.classList.contains('arena-mode');
        if ((e.key === 'a' || e.key === 'A') && !e.ctrlKey && !e.metaKey) toggleArena();
        if (e.key === 'Escape') {
          if (arena) toggleArena();
          document.querySelectorAll('.modal-bg.open').forEach(m => UI.closeModal(m.id));
          UI.closeLB(); RestTimer.skip();
        }
        if (!arena && e.key === 'ArrowRight') shiftDay(isArUI() ? -1 : 1);
        if (!arena && e.key === 'ArrowLeft') shiftDay(isArUI() ? 1 : -1);
        if (arena && (e.key === ' ' || e.key === 'Enter')) {
          const active = document.querySelector('.ex-card.arena-active');
          if (active) { e.preventDefault(); toggleDone(active.id.replace('card-', '')); }
        }
      });

      document.querySelectorAll('.wrap > .reveal').forEach(el => observer.observe(el));
    }
  };
})();

/* ═══════════════════════════════════════════
   DATA PORTABILITY
═══════════════════════════════════════════ */
const DataSys = {
  exportData: () => {
    SFX.tick();
    const backup = {};
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('oly_') || k.startsWith('olympus_')) backup[k] = localStorage.getItem(k); }
    const blob = new Blob([JSON.stringify(backup)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'olympus_scrolls_' + today() + '.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    UI.toast('Scrolls Exported');
  },
  importData: e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!confirm('This will overwrite current data. Proceed?')) return;
        Object.keys(data).forEach(k => localStorage.setItem(k, data[k]));
        UI.toast('Scrolls Restored! Reloading...'); setTimeout(() => location.reload(), 1500);
      } catch (err) { UI.toast('Invalid Scroll format.'); }
    };
    reader.readAsText(file); e.target.value = '';
  }
};

window.addEventListener('load', App.init);
