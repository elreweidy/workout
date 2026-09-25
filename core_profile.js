const CORE_FORTRESS_PROFILE = {
  id: 'core',
  name: 'Core Fortress',
  icon: '🛡️',
  version: 2,
  desc: 'Intense 6-Day Pure Core Split',
  routine: [
    {
      day: "Saturday",
      id: 6,
      focus: "FLEXION & ANTI-EXTENSION",
      exercises: [
        { id: "core6_4", type: "main", name: "Ab Wheel Rollouts", sets: "4", reps: "8-12", equip: "Ab Wheel", targetEn: "Total Core", targetAr: "البطن بالكامل", descEn: ["Roll forward from knees.", "Pull back using abs, not arms."], descAr: ["دحرج العجلة للأمام من الركبتين.", "اسحب للخلف باستخدام بطنك وليس ذراعيك."], focus: "Keep spine slightly rounded." },
        { id: "core6_2", type: "abs", name: "Weighted Crunches", sets: "4", reps: "15-20", equip: "Dumbbell/Plate", targetEn: "Upper Abs", targetAr: "عضلات البطن العلوية", descEn: ["Hold weight at chest.", "Crunch up, squeezing abs hard."], descAr: ["احمل الوزن عند صدرك.", "اطوِ بطنك للأعلى واعصر العضلات."], focus: "Keep neck neutral." },
        { id: "core6_3", type: "abs", name: "Reverse Crunches", sets: "3", reps: "15", equip: "Bodyweight", targetEn: "Lower Abs", targetAr: "عضلات البطن السفلية", descEn: ["Lie on back, bring knees toward chest.", "Lift pelvis slightly off floor."], descAr: ["استلق، اسحب ركبتيك نحو صدرك.", "ارفع حوضك قليلاً عن الأرض."], focus: "Control the descent." },
        { id: "core6_1", type: "abs", name: "Hollow Body Hold", sets: "3", reps: "30-45s", equip: "Bodyweight", targetEn: "Core (Transverse)", targetAr: "عضلات البطن العميقة", descEn: ["Lie on back, press lower back into floor.", "Extend arms and legs, hold."], descAr: ["استلق على ظهرك واضغط أسفله على الأرض.", "مد ذراعيك وساقيك وحافظ على الوضعية."], focus: "Never let lower back arch." }
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
        { id: "core1_3", type: "abs", name: "Dumbbell Suitcase Carry", sets: "3", reps: "40s/side", equip: "Dumbbell", targetEn: "Obliques & QL (Anti-Lean)", targetAr: "الخواصر وعضلات جانب الظهر", descEn: ["Hold one heavy dumbbell at your side like a suitcase.", "Walk slowly, tall and level — switch hands halfway."], descAr: ["احمل دمبل ثقيل بيد واحدة بجانبك كأنه حقيبة.", "امشِ ببطء بقامة مستقيمة — بدّل اليد في منتصف الوقت."], focus: "Resist leaning toward the weight." },
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
        { id: "core4_1", type: "main", name: "RKC Plank", sets: "3", reps: "20-30s", equip: "Bodyweight", targetEn: "Total Core", targetAr: "البطن بالكامل", descEn: ["Forearm plank, elbows under the eyes, fists clenched.", "Pull elbows toward toes and squeeze glutes, quads and abs as hard as possible."], descAr: ["حافظ على وضعية البلانك الصارمة.", "اعصر الأرداف والأرجل الأمامية والبطن."], focus: "Maximum tension beats a long, lazy hold." },
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
    "core0_1": "img/russian_twist.jpg",
    
    "core1_1": "img/abs.jpg",
    "core1_2": "img/superman.jpg",
    "core1_3": "img/side_bend.jpg",
    "core2_1": "img/v_ups.jpg",
    "core2_2": "img/abs.jpg",
    "core2_3": "img/abs.jpg",
    "core2_4": "img/v_ups.jpg",
    "core3_1": "img/bicycle_crunch.jpg",
    "core3_3": "img/abs.jpg",
    "core4_1": "img/abs.jpg",
    "core4_3": "img/abs.jpg",
    "core4_4": "img/abs.jpg"
}
};

const KHADIJA_PROFILE = {
  id: 'khadija',
  name: "🌸 Khadija's Home Glow",
  icon: '🌸',
  desc: 'Gentle 6-Day Bodyweight Routine',
  routine: [
    {
      day: "Saturday",
      id: 6,
      focus: "Cardio & Core",
      exercises: [
        {
          id: "khadija6_1",
          type: "warmup",
          name: "Gentle Full-Body Warm-up",
          sets: "1",
          reps: "5 mins",
          equip: "Bodyweight",
          targetEn: "Full Body Mobility",
          targetAr: "حركة الجسم بالكامل",
          descEn: [
            "Perform light head tilts, arm swings, and shoulder rolls.",
            "Take slow, deep breaths to activate the nervous system."
          ],
          descAr: [
            "قومي بإمالة الرأس الخفيفة، أرجحة الذراعين، ودوران الكتفين.",
            "خذي أنفاساً عميقة وبطيئة لتنشيط الجهاز العصبي."
          ],
          focus: "Focus on gentle breathing and starting light."
        },
        {
          id: "khadija6_2",
          type: "main",
          name: "Modified Jumping Jacks",
          sets: "3",
          reps: "15-20",
          equip: "Bodyweight",
          targetEn: "Cardio & Coordination",
          targetAr: "الكارديو والتنسيق الحركي",
          descEn: [
            "Step one foot out to the side while raising your arms overhead.",
            "Step back to center and repeat on the other side. Low impact."
          ],
          descAr: [
            "اخطوي بقدم واحدة للجانب مع رفع ذراعيك للأعلى.",
            "عودي للمنتصف وكرري على الجانب الآخر. تأثير منخفض ومناسب للمفاصل."
          ],
          focus: "Keep a steady rhythm and coordinate arms and legs."
        },
        {
          id: "khadija6_3",
          type: "abs",
          name: "Standing Torso Twists",
          sets: "3",
          reps: "15/side",
          equip: "Bodyweight",
          targetEn: "Obliques & Spine Flexibility",
          targetAr: "العضلات الجانبية ومرونة العمود الفقري",
          descEn: [
            "Stand with feet shoulder-width apart, hands on hips or at chest.",
            "Slowly rotate your torso side to side, squeezing your core."
          ],
          descAr: [
            "قفي بقدمين متباعدتين بعرض الكتفين، ويديك على حوضك أو صدرك.",
            "أديري جذعك ببطء من جانب لآخر مع عصر عضلات البطن الجانبية."
          ],
          focus: "Move from the core, not just shoulders."
        },
        {
          id: "khadija6_4",
          type: "abs",
          name: "Knee-Supported Side Plank",
          sets: "3",
          reps: "20-30s/side",
          equip: "Bodyweight",
          targetEn: "Obliques & Deep Core",
          targetAr: "العضلات الجانبية وعضلات البطن العميقة",
          descEn: [
            "Lie on your side, supporting yourself on your forearm.",
            "Bend knees at 90 degrees and lift hips, forming a straight line."
          ],
          descAr: [
            "استلقي على جانبكِ مع الاستناد على الساعد.",
            "اثني الركبتين بزاوية 90 درجة وارفعي الحوض لتشكيل خط مستقيم."
          ],
          focus: "Keep hips high and core tight. Do not sag."
        },
        {
          id: "khadija6_5",
          type: "bonus",
          name: "Bird-Dog Stability Hold (Optional)",
          sets: "2-3",
          reps: "10/side",
          equip: "Bodyweight",
          targetEn: "Core Stability & Alignment",
          targetAr: "استقرار الظهر والبطن",
          descEn: [
            "On all fours, slowly extend opposite arm and leg.",
            "Keep hips level and back completely flat. Hold for 2 seconds."
          ],
          descAr: [
            "على أطرافك الأربعة، مدي ذراعاً وساقاً متعاكستين ببطء.",
            "حافظي على استواء الحوض واستقامة الظهر. اثبتي لثانيتين."
          ],
          focus: "Do not arch your back or tilt your hips."
        },
        {
          id: "khadija6_6",
          type: "bonus",
          name: "Glute Rainbows (Optional)",
          sets: "2-3",
          reps: "12/side",
          equip: "Bodyweight",
          targetEn: "Glutes & Core Stability",
          targetAr: "عضلات الأرداف والبطن",
          descEn: [
            "On all fours, extend one leg straight back.",
            "Draw a wide semi-circle arc in the air with your foot, side to side."
          ],
          descAr: [
            "على أطرافك الأربعة، مدي ساقاً واحدة للخلف باستقامة.",
            "ارسمي نصف دائرة واسعة في الهواء بقدمك من جانب لآخر."
          ],
          focus: "Move strictly from the hip without twisting the torso."
        }
      ]
    },
    {
      day: "Sunday",
      id: 0,
      focus: "Upper Body & Posture",
      exercises: [
        {
          id: "khadija0_1",
          type: "main",
          name: "Wall Push-Ups",
          sets: "3",
          reps: "10-12",
          equip: "Bodyweight",
          targetEn: "Chest, Front Shoulders & Arms",
          targetAr: "الصدر، مقدمة الأكتاف والذراعين",
          descEn: [
            "Place hands on the wall at shoulder height and width.",
            "Bend elbows to lower your chest toward the wall, then push back."
          ],
          descAr: [
            "ضعي يديك على الحائط بمستوى الكتفين وبعرضهما.",
            "اثني المرفقين لخفض الصدر نحو الحائط، ثم ادفعي للخلف."
          ],
          focus: "Keep body in a perfectly straight line."
        },
        {
          id: "khadija0_2",
          type: "main",
          name: "Standing Arm Circles",
          sets: "3",
          reps: "20 circles",
          equip: "Bodyweight",
          targetEn: "Shoulders & Rotator Cuff",
          targetAr: "الأكتاف ومفاصلها",
          descEn: [
            "Extend arms out to the sides at shoulder height.",
            "Make small, controlled circles forward, then backward."
          ],
          descAr: [
            "مدي ذراعيك جانباً بمستوى الكتفين.",
            "ارسمي دوائر صغيرة ومحكومة للأمام، ثم للخلف."
          ],
          focus: "Keep shoulders down away from ears. Tighten your core."
        },
        {
          id: "khadija0_3",
          type: "posture",
          name: "Prone Cobra Hold",
          sets: "3",
          reps: "30s",
          equip: "Bodyweight",
          targetEn: "Lower & Upper Back Posture",
          targetAr: "تقويم أسفل وأعلى الظهر",
          descEn: [
            "Lie face down on a mat, arms at your sides.",
            "Lift chest and hands off the floor, rotating thumbs to the ceiling."
          ],
          descAr: [
            "استلقي على بطنكِ على السجادة واليدين بجانبكِ.",
            "ارفعي الصدر واليدين عن الأرض مع تدوير الإبهامين للأعلى."
          ],
          focus: "Squeeze shoulder blades together and keep eyes on floor."
        },
        {
          id: "khadija0_4",
          type: "posture",
          name: "Wall Angels",
          sets: "3",
          reps: "10-12",
          equip: "Bodyweight",
          targetEn: "Upper Back & Posture",
          targetAr: "استقامة الظهر والكتفين",
          descEn: [
            "Stand with back, head, and hips against the wall.",
            "Slide arms up and down the wall slowly, keeping contact."
          ],
          descAr: [
            "قفي برأسكِ وظهركِ وحوضكِ ملاصقين للجدار.",
            "زلقي ذراعيكِ على الحائط للأعلى والأسفل ببطء مع استمرار التلامس."
          ],
          focus: "Ensure wrists and elbows do not pull away from wall."
        },
        {
          id: "khadija0_5",
          type: "bonus",
          name: "Doorway Chest Stretch (Optional)",
          sets: "2-3",
          reps: "30s Hold",
          equip: "Bodyweight",
          targetEn: "Chest & Shoulder Opening",
          targetAr: "فتح الصدر والكتفين",
          descEn: [
            "Place forearms on a doorway frame at 90 degrees.",
            "Gently step forward until you feel a comfortable stretch in your chest."
          ],
          descAr: [
            "ضعي الساعدين على إطار باب مفتوح بزاوية 90 درجة.",
            "اخطوي للأمام بلطف حتى تشعري بتمدد مريح في عضلات الصدر."
          ],
          focus: "Keep breathing slowly. Do not bounce."
        },
        {
          id: "khadija0_6",
          type: "bonus",
          name: "Seated Hand Pressures (Optional)",
          sets: "3",
          reps: "15s Press",
          equip: "Bodyweight",
          targetEn: "Chest & Arms Isometric Activation",
          targetAr: "تنشيط الصدر والذراعين",
          descEn: [
            "Sit or stand tall, place palms together at chest level (prayer pose).",
            "Press hands together as hard as comfortable, engaging chest and arms."
          ],
          descAr: [
            "اجلسي أو قفي مستقيمة، وضعي الكفين معاً أمام الصدر.",
            "اضغطي الكفين معاً بقوة مريحة لتنشيط الصدر والذراعين."
          ],
          focus: "Keep shoulders down and maintain steady pressure."
        }
      ]
    },
    {
      day: "Monday",
      id: 1,
      focus: "Lower Body & Balance",
      exercises: [
        {
          id: "khadija1_1",
          type: "main",
          name: "Chair Squats",
          sets: "3",
          reps: "10-12",
          equip: "Bodyweight",
          targetEn: "Quadriceps & Glutes",
          targetAr: "الأفخاذ الأمامية والأرداف",
          descEn: [
            "Stand in front of a chair, feet shoulder-width.",
            "Squat down until glutes gently touch the seat, then stand up."
          ],
          descAr: [
            "قفي أمام الكرسي مع قدمين بعرض الكتفين.",
            "انزلي لأسفل بالسكوات حتى تلمس الأرداف المقعد بلطف، ثم انهضي."
          ],
          focus: "Keep knees tracking over toes and chest high."
        },
        {
          id: "khadija1_2",
          type: "main",
          name: "Glute Bridges",
          sets: "3",
          reps: "12-15",
          equip: "Bodyweight",
          targetEn: "Glutes & Hamstrings",
          targetAr: "عضلات الأرداف والخلفيات",
          descEn: [
            "Lie on your back, knees bent, feet flat on the mat.",
            "Squeeze glutes and lift hips toward the ceiling, then lower."
          ],
          descAr: [
            "استلقي على ظهركِ، الركبتين مثنيتين، والأقدام مسطحة.",
            "اعصري عضلات المؤخرة وارفعي الحوض للأعلى، ثم انزلي ببطء."
          ],
          focus: "Push through your heels. Keep ribs flat."
        },
        {
          id: "khadija1_3",
          type: "bonus",
          name: "Standing Calf Raises",
          sets: "3",
          reps: "15-20",
          equip: "Bodyweight",
          targetEn: "Calves & Ankle Stability",
          targetAr: "عضلة السمانة وثبات الكاحل",
          descEn: [
            "Stand tall, feet hip-width.",
            "Rise up onto the balls of your feet, hold, then lower."
          ],
          descAr: [
            "قفي مستقيمة مع قدمين بعرض الحوض.",
            "ارتفعي على أطراف أصابع قدميكِ، اثبتي لحظة، ثم انزلي ببطء."
          ],
          focus: "Rise high on big toes. Control descent."
        },
        {
          id: "khadija1_4",
          type: "bonus",
          name: "Single-Leg Balance Hold",
          sets: "3",
          reps: "30s/leg",
          equip: "Bodyweight",
          targetEn: "Balance, Ankles, Core Stability",
          targetAr: "التوازن، الكاحل وثبات البطن",
          descEn: [
            "Stand tall, raise one knee to hip height.",
            "Hold position, engaging core to stabilize."
          ],
          descAr: [
            "قفي مستقيمة، وارفعي ركبة واحدة لمستوى الحوض.",
            "حافظي على الوضعية مع شد البطن للتوازن."
          ],
          focus: "Keep standing knee unlocked slightly. Look at a still point."
        },
        {
          id: "khadija1_5",
          type: "bonus",
          name: "Standing Side Leg Raises (Optional)",
          sets: "3",
          reps: "12-15/leg",
          equip: "Bodyweight",
          targetEn: "Outer Hips & Balance",
          targetAr: "الأرداف الجانبية والتوازن",
          descEn: [
            "Stand tall near a wall or chair for light balance support.",
            "Slowly raise your outer leg to the side, then lower with control."
          ],
          descAr: [
            "قفي مستقيمة بالقرب من جدار أو كرسي لدعم التوازن الخفيف.",
            "ارفعي ساقكِ الخارجية ببطء للجانب، ثم انزليها ببطء وتحكم."
          ],
          focus: "Keep your torso perfectly upright. Do not lean."
        },
        {
          id: "khadija1_6",
          type: "bonus",
          name: "Wall Sit Hold (Optional)",
          sets: "3",
          reps: "20-30s Hold",
          equip: "Bodyweight",
          targetEn: "Quadriceps Endurance",
          targetAr: "قوة وتحمل الأفخاذ",
          descEn: [
            "Lean back against a flat wall, feet about 2 feet away.",
            "Slide down until thighs are parallel to the floor, holding the sit."
          ],
          descAr: [
            "اسندي ظهركِ على جدار مسطح، وقدميكِ على بعد خطوتين.",
            "انزلقي لأسفل حتى تتوازي الأفخاذ مع الأرض، وحافظي على الجلوس."
          ],
          focus: "Press your lower back firmly into the wall."
        }
      ]
    },
    {
      day: "Tuesday",
      id: 2,
      focus: "Cardio & Core",
      exercises: [
        {
          id: "khadija2_1",
          type: "warmup",
          name: "Gentle Full-Body Warm-up",
          sets: "1",
          reps: "5 mins",
          equip: "Bodyweight",
          targetEn: "Full Body Mobility",
          targetAr: "حركة الجسم بالكامل",
          descEn: [
            "Perform light head tilts, arm swings, and shoulder rolls.",
            "Take slow, deep breaths to activate the nervous system."
          ],
          descAr: [
            "قومي بإمالة الرأس الخفيفة، أرجحة الذراعين، ودوران الكتفين.",
            "خذي أنفاساً عميقة وبطيئة لتنشيط الجهاز العصبي."
          ],
          focus: "Focus on gentle breathing and starting light."
        },
        {
          id: "khadija2_2",
          type: "main",
          name: "Modified Jumping Jacks",
          sets: "3",
          reps: "15-20",
          equip: "Bodyweight",
          targetEn: "Cardio & Coordination",
          targetAr: "الكارديو والتنسيق الحركي",
          descEn: [
            "Step one foot out to the side while raising your arms overhead.",
            "Step back to center and repeat on the other side. Low impact."
          ],
          descAr: [
            "اخطوي بقدم واحدة للجانب مع رفع ذراعيك للأعلى.",
            "عودي للمنتصف وكرري على الجانب الآخر. تأثير منخفض ومناسب للمفاصل."
          ],
          focus: "Keep a steady rhythm and coordinate arms and legs."
        },
        {
          id: "khadija2_3",
          type: "abs",
          name: "Standing Torso Twists",
          sets: "3",
          reps: "15/side",
          equip: "Bodyweight",
          targetEn: "Obliques & Spine Flexibility",
          targetAr: "العضلات الجانبية ومرونة العمود الفقري",
          descEn: [
            "Stand with feet shoulder-width apart, hands on hips or at chest.",
            "Slowly rotate your torso side to side, squeezing your core."
          ],
          descAr: [
            "قفي بقدمين متباعدتين بعرض الكتفين، ويديك على حوضك أو صدرك.",
            "أديري جذعك ببطء من جانب لآخر مع عصر عضلات البطن الجانبية."
          ],
          focus: "Move from the core, not just shoulders."
        },
        {
          id: "khadija2_4",
          type: "abs",
          name: "Knee-Supported Side Plank",
          sets: "3",
          reps: "20-30s/side",
          equip: "Bodyweight",
          targetEn: "Obliques & Deep Core",
          targetAr: "العظلاّت الجانبية وعضلات البطن العميقة",
          descEn: [
            "Lie on your side, supporting yourself on your forearm.",
            "Bend knees at 90 degrees and lift hips, forming a straight line."
          ],
          descAr: [
            "استلقي على جانبكِ مع الاستناد على الساعد.",
            "اثني الركبتين بزاوية 90 درجة وارفعي الحوض لتشكيل خط مستقيم."
          ],
          focus: "Keep hips high and core tight."
        },
        {
          id: "khadija2_5",
          type: "bonus",
          name: "Bird-Dog Stability Hold (Optional)",
          sets: "2-3",
          reps: "10/side",
          equip: "Bodyweight",
          targetEn: "Core Stability & Alignment",
          targetAr: "استقرار الظهر والبطن",
          descEn: [
            "On all fours, slowly extend opposite arm and leg.",
            "Keep hips level and back completely flat. Hold for 2 seconds."
          ],
          descAr: [
            "على أطرافك الأربعة، مدي ذراعاً وساقاً متعاكستين ببطء.",
            "حافظي على استواء الحوض واستقامة الظهر. اثبتي لثانيتين."
          ],
          focus: "Do not arch your back or tilt your hips."
        },
        {
          id: "khadija2_6",
          type: "bonus",
          name: "Glute Rainbows (Optional)",
          sets: "2-3",
          reps: "12/side",
          equip: "Bodyweight",
          targetEn: "Glutes & Core Stability",
          targetAr: "عضلات الأرداف والبطن",
          descEn: [
            "On all fours, extend one leg straight back.",
            "Draw a wide semi-circle arc in the air with your foot, side to side."
          ],
          descAr: [
            "على أطرافك الأربعة، مدي ساقاً واحدة للخلف باستقامة.",
            "ارسمي نصف دائرة واسعة في الهواء بقدمك من جانب لآخر."
          ],
          focus: "Move strictly from the hip without twisting the torso."
        }
      ]
    },
    {
      day: "Wednesday",
      id: 3,
      focus: "Upper Body & Posture",
      exercises: [
        {
          id: "khadija3_1",
          type: "main",
          name: "Wall Push-Ups",
          sets: "3",
          reps: "10-12",
          equip: "Bodyweight",
          targetEn: "Chest, Front Shoulders & Arms",
          targetAr: "الصدر، مقدمة الأكتاف والذراعين",
          descEn: [
            "Place hands on the wall at shoulder height and width.",
            "Bend elbows to lower your chest toward the wall, then push back."
          ],
          descAr: [
            "ضعي يديك على الحائط بمستوى الكتفين وبعرضهما.",
            "اثني المرفقين لخفض الصدر نحو الحائط، ثم ادفعي للخلف."
          ],
          focus: "Keep body in a perfectly straight line."
        },
        {
          id: "khadija3_2",
          type: "main",
          name: "Standing Arm Circles",
          sets: "3",
          reps: "20 circles",
          equip: "Bodyweight",
          targetEn: "Shoulders & Rotator Cuff",
          targetAr: "الأكتاف ومفاصلها",
          descEn: [
            "Extend arms out to the sides at shoulder height.",
            "Make small, controlled circles forward, then backward."
          ],
          descAr: [
            "مدي ذراعيك جانباً بمستوى الكتفين.",
            "ارسمي دوائر صغيرة ومحكومة للأمام، ثم للخلف."
          ],
          focus: "Keep shoulders down away from ears. Tighten your core."
        },
        {
          id: "khadija3_3",
          type: "posture",
          name: "Prone Cobra Hold",
          sets: "3",
          reps: "30s",
          equip: "Bodyweight",
          targetEn: "Lower & Upper Back Posture",
          targetAr: "تقويم أسفل وأعلى الظهر",
          descEn: [
            "Lie face down on a mat, arms at your sides.",
            "Lift chest and hands off the floor, rotating thumbs to the ceiling."
          ],
          descAr: [
            "استلقي على بطنكِ على السجادة واليدين بجانبكِ.",
            "ارفعي الصدر واليدين عن الأرض مع تدوير الإبهامين للأعلى."
          ],
          focus: "Squeeze shoulder blades together and keep eyes on floor."
        },
        {
          id: "khadija3_4",
          type: "posture",
          name: "Wall Angels",
          sets: "3",
          reps: "10-12",
          equip: "Bodyweight",
          targetEn: "Upper Back & Posture",
          targetAr: "استقامة الظهر والكتفين",
          descEn: [
            "Stand with back, head, and hips against the wall.",
            "Slide arms up and down the wall slowly, keeping contact."
          ],
          descAr: [
            "قفي برأسكِ وظهركِ وحوضكِ ملاصقين للجدار.",
            "زلقي ذراعيكِ على الحائط للأعلى والأسفل ببطء مع استمرار التلامس."
          ],
          focus: "Ensure wrists and elbows do not pull away from wall."
        },
        {
          id: "khadija3_5",
          type: "bonus",
          name: "Doorway Chest Stretch (Optional)",
          sets: "2-3",
          reps: "30s Hold",
          equip: "Bodyweight",
          targetEn: "Chest & Shoulder Opening",
          targetAr: "فتح الصدر والكتفين",
          descEn: [
            "Place forearms on a doorway frame at 90 degrees.",
            "Gently step forward until you feel a comfortable stretch in your chest."
          ],
          descAr: [
            "ضعي الساعدين على إطار باب مفتوح بزاوية 90 درجة.",
            "اخطوي للأمام بلطف حتى تشعري بتمدد مريح في عضلات الصدر."
          ],
          focus: "Keep breathing slowly. Do not bounce."
        },
        {
          id: "khadija3_6",
          type: "bonus",
          name: "Seated Hand Pressures (Optional)",
          sets: "3",
          reps: "15s Press",
          equip: "Bodyweight",
          targetEn: "Chest & Arms Isometric Activation",
          targetAr: "تنشيط الصدر والذراعين",
          descEn: [
            "Sit or stand tall, place palms together at chest level (prayer pose).",
            "Press hands together as hard as comfortable, engaging chest and arms."
          ],
          descAr: [
            "اجلسي أو قفي مستقيمة، وضعي الكفين معاً أمام الصدر.",
            "اضغطي الكفين معاً بقوة مريحة لتنشيط الصدر والذراعين."
          ],
          focus: "Keep shoulders down and maintain steady pressure."
        }
      ]
    },
    {
      day: "Thursday",
      id: 4,
      focus: "Lower Body & Balance",
      exercises: [
        {
          id: "khadija4_1",
          type: "main",
          name: "Chair Squats",
          sets: "3",
          reps: "10-12",
          equip: "Bodyweight",
          targetEn: "Quadriceps & Glutes",
          targetAr: "الأفخاذ الأمامية والأرداف",
          descEn: [
            "Stand in front of a chair, feet shoulder-width.",
            "Squat down until glutes gently touch the seat, then stand up."
          ],
          descAr: [
            "قفي أمام الكرسي مع قدمين بعرض الكتفين.",
            "انزلي لأسفل بالسكوات حتى تلمس الأرداف المقعد بلطف، ثم انهضي."
          ],
          focus: "Keep knees tracking over toes and chest high."
        },
        {
          id: "khadija4_2",
          type: "main",
          name: "Glute Bridges",
          sets: "3",
          reps: "12-15",
          equip: "Bodyweight",
          targetEn: "Glutes & Hamstrings",
          targetAr: "عضلات الأرداف والخلفيات",
          descEn: [
            "Lie on your back, knees bent, feet flat on the mat.",
            "Squeeze glutes and lift hips toward the ceiling, then lower."
          ],
          descAr: [
            "استلقي على ظهركِ، الركبتين مثنيتين، والأقدام مسطحة.",
            "اعصري عضلات المؤخرة وارفعي الحوض للأعلى، ثم انزلي ببطء."
          ],
          focus: "Push through your heels."
        },
        {
          id: "khadija4_3",
          type: "bonus",
          name: "Standing Calf Raises",
          sets: "3",
          reps: "15-20",
          equip: "Bodyweight",
          targetEn: "Calves & Ankle Stability",
          targetAr: "عضلة السمانة وثبات الكاحل",
          descEn: [
            "Stand tall, feet hip-width.",
            "Rise up onto the balls of your feet, hold, then lower."
          ],
          descAr: [
            "قفي مستقيمة مع قدمين بعرض الحوض.",
            "ارتفعي على أطراف أصابع قدميكِ، اثبتي لحظة، ثم انزلي ببطء."
          ],
          focus: "Rise high on big toes."
        },
        {
          id: "khadija4_4",
          type: "bonus",
          name: "Single-Leg Balance Hold",
          sets: "3",
          reps: "30s/leg",
          equip: "Bodyweight",
          targetEn: "Balance, Ankles, Core Stability",
          targetAr: "التوازن، الكاحل وثبات البطن",
          descEn: [
            "Stand tall, raise one knee to hip height.",
            "Hold position, engaging core to stabilize."
          ],
          descAr: [
            "قفي مستقيمة، وارفعي ركبة واحدة لمستوى الحوض.",
            "حافظي على الوضعية مع شد البطن للتوازن."
          ],
          focus: "Keep standing knee unlocked slightly."
        },
        {
          id: "khadija4_5",
          type: "bonus",
          name: "Standing Side Leg Raises (Optional)",
          sets: "3",
          reps: "12-15/leg",
          equip: "Bodyweight",
          targetEn: "Outer Hips & Balance",
          targetAr: "الأرداف الجانبية والتوازن",
          descEn: [
            "Stand tall near a wall or chair for light balance support.",
            "Slowly raise your outer leg to the side, then lower with control."
          ],
          descAr: [
            "قفي مستقيمة بالقرب من جدار أو كرسي لدعم التوازن الخفيف.",
            "ارفعي ساقكِ الخارجية ببطء للجانب، ثم انزليها ببطء وتحكم."
          ],
          focus: "Keep your torso perfectly upright. Do not lean."
        },
        {
          id: "khadija4_6",
          type: "bonus",
          name: "Wall Sit Hold (Optional)",
          sets: "3",
          reps: "20-30s Hold",
          equip: "Bodyweight",
          targetEn: "Quadriceps Endurance",
          targetAr: "قوة وتحمل الأفخاذ",
          descEn: [
            "Lean back against a flat wall, feet about 2 feet away.",
            "Slide down until thighs are parallel to the floor, holding the sit."
          ],
          descAr: [
            "اسندي ظهركِ على جدار مسطح، وقدميكِ على بعد خطوتين.",
            "انزلقي لأسفل حتى تتوازي الأفخاذ مع الأرض، وحافظي على الجلوس."
          ],
          focus: "Press your lower back firmly into the wall."
        }
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
    "khadija6_1": "img/khadija_warmup.jpg",
    "khadija6_2": "img/khadija_jacks.jpg",
    "khadija6_3": "img/khadija_torso_twists.jpg",
    "khadija6_4": "img/khadija_side_plank.jpg",
    "khadija6_5": "img/khadija_bird_dog.jpg",
    "khadija6_6": "img/khadija_glute_rainbows.jpg",
    "khadija0_1": "img/khadija_wall_pushup.jpg",
    "khadija0_2": "img/khadija_arm_circles.jpg",
    "khadija0_3": "img/khadija_cobra_hold.jpg",
    "khadija0_4": "img/khadija_wall_angels.jpg",
    "khadija0_5": "img/khadija_chest_stretch.jpg",
    "khadija0_6": "img/khadija_hand_pressures.jpg",
    "khadija1_1": "img/khadija_chair_squats.jpg",
    "khadija1_2": "img/khadija_glute_bridges.jpg",
    "khadija1_3": "img/khadija_calf_raises.jpg",
    "khadija1_4": "img/khadija_balance_hold.jpg",
    "khadija1_5": "img/khadija_side_leg_raises.jpg",
    "khadija1_6": "img/khadija_wall_sit.jpg",
    "khadija2_1": "img/khadija_warmup.jpg",
    "khadija2_2": "img/khadija_jacks.jpg",
    "khadija2_3": "img/khadija_torso_twists.jpg",
    "khadija2_4": "img/khadija_side_plank.jpg",
    "khadija2_5": "img/khadija_bird_dog.jpg",
    "khadija2_6": "img/khadija_glute_rainbows.jpg",
    "khadija3_1": "img/khadija_wall_pushup.jpg",
    "khadija3_2": "img/khadija_arm_circles.jpg",
    "khadija3_3": "img/khadija_cobra_hold.jpg",
    "khadija3_4": "img/khadija_wall_angels.jpg",
    "khadija3_5": "img/khadija_chest_stretch.jpg",
    "khadija3_6": "img/khadija_hand_pressures.jpg",
    "khadija4_1": "img/khadija_chair_squats.jpg",
    "khadija4_2": "img/khadija_glute_bridges.jpg",
    "khadija4_3": "img/khadija_calf_raises.jpg",
    "khadija4_4": "img/khadija_balance_hold.jpg",
    "khadija4_5": "img/khadija_side_leg_raises.jpg",
    "khadija4_6": "img/khadija_wall_sit.jpg"
  }
};

