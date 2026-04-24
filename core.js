/* ═══════════════════════════════════════════
   OLYMPUS — CONSTANTS, DATA & ENGINE SYSTEMS
═══════════════════════════════════════════ */
const QUOTES = [
  { t:"No citizen has a right to be an amateur in the matter of physical training. What a disgrace it is for a man to grow old without ever seeing the beauty and strength of which his body is capable.", a:"Socrates" },
  { t:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.", a:"Aristotle" },
  { t:"The impediment to action advances action. What stands in the way becomes the way.", a:"Marcus Aurelius" },
  { t:"Waste no more time arguing about what a good man should be. Be one.", a:"Marcus Aurelius" },
  { t:"He who has a why to live can bear almost any how.", a:"Nietzsche" },
  { t:"Strength does not come from physical capacity. It comes from an indomitable will.", a:"Gandhi" },
  { t:"The successful warrior is the average man, with laser-like focus.", a:"Bruce Lee" },
  { t:"Do not pray for an easy life, pray for the strength to endure a difficult one.", a:"Bruce Lee" },
  { t:"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.", a:"Bruce Lee" },
  { t:"Discipline equals freedom.", a:"Jocko Willink" },
  { t:"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", a:"Muhammad Ali" },
  { t:"The pain you feel today will be the strength you feel tomorrow.", a:"Schwarzenegger" },
  { t:"The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not.", a:"Schwarzenegger" },
  { t:"The worst thing I can be is the same as everybody else. I hate that.", a:"Schwarzenegger" },
  { t:"Blood, sweat, and respect. First two you give, last one you earn.", a:"Dwayne Johnson" },
  { t:"The iron never lies to you. You can walk outside and listen to all kinds of talk. The iron will always kick you the real deal.", a:"Henry Rollins" },
  { t:"The body achieves what the mind believes.", a:"Napoleon Hill" },
  { t:"Your body can stand almost anything. It's your mind that you have to convince.", a:"Unknown" },
  { t:"The hard days are the best because that's when champions are made.", a:"Gabby Douglas" },
  { t:"When you want to succeed as bad as you want to breathe, then you'll be successful.", a:"Eric Thomas" },
  { t:"If you want something you've never had, you must be willing to do something you've never done.", a:"Thomas Jefferson" },
  { t:"What you do today can improve all your tomorrows.", a:"Ralph Marston" },
  { t:"To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.", a:"Buddha" },
  { t:"Physical fitness is the basis of dynamic and creative intellectual activity.", a:"JFK" },
  { t:"Rome wasn't built in a day, but they worked on it every single day.", a:"Unknown" },
  { t:"Champions don't show up to get everything they want; they show up to give everything they have.", a:"Unknown" },
  { t:"Don't count the days, make the days count.", a:"Muhammad Ali" },
  { t:"The only person you are destined to become is the person you decide to be.", a:"Emerson" },
  { t:"Fall seven times, stand up eight.", a:"Japanese Proverb" },
  { t:"A year from now you may wish you had started today.", a:"Karen Lamb" }
];

/* ═══════════════════════════════════════════
   PROFILE SYSTEM — Multiple Routine Support
   Each profile: { id, name, icon, desc, routine: [...days], images: {...} }
═══════════════════════════════════════════ */
const PROFILES = {
  ppl: {
    id: 'ppl',
    name: 'Olympus PPL',
    icon: '⚡',
    desc: 'Push-Pull-Legs Hypertrophy',
    routine: [
  {
    day: "Saturday",
    id: 6,
    focus: "PUSH B — SHOULDERS",
    "exercises": [
      {
        id: "ex6_1",
        type: "main",
        name: "Seated Dumbbell Shoulder Press",
        sets: "3",
        reps: "8-10",
        equip: "Dumbbells, Bench",
        targetEn: "Primary: Anterior Deltoid | Secondary: Triceps",
        targetAr: "الأساسي: الكتف الأمامي | الثانوي: الترايسبس",
        descEn: [
          "Sit upright, dumbbells at shoulder height.",
          "Press straight up, fully extending arms.",
          "Lower under control to ear level."
        ],
        descAr: [
          "اجلس والظهر مستقيم والدمبلز بمستوى الكتف.",
          "ادفع الوزن للأعلى بشكل مستقيم حتى فرد الذراعين.",
          "انزل ببطء وتحكم حتى مستوى الأذن."
        ],
        focus: "Mind-Muscle: Contract the front of your shoulders at the bottom stretch."
      },
      {
        id: "ex6_2",
        type: "main",
        name: "Arnold Press",
        sets: "3",
        reps: "10-12",
        equip: "Dumbbells, Bench",
        targetEn: "Primary: Anterior & Lateral Deltoids",
        targetAr: "الأساسي: الكتف الأمامي والجانبي",
        descEn: [
          "Start with palms facing you at chest level.",
          "Rotate wrists outward as you press up.",
          "Reverse the rotation on the way down."
        ],
        descAr: [
          "ابدأ وكفوف يديك تواجهك عند مستوى الصدر.",
          "قم بتدوير معصميك للخارج أثناء الدفع للأعلى.",
          "اعكس الحركة للنزول."
        ],
        focus: "Mind-Muscle: Focus on the continuous rotation and squeeze."
      },
      {
        id: "ex6_3",
        type: "main",
        name: "Dumbbell Floor Press",
        sets: "3",
        reps: "10-12",
        equip: "Dumbbells",
        targetEn: "Primary: Chest | Secondary: Triceps",
        targetAr: "الأساسي: الصدر | الثانوي: الترايسبس",
        descEn: [
          "Lie on the floor, knees bent.",
          "Press dumbbells up until arms lock out.",
          "Lower until triceps touch the floor, pause, press."
        ],
        descAr: [
          "استلقِ على الأرض والركبتان مثنيتان.",
          "ادفع للأعلى حتى تنفرد الذراعان.",
          "انزل حتى تلامس الترايسبس الأرض، توقف، ثم ادفع."
        ],
        focus: "Mind-Muscle: Let your triceps rest on the floor totally before exploding upward."
      },
      {
        id: "ex6_4",
        type: "main",
        name: "Push-Ups",
        sets: "3",
        reps: "AMRAP",
        equip: "Bodyweight",
        targetEn: "Primary: Chest | Secondary: Front Delts & Core",
        targetAr: "الأساسي: الصدر | الثانوي: الكتف الأمامي والبطن",
        descEn: [
          "Hands slightly wider than shoulders.",
          "Lower chest to the floor with control.",
          "Push back up explosively, core tight."
        ],
        descAr: [
          "اليدين أوسع قليلاً من الكتفين.",
          "انزل بالصدر للأرض بتحكم.",
          "ادفع بقوة للأعلى مع شد البطن."
        ],
        focus: "Mind-Muscle: Imagine trying to slide your hands inward to squeeze the chest."
      },
      {
        id: "ex6_5",
        type: "bonus",
        name: "Dumbbell Lateral Raises",
        sets: "3",
        reps: "12-15",
        equip: "Dumbbells",
        targetEn: "Primary: Lateral Deltoid (Side Shoulder)",
        targetAr: "الأساسي: الكتف الجانبي",
        descEn: [
          "Slight bend in elbows, torso still.",
          "Raise to shoulder height, pinkies slightly up.",
          "Lower slowly — fight gravity on the way down."
        ],
        descAr: [
          "انحناء خفيف في المرفقين، ثبات الجذع.",
          "ارفع لمستوى الكتف مع توجيه الخنصر لأعلى قليلاً.",
          "انزل ببطء شديد مع مقاومة الجاذبية."
        ],
        focus: "Mind-Muscle: Pour the pitchers of water at the top."
      },
      {
        id: "ex6_6",
        type: "bonus",
        name: "Dumbbell Front Raises",
        sets: "3",
        reps: "12-15",
        equip: "Dumbbells",
        targetEn: "Primary: Anterior Deltoid (Front Shoulder)",
        targetAr: "الأساسي: الكتف الأمامي",
        descEn: [
          "Alternate arms or raise both together.",
          "Lift to shoulder height, arms almost straight.",
          "Control the negative — no swinging."
        ],
        descAr: [
          "بالتبادل أو رفع الذراعين معاً.",
          "ارفع لمستوى الكتف، الذراع شبه مستقيمة.",
          "تحكم بالنزول — لا تتأرجح."
        ],
        focus: "Mind-Muscle: Pull the weight up using strictly your front shoulder."
      },
      {
        id: "ex6_7",
        type: "bonus",
        name: "EZ Bar Close-Grip Floor Press",
        sets: "3",
        reps: "10-12",
        equip: "EZ Bar",
        targetEn: "Primary: Triceps (Horseshoe)",
        targetAr: "الأساسي: الترايسبس",
        descEn: [
          "Lie on floor, grip the narrow part of EZ bar.",
          "Press up, squeezing triceps at the top.",
          "Lower until arms touch the floor, pause."
        ],
        descAr: [
          "استلقِ على الأرض وامسك الجزء الضيق من البار.",
          "ادفع للأعلى واعصر الترايسبس في القمة.",
          "انزل حتى تلامس الأرض، وتوقف للحظة."
        ],
        focus: "Mind-Muscle: Completely lock out at the top to pop the tricep."
      },
      {
        id: "ex6_8",
        type: "abs",
        name: "Dumbbell Side Bends",
        sets: "3",
        reps: "15/side",
        equip: "Dumbbell",
        targetEn: "Primary: Obliques (Side Abs)",
        targetAr: "الأساسي: الخواصر",
        descEn: [
          "Hold dumbbell in one hand at your side.",
          "Bend sideways slowly, stretching the oblique.",
          "Contract to return upright, switch sides."
        ],
        descAr: [
          "امسك دومبل بيد واحدة إلى جانبك.",
          "انحني للجانب ببطء لشعور التمدد.",
          "انقبض للعودة للوضع المستقيم، ثم بدل."
        ],
        focus: "Mind-Muscle: Pull your ribcage down to your hip on the contracting side."
      },
      {
        id: "ex6_9",
        type: "posture",
        name: "Scapular Push-Ups",
        sets: "3",
        reps: "12-15",
        equip: "Bodyweight",
        targetEn: "Primary: Serratus Anterior & Posture",
        targetAr: "الأساسي: استقامة الظهر وعضلات الكتف الداخلية",
        descEn: [
          "Hold a high plank, arms locked out.",
          "Let chest sink by retracting shoulder blades.",
          "Push upper back toward ceiling by protracting."
        ],
        descAr: [
          "خذ وضع البلانك العالي بضهر مفرود.",
          "اسمح لصدرك بالنزول عبر ضم لوحي الكتف معًا.",
          "ادفع ظهرك العلوي للเพดان بالدفع للخارج."
        ],
        focus: "Mind-Muscle: Only the shoulder blades move, keep arms perfectly straight."
      }
    ]
  },
  {
    day: "Sunday",
    id: 0,
    focus: "PULL B — THICKNESS",
    "exercises": [
      {
        id: "ex0_1",
        type: "main",
        name: "Pendlay Rows",
        sets: "3",
        reps: "6-8",
        equip: "Barbell",
        targetEn: "Primary: Latissimus Dorsi | Secondary: Rhomboids",
        targetAr: "الأساسي: المجنص | الثانوي: عضلات الظهر الداخلية",
        descEn: [
          "Bar starts dead on the floor each rep.",
          "Explosively row to lower chest.",
          "Return bar completely to the floor — no bouncing."
        ],
        descAr: [
          "البار يبدأ مستقرًا على الأرض في كل عدة.",
          "اسحب بقوة باتجاه أسفل الصدر.",
          "أعد البار بالكامل للأرض دون ارتداد."
        ],
        focus: "Mind-Muscle: Rip the bar quickly off the floor through your elbows."
      },
      {
        id: "ex0_2",
        type: "main",
        name: "Single-Arm Dumbbell Row",
        sets: "3",
        reps: "10-12/arm",
        equip: "Dumbbell, Bench",
        targetEn: "Primary: Lats & Middle Back",
        targetAr: "الأساسي: المجنص ومنتصف الظهر",
        descEn: [
          "One hand and knee on bench for support.",
          "Pull dumbbell to hip, driving elbow back.",
          "Squeeze lat hard at the top, lower slowly."
        ],
        descAr: [
          "يد وركبة على الدكة للدعم.",
          "اسحب الدمبل لاتجاه الخصر مع دفع الكوع للخلف.",
          "اعصر المجنص بقوة وانزل ببطء."
        ],
        focus: "Mind-Muscle: Pretend your hand is just a hook, pull from the elbow."
      },
      {
        id: "ex0_3",
        type: "main",
        name: "Barbell Shrugs",
        sets: "3",
        reps: "10-12",
        equip: "Barbell",
        targetEn: "Primary: Upper Trapezius",
        targetAr: "الأساسي: الترابيس العلوية",
        descEn: [
          "Stand tall, grip just outside thighs.",
          "Elevate shoulders straight up toward ears.",
          "Hold 2 seconds at top, lower slowly."
        ],
        descAr: [
          "قف مستقيماً، المسكة أعرض قليلاً من الفخذين.",
          "ارفع الكتفين للأعلى باتجاه الأذنين مستقيماً.",
          "اثبت لثانيتين أعلى نقطة، وانزل بطء."
        ],
        focus: "Mind-Muscle: Try to touch your shoulders to your ears, no rolling."
      },
      {
        id: "ex0_4",
        type: "main",
        name: "Dumbbell Rear Delt Raise",
        sets: "3",
        reps: "12-15",
        equip: "Dumbbells",
        targetEn: "Primary: Rear Deltoids (Back Shoulder)",
        targetAr: "الأساسي: الكتف الخلفي",
        descEn: [
          "Hinge forward at hips, back flat.",
          "Raise dumbbells out to the sides.",
          "Squeeze rear delts hard, lower with control."
        ],
        descAr: [
          "انحني للأمام من الخصر، الظهر مسطح.",
          "ارفع الدمبلز للجانبين.",
          "اعصر الكتف الخلفي بقوة، انزل بتحكم."
        ],
        focus: "Mind-Muscle: Flare your pinkies out and pull back with your rear shoulders."
      },
      {
        id: "ex0_5",
        type: "bonus",
        name: "EZ Bar Reverse Curls",
        sets: "3",
        reps: "10-12",
        equip: "EZ Bar",
        targetEn: "Primary: Brachioradialis (Forearm)",
        targetAr: "الأساسي: السواعد",
        descEn: [
          "Grip bar overhand (palms facing down).",
          "Curl up keeping elbows pinned.",
          "Targets forearms and brachioradialis."
        ],
        descAr: [
          "امسك البار من أعلى (الكفوف لأسفل).",
          "ارفع الوزن مع ثبات الكوعين بالجسم.",
          "يستهدف السواعد وعضلة ثنائية الرؤوس."
        ],
        focus: "Mind-Muscle: Grip the bar as hard as you can during the curl."
      },
      {
        id: "ex0_6",
        type: "bonus",
        name: "Alternating Dumbbell Curls",
        sets: "3",
        reps: "10-12/arm",
        equip: "Dumbbells",
        targetEn: "Primary: Biceps Brachii",
        targetAr: "الأساسي: البايسبس",
        descEn: [
          "Supinate wrists as you curl up.",
          "Squeeze bicep hard at the peak.",
          "Alternate arms with a steady tempo."
        ],
        descAr: [
          "قم بلف معصمك للداخل أثناء الرفع.",
          "اعصر البايسبس بقوة في القمة.",
          "بدل بين الذراعين بتناغم ثابت."
        ],
        focus: "Mind-Muscle: Twist your pinky towards your shoulder at the very top."
      },
      {
        id: "ex0_7",
        type: "bonus",
        name: "Concentration Curls",
        sets: "3",
        reps: "10-12/arm",
        equip: "Dumbbell, Bench",
        targetEn: "Primary: Bicep Peak",
        targetAr: "الأساسي: قمة البايسبس",
        descEn: [
          "Sit on bench, elbow braced on inner thigh.",
          "Curl up with strict isolation — no momentum.",
          "Squeeze at top, lower with a 3-second negative."
        ],
        descAr: [
          "اجلس والذراع مستند على الفخذ الداخلي.",
          "ارفع بتركيز تام وعزل بدون تقلب.",
          "انزل خلال ٣ ثوانٍ لزيادة التحميل."
        ],
        focus: "Mind-Muscle: Complete isolation. Imagine building a mountain peak in the arm."
      },
      {
        id: "ex0_8",
        type: "abs",
        name: "Weighted Crunches",
        sets: "3",
        reps: "15-20",
        equip: "Dumbbell",
        targetEn: "Primary: Rectus Abdominis (Core)",
        targetAr: "الأساسي: عضلات البطن الوسطى",
        descEn: [
          "Lie on back, hold dumbbell against chest.",
          "Curl shoulders off the floor.",
          "Squeeze abs at the top, lower back down."
        ],
        descAr: [
          "استلقِ وامسك الوزن على الصدر.",
          "ارفع كتفيك عن الأرض بحركة بطن بحتة.",
          "اعصر البطن للأعلى وعد للأسفل."
        ],
        focus: "Mind-Muscle: Think of curling your chest down to your belly button."
      },
      {
        id: "ex0_9",
        type: "posture",
        name: "Superman Holds",
        sets: "3",
        reps: "45s",
        equip: "Bodyweight",
        targetEn: "Primary: Lower Back Erectors",
        targetAr: "الأساسي: عضلات أسفل الظهر",
        descEn: [
          "Lie face down, arms extended forward.",
          "Lift arms, chest, and legs off the floor.",
          "Squeeze glutes and lower back, hold the position."
        ],
        descAr: [
          "استلقِ على وجهك والذراعين ممدودة.",
          "ارفع ذراعيك وصدرك وساقيك معًا عن الأرض.",
          "اعصر الجلوتس وأسفل الظهر بقوة."
        ],
        focus: "Mind-Muscle: Squeeze the glutes and back together like a bowstring."
      }
    ]
  },
  {
    day: "Monday",
    id: 1,
    focus: "LEGS A — QUADS",
    "exercises": [
      {
        id: "ex1_1",
        type: "main",
        name: "Barbell Front Squat",
        sets: "3",
        reps: "6-8",
        equip: "Barbell",
        targetEn: "Primary: Quadriceps",
        targetAr: "الأساسي: الأفخاذ الأمامية",
        descEn: [
          "Rest bar on front delts, elbows high.",
          "Squat deep — thighs below parallel.",
          "Drive up explosively, chest stays tall."
        ],
        descAr: [
          "استند البار على مقدمة الكتف، الأكواع لأعلى.",
          "انزل عميقًا - الفخذ تحت مستوى الركبة.",
          "ادفع بقوة للأعلى والصدر مفرود."
        ],
        focus: "Mind-Muscle: Push through the full foot but drive from the quads."
      },
      {
        id: "ex1_2",
        type: "main",
        name: "Dumbbell Goblet Squat",
        sets: "3",
        reps: "10-12",
        equip: "Dumbbell",
        targetEn: "Primary: Quadriceps | Secondary: Core",
        targetAr: "الأساسي: الأفخاذ الأمامية | الثانوي: البطن",
        descEn: [
          "Hold dumbbell at chest with both hands.",
          "Squat deep, elbows inside knees.",
          "Drive through heels, squeeze glutes at top."
        ],
        descAr: [
          "امسك الوزن عند الصدر بكلتا اليدين.",
          "انزل عميقاً واجعل الكوعين بين الركبتين.",
          "ادفع من الكعبين لأعلى واعصر المؤخرة."
        ],
        focus: "Mind-Muscle: Push your knees out wide as you drop in."
      },
      {
        id: "ex1_3",
        type: "main",
        name: "Dumbbell Walking Lunges",
        sets: "3",
        reps: "10/leg",
        equip: "Dumbbells",
        targetEn: "Primary: Glutes & Quads",
        targetAr: "الأساسي: الجلوتس والأفخاذ",
        descEn: [
          "Take a long controlled step forward.",
          "Drop back knee straight down toward floor.",
          "Push off front heel into the next step."
        ],
        descAr: [
          "خذ خطوة واسعة ومحكومة للأمام.",
          "نزل الركبة الخلفية نحو الأرض مباشرة.",
          "ادفع من כعب القدم الأمامية للحركة التالية."
        ],
        focus: "Mind-Muscle: Keep your torso upright tracking weight perfectly on the heel."
      },
      {
        id: "ex1_4",
        type: "main",
        name: "Dumbbell Romanian Deadlift",
        sets: "3",
        reps: "10-12",
        equip: "Dumbbells",
        targetEn: "Primary: Hamstrings & Glutes",
        targetAr: "الأساسي: العضلة الخلفية والجلوتس",
        descEn: [
          "Push hips back with slight knee bend.",
          "Keep dumbbells close to your legs.",
          "Feel the hamstring stretch, squeeze glutes up."
        ],
        descAr: [
          "ادفع الحوض للخلف مع ثني طفيف للركبة.",
          "اجعل الأوزان قريبة من الأقدام.",
          "ركز على تمدد العضلة الخلفية وارفع بالضغط عليها."
        ],
        focus: "Mind-Muscle: Treat your hips like a hinge on a door pushing a wall."
      },
      {
        id: "ex1_5",
        type: "bonus",
        name: "Dumbbell Step-Ups",
        sets: "3",
        reps: "10/leg",
        equip: "Dumbbells, Bench",
        targetEn: "Primary: Lower Body Unilateral Control",
        targetAr: "الأساسي: التحكم الأحادي بالأطراف السفلية",
        descEn: [
          "Place one foot firmly on the bench.",
          "Drive up through the elevated leg only.",
          "Step down slowly — don't push off the back foot."
        ],
        descAr: [
          "ضع قدمك بثبات على الدكة.",
          "ادفع للأعلى بساقك المرفوعة فقط.",
          "انزل ببطء ولا تستعمل قدمك الخلفية للدفع."
        ],
        focus: "Mind-Muscle: Focus entirely on the driving heel."
      },
      {
        id: "ex1_6",
        type: "bonus",
        name: "Dumbbell Sumo Squat",
        sets: "3",
        reps: "12-15",
        equip: "Dumbbell",
        targetEn: "Primary: Inner Thighs (Adductors)",
        targetAr: "الأساسي: الأفخاذ الداخلية",
        descEn: [
          "Wide stance, toes pointed outward.",
          "Hold one dumbbell hanging between legs.",
          "Squat deep, driving knees out, squeeze inner thighs."
        ],
        descAr: [
          "وقفة واسعة وأصابع القدم للחוץ.",
          "امسك الوزن متدلياً بين فخذيك.",
          "انزل بعمق مع فتح الركبتين واعصر للداخل."
        ],
        focus: "Mind-Muscle: Squeeze the floor together with your feet as you stand."
      },
      {
        id: "ex1_7",
        type: "bonus",
        name: "Standing Calf Raises",
        sets: "3",
        reps: "15-20",
        equip: "Dumbbells",
        targetEn: "Primary: Gastrocnemius (Calves)",
        targetAr: "الأساسي: السمانة",
        descEn: [
          "Stand on a plate or step for extra range.",
          "Rise onto toes as high as possible.",
          "Hold 2 seconds at top, lower slowly below starting."
        ],
        descAr: [
          "قف على درجة لزيادة مدى الحركة.",
          "ارفع نفسك لأقصى حد على الأصابع.",
          "اثبت ثانيتين بالأعلى، وانزل لمستوى أعمق."
        ],
        focus: "Mind-Muscle: Squeeze fully at the top and stretch perfectly at the bottom."
      },
      {
        id: "ex1_8",
        type: "abs",
        name: "Lying Leg Raises",
        sets: "3",
        reps: "15-20",
        equip: "Bodyweight",
        targetEn: "Primary: Lower Abdominals",
        targetAr: "الأساسي: البطن السفلية",
        descEn: [
          "Lie flat on back, hands under glutes.",
          "Keep legs straight, raise to 90 degrees.",
          "Lower slowly without touching the floor."
        ],
        descAr: [
          "استلقِ مسطحاً، اليدين تحت المؤخرة.",
          "ارفع الأقدام المستقيمة إلى زاوية ٩٠.",
          "انزل ببطء دون أن تتدخل الأقدام بالأرض."
        ],
        focus: "Mind-Muscle: Press your lower back directly into the floor the whole time."
      },
      {
        id: "ex1_9",
        type: "posture",
        name: "Neck Flexion",
        sets: "3",
        reps: "15-20",
        equip: "Bodyweight",
        targetEn: "Primary: Deep Cervical Flexors",
        targetAr: "الأساسي: عضلات الرقبة الأمامية",
        descEn: [
          "Lie on your back on the floor.",
          "Tuck chin and lift head toward chest.",
          "Lower slowly — builds front neck muscles."
        ],
        descAr: [
          "استلقِ على ظهرك تمامًا.",
          "قرب ذقنك وارفع رأسك باتجاه صدرك.",
          "انزل ببطء لتقوية رقبتك."
        ],
        focus: "Mind-Muscle: Focus on a very slow, controlled contraction."
      }
    ]
  },
  {
    day: "Tuesday",
    id: 2,
    focus: "PUSH A — CHEST",
    "exercises": [
      {
        id: "ex2_1",
        type: "main",
        name: "Flat Dumbbell Bench Press",
        sets: "3",
        reps: "8-12",
        equip: "Dumbbells, Bench",
        targetEn: "Primary: Pectoralis Major (Mid Chest)",
        targetAr: "الأساسي: عضلات الصدر الوسطى",
        descEn: [
          "Lie on bench, feet flat on floor.",
          "Press dumbbells up and together at the top.",
          "Lower with control until deep chest stretch."
        ],
        descAr: [
          "استلقِ والاقدام ثابتة بالأرض.",
          "ادفع الأوزان لأعلى واقترب بها للمنتصف.",
          "انزل بتحكم لتوفير شد ممتاز للصدر."
        ],
        focus: "Mind-Muscle: Explode the dumbbells together using pectoral contraction."
      },
      {
        id: "ex2_2",
        type: "main",
        name: "Incline Dumbbell Press",
        sets: "3",
        reps: "8-12",
        equip: "Dumbbells, Bench",
        targetEn: "Primary: Upper Pectoralis",
        targetAr: "الأساسي: الصدر العلوي",
        descEn: [
          "Set bench to 30-45 degree incline.",
          "Press up, keeping shoulders pinned back.",
          "Lower until a deep stretch in upper chest."
        ],
        descAr: [
          "اضبط الدكة بزاوية ٣٠-٤٥ درجة.",
          "ادفع الوزن مع تثبيت الكتف بالخلف.",
          "تحكم بالنزول لعمل شد قوي في الصدر العلوي."
        ],
        focus: "Mind-Muscle: Track the pressing motion across your upper chest pathway."
      },
      {
        id: "ex2_3",
        type: "main",
        name: "Standing Barbell Overhead Press",
        sets: "3",
        reps: "6-8",
        equip: "Barbell",
        targetEn: "Primary: Anterior Deltoid & Core",
        targetAr: "الأساسي: الكتف الأمامي والبطن",
        descEn: [
          "Grip just outside shoulder width.",
          "Brace core hard, press bar straight overhead.",
          "Push head through at the top for lockout."
        ],
        descAr: [
          "مسكة أعرض من الأكتاف قليلا.",
          "شد بطنك بقوة، وادفع البار لأعلى تماما.",
          "ادفع رأسك للداخل لإتمام الإغلاق."
        ],
        focus: "Mind-Muscle: Clench your glutes and abs to form a solid pillar."
      },
      {
        id: "ex2_4",
        type: "main",
        name: "Dumbbell Flyes",
        sets: "3",
        reps: "10-12",
        equip: "Dumbbells, Bench",
        targetEn: "Primary: Chest Isolation & Stretch",
        targetAr: "الأساسي: عزل وتمديد الصدر",
        descEn: [
          "Arms slightly bent, palms facing each other.",
          "Open arms wide until deep chest stretch.",
          "Squeeze chest to bring dumbbells back together."
        ],
        descAr: [
          "انحناء طفيف بالمرفق وباطن الأيدي متواجهة.",
          "افتح ذراعيك لعمل تمدد شديد.",
          "اعصر الصدر للعودة خطوة للوضع الأصلي."
        ],
        focus: "Mind-Muscle: Imagine hugging a massive barrel in front of you."
      },
      {
        id: "ex2_5",
        type: "bonus",
        name: "Dumbbell Lateral Raises",
        sets: "3",
        reps: "12-15",
        equip: "Dumbbells",
        targetEn: "Primary: Lateral Deltoid",
        targetAr: "الأساسي: الكتف الجانبي",
        descEn: [
          "Keep slight bend in elbows throughout.",
          "Raise to shoulder height, lead with elbows.",
          "3-second negative on every rep."
        ],
        descAr: [
          "انحناء طفيف ومستمر طوال الحركة بالكوع.",
          "ارفع لمستوى الكتف عبر توجيه المرفق.",
          "استخدم ثلاث ثوان للنزول المقاوم."
        ],
        focus: "Mind-Muscle: Think of pushing the dumbbells away to the sides."
      },
      {
        id: "ex2_6",
        type: "bonus",
        name: "EZ Bar Skull Crushers",
        sets: "3",
        reps: "10-12",
        equip: "EZ Bar",
        targetEn: "Primary: Long Head Triceps",
        targetAr: "الأساسي: رأس الترايسبس الطويل",
        descEn: [
          "Lie on floor, arms extended above chest.",
          "Lower bar toward forehead by bending elbows.",
          "Extend back up, squeezing triceps hard."
        ],
        descAr: [
          "استلقِ والأذرع ممدودة.",
          "انزل البار نحو الرأس بثني المفصل فقط.",
          "افرد الأكواع واعصر الترايسبس بقوة."
        ],
        focus: "Mind-Muscle: Pin your elbows strictly in place pointing forward."
      },
      {
        id: "ex2_7",
        type: "bonus",
        name: "Overhead Dumbbell Tricep Extension",
        sets: "3",
        reps: "10-12",
        equip: "Dumbbell",
        targetEn: "Primary: Long Head Triceps (Stretch)",
        targetAr: "الأساسي: الترايسبس من التمدد",
        descEn: [
          "Hold one heavy dumbbell overhead with both hands.",
          "Lower behind head, keeping elbows tight.",
          "Extend elbows to press back up — squeeze triceps."
        ],
        descAr: [
          "امسك دومبل ثقيل فوق رأسك بيدك الاثنين.",
          "انزل الوزن خلف الرأس والأكواع مغلقة.",
          "افرد للاعلى — مع التركيز."
        ],
        focus: "Mind-Muscle: Stretch the tricep heavily behind the neck."
      },
      {
        id: "ex2_8",
        type: "abs",
        name: "Bicycle Crunches",
        sets: "3",
        reps: "20/side",
        equip: "Bodyweight",
        targetEn: "Primary: Core & Obliques",
        targetAr: "الأساسي: البطن والخواصر",
        descEn: [
          "Lie on back, hands lightly behind head.",
          "Bring opposite elbow to opposite knee.",
          "Keep a steady, controlled pace — no rushing."
        ],
        descAr: [
          "استلقِ ويديك بخفة خلف الرأس.",
          "قرب الكوع للركبة المعاكسة بطرفين.",
          "تكرار منتظم ولا تسرع."
        ],
        focus: "Mind-Muscle: Rotate your core side to side with intention."
      },
      {
        id: "ex2_9",
        type: "posture",
        name: "Wall Angels",
        sets: "3",
        reps: "12-15",
        equip: "Bodyweight",
        targetEn: "Primary: Postural Chain",
        targetAr: "الأساسي: عضلات الظهر ومحور الجسم",
        descEn: [
          "Stand with back, head, and hips against wall.",
          "Slide arms up the wall like a snow angel.",
          "Keep wrists and elbows touching wall throughout."
        ],
        descAr: [
          "قف برأسك وظهرك وحوضك ملاصق للجدار.",
          "زلق يديك على الحائط كحركة ملاك الثلج.",
          "احتفظ بتلامس الأذرع طوال الحركة."
        ],
        focus: "Mind-Muscle: Force the wrists back into the wall while moving up."
      }
    ]
  },
  {
    day: "Wednesday",
    id: 3,
    focus: "PULL A — WIDTH",
    "exercises": [
      {
        id: "ex3_1",
        type: "main",
        name: "Barbell Deadlift",
        sets: "3",
        reps: "5",
        equip: "Barbell",
        targetEn: "Primary: Posterior Chain (Back & Glutes)",
        targetAr: "الأساسي: سلسلة الظهر والخلفيات",
        descEn: [
          "Bar over mid-foot, shoulder-width stance.",
          "Hinge at hips, grip bar, chest up, back flat.",
          "Drive through legs and lock out — stand tall."
        ],
        descAr: [
          "البار منتصف قدمك وقفة اعتيادية.",
          "انزل بالحوض وامسك البار والصدر للأعلى.",
          "ادفع بالساقين ثم استقم تماماً للاقفال."
        ],
        focus: "Mind-Muscle: Push the floor away like a leg press to start."
      },
      {
        id: "ex3_2",
        type: "main",
        name: "Bent-Over Barbell Row",
        sets: "3",
        reps: "8-10",
        equip: "Barbell",
        targetEn: "Primary: Latissimus Dorsi",
        targetAr: "الأساسي: المجنص",
        descEn: [
          "Hinge forward, torso nearly parallel to floor.",
          "Pull bar to lower chest / belly button.",
          "Squeeze shoulder blades together at the top."
        ],
        descAr: [
          "انحني للأمام والجذع يوازي الأرض.",
          "اسحب البار نحو السرة أو أسفل الصدر.",
          "ضم لوحي الكتف بقمة الرفع."
        ],
        focus: "Mind-Muscle: Row utilizing strictly your back without body momentum."
      },
      {
        id: "ex3_3",
        type: "main",
        name: "Single-Arm Dumbbell Row",
        sets: "3",
        reps: "10-12/arm",
        equip: "Dumbbell, Bench",
        targetEn: "Primary: Lat Stretch & Contraction",
        targetAr: "الأساسي: انقباض وتمطيط المجنص",
        descEn: [
          "One hand and knee on bench.",
          "Row dumbbell to hip, driving elbow back.",
          "Keep back flat, squeeze lat at the top."
        ],
        descAr: [
          "يد وركبة مثبتة على الدكة.",
          "اسحب لجهة الحوض.",
          "تأكد من تسطح الظهر مع الانقباض."
        ],
        focus: "Mind-Muscle: Pull deeply backward like starting a lawnmower."
      },
      {
        id: "ex3_4",
        type: "main",
        name: "EZ Bar Upright Row",
        sets: "3",
        reps: "10-12",
        equip: "EZ Bar",
        targetEn: "Primary: Lateral Delts & Traps",
        targetAr: "الأساسي: الأكتاف الجانبية والترابيس",
        descEn: [
          "Stand holding bar with overhand grip.",
          "Pull bar straight up to upper chest.",
          "Keep elbows higher than wrists throughout."
        ],
        descAr: [
          "امسك البار بوضعية مستقيمة.",
          "اسحبه باستقامة باتجاه أعلى صدرك.",
          "اجعل الأكواع أعلى من الرسغ دوماً."
        ],
        focus: "Mind-Muscle: Let your elbows lead the upward motion entirely."
      },
      {
        id: "ex3_5",
        type: "bonus",
        name: "EZ Bar Bicep Curls",
        sets: "3",
        reps: "10-12",
        equip: "EZ Bar",
        targetEn: "Primary: Biceps Brachii",
        targetAr: "الأساسي: البايسبس",
        descEn: [
          "Grip bar shoulder-width on the angled grips.",
          "Curl up, keeping elbows totally stationary.",
          "Lower slowly with full control — no dropping."
        ],
        descAr: [
          "امسك الأماكن المقوسة للبار.",
          "ارفع البار واكواعك ثابتة جداً.",
          "تحكم تام في حركة النزول."
        ],
        focus: "Mind-Muscle: Freeze the elbows at your sides while squeezing biceps."
      },
      {
        id: "ex3_6",
        type: "bonus",
        name: "Dumbbell Hammer Curls",
        sets: "3",
        reps: "10-12",
        equip: "Dumbbells",
        targetEn: "Primary: Brachialis & Forearm",
        targetAr: "الأساسي: اليد والمناطق السفلية للبايسبس",
        descEn: [
          "Hold dumbbells with neutral/hammer grip.",
          "Curl to shoulder height, squeezing brachialis.",
          "Lower under tension — build the arm thickness."
        ],
        descAr: [
          "أوزان بمسكة محايدة (هامر).",
          "ارفع للاعلى باتجاه الكتف.",
          "ركز على سمك الذراع الداخلي."
        ],
        focus: "Mind-Muscle: Emphasize the forearm thickness during the curl."
      },
      {
        id: "ex3_7",
        type: "bonus",
        name: "Dumbbell Shrugs",
        sets: "3",
        reps: "12-15",
        equip: "Dumbbells",
        targetEn: "Primary: Trapezius",
        targetAr: "الأساسي: الترابيس",
        descEn: [
          "Stand holding heavy dumbbells at your sides.",
          "Elevate shoulders straight up toward ears.",
          "Hold 2 seconds at peak, lower slowly."
        ],
        descAr: [
          "اقبض بشدة على أوزان عالية.",
          "ارفع أكتفاك لأقصى ارتفاع.",
          "انزل تدريجياً."
        ],
        focus: "Mind-Muscle: Slow down the negative portion perfectly."
      },
      {
        id: "ex3_8",
        type: "abs",
        name: "V-Ups",
        sets: "3",
        reps: "12-15",
        equip: "Bodyweight",
        targetEn: "Primary: Core",
        targetAr: "الأساسي: كامل البطن",
        descEn: [
          "Lie flat on back, arms extended overhead.",
          "Simultaneously lift legs and torso.",
          "Touch toes at the top, lower with control."
        ],
        descAr: [
          "استلقِ وافرد الأيدي للوراء.",
          "ارفع الجذع والارجل فوراً بوقت واحد.",
          "المس الأصابع وارجع ببطء."
        ],
        focus: "Mind-Muscle: Move like a closing book."
      },
      {
        id: "ex3_9",
        type: "posture",
        name: "Bent-Over Reverse Flyes",
        sets: "3",
        reps: "15-20",
        equip: "Dumbbells",
        targetEn: "Primary: Rear Delts & Posture",
        targetAr: "الأساسي: الكتف الخلفي وتقويم الظهر",
        descEn: [
          "Hinge forward, slight knee bend.",
          "Raise dumbbells out to the sides.",
          "Squeeze rear deltoids — fights forward shoulder posture."
        ],
        descAr: [
          "انحناء سفلي واضح.",
          "ارفع الذراعين جانبيًا.",
          "علاج جذري لانحناء الكتف للأمام."
        ],
        focus: "Mind-Muscle: Pull directly outward from the rear shoulders."
      }
    ]
  },
  {
    day: "Thursday",
    id: 4,
    focus: "LEGS B — POSTERIOR",
    "exercises": [
      {
        id: "ex4_1",
        type: "main",
        name: "Barbell Back Squat",
        sets: "3",
        reps: "6-8",
        equip: "Barbell",
        targetEn: "Primary: Power Quads & Glutes",
        targetAr: "الأساسي: الجلوتس والأفخاذ بقوة كاملة",
        descEn: [
          "Bar on upper traps, feet shoulder-width.",
          "Squat deep with control — own the weight.",
          "Drive up through heels, squeeze glutes at top."
        ],
        descAr: [
          "البار بوضعية علوية في الترابيس.",
          "انزل باحترافية وسيطرة كاملة.",
          "ادفع بقوة وثبت بنهاية الطلوع."
        ],
        focus: "Mind-Muscle: Brace your core as if taking a punch during the descent."
      },
      {
        id: "ex4_2",
        type: "main",
        name: "Bulgarian Split Squat",
        sets: "3",
        reps: "8-10/leg",
        equip: "Dumbbells, Bench",
        targetEn: "Primary: Glutes & Quad Balance",
        targetAr: "الأساسي: توازن العضلة وفصل الأفخاذ",
        descEn: [
          "Rear foot elevated on bench behind you.",
          "Drop back knee straight down — deep stretch.",
          "Push through front heel to return up."
        ],
        descAr: [
          "القدم الخلفية مرفوعة فوق الدكة.",
          "انزل بالركبة مباشرة لتحقيق شد عميق.",
          "ادفع للأعلى بساقك الأمامية."
        ],
        focus: "Mind-Muscle: Do not assist by pushing with the back leg on the bench."
      },
      {
        id: "ex4_3",
        type: "main",
        name: "Barbell Romanian Deadlift",
        sets: "3",
        reps: "8-10",
        equip: "Barbell",
        targetEn: "Primary: Hamstring Stretch & Strength",
        targetAr: "الأساسي: قوة وتمدد الخلفيات",
        descEn: [
          "Push hips back, bar stays close to legs.",
          "Lower until deep hamstring stretch.",
          "Squeeze glutes hard to stand back up."
        ],
        descAr: [
          "ادفع حوضك للخلف البار يحك ساقك.",
          "توقف عندما يتم تمدد الساق الخلفية بالكامل.",
          "انهض بعضلة الجلوتس الصارمة."
        ],
        focus: "Mind-Muscle: Picture dragging the bar strictly up your shins."
      },
      {
        id: "ex4_4",
        type: "main",
        name: "Dumbbell Reverse Lunges",
        sets: "3",
        reps: "10/leg",
        equip: "Dumbbells",
        targetEn: "Primary: Glutes & Stability",
        targetAr: "الأساسي: الجلوتس وثبات المفاصل",
        descEn: [
          "Step backward into a deep lunge.",
          "Front shin vertical, back knee near floor.",
          "Push off front heel to return to standing."
        ],
        descAr: [
          "خطوة تراجعية للخلف ببطء.",
          "انزل والساق الامامي مستقيم وثابت.",
          "انهض عبر ضغط المقدمة."
        ],
        focus: "Mind-Muscle: Ensure the front knee tracks softly over the toes."
      },
      {
        id: "ex4_5",
        type: "bonus",
        name: "Dumbbell Hip Thrust",
        sets: "3",
        reps: "12-15",
        equip: "Dumbbell, Bench",
        targetEn: "Primary: Gluteus Maximus",
        targetAr: "الأساسي: عضلة الجلوتس الكبيرة",
        descEn: [
          "Upper back on bench, feet flat on floor.",
          "Place heavy dumbbell on hips.",
          "Drive hips up, squeeze glutes 2 seconds at top."
        ],
        descAr: [
          "اعلى الظهر مستند تمامًا على الدكة.",
          "دمبل قوي الملمس ع الحوض.",
          "اعصر للأعلى لثانيتين كقفل للحركة."
        ],
        focus: "Mind-Muscle: Lift with the hips, do not arch your lower back."
      },
      {
        id: "ex4_6",
        type: "bonus",
        name: "Dumbbell Lateral Lunges",
        sets: "3",
        reps: "10/leg",
        equip: "Dumbbells",
        targetEn: "Primary: Adductors & Glute Medius",
        targetAr: "الأساسي: تفريغ واحتواء عضلات الفخذ المتطرفة",
        descEn: [
          "Step wide to one side, pushing hips back.",
          "Bend the stepping leg, keep other leg straight.",
          "Push off to return — hits inner thighs and glutes."
        ],
        descAr: [
          "خطوة عرضية واسعة جانبياً.",
          "اثني الساق وتمدد بالساق الآخرى.",
          "انهض بسرعة."
        ],
        focus: "Mind-Muscle: Sit back deeply onto the lunging side."
      },
      {
        id: "ex4_7",
        type: "bonus",
        name: "Seated Calf Raises",
        sets: "3",
        reps: "15-20",
        equip: "Dumbbells, Bench",
        targetEn: "Primary: Soleus (Lower Calf)",
        targetAr: "الأساسي: بطات الأرجل السفلية",
        descEn: [
          "Sit on bench, toes elevated on a plate.",
          "Rest dumbbells on lower thighs.",
          "Raise heels as high as possible, squeeze, lower slowly."
        ],
        descAr: [
          "اجلس والاصابع على طرف طبق.",
          "ارفع بقوة ووزن عالي.",
          "اثبت لحظة وانزل بقوة للتمطيط."
        ],
        focus: "Mind-Muscle: Achieve a full calf stretch at the very bottom."
      },
      {
        id: "ex4_8",
        type: "abs",
        name: "Russian Twists",
        sets: "3",
        reps: "20/side",
        equip: "Dumbbell",
        targetEn: "Primary: Core Rotation",
        targetAr: "الأساسي: دوران العضلات البطنية وشد الخصر",
        descEn: [
          "Sit with knees bent, lean back slightly, feet up.",
          "Hold dumbbell and rotate torso side to side.",
          "Keep core braced throughout — controlled tempo."
        ],
        descAr: [
          "دوران جذري ورياضي للجسد.",
          "امسك الدمبل وانقل المركز لليمين واليسار.",
          "إبقاء البطن متصلبًا."
        ],
        focus: "Mind-Muscle: Rotate from the ribs, not just moving the arms."
      },
      {
        id: "ex4_9",
        type: "posture",
        name: "Prone Neck Extensions",
        sets: "3",
        reps: "15-20",
        equip: "Bodyweight",
        targetEn: "Primary: Deep Cervical Extensors",
        targetAr: "الأساسي: عضلات مؤخرة الرقبة السفلية",
        descEn: [
          "Lie face down on the floor.",
          "Lift head off the ground slightly.",
          "Hold briefly and lower with control."
        ],
        descAr: [
          "استلقِ على البطن والجبهة للأرض.",
          "ارفع الجبهة بلطف.",
          "علاج حقيقي لمسكة الجوال المستمرة."
        ],
        focus: "Mind-Muscle: Squeeze the back of the neck gently."
      }
    ]
  },
  {
    day: "Friday",
    id: 5,
    focus: "REST",
    "exercises": []
  }
],
    images: {
  ex6_1: 'img/shoulder_press.jpg', ex6_2: 'img/arnold_press.jpg', ex6_3: 'img/db_floor_press.jpg',
  ex6_4: 'img/pushup.jpg', ex6_5: 'img/lateral_raise.jpg', ex6_6: 'img/front_raise.jpg',
  ex6_7: 'img/ez_floor_press.jpg', ex6_8: 'img/side_bend.jpg', ex6_9: 'img/scapular_pushup.jpg',
  ex0_1: 'img/barbell_row.jpg', ex0_2: 'img/dumbbell_row.jpg', ex0_3: 'img/shrug.jpg',
  ex0_4: 'img/reverse_fly.jpg', ex0_5: 'img/curl.jpg', ex0_6: 'img/curl.jpg',
  ex0_7: 'img/curl.jpg', ex0_8: 'img/abs.jpg', ex0_9: 'img/superman.jpg',
  ex1_1: 'img/squat.jpg', ex1_2: 'img/squat.jpg', ex1_3: 'img/lunge.jpg',
  ex1_4: 'img/deadlift.jpg', ex1_5: 'img/step_up.jpg', ex1_6: 'img/squat.jpg',
  ex1_7: 'img/calf_raise.jpg', ex1_8: 'img/abs.jpg', ex1_9: 'img/neck_flexion.jpg',
  ex2_1: 'img/db_bench.jpg', ex2_2: 'img/incline_db_press.jpg', ex2_3: 'img/barbell_ohp.jpg',
  ex2_4: 'img/flyes.jpg', ex2_5: 'img/lateral_raise.jpg', ex2_6: 'img/skull_crusher.jpg',
  ex2_7: 'img/overhead_tricep.jpg', ex2_8: 'img/abs.jpg', ex2_9: 'img/wall_angel.jpg',
  ex3_1: 'img/deadlift.jpg', ex3_2: 'img/barbell_row.jpg', ex3_3: 'img/dumbbell_row.jpg',
  ex3_4: 'img/shrug.jpg', ex3_5: 'img/curl.jpg', ex3_6: 'img/curl.jpg',
  ex3_7: 'img/shrug.jpg', ex3_8: 'img/abs.jpg', ex3_9: 'img/reverse_fly.jpg',
  ex4_1: 'img/squat.jpg', ex4_2: 'img/lunge.jpg', ex4_3: 'img/deadlift.jpg',
  ex4_4: 'img/lunge.jpg', ex4_5: 'img/hip_thrust.jpg', ex4_6: 'img/lunge.jpg',
  ex4_7: 'img/calf_raise.jpg', ex4_8: 'img/abs.jpg', ex4_9: 'img/prone_neck.jpg'
    }
  }
};

if (typeof CORE_FORTRESS_PROFILE !== 'undefined') {
  PROFILES.core = CORE_FORTRESS_PROFILE;
}

// Backward compat
const DEFAULT_ROUTINE = PROFILES.ppl.routine;
const EX_IMG = PROFILES.ppl.images;
const ACTIVE_PROFILE_KEY = 'oly_active_profile';

const DAY_ORDER = [6, 0, 1, 2, 3, 4, 5];
const SKEY = 'olympus_v11';
const YT_SVG = '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>';
const SEARCH_SVG = '<svg viewBox="0 0 24 24" width="14" height="14"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
/* ═══════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const today = () => new Date().toISOString().split('T')[0];
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const LS = {
  get: k => localStorage.getItem(k),
  set: (k, v) => { try { localStorage.setItem(k, v); } catch(e) { UI.toast('Storage full!'); } },
  del: k => localStorage.removeItem(k)
};

/* ═══════════════════════════════════════════
   APPLICATION STATE
═══════════════════════════════════════════ */
const STATE = {
  routine: [], selDay: new Date().getDay(), curFilter: 'all',
  calDate: new Date(), hovZone: null, sessionStart: new Date()
};

/* ═══════════════════════════════════════════
   AUDIO SYNTHESIS
═══════════════════════════════════════════ */
const SFX = (() => {
  let ctx = null;
  const init = () => { if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') ctx.resume(); };
  const tone = (freq, type, dur, vol, delay = 0) => {
    try {
      init(); const t = ctx.currentTime + delay;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type; o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + dur * 0.1);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + dur + 0.1);
    } catch (e) {}
  };
  return {
    init,
    tick: () => tone(800, 'sine', 0.1, 0.05),
    conquer: () => { init(); [440, 554.37, 659.25, 880].forEach((f, i) => tone(f, 'triangle', 1.5, 0.03, i * 0.05)); tone(55, 'sine', 2, 0.1, 0.1); }
  };
})();

/* ═══════════════════════════════════════════
   CANVAS PARTICLE ENGINE (OPTIMIZED)
═══════════════════════════════════════════ */
const FX = (() => {
  const cv = $('cv'), cx = cv.getContext('2d', { alpha: true });
  let ripples = [], bugs = [], bflies = [], running = true;

  class Ripple {
    constructor(x, y, a = 0.8) { this.x = x; this.y = y; this.r = 0; this.a = a; }
    step() {
      cx.beginPath(); cx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      cx.strokeStyle = `rgba(163,201,177,${this.a * 0.4})`; cx.lineWidth = 1 + this.a * 2; cx.stroke();
      this.r += 1.2; this.a -= 0.015; return this.a > 0;
    }
  }
  class Bug {
    constructor() { this.x = Math.random() * cv.width; this.y = Math.random() * cv.height; this.tx = this.x; this.ty = this.y; this.sp = 1.5 + Math.random() * 2; this.w = 0; this.ang = Math.random() * Math.PI * 2; this.lp = Math.random() * 10; }
    step() {
      let mv = false;
      if (this.w > 0) { this.w--; } else {
        const dx = this.tx - this.x, dy = this.ty - this.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 5) { this.tx = Math.max(50, Math.min(cv.width - 50, this.x + (Math.random() - 0.5) * 400)); this.ty = Math.max(50, Math.min(cv.height - 50, this.y + (Math.random() - 0.5) * 400)); this.w = 60 + Math.random() * 150; ripples.push(new Ripple(this.x, this.y, 0.4)); }
        else { mv = true; this.ang = Math.atan2(dy, dx); this.x += (dx / d) * this.sp; this.y += (dy / d) * this.sp; this.lp += 0.4; if (Math.random() < 0.05) ripples.push(new Ripple(this.x, this.y, 0.15)); }
      }
      cx.save(); cx.translate(this.x, this.y); cx.rotate(this.ang);
      const sw = mv ? Math.sin(this.lp) : 0;
      cx.strokeStyle = 'rgba(10,15,10,0.7)'; cx.lineWidth = 1; cx.lineCap = 'round';
      cx.beginPath();
      cx.moveTo(0, 0); cx.lineTo(-3 - sw * 4, -8); cx.moveTo(0, 0); cx.lineTo(-3 - sw * 4, 8);
      cx.moveTo(-2, 0); cx.lineTo(-8, -5); cx.lineTo(-16 + sw * 2, -8); cx.moveTo(-2, 0); cx.lineTo(-8, 5); cx.lineTo(-16 + sw * 2, 8);
      cx.moveTo(2, 0); cx.lineTo(5, -3); cx.moveTo(2, 0); cx.lineTo(5, 3); cx.stroke();
      cx.fillStyle = 'rgba(15,20,12,0.85)'; cx.beginPath(); cx.ellipse(0, 0, 4.5, 1.5, 0, 0, Math.PI * 2); cx.fill();
      cx.restore();
    }
  }
  class Bfly {
    constructor() { this.reset(true); }
    reset(init) { this.x = init ? Math.random() * cv.width : (Math.random() > 0.5 ? -40 : cv.width + 40); this.y = Math.random() * cv.height; this.vx = (this.x < 0 ? 1 : -1) * (0.8 + Math.random() * 1.5); this.vy = (Math.random() - 0.5) * 1.5; this.t = Math.random() * 100; this.h = 30 + Math.random() * 50; }
    step() {
      this.t += 0.25; this.x += this.vx; this.y += this.vy + Math.sin(this.t * 0.5) * 0.6;
      if (this.x < -100 || this.x > cv.width + 100 || this.y < -100 || this.y > cv.height + 100) this.reset();
      cx.save(); cx.translate(this.x, this.y); cx.rotate(Math.atan2(this.vy, this.vx));
      const f = Math.abs(Math.sin(this.t)); cx.fillStyle = `hsl(${this.h},90%,60%)`; cx.globalAlpha = 0.85;
      cx.beginPath(); cx.ellipse(0, -5 * f, 7, 5 * f, Math.PI / 6, 0, Math.PI * 2); cx.fill();
      cx.beginPath(); cx.ellipse(0, 5 * f, 7, 5 * f, -Math.PI / 6, 0, Math.PI * 2); cx.fill();
      cx.restore();
    }
  }
  const resize = () => { cv.width = window.innerWidth; cv.height = window.innerHeight; bugs = []; bflies = []; ripples = []; for (let i = 0; i < 8; i++) bugs.push(new Bug()); for (let i = 0; i < 3; i++) bflies.push(new Bfly()); };
  const loop = () => { if (!running) { requestAnimationFrame(loop); return; } cx.clearRect(0, 0, cv.width, cv.height); ripples = ripples.filter(r => r.step()); bugs.forEach(b => b.step()); bflies.forEach(b => b.step()); requestAnimationFrame(loop); };
  document.addEventListener('visibilitychange', () => { running = !document.hidden; });
  return { init: () => { window.addEventListener('resize', debounce(resize, 200)); resize(); loop(); }, addRipple: (x, y) => ripples.push(new Ripple(x, y)) };
})();

/* ═══════════════════════════════════════════
   IMAGE SYSTEM
═══════════════════════════════════════════ */
const ImageSys = {
  save: (id, src) => {
    const img = new Image();
    img.onload = () => {
      const maxW = 600; let w = img.width, h = img.height;
      if (w > maxW) { h = Math.round((maxW / w) * h); w = maxW; }
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      const d = c.toDataURL('image/jpeg', 0.7);
      try { localStorage.setItem('oly_img_' + id, d); App.refreshZone(id, d); UI.toast('Reflection Bound'); } catch { UI.toast('Storage Full!'); }
    };
    if (typeof src === 'string') img.src = src;
    else { const r = new FileReader(); r.onload = e => img.src = e.target.result; r.readAsDataURL(src); }
  }
};
