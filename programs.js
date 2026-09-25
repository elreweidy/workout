/* ═══════════════════════════════════════════
   OLYMPUS — EXERCISE LIBRARY & PPL PROGRAMS
   Equipment: Barbell, EZ Bar, Dumbbells, Adjustable Bench (flat/incline/decline)
   Each library entry is written once; programs reference it by key.
   inc = smallest sensible load jump (kg) used for progression hints.
═══════════════════════════════════════════ */
const EX_LIB = {
  /* ── WARM-UPS ─────────────────────────── */
  press_prep: {
    name: "Press & Shoulder Prep", equip: "Bench, Dumbbells", img: "img/press_prep.jpg",
    tEn: "Shoulder & Chest Joint Prep", tAr: "تهيئة مفاصل الكتف والصدر",
    en: ["Arm circles and towel shoulder pass-throughs — 30s each.", "10 scapular push-ups to switch on the serratus.", "2 ramp-up sets of the first press: 50% × 10, then 75% × 5."],
    ar: ["دوائر بالذراعين وتمرير منشفة فوق الرأس للخلف — ٣٠ ثانية لكل منهما.", "١٠ تكرارات ضغط لوحي الكتف لتنشيط العضلة المنشارية.", "مجموعتان تمهيديتان لأول تمرين ضغط: ٥٠٪ × ١٠ ثم ٧٥٪ × ٥."],
    cue: "Warm, not tired — ramp-up sets should feel fast and crisp."
  },
  pull_prep: {
    name: "Pull & Hinge Prep", equip: "Dumbbells", img: "img/pull_prep.jpg",
    tEn: "Upper Back, Lats & Hips", tAr: "أعلى الظهر والمجنص والحوض",
    en: ["Cat-cow and open-book thoracic rotations — 8 each side.", "15 light reverse flyes with the lightest dumbbells.", "2 ramp-up sets of the first row: 50% × 10, then 75% × 5."],
    ar: ["تمرين القطة والجمل ودوران أعلى الظهر — ٨ تكرارات لكل جانب.", "١٥ تكراراً من الرفرفة العكسية بأخف دمبلز.", "مجموعتان تمهيديتان لأول تمرين سحب: ٥٠٪ × ١٠ ثم ٧٥٪ × ٥."],
    cue: "Groove the hip hinge and feel the upper back switch on."
  },
  leg_prep: {
    name: "Leg Prep", equip: "Bodyweight", img: "img/leg_prep.jpg",
    tEn: "Hips, Knees & Ankles", tAr: "الحوض والركبتان والكاحلان",
    en: ["2 minutes of easy marching or skipping in place.", "Bodyweight squats × 15, walking lunges × 10, leg swings × 10/side.", "2 ramp-up sets of the first squat: empty bar × 10, then 60% × 5."],
    ar: ["دقيقتان من المشي أو القفز الخفيف في المكان.", "سكوات بوزن الجسم × ١٥، طعنات مشي × ١٠، أرجحة الساق × ١٠ لكل جانب.", "مجموعتان تمهيديتان لأول سكوات: البار فارغاً × ١٠ ثم ٦٠٪ × ٥."],
    cue: "Open the hips and ankles before the bar goes on your back."
  },

  /* ── PUSH ─────────────────────────────── */
  bb_ohp: {
    name: "Standing Barbell Overhead Press", equip: "Barbell", img: "img/barbell_ohp.jpg", inc: 2.5,
    tEn: "Front & Side Delts | Triceps, Upper Chest", tAr: "الكتف الأمامي والجانبي | الترايسبس وأعلى الصدر",
    en: ["Grip just outside the shoulders, forearms vertical, glutes and abs braced.", "Press in a straight line — move your head back, then through once the bar passes.", "Finish with biceps by the ears; lower under control to the collarbones."],
    ar: ["امسك البار أعرض قليلاً من الكتفين والساعدان عموديان، مع شد المؤخرة والبطن.", "ادفع في خط مستقيم — أبعد رأسك للخلف ثم أدخله تحت البار بعد مروره.", "أنهِ الحركة والذراعان بجانب الأذنين، ثم انزل بتحكم حتى عظمة الترقوة."],
    cue: "Squeeze the bar hard and keep the ribs down — no leaning back to finish reps."
  },
  db_incline_press: {
    name: "Incline Dumbbell Press", equip: "Dumbbells, Bench", img: "img/incline_db_press.jpg", inc: 2,
    tEn: "Upper Chest | Front Delts, Triceps", tAr: "أعلى الصدر | الكتف الأمامي والترايسبس",
    en: ["Set the bench to ~30° — steeper turns it into a shoulder press.", "Lower to upper-chest level with elbows about 45° from the torso.", "Press up and slightly in, stopping just before the dumbbells touch."],
    ar: ["اضبط الدكة على ٣٠ درجة تقريباً — الزاوية الأعلى تحوّلها لتمرين أكتاف.", "انزل لمستوى أعلى الصدر والمرفقان بزاوية ٤٥ درجة تقريباً عن الجسم.", "ادفع للأعلى وللداخل قليلاً وتوقف قبل أن يتلامس الدمبلز."],
    cue: "Take 2-3 seconds on the way down and feel the stretch across the upper chest."
  },
  db_bench: {
    name: "Flat Dumbbell Bench Press", equip: "Dumbbells, Bench", img: "img/db_bench.jpg", inc: 2,
    tEn: "Mid Chest | Front Delts, Triceps", tAr: "منتصف الصدر | الكتف الأمامي والترايسبس",
    en: ["Kick the dumbbells up off your knees; shoulder blades pinched back and down.", "Lower until the dumbbells are level with the chest, elbows about 45°.", "Press up and slightly in while driving your feet into the floor."],
    ar: ["ارفع الدمبلز بمساعدة الركبتين مع ضم لوحي الكتف للخلف وللأسفل.", "انزل حتى يصبح الدمبلز بمستوى الصدر والمرفقان بزاوية ٤٥ درجة تقريباً.", "ادفع للأعلى وللداخل قليلاً مع ضغط القدمين في الأرض."],
    cue: "2-3 second descent, brief pause at the chest, then drive."
  },
  db_seated_press: {
    name: "Seated Dumbbell Shoulder Press", equip: "Dumbbells, Bench", img: "img/shoulder_press.jpg", inc: 2,
    tEn: "Front Delts | Side Delts, Triceps", tAr: "الكتف الأمامي | الكتف الجانبي والترايسبس",
    en: ["Bench almost upright, dumbbells at ear height, palms forward.", "Press until the arms are nearly locked, dumbbells stacked over the shoulders.", "Lower with control to ear level or slightly below."],
    ar: ["اضبط الدكة شبه عمودية، والدمبلز بمستوى الأذن والكفّان للأمام.", "ادفع حتى تقترب الذراعان من الفرد الكامل والدمبلز فوق الكتفين.", "انزل بتحكم حتى مستوى الأذن أو أسفل قليلاً."],
    cue: "Keep the lower back on the pad — arching to finish a rep means the set is over."
  },
  db_lateral: {
    name: "Dumbbell Lateral Raise", equip: "Dumbbells", img: "img/lateral_raise.jpg", inc: 1,
    tEn: "Side Delts", tAr: "الكتف الجانبي",
    en: ["Lean slightly forward, soft elbows, dumbbells just in front of the thighs.", "Raise out and slightly forward to shoulder height, leading with the elbows.", "Lower over 2-3 seconds — no swinging, no shrugging."],
    ar: ["مِل للأمام قليلاً مع ثني بسيط للمرفقين والدمبلز أمام الفخذين.", "ارفع للخارج وللأمام قليلاً حتى مستوى الكتف، والمرفقان يقودان الحركة.", "انزل خلال ٢-٣ ثوانٍ — بدون أرجحة وبدون رفع الكتفين نحو الأذنين."],
    cue: "Think 'push the dumbbells out to the walls', not 'lift them up'."
  },
  db_seated_lateral: {
    name: "Seated Lateral Raise", equip: "Dumbbells, Bench", img: "img/lateral_raise.jpg", inc: 1,
    tEn: "Side Delts (Strict)", tAr: "الكتف الجانبي (أداء صارم)",
    en: ["Sit on the end of the bench, torso tall, arms hanging by your sides.", "Raise out to shoulder height with pinkies level with thumbs.", "Lower slowly — sitting removes all leg drive and swing."],
    ar: ["اجلس على طرف الدكة والجذع مستقيم والذراعان متدليتان بجانبك.", "ارفع للخارج حتى مستوى الكتف والخنصر بمستوى الإبهام.", "انزل ببطء — الجلوس يلغي أي دفع من الساقين أو أرجحة."],
    cue: "Last set: when you fail, rest 5 breaths and squeeze out 3-5 more (myo-reps)."
  },
  db_fly: {
    name: "Flat Dumbbell Flyes", equip: "Dumbbells, Bench", img: "img/flyes.jpg", inc: 1,
    tEn: "Chest (Stretch Focus)", tAr: "الصدر (تركيز على التمطيط)",
    en: ["Lie flat, dumbbells over the chest, palms facing, elbows softly bent.", "Open the arms in a wide arc until you feel a deep chest stretch.", "Hug back up along the same arc, stopping before the dumbbells touch."],
    ar: ["استلقِ والدمبلز فوق الصدر والكفّان متقابلان مع ثني بسيط للمرفقين.", "افتح الذراعين في قوس واسع حتى تشعر بتمطيط عميق في الصدر.", "اضمم للأعلى على نفس القوس وتوقف قبل تلامس الدمبلز."],
    cue: "The elbow angle is locked — it's a hug, not a press."
  },
  db_incline_fly: {
    name: "Low-Incline Dumbbell Flyes", equip: "Dumbbells, Bench", img: "img/flyes.jpg", inc: 1,
    tEn: "Upper Chest (Stretch Focus)", tAr: "أعلى الصدر (تركيز على التمطيط)",
    en: ["Bench at 15-30°, dumbbells over the upper chest, palms facing.", "Open wide with soft elbows until the upper chest is fully stretched.", "Bring them back up and in, squeezing the chest together."],
    ar: ["الدكة بزاوية ١٥-٣٠ درجة والدمبلز فوق أعلى الصدر والكفّان متقابلان.", "افتح الذراعين باتساع مع ثني بسيط للمرفقين حتى يتمطط أعلى الصدر بالكامل.", "أعدهما للأعلى وللداخل مع عصر الصدر."],
    cue: "Imagine hugging a giant tree — chest leads, arms follow."
  },
  deficit_pushup: {
    name: "Deficit Push-Ups (on Dumbbells)", equip: "Dumbbells", img: "img/pushup.jpg",
    tEn: "Chest | Front Delts, Triceps", tAr: "الصدر | الكتف الأمامي والترايسبس",
    en: ["Grip two hex dumbbells on the floor, shoulder-width apart.", "Lower the chest below hand level for a deep stretch.", "Push up as one rigid plank — stop 1-2 reps before form breaks."],
    ar: ["امسك دمبلز سداسيين على الأرض بعرض الكتفين.", "انزل بصدرك أسفل مستوى اليدين لتمطيط عميق.", "ادفع للأعلى والجسم مشدود كقطعة واحدة — توقف قبل انهيار الأداء بتكرار أو اثنين."],
    cue: "Squeeze glutes and abs so the hips never sag."
  },
  ez_cgbp: {
    name: "EZ Bar Close-Grip Bench Press", equip: "EZ Bar, Bench", img: "img/ez_floor_press.jpg", inc: 2.5,
    tEn: "Triceps | Inner Chest", tAr: "الترايسبس | الصدر الداخلي",
    en: ["Lie on the bench and grip the inner angles of the EZ bar.", "Lower to the lower chest with elbows tucked close to your sides.", "Press up and lock out hard, squeezing the triceps."],
    ar: ["استلقِ على الدكة وامسك الانحناءات الداخلية لبار EZ.", "انزل بالبار لأسفل الصدر مع إبقاء المرفقين قريبين من الجسم.", "ادفع للأعلى وافرد الذراعين بالكامل مع عصر الترايسبس."],
    cue: "Elbows stay tucked — if they flare, the chest takes over."
  },
  ez_skull: {
    name: "EZ Bar Skull Crushers", equip: "EZ Bar, Bench", img: "img/skull_crusher.jpg", inc: 2.5,
    tEn: "Triceps (All Heads)", tAr: "الترايسبس (جميع الرؤوس)",
    en: ["Lie on the bench, bar over your forehead, arms angled slightly back.", "Bend only at the elbows, lowering the bar to just behind your head.", "Extend back to the start without the elbows drifting outward."],
    ar: ["استلقِ على الدكة والبار فوق الجبهة والذراعان مائلتان قليلاً للخلف.", "اثنِ المرفقين فقط وانزل بالبار إلى خلف الرأس مباشرة.", "افرد للعودة للبداية دون أن تتسع المرفقان للخارج."],
    cue: "Angling the arms back keeps tension on the triceps even at the top."
  },
  db_oh_tri: {
    name: "Overhead Dumbbell Triceps Extension", equip: "Dumbbell, Bench", img: "img/overhead_tricep.jpg", inc: 2,
    tEn: "Triceps Long Head (Stretch)", tAr: "الرأس الطويل للترايسبس (تمطيط)",
    en: ["Sit with back support, one dumbbell held overhead in both hands.", "Lower it behind your head until you feel a deep triceps stretch.", "Extend back up without letting the elbows flare wide."],
    ar: ["اجلس بظهر مسنود وامسك دمبل واحد فوق رأسك بكلتا اليدين.", "انزل به خلف رأسك حتى تشعر بتمطيط عميق في الترايسبس.", "افرد للأعلى دون أن تتسع المرفقان للخارج."],
    cue: "The stretched position is where this one builds the arm — own the bottom."
  },
  scap_pushup: {
    name: "Scapular Push-Ups", equip: "Bodyweight", img: "img/scapular_pushup.jpg",
    tEn: "Serratus Anterior & Shoulder Health", tAr: "العضلة المنشارية وصحة الكتف",
    en: ["Hold a high plank with the arms locked straight.", "Let the chest sink by pinching the shoulder blades together.", "Push the floor away to spread the shoulder blades apart."],
    ar: ["اتخذ وضعية البلانك العالي والذراعان مفرودتان تماماً.", "اسمح لصدرك بالنزول عبر ضم لوحي الكتف معاً.", "ادفع الأرض بعيداً ليتباعد لوحا الكتف."],
    cue: "Only the shoulder blades move — elbows stay locked."
  },
  wall_angel: {
    name: "Wall Angels", equip: "Bodyweight", img: "img/wall_angel.jpg",
    tEn: "Posture: Mid Traps & Shoulder Mobility", tAr: "القوام: منتصف الترابيس ومرونة الكتف",
    en: ["Stand with head, upper back and hips against a wall.", "Slide the arms up the wall, wrists and elbows staying in contact.", "Slide down, pulling the elbows toward your back pockets."],
    ar: ["قف والرأس وأعلى الظهر والحوض ملاصقة للجدار.", "مرّر الذراعين للأعلى على الجدار مع بقاء الرسغين والمرفقين ملامسين له.", "انزل بهما وكأنك تسحب المرفقين نحو جيوبك الخلفية."],
    cue: "Ribs down — don't arch away from the wall to cheat the range."
  },

  /* ── PULL ─────────────────────────────── */
  bb_deadlift: {
    name: "Conventional Barbell Deadlift", equip: "Barbell", img: "img/deadlift.jpg", inc: 5,
    tEn: "Posterior Chain | Glutes, Hamstrings, Back", tAr: "السلسلة الخلفية | المؤخرة والعضلة الخلفية والظهر",
    en: ["Bar over mid-foot, hip-width stance, grip just outside the legs.", "Pull the slack out of the bar: chest up, lats tight, back flat.", "Push the floor away, lock out with the glutes, lower with control."],
    ar: ["البار فوق منتصف القدم، والقدمان بعرض الحوض، والمسكة خارج الساقين مباشرة.", "شد البار قبل الرفع: الصدر للأعلى، المجنص مشدود، والظهر مستقيم.", "ادفع الأرض بعيداً وأكمل الوقوف بعصر المؤخرة، ثم انزل بتحكم."],
    cue: "Reset every rep and leave 1-2 reps in the tank — never grind with a rounded back."
  },
  pendlay_row: {
    name: "Pendlay Row", equip: "Barbell", img: "img/barbell_row.jpg", inc: 2.5,
    tEn: "Upper Back & Lats | Rear Delts", tAr: "أعلى الظهر والمجنص | الكتف الخلفي",
    en: ["Torso close to parallel with the floor, bar resting on the floor.", "Explosively row to the lower chest without raising the torso.", "Return the bar to the floor and reset each rep."],
    ar: ["الجذع شبه موازٍ للأرض والبار مستقر على الأرض.", "اسحب البار بقوة نحو أسفل الصدر دون رفع الجذع.", "أعد البار للأرض وابدأ من جديد في كل تكرار."],
    cue: "Drive the elbows back hard — the back does the work, not the hips."
  },
  bb_row: {
    name: "Bent-Over Barbell Row", equip: "Barbell", img: "img/barbell_row.jpg", inc: 2.5,
    tEn: "Lats & Mid Back | Rear Delts, Biceps", tAr: "المجنص ومنتصف الظهر | الكتف الخلفي والبايسبس",
    en: ["Hinge to about 45°, overhand grip just outside shoulder width.", "Row to the belly button, driving the elbows back and in.", "Lower to full arm extension with control."],
    ar: ["انحنِ من الحوض لزاوية ٤٥ درجة تقريباً بمسكة علوية أعرض قليلاً من الكتفين.", "اسحب البار نحو السرة مع دفع المرفقين للخلف وللداخل.", "انزل حتى تُفرد الذراعان بالكامل بتحكم."],
    cue: "Row toward the hips for more lat, toward the chest for more upper back."
  },
  cs_db_row: {
    name: "Chest-Supported Incline Row", equip: "Dumbbells, Bench", img: "img/dumbbell_row.jpg", inc: 2,
    tEn: "Mid Back & Lats | Rear Delts", tAr: "منتصف الظهر والمجنص | الكتف الخلفي",
    en: ["Lie chest-down on a 30-45° incline bench, dumbbells hanging.", "Row the dumbbells toward the hips, squeezing the shoulder blades.", "Lower until the shoulder blades fully spread."],
    ar: ["استلقِ على بطنك على دكة مائلة ٣٠-٤٥ درجة والدمبلز متدلية.", "اسحب الدمبلز نحو الحوض مع ضم لوحي الكتف.", "انزل حتى يتباعد لوحا الكتف بالكامل."],
    cue: "Chest stays glued to the pad — zero momentum, pure back."
  },
  db_row: {
    name: "Single-Arm Dumbbell Row", equip: "Dumbbell, Bench", img: "img/dumbbell_row.jpg", inc: 2,
    tEn: "Lats | Mid Back", tAr: "المجنص | منتصف الظهر",
    en: ["One hand and knee on the bench, back flat.", "Row the dumbbell in an arc toward your hip.", "Let it hang to a full lat stretch at the bottom."],
    ar: ["يد وركبة على الدكة والظهر مستقيم.", "اسحب الدمبل في قوس نحو الحوض.", "اتركه يتدلى حتى تمطيط كامل للمجنص في الأسفل."],
    cue: "Your hand is a hook — pull from the elbow."
  },
  db_pullover: {
    name: "Dumbbell Pullover", equip: "Dumbbell, Bench", img: null, inc: 2,
    tEn: "Lats | Chest, Serratus", tAr: "المجنص | الصدر والعضلة المنشارية",
    en: ["Lie on the bench holding one dumbbell over the chest with both hands.", "With slightly bent elbows, lower it behind your head to a deep lat stretch.", "Pull it back over the chest by driving the elbows toward the hips."],
    ar: ["استلقِ على الدكة وامسك دمبل واحد فوق صدرك بكلتا اليدين.", "مع ثني بسيط للمرفقين، انزل به خلف رأسك حتى تمطيط عميق للمجنص.", "أعده فوق الصدر بدفع المرفقين نحو الحوض."],
    cue: "No pull-up bar? This is your vertical-pull substitute — feel the lats, not the triceps."
  },
  bb_shrug: {
    name: "Barbell Shrugs", equip: "Barbell", img: "img/shrug.jpg", inc: 5,
    tEn: "Upper Traps", tAr: "الترابيس العلوية",
    en: ["Stand tall, bar at arm's length, grip just outside the thighs.", "Shrug straight up toward the ears.", "Hold 1-2 seconds at the top, then lower slowly."],
    ar: ["قف مستقيماً والبار بطول الذراعين والمسكة خارج الفخذين مباشرة.", "ارفع الكتفين مباشرة نحو الأذنين.", "اثبت ثانية أو اثنتين في الأعلى ثم انزل ببطء."],
    cue: "Straight up and down — no rolling the shoulders."
  },
  db_shrug: {
    name: "Dumbbell Shrugs", equip: "Dumbbells", img: "img/shrug.jpg", inc: 2,
    tEn: "Upper Traps", tAr: "الترابيس العلوية",
    en: ["Heavy dumbbells at your sides, palms facing in.", "Shrug straight up and slightly back.", "Pause at the top, lower to a full stretch."],
    ar: ["دمبلز ثقيلة بجانبيك والكفّان للداخل.", "ارفع الكتفين للأعلى مباشرة وللخلف قليلاً.", "اثبت في الأعلى ثم انزل لتمطيط كامل."],
    cue: "The dumbbells sit in line with the traps — a cleaner pull than the barbell."
  },
  cs_rear_fly: {
    name: "Chest-Supported Rear Delt Fly", equip: "Dumbbells, Bench", img: "img/reverse_fly.jpg", inc: 1,
    tEn: "Rear Delts | Upper Back", tAr: "الكتف الخلفي | أعلى الظهر",
    en: ["Lie chest-down on an incline bench, light dumbbells hanging.", "Sweep the arms out wide with the pinkies leading.", "Pause at the top, lower over 2 seconds."],
    ar: ["استلقِ على بطنك على دكة مائلة والدمبلز الخفيفة متدلية.", "افتح الذراعين للجانبين باتساع والخنصر يقود الحركة.", "اثبت في الأعلى ثم انزل خلال ثانيتين."],
    cue: "Think 'arms out', not 'shoulder blades back' — keep the traps quiet."
  },
  db_rear_raise: {
    name: "Bent-Over Rear Delt Raise", equip: "Dumbbells", img: "img/reverse_fly.jpg", inc: 1,
    tEn: "Rear Delts & Posture", tAr: "الكتف الخلفي وتقويم القوام",
    en: ["Hinge forward with a flat back, slight knee bend.", "Raise the dumbbells out to the sides.", "Squeeze the rear delts, lower with control."],
    ar: ["انحنِ للأمام بظهر مستقيم مع ثني بسيط للركبتين.", "ارفع الدمبلز للجانبين.", "اعصر الكتف الخلفي ثم انزل بتحكم."],
    cue: "Fights forward-rounded shoulders — light weight, perfect reps."
  },
  ez_curl: {
    name: "EZ Bar Curls", equip: "EZ Bar", img: "img/curl.jpg", inc: 2.5,
    tEn: "Biceps", tAr: "البايسبس",
    en: ["Grip the outer angles, elbows pinned at your sides.", "Curl up without letting the elbows drift forward.", "Lower over 2-3 seconds to a full stretch."],
    ar: ["امسك الانحناءات الخارجية والمرفقان ملتصقان بجانبيك.", "ارفع البار دون أن تتقدم المرفقان للأمام.", "انزل خلال ٢-٣ ثوانٍ حتى التمطيط الكامل."],
    cue: "Freeze the elbows — every inch of movement comes from the biceps."
  },
  db_incline_curl: {
    name: "Incline Dumbbell Curls", equip: "Dumbbells, Bench", img: "img/curl.jpg", inc: 1,
    tEn: "Biceps Long Head (Stretch)", tAr: "الرأس الطويل للبايسبس (تمطيط)",
    en: ["Sit back on a 45-60° incline, arms hanging straight down.", "Curl up with palms up, elbows staying behind the torso.", "Lower all the way to a full stretch."],
    ar: ["اجلس مستنداً على دكة مائلة ٤٥-٦٠ درجة والذراعان متدليتان للأسفل.", "ارفع والكفّان للأعلى مع بقاء المرفقين خلف الجذع.", "انزل بالكامل حتى التمطيط التام."],
    cue: "The stretch at the bottom is the point — don't cut the range short."
  },
  db_hammer: {
    name: "Dumbbell Hammer Curls", equip: "Dumbbells", img: "img/curl.jpg", inc: 1,
    tEn: "Brachialis & Forearms", tAr: "العضلة العضدية والساعد",
    en: ["Neutral grip (palms facing in), elbows pinned to your sides.", "Curl to shoulder height without swinging.", "Lower slowly to a full stretch."],
    ar: ["مسكة محايدة (الكفّان للداخل) والمرفقان ملتصقان بجانبيك.", "ارفع حتى مستوى الكتف بدون أرجحة.", "انزل ببطء حتى التمطيط الكامل."],
    cue: "Builds arm thickness — squeeze the handles hard."
  },
  db_conc_curl: {
    name: "Concentration Curls", equip: "Dumbbell, Bench", img: "img/curl.jpg", inc: 1,
    tEn: "Biceps Peak", tAr: "قمة البايسبس",
    en: ["Sit on the bench, elbow braced against the inner thigh.", "Curl up with strict isolation and turn the pinky up at the top.", "Lower over 3 seconds."],
    ar: ["اجلس على الدكة والمرفق مستند على الفخذ الداخلي.", "ارفع بعزل تام وأدِر الخنصر للأعلى في القمة.", "انزل خلال ٣ ثوانٍ."],
    cue: "Last set: hold the top squeeze for 3 seconds on the final rep."
  },
  ez_reverse_curl: {
    name: "EZ Bar Reverse Curls", equip: "EZ Bar", img: "img/curl.jpg", inc: 2.5,
    tEn: "Forearms & Brachialis", tAr: "الساعد والعضلة العضدية",
    en: ["Overhand grip (palms down) on the EZ bar.", "Curl up with the elbows pinned and the wrists straight.", "Lower slowly — feel the top of the forearms burn."],
    ar: ["مسكة علوية (الكفّان للأسفل) على بار EZ.", "ارفع البار والمرفقان ثابتان والرسغان مستقيمان.", "انزل ببطء — ستشعر بحرقان أعلى الساعد."],
    cue: "Grip the bar as hard as you can on every rep."
  },

  /* ── LEGS ─────────────────────────────── */
  bb_back_squat: {
    name: "Barbell Back Squat", equip: "Barbell", img: "img/squat.jpg", inc: 2.5,
    tEn: "Quads & Glutes | Adductors, Core", tAr: "الأفخاذ الأمامية والمؤخرة | الفخذ الداخلي والبطن",
    en: ["Bar on the upper traps, feet shoulder-width, toes slightly out.", "Brace, then sit down between your hips to at least parallel.", "Drive up through the whole foot, knees tracking over the toes."],
    ar: ["البار على أعلى الترابيس، والقدمان بعرض الكتفين، والأصابع للخارج قليلاً.", "شد البطن ثم انزل بين الحوض حتى مستوى الموازاة على الأقل.", "ادفع للأعلى من كامل القدم والركبتان في اتجاه أصابع القدم."],
    cue: "Big breath and brace before every single rep."
  },
  bb_front_squat: {
    name: "Barbell Front Squat", equip: "Barbell", img: "img/squat.jpg", inc: 2.5,
    tEn: "Quads | Glutes, Upper Back", tAr: "الأفخاذ الأمامية | المؤخرة وأعلى الظهر",
    en: ["Bar on the front delts, elbows high, fingertips under the bar.", "Squat straight down with an upright torso, below parallel.", "Drive up leading with the elbows."],
    ar: ["البار على مقدمة الكتف والمرفقان للأعلى وأطراف الأصابع تحت البار.", "انزل مباشرة والجذع مستقيم حتى أسفل مستوى الموازاة.", "ادفع للأعلى والمرفقان يقودان الحركة."],
    cue: "If the elbows drop, the bar rolls — keep them pointing forward the whole rep."
  },
  bss: {
    name: "Bulgarian Split Squat", equip: "Dumbbells, Bench", img: "img/bulgarian_split_squat.jpg", inc: 2,
    tEn: "Quads & Glutes (Single-Leg)", tAr: "الأفخاذ والمؤخرة (ساق واحدة)",
    en: ["Rear foot laces-down on the bench, front foot a long stride ahead.", "Drop the back knee straight down until the front thigh is parallel.", "Drive through the front foot — the back leg is only for balance."],
    ar: ["ضع مشط القدم الخلفية على الدكة والقدم الأمامية على بُعد خطوة طويلة.", "انزل بالركبة الخلفية مباشرة حتى يوازي الفخذ الأمامي الأرض.", "ادفع من القدم الأمامية — الساق الخلفية للتوازن فقط."],
    cue: "Slight forward lean = more glute; upright torso = more quad."
  },
  heel_goblet: {
    name: "Heel-Elevated Goblet Squat", equip: "Dumbbell, Plates", img: "img/squat.jpg", inc: 2,
    tEn: "Quads (Deep Knee Bend)", tAr: "الأفخاذ الأمامية (ثني عميق للركبة)",
    en: ["Heels on small plates, one dumbbell held vertically at the chest.", "Squat straight down as deep as possible, knees travelling past the toes.", "Stand up without locking out to keep tension on the quads."],
    ar: ["الكعبان على أقراص صغيرة ودمبل واحد عمودي عند الصدر.", "انزل مباشرة لأعمق نقطة ممكنة مع تقدم الركبتين أمام الأصابع.", "اصعد دون فرد الركبتين بالكامل للحفاظ على الشد في الأفخاذ."],
    cue: "Slow 3-second descent — this one is about quad burn, not load."
  },
  db_step_up: {
    name: "Dumbbell Step-Ups", equip: "Dumbbells, Bench", img: "img/step_up.jpg", inc: 2,
    tEn: "Quads & Glutes (Single-Leg)", tAr: "الأفخاذ والمؤخرة (ساق واحدة)",
    en: ["Place one whole foot on the bench, dumbbells at your sides.", "Drive up through the elevated heel until standing tall.", "Step down slowly — don't push off the floor foot."],
    ar: ["ضع القدم كاملة على الدكة والدمبلز بجانبيك.", "ادفع للأعلى من كعب القدم المرفوعة حتى الوقوف الكامل.", "انزل ببطء — لا تدفع بالقدم التي على الأرض."],
    cue: "All the work comes from the top leg — the bottom foot is just along for the ride."
  },
  db_walking_lunge: {
    name: "Dumbbell Walking Lunges", equip: "Dumbbells", img: "img/lunge.jpg", inc: 2,
    tEn: "Glutes & Quads", tAr: "المؤخرة والأفخاذ",
    en: ["Take a long, controlled step forward.", "Drop the back knee straight toward the floor.", "Push through the front heel into the next step."],
    ar: ["خذ خطوة طويلة ومتحكمة للأمام.", "انزل بالركبة الخلفية مباشرة نحو الأرض.", "ادفع من كعب القدم الأمامية للانتقال للخطوة التالية."],
    cue: "Torso tall and weight on the front heel."
  },
  db_reverse_lunge: {
    name: "Dumbbell Reverse Lunges", equip: "Dumbbells", img: "img/lunge.jpg", inc: 2,
    tEn: "Glutes & Quads | Stability", tAr: "المؤخرة والأفخاذ | الثبات",
    en: ["Step backward into a deep lunge.", "Front shin stays nearly vertical, back knee just above the floor.", "Push through the front heel to return to standing."],
    ar: ["خذ خطوة للخلف إلى طعنة عميقة.", "الساق الأمامية شبه عمودية والركبة الخلفية فوق الأرض مباشرة.", "ادفع من كعب القدم الأمامية للعودة للوقوف."],
    cue: "Easier on the knees than forward lunges — control every rep."
  },
  bb_rdl: {
    name: "Barbell Romanian Deadlift", equip: "Barbell", img: "img/deadlift.jpg", inc: 2.5,
    tEn: "Hamstrings & Glutes", tAr: "العضلة الخلفية والمؤخرة",
    en: ["Soft knees, push the hips straight back, bar sliding down the thighs.", "Lower until a deep hamstring stretch — usually just below the knees.", "Drive the hips forward and squeeze the glutes to stand."],
    ar: ["ثنِ الركبتين قليلاً وادفع الحوض للخلف والبار ينزلق على الفخذين.", "انزل حتى تمطيط عميق للعضلة الخلفية — غالباً أسفل الركبة بقليل.", "ادفع الحوض للأمام واعصر المؤخرة للوقوف."],
    cue: "Hips back like closing a car door with your butt — the back stays flat."
  },
  db_rdl: {
    name: "Dumbbell Romanian Deadlift", equip: "Dumbbells", img: "img/deadlift.jpg", inc: 2,
    tEn: "Hamstrings & Glutes", tAr: "العضلة الخلفية والمؤخرة",
    en: ["Dumbbells in front of the thighs, knees softly bent.", "Push the hips back, keeping the dumbbells close to the legs.", "Stop at a deep hamstring stretch, then squeeze the glutes to stand."],
    ar: ["الدمبلز أمام الفخذين والركبتان مثنيتان قليلاً.", "ادفع الحوض للخلف مع إبقاء الدمبلز قريبة من الساقين.", "توقف عند تمطيط عميق للعضلة الخلفية ثم اعصر المؤخرة للوقوف."],
    cue: "Slow 3-second lowering — the stretch builds the hamstrings."
  },
  bb_hip_thrust: {
    name: "Barbell Hip Thrust", equip: "Barbell, Bench", img: "img/hip_thrust.jpg", inc: 5,
    tEn: "Glutes", tAr: "عضلات المؤخرة",
    en: ["Upper back on the bench edge, bar over the hip crease (use a towel pad).", "Drive through the heels until the torso is flat, chin tucked.", "Hold the squeeze 1-2 seconds, lower under control."],
    ar: ["أعلى الظهر على حافة الدكة والبار فوق ثنية الحوض (استخدم منشفة كوسادة).", "ادفع من الكعبين حتى يستوي الجذع مع إبقاء الذقن للداخل.", "اثبت مع العصر ثانية أو اثنتين ثم انزل بتحكم."],
    cue: "Ribs down at the top — lift with the hips, not by arching the lower back."
  },
  db_hip_thrust: {
    name: "Dumbbell Hip Thrust", equip: "Dumbbell, Bench", img: "img/hip_thrust.jpg", inc: 2,
    tEn: "Glutes", tAr: "عضلات المؤخرة",
    en: ["Upper back on the bench, a heavy dumbbell resting on the hips.", "Drive through the heels until the torso is flat.", "Squeeze the glutes for 2 seconds at the top."],
    ar: ["أعلى الظهر على الدكة ودمبل ثقيل على الحوض.", "ادفع من الكعبين حتى يستوي الجذع.", "اعصر المؤخرة لمدة ثانيتين في الأعلى."],
    cue: "Chin tucked, eyes forward — it keeps the pelvis tucked too."
  },
  db_leg_curl: {
    name: "Dumbbell Lying Leg Curl", equip: "Dumbbell, Bench", img: null, inc: 1,
    tEn: "Hamstrings (Knee Flexion)", tAr: "العضلة الخلفية (ثني الركبة)",
    en: ["Lie face-down on the bench, knees at the edge, a dumbbell squeezed between the feet.", "Curl the heels toward the glutes.", "Lower slowly to almost straight legs."],
    ar: ["استلقِ على بطنك على الدكة والركبتان عند الحافة ودمبل مثبت بين القدمين.", "اسحب الكعبين نحو المؤخرة.", "انزل ببطء حتى تقترب الساقان من الفرد الكامل."],
    cue: "Start light — the foot grip is the limit. Hamstrings need this knee-bend work, not just hinges."
  },
  sl_calf: {
    name: "Single-Leg Dumbbell Calf Raise", equip: "Dumbbell, Plate", img: "img/calf_raise.jpg", inc: 2,
    tEn: "Calves (Gastrocnemius)", tAr: "السمانة",
    en: ["Stand on a plate or step edge on one foot, dumbbell in the same-side hand.", "Drop the heel to a deep stretch and pause 1 second.", "Rise as high as possible and squeeze for 1 second."],
    ar: ["قف على قدم واحدة فوق قرص أو حافة درجة والدمبل في اليد بنفس الجانب.", "انزل بالكعب لتمطيط عميق واثبت ثانية.", "ارتفع لأعلى نقطة ممكنة واعصر لمدة ثانية."],
    cue: "Pause at the bottom — kill the bounce and the calves finally grow."
  },
  seated_calf: {
    name: "Seated Dumbbell Calf Raise", equip: "Dumbbells, Bench", img: "img/calf_raise.jpg", inc: 2,
    tEn: "Calves (Soleus)", tAr: "السمانة (العضلة النعلية)",
    en: ["Sit on the bench, balls of the feet on a plate, dumbbells on the knees.", "Lower the heels to a full stretch.", "Rise as high as possible, pause, and lower slowly."],
    ar: ["اجلس على الدكة وأمشاط القدمين على قرص والدمبلز على الركبتين.", "انزل بالكعبين حتى تمطيط كامل.", "ارتفع لأعلى نقطة ممكنة واثبت ثم انزل ببطء."],
    cue: "Bent knees shift the work to the soleus — high reps love it."
  },

  /* ── CORE & POSTURE ───────────────────── */
  decline_crunch: {
    name: "Weighted Decline Crunch", equip: "Decline Bench, Dumbbell", img: "img/decline_crunch.jpg", inc: 2,
    tEn: "Upper & Mid Abs", tAr: "عضلات البطن العلوية والوسطى",
    en: ["Hook the feet on the decline bench, dumbbell held on the chest.", "Curl the ribs toward the pelvis — round the spine, don't just hinge.", "Lower slowly until the lower back touches the pad."],
    ar: ["ثبّت قدميك في الدكة المنحدرة وامسك دمبل على صدرك.", "اطوِ القفص الصدري نحو الحوض — قوّس العمود الفقري ولا تنثنِ من الحوض فقط.", "انزل ببطء حتى يلمس أسفل الظهر المسند."],
    cue: "Exhale hard at the top to fully shorten the abs."
  },
  decline_twist: {
    name: "Decline Bench Russian Twist", equip: "Decline Bench", img: "img/decline_twist.jpg",
    tEn: "Obliques", tAr: "الخواصر",
    en: ["Sit on the decline bench, feet hooked, lean back to about 45°.", "Rotate the torso side to side, hands together in front.", "Hold a dumbbell once 15 per side feels easy."],
    ar: ["اجلس على الدكة المنحدرة والقدمان مثبتتان، ومِل للخلف ٤٥ درجة تقريباً.", "أدِر الجذع يميناً ويساراً واليدان مضمومتان أمامك.", "أمسك دمبل عندما تصبح ١٥ تكراراً لكل جانب سهلة."],
    cue: "Turn the ribs, not just the arms."
  },
  russian_twist: {
    name: "Weighted Russian Twist", equip: "Dumbbell", img: "img/russian_twist.jpg", inc: 1,
    tEn: "Obliques | Rotation", tAr: "الخواصر | الدوران",
    en: ["Sit with knees bent, lean back slightly, feet up or down.", "Hold a dumbbell and rotate the torso side to side.", "Keep the core braced at a controlled tempo."],
    ar: ["اجلس والركبتان مثنيتان ومِل للخلف قليلاً مع رفع القدمين أو وضعهما على الأرض.", "امسك دمبل وأدِر الجذع يميناً ويساراً.", "حافظ على شد البطن بإيقاع متحكم."],
    cue: "Rotate from the ribs — the dumbbell follows the chest."
  },
  suitcase_carry: {
    name: "Dumbbell Suitcase Carry", equip: "Dumbbell", img: "img/side_bend.jpg", inc: 2,
    tEn: "Obliques & QL (Anti-Lean)", tAr: "الخواصر وعضلات جانب الظهر (مقاومة الميل)",
    en: ["Hold one heavy dumbbell at your side like a suitcase.", "Walk slowly with tall posture and level shoulders.", "Switch hands halfway — resist leaning toward the weight."],
    ar: ["احمل دمبل ثقيل بيد واحدة بجانبك كأنه حقيبة سفر.", "امشِ ببطء بقامة مستقيمة والكتفان في مستوى واحد.", "بدّل اليد في منتصف الوقت — قاوم الميل ناحية الوزن."],
    cue: "Imagine balancing a glass of water on your head."
  },
  dead_bug: {
    name: "Dead Bug", equip: "Bodyweight", img: "img/abs.jpg",
    tEn: "Deep Core (Anti-Extension)", tAr: "عضلات البطن العميقة (مقاومة تقوس الظهر)",
    en: ["Lie on your back, arms up, hips and knees at 90°.", "Slowly extend the opposite arm and leg toward the floor.", "Exhale fully, return, and switch sides — lower back glued down."],
    ar: ["استلقِ على ظهرك والذراعان للأعلى والحوض والركبتان بزاوية ٩٠ درجة.", "مد الذراع والساق المتعاكستين ببطء نحو الأرض.", "أخرج النفس كاملاً ثم عد وبدّل الجانب — أسفل الظهر ملتصق بالأرض."],
    cue: "If the lower back lifts, shorten the range."
  },
  reverse_crunch: {
    name: "Bench Reverse Crunch", equip: "Bench", img: "img/abs.jpg",
    tEn: "Lower Abs", tAr: "عضلات البطن السفلية",
    en: ["Lie on the bench gripping it behind your head, knees bent 90°.", "Curl the hips up off the bench, bringing the knees toward the chest.", "Lower slowly until the hips just touch down."],
    ar: ["استلقِ على الدكة وامسكها خلف رأسك والركبتان مثنيتان ٩٠ درجة.", "ارفع الحوض عن الدكة مع تقريب الركبتين من الصدر.", "انزل ببطء حتى يلمس الحوض الدكة بالكاد."],
    cue: "Curl the pelvis — don't just swing the legs."
  },
  lying_leg_raise: {
    name: "Lying Leg Raises", equip: "Bodyweight", img: "img/abs.jpg",
    tEn: "Lower Abs | Hip Flexors", tAr: "البطن السفلية | عضلات ثني الحوض",
    en: ["Lie flat, hands under the glutes, legs straight.", "Raise the legs to 90° without the lower back arching.", "Lower slowly, stopping just above the floor."],
    ar: ["استلقِ مسطحاً واليدان تحت المؤخرة والساقان مفرودتان.", "ارفع الساقين حتى ٩٠ درجة دون تقوس أسفل الظهر.", "انزل ببطء وتوقف فوق الأرض مباشرة."],
    cue: "Press the lower back into the floor the entire set."
  },
  v_ups: {
    name: "V-Ups", equip: "Bodyweight", img: "img/v_ups.jpg",
    tEn: "Full Abs", tAr: "عضلات البطن كاملة",
    en: ["Lie flat, arms extended overhead.", "Lift legs and torso together, reaching hands to toes.", "Lower with control without fully relaxing."],
    ar: ["استلقِ مسطحاً والذراعان ممدودتان فوق الرأس.", "ارفع الساقين والجذع معاً ومد يديك نحو أصابع القدمين.", "انزل بتحكم دون الارتخاء الكامل."],
    cue: "Move like a closing book."
  },
  side_plank: {
    name: "Side Plank", equip: "Bodyweight", img: null,
    tEn: "Obliques & QL", tAr: "الخواصر وعضلات جانب الظهر",
    en: ["Forearm under the shoulder, feet stacked, body in one straight line.", "Lift the hips and hold without sagging.", "Switch sides after each hold."],
    ar: ["الساعد تحت الكتف والقدمان فوق بعضهما والجسم في خط مستقيم.", "ارفع الحوض واثبت دون هبوط.", "بدّل الجانب بعد كل ثبات."],
    cue: "Squeeze the glutes and push the floor away."
  },
  superman: {
    name: "Superman Holds", equip: "Bodyweight", img: "img/superman.jpg",
    tEn: "Lower Back Erectors | Glutes", tAr: "عضلات أسفل الظهر | المؤخرة",
    en: ["Lie face-down, arms extended forward.", "Lift arms, chest and legs off the floor together.", "Squeeze the glutes and lower back and hold."],
    ar: ["استلقِ على بطنك والذراعان ممدودتان للأمام.", "ارفع الذراعين والصدر والساقين عن الأرض معاً.", "اعصر المؤخرة وأسفل الظهر واثبت."],
    cue: "Look at the floor to keep the neck neutral."
  },
  neck_flex: {
    name: "Neck Flexion", equip: "Bodyweight", img: "img/neck_flexion.jpg",
    tEn: "Deep Neck Flexors", tAr: "عضلات الرقبة الأمامية العميقة",
    en: ["Lie on your back on the bench, head just off the edge.", "Tuck the chin and lift the head toward the chest.", "Lower slowly — builds a stronger, more resilient neck."],
    ar: ["استلقِ على ظهرك على الدكة والرأس خارج الحافة مباشرة.", "اسحب الذقن للداخل وارفع الرأس نحو الصدر.", "انزل ببطء — يبني رقبة أقوى وأكثر تحملاً."],
    cue: "Very slow, very controlled — never jerk the neck."
  },
  prone_neck: {
    name: "Prone Neck Extensions", equip: "Bodyweight", img: "img/prone_neck.jpg",
    tEn: "Neck Extensors", tAr: "عضلات مؤخرة الرقبة",
    en: ["Lie face-down on the bench, head just off the edge.", "Lift the head until level with the spine.", "Hold briefly and lower with control."],
    ar: ["استلقِ على بطنك على الدكة والرأس خارج الحافة مباشرة.", "ارفع الرأس حتى يصبح في مستوى العمود الفقري.", "اثبت لحظة ثم انزل بتحكم."],
    cue: "The antidote to phone neck — gentle and controlled."
  }
};

/* Expand compact program rows into full exercise objects.
   row = [libKey, type, sets, reps, restSec] */
const buildProgram = (prefix, days) => {
  const images = {};
  const routine = days.map(d => ({
    day: d.day, id: d.id, focus: d.focus,
    exercises: (d.rows || []).map(([key, type, sets, reps, rest], i) => {
      const L = EX_LIB[key];
      const id = prefix + d.id + '_' + (i + 1);
      if (L.img) images[id] = L.img;
      return {
        id, lib: key, type, name: L.name, sets, reps, rest, equip: L.equip, inc: L.inc || 0,
        targetEn: L.tEn, targetAr: L.tAr, descEn: L.en, descAr: L.ar, focus: L.cue
      };
    })
  }));
  return { routine, images };
};

/* ═══════════════════════════════════════════
   BLOCK A — OLYMPUS PPL (strength-hypertrophy, barbell-led)
   Heavy compound first, then stretch-biased accessories.
   Deadlift on Sunday, RDL on Thursday — the lower back is never hammered on back-to-back days.
═══════════════════════════════════════════ */
const OLYMPUS_PPL_PROFILE = (() => {
  const { routine, images } = buildProgram('ex', [
    { day: "Saturday", id: 6, focus: "PUSH B — SHOULDERS", rows: [
      ['bb_ohp',           'main',    '4', '5-8',      150],
      ['db_incline_press', 'main',    '3', '8-12',     120],
      ['db_lateral',       'main',    '4', '12-20',     60],
      ['ez_cgbp',          'main',    '3', '8-10',     120],
      ['db_oh_tri',        'bonus',   '3', '10-15',     75],
      ['deficit_pushup',   'bonus',   '2', 'AMRAP',     90],
      ['suitcase_carry',   'abs',     '3', '40s/side',  60],
      ['scap_pushup',      'posture', '2', '12-15',     45]
    ]},
    { day: "Sunday", id: 0, focus: "PULL B — THICKNESS", rows: [
      ['bb_deadlift',      'main',    '3', '4-6',      180],
      ['pendlay_row',      'main',    '3', '6-8',      150],
      ['cs_db_row',        'main',    '3', '10-12',     90],
      ['bb_shrug',         'bonus',   '3', '10-12',     75],
      ['cs_rear_fly',      'bonus',   '3', '15-20',     60],
      ['db_hammer',        'bonus',   '3', '10-12',     60],
      ['ez_reverse_curl',  'bonus',   '2', '12-15',     60],
      ['decline_crunch',   'abs',     '3', '10-15',     60]
    ]},
    { day: "Monday", id: 1, focus: "LEGS A — QUADS", rows: [
      ['bb_back_squat',    'main',    '4', '5-8',      180],
      ['bss',              'main',    '3', '8-10/leg',  90],
      ['heel_goblet',      'main',    '3', '12-15',     90],
      ['db_leg_curl',      'bonus',   '3', '10-15',     75],
      ['sl_calf',          'bonus',   '4', '10-15/leg', 45],
      ['reverse_crunch',   'abs',     '3', '12-15',     45],
      ['neck_flex',        'posture', '2', '15-20',     45]
    ]},
    { day: "Tuesday", id: 2, focus: "PUSH A — CHEST", rows: [
      ['db_bench',         'main',    '4', '6-10',     150],
      ['db_incline_press', 'main',    '3', '8-12',     120],
      ['db_seated_press',  'main',    '3', '8-12',     120],
      ['db_fly',           'bonus',   '3', '12-15',     75],
      ['db_seated_lateral','bonus',   '3', '15-20',     60],
      ['ez_skull',         'bonus',   '3', '8-12',      90],
      ['dead_bug',         'abs',     '3', '10/side',   45],
      ['wall_angel',       'posture', '2', '12-15',     45]
    ]},
    { day: "Wednesday", id: 3, focus: "PULL A — WIDTH", rows: [
      ['bb_row',           'main',    '4', '6-10',     150],
      ['db_row',           'main',    '3', '10-12/arm', 90],
      ['db_pullover',      'main',    '3', '10-15',     90],
      ['db_rear_raise',    'bonus',   '3', '15-20',     60],
      ['ez_curl',          'bonus',   '3', '8-12',      75],
      ['db_incline_curl',  'bonus',   '3', '10-12',     60],
      ['v_ups',            'abs',     '3', '10-15',     45],
      ['superman',         'posture', '3', '30s',       45]
    ]},
    { day: "Thursday", id: 4, focus: "LEGS B — POSTERIOR", rows: [
      ['bb_rdl',           'main',    '4', '6-10',     150],
      ['bb_front_squat',   'main',    '3', '6-8',      150],
      ['bb_hip_thrust',    'main',    '3', '8-12',     120],
      ['db_reverse_lunge', 'bonus',   '3', '10/leg',    90],
      ['db_leg_curl',      'bonus',   '3', '12-15',     60],
      ['seated_calf',      'bonus',   '4', '15-20',     45],
      ['russian_twist',    'abs',     '3', '12/side',   45],
      ['prone_neck',       'posture', '2', '15-20',     45]
    ]},
    { day: "Friday", id: 5, focus: "REST" }
  ]);
  return {
    id: 'ppl', version: 3, name: 'Olympus PPL', icon: '⚡',
    desc: 'Block A · Strength-Hypertrophy PPL (barbell-led)',
    routine, images
  };
})();

/* ═══════════════════════════════════════════
   BLOCK B — HOME GYM PPL (hypertrophy, dumbbell-led, warm-ups built in)
   Same equipment, different angles — rotate with Block A every 6-8 weeks.
═══════════════════════════════════════════ */
const HOME_GYM_PROFILE = (() => {
  const { routine, images } = buildProgram('home', [
    { day: "Saturday", id: 6, focus: "Chest, Shoulders, Triceps (Push 1)", rows: [
      ['press_prep',       'warmup',  '1', 'Warmup',     0],
      ['db_bench',         'main',    '4', '6-10',     150],
      ['db_seated_press',  'main',    '3', '8-12',     120],
      ['db_incline_fly',   'main',    '3', '12-15',     75],
      ['db_lateral',       'main',    '4', '12-20',     60],
      ['ez_skull',         'bonus',   '3', '8-12',      90],
      ['db_oh_tri',        'bonus',   '2', '12-15',     60],
      ['decline_crunch',   'abs',     '3', '10-15',     60]
    ]},
    { day: "Sunday", id: 0, focus: "Back, Biceps, Rear Delts (Pull 1)", rows: [
      ['pull_prep',        'warmup',  '1', 'Warmup',     0],
      ['cs_db_row',        'main',    '4', '8-12',     120],
      ['db_pullover',      'main',    '3', '12-15',     90],
      ['cs_rear_fly',      'main',    '3', '15-20',     60],
      ['db_shrug',         'bonus',   '3', '12-15',     60],
      ['db_incline_curl',  'bonus',   '3', '10-12',     60],
      ['db_hammer',        'bonus',   '3', '10-12',     60],
      ['v_ups',            'abs',     '3', '10-15',     45]
    ]},
    { day: "Monday", id: 1, focus: "Quads, Calves, Abs (Legs 1)", rows: [
      ['leg_prep',         'warmup',  '1', 'Warmup',     0],
      ['bb_front_squat',   'main',    '4', '6-8',      150],
      ['bss',              'main',    '3', '8-12/leg',  90],
      ['db_rdl',           'main',    '3', '10-12',     90],
      ['db_step_up',       'bonus',   '3', '10/leg',    75],
      ['sl_calf',          'bonus',   '4', '10-15/leg', 45],
      ['lying_leg_raise',  'abs',     '3', '12-15',     45]
    ]},
    { day: "Tuesday", id: 2, focus: "Shoulders, Chest, Triceps (Push 2)", rows: [
      ['press_prep',       'warmup',  '1', 'Warmup',     0],
      ['bb_ohp',           'main',    '4', '6-8',      150],
      ['db_incline_press', 'main',    '3', '8-12',     120],
      ['db_fly',           'main',    '3', '12-15',     75],
      ['db_seated_lateral','bonus',   '3', '15-20',     60],
      ['ez_cgbp',          'bonus',   '3', '8-12',      90],
      ['deficit_pushup',   'bonus',   '2', 'AMRAP',     90],
      ['decline_twist',    'abs',     '3', '12/side',   45],
      ['wall_angel',       'posture', '2', '12-15',     45]
    ]},
    { day: "Wednesday", id: 3, focus: "Back, Biceps, Rear Delts (Pull 2)", rows: [
      ['pull_prep',        'warmup',  '1', 'Warmup',     0],
      ['pendlay_row',      'main',    '4', '6-8',      150],
      ['db_row',           'main',    '3', '10-12/arm', 90],
      ['db_rear_raise',    'main',    '3', '15-20',     60],
      ['ez_curl',          'bonus',   '3', '8-12',      75],
      ['db_conc_curl',     'bonus',   '2', '10-12/arm', 60],
      ['superman',         'posture', '3', '30s',       45]
    ]},
    { day: "Thursday", id: 4, focus: "Hamstrings, Glutes, Calves (Legs 2)", rows: [
      ['leg_prep',         'warmup',  '1', 'Warmup',     0],
      ['bb_back_squat',    'main',    '4', '6-8',      180],
      ['bb_rdl',           'main',    '3', '8-10',     150],
      ['db_hip_thrust',    'main',    '3', '10-12',     90],
      ['db_walking_lunge', 'bonus',   '3', '10/leg',    90],
      ['db_leg_curl',      'bonus',   '3', '12-15',     60],
      ['seated_calf',      'bonus',   '4', '15-20',     45],
      ['prone_neck',       'posture', '2', '15-20',     45]
    ]},
    { day: "Friday", id: 5, focus: "REST" }
  ]);
  return {
    id: 'home', version: 3, name: 'Home Gym PPL', icon: '🏠',
    desc: 'Block B · Hypertrophy PPL (dumbbell-led, warm-ups built in)',
    routine, images
  };
})();
