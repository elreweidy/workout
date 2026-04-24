/* ═══════════════════════════════════════════
   UI SYSTEM
═══════════════════════════════════════════ */
const UI = (() => {
  let toastTimer;
  const toast = msg => { const t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 3000); };
  const openLB = src => { $('lb-img').src = src; $('lb').classList.add('open'); SFX.tick(); };
  const closeLB = () => { $('lb').classList.remove('open'); SFX.tick(); };
  const openModal = id => { $(id).classList.add('open'); if (id === 'cal-modal') renderCal(); SFX.tick(); };
  const closeModal = id => { $(id).classList.remove('open'); SFX.tick(); };

  const buildHeatmap = () => {
    const h = $('heatmap'); h.innerHTML = '';
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const ds = d.toISOString().split('T')[0];
      let lit = false;
      for (let j = 0; j < localStorage.length; j++) { if (localStorage.key(j).startsWith('oly_done_' + ds)) { lit = true; break; } }
      h.innerHTML += '<div class="h-dot' + (lit ? ' lit' : '') + '" title="' + ds + '"></div>';
    }
  };

  const getRank = t => t < 10 ? "Spartan Recruit" : t < 30 ? "Proven Hoplite" : t < 60 ? "Elysian Champion" : t < 100 ? "Demigod" : "Olympian Ascendant";

  const getWorkoutDates = () => {
    const s = new Set();
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('oly_done_')) s.add(k.substring(9, 19)); }
    return s;
  };

  const getStreak = () => {
    const dates = getWorkoutDates(); let streak = 0, d = new Date();
    while (dates.has(d.toISOString().split('T')[0])) { streak++; d.setDate(d.getDate() - 1); }
    return streak;
  };

  const renderCal = () => {
    const y = STATE.calDate.getFullYear(), m = STATE.calDate.getMonth();
    $('cal-label').textContent = new Date(y, m).toLocaleString('default', { month: 'long', year: 'numeric' }).toUpperCase();
    const days = $('cal-days'); days.innerHTML = '';
    const first = new Date(y, m, 1).getDay(), total = new Date(y, m + 1, 0).getDate();
    for (let i = 0; i < first; i++) days.innerHTML += '<div></div>';
    const td = today(), allDays = getWorkoutDates();
    for (let i = 1; i <= total; i++) {
      const ds = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(i).padStart(2, '0');
      days.innerHTML += '<div class="cal-day' + (allDays.has(ds) ? ' has' : '') + (ds === td ? ' today' : '') + '">' + i + '</div>';
    }
    $('st-total').textContent = allDays.size;
    $('rank-title').textContent = getRank(allDays.size);
    const ms = y + '-' + String(m + 1).padStart(2, '0');
    $('st-month').textContent = Array.from(allDays).filter(d => d.startsWith(ms)).length;
    $('st-streak').textContent = getStreak();
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

  return { toast, openLB, closeLB, openModal, closeModal, buildHeatmap, renderCal, getStreak, getWorkoutDates, buildProfileSwitcher,
    calShift: d => { STATE.calDate.setMonth(STATE.calDate.getMonth() + d); renderCal(); SFX.tick(); }
  };
})();

/* ═══════════════════════════════════════════
   MAIN APPLICATION
═══════════════════════════════════════════ */
const App = (() => {
  const observer = new IntersectionObserver(ents => ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); observer.unobserve(e.target); } }), { threshold: 0.1 });

  const updateProgress = () => {
    const day = STATE.routine.find(r => r.id === STATE.selDay);
    if (!day || !day.exercises.length) return;
    const td = today();
    const done = day.exercises.filter(e => LS.get('oly_done_' + td + '_' + e.id) === 'true').length;
    $('prog-glow').style.width = (day.exercises.length ? (done / day.exercises.length) * 100 : 0) + '%';
  };

  const renderExercises = list => {
    const grid = $('ex-grid'); grid.innerHTML = '';
    
    // Sort based on drag-and-drop saved order
    const savedOrder = LS.get('oly_order_' + STATE.selDay);
    if (savedOrder) {
      try {
        const orderArr = JSON.parse(savedOrder);
        list.sort((a, b) => {
          let ia = orderArr.indexOf(a.id);
          let ib = orderArr.indexOf(b.id);
          if (ia === -1) ia = 999;
          if (ib === -1) ib = 999;
          return ia - ib;
        });
      } catch(e) {}
    }

    const fList = STATE.curFilter === 'all' ? list : list.filter(e => e.type === STATE.curFilter);
    const td = today(), frag = document.createDocumentFragment();

    fList.forEach((ex, i) => {
      const done = LS.get('oly_done_' + td + '_' + ex.id) === 'true';
      const ytUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(ex.name + ' exercise proper form');
      
      const descHtmlEn = ex.descEn ? ex.descEn.map(d => '<li>' + d + '</li>').join('') : (ex.desc ? ex.desc.map(d => '<li>' + d + '</li>').join('') : '');
      const descHtmlAr = ex.descAr ? ex.descAr.map(d => '<li dir="rtl">' + d + '</li>').join('') : '';
      
      const standardDesc = (ex.descEn || ex.desc) && (ex.descEn || ex.desc).length > 0 
        ? '<ul class="ex-desc standard-desc">' + (ex.descEn || ex.desc).map(d => '<li>' + d + '</li>').join('') + '</ul>'
        : '<div class="ex-desc standard-desc">Focus on proper form.</div>';

      const userImg = LS.get('oly_img_' + ex.id);
      const profileImages = PROFILES[STATE.activeProfileId]?.images || {};
      const defaultImg = profileImages[ex.id] || null;
      const img = userImg || defaultImg;
      const searchUrl = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(ex.name + ' exercise male');

      const card = document.createElement('div');
      card.className = 'ex-card reveal' + (done ? ' done' : '');
      card.id = 'card-' + ex.id;
      card.draggable = true;
      card.style.transitionDelay = (i * 0.04) + 's';

      card.innerHTML =
        '<div class="card-ctrl">' +
          '<button class="ctrl-btn" data-action="edit" data-id="' + ex.id + '" title="Modify">✎</button>' +
          '<button class="ctrl-btn del" data-action="delete" data-id="' + ex.id + '" title="Banish">×</button>' +
        '</div>' +
        '<div class="card-content">' +
          '<div class="card-header">' +
            '<div class="card-seq">' + (i + 1).toString().padStart(2, '0') + '</div>' +
            '<div class="header-titles">' +
              '<span class="ex-type">' + ex.type + '</span>' +
              '<div class="ex-name">' + ex.name + '</div>' +
              '<div class="ex-equip">' + (ex.equip || 'Bodyweight') + '</div>' +
            '</div>' +
          '</div>' +
          standardDesc +
          '<div class="arena-split-view">' +
            '<div class="paste-zone" id="zone-' + ex.id + '" data-id="' + ex.id + '">' +
              (img
                ? '<button class="img-del" data-action="delimg" data-id="' + ex.id + '">×</button>' +
                  '<img src="' + img + '" data-action="lightbox" data-src="' + img + '">'
                : '<div class="paste-hint"><span>📷</span>Click to browse · Ctrl+V paste · <a href="' + searchUrl + '" target="_blank" class="search-img-link" onclick="event.stopPropagation()">' + SEARCH_SVG + ' Find</a></div>') +
            '</div>' +
            '<div class="arena-details-panel">' +
              (ex.targetEn ? '<div class="ex-targets"><div class="target-en">' + ex.targetEn + '</div><div class="target-ar" dir="rtl">' + ex.targetAr + '</div></div>' : '') +
              '<div class="ex-bilingual-desc">' +
                (descHtmlEn ? '<ul class="ex-desc">' + descHtmlEn + '</ul>' : '') +
                (descHtmlAr ? '<ul class="ex-desc ar-desc">' + descHtmlAr + '</ul>' : '') +
              '</div>' +
              (ex.focus ? '<div class="ex-focus">💡 ' + ex.focus + '</div>' : '') +
            '</div>' +
          '</div>' +
          '<div class="card-bottom"><div class="metrics">' +
            '<div class="metric"><div class="metric-val">' + ex.sets + '</div><div class="metric-lbl">Sets</div></div>' +
            '<div class="metric-sep"></div>' +
            '<div class="metric"><div class="metric-val" style="font-size:1.6rem;">' + ex.reps + '</div><div class="metric-lbl">Reps</div></div>' +
          '</div>' +
          '<div class="card-actions">' +
            '<a href="' + ytUrl + '" target="_blank" rel="noopener" class="yt-btn">' + YT_SVG + ' Form</a>' +
            '<button class="mark-btn' + (done ? ' done' : '') + '" data-action="toggle" data-id="' + ex.id + '">' + (done ? 'Conquered' : 'Conquer') + '</button>' +
          '</div></div>' +
        '</div>';
      frag.appendChild(card);
    });
    grid.appendChild(frag);
    grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };

  const refreshZone = (id, src) => {
    const z = $('zone-' + id);
    if (!z) return;
    if (src) {
      z.innerHTML = '<button class="img-del" data-action="delimg" data-id="' + id + '">×</button>' +
        '<img src="' + src + '" data-action="lightbox" data-src="' + src + '">';
    } else {
      z.innerHTML = '<div class="paste-hint"><span>📷</span>Click to browse · Ctrl+V paste</div>';
    }
  };

  const loadDay = id => {
    const day = STATE.routine.find(r => r.id === id);
    const isRest = id === 5 || !day;
    $('rest-msg').style.display = isRest ? 'flex' : 'none';
    $('ex-grid').style.display = isRest ? 'none' : 'grid';
    $('add-container').innerHTML = '';

    if (isRest) {
      $('day-title').textContent = 'Friday';
      $('day-focus').textContent = 'REST';
    } else {
      $('day-title').textContent = day.day;
      $('day-focus').textContent = day.focus;
      renderExercises(day.exercises);
      $('add-container').innerHTML = '<button class="add-btn reveal" data-action="add">+ Inscribe New Movement</button>';
      setTimeout(() => { const b = document.querySelector('.add-btn'); if (b) observer.observe(b); }, 50);
    }
    updateProgress();
  };

  const buildNav = () => {
    const nav = $('day-nav'); nav.innerHTML = '';
    const frag = document.createDocumentFragment();
    DAY_ORDER.forEach(id => {
      const day = STATE.routine.find(r => r.id === id);
      const btn = document.createElement('button');
      btn.className = 'day-btn' + (id === STATE.selDay ? ' active' : '') + (id === new Date().getDay() ? ' today-mark' : '');
      btn.textContent = id === 5 ? 'FRI' : (day ? day.day.slice(0, 3).toUpperCase() : '');
      btn.dataset.dayId = id;
      frag.appendChild(btn);
    });
    nav.appendChild(frag);
  };

  const toggleDone = id => {
    const key = 'oly_done_' + today() + '_' + id;
    const was = LS.get(key) === 'true';
    LS.set(key, String(!was));
    was ? SFX.tick() : SFX.conquer();
    const btn = document.querySelector('[data-action="toggle"][data-id="' + id + '"]');
    const card = $('card-' + id);
    if (!was) {
      if (btn) { btn.classList.add('done'); btn.textContent = 'Conquered'; }
      if (card) card.classList.add('done');
    } else {
      if (btn) { btn.classList.remove('done'); btn.textContent = 'Conquer'; }
      if (card) card.classList.remove('done');
    }
    updateProgress(); UI.buildHeatmap();

    // The Arena Auto-Advance
    if (document.body.classList.contains('arena-mode') && !was) {
      setTimeout(App.updateArenaState, 600);
    }
  };

  const openEditor = (mode, id) => {
    SFX.tick(); $('ed-modal').classList.add('open');
    $('ed-title').textContent = mode === 'add' ? 'Inscribe Movement' : 'Modify Movement';
    ['id', 'name', 'sets', 'reps', 'type', 'equip', 'desc'].forEach(f => { const el = $('ed-' + f); if (el) el.value = ''; });
    $('ed-type').value = 'main';
    if (mode === 'edit') {
      const ex = STATE.routine.find(r => r.id === STATE.selDay)?.exercises.find(e => e.id === id);
      if (ex) { ['id', 'name', 'sets', 'reps', 'type', 'equip'].forEach(f => { const el = $('ed-' + f); if (el) el.value = ex[f] || ''; }); if (ex.desc) $('ed-desc').value = ex.desc.join('\n'); }
    }
  };

  const saveEx = () => {
    const day = STATE.routine.find(r => r.id === STATE.selDay); if (!day) return;
    const exId = $('ed-id').value || 'ex' + Date.now();
    const ex = { id: exId };
    ['name', 'sets', 'reps', 'type', 'equip'].forEach(f => { ex[f] = $('ed-' + f).value; });
    ex.desc = $('ed-desc').value.split('\n').filter(s => s.trim().length > 0);
    if (!ex.name) return UI.toast('A Name is required.');
    const idx = day.exercises.findIndex(e => e.id === ex.id);
    if (idx > -1) day.exercises[idx] = ex;
    else { if (day.exercises.length >= 12) return UI.toast('Max limits reached.'); day.exercises.push(ex); }
    LS.set(App.getCurSKey(), JSON.stringify(STATE.routine));
    UI.closeModal('ed-modal'); loadDay(STATE.selDay); SFX.tick(); UI.toast('Movement Inscribed');
  };

  const delEx = id => {
    if (!confirm('Banish this movement from the ritual?')) return;
    const day = STATE.routine.find(r => r.id === STATE.selDay);
    day.exercises = day.exercises.filter(e => e.id !== id);
    LS.set(App.getCurSKey(), JSON.stringify(STATE.routine));
    loadDay(STATE.selDay); SFX.tick(); UI.toast('Movement Banished');
  };

  const setFilter = f => {
    STATE.curFilter = f;
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
    loadDay(STATE.selDay); SFX.tick();
  };

  const updateArenaState = () => {
    if (!document.body.classList.contains('arena-mode')) return;
    document.querySelectorAll('.ex-card').forEach(c => c.classList.remove('arena-active'));
    const active = document.querySelector('.ex-card:not(.done)');
    if (active) {
       active.classList.add('arena-active');
       active.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
       UI.toast('THE ARENA IS CONQUERED!');
       App.triggerCelebration();
       App.toggleArena();
    }
  };

  const triggerCelebration = () => {
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    overlay.innerHTML = '<div class="celeb-text">SESSION COMPLETE</div><div class="celeb-sub">Olympus Smiles Upon You</div>';
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('show'), 10);
    
    // Confetti effect using the existing canvas engine
    for(let i=0; i<100; i++) {
        setTimeout(() => FX.addRipple(Math.random() * window.innerWidth, Math.random() * window.innerHeight), i * 20);
    }
    SFX.conquer();
    SFX.conquer(); // Play it twice for effect

    setTimeout(() => {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 1000);
    }, 4000);
  };

  const toggleArena = () => {
    const isArena = document.body.classList.toggle('arena-mode');
    $('btn-arena').textContent = isArena ? '🚪 Exit Arena' : '⚔️ The Arena';
    if (isArena) {
      UI.toast('Enter The Arena. Focus purely on the task ahead.');
      updateArenaState();
    }
  };

  return {
    loadDay, buildNav, toggleDone, refreshZone, openEditor, saveEx, delEx, setFilter, updateProgress, toggleArena, updateArenaState, triggerCelebration,
    cycleQuote: () => { const q = QUOTES[Math.floor(Math.random() * QUOTES.length)]; const el = $('oracle-quote'); el.style.opacity = 0; setTimeout(() => { el.innerHTML = '"' + q.t + '" <span class="oracle-author">— ' + q.a + '</span>'; el.style.opacity = 1; }, 300); },

    getCurSKey: () => SKEY + '_' + STATE.activeProfileId,

    switchProfile: id => {
      if (!PROFILES[id]) return;
      STATE.activeProfileId = id;
      LS.set(ACTIVE_PROFILE_KEY, id);
      const s = LS.get(App.getCurSKey());
      STATE.routine = s ? JSON.parse(s) : JSON.parse(JSON.stringify(PROFILES[id].routine));
      if (!s) LS.set(App.getCurSKey(), JSON.stringify(STATE.routine));
      UI.buildProfileSwitcher();
      App.buildNav();
      App.loadDay(STATE.selDay);
      UI.closeModal('profile-modal');
      SFX.conquer();
      UI.toast(`Switched to ${PROFILES[id].name}`);
    },

    init: () => {
      STATE.activeProfileId = LS.get(ACTIVE_PROFILE_KEY) || 'ppl';
      if (!PROFILES[STATE.activeProfileId]) STATE.activeProfileId = 'ppl';
      
      const s = LS.get(App.getCurSKey());
      STATE.routine = s ? JSON.parse(s) : JSON.parse(JSON.stringify(PROFILES[STATE.activeProfileId].routine));
      if (!s) LS.set(App.getCurSKey(), JSON.stringify(STATE.routine));

      $('cur-date').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
      App.cycleQuote();

      setInterval(() => {
        const d = Math.floor((new Date() - STATE.sessionStart) / 1000);
        $('session-clock').textContent = 'SESSION: ' + Math.floor(d / 60).toString().padStart(2, '0') + 'm ' + (d % 60).toString().padStart(2, '0') + 's';
      }, 1000);

      App.buildNav(); UI.buildHeatmap(); App.loadDay(STATE.selDay); App.setFilter('all');
      FX.init();

      // ═══ EVENT DELEGATION ═══
      document.addEventListener('click', e => { SFX.init(); FX.addRipple(e.clientX, e.clientY); });
      $('lb').addEventListener('click', () => UI.closeLB());
      $('oracle-quote').addEventListener('click', () => App.cycleQuote());

      $('day-nav').addEventListener('click', e => {
        const btn = e.target.closest('.day-btn');
        if (btn) { STATE.selDay = parseInt(btn.dataset.dayId); App.buildNav(); App.loadDay(STATE.selDay); SFX.tick(); }
      });

      document.querySelector('.sec-right').addEventListener('click', e => {
        const btn = e.target.closest('[data-filter]');
        if (btn) App.setFilter(btn.dataset.filter);
      });

      $('btn-chronicles').addEventListener('click', () => UI.openModal('cal-modal'));
      $('btn-arena').addEventListener('click', () => App.toggleArena());

      let draggedCard = null;
      $('ex-grid').addEventListener('dragstart', e => {
        const card = e.target.closest('.ex-card');
        if (!card) return;
        if (document.body.classList.contains('arena-mode')) { e.preventDefault(); return; }
        draggedCard = card;
        setTimeout(() => card.classList.add('dragged'), 0);
        e.dataTransfer.effectAllowed = 'move';
        SFX.tick();
      });

      $('ex-grid').addEventListener('dragover', e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const card = e.target.closest('.ex-card');
        if (card && card !== draggedCard && draggedCard) {
           const rect = card.getBoundingClientRect();
           const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
           $('ex-grid').insertBefore(draggedCard, next && card.nextSibling || card);
        }
      });

      $('ex-grid').addEventListener('dragend', e => {
        if (!draggedCard) return;
        draggedCard.classList.remove('dragged');
        draggedCard = null;
        const newOrder = Array.from($('ex-grid').querySelectorAll('.ex-card')).map(c => c.id.replace('card-', ''));
        LS.set('oly_order_' + STATE.selDay, JSON.stringify(newOrder));
        SFX.conquer();
      });

      $('ex-grid').addEventListener('click', e => {
        const action = e.target.closest('[data-action]');
        if (action) {
          const act = action.dataset.action, id = action.dataset.id;
          if (act === 'edit') App.openEditor('edit', id);
          else if (act === 'delete') App.delEx(id);
          else if (act === 'delimg') { e.stopPropagation(); if (confirm('Remove this image?')) { LS.del('oly_img_' + id); App.refreshZone(id, null); SFX.tick(); } }
          else if (act === 'lightbox') UI.openLB(action.dataset.src);
          else if (act === 'toggle') App.toggleDone(id);
          else if (act === 'add') App.openEditor('add');
        }
        // Click-to-browse on empty paste zone
        const zone = e.target.closest('.paste-zone');
        if (zone && !zone.querySelector('img')) {
          const inp = document.createElement('input');
          inp.type = 'file'; inp.accept = 'image/*';
          inp.onchange = ev => {
            const file = ev.target.files[0]; if (!file) return;
            const reader = new FileReader();
            reader.onload = re => { LS.set('oly_img_' + zone.dataset.id, re.target.result); App.refreshZone(zone.dataset.id, re.target.result); SFX.tick(); UI.toast('Image set!'); };
            reader.readAsDataURL(file);
          };
          inp.click();
        }
      });

      // Hover tracking for Ctrl+V paste
      $('ex-grid').addEventListener('mouseover', e => { const z = e.target.closest('.paste-zone'); if (z) STATE.hovZone = z.dataset.id; });
      $('ex-grid').addEventListener('mouseout', e => { const z = e.target.closest('.paste-zone'); if (z) STATE.hovZone = null; });

      $('add-container').addEventListener('click', e => { if (e.target.closest('[data-action="add"]')) App.openEditor('add'); });

      // Profile Switcher Events
      $('btn-profiles').addEventListener('click', () => { UI.buildProfileSwitcher(); UI.openModal('profile-modal'); });
      $('profile-close').addEventListener('click', () => UI.closeModal('profile-modal'));
      $('profile-modal').addEventListener('click', e => { if (e.target === e.currentTarget) UI.closeModal('profile-modal'); });

      // Ctrl+V paste into hovered zone
      document.addEventListener('paste', e => {
        if (!STATE.hovZone) return; e.preventDefault();
        const items = (e.clipboardData || e.originalEvent.clipboardData).items;
        for (const item of items) {
          if (item.kind === 'file' && item.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = re => { LS.set('oly_img_' + STATE.hovZone, re.target.result); App.refreshZone(STATE.hovZone, re.target.result); SFX.tick(); UI.toast('Image pasted!'); };
            reader.readAsDataURL(item.getAsFile());
            break;
          }
        }
      });

      $('cal-close').addEventListener('click', () => UI.closeModal('cal-modal'));
      $('ed-close').addEventListener('click', () => UI.closeModal('ed-modal'));
      $('cal-modal').addEventListener('click', e => { if (e.target === e.currentTarget) UI.closeModal('cal-modal'); });
      $('ed-modal').addEventListener('click', e => { if (e.target === e.currentTarget) UI.closeModal('ed-modal'); });
      $('cal-prev').addEventListener('click', () => UI.calShift(-1));
      $('cal-next').addEventListener('click', () => UI.calShift(1));
      $('btn-save-ex').addEventListener('click', () => App.saveEx());
      $('btn-export').addEventListener('click', () => DataSys.exportData());
      $('btn-import-trigger').addEventListener('click', () => $('file-import').click());
      $('file-import').addEventListener('change', e => DataSys.importData(e));

      // Swipe Navigation for Arena
      let touchStartX = 0;
      document.addEventListener('touchstart', e => { if (document.body.classList.contains('arena-mode')) touchStartX = e.changedTouches[0].screenX; });
      document.addEventListener('touchend', e => {
        if (!document.body.classList.contains('arena-mode')) return;
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 100) {
          const active = document.querySelector('.ex-card.arena-active');
          if (!active) return;
          const id = active.id.replace('card-', '');
          if (diff < 0) {
            // Swipe Left (Skip)
            const next = active.nextElementSibling;
            document.querySelectorAll('.ex-card').forEach(c => c.classList.remove('arena-active'));
            if (next && !next.classList.contains('done')) {
              next.classList.add('arena-active');
              next.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else App.updateArenaState();
          } else {
            // Swipe Right (Conquer)
            App.toggleDone(id);
          }
        }
      });

      // Keyboard Shortcuts
      document.addEventListener('keydown', e => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'a' || e.key === 'A') App.toggleArena();
        if (e.key === 'Escape') {
          if (document.body.classList.contains('arena-mode')) App.toggleArena();
          document.querySelectorAll('.modal').forEach(m => UI.closeModal(m.id));
          UI.closeLB();
        }
        if (e.key === 'ArrowRight' && !document.body.classList.contains('arena-mode')) {
          let nextDay = STATE.selDay + 1; if (nextDay > 6) nextDay = 0;
          App.loadDay(nextDay);
          App.buildNav();
        }
        if (e.key === 'ArrowLeft' && !document.body.classList.contains('arena-mode')) {
          let prevDay = STATE.selDay - 1; if (prevDay < 0) prevDay = 6;
          App.loadDay(prevDay);
          App.buildNav();
        }
        if (!isNaN(e.key) && parseInt(e.key) > 0 && document.body.classList.contains('arena-mode')) {
           const active = document.querySelector('.ex-card.arena-active');
           if (active) App.toggleDone(active.id.replace('card-', ''));
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
    a.download = 'olympus_scrolls_' + today() + '.json'; a.click(); URL.revokeObjectURL(a.href);
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
      } catch { UI.toast('Invalid Scroll format.'); }
    };
    reader.readAsText(file); e.target.value = '';
  }
};

window.onload = App.init;
