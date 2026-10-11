/* ═══════════════════════════════════════════
   OLYMPUS — EXERCISE FIGURE POSES
   One entry per movement (keys match EX_LIB; core / Khadija moves are mapped
   by name at the bottom). See figures.js for the frame format.
═══════════════════════════════════════════ */
(() => {
  const D = Figures.define;
  const AY = 135;                 // ankle height when the foot is flat on the floor
  const S = (o, x) => Object.assign({}, o, x);
  // Upright stance, hip over mid-foot, soft knees.
  const stand = (x = 100, o = {}) => S({ h: [x, 74], t: -90, ln: [x + 3, AY], lf: [x - 2, AY], an: { a: [94, 88] }, af: { a: [86, 92] } }, o);
  // Front-view stance.
  const fstand = (x = 100, o = {}) => S({ h: [x, 74], t: -90, ln: [x + 10, AY], lf: [x - 10, AY], an: { a: [80, 88] }, af: { a: [100, 92] } }, o);
  // Front-view seated on a bench (thighs foreshortened toward the viewer).
  const fseat = (x = 100, o = {}) => S({ h: [x, 96], t: -90, ln: { a: [70, 92] }, lf: { a: [110, 88] }, ls: { th: [0.45, 0.45], sh: [1, 1] }, an: { a: [80, 90] }, af: { a: [100, 90] } }, o);

  /* ── WARM-UPS ─────────────────────────── */
  D('press_prep', { v: 'front', hl: ['ua'], move: 0.9, hold: 0.15, f: [
    fstand(100, { an: { a: [80, 82] }, af: { a: [100, 98] } }),
    fstand(100, { an: { a: [0, 0] }, af: { a: [180, 180] } }),
    fstand(100, { an: { a: [-75, -78] }, af: { a: [-105, -102] } }),
    fstand(100, { an: { a: [0, 0] }, af: { a: [180, 180] } })
  ]});
  D('pull_prep', { hl: ['torso', 'th'], f: [
    stand(100, { an: { a: [92, 90] }, af: { a: [88, 90] } }),
    { h: [80, 80], t: -18, ln: [103, AY], lf: [98, AY], an: { a: [92, 90] }, af: { a: [88, 90] } }
  ]});
  D('leg_prep', { hl: ['th'], f: [
    stand(100, { an: { r: [70, 10] }, af: { r: [65, 5] } }),
    { h: [86, 106], t: -58, ln: [103, AY], lf: [98, AY], an: { r: [30, 10] }, af: { r: [25, 5] } }
  ]});

  /* ── PUSH ─────────────────────────────── */
  D('bb_ohp', { hl: ['ua'], eq: [{ k: 'bb' }], f: [
    stand(100, { an: { a: [70, -100] }, af: { a: [70, -100] } }),
    stand(100, { an: { a: [-87, -90] }, af: { a: [-87, -90] } })
  ]});
  const inclineBase = { h: [118, 98], t: -150, hd: 10, ln: [150, AY], lf: [146, AY], kb: [-1, -1] };
  D('db_incline_press', { hl: ['torso', 'ua'], eq: [{ k: 'pad', static: true, seat: 26, e0: 4, e1: 8 }, { k: 'db', ang: -30 }], f: [
    S(inclineBase, { an: { a: [95, -88] }, af: { a: [95, -88] } }),
    S(inclineBase, { an: { a: [-72, -72] }, af: { a: [-72, -72] } })
  ]});
  const flat = { h: [128, 104], t: 180, hd: 0, ln: [154, AY], lf: [150, AY], kb: [-1, -1] };
  D('db_bench', { hl: ['torso', 'ua'], eq: [{ k: 'pad', static: true, e0: 14, e1: 10 }, { k: 'db', ang: 0 }], f: [
    S(flat, { an: { a: [80, -90] }, af: { a: [80, -90] } }),
    S(flat, { an: { a: [-90, -90] }, af: { a: [-90, -90] } })
  ]});
  const seatF = { static: true, k: 'box', x: 66, y: 104, w: 68, h: 34 };
  D('db_seated_press', { v: 'front', hl: ['ua'], eq: [S(seatF, {}), { k: 'db', ang: 0 }], f: [
    fseat(100, { an: { a: [12, -90] }, af: { a: [168, -90] } }),
    fseat(100, { an: { a: [-70, -84] }, af: { a: [-110, -96] } })
  ]});
  D('db_lateral', { v: 'front', hl: ['ua'], eq: [{ k: 'db', ang: 90 }], f: [
    fstand(100, { an: { a: [75, 80] }, af: { a: [105, 100] } }),
    fstand(100, { an: { a: [-4, 6] }, af: { a: [184, 174] } })
  ]});
  D('db_seated_lateral', { v: 'front', hl: ['ua'], eq: [S(seatF, {}), { k: 'db', ang: 90 }], f: [
    fseat(100, { an: { a: [78, 82] }, af: { a: [102, 98] } }),
    fseat(100, { an: { a: [-4, 6] }, af: { a: [184, 174] } })
  ]});
  D('db_fly', { hl: ['torso'], eq: [{ k: 'pad', static: true, e0: 14, e1: 10 }, { k: 'db', ang: 0 }], f: [
    S(flat, { la: { ua: [1, 1], fa: [1, 1] }, an: { a: [-88, -98] }, af: { a: [-88, -98] } }),
    S(flat, { la: { ua: [0.45, 0.45], fa: [0.45, 0.45] }, an: { a: [96, 92] }, af: { a: [96, 92] } })
  ]});
  D('db_incline_fly', { hl: ['torso'], eq: [{ k: 'pad', static: true, seat: 26, e0: 4, e1: 8 }, { k: 'db', ang: -30 }], f: [
    S(inclineBase, { la: { ua: [1, 1], fa: [1, 1] }, an: { a: [-70, -80] }, af: { a: [-70, -80] } }),
    S(inclineBase, { la: { ua: [0.45, 0.45], fa: [0.45, 0.45] }, an: { a: [110, 100] }, af: { a: [110, 100] } })
  ]});
  // Push-up family: toes pinned, hands planted by IK, straight body line.
  const plank = (t, hand, o = {}) => S({ h: [100, 100], t, ln: { a: [t + 180, t + 180] }, lf: { a: [t + 180, t + 180] }, pn: 70, pf: 70, anc: ['toN', 32, 137], an: hand, af: hand }, o);
  D('deficit_pushup', { hl: ['torso', 'ua'], eq: [{ k: 'box', static: true, x: 118, y: 128, w: 22, h: 10 }], f: [
    plank(-27, [123, 127]),
    plank(-10, [123, 127], { eb: [1, 1] })
  ]});
  D('ez_cgbp', { hl: ['fa', 'ua'], eq: [{ k: 'pad', static: true, e0: 14, e1: 10 }, { k: 'ez' }], f: [
    S(flat, { an: { a: [52, -95] }, af: { a: [52, -95] } }),
    S(flat, { an: { a: [-92, -90] }, af: { a: [-92, -90] } })
  ]});
  D('ez_skull', { hl: ['fa'], eq: [{ k: 'pad', static: true, e0: 14, e1: 10 }, { k: 'ez' }], f: [
    S(flat, { an: { a: [-105, -102] }, af: { a: [-105, -102] } }),
    S(flat, { an: { a: [-105, 155] }, af: { a: [-105, 155] } })
  ]});
  D('db_oh_tri', { hl: ['fa'], eq: [{ k: 'db', side: 'n', ang: 0 }], f: [
    stand(100, { an: { a: [-84, -92] }, af: { a: [-84, -92] } }),
    stand(100, { an: { a: [-80, 95] }, af: { a: [-80, 95] } })
  ]});
  D('scap_pushup', { hl: ['torso'], hold: 0.45, move: 0.8, f: [
    plank(-23, [122, 133]),
    plank(-21, [122, 133])
  ]});
  D('wall_angel', { v: 'front', hl: ['ua'], eq: [{ k: 'wallF', static: true, x: 62, w: 76 }], f: [
    fstand(100, { an: { a: [5, -88] }, af: { a: [175, -92] } }),
    fstand(100, { an: { a: [-55, -78] }, af: { a: [-125, -102] } })
  ]});

  /* ── PULL ─────────────────────────────── */
  D('bb_deadlift', { hl: ['th', 'torso'], eq: [{ k: 'bb' }], move: [1.0, 1.3], f: [
    { h: [72, 96], t: -25, ln: [100, AY], lf: [97, AY], an: [104, 125], af: [104, 125] },
    stand(98, { an: { a: [90, 90] }, af: { a: [90, 90] } })
  ]});
  D('pendlay_row', { hl: ['torso', 'ua'], eq: [{ k: 'bb' }], move: [0.6, 1.0], f: [
    { h: [72, 84], t: -5, ln: [100, AY], lf: [97, AY], an: [110, 125], af: [110, 125] },
    { h: [72, 84], t: -5, ln: [100, AY], lf: [97, AY], an: [99, 91], af: [99, 91], eb: [-1, -1] }
  ]});
  D('bb_row', { hl: ['torso', 'ua'], eq: [{ k: 'bb' }], f: [
    { h: [78, 80], t: -38, ln: [102, AY], lf: [99, AY], an: { a: [92, 90] }, af: { a: [92, 90] } },
    { h: [78, 80], t: -38, ln: [102, AY], lf: [99, AY], an: [101, 72], af: [101, 72], eb: [-1, -1] }
  ]});
  const csBase = { h: [82, 98], t: -40, hd: -10, ln: [58, AY], lf: [62, AY], kb: [1, 1], pn: 40, pf: 40 };
  D('cs_db_row', { hl: ['torso', 'ua'], eq: [{ k: 'pad', static: true, side: 'front', e0: 10, e1: 2 }, { k: 'db', ang: 0 }], f: [
    S(csBase, { an: { a: [92, 90] }, af: { a: [92, 90] } }),
    S(csBase, { an: [98, 96], af: [98, 96], eb: [-1, -1] })
  ]});
  const oneArm = { h: [70, 80], t: -6, ln: [86, AY], lf: { a: [90, 180] }, pf: 180, af: [110, 112], eb: [1, 1] };
  D('db_row', { hl: ['torso', 'ua'], eq: [{ k: 'bench', static: true, x: 36, y: 115, w: 86 }, { k: 'db', side: 'n', ang: 0 }], f: [
    S(oneArm, { an: { a: [92, 90] } }),
    S(oneArm, { an: [96, 86], eb: [-1, 1] })
  ]});
  D('db_pullover', { hl: ['torso', 'ua'], eq: [{ k: 'pad', static: true, e0: 14, e1: 10 }, { k: 'db', side: 'n', ang: 0 }], f: [
    S(flat, { an: { a: [-85, -88] }, af: { a: [-85, -88] } }),
    S(flat, { an: { a: [172, 176] }, af: { a: [172, 176] } })
  ]});
  D('bb_shrug', { v: 'front', hl: ['torso'], eq: [{ k: 'barF' }], hold: [0.6, 0.3], move: 0.7, f: [
    fstand(100, { an: { a: [85, 88] }, af: { a: [95, 92] } }),
    fstand(100, { sy: 8, an: { a: [85, 88] }, af: { a: [95, 92] } })
  ]});
  D('db_shrug', { v: 'front', hl: ['torso'], eq: [{ k: 'db', ang: 0 }], hold: [0.6, 0.3], move: 0.7, f: [
    fstand(100, { an: { a: [80, 86] }, af: { a: [100, 94] } }),
    fstand(100, { sy: 8, an: { a: [80, 86] }, af: { a: [100, 94] } })
  ]});
  // Bent-over / chest-supported rear-delt raises, seen from the front: torso foreshortened.
  const bentF = (o = {}) => fstand(100, S({ h: [100, 76], ts: 0.5, ho: 9, ln: [109, AY], lf: [91, AY] }, o));
  D('cs_rear_fly', { v: 'front', hl: ['ua'], eq: [{ k: 'db', ang: 90 }], f: [
    bentF({ an: { a: [80, 88] }, af: { a: [100, 92] } }),
    bentF({ an: { a: [-8, 4] }, af: { a: [188, 176] } })
  ]});
  D('db_rear_raise', { v: 'front', hl: ['ua'], eq: [{ k: 'db', ang: 90 }], f: [
    bentF({ an: { a: [80, 88] }, af: { a: [100, 92] } }),
    bentF({ an: { a: [-8, 4] }, af: { a: [188, 176] } })
  ]});
  D('ez_curl', { hl: ['fa'], eq: [{ k: 'ez' }], f: [
    stand(100, { an: { a: [92, 88] }, af: { a: [92, 88] } }),
    stand(100, { an: { a: [96, -62] }, af: { a: [96, -62] } })
  ]});
  D('ez_reverse_curl', { hl: ['fa'], eq: [{ k: 'ez' }], f: [
    stand(100, { an: { a: [92, 88] }, af: { a: [92, 88] } }),
    stand(100, { an: { a: [96, -55] }, af: { a: [96, -55] } })
  ]});
  const incSeat = { h: [104, 102], t: -128, hd: 20, ln: [140, AY], lf: [136, AY], kb: [-1, -1] };
  D('db_incline_curl', { hl: ['fa'], eq: [{ k: 'pad', static: true, seat: 22, e0: 4, e1: 8 }, { k: 'db', ang: 0 }], f: [
    S(incSeat, { an: { a: [96, 92] }, af: { a: [96, 92] } }),
    S(incSeat, { an: { a: [100, -60] }, af: { a: [100, -60] } })
  ]});
  D('db_hammer', { hl: ['fa'], eq: [{ k: 'db', ang: 0 }], f: [
    stand(100, { an: { a: [92, 88] }, af: { a: [92, 88] } }),
    stand(100, { an: { a: [96, -62] }, af: { a: [96, -62] } })
  ]});
  const concBase = { h: [88, 102], t: -55, hd: 25, ln: [118, AY], lf: [114, AY], kb: [-1, -1], af: [115, 96] };
  D('db_conc_curl', { hl: ['fa'], eq: [{ k: 'bench', static: true, x: 58, y: 110, w: 52 }, { k: 'db', side: 'n', ang: 0 }], f: [
    S(concBase, { an: { a: [78, 92] } }),
    S(concBase, { an: { a: [78, -95] } })
  ]});

  /* ── LEGS ─────────────────────────────── */
  D('bb_back_squat', { hl: ['th'], eq: [{ k: 'bb', at: 'S', off: [-3, -1] }], move: [1.2, 1.0], f: [
    stand(100, { t: -86, an: { r: [112, -72] }, af: { r: [112, -72] } }),
    { h: [80, 108], t: -48, ln: [102, AY], lf: [99, AY], an: { r: [112, -72] }, af: { r: [112, -72] } }
  ]});
  D('bb_front_squat', { hl: ['th'], eq: [{ k: 'bb', at: 'wrN' }], move: [1.2, 1.0], f: [
    stand(100, { an: { r: [-6, -165] }, af: { r: [-6, -165] } }),
    { h: [84, 110], t: -66, ln: [102, AY], lf: [99, AY], an: { r: [-6, -165] }, af: { r: [-6, -165] } }
  ]});
  D('bss', { hl: ['th'], eq: [{ k: 'bench', static: true, x: 22, y: 106, w: 46 }, { k: 'db', ang: 0 }], f: [
    { h: [96, 76], t: -86, ln: [120, AY], lf: [58, 103], kb: [-1, -1], pf: 200, an: { a: [92, 90] }, af: { a: [92, 90] } },
    { h: [92, 104], t: -80, ln: [120, AY], lf: [58, 103], kb: [-1, -1], pf: 200, an: { a: [92, 90] }, af: { a: [92, 90] } }
  ]});
  D('heel_goblet', { hl: ['th'], eq: [{ k: 'wedge', static: true, x: 92 }, { k: 'db', side: 'n', ang: 90, at: 'wrN', off: [2, 0] }], move: [1.2, 1.0], f: [
    { h: [100, 72], t: -88, ln: [101, 131], lf: [98, 131], pn: 12, pf: 12, an: { r: [60, -110] }, af: { r: [60, -110] } },
    { h: [93, 112], t: -74, ln: [101, 131], lf: [98, 131], pn: 12, pf: 12, an: { r: [60, -110] }, af: { r: [60, -110] } }
  ]});
  D('db_step_up', { hl: ['th'], eq: [{ k: 'box', static: true, x: 110, y: 106, w: 54 }, { k: 'db', ang: 0 }], move: [1.2, 1.1], f: [
    { h: [100, 79], t: -86, ln: [124, 103], lf: [86, AY], an: { a: [92, 90] }, af: { a: [92, 90] } },
    { h: [124, 42], t: -90, ln: [126, 103], lf: { a: [100, 115] }, an: { a: [92, 90] }, af: { a: [92, 90] } }
  ]});
  D('db_walking_lunge', { hl: ['th'], eq: [{ k: 'db', ang: 0 }], f: [
    stand(80, { an: { a: [92, 90] }, af: { a: [92, 90] } }),
    { h: [100, 104], t: -86, ln: [123, AY], lf: [72, 131], kb: [-1, -1], pf: 150, an: { a: [92, 90] }, af: { a: [92, 90] } }
  ]});
  D('db_reverse_lunge', { hl: ['th'], eq: [{ k: 'db', ang: 0 }], f: [
    stand(110, { an: { a: [92, 90] }, af: { a: [92, 90] } }),
    { h: [96, 104], t: -86, ln: [113, AY], lf: [66, 131], kb: [-1, -1], pf: 150, an: { a: [92, 90] }, af: { a: [92, 90] } }
  ]});
  D('bb_rdl', { hl: ['th', 'torso'], eq: [{ k: 'bb' }], f: [
    stand(100, { an: { a: [90, 90] }, af: { a: [90, 90] } }),
    { h: [77, 80], t: -30, ln: [101, AY], lf: [98, AY], an: { a: [96, 96] }, af: { a: [96, 96] } }
  ]});
  D('db_rdl', { hl: ['th', 'torso'], eq: [{ k: 'db', ang: 0 }], f: [
    stand(100, { an: { a: [90, 90] }, af: { a: [90, 90] } }),
    { h: [77, 80], t: -30, ln: [101, AY], lf: [98, AY], an: { a: [96, 96] }, af: { a: [96, 96] } }
  ]});
  const thrust = { ln: [128, AY], lf: [124, AY] };
  D('bb_hip_thrust', { hl: ['th'], eq: [{ k: 'box', static: true, x: 14, y: 106, w: 44 }, { k: 'bb', at: 'H', off: [0, -12] }], f: [
    S(thrust, { h: [86, 124], t: 218, an: ['H', 2, -11], af: ['H', 2, -11] }),
    S(thrust, { h: [94, 98], t: 180, an: ['H', 2, -11], af: ['H', 2, -11] })
  ]});
  D('db_hip_thrust', { hl: ['th'], eq: [{ k: 'box', static: true, x: 14, y: 106, w: 44 }, { k: 'db', side: 'n', at: 'H', off: [0, -9], ang: 0 }], f: [
    S(thrust, { h: [86, 124], t: 218, an: ['H', 4, -9], af: ['H', 0, -9] }),
    S(thrust, { h: [94, 98], t: 180, an: ['H', 4, -9], af: ['H', 0, -9] })
  ]});
  const prone = { h: [96, 104], t: 0, hd: 10 };
  D('db_leg_curl', { hl: ['sh'], eq: [{ k: 'pad', static: true, side: 'front', e0: 18, e1: 4 }, { k: 'db', at: 'anN', ang: 90, off: [-2, -4] }], f: [
    S(prone, { ln: { a: [178, 178] }, lf: { a: [178, 178] }, pn: 178, pf: 178, an: { a: [70, 90] }, af: { a: [70, 90] } }),
    S(prone, { ln: { a: [178, 268] }, lf: { a: [178, 268] }, pn: 268, pf: 268, an: { a: [70, 90] }, af: { a: [70, 90] } })
  ]});
  D('sl_calf', { hl: ['sh'], eq: [{ k: 'box', static: true, x: 105, y: 118, w: 52, h: 20 }, { k: 'db', side: 'n', ang: 0 }], move: 0.8, hold: [0.3, 0.6], f: [
    { h: [100, 70], t: -90, ln: { a: [90, 90] }, lf: { a: [96, 150] }, pn: -18, pf: 60, anc: ['toN', 113, 116], an: { a: [92, 90] }, af: { a: [60, -10] } },
    { h: [100, 70], t: -90, ln: { a: [90, 90] }, lf: { a: [96, 150] }, pn: 55, pf: 80, anc: ['toN', 113, 116], an: { a: [92, 90] }, af: { a: [60, -10] } }
  ]});
  const calfSeat = { h: [80, 96], t: -90, an: [104, 86], af: [104, 86], anc: ['toN', 116, 131] };
  D('seated_calf', { hl: ['sh'], eq: [{ k: 'bench', static: true, x: 46, y: 105, w: 50 }, { k: 'box', static: true, x: 104, y: 131, w: 22, h: 7 }, { k: 'db', at: 'knN', off: [0, -6], ang: 0 }], move: 0.8, hold: [0.3, 0.6], f: [
    S(calfSeat, { ln: { a: [0, 92] }, lf: { a: [0, 92] }, pn: -14, pf: -14 }),
    S(calfSeat, { ln: { a: [-8, 100] }, lf: { a: [-8, 100] }, pn: 40, pf: 40 })
  ]});

  /* ── CORE ─────────────────────────────── */
  const declineLegs = { ln: [150, 82], lf: [146, 82], kb: [-1, -1], pn: 0, pf: 0 };
  D('decline_crunch', { hl: ['torso'], eq: [{ k: 'pad', static: true, e0: 20, e1: 10 }, { k: 'db', side: 'n', ang: 0, at: 'wrN' }], f: [
    S(declineLegs, { h: [112, 92], t: 162, hd: -10, an: { r: [-30, -150] }, af: { r: [-30, -150] } }),
    S(declineLegs, { h: [112, 92], t: 222, hd: -30, an: { r: [-30, -150] }, af: { r: [-30, -150] } })
  ]});
  D('decline_twist', { hl: ['torso'], eq: [{ k: 'pad', static: true, e0: 20, e1: 10 }], f: [
    S(declineLegs, { h: [112, 92], t: 162, hd: -10, an: { r: [-40, -140] }, af: { r: [-40, -140] } }),
    S(declineLegs, { h: [112, 92], t: 216, hd: -25, an: { r: [-20, 20] }, af: { r: [-60, -160] } })
  ]});
  const fsitV = o => S({ h: [100, 128], t: -90, ts: 0.9, ln: { a: [-40, 128] }, lf: { a: [-140, 52] }, ls: { th: [0.7, 0.7], sh: [0.62, 0.62] }, pn: 120, pf: 60 }, o);
  D('russian_twist', { v: 'front', hl: ['torso'], eq: [{ k: 'ball', r: 7 }], move: 0.8, hold: 0.15, f: [
    fsitV({ t: -100, an: [64, 128], af: [64, 128], eb: [1, 1] }),
    fsitV({ t: -80, an: [136, 128], af: [136, 128], eb: [-1, -1] })
  ]});
  D('suitcase_carry', { v: 'front', hl: ['torso'], eq: [{ k: 'db', side: 'n', ang: 0 }], move: 0.55, hold: 0, f: [
    fstand(100, { an: { a: [88, 90] }, af: { a: [118, 108] }, ln: [110, AY], lf: [90, 127] }),
    fstand(100, { an: { a: [88, 90] }, af: { a: [118, 108] }, ln: [110, 127], lf: [90, AY] })
  ]});
  const supine = { h: [118, 128], t: 180, hd: -8 };
  D('dead_bug', { hl: ['torso'], move: 1.0, hold: 0.3, f: [
    S(supine, { ln: { a: [-90, 0] }, lf: { a: [-90, 0] }, an: { a: [-90, -90] }, af: { a: [-90, -90] } }),
    S(supine, { ln: { a: [-90, 0] }, lf: { a: [-8, -8] }, an: { a: [-178, -178] }, af: { a: [-90, -90] } }),
    S(supine, { ln: { a: [-90, 0] }, lf: { a: [-90, 0] }, an: { a: [-90, -90] }, af: { a: [-90, -90] } }),
    S(supine, { ln: { a: [-8, -8] }, lf: { a: [-90, 0] }, an: { a: [-90, -90] }, af: { a: [-178, -178] } })
  ]});
  D('reverse_crunch', { hl: ['torso'], f: [
    S(supine, { ln: { a: [-90, 0] }, lf: { a: [-90, 0] }, an: { a: [2, 2] }, af: { a: [2, 2] } }),
    S(supine, { h: [116, 122], t: 186, ln: { a: [-140, -60] }, lf: { a: [-140, -60] }, an: { a: [2, 2] }, af: { a: [2, 2] } })
  ]});
  D('lying_leg_raise', { hl: ['torso', 'th'], f: [
    S(supine, { ln: { a: [-6, -6] }, lf: { a: [-6, -6] }, an: { a: [4, 4] }, af: { a: [4, 4] } }),
    S(supine, { ln: { a: [-88, -88] }, lf: { a: [-88, -88] }, an: { a: [4, 4] }, af: { a: [4, 4] } })
  ]});
  D('v_ups', { hl: ['torso'], f: [
    { h: [100, 128], t: 180, hd: -5, ln: { a: [-4, -4] }, lf: { a: [-4, -4] }, an: { a: [184, 184] }, af: { a: [184, 184] } },
    { h: [100, 128], t: 228, hd: -20, ln: { a: [-46, -46] }, lf: { a: [-46, -46] }, an: { a: [-52, -48] }, af: { a: [-52, -48] } }
  ]});
  // Side plank seen from the front: body in a line, bottom forearm on the floor.
  D('side_plank', { v: 'front', hl: ['torso'], hold: 1.2, move: 1.4, f: [
    { h: [96, 118], t: -165, ln: { a: [14, 14] }, lf: { a: [14, 14] }, pn: 104, pf: 104, af: { a: [84, 172] }, an: { a: [-30, 60] } },
    { h: [96, 116], t: -167, ln: { a: [15, 15] }, lf: { a: [15, 15] }, pn: 105, pf: 105, af: { a: [84, 172] }, an: { a: [-30, 60] } }
  ]});
  const proneR = { h: [80, 128], hd: -6 };
  D('superman', { hl: ['torso', 'th'], hold: [0.3, 0.9], f: [
    S(proneR, { t: 0, ln: { a: [180, 180] }, lf: { a: [180, 180] }, pn: 180, pf: 180, an: { a: [-2, -2] }, af: { a: [-2, -2] } }),
    S(proneR, { t: -12, hd: -12, ln: { a: [190, 190] }, lf: { a: [190, 190] }, pn: 190, pf: 190, an: { a: [-16, -16] }, af: { a: [-16, -16] } })
  ]});
  D('neck_flex', { hl: [], eq: [{ k: 'bench', static: true, x: 80, y: 113, w: 80 }], hold: 0.4, move: 1.3, f: [
    { h: [126, 104], t: 180, hd: -35, ln: [150, AY], lf: [146, AY], an: { a: [70, 10] }, af: { a: [70, 10] } },
    { h: [126, 104], t: 180, hd: 45, ln: [150, AY], lf: [146, AY], an: { a: [70, 10] }, af: { a: [70, 10] } }
  ]});
  D('prone_neck', { hl: [], eq: [{ k: 'bench', static: true, x: 40, y: 113, w: 80 }], hold: 0.4, move: 1.3, f: [
    { h: [74, 104], t: 0, hd: 40, ln: { a: [178, 120] }, lf: { a: [178, 120] }, pn: 100, pf: 100, an: { a: [100, 170] }, af: { a: [100, 170] } },
    { h: [74, 104], t: 0, hd: -12, ln: { a: [178, 120] }, lf: { a: [178, 120] }, pn: 100, pf: 100, an: { a: [100, 170] }, af: { a: [100, 170] } }
  ]});

  /* ── CORE FORTRESS EXTRAS ─────────────── */
  D('ab_wheel', { hl: ['torso'], eq: [{ k: 'wheel', off: [0, 2] }], move: [1.4, 1.1], f: [
    { h: [80, 101], t: -30, ln: { a: [100, 180] }, lf: { a: [100, 180] }, pn: 180, pf: 180, anc: ['knN', 74, 132], an: [116, 127], af: [116, 127] },
    { h: [80, 101], t: -4, ln: { a: [130, 180] }, lf: { a: [130, 180] }, pn: 180, pf: 180, anc: ['knN', 74, 132], an: [168, 127], af: [168, 127] }
  ]});
  const floorCrunch = { h: [118, 128], ln: [146, AY], lf: [142, AY], kb: [-1, -1] };
  D('weighted_crunch', { hl: ['torso'], eq: [{ k: 'db', side: 'n', ang: 0 }], f: [
    S(floorCrunch, { t: 180, hd: -5, an: { r: [-30, -150] }, af: { r: [-30, -150] } }),
    S(floorCrunch, { t: 214, hd: -25, an: { r: [-30, -150] }, af: { r: [-30, -150] } })
  ]});
  D('hollow_hold', { hl: ['torso'], hold: 1.2, move: 1.4, f: [
    { h: [104, 128], t: 192, hd: -20, ln: { a: [-12, -12] }, lf: { a: [-12, -12] }, an: { a: [190, 190] }, af: { a: [190, 190] } },
    { h: [104, 128], t: 194, hd: -22, ln: { a: [-14, -14] }, lf: { a: [-14, -14] }, an: { a: [188, 188] }, af: { a: [188, 188] } }
  ]});
  D('woodchopper', { v: 'front', hl: ['torso'], eq: [{ k: 'post', static: true, x: 26, y: 8, ay: 14 }, { k: 'band', from: [26, 14] }], move: [0.8, 1.1], f: [
    fstand(100, { t: -100, ln: [116, AY], lf: [84, AY], an: [62, 30], af: [62, 30], eb: [1, 1] }),
    fstand(100, { t: -78, ln: [116, AY], lf: [84, AY], an: [140, 104], af: [140, 104], eb: [-1, -1] })
  ]});
  D('pallof', { hl: ['torso'], eq: [{ k: 'post', static: true, x: 20, y: 40, ay: 58 }, { k: 'band', from: [20, 58] }], hold: [0.4, 0.8], f: [
    { h: [100, 78], t: -90, ln: [108, AY], lf: [92, AY], an: { a: [70, -100] }, af: { a: [70, -100] } },
    { h: [100, 78], t: -90, ln: [108, AY], lf: [92, AY], an: { a: [2, 0] }, af: { a: [2, 0] } }
  ]});
  const quad = { h: [76, 100], t: -16, ln: { a: [90, 180] }, lf: { a: [90, 180] }, pn: 180, pf: 180, anc: ['knN', 76, 132], an: [114, 133], af: [114, 133] };
  D('bird_dog', { hl: ['torso'], hold: [0.3, 0.9], f: [
    S(quad, {}),
    S(quad, { lf: { a: [178, 178] }, an: { a: [-14, -14] } })
  ]});
  D('back_ext', { hl: ['torso'], f: [
    { h: [80, 128], t: 0, hd: -6, ln: { a: [180, 180] }, lf: { a: [180, 180] }, pn: 180, pf: 180, an: { r: [-150, 150] }, af: { r: [-150, 150] } },
    { h: [80, 128], t: -24, hd: -10, ln: { a: [180, 180] }, lf: { a: [180, 180] }, pn: 180, pf: 180, an: { r: [-150, 150] }, af: { r: [-150, 150] } }
  ]});
  D('hanging_leg_raise', { vb: [0, -20, 200, 170], hl: ['torso', 'th'], eq: [{ k: 'pullbar', static: true, x: 100, y: -12 }], f: [
    { h: [100, 77], t: -90, ln: { a: [92, 92] }, lf: { a: [88, 88] }, pn: 60, pf: 60, an: { a: [-90, -90] }, af: { a: [-90, -90] } },
    { h: [98, 77], t: -96, ln: { a: [-2, -2] }, lf: { a: [-2, -2] }, pn: -60, pf: -60, an: { a: [-87, -90] }, af: { a: [-87, -90] } }
  ]});
  const climber = { t: -22, an: [131, 134], af: [131, 134], anc: ['toF', 30, 137], pf: 70 };
  D('mountain_climber', { hl: ['th', 'torso'], move: 0.4, hold: 0.05, f: [
    S(climber, { h: [90, 100], lf: { a: [158, 158] }, ln: { a: [25, 150] }, pn: 100 }),
    S(climber, { h: [90, 100], lf: { a: [158, 158] }, ln: { a: [140, 160] }, pn: 100 })
  ]});
  D('flutter_kick', { hl: ['th'], move: 0.35, hold: 0.05, f: [
    S(supine, { ln: { a: [-24, -24] }, lf: { a: [-6, -6] }, an: { a: [4, 4] }, af: { a: [4, 4] } }),
    S(supine, { ln: { a: [-6, -6] }, lf: { a: [-24, -24] }, an: { a: [4, 4] }, af: { a: [4, 4] } })
  ]});
  const bike = { h: [112, 128], t: 205, hd: -20, an: { r: [-150, 150] }, af: { r: [-150, 150] } };
  D('bicycle', { hl: ['torso'], move: 0.7, hold: 0.15, f: [
    S(bike, { ln: { a: [-120, -10] }, lf: { a: [-14, -14] } }),
    S(bike, { ln: { a: [-14, -14] }, lf: { a: [-120, -10] } })
  ]});
  D('ball_slam', { hl: ['torso', 'ua'], eq: [{ k: 'ball', r: 9 }], move: [0.9, 0.35], hold: [0.3, 0.2], f: [
    stand(100, { h: [100, 72], an: { a: [-80, -95] }, af: { a: [-80, -95] }, pn: 15, pf: 15 }),
    { h: [80, 96], t: -30, ln: [103, AY], lf: [99, AY], an: [124, 126], af: [124, 126] }
  ]});
  D('toe_touch', { hl: ['torso'], f: [
    S(supine, { h: [104, 128], ln: { a: [-90, -90] }, lf: { a: [-90, -90] }, pn: -10, pf: -10, an: { a: [-120, -120] }, af: { a: [-120, -120] } }),
    S(supine, { h: [104, 128], t: 216, hd: -25, ln: { a: [-90, -90] }, lf: { a: [-90, -90] }, pn: -10, pf: -10, an: { a: [-62, -62] }, af: { a: [-62, -62] } })
  ]});
  // Forearm plank ↔ high plank: toes pinned, body line rises.
  D('plank_pushup', { hl: ['torso', 'ua'], move: 1.0, hold: 0.4, f: [
    plank(-10, { a: [90, 0] }),
    plank(-22, { a: [90, 90] })
  ]});
  D('rkc_plank', { hl: ['torso'], hold: 1.0, move: 1.5, f: [
    plank(-10, { a: [95, -2] }),
    plank(-11, { a: [96, -2] })
  ]});
  D('l_sit', { hl: ['torso', 'th'], eq: [{ k: 'parallettes', static: true, x: 99 }], hold: 1.0, move: 1.5, f: [
    { h: [96, 121], t: -88, ln: { a: [-1, -1] }, lf: { a: [-1, -1] }, pn: -30, pf: -30, an: [99, 128], af: [99, 128], eb: [1, 1] },
    { h: [96, 120], t: -88, ln: { a: [-3, -3] }, lf: { a: [-3, -3] }, pn: -30, pf: -30, an: [99, 128], af: [99, 128], eb: [1, 1] }
  ]});
  const bear = { h: [76, 98], t: -12, ln: { a: [80, 168] }, lf: { a: [80, 168] }, pn: 120, pf: 120, anc: ['toN', 50, 137], an: [117, 134], af: [117, 134] };
  D('bear_hold', { hl: ['torso'], hold: 1.0, move: 1.3, f: [S(bear, {}), S(bear, { h: [76, 97] })] });

  /* ── KHADIJA (bodyweight, home) ───────── */
  D('kh_warmup', { v: 'front', hl: ['torso'], move: 1.3, hold: 0.4, f: [
    fstand(100, { t: -90, an: { a: [80, 88] }, af: { a: [100, 92] } }),
    fstand(100, { t: -76, an: { a: [-50, -60] }, af: { a: [110, 95] } }),
    fstand(100, { t: -90, an: { a: [80, 88] }, af: { a: [100, 92] } }),
    fstand(100, { t: -104, an: { a: [70, 85] }, af: { a: [-130, -120] } })
  ]});
  D('kh_jacks', { v: 'front', hl: [], move: 0.5, hold: 0.1, f: [
    fstand(100, { ln: [106, AY], lf: [94, AY], an: { a: [80, 88] }, af: { a: [100, 92] } }),
    fstand(100, { ln: [128, AY], lf: [94, AY], an: { a: [-40, -50] }, af: { a: [-140, -130] } }),
    fstand(100, { ln: [106, AY], lf: [94, AY], an: { a: [80, 88] }, af: { a: [100, 92] } }),
    fstand(100, { ln: [106, AY], lf: [72, AY], an: { a: [-40, -50] }, af: { a: [-140, -130] } })
  ]});
  D('kh_twist', { v: 'front', hl: ['torso'], move: 1.0, hold: 0.2, f: [
    fstand(100, { t: -90, an: [100, 50], af: [100, 50] }),
    fstand(100, { t: -84, an: [122, 46], af: [118, 48] }),
    fstand(100, { t: -90, an: [100, 50], af: [100, 50] }),
    fstand(100, { t: -96, an: [78, 46], af: [82, 48] })
  ]});
  D('kh_side_plank', { v: 'front', hl: ['torso'], hold: 1.2, move: 1.4, f: [
    { h: [96, 119], t: -163, ln: { a: [17, 96] }, lf: { a: [17, 96] }, ls: { th: [1, 1], sh: [0.3, 0.3] }, pn: 175, pf: 175, af: { a: [84, 172] }, an: { a: [12, 18] } },
    { h: [96, 117], t: -165, ln: { a: [16, 96] }, lf: { a: [16, 96] }, ls: { th: [1, 1], sh: [0.3, 0.3] }, pn: 175, pf: 175, af: { a: [84, 172] }, an: { a: [12, 18] } }
  ]});
  D('kh_rainbow', { hl: ['th'], move: 0.9, hold: 0.25, f: [
    S(quad, { lf: { a: [172, 172] } }),
    S(quad, { lf: { a: [196, 196] } })
  ]});
  D('kh_wall_pushup', { hl: ['torso', 'ua'], eq: [{ k: 'wall', static: true, x: 168 }], f: [
    { h: [100, 80], t: -68, ln: { a: [112, 112] }, lf: { a: [112, 112] }, pn: 8, pf: 8, anc: ['anN', 84, 133], an: [166, 44], af: [166, 44], eb: [1, 1] },
    { h: [100, 80], t: -58, ln: { a: [122, 122] }, lf: { a: [122, 122] }, pn: 18, pf: 18, anc: ['anN', 84, 131], an: [166, 44], af: [166, 44], eb: [1, 1] }
  ]});
  D('kh_arm_circles', { v: 'front', hl: ['ua'], move: 0.35, hold: 0, f: [
    fstand(100, { an: { a: [-6, -6] }, af: { a: [186, 186] } }),
    fstand(100, { an: { a: [0, 0] }, af: { a: [180, 180] } }),
    fstand(100, { an: { a: [6, 6] }, af: { a: [174, 174] } }),
    fstand(100, { an: { a: [0, 0] }, af: { a: [180, 180] } })
  ]});
  D('kh_cobra', { hl: ['torso'], hold: [0.4, 1.2], f: [
    { h: [80, 128], t: 0, hd: -4, ln: { a: [180, 180] }, lf: { a: [180, 180] }, pn: 180, pf: 180, an: { a: [178, 178] }, af: { a: [178, 178] } },
    { h: [80, 128], t: -18, hd: -6, ln: { a: [180, 180] }, lf: { a: [180, 180] }, pn: 180, pf: 180, an: { a: [168, 166] }, af: { a: [168, 166] } }
  ]});
  D('kh_doorway', { hl: ['torso'], eq: [{ k: 'door', static: true, x: 84 }], hold: [0.4, 1.2], f: [
    { h: [96, 75], t: -90, ln: [112, AY], lf: [82, AY], an: { a: [180, -90] }, af: { a: [180, -90] } },
    { h: [104, 76], t: -84, ln: [118, AY], lf: [86, AY], an: { a: [178, -96] }, af: { a: [178, -96] } }
  ]});
  D('kh_hand_press', { v: 'front', hl: ['torso', 'ua'], eq: [{ k: 'chair', static: true, x: 80, y: 104, dir: 1, back: false }], hold: [0.4, 1.2], move: 0.6, f: [
    fseat(100, { an: [101, 62], af: [99, 62], eb: [1, -1] }),
    fseat(100, { an: [100.5, 62], af: [99.5, 62], eb: [1, -1], sy: 1 })
  ]});
  D('kh_chair_squat', { hl: ['th'], eq: [{ k: 'chair', static: true, x: 52, y: 106, dir: 1, back: true }], f: [
    stand(102, { an: { a: [92, 88] }, af: { a: [92, 88] } }),
    { h: [86, 100], t: -62, ln: [104, AY], lf: [101, AY], an: { a: [8, 4] }, af: { a: [8, 4] } }
  ]});
  D('kh_bridge', { hl: ['th'], hold: [0.3, 0.8], f: [
    { h: [100, 128], t: 180, hd: -4, ln: [130, AY], lf: [126, AY], kb: [-1, -1], an: { a: [4, 4] }, af: { a: [4, 4] } },
    { h: [94, 108], t: 150, hd: -24, ln: [130, AY], lf: [126, AY], kb: [-1, -1], an: { a: [14, 4] }, af: { a: [14, 4] } }
  ]});
  D('kh_calf', { hl: ['sh'], eq: [{ k: 'chair', static: true, x: 126, y: 100, dir: 1, back: true }], move: 0.8, hold: [0.3, 0.6], f: [
    { h: [100, 72], t: -90, ln: { a: [90, 90] }, lf: { a: [90, 90] }, pn: 0, pf: 0, anc: ['toN', 113, 136], an: [128, 98], af: [128, 98] },
    { h: [100, 72], t: -90, ln: { a: [90, 90] }, lf: { a: [90, 90] }, pn: 50, pf: 50, anc: ['toN', 113, 136], an: [128, 98], af: [128, 98] }
  ]});
  D('kh_balance', { hl: ['th'], hold: 1.0, move: 1.6, f: [
    stand(100, { lf: { a: [-4, 88] }, pf: 10, an: { a: [40, 60] }, af: { a: [120, 100] } }),
    stand(101, { lf: { a: [-2, 90] }, pf: 10, an: { a: [36, 56] }, af: { a: [124, 104] } })
  ]});
  D('kh_side_leg', { v: 'front', hl: ['th'], eq: [{ k: 'chair', static: true, x: 40, y: 100, dir: 1, back: true }], f: [
    fstand(100, { ln: [108, AY], lf: [92, AY], an: { a: [80, 88] }, af: [72, 96] }),
    fstand(100, { ln: [136, 128], lf: [94, AY], an: { a: [80, 88] }, af: [72, 96] })
  ]});
  D('kh_wall_sit', { hl: ['th'], eq: [{ k: 'wall', static: true, x: 54 }], hold: 1.0, move: 1.4, f: [
    { h: [74, 104], t: -90, hd: 0, ln: [104, AY], lf: [101, AY], an: { a: [90, 0] }, af: { a: [90, 0] } },
    { h: [74, 105], t: -90, hd: 0, ln: [104, AY], lf: [101, AY], an: { a: [90, 2] }, af: { a: [90, 2] } }
  ]});

  /* ── Name → figure for programs that aren't built from EX_LIB ── */
  Figures.byName = {
    'Ab Wheel Rollouts': 'ab_wheel', 'Weighted Crunches': 'weighted_crunch', 'Reverse Crunches': 'reverse_crunch',
    'Hollow Body Hold': 'hollow_hold', 'Russian Twists': 'russian_twist', 'Cable/Band Woodchoppers': 'woodchopper',
    'Pallof Press': 'pallof', 'Bird-Dog': 'bird_dog', 'Side Planks': 'side_plank', 'Superman Holds': 'superman',
    'Dumbbell Suitcase Carry': 'suitcase_carry', 'Back Extensions': 'back_ext', 'Hanging Leg Raises': 'hanging_leg_raise',
    'Mountain Climbers': 'mountain_climber', 'Flutter Kicks': 'flutter_kick', 'V-Ups': 'v_ups', 'Bicycle Crunches': 'bicycle',
    'Medicine Ball Slams': 'ball_slam', 'Alternating Toe Touches': 'toe_touch', 'Plank to Push-Up': 'plank_pushup',
    'RKC Plank': 'rkc_plank', 'L-Sit Holds': 'l_sit', 'Dead Bugs': 'dead_bug', 'Bear Crawl Holds': 'bear_hold',
    'Gentle Full-Body Warm-up': 'kh_warmup', 'Modified Jumping Jacks': 'kh_jacks', 'Standing Torso Twists': 'kh_twist',
    'Knee-Supported Side Plank': 'kh_side_plank', 'Bird-Dog Stability Hold (Optional)': 'bird_dog', 'Glute Rainbows (Optional)': 'kh_rainbow',
    'Wall Push-Ups': 'kh_wall_pushup', 'Standing Arm Circles': 'kh_arm_circles', 'Prone Cobra Hold': 'kh_cobra',
    'Wall Angels': 'wall_angel', 'Doorway Chest Stretch (Optional)': 'kh_doorway', 'Seated Hand Pressures (Optional)': 'kh_hand_press',
    'Chair Squats': 'kh_chair_squat', 'Glute Bridges': 'kh_bridge', 'Standing Calf Raises': 'kh_calf',
    'Single-Leg Balance Hold': 'kh_balance', 'Standing Side Leg Raises (Optional)': 'kh_side_leg', 'Wall Sit Hold (Optional)': 'kh_wall_sit'
  };
  Figures.keyFor = ex => (ex.lib && Figures.has(ex.lib) ? ex.lib : Figures.byName[ex.name]) || null;
})();
