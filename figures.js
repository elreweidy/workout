/* ═══════════════════════════════════════════
   OLYMPUS — ANIMATED EXERCISE FIGURES
   A tiny pose engine: each exercise is a list of keyframe poses for a
   jointed figure (side or front view). Limbs are either given as angles or
   solved with two-bone IK toward a target, so hands and feet stay planted
   while the body moves between keyframes.

   Angles are in degrees, screen space: 0 = right (the way the figure faces
   in side view), 90 = down, -90 = up, 180 = left.
   Frame fields:
     h   [x,y] hip (pelvis centre)       t   torso angle (hip → shoulder)
     hd  head tilt relative to torso      ts  torso length scale (foreshortening)
     an/af  near/far arm:  [x,y] IK wrist target | ['S',dx,dy] target relative to shoulder
                           {a:[upper, fore]} absolute | {r:[upper, fore]} relative to torso
     ln/lf  near/far leg:  [x,y] IK ankle target | {a:[thigh, shin]} absolute
     eb/kb  [near, far] bend sign for elbows / knees (IK)
     pn/pf  absolute foot angles          anc ['toN'|'anN'|'knN'..., x, y] pin a leg joint
     sy  shoulder shrug (px, front view)  ls  {th:[n,f], sh:[n,f]} leg length scales
═══════════════════════════════════════════ */
const Figures = (() => {
  const L = { torso: 40, neck: 6, head: 8.5, ua: 24, fa: 22, th: 32, sh: 30, ft: 11 };
  const GROUND = 138;
  const rad = d => d * Math.PI / 180, deg = r => r * 180 / Math.PI;
  const P = (o, len, ang) => [o[0] + len * Math.cos(rad(ang)), o[1] + len * Math.sin(rad(ang))];
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
  const angTo = (a, b) => deg(Math.atan2(b[1] - a[1], b[0] - a[0]));
  const fmt = n => Math.round(n * 10) / 10;

  // Two-bone IK. bend = +1 / -1 picks which side the middle joint folds to.
  const ik = (root, target, a, b, bend) => {
    const dx = target[0] - root[0], dy = target[1] - root[1];
    const dist = Math.hypot(dx, dy);
    const d = Math.min(Math.max(dist, Math.abs(a - b) + 0.01), a + b - 0.01);
    const base = Math.atan2(dy, dx);
    const c = Math.min(1, Math.max(-1, (a * a + d * d - b * b) / (2 * a * d)));
    const a1 = base + bend * Math.acos(c);
    const mid = [root[0] + a * Math.cos(a1), root[1] + a * Math.sin(a1)];
    const a2 = Math.atan2(target[1] - mid[1], target[0] - mid[0]);
    return { mid, end: [mid[0] + b * Math.cos(a2), mid[1] + b * Math.sin(a2)], a1: deg(a1), a2: deg(a2) };
  };

  // Deep linear interpolation of two frames (numbers lerp, strings/flags hold).
  const lerp = (a, b, k) => {
    if (typeof a === 'number' && typeof b === 'number') return a + (b - a) * k;
    if (Array.isArray(a) && Array.isArray(b)) return a.map((v, i) => lerp(v, b[i] === undefined ? v : b[i], k));
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      const o = {}; for (const key in a) o[key] = key in b ? lerp(a[key], b[key], k) : a[key];
      for (const key in b) if (!(key in o)) o[key] = b[key];
      return o;
    }
    return k < 0.5 ? a : b;
  };
  const ease = k => k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;

  /* ── Solve a frame into joint positions ── */
  const solve = (spec, fr) => {
    const front = spec.v === 'front';
    const t = fr.t == null ? -90 : fr.t;
    const H = fr.h.slice();
    const S = P(H, L.torso * (fr.ts || 1), t);
    const J = { H, S, t, front };
    const perp = [-Math.sin(rad(t)), Math.cos(rad(t))];       // rotated +90° from torso dir
    const sy = fr.sy || 0;
    // Front view: limbs hang from shoulder / hip points spread across the body.
    // Front view: "near" is the figure's left side, drawn on the viewer's right (+x when upright).
    J.Sn = front ? add(add(S, [perp[0] * 15, perp[1] * 15]), P([0, 0], sy, t)) : S;
    J.Sf = front ? add(add(S, [perp[0] * -15, perp[1] * -15]), P([0, 0], sy, t)) : S;
    J.Hn = front ? add(H, [perp[0] * 8, perp[1] * 8]) : H;
    J.Hf = front ? add(H, [perp[0] * -8, perp[1] * -8]) : H;
    const headOff = fr.ho || 0;   // front view: head drawn lower (bent-over figures)
    J.N = P(S, L.neck * 0.8, t + (fr.hd || 0));
    J.head = P(S, L.neck + L.head - headOff, t + (fr.hd || 0));

    const ls = fr.ls || {};
    const legs = side => {
      const n = side === 'n', spec_ = n ? fr.ln : (fr.lf || fr.ln);
      const root = n ? J.Hn : J.Hf;
      const thL = L.th * ((ls.th || [1, 1])[n ? 0 : 1]), shL = L.sh * ((ls.sh || [1, 1])[n ? 0 : 1]);
      let knee, ankle, sha, isIK = false;
      if (Array.isArray(spec_)) {
        const bend = (fr.kb || (front ? [-1, 1] : [-1, -1]))[n ? 0 : 1];
        const r = ik(root, spec_, thL, shL, bend);
        knee = r.mid; ankle = r.end; sha = r.a2; isIK = true;
      } else {
        const a = spec_.a;
        knee = P(root, thL, a[0]); ankle = P(knee, shL, a[1]); sha = a[1];
      }
      const pf = n ? fr.pn : fr.pf;
      let fa = pf != null ? pf : (front ? (n ? 10 : 170) : (isIK && ankle[1] > GROUND - 8 ? 0 : sha - 90));
      const toe = P(ankle, front ? 6 : L.ft, fa);
      return { knee, ankle, toe };
    };
    const ln = legs('n'), lf = legs('f');
    Object.assign(J, { knN: ln.knee, anN: ln.ankle, toN: ln.toe, knF: lf.knee, anF: lf.ankle, toF: lf.toe });

    // Pin a leg joint (e.g. toes planted during a push-up) by translating the body.
    if (fr.anc) {
      const [name, x, y] = fr.anc, cur = J[name];
      const dx = x - cur[0], dy = y - cur[1];
      for (const k in J) if (Array.isArray(J[k]) && J[k].length === 2 && typeof J[k][0] === 'number') J[k] = [J[k][0] + dx, J[k][1] + dy];
    }

    const la = fr.la || {};
    const arms = side => {
      const n = side === 'n', spec_ = n ? fr.an : (fr.af || fr.an);
      const root = n ? J.Sn : J.Sf;
      const uaL = L.ua * ((la.ua || [1, 1])[n ? 0 : 1]), faL = L.fa * ((la.fa || [1, 1])[n ? 0 : 1]);
      if (!spec_) return { elb: P(root, uaL, 90), wr: P(P(root, uaL, 90), faL, 90) };
      if (Array.isArray(spec_)) {
        let tgt = spec_;
        if (typeof spec_[0] === 'string') {
          const base = spec_[0] === 'H' ? J.H : spec_[0] === 'Sx' ? root : J.S;
          tgt = [base[0] + spec_[1], base[1] + spec_[2]];
        }
        const bend = (fr.eb || (front ? [-1, 1] : [1, 1]))[n ? 0 : 1];
        const r = ik(root, tgt, uaL, faL, bend);
        return { elb: r.mid, wr: r.end };
      }
      const off = spec_.r ? t + 90 : 0, a = spec_.r || spec_.a;
      const elb = P(root, uaL, a[0] + off);
      return { elb, wr: P(elb, faL, a[1] + off) };
    };
    const an = arms('n'), af = arms('f');
    Object.assign(J, { elN: an.elb, wrN: an.wr, elF: af.elb, wrF: af.wr });
    return J;
  };

  /* ── Drawing ── */
  const W = { torso: 17, ua: 8.5, fa: 7.5, th: 11.5, sh: 9, ft: 5.5, neck: 6.5 };
  const line = (a, b, w, cls) => '<line x1="' + fmt(a[0]) + '" y1="' + fmt(a[1]) + '" x2="' + fmt(b[0]) + '" y2="' + fmt(b[1]) + '" stroke-width="' + w + '" class="' + cls + '"/>';
  const circ = (c, r, cls) => '<circle cx="' + fmt(c[0]) + '" cy="' + fmt(c[1]) + '" r="' + r + '" class="' + cls + '"/>';
  const poly = (pts, cls) => '<polygon points="' + pts.map(p => fmt(p[0]) + ',' + fmt(p[1])).join(' ') + '" class="' + cls + '"/>';
  const path = (d, cls) => '<path d="' + d + '" class="' + cls + '"/>';

  const hlc = (spec, seg, base) => (spec.hl || []).includes(seg) ? base + ' hl' : base;

  const dumbbell = (c, ang, cls) => {
    const a = P(c, 7, ang), b = P(c, -7, ang);
    return line(a, b, 3, 'eq-bar ' + cls) + line(P(c, 9, ang), P(c, 5, ang), 7.5, 'eq-wt ' + cls) + line(P(c, -9, ang), P(c, -5, ang), 7.5, 'eq-wt ' + cls);
  };
  const plate = (c, r) => circ(c, r, 'eq-plate') + circ(c, r * 0.42, 'eq-hub') + circ(c, 1.8, 'eq-bar-end');

  // Equipment that moves with the body (drawn every frame).
  const eqDyn = (spec, J, layer) => {
    let s = '';
    (spec.eq || []).forEach(e => {
      if (e.static || (e.layer || 'front') !== layer) return;
      const at = e.at ? J[e.at] : J.wrN;
      const pos = e.off ? add(at, e.off) : at;
      if (e.k === 'bb') s += plate(pos, e.r || 13);
      if (e.k === 'ez') s += plate(pos, e.r || 10);
      if (e.k === 'barF') { // front view barbell across both hands
        const a = J.wrN, b = J.wrF, dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
        const A = [a[0] - ux * 26, a[1] - uy * 26], B = [b[0] + ux * 26, b[1] + uy * 26];
        s += line(A, B, 3, 'eq-bar') + line([A[0] + ux * 4, A[1] + uy * 4], [A[0] + ux * 8, A[1] + uy * 8], 18, 'eq-wt') + line([B[0] - ux * 4, B[1] - uy * 4], [B[0] - ux * 8, B[1] - uy * 8], 18, 'eq-wt');
      }
      if (e.k === 'db') {
        const which = e.side || 'nf';
        const ang = e.ang;
        const dAng = (el, wr) => ang != null ? ang : angTo(el, wr) + 90;
        if (which.includes('f')) s += dumbbell(e.atF ? J[e.atF] : J.wrF, dAng(J.elF, J.wrF), 'far');
        if (which.includes('n')) s += dumbbell(pos, dAng(J.elN, J.wrN), '');
      }
      if (e.k === 'ball') s += circ(pos, e.r || 9, 'eq-ball');
      if (e.k === 'wheel') s += circ(pos, 9, 'eq-plate') + circ(pos, 3, 'eq-hub');
      if (e.k === 'band') s += line(e.from, pos, 2, 'eq-band');
    });
    return s;
  };

  // Static equipment (benches, walls…) is built once from the first frame.
  const eqStatic = (spec, J0) => {
    let s = '';
    (spec.eq || []).forEach(e => {
      if (!e.static) return;
      if (e.k === 'pad') {
        // Pad along the torso on its back (or front) side, with legs to the floor.
        const dir = [Math.cos(rad(J0.t)), Math.sin(rad(J0.t))];
        const side = e.side === 'front' ? [-dir[1], dir[0]] : [dir[1], -dir[0]];
        const off = 10.5;
        const a = add(add(J0.H, [side[0] * off, side[1] * off]), [-dir[0] * (e.e0 || 10), -dir[1] * (e.e0 || 10)]);
        const b = add(add(J0.S, [side[0] * off, side[1] * off]), [dir[0] * (e.e1 || 6), dir[1] * (e.e1 || 6)]);
        s += line(a, b, 8, 'eq-pad');
        if (e.seat) {
          const sa = [J0.H[0] + (e.seat > 0 ? -4 : 4), J0.H[1] + off], sb = [J0.H[0] + e.seat, J0.H[1] + off];
          s += line(sa, sb, 8, 'eq-pad');
          s += line([sb[0] - Math.sign(e.seat) * 4, sb[1] + 4], [sb[0] - Math.sign(e.seat) * 4, GROUND], 3.5, 'eq-frame');
        }
        const low = a[1] > b[1] ? a : b, high = a[1] > b[1] ? b : a;
        s += line([low[0], low[1] + 4], [low[0], GROUND], 3.5, 'eq-frame');
        if (!e.seat || e.legs2) s += line([high[0], high[1] + 4], [high[0], GROUND], 3.5, 'eq-frame');
        if (high[1] < low[1] - 12 && !e.seat) s += line([high[0], high[1] + 4], [high[0], GROUND], 3.5, 'eq-frame');
      }
      if (e.k === 'box') s += '<rect x="' + e.x + '" y="' + e.y + '" width="' + e.w + '" height="' + (e.h || GROUND - e.y) + '" rx="3" class="eq-box"/>';
      if (e.k === 'bench') s += '<rect x="' + e.x + '" y="' + e.y + '" width="' + e.w + '" height="7" rx="3.5" class="eq-padr"/>' +
        line([e.x + 6, e.y + 6], [e.x + 6, GROUND], 3.5, 'eq-frame') + line([e.x + e.w - 6, e.y + 6], [e.x + e.w - 6, GROUND], 3.5, 'eq-frame');
      if (e.k === 'wall') s += '<rect x="' + e.x + '" y="2" width="' + (e.w || 10) + '" height="' + (GROUND - 2) + '" class="eq-wall"/>';
      if (e.k === 'wallF') s += '<rect x="' + e.x + '" y="' + (e.y || 4) + '" width="' + e.w + '" height="' + (GROUND - (e.y || 4)) + '" rx="4" class="eq-wallf"/>';
      if (e.k === 'chair') {
        const x = e.x, y = e.y || 104, d = e.dir || 1, w = 30;
        s += line([x, y], [x + d * w, y], 6, 'eq-padr') + line([x + 3 * d, y], [x + 3 * d, GROUND], 3.5, 'eq-frame') + line([x + d * (w - 3), y], [x + d * (w - 3), GROUND], 3.5, 'eq-frame');
        if (e.back) s += line([x + d * (w - 3), y], [x + d * (w + 2), y - 34], 4.5, 'eq-frame');
      }
      if (e.k === 'pullbar') s += line([e.x - 40, e.y], [e.x + 40, e.y], 4, 'eq-bar') + line([e.x - 40, e.y], [e.x - 40, 0], 4, 'eq-frame') + line([e.x + 40, e.y], [e.x + 40, 0], 4, 'eq-frame');
      if (e.k === 'post') s += line([e.x, GROUND], [e.x, e.y || 20], 5, 'eq-frame') + circ([e.x, e.ay || 60], 3, 'eq-hub');
      if (e.k === 'door') s += '<rect x="' + e.x + '" y="6" width="9" height="' + (GROUND - 6) + '" rx="2" class="eq-wall"/>';
      if (e.k === 'mat') s += line([e.x, GROUND - 1.5], [e.x + e.w, GROUND - 1.5], 3, 'eq-mat');
      if (e.k === 'wedge') s += poly([[e.x, GROUND], [e.x + 14, GROUND], [e.x + 14, GROUND - 5]], 'eq-box');
      if (e.k === 'parallettes') s += line([e.x - 7, GROUND - 10], [e.x + 7, GROUND - 10], 4, 'eq-frame') + line([e.x - 5, GROUND - 10], [e.x - 8, GROUND], 3, 'eq-frame') + line([e.x + 5, GROUND - 10], [e.x + 8, GROUND], 3, 'eq-frame');
    });
    return s;
  };

  const headwear = (J, opts, spec) => {
    const r = L.head;
    if (!opts.hijab) return circ(J.head, r + 1.5, 'fig-ol-fill') + circ(J.head, r, 'fig-head');
    // Hijab: rounded head covering that drapes over the neck and shoulders.
    const h = J.head, dir = [Math.cos(rad(J.t + (spec.v === 'front' ? 0 : 0))), Math.sin(rad(J.t))];
    const perp = [-dir[1], dir[0]];
    const S = J.S, w = spec.v === 'front' ? 15 : 9.5;
    const p1 = [S[0] + perp[0] * w - dir[0] * 2, S[1] + perp[1] * w - dir[1] * 2];
    const p2 = [S[0] - perp[0] * w - dir[0] * 2, S[1] - perp[1] * w - dir[1] * 2];
    const hl = [h[0] + perp[0] * (r + 1.5), h[1] + perp[1] * (r + 1.5)], hr = [h[0] - perp[0] * (r + 1.5), h[1] - perp[1] * (r + 1.5)];
    return path('M' + fmt(hl[0]) + ' ' + fmt(hl[1]) + ' L' + fmt(p1[0]) + ' ' + fmt(p1[1]) + ' L' + fmt(p2[0]) + ' ' + fmt(p2[1]) + ' L' + fmt(hr[0]) + ' ' + fmt(hr[1]) + ' Z', 'fig-hijab') +
      circ(h, r + 3, 'fig-ol-fill') + circ(h, r + 1.6, 'fig-hijab') + (spec.v === 'front' ? circ([h[0], h[1] + 1], r - 3.2, 'fig-face') : circ(P(h, 3.2, J.t + 90 + (J.t < -180 || J.t > 0 ? 0 : 0)), r - 4.2, 'fig-face'));
  };

  const drawFigure = (spec, J, opts, cls) => {
    const front = spec.v === 'front';
    let s = '<g class="' + (cls || '') + '">';
    const limbL = (side) => {
      const k = side === 'n' ? 'N' : 'F', far = !front && side === 'f' ? ' far' : '';
      const hip = front ? (side === 'n' ? J.Hn : J.Hf) : J.H;
      return line(hip, J['kn' + k], W.th, hlc(spec, 'th', 'fig' + far)) + line(J['kn' + k], J['an' + k], W.sh, hlc(spec, 'sh', 'fig' + far)) + line(J['an' + k], J['to' + k], W.ft, 'fig' + far);
    };
    const limbA = (side) => {
      const k = side === 'n' ? 'N' : 'F', far = !front && side === 'f' ? ' far' : '';
      const sh = front ? (side === 'n' ? J.Sn : J.Sf) : J.S;
      // Dark outline keeps an arm readable where it crosses the torso.
      const ol = far ? '' : line(sh, J['el' + k], W.ua + 3, 'fig-ol') + line(J['el' + k], J['wr' + k], W.fa + 3, 'fig-ol');
      return ol + line(sh, J['el' + k], W.ua, hlc(spec, 'ua', 'fig' + far)) + line(J['el' + k], J['wr' + k], W.fa, hlc(spec, 'fa', 'fig' + far)) + circ(J['wr' + k], 3.6, 'fig-hand' + far);
    };
    if (front) {
      s += limbL('f') + limbL('n');
      s += poly([J.Sn, J.Sf, J.Hf, J.Hn], hlc(spec, 'torso', 'fig-torso'));
      s += line(J.S, J.N, W.neck, 'fig');
      s += limbA('f') + limbA('n');
      s += eqDyn(spec, J, 'front');
      s += headwear(J, opts, spec);
    } else {
      s += eqDyn(spec, J, 'back');
      s += limbA('f') + limbL('f');
      s += line(J.H, J.S, W.torso, hlc(spec, 'torso', 'fig'));
      s += line(J.S, J.N, W.neck, 'fig');
      s += headwear(J, opts, spec);
      s += line(J.H, J.knN, W.th + 3, 'fig-ol') + limbL('n');
      s += eqDyn(spec, J, 'mid');
      s += limbA('n');
      s += eqDyn(spec, J, 'front');
    }
    return s + '</g>';
  };

  /* ── Timeline ── */
  // Each keyframe is held briefly, then eased into the next one; the loop returns to the start.
  const timeline = spec => {
    const n = spec.f.length;
    const move = spec.move || 1.1, hold = spec.hold == null ? 0.35 : spec.hold;
    const seg = [];
    for (let i = 0; i < n; i++) {
      const m = Array.isArray(move) ? move[i % move.length] : move;
      const hd = Array.isArray(hold) ? hold[i % hold.length] : hold;
      seg.push({ from: i, to: (i + 1) % n, hold: hd, move: m });
    }
    return { seg, total: seg.reduce((t, s) => t + s.hold + s.move, 0) };
  };
  const frameAt = (spec, tl, sec) => {
    let t = sec % tl.total;
    for (const s of tl.seg) {
      if (t < s.hold) return spec.f[s.from];
      t -= s.hold;
      if (t < s.move) return lerp(spec.f[s.from], spec.f[s.to], ease(t / s.move));
      t -= s.move;
    }
    return spec.f[0];
  };

  const SPECS = {};
  const define = (key, spec) => { SPECS[key] = spec; };

  const render = (key, opts = {}) => {
    const spec = SPECS[key]; if (!spec) return '';
    const vb = spec.vb || [0, -12, 200, 162];
    const J0 = solve(spec, spec.f[0]);
    const ghost = spec.f.length > 1 ? drawFigure(spec, solve(spec, spec.f[spec.ghost == null ? 1 : spec.ghost]), opts, 'ghost') : '';
    return '<svg class="fig-svg" viewBox="' + vb.join(' ') + '" data-fig="' + key + '"' + (opts.hijab ? ' data-hijab="1"' : '') + ' role="img" aria-label="' + (opts.label || 'Exercise demonstration') + '">' +
      '<ellipse cx="' + fmt((J0.anN[0] + J0.anF[0] + J0.H[0]) / 3) + '" cy="' + (GROUND + 1) + '" rx="46" ry="3.5" class="fig-shadow"/>' +
      line([vb[0] - 10, GROUND + 1.5], [vb[0] + vb[2] + 10, GROUND + 1.5], 1.5, 'fig-floor') +
      '<g class="fig-static">' + eqStatic(spec, J0) + '</g>' +
      '<g class="fig-ghost">' + ghost + '</g>' +
      '<g class="fig-live">' + drawFigure(spec, J0, opts) + '</g></svg>';
  };

  /* ── Playback: only figures on screen animate ── */
  const live = new Map();
  let raf = 0;
  const reduce = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tick = now => {
    live.forEach((st, svg) => {
      if (!svg.isConnected) { live.delete(svg); return; }
      const fr = frameAt(st.spec, st.tl, (now - st.t0) / 1000);
      st.g.innerHTML = drawFigure(st.spec, solve(st.spec, fr), st.opts);
    });
    raf = live.size ? requestAnimationFrame(tick) : 0;
  };
  const io = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(ents => ents.forEach(e => {
    const svg = e.target, key = svg.dataset.fig, spec = SPECS[key];
    if (!spec) return;
    if (e.isIntersecting && !reduce() && spec.f.length > 1) {
      if (!live.has(svg)) live.set(svg, { spec, tl: timeline(spec), t0: performance.now(), g: svg.querySelector('.fig-live'), opts: { hijab: svg.dataset.hijab === '1' } });
      svg.classList.add('playing');
      if (!raf) raf = requestAnimationFrame(tick);
    } else { live.delete(svg); svg.classList.remove('playing'); }
  }), { threshold: 0.2 }) : null;

  const mount = root => { if (io) (root || document).querySelectorAll('svg.fig-svg').forEach(s => io.observe(s)); };

  return { define, render, mount, has: k => !!SPECS[k], keys: () => Object.keys(SPECS), solve, SPECS, GROUND };
})();
