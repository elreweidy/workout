const CORE_FORTRESS_PROFILE = {
  id: 'core',
  name: 'Core Fortress',
  icon: '🛡️',
  desc: 'Intense 6-Day Pure Core Split',
  routine: [
    {
      day: "Saturday",
      id: 6,
      focus: "FLEXION & ANTI-EXTENSION",
      exercises: [
        { id: "core6_1", type: "main", name: "Hollow Body Hold", sets: "4", reps: "45-60s", equip: "Bodyweight", targetEn: "Core (Transverse)", targetAr: "عضلات البطن العميقة", descEn: ["Lie on back, press lower back into floor.", "Extend arms and legs, hold."], descAr: ["استلق على ظهرك واضغط أسفله على الأرض.", "مد ذراعيك وساقيك وحافظ على الوضعية."], focus: "Never let lower back arch." },
        { id: "core6_2", type: "abs", name: "Weighted Crunches", sets: "4", reps: "15-20", equip: "Dumbbell/Plate", targetEn: "Upper Abs", targetAr: "عضلات البطن العلوية", descEn: ["Hold weight at chest.", "Crunch up, squeezing abs hard."], descAr: ["احمل الوزن عند صدرك.", "اطوِ بطنك للأعلى واعصر العضلات."], focus: "Keep neck neutral." },
        { id: "core6_3", type: "abs", name: "Reverse Crunches", sets: "3", reps: "15", equip: "Bodyweight", targetEn: "Lower Abs", targetAr: "عضلات البطن السفلية", descEn: ["Lie on back, bring knees toward chest.", "Lift pelvis slightly off floor."], descAr: ["استلق، اسحب ركبتيك نحو صدرك.", "ارفع حوضك قليلاً عن الأرض."], focus: "Control the descent." },
        { id: "core6_4", type: "main", name: "Ab Wheel Rollouts", sets: "3", reps: "10-15", equip: "Ab Wheel", targetEn: "Total Core", targetAr: "البطن بالكامل", descEn: ["Roll forward from knees.", "Pull back using abs, not arms."], descAr: ["دحرج العجلة للأمام من الركبتين.", "اسحب للخلف باستخدام بطنك وليس ذراعيك."], focus: "Keep spine slightly rounded." }
      ]
    },
    {
      day: "Sunday",
      id: 0,
      focus: "ROTATION & ANTI-ROTATION",
      exercises: [
        { id: "core0_1", type: "abs", name: "Russian Twists", sets: "4", reps: "20/side", equip: "Weight/Med Ball", targetEn: "Obliques", targetAr: "العضلات الجانبية", descEn: ["Sit back, elevate feet.", "Rotate torso side to side touching weight to floor."], descAr: ["اجلس بظهر مائل وارفع قدميك.", "أدر جذعك من جانب لآخر ملامساً الأرض بالوزن."], focus: "Rotate shoulders, not just arms." },
        { id: "core0_2", type: "main", name: "Cable/Band Woodchoppers", sets: "3", reps: "12-15/side", equip: "Band/Cable", targetEn: "Obliques", targetAr: "العضلات الجانبية", descEn: ["Pull band diagonally across body.", "Pivot back foot."], descAr: ["اسحب السير بشكل قطري عبر جسمك.", "قم بتدوير قدمك الخلفية."], focus: "Core initiates the movement." },
        { id: "core0_3", type: "posture", name: "Pallof Press", sets: "3", reps: "12/side", equip: "Band/Cable", targetEn: "Anti-Rotation", targetAr: "مقاومة الدوران", descEn: ["Press band straight out from chest.", "Resist the pull to the side."], descAr: ["ادفع السير للأمام مباشرة من صدرك.", "قاوم الشد الجانبي."], focus: "Keep torso perfectly still." },
        { id: "core0_4", type: "posture", name: "Bird-Dog", sets: "3", reps: "12/side", equip: "Bodyweight", targetEn: "Core Stability", targetAr: "استقرار البطن", descEn: ["On all fours, extend opposite arm and leg.", "Keep back completely flat."], descAr: ["على الأطراف الأربعة، مد ذراعاً وساقاً متعاكستين.", "حافظ على استقامة ظهرك تماماً."], focus: "No hip shifting." }
      ]
    },
    {
      day: "Monday",
      id: 1,
      focus: "LATERAL & POSTERIOR",
      exercises: [
        { id: "core1_1", type: "main", name: "Side Planks", sets: "3", reps: "45-60s/side", equip: "Bodyweight", targetEn: "Obliques & QL", targetAr: "العظلاّت الجانبية", descEn: ["Hold body in straight line on one forearm.", "Keep hips elevated."], descAr: ["ارفع جسمك في خط مستقيم على ساعد واحد.", "حافظ على ارتفاع حوضك."], focus: "Squeeze glutes." },
        { id: "core1_2", type: "posture", name: "Superman Holds", sets: "3", reps: "30-45s", equip: "Bodyweight", targetEn: "Lower Back", targetAr: "أسفل الظهر", descEn: ["Lie on stomach, raise arms, chest, and legs.", "Hold and squeeze."], descAr: ["استلق على بطنك وارفع ذراعيك وصدرك وساقيك.", "حافظ على الوضعية واعصر العضلات."], focus: "Look down to protect neck." },
        { id: "core1_3", type: "abs", name: "Heel Touches", sets: "3", reps: "20/side", equip: "Bodyweight", targetEn: "Obliques", targetAr: "العضلات الجانبية", descEn: ["Lie on back, knees bent.", "Crunch up slightly and reach for heels side to side."], descAr: ["استلق وركبتاك مثنيتان.", "اطوِ بطنك قليلاً والمس كعبيك يميناً ويساراً."], focus: "Keep shoulder blades off floor." },
        { id: "core1_4", type: "main", name: "Back Extensions", sets: "3", reps: "15", equip: "Floor/Bench", targetEn: "Erectors", targetAr: "عضلات الظهر السفلية", descEn: ["Extend spine raising torso.", "Squeeze lower back at top."], descAr: ["ارفع جذعك للأعلى.", "اعصر أسفل ظهرك في الأعلى."], focus: "Controlled movement." }
      ]
    },
    {
      day: "Tuesday",
      id: 2,
      focus: "DYNAMIC LOWER CORE",
      exercises: [
        { id: "core2_1", type: "main", name: "Hanging Leg Raises", sets: "4", reps: "10-15", equip: "Pull-up Bar", targetEn: "Lower Abs", targetAr: "عضلات البطن السفلية", descEn: ["Hang from bar, raise legs to 90 degrees.", "Control the swing."], descAr: ["تعلق بالبار وارفع ساقيك لزاوية 90.", "تحكم في التأرجح."], focus: "Use abs, not momentum." },
        { id: "core2_2", type: "abs", name: "Mountain Climbers", sets: "4", reps: "45s", equip: "Bodyweight", targetEn: "Core / Cardio", targetAr: "البطن والكارديو", descEn: ["Plank position, drive knees to chest rapidly.", "Keep hips down."], descAr: ["وضعية البلانك، ادفع ركبتيك لصدرك بسرعة.", "حافظ على انخفاض حوضك."], focus: "Speed with control." },
        { id: "core2_3", type: "abs", name: "Flutter Kicks", sets: "3", reps: "45s", equip: "Bodyweight", targetEn: "Lower Abs", targetAr: "عضلات البطن السفلية", descEn: ["Lie on back, hands under glutes.", "Kick legs up and down slightly off floor."], descAr: ["استلق، ضع يديك تحت أردافك.", "حرك ساقيك للأعلى والأسفل بالقرب من الأرض."], focus: "Lower back glued to floor." },
        { id: "core2_4", type: "main", name: "V-Ups", sets: "3", reps: "15", equip: "Bodyweight", targetEn: "Total Abs", targetAr: "عضلات البطن", descEn: ["Lie flat, raise torso and legs to touch toes.", "Balance on glutes."], descAr: ["استلق وارفع جذعك وساقيك لتلمس أصابعك.", "توازن على أردافك."], focus: "Straight legs." }
      ]
    },
    {
      day: "Wednesday",
      id: 3,
      focus: "POWER & INTEGRATION",
      exercises: [
        { id: "core3_1", type: "abs", name: "Bicycle Crunches", sets: "4", reps: "20/side", equip: "Bodyweight", targetEn: "Obliques / Rectus", targetAr: "العضلات الجانبية والبطن", descEn: ["Opposite elbow to opposite knee.", "Extend other leg fully."], descAr: ["المرفق لركبة الساق المعاكسة.", "مد الساق الأخرى بالكامل."], focus: "Twist fully." },
        { id: "core3_2", type: "main", name: "Medicine Ball Slams", sets: "3", reps: "15", equip: "Med Ball / Pillow", targetEn: "Explosive Core", targetAr: "قوة البطن الانفجارية", descEn: ["Raise ball overhead.", "Slam into floor using core power."], descAr: ["ارفع الكرة فوق رأسك.", "اضربها بقوة بالأرض باستخدام عضلات بطنك."], focus: "Violent contraction." },
        { id: "core3_3", type: "abs", name: "Alternating Toe Touches", sets: "3", reps: "15/side", equip: "Bodyweight", targetEn: "Cross-body Flexion", targetAr: "تقاطع البطن", descEn: ["Lie on back, legs up or flat.", "Reach right hand to left foot, alternate."], descAr: ["استلق، ارفع ساقيك أو دعهما.", "المس قدمك اليسرى بيدك اليمنى، وبالعكس."], focus: "Crunch high." },
        { id: "core3_4", type: "posture", name: "Plank to Push-Up", sets: "3", reps: "12", equip: "Bodyweight", targetEn: "Dynamic Stability", targetAr: "الاستقرار الحركي", descEn: ["Start in forearm plank.", "Push up to hands one by one, then back down."], descAr: ["ابدأ ببلانك على الساعدين.", "ادفع نفسك ليديك واحدة تلو الأخرى ثم ارجع."], focus: "Minimize hip sway." }
      ]
    },
    {
      day: "Thursday",
      id: 4,
      focus: "ISOMETRIC MASTERY",
      exercises: [
        { id: "core4_1", type: "main", name: "Forearm Plank", sets: "3", reps: "Max Hold", equip: "Bodyweight", targetEn: "Total Core", targetAr: "البطن بالكامل", descEn: ["Hold strict plank position.", "Squeeze glutes, quads, and abs."], descAr: ["حافظ على وضعية البلانك الصارمة.", "اعصر الأرداف والأرجل الأمامية والبطن."], focus: "Breathe normally." },
        { id: "core4_2", type: "main", name: "L-Sit Holds", sets: "3", reps: "15-20s", equip: "Floor/Parallettes", targetEn: "Deep Core / Hip Flexors", targetAr: "البطن العميقة", descEn: ["Support body on hands, extend legs forward.", "Keep legs straight, toes pointed."], descAr: ["ارفع جسمك بيديك، مد ساقيك للأمام.", "حافظ على استقامة ساقيك وتوجيه أصابعك."], focus: "Push floor away." },
        { id: "core4_3", type: "abs", name: "Dead Bugs", sets: "3", reps: "12/side", equip: "Bodyweight", targetEn: "Transverse Abdominis", targetAr: "عضلات البطن العميقة", descEn: ["Lie on back, arms and legs up.", "Lower opposite arm and leg to floor."], descAr: ["استلق، ارفع ذراعيك وساقيك.", "انزل ذراعاً وساقاً متعاكستين للأرض."], focus: "Lower back must touch floor." },
        { id: "core4_4", type: "posture", name: "Bear Crawl Holds", sets: "3", reps: "45s", equip: "Bodyweight", targetEn: "Anti-Extension", targetAr: "مقاومة التمدد", descEn: ["On all fours, lift knees 1 inch off floor.", "Hold position with flat back."], descAr: ["على الأطراف الأربعة، ارفع ركبتيك قليلاً.", "حافظ على وضعيتك بظهر مستقيم."], focus: "Keep shins parallel to floor." }
      ]
    },
    {
      day: "Friday",
      id: 5,
      focus: "REST",
      exercises: []
    }
  ],
  images: {
    "core6_2": "img/abs.jpg",
    "core6_3": "img/abs.jpg",
    "core0_1": "img/russian_twist.png",
    "core0_4": "img/side_plank.jpg",
    "core1_1": "img/side_plank.jpg",
    "core1_2": "img/superman.jpg",
    "core1_3": "img/abs.jpg",
    "core2_1": "img/hanging_leg_raise.jpg",
    "core2_2": "img/mountain_climber.jpg",
    "core2_3": "img/abs.jpg",
    "core2_4": "img/v_ups.png",
    "core3_1": "img/bicycle_crunch.png",
    "core3_3": "img/abs.jpg",
    "core4_1": "img/plank.jpg",
    "core4_3": "img/dead_bug.jpg",
    "core4_4": "img/abs.jpg"
}
};

const HOME_GYM_PROFILE = {
  "id": "home",
  "name": "Home Gym PPL",
  "icon": "🏠",
  "desc": "Enhanced PPL Home Gym Routine v2",
  "routine": [
    {
      "day": "Saturday",
      "id": 6,
      "focus": "Chest, Shoulders, Triceps (Push 1)",
      "exercises": [
        {
          "id": "home6_1",
          "type": "warmup",
          "name": "Press & Shoulder Prep",
          "sets": "1",
          "reps": "Warmup",
          "equip": "Bench, Dumbbells",
          "targetEn": "Shoulders & Chest Joint Mobilization",
          "targetAr": "تهيئة مفاصل الكتف والصدر",
          "descEn": [
            "1-2 light sets of Dumbbell Bench Press (50% working weight, 10-12 reps).",
            "Shoulder circles/dislocates."
          ],
          "descAr": [
            "أداء مجموعة أو مجموعتين خفيفتين من ضغط الصدر بالدمبل بـ 50% من الوزن الفعلي، مع 10-12 تكرار.",
            "دوائر الكتف الخفيفة بحذر للإحماء."
          ],
          "focus": "Prepare the shoulder joints and chest for heavier loads."
        },
        {
          "id": "home6_2",
          "type": "main",
          "name": "Dumbbell Bench Press (Flat/Slight Incline)",
          "sets": "3-4",
          "reps": "6-10",
          "equip": "Bench, Dumbbells",
          "targetEn": "Chest (Pectorals) & Triceps",
          "targetAr": "عضلات الصدر والترايسبس",
          "descEn": [
            "Lie on bench, feet flat on floor.",
            "Press dumbbells straight up, squeezing chest.",
            "Lower with control to chest level."
          ],
          "descAr": [
            "استلقِ على البنش والاقدام ثابتة بالأرض.",
            "ادفع الوزن للأعلى بشكل مستقيم واعصر الصدر.",
            "انزل ببطء وتحكم حتى مستوى الصدر."
          ],
          "focus": "Form first! Control the eccentric (lowering) phase for 2-3 seconds."
        },
        {
          "id": "home6_3",
          "type": "main",
          "name": "Dumbbell Seated Overhead Press",
          "sets": "3-4",
          "reps": "8-12",
          "equip": "Bench, Dumbbells",
          "targetEn": "Front Shoulders & Triceps",
          "targetAr": "الكتف الأمامي والترايسبس",
          "descEn": [
            "Sit upright with back support.",
            "Hold dumbbells at shoulder height, palms forward.",
            "Press overhead until arms are extended."
          ],
          "descAr": [
            "اجلس مستقيماً مع دعم الظهر.",
            "امسك الدمبلز بمستوى الكتف والكفوف للأمام.",
            "ادفع الوزن للأعلى حتى فرد الذراعين."
          ],
          "focus": "Keep core braced to avoid over-arching the lower back."
        },
        {
          "id": "home6_4",
          "type": "main",
          "name": "Dumbbell Incline Flyes",
          "sets": "3",
          "reps": "10-15",
          "equip": "Bench, Dumbbells",
          "targetEn": "Upper Chest (Pectorals)",
          "targetAr": "عضلات الصدر العلوي",
          "descEn": [
            "Set bench to 30-45 degree incline.",
            "Hold dumbbells overhead, palms facing.",
            "Open arms wide in a controlled arc, then squeeze back up."
          ],
          "descAr": [
            "اضبط البنش بزاوية 30-45 درجة.",
            "امسك الدمبلز للأعلى وباطن اليدين متواجه.",
            "افتح ذراعيك جانباً بقوس متحكم فيه ثم اعصر للأعلى."
          ],
          "focus": "Keep a slight, permanent bend in the elbows. Imagine hugging a giant tree."
        },
        {
          "id": "home6_5",
          "type": "main",
          "name": "Dumbbell Lateral Raises",
          "sets": "3",
          "reps": "12-15",
          "equip": "Dumbbells",
          "targetEn": "Side Shoulders (Lateral Delts)",
          "targetAr": "الكتف الجانبي",
          "descEn": [
            "Stand tall, dumbbells at sides.",
            "Raise dumbbells out to sides to shoulder height.",
            "Lower slowly under control."
          ],
          "descAr": [
            "قف مستقيماً والدمبلز بجانبك.",
            "ارفع الدمبلز جانباً حتى مستوى الكتف.",
            "انزل ببطء وتحكم."
          ],
          "focus": "Lead with the elbows, turn pinkies up slightly at the top."
        },
        {
          "id": "home6_6",
          "type": "main",
          "name": "EZ Bar Skullcrushers (Lying on Bench)",
          "sets": "3",
          "reps": "8-12",
          "equip": "Bench, EZ Bar",
          "targetEn": "Triceps",
          "targetAr": "عضلات الترايسبس",
          "descEn": [
            "Lie on bench, hold EZ bar above chest.",
            "Lower bar to forehead by bending elbows only.",
            "Extend elbows to return to start."
          ],
          "descAr": [
            "استلقِ على البنش وامسك البار فوق الصدر.",
            "انزل البار نحو الجبهة بثني المرفقين فقط.",
            "افرد المرفقين للعودة لوضع البداية."
          ],
          "focus": "Keep elbows pinned in place pointing forward, do not let them flare out."
        },
        {
          "id": "home6_7",
          "type": "main",
          "name": "Dumbbell Overhead Triceps Extension (Seated/Standing)",
          "sets": "3",
          "reps": "10-15",
          "equip": "Dumbbell",
          "targetEn": "Triceps (Long Head)",
          "targetAr": "الترايسبس (الرأس الطويل)",
          "descEn": [
            "Hold one dumbbell with both hands overhead.",
            "Lower dumbbell behind head by bending elbows.",
            "Extend arms to press back up."
          ],
          "descAr": [
            "امسك دمبل واحد بكلتا اليدين فوق الرأس.",
            "انزل الدمبل خلف الرأس بثني المرفقين.",
            "افرد ذراعيك للدفع للأعلى."
          ],
          "focus": "Stretch the tricep heavily behind the neck."
        },
        {
          "id": "home6_8",
          "type": "main",
          "name": "Dumbbell Push-Ups",
          "sets": "3",
          "reps": "Failure",
          "equip": "Dumbbells",
          "targetEn": "Chest & Core Stability",
          "targetAr": "الصدر وثبات البطن",
          "descEn": [
            "Place hex dumbbells on floor at shoulder width.",
            "Hold handles, perform deep push-ups.",
            "Keep body straight and core braced."
          ],
          "descAr": [
            "ضع دمبلين سداسيين على الأرض بعرض الكتفين.",
            "امسك المقابض وقم بأداء ضغط عميق.",
            "حافظ على استقامة الجسم وشد البطن."
          ],
          "focus": "Go as deep as possible to failure."
        },
        {
          "id": "home6_9",
          "type": "abs",
          "name": "Decline Dumbbell Crunch (Chest Hold)",
          "sets": "3",
          "reps": "12-15",
          "equip": "Decline Bench, Dumbbell",
          "targetEn": "Upper Abs",
          "targetAr": "عضلات البطن العلوية",
          "descEn": [
            "Lie on decline bench, hold dumbbell at chest.",
            "Crunch torso upward, squeezing abs.",
            "Lower slowly back down."
          ],
          "descAr": [
            "استلقِ على بنش مائل للأسفل وامسك دمبل عند صدرك.",
            "اطوِ جذعك للأعلى واعصر عضلات البطن.",
            "انزل ببطء للأسفل."
          ],
          "focus": "Keep lower back touching bench at all times."
        },
        {
          "id": "home6_10",
          "type": "abs",
          "name": "Decline Bodyweight Russian Twist",
          "sets": "3",
          "reps": "15-20",
          "equip": "Decline Bench",
          "targetEn": "Obliques (Side Abs)",
          "targetAr": "العضلات الجانبية للبطن",
          "descEn": [
            "Sit on decline bench, lean back slightly.",
            "Rotate torso side to side under control.",
            "Squeeze side abs at each rotation."
          ],
          "descAr": [
            "اجلس على البنش المائل للخلف وانحنِ قليلاً.",
            "أدر جذعك من جانب لآخر ببطء وتحكم.",
            "اعصر الخواصر في كل لفة."
          ],
          "focus": "Rotate your entire torso, not just your arms."
        }
      ]
    },
    {
      "day": "Sunday",
      "id": 0,
      "focus": "Back, Biceps, Rear Delts (Pull 1)",
      "exercises": [
        {
          "id": "home0_1",
          "type": "warmup",
          "name": "Pull & Bicep Prep",
          "sets": "1",
          "reps": "Warmup",
          "equip": "Bench, Dumbbells",
          "targetEn": "Back & Bicep Mobilization",
          "targetAr": "إحماء الظهر والبايسبس",
          "descEn": [
            "1-2 light sets of Dumbbell Rows.",
            "Arm swings and elbow rotations."
          ],
          "descAr": [
            "مجموعة أو مجموعتين خفيفتين من سحب الدمبل.",
            "مرجحة الذراعين ودوران الكوع."
          ],
          "focus": "Activate target muscle groups safely."
        },
        {
          "id": "home0_2",
          "type": "main",
          "name": "Single-Arm Dumbbell Row",
          "sets": "3",
          "reps": "10-12/arm",
          "equip": "Dumbbell, Bench",
          "targetEn": "Lats & Middle Back",
          "targetAr": "المجنص ومنتصف الظهر",
          "descEn": [
            "One hand and knee on bench for support.",
            "Pull dumbbell to hip, driving elbow back.",
            "Squeeze lat hard at the top, lower slowly."
          ],
          "descAr": [
            "يد وركبة على الدكة للدعم.",
            "اسحب الدمبل لاتجاه الخصر مع دفع الكوع للخلف.",
            "اعصر المجنص بقوة وانزل ببطء."
          ],
          "focus": "Pull from the elbow, not the hand. Imagine your hand is a hook."
        },
        {
          "id": "home0_3",
          "type": "main",
          "name": "EZ Bar Upright Row",
          "sets": "3",
          "reps": "10-12",
          "equip": "EZ Bar",
          "targetEn": "Lateral Delts & Traps",
          "targetAr": "الأكتاف الجانبية والترابيس",
          "descEn": [
            "Stand holding bar with overhand grip.",
            "Pull bar straight up to upper chest.",
            "Keep elbows higher than wrists throughout."
          ],
          "descAr": [
            "امسك البار بوضعية مستقيمة.",
            "اسحبه باستقامة باتجاه أعلى صدرك.",
            "اجعل الأكواع أعلى من الرسغ دوماً."
          ],
          "focus": "Let your elbows lead the upward motion entirely."
        },
        {
          "id": "home0_4",
          "type": "main",
          "name": "Dumbbell Rear Delt Raise",
          "sets": "3",
          "reps": "12-15",
          "equip": "Dumbbells",
          "targetEn": "Rear Delts",
          "targetAr": "الكتف الخلفي",
          "descEn": [
            "Hinge forward at hips, back flat.",
            "Raise dumbbells out to the sides.",
            "Squeeze rear delts hard, lower with control."
          ],
          "descAr": [
            "انحني للأمام من الخصر، الظهر مسطح.",
            "ارفع الدمبلز للجانبين.",
            "اعصر الكتف الخلفي بقوة، انزل بتحكم."
          ],
          "focus": "Squeeze rear shoulders. Avoid swing or using momentum."
        },
        {
          "id": "home0_5",
          "type": "main",
          "name": "EZ Bar Bicep Curls",
          "sets": "3",
          "reps": "10-12",
          "equip": "EZ Bar",
          "targetEn": "Biceps Brachii",
          "targetAr": "عضلة البايسبس",
          "descEn": [
            "Grip bar shoulder-width on the angled grips.",
            "Curl up, keeping elbows stationary.",
            "Lower slowly with full control."
          ],
          "descAr": [
            "امسك الأماكن المقوسة للبار.",
            "ارفع البار واكواعك ثابتة جداً.",
            "تحكم تام في حركة النزول."
          ],
          "focus": "Freeze elbows at your sides while squeezing biceps."
        },
        {
          "id": "home0_6",
          "type": "main",
          "name": "Dumbbell Hammer Curls",
          "sets": "3",
          "reps": "10-12",
          "equip": "Dumbbells",
          "targetEn": "Brachialis & Forearm",
          "targetAr": "السواعد والعضدية",
          "descEn": [
            "Hold dumbbells with neutral/hammer grip.",
            "Curl to shoulder height, squeezing brachialis.",
            "Lower slowly under tension."
          ],
          "descAr": [
            "أوزان بمسكة محايدة (هامر).",
            "ارفع للأعلى باتجاه الكتف.",
            "انزل ببطء مع استمرار مقاومة العضلة."
          ],
          "focus": "Builds upper arm thickness."
        },
        {
          "id": "home0_7",
          "type": "main",
          "name": "Concentration Curls",
          "sets": "3",
          "reps": "10-12/arm",
          "equip": "Dumbbell, Bench",
          "targetEn": "Bicep Peak",
          "targetAr": "قمة البايسبس",
          "descEn": [
            "Sit on bench, elbow braced on inner thigh.",
            "Curl up with strict isolation — no momentum.",
            "Squeeze at top, lower slowly."
          ],
          "descAr": [
            "اجلس والذراع مستند على الفخذ الداخلي.",
            "ارفع بتركيز تام وعزل بدون تقلب.",
            "اعصر في القمة وانزل ببطء."
          ],
          "focus": "Keep elbow pinned against inner thigh to isolate the peak."
        },
        {
          "id": "home0_8",
          "type": "main",
          "name": "Dumbbell Shrugs",
          "sets": "3",
          "reps": "12-15",
          "equip": "Dumbbells",
          "targetEn": "Trapezius (Upper Back)",
          "targetAr": "عضلات الترابيس",
          "descEn": [
            "Stand holding heavy dumbbells at your sides.",
            "Elevate shoulders straight up toward ears.",
            "Hold 2 seconds at peak, lower slowly."
          ],
          "descAr": [
            "اقبض بشدة على أوزان عالية.",
            "ارفع أكتفاك لأقصى ارتفاع.",
            "انزل تدريجياً وببطء."
          ],
          "focus": "Touch your shoulders to your ears, do not roll them."
        },
        {
          "id": "home0_9",
          "type": "abs",
          "name": "V-Ups",
          "sets": "3",
          "reps": "12-15",
          "equip": "Bodyweight",
          "targetEn": "Total Abs",
          "targetAr": "عضلات البطن بالكامل",
          "descEn": [
            "Lie flat on back, arms extended overhead.",
            "Simultaneously lift legs and torso.",
            "Touch toes at the top, lower with control."
          ],
          "descAr": [
            "استلقِ وافرد الأيدي للوراء.",
            "ارفع الجذع والارجل فوراً بوقت واحد.",
            "المس الأصابع وارجع ببطء."
          ],
          "focus": "Move like a closing book."
        },
        {
          "id": "home0_10",
          "type": "abs",
          "name": "Superman Holds",
          "sets": "3",
          "reps": "45s",
          "equip": "Bodyweight",
          "targetEn": "Lower Back Erectors",
          "targetAr": "عضلات أسفل الظهر",
          "descEn": [
            "Lie face down, arms extended forward.",
            "Lift arms, chest, and legs off the floor.",
            "Squeeze glutes and lower back, hold the position."
          ],
          "descAr": [
            "استلقِ على وجهك والذراعين ممدودة.",
            "ارفع ذراعيك وصدرك وساقيك معًا عن الأرض.",
            "اعصر الجلوتس وأسفل الظهر بقوة."
          ],
          "focus": "Squeeze glutes and back together."
        }
      ]
    },
    {
      "day": "Monday",
      "id": 1,
      "focus": "Legs, Calves, Abs (Legs 1)",
      "exercises": [
        {
          "id": "home1_1",
          "type": "warmup",
          "name": "Leg Prep",
          "sets": "1",
          "reps": "Warmup",
          "equip": "Bodyweight",
          "targetEn": "Lower Body Joint Mobilization",
          "targetAr": "إحماء الأفخاذ والمفاصل السفلية",
          "descEn": [
            "1-2 sets of bodyweight squats.",
            "Leg swings and ankle circles."
          ],
          "descAr": [
            "مجموعة أو مجموعتين من السكوات بوزن الجسم.",
            "مرجحة الساقين ودوران الكاحل."
          ],
          "focus": "Prepare knee and hip joints."
        },
        {
          "id": "home1_2",
          "type": "main",
          "name": "Barbell Front Squat",
          "sets": "3",
          "reps": "6-8",
          "equip": "Barbell",
          "targetEn": "Quadriceps & Core",
          "targetAr": "الأفخاذ الأمامية والبطن",
          "descEn": [
            "Rest bar on front delts, elbows high.",
            "Squat deep — thighs below parallel.",
            "Drive up explosively, chest stays tall."
          ],
          "descAr": [
            "استند البار على مقدمة الكتف، الأكواع لأعلى.",
            "انزل عميقًا - الفخذ تحت مستوى الركبة.",
            "ادفع بقوة للأعلى والصدر مفرود."
          ],
          "focus": "Keep elbows pointing high throughout."
        },
        {
          "id": "home1_3",
          "type": "main",
          "name": "Dumbbell Goblet Squat",
          "sets": "3",
          "reps": "10-12",
          "equip": "Dumbbell",
          "targetEn": "Quadriceps & Glutes",
          "targetAr": "الأفخاذ الأمامية والأرداف",
          "descEn": [
            "Hold dumbbell at chest with both hands.",
            "Squat deep, elbows inside knees.",
            "Drive through heels, squeeze glutes at top."
          ],
          "descAr": [
            "امسك الوزن عند الصدر بكلتا اليدين.",
            "انزل عميقاً واجعل الكوعين بين الركبتين.",
            "ادفع من الكعبين لأعلى واعصر المؤخرة."
          ],
          "focus": "Push knees out wide as you drop in."
        },
        {
          "id": "home1_4",
          "type": "main",
          "name": "Dumbbell Walking Lunges",
          "sets": "3",
          "reps": "10/leg",
          "equip": "Dumbbells",
          "targetEn": "Glutes & Quads",
          "targetAr": "الأساسي: الجلوتس والأفخاذ",
          "descEn": [
            "Take a long controlled step forward.",
            "Drop back knee straight down toward floor.",
            "Push off front heel into the next step."
          ],
          "descAr": [
            "خطوة واسعة ومحكومة للأمام.",
            "نزل الركبة الخلفية نحو الأرض مباشرة.",
            "ادفع من كعب القدم الأمامية للحركة التالية."
          ],
          "focus": "Keep your torso upright, tracking weight on the heel."
        },
        {
          "id": "home1_5",
          "type": "main",
          "name": "Dumbbell Romanian Deadlift",
          "sets": "3",
          "reps": "10-12",
          "equip": "Dumbbells",
          "targetEn": "Hamstrings & Glutes",
          "targetAr": "العضلة الخلفية والجلوتس",
          "descEn": [
            "Push hips back with slight knee bend.",
            "Keep dumbbells close to your legs.",
            "Feel the hamstring stretch, squeeze glutes up."
          ],
          "descAr": [
            "ادفع الحوض للخلف مع ثني طفيف للركبة.",
            "اجعل الأوزان قريبة من الأقدام.",
            "ركز على تمدد العضلة الخلفية وارفع بالضغط عليها."
          ],
          "focus": "Hinge at hips, pushing them back to a wall."
        },
        {
          "id": "home1_6",
          "type": "main",
          "name": "Dumbbell Step-Ups",
          "sets": "3",
          "reps": "10/leg",
          "equip": "Dumbbells, Bench",
          "targetEn": "Quadriceps & Balance",
          "targetAr": "الأفخاذ الأمامية والتوازن",
          "descEn": [
            "Place one foot firmly on the bench.",
            "Drive up through the elevated leg only.",
            "Step down slowly under control."
          ],
          "descAr": [
            "ضع قدمك بثبات على الدكة.",
            "ادفع للأعلى بساقك المرفوعة فقط.",
            "انزل ببطء دون دفع بالقدم الخلفية."
          ],
          "focus": "Drive entirely through the elevated heel."
        },
        {
          "id": "home1_7",
          "type": "main",
          "name": "Dumbbell Sumo Squat",
          "sets": "3",
          "reps": "12-15",
          "equip": "Dumbbell",
          "targetEn": "Inner Thighs (Adductors)",
          "targetAr": "الأفخاذ الداخلية",
          "descEn": [
            "Wide stance, toes pointed outward.",
            "Hold one dumbbell hanging between legs.",
            "Squat deep, driving knees out, squeeze inner thighs."
          ],
          "descAr": [
            "وقفة واسعة وأصابع القدم للخارج.",
            "امسك الوزن متدلياً بين فخذيك.",
            "انزل بعمق مع فتح الركبتين واعصر للداخل."
          ],
          "focus": "Squeeze the floor together with your feet as you stand."
        },
        {
          "id": "home1_8",
          "type": "main",
          "name": "Standing Calf Raises",
          "sets": "3",
          "reps": "15-20",
          "equip": "Dumbbells",
          "targetEn": "Calves (Gastrocnemius)",
          "targetAr": "عضلة السمانة",
          "descEn": [
            "Stand on a plate or step for extra range.",
            "Rise onto toes as high as possible.",
            "Hold 2 seconds at top, lower slowly."
          ],
          "descAr": [
            "قف على درجة لزيادة مدى الحركة.",
            "ارفع نفسك لأقصى حد على الأصابع.",
            "اثبت ثانيتين بالأعلى، وانزل لمستوى أعمق ببطء."
          ],
          "focus": "Achieve full stretch at the bottom and hard squeeze at the top."
        },
        {
          "id": "home1_9",
          "type": "abs",
          "name": "Lying Leg Raises",
          "sets": "3",
          "reps": "15-20",
          "equip": "Bodyweight",
          "targetEn": "Lower Abs",
          "targetAr": "عضلات البطن السفلية",
          "descEn": [
            "Lie flat on back, hands under glutes.",
            "Keep legs straight, raise to 90 degrees.",
            "Lower slowly without touching the floor."
          ],
          "descAr": [
            "استلقِ مسطحاً، اليدين تحت المؤخرة.",
            "ارفع الأقدام المستقيمة إلى زاوية ٩٠.",
            "انزل ببطء دون أن تلمس الأقدام الأرض."
          ],
          "focus": "Press your lower back directly into the floor."
        },
        {
          "id": "home1_10",
          "type": "abs",
          "name": "Neck Flexion",
          "sets": "3",
          "reps": "15-20",
          "equip": "Bodyweight",
          "targetEn": "Deep Cervical Flexors",
          "targetAr": "عضلات الرقبة الأمامية",
          "descEn": [
            "Lie on your back on the floor.",
            "Tuck chin and lift head toward chest.",
            "Lower slowly — builds front neck muscles."
          ],
          "descAr": [
            "استلقِ على ظهرك تمامًا.",
            "قرب ذقنك وارفع رأسك باتجاه صدرك.",
            "انزل ببطء وتحكم."
          ],
          "focus": "Controlled and slow contraction to support spine posture."
        }
      ]
    },
    {
      "day": "Tuesday",
      "id": 2,
      "focus": "Shoulders, Chest, Triceps (Push 2)",
      "exercises": [
        {
          "id": "home2_1",
          "type": "warmup",
          "name": "Press & Shoulder Prep",
          "sets": "1",
          "reps": "Warmup",
          "equip": "Bench, Dumbbells",
          "targetEn": "Shoulder Joint Mobilization",
          "targetAr": "تهيئة مفاصل الكتف",
          "descEn": [
            "Light dumbbell shoulder presses.",
            "Arm rotations and dynamic stretching."
          ],
          "descAr": [
            "ضغط أكتاف خفيف بالدمبلز.",
            "دوران الذراعين وإطالات ديناميكية."
          ],
          "focus": "Warm up the shoulder girdle thoroughly."
        },
        {
          "id": "home2_2",
          "type": "main",
          "name": "Standing Barbell Overhead Press",
          "sets": "3",
          "reps": "6-8",
          "equip": "Barbell",
          "targetEn": "Anterior Deltoid & Core",
          "targetAr": "الكتف الأمامي والبطن",
          "descEn": [
            "Grip just outside shoulder width.",
            "Brace core hard, press bar straight overhead.",
            "Push head through at the top for lockout."
          ],
          "descAr": [
            "مسكة أعرض من الأكتاف قليلا.",
            "شد بطنك بقوة، وادفع البار لأعلى تماما.",
            "ادفع رأسك للداخل لإتمام الإغلاق."
          ],
          "focus": "Clench your glutes and abs to form a solid pillar."
        },
        {
          "id": "home2_3",
          "type": "main",
          "name": "Arnold Press",
          "sets": "3",
          "reps": "10-12",
          "equip": "Dumbbells, Bench",
          "targetEn": "Anterior & Lateral Deltoids",
          "targetAr": "الكتف الأمامي والجانبي",
          "descEn": [
            "Start with palms facing you at chest level.",
            "Rotate wrists outward as you press up.",
            "Reverse the rotation on the way down."
          ],
          "descAr": [
            "ابدأ وكفوف يديك تواجهك عند مستوى الصدر.",
            "قم بتدوير معصميك للخارج أثناء الدفع للأعلى.",
            "اعكس الحركة للنزول."
          ],
          "focus": "Focus on the continuous rotation and squeeze."
        },
        {
          "id": "home2_4",
          "type": "main",
          "name": "Dumbbell Floor Press",
          "sets": "3",
          "reps": "10-12",
          "equip": "Dumbbells",
          "targetEn": "Chest & Triceps",
          "targetAr": "الصدر والترايسبس",
          "descEn": [
            "Lie on the floor, knees bent.",
            "Press dumbbells up until arms lock out.",
            "Lower until triceps touch the floor, pause, press."
          ],
          "descAr": [
            "استلقِ على الأرض والركبتان مثنيتان.",
            "ادفع للأعلى حتى تنفرد الذراعان.",
            "انزل حتى تلامس الترايسبس الأرض، توقف، ثم ادفع."
          ],
          "focus": "Let triceps rest on floor before exploding upward."
        },
        {
          "id": "home2_5",
          "type": "main",
          "name": "Dumbbell Front Raises",
          "sets": "3",
          "reps": "12-15",
          "equip": "Dumbbells",
          "targetEn": "Anterior Deltoid (Front Shoulder)",
          "targetAr": "الكتف الأمامي",
          "descEn": [
            "Alternate arms or raise both together.",
            "Lift to shoulder height, arms almost straight.",
            "Control the negative — no swinging."
          ],
          "descAr": [
            "بالتبادل أو رفع الذراعين معاً.",
            "ارفع لمستوى الكتف، الذراع شبه مستقيمة.",
            "تحكم بالنزول — لا تتأرجح."
          ],
          "focus": "Pull up strictly using front shoulders."
        },
        {
          "id": "home2_6",
          "type": "main",
          "name": "EZ Bar Close-Grip Floor Press",
          "sets": "3",
          "reps": "10-12",
          "equip": "EZ Bar",
          "targetEn": "Triceps",
          "targetAr": "عضلة الترايسبس",
          "descEn": [
            "Lie on floor, grip narrow part of EZ bar.",
            "Press up, squeezing triceps at the top.",
            "Lower until arms touch floor, pause."
          ],
          "descAr": [
            "استلقِ على الأرض وامسك الجزء الضيق من البار.",
            "ادفع للأعلى واعصر الترايسبس في القمة.",
            "انزل حتى تلامس الأرض، وتوقف للحظة."
          ],
          "focus": "Lock out completely at top to target triceps."
        },
        {
          "id": "home2_7",
          "type": "main",
          "name": "Dumbbell Lateral Raises",
          "sets": "3",
          "reps": "12-15",
          "equip": "Dumbbells",
          "targetEn": "Lateral Delts",
          "targetAr": "الكتف الجانبي",
          "descEn": [
            "Slight bend in elbows, torso still.",
            "Raise to shoulder height, lead with elbows.",
            "Lower slowly — fight gravity on the way down."
          ],
          "descAr": [
            "انحناء خفيف في المرفقين، ثبات الجذع.",
            "ارفع لمستوى الكتف مع توجيه المرفق للأعلى.",
            "انزل ببطء شديد مع مقاومة الجاذبية."
          ],
          "focus": "Push weights away to the sides."
        },
        {
          "id": "home2_8",
          "type": "main",
          "name": "Dumbbell Side Bends",
          "sets": "3",
          "reps": "15/side",
          "equip": "Dumbbell",
          "targetEn": "Obliques (Side Abs)",
          "targetAr": "الخواصر والخصر",
          "descEn": [
            "Hold dumbbell in one hand at your side.",
            "Bend sideways slowly, stretching the oblique.",
            "Contract to return upright, switch sides."
          ],
          "descAr": [
            "امسك دمبل بيد واحدة إلى جانبك.",
            "انحني للجانب ببطء لشعور التمدد.",
            "انقبض للعودة للوضع المستقيم، ثم بدل."
          ],
          "focus": "Pull ribcage to hip on contracting side."
        },
        {
          "id": "home2_9",
          "type": "abs",
          "name": "Bicycle Crunches",
          "sets": "3",
          "reps": "20/side",
          "equip": "Bodyweight",
          "targetEn": "Core & Obliques",
          "targetAr": "البطن والخواصر",
          "descEn": [
            "Lie on back, hands lightly behind head.",
            "Bring opposite elbow to opposite knee.",
            "Keep a steady, controlled pace."
          ],
          "descAr": [
            "استلقِ ويديك بخفة خلف الرأس.",
            "قرب الكوع للركبة المعاكسة بالتبادل.",
            "تكرار منتظم ولا تسرع."
          ],
          "focus": "Rotate core side to side with intention."
        },
        {
          "id": "home2_10",
          "type": "posture",
          "name": "Wall Angels",
          "sets": "3",
          "reps": "12-15",
          "equip": "Bodyweight",
          "targetEn": "Upper Back & Posture",
          "targetAr": "استقامة الظهر والكتفين",
          "descEn": [
            "Stand with back, head, and hips against wall.",
            "Slide arms up the wall like a snow angel.",
            "Keep wrists and elbows touching wall throughout."
          ],
          "descAr": [
            "قف برأسك وظهرك وحوضك ملاصق للجدار.",
            "زلق يديك على الحائط كحركة ملاك الثلج.",
            "احتفظ بتلامس الأذرع طوال الحركة."
          ],
          "focus": "Force wrists and shoulders back into the wall."
        }
      ]
    },
    {
      "day": "Wednesday",
      "id": 3,
      "focus": "Back, Biceps, Rear Delts (Pull 2)",
      "exercises": [
        {
          "id": "home3_1",
          "type": "warmup",
          "name": "Pull & Bicep Prep",
          "sets": "1",
          "reps": "Warmup",
          "equip": "Bench, Dumbbells",
          "targetEn": "Back & Arm Joint Preparation",
          "targetAr": "تحضير مفاصل الظهر والذراعين",
          "descEn": [
            "Light dumbbell rows and curls.",
            "Shoulder and scapular rolls."
          ],
          "descAr": [
            "سحب وتبادل خفيف بالدمبلز.",
            "تحريك عضلات الظهر والكتف."
          ],
          "focus": "Ready the pulling muscles."
        },
        {
          "id": "home3_2",
          "type": "main",
          "name": "Barbell Deadlift",
          "sets": "3",
          "reps": "5",
          "equip": "Barbell",
          "targetEn": "Posterior Chain (Back & Glutes)",
          "targetAr": "عضلات الظهر والخلفيات",
          "descEn": [
            "Bar over mid-foot, shoulder-width stance.",
            "Hinge at hips, grip bar, chest up, back flat.",
            "Drive through legs and lock out — stand tall."
          ],
          "descAr": [
            "البار منتصف قدمك وقفة اعتيادية.",
            "انزل بالحوض وامسك البار والصدر للأعلى.",
            "ادفع بالساقين ثم استقم تماماً للاقفال."
          ],
          "focus": "Push the floor away like a leg press to start."
        },
        {
          "id": "home3_3",
          "type": "main",
          "name": "Bent-Over Barbell Row",
          "sets": "3",
          "reps": "8-10",
          "equip": "Barbell",
          "targetEn": "Lats & Mid-Back",
          "targetAr": "عضلة المجنص ومنتصف الظهر",
          "descEn": [
            "Hinge forward, torso nearly parallel to floor.",
            "Pull bar to lower chest / belly button.",
            "Squeeze shoulder blades together at the top."
          ],
          "descAr": [
            "انحني للأمام والجذع يوازي الأرض تقريباً.",
            "اسحب البار نحو السرة أو أسفل الصدر.",
            "ضم لوحي الكتف بقمة الرفع."
          ],
          "focus": "Row utilizing strictly your back without body momentum."
        },
        {
          "id": "home3_4",
          "type": "main",
          "name": "Single-Arm Dumbbell Row",
          "sets": "3",
          "reps": "10-12/arm",
          "equip": "Dumbbell, Bench",
          "targetEn": "Lats & Middle Back",
          "targetAr": "المجنص ومنتصف الظهر",
          "descEn": [
            "One hand and knee on bench for support.",
            "Pull dumbbell to hip, driving elbow back.",
            "Squeeze lat hard at the top, lower slowly."
          ],
          "descAr": [
            "يد وركبة على الدكة للدعم.",
            "اسحب الدمبل لاتجاه الخصر مع دفع الكوع للخلف.",
            "اعصر المجنص بقوة وانزل ببطء."
          ],
          "focus": "Drive elbow back, keep back flat."
        },
        {
          "id": "home3_5",
          "type": "main",
          "name": "EZ Bar Upright Row",
          "sets": "3",
          "reps": "10-12",
          "equip": "EZ Bar",
          "targetEn": "Lateral Delts & Traps",
          "targetAr": "الأكتاف الجانبية والترابيس",
          "descEn": [
            "Stand holding bar with overhand grip.",
            "Pull bar straight up to upper chest.",
            "Keep elbows higher than wrists throughout."
          ],
          "descAr": [
            "امسك البار بوضعية مستقيمة.",
            "اسحبه باستقامة باتجاه أعلى صدرك.",
            "اجعل الأكواع أعلى من الرسغ دوماً."
          ],
          "focus": "Let your elbows lead the upward motion entirely."
        },
        {
          "id": "home3_6",
          "type": "main",
          "name": "EZ Bar Bicep Curls",
          "sets": "3",
          "reps": "10-12",
          "equip": "EZ Bar",
          "targetEn": "Biceps Brachii",
          "targetAr": "البايسبس",
          "descEn": [
            "Grip bar shoulder-width on angled grips.",
            "Curl up, keeping elbows totally stationary.",
            "Lower slowly with full control."
          ],
          "descAr": [
            "امسك الأماكن المقوسة للبار.",
            "ارفع البار واكواعك ثابتة جداً.",
            "تحكم تام في حركة النزول."
          ],
          "focus": "Freeze elbows at your sides while squeezing biceps."
        },
        {
          "id": "home3_7",
          "type": "main",
          "name": "Dumbbell Hammer Curls",
          "sets": "3",
          "reps": "10-12",
          "equip": "Dumbbells",
          "targetEn": "Brachialis & Forearm",
          "targetAr": "الذراع الخارجي والسواعد",
          "descEn": [
            "Hold dumbbells with neutral/hammer grip.",
            "Curl to shoulder height, squeezing brachialis.",
            "Lower under tension — build the arm thickness."
          ],
          "descAr": [
            "أوزان بمسكة محايدة (هامر).",
            "ارفع للاعلى باتجاه الكتف.",
            "انزل ببطء مع استمرار مقاومة العضلة."
          ],
          "focus": "Squeeze hard at peak."
        },
        {
          "id": "home3_8",
          "type": "main",
          "name": "Dumbbell Shrugs",
          "sets": "3",
          "reps": "12-15",
          "equip": "Dumbbells",
          "targetEn": "Trapezius (Upper Back)",
          "targetAr": "الترابيس",
          "descEn": [
            "Stand holding heavy dumbbells at your sides.",
            "Elevate shoulders straight up toward ears.",
            "Hold 2 seconds at peak, lower slowly."
          ],
          "descAr": [
            "اقبض بشدة على أوزان عالية.",
            "ارفع أكتفاك لأقصى ارتفاع.",
            "انزل تدريجياً وببطء."
          ],
          "focus": "Squeeze traps hard at the top."
        },
        {
          "id": "home3_9",
          "type": "abs",
          "name": "V-Ups",
          "sets": "3",
          "reps": "12-15",
          "equip": "Bodyweight",
          "targetEn": "Total Abs",
          "targetAr": "كامل عضلات البطن",
          "descEn": [
            "Lie flat on back, arms extended overhead.",
            "Simultaneously lift legs and torso.",
            "Touch toes at the top, lower with control."
          ],
          "descAr": [
            "استلقِ وافرد الأيدي للوراء.",
            "ارفع الجذع والارجل فوراً بوقت واحد.",
            "المس الأصابع وارجع ببطء."
          ],
          "focus": "Brace core as legs and torso meet."
        },
        {
          "id": "home3_10",
          "type": "posture",
          "name": "Bent-Over Reverse Flyes",
          "sets": "3",
          "reps": "15-20",
          "equip": "Dumbbells",
          "targetEn": "Rear Delts & Upper Back",
          "targetAr": "الكتف الخلفي وتقويم الظهر",
          "descEn": [
            "Hinge forward, slight knee bend.",
            "Raise dumbbells out to the sides.",
            "Squeeze rear deltoids — fights forward shoulder posture."
          ],
          "descAr": [
            "انحني للأمام من الخصر، الظهر مسطح.",
            "ارفع الدمبلز للجانبين.",
            "علاج جذري لانحناء الكتف للأمام."
          ],
          "focus": "Squeeze upper back and rear delts."
        }
      ]
    },
    {
      "day": "Thursday",
      "id": 4,
      "focus": "Hamstrings, Glutes, Calves, Abs (Legs 2)",
      "exercises": [
        {
          "id": "home4_1",
          "type": "warmup",
          "name": "Leg Prep",
          "sets": "1",
          "reps": "Warmup",
          "equip": "Bodyweight",
          "targetEn": "Hip & Joint Preparation",
          "targetAr": "تحضير الأفخاذ والمفاصل",
          "descEn": [
            "Bodyweight squats and lunges.",
            "Hip openers and rotations."
          ],
          "descAr": [
            "سكوات خفيف بوزن الجسم.",
            "تحريك وفتح عضلات الحوض."
          ],
          "focus": "Ready the joints for heavy leg lifting."
        },
        {
          "id": "home4_2",
          "type": "main",
          "name": "Barbell Back Squat",
          "sets": "3",
          "reps": "6-8",
          "equip": "Barbell",
          "targetEn": "Glutes & Quads",
          "targetAr": "الجلوتس والأفخاذ بقوة كاملة",
          "descEn": [
            "Bar on upper traps, feet shoulder-width.",
            "Squat deep with control — own the weight.",
            "Drive up through heels, squeeze glutes at top."
          ],
          "descAr": [
            "البار بوضعية علوية في الترابيس.",
            "انزل باحترافية وسيطرة كاملة عميقاً.",
            "ادفع بقوة وثبت بنهاية الطلوع."
          ],
          "focus": "Brace your core as if taking a punch during descent."
        },
        {
          "id": "home4_3",
          "type": "main",
          "name": "Bulgarian Split Squat",
          "sets": "3",
          "reps": "8-10/leg",
          "equip": "Dumbbells, Bench",
          "targetEn": "Glutes & Quad Balance",
          "targetAr": "توازن العضلة وفصل الأفخاذ",
          "descEn": [
            "Rear foot elevated on bench behind you.",
            "Drop back knee straight down — deep stretch.",
            "Push through front heel to return up."
          ],
          "descAr": [
            "القدم الخلفية مرفوعة فوق الدكة.",
            "انزل بالركبة مباشرة لتحقيق شد عميق.",
            "ادفع للأعلى بساقك الأمامية للنهوض."
          ],
          "focus": "Do not assist by pushing with the back leg on the bench."
        },
        {
          "id": "home4_4",
          "type": "main",
          "name": "Barbell Romanian Deadlift",
          "sets": "3",
          "reps": "8-10",
          "equip": "Barbell",
          "targetEn": "Hamstring Stretch & Strength",
          "targetAr": "قوة وتمدد الخلفيات",
          "descEn": [
            "Push hips back, bar stays close to legs.",
            "Lower until deep hamstring stretch.",
            "Squeeze glutes hard to stand back up."
          ],
          "descAr": [
            "ادفع حوضك للخلف البار يحك ساقك.",
            "توقف عندما يتم تمدد الساق الخلفية بالكامل.",
            "نهوض بعضلة الجلوتس الصارمة."
          ],
          "focus": "Picture dragging the bar strictly up your shins."
        },
        {
          "id": "home4_5",
          "type": "main",
          "name": "Dumbbell Reverse Lunges",
          "sets": "3",
          "reps": "10/leg",
          "equip": "Dumbbells",
          "targetEn": "Glutes & Stability",
          "targetAr": "الجلوتس وثبات المفاصل",
          "descEn": [
            "Step backward into a deep lunge.",
            "Front shin vertical, back knee near floor.",
            "Push off front heel to return to standing."
          ],
          "descAr": [
            "خطوة تراجعية للخلف ببطء.",
            "انزل والساق الامامي مستقيم وثابت.",
            "انهض عبر ضغط المقدمة."
          ],
          "focus": "Ensure the front knee tracks softly over the toes."
        },
        {
          "id": "home4_6",
          "type": "main",
          "name": "Dumbbell Hip Thrust",
          "sets": "3",
          "reps": "12-15",
          "equip": "Dumbbell, Bench",
          "targetEn": "Gluteus Maximus",
          "targetAr": "عضلة الجلوتس الكبيرة",
          "descEn": [
            "Upper back on bench, feet flat on floor.",
            "Place heavy dumbbell on hips.",
            "Drive hips up, squeeze glutes 2 seconds at top."
          ],
          "descAr": [
            "اعلى الظهر مستند تمامًا على الدكة.",
            "دمبل قوي الملمس ع الحوض.",
            "اعصر للأعلى لثانيتين كقفل للحركة."
          ],
          "focus": "Lift with the hips, do not arch your lower back."
        },
        {
          "id": "home4_7",
          "type": "main",
          "name": "Dumbbell Lateral Lunges",
          "sets": "3",
          "reps": "10/leg",
          "equip": "Dumbbells",
          "targetEn": "Adductors & Glutes",
          "targetAr": "الأفخاذ الجانبية والداخلية",
          "descEn": [
            "Step wide to one side, pushing hips back.",
            "Bend stepping leg, keep other leg straight.",
            "Push off to return — hits inner thighs and glutes."
          ],
          "descAr": [
            "خطوة عرضية واسعة جانبياً.",
            "اثني الساق وتمدد بالساق الآخرى.",
            "انهض بسرعة للوضع المستقيم."
          ],
          "focus": "Sit back deeply onto the lunging side."
        },
        {
          "id": "home4_8",
          "type": "main",
          "name": "Seated Calf Raises",
          "sets": "3",
          "reps": "15-20",
          "equip": "Dumbbells, Bench",
          "targetEn": "Soleus (Lower Calf)",
          "targetAr": "بطات الأرجل السفلية",
          "descEn": [
            "Sit on bench, toes elevated on plate.",
            "Rest dumbbells on lower thighs.",
            "Raise heels as high as possible, squeeze, lower slowly."
          ],
          "descAr": [
            "اجلس والاصابع على طرف طبق.",
            "ارفع بقوة ووزن عالي.",
            "اثبت لحظة وانزل بقوة للتمطيط."
          ],
          "focus": "Achieve a full calf stretch at the very bottom."
        },
        {
          "id": "home4_9",
          "type": "abs",
          "name": "Russian Twists",
          "sets": "3",
          "reps": "20/side",
          "equip": "Dumbbell",
          "targetEn": "Core Rotation & Obliques",
          "targetAr": "دوران العضلات البطنية وشد الخصر",
          "descEn": [
            "Sit with knees bent, lean back slightly, feet up.",
            "Hold dumbbell and rotate torso side to side.",
            "Keep core braced throughout — controlled tempo."
          ],
          "descAr": [
            "دوران جذري ورياضي للجسد.",
            "امسك الدمبل وانقل المركز لليمين واليسار.",
            "إبقاء البطن متصلبًا."
          ],
          "focus": "Rotate from the ribs, not just moving the arms."
        },
        {
          "id": "home4_10",
          "type": "abs",
          "name": "Prone Neck Extensions",
          "sets": "3",
          "reps": "15-20",
          "equip": "Bodyweight",
          "targetEn": "Deep Cervical Extensors",
          "targetAr": "عضلات مؤخرة الرقبة السفلية",
          "descEn": [
            "Lie face down on the floor.",
            "Lift head off the ground slightly.",
            "Hold briefly and lower with control."
          ],
          "descAr": [
            "استلقِ على البطن والجبهة للأرض.",
            "ارفع الجبهة بلطف.",
            "علاج حقيقي لمسكة الجوال المستمرة."
          ],
          "focus": "Squeeze the back of the neck gently."
        }
      ]
    },
    {
      "day": "Friday",
      "id": 5,
      "focus": "REST",
      "exercises": []
    }
  ],
  "images": {
    "home6_2": "img/db_bench.jpg",
    "home6_3": "img/shoulder_press.jpg",
    "home6_4": "img/incline_db_press.jpg",
    "home6_5": "img/lateral_raise.jpg",
    "home6_6": "img/skull_crusher.jpg",
    "home6_7": "img/overhead_tricep.jpg",
    "home6_8": "img/pushup.jpg",
    "home6_9": "img/decline_crunch.png",
    "home6_10": "img/decline_twist.png",
    "home0_2": "img/dumbbell_row.jpg",
    "home0_3": "img/shrug.jpg",
    "home0_4": "img/reverse_fly.jpg",
    "home0_5": "img/curl.jpg",
    "home0_6": "img/curl.jpg",
    "home0_7": "img/curl.jpg",
    "home0_8": "img/shrug.jpg",
    "home0_9": "img/v_ups.png",
    "home0_10": "img/superman.jpg",
    "home1_2": "img/squat.jpg",
    "home1_3": "img/squat.jpg",
    "home1_4": "img/lunge.jpg",
    "home1_5": "img/deadlift.jpg",
    "home1_6": "img/step_up.jpg",
    "home1_7": "img/squat.jpg",
    "home1_8": "img/calf_raise.jpg",
    "home1_9": "img/abs.jpg",
    "home1_10": "img/neck_flexion.jpg",
    "home2_2": "img/barbell_ohp.jpg",
    "home2_3": "img/arnold_press.jpg",
    "home2_4": "img/db_floor_press.jpg",
    "home2_5": "img/front_raise.jpg",
    "home2_6": "img/ez_floor_press.jpg",
    "home2_7": "img/lateral_raise.jpg",
    "home2_8": "img/side_bend.jpg",
    "home2_9": "img/bicycle_crunch.png",
    "home2_10": "img/wall_angel.jpg",
    "home3_2": "img/deadlift.jpg",
    "home3_3": "img/barbell_row.jpg",
    "home3_4": "img/dumbbell_row.jpg",
    "home3_5": "img/shrug.jpg",
    "home3_6": "img/curl.jpg",
    "home3_7": "img/curl.jpg",
    "home3_8": "img/shrug.jpg",
    "home3_9": "img/v_ups.png",
    "home3_10": "img/reverse_fly.jpg",
    "home4_2": "img/squat.jpg",
    "home4_3": "img/bulgarian_split_squat.png",
    "home4_4": "img/deadlift.jpg",
    "home4_5": "img/lunge.jpg",
    "home4_6": "img/hip_thrust.jpg",
    "home4_7": "img/lunge.jpg",
    "home4_8": "img/calf_raise.jpg",
    "home4_9": "img/russian_twist.png",
    "home4_10": "img/prone_neck.jpg"
}
};
