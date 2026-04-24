const CORE_FORTRESS_PROFILE = {
  id: 'core',
  name: 'Core Fortress',
  icon: '🛡️',
  desc: 'PPL with Intense Core Focus',
  routine: [
    {
      day: "Saturday",
      id: 6,
      focus: "PUSH + UPPER CORE",
      exercises: [
        { id: "core6_1", type: "main", name: "Dumbbell Floor Press", sets: "3", reps: "10-12", equip: "Dumbbells", targetEn: "Chest", targetAr: "الصدر", descEn: ["Lie on floor, press up."], descAr: ["استلق على الأرض وادفع للأعلى."], focus: "Keep core tight." },
        { id: "core6_2", type: "main", name: "Seated Dumbbell Shoulder Press", sets: "3", reps: "8-10", equip: "Dumbbells", targetEn: "Shoulders", targetAr: "الكتف", descEn: ["Press overhead."], descAr: ["ادفع للأعلى."], focus: "Don't arch lower back." },
        { id: "core6_3", type: "abs", name: "Hollow Body Hold", sets: "3", reps: "45s", equip: "Bodyweight", targetEn: "Core (Transverse Abdominis)", targetAr: "عضلات البطن العميقة", descEn: ["Lie on back, arms and legs extended and slightly raised.", "Press lower back into the floor."], descAr: ["استلق على ظهرك، ارفع ذراعيك وساقيك قليلاً.", "اضغط بأسفل ظهرك على الأرض."], focus: "Keep lower back flat against the floor." },
        { id: "core6_4", type: "abs", name: "Weighted Crunches", sets: "3", reps: "15-20", equip: "Dumbbell", targetEn: "Upper Abs", targetAr: "عضلات البطن العلوية", descEn: ["Hold dumbbell at chest, crunch up.", "Squeeze abs at the top."], descAr: ["احمل دمبل عند الصدر واطوِ بطنك.", "اعصر عضلات البطن في الأعلى."], focus: "Don't pull on your neck." },
        { id: "core6_5", type: "main", name: "Push-Ups", sets: "3", reps: "Failure", equip: "Bodyweight", targetEn: "Chest & Core", targetAr: "الصدر والبطن", descEn: ["Keep body in a straight line.", "Engage core."], descAr: ["حافظ على جسمك في خط مستقيم.", "شد عضلات البطن."], focus: "Hollow out your core." },
        { id: "core6_6", type: "main", name: "Lateral Raise", sets: "3", reps: "12-15", equip: "Dumbbells", targetEn: "Lateral Deltoids", targetAr: "الكتف الجانبي", descEn: ["Raise arms to sides."], descAr: ["ارفع ذراعيك للجانبين."], focus: "Lead with elbows." },
        { id: "core6_7", type: "posture", name: "Scapular Push-Ups", sets: "2", reps: "15", equip: "Bodyweight", targetEn: "Serratus Anterior", targetAr: "المنشارية الأمامية", descEn: ["Plank position, retract and protract shoulder blades."], descAr: ["في وضعية البلانك، اقبض وابسط لوحي الكتف."], focus: "Keep arms straight." }
      ]
    },
    {
      day: "Sunday",
      id: 0,
      focus: "PULL + OBLIQUES",
      exercises: [
        { id: "core0_1", type: "main", name: "Barbell Row", sets: "3", reps: "8-10", equip: "Barbell", targetEn: "Back", targetAr: "الظهر", descEn: ["Hinge at hips, pull barbell to stomach."], descAr: ["انحنِ من الحوض، اسحب البار نحو بطنك."], focus: "Keep core extremely tight to protect back." },
        { id: "core0_2", type: "main", name: "Dumbbell Row", sets: "3", reps: "10-12", equip: "Dumbbells", targetEn: "Lats", targetAr: "المجنص", descEn: ["Row dumbbell to hip."], descAr: ["اسحب الدمبل نحو الحوض."], focus: "Squeeze lats." },
        { id: "core0_3", type: "abs", name: "Russian Twists", sets: "3", reps: "20", equip: "Dumbbell", targetEn: "Obliques", targetAr: "العضلات الجانبية للبطن", descEn: ["Sit back, rotate torso holding weight."], descAr: ["اجلس بظهر مائل، در بجذعك حاملاً وزناً."], focus: "Rotate from the core, not just arms." },
        { id: "core0_4", type: "abs", name: "Side Plank", sets: "3", reps: "45s/side", equip: "Bodyweight", targetEn: "Obliques", targetAr: "العضلات الجانبية", descEn: ["Hold side plank position."], descAr: ["حافظ على وضعية البلانك الجانبي."], focus: "Keep hips elevated." },
        { id: "core0_5", type: "main", name: "Bicep Curls", sets: "3", reps: "10-12", equip: "Dumbbells", targetEn: "Biceps", targetAr: "البايسبس", descEn: ["Curl weights up."], descAr: ["اثنِ ذراعيك لرفع الوزن."], focus: "Don't swing." },
        { id: "core0_6", type: "posture", name: "Reverse Flyes", sets: "3", reps: "15", equip: "Dumbbells", targetEn: "Rear Delts", targetAr: "الكتف الخلفي", descEn: ["Hinge over, raise arms out."], descAr: ["انحنِ للأمام، ارفع ذراعيك للخارج."], focus: "Squeeze shoulder blades." },
        { id: "core0_7", type: "bonus", name: "Superman Holds", sets: "3", reps: "30s", equip: "Bodyweight", targetEn: "Lower Back", targetAr: "أسفل الظهر", descEn: ["Lie on stomach, raise arms and legs."], descAr: ["استلقِ على بطنك، ارفع ذراعيك وساقيك."], focus: "Squeeze glutes and lower back." }
      ]
    },
    {
      day: "Monday",
      id: 1,
      focus: "LEGS + LOWER CORE",
      exercises: [
        { id: "core1_1", type: "main", name: "Goblet Squat", sets: "3", reps: "10-12", equip: "Dumbbell", targetEn: "Quads & Core", targetAr: "الأرجل الأمامية والبطن", descEn: ["Hold dumbbell at chest, squat down."], descAr: ["احمل دمبل عند الصدر وانزل في سكوات."], focus: "Keep chest up and core braced." },
        { id: "core1_2", type: "main", name: "Romanian Deadlift", sets: "3", reps: "8-10", equip: "Barbell/Dumbbells", targetEn: "Hamstrings", targetAr: "الأرجل الخلفية", descEn: ["Hinge at hips, slight knee bend."], descAr: ["انحنِ من الحوض مع ثني الركبة قليلاً."], focus: "Keep back straight." },
        { id: "core1_3", type: "abs", name: "Hanging Leg Raises", sets: "3", reps: "10-15", equip: "Pull-up Bar", targetEn: "Lower Abs", targetAr: "عضلات البطن السفلية", descEn: ["Hang from bar, raise legs to 90 degrees."], descAr: ["تعلق بالبار وارفع ساقيك لزاوية 90."], focus: "Control the descent, don't swing." },
        { id: "core1_4", type: "abs", name: "Mountain Climbers", sets: "3", reps: "40s", equip: "Bodyweight", targetEn: "Core", targetAr: "البطن", descEn: ["Plank position, drive knees to chest alternately."], descAr: ["وضعية البلانك، ادفع ركبتيك نحو صدرك بالتناوب."], focus: "Keep hips low." },
        { id: "core1_5", type: "main", name: "Lunges", sets: "3", reps: "10/leg", equip: "Dumbbells", targetEn: "Legs", targetAr: "الأرجل", descEn: ["Step forward and drop back knee."], descAr: ["اخطُ للأمام وانزل بركبتك الخلفية."], focus: "Maintain balance." },
        { id: "core1_6", type: "main", name: "Calf Raises", sets: "3", reps: "15-20", equip: "Bodyweight/Dumbbells", targetEn: "Calves", targetAr: "السمانة", descEn: ["Raise up on toes."], descAr: ["ارتفع على أصابع قدميك."], focus: "Full stretch at bottom." },
        { id: "core1_7", type: "posture", name: "Plank", sets: "3", reps: "60s", equip: "Bodyweight", targetEn: "Total Core", targetAr: "البطن بالكامل", descEn: ["Hold forearm plank."], descAr: ["حافظ على وضعية البلانك على الساعدين."], focus: "Squeeze glutes and abs." }
      ]
    },
    {
      day: "Tuesday",
      id: 2,
      focus: "PUSH + UPPER CORE",
      exercises: [
        { id: "core2_1", type: "main", name: "Incline Dumbbell Press", sets: "3", reps: "10-12", equip: "Dumbbells, Bench", targetEn: "Upper Chest", targetAr: "الصدر العلوي", descEn: ["Press dumbbells on incline bench."], descAr: ["ادفع الدمبلز على بنش مائل."], focus: "Control the weight." },
        { id: "core2_2", type: "main", name: "Arnold Press", sets: "3", reps: "10-12", equip: "Dumbbells", targetEn: "Shoulders", targetAr: "الكتف", descEn: ["Rotate wrists as you press."], descAr: ["دوّر معصميك أثناء الدفع."], focus: "Full range of motion." },
        { id: "core2_3", type: "abs", name: "Ab Wheel Rollouts", sets: "3", reps: "10-15", equip: "Ab Wheel", targetEn: "Core", targetAr: "البطن", descEn: ["Roll out from knees, keeping core tight, pull back."], descAr: ["دحرج العجلة للأمام مع شد البطن، ثم اسحب للخلف."], focus: "Do not let lower back sag." },
        { id: "core2_4", type: "abs", name: "V-Ups", sets: "3", reps: "15", equip: "Bodyweight", targetEn: "Total Abs", targetAr: "عضلات البطن", descEn: ["Lie on back, raise arms and legs to touch."], descAr: ["استلقِ، ارفع ذراعيك وساقيك ليتلامسا."], focus: "Keep legs straight." },
        { id: "core2_5", type: "main", name: "Skull Crushers", sets: "3", reps: "10-12", equip: "EZ Bar/Dumbbells", targetEn: "Triceps", targetAr: "الترايسبس", descEn: ["Lower weight to forehead, press up."], descAr: ["انزل بالوزن لجبهتك ثم ادفعه للأعلى."], focus: "Keep elbows tucked." },
        { id: "core2_6", type: "posture", name: "Wall Angels", sets: "3", reps: "15", equip: "Bodyweight", targetEn: "Mid Back", targetAr: "منتصف الظهر", descEn: ["Stand against wall, slide arms up and down."], descAr: ["قف مستنداً للحائط، حرك ذراعيك للأعلى والأسفل."], focus: "Keep arms against wall." }
      ]
    },
    {
      day: "Wednesday",
      id: 3,
      focus: "PULL + OBLIQUES",
      exercises: [
        { id: "core3_1", type: "main", name: "Pull-Ups / Lat Pulldowns", sets: "3", reps: "8-10", equip: "Bar/Machine", targetEn: "Lats", targetAr: "المجنص", descEn: ["Pull body/weight up to chest."], descAr: ["اسحب جسمك/الوزن لصدرك."], focus: "Drive elbows down." },
        { id: "core3_2", type: "main", name: "Barbell Shrugs", sets: "3", reps: "15", equip: "Barbell", targetEn: "Traps", targetAr: "الترابيس", descEn: ["Shrug shoulders up."], descAr: ["ارفع كتفيك للأعلى."], focus: "Squeeze at top." },
        { id: "core3_3", type: "abs", name: "Woodchoppers", sets: "3", reps: "15/side", equip: "Dumbbell/Cable", targetEn: "Obliques", targetAr: "العضلات الجانبية", descEn: ["Pull weight diagonally across body."], descAr: ["اسحب الوزن بشكل قطري عبر جسمك."], focus: "Rotate torso." },
        { id: "core3_4", type: "abs", name: "Bicycle Crunches", sets: "3", reps: "20/side", equip: "Bodyweight", targetEn: "Obliques", targetAr: "العضلات الجانبية", descEn: ["Opposite elbow to knee."], descAr: ["المرفق لركبة الساق المعاكسة."], focus: "Controlled twist." },
        { id: "core3_5", type: "main", name: "Hammer Curls", sets: "3", reps: "10-12", equip: "Dumbbells", targetEn: "Biceps/Brachialis", targetAr: "البايسبس", descEn: ["Curl with neutral grip."], descAr: ["اثنِ ذراعيك بقبضة محايدة."], focus: "Squeeze at top." },
        { id: "core3_6", type: "posture", name: "Face Pulls", sets: "3", reps: "15", equip: "Cable/Band", targetEn: "Rear Delts", targetAr: "الكتف الخلفي", descEn: ["Pull band/cable to face."], descAr: ["اسحب السير نحو وجهك."], focus: "Squeeze upper back." }
      ]
    },
    {
      day: "Thursday",
      id: 4,
      focus: "LEGS + TOTAL CORE",
      exercises: [
        { id: "core4_1", type: "main", name: "Bulgarian Split Squat", sets: "3", reps: "8-10/leg", equip: "Dumbbells", targetEn: "Quads & Glutes", targetAr: "الأرجل الأمامية والأرداف", descEn: ["One foot on bench, squat down."], descAr: ["قدم على البنش، وانزل لأسفل."], focus: "Keep torso upright." },
        { id: "core4_2", type: "main", name: "Hip Thrusts", sets: "3", reps: "10-12", equip: "Barbell/Dumbbell", targetEn: "Glutes", targetAr: "الأرداف", descEn: ["Bridge hips up."], descAr: ["ارفع الحوض للأعلى."], focus: "Squeeze glutes hard." },
        { id: "core4_3", type: "abs", name: "L-Sit Holds", sets: "3", reps: "20s", equip: "Floor/Parallettes", targetEn: "Core", targetAr: "البطن", descEn: ["Hold body up with arms, legs straight out."], descAr: ["ارفع جسمك بذراعيك وساقاك مستقيمتان للأمام."], focus: "Keep legs straight." },
        { id: "core4_4", type: "abs", name: "Dead Bugs", sets: "3", reps: "12/side", equip: "Bodyweight", targetEn: "Core", targetAr: "البطن", descEn: ["Lower opposite arm and leg."], descAr: ["انزل الذراع والساق المتعاكستين."], focus: "Lower back pressed into floor." },
        { id: "core4_5", type: "main", name: "Calf Raises", sets: "3", reps: "15-20", equip: "Dumbbells", targetEn: "Calves", targetAr: "السمانة", descEn: ["Raise up on toes."], descAr: ["ارتفع على الأصابع."], focus: "Pause at top." },
        { id: "core4_6", type: "posture", name: "Pallof Press", sets: "3", reps: "12/side", equip: "Band/Cable", targetEn: "Anti-Rotation Core", targetAr: "مقاومة الدوران", descEn: ["Press band straight out, resist twisting."], descAr: ["ادفع السير للأمام وقاوم الدوران."], focus: "Do not let torso twist." }
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
    // We can reuse PPL images if names match or leave empty to prompt user.
  }
};
