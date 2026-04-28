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
        { id: "core1_1", type: "main", name: "Side Planks", sets: "3", reps: "45-60s/side", equip: "Bodyweight", targetEn: "Obliques & QL", targetAr: "العضلات الجانبية", descEn: ["Hold body in straight line on one forearm.", "Keep hips elevated."], descAr: ["ارفع جسمك في خط مستقيم على ساعد واحد.", "حافظ على ارتفاع حوضك."], focus: "Squeeze glutes." },
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
    // Images will be generated and mapped here
  }
};

