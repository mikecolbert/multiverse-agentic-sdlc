export interface TechniqueStep {
  text: string
  duration?: number   // seconds; present only for timed steps
}

export interface Technique {
  id: string
  name: string
  tagline: string
  steps: TechniqueStep[]
}

export const TECHNIQUES: Technique[] = [
  // ── 1. Box Breathing ──────────────────────────────────────
  {
    id: 'box-breathing',
    name: 'Box Breathing',
    tagline: 'Slow your nervous system with a simple 4-count breath pattern.',
    steps: [
      { text: 'Sit comfortably and relax your shoulders. Close your eyes if that feels safe.', },
      { text: 'Breathe in slowly through your nose.', duration: 4 },
      { text: 'Hold your breath gently — no need to strain.', duration: 4 },
      { text: 'Breathe out slowly through your mouth.', duration: 4 },
      { text: 'Hold at the bottom, lungs empty.', duration: 4 },
      { text: 'Breathe in again slowly through your nose.', duration: 4 },
      { text: 'Hold your breath gently.', duration: 4 },
      { text: 'Breathe out slowly and completely.', duration: 4 },
      { text: 'Hold at the bottom.', duration: 4 },
      { text: 'One more round — breathe in slowly.', duration: 4 },
      { text: 'Hold.', duration: 4 },
      { text: 'Breathe out fully.', duration: 4 },
      { text: 'Rest here. Notice how your body feels right now.' },
    ],
  },

  // ── 2. 5-4-3-2-1 Grounding ────────────────────────────────
  {
    id: 'grounding-54321',
    name: '5-4-3-2-1 Grounding',
    tagline: 'Bring yourself back to the present moment using your five senses.',
    steps: [
      { text: 'Take one slow breath in, and let it out. You are here, and you are safe.' },
      { text: 'Look around and name 5 things you can SEE. Say them quietly to yourself — a chair, the ceiling, your hands...' },
      { text: 'Notice 4 things you can TOUCH. Feel the weight of your body in the seat, the texture of your clothes, the temperature of the air.' },
      { text: 'Listen for 3 things you can HEAR. Maybe traffic outside, your own breathing, the hum of something nearby.' },
      { text: 'Notice 2 things you can SMELL. If nothing comes, bring to mind a scent you love — coffee, rain, fresh bread.' },
      { text: 'Notice 1 thing you can TASTE. The inside of your mouth, a lingering flavor, the dryness or moisture.' },
      { text: 'Take another slow breath. You made it through. Your body is here, right now.' },
    ],
  },

  // ── 3. Visualization ──────────────────────────────────────
  {
    id: 'visualization',
    name: 'Safe Place Visualization',
    tagline: 'Mentally travel to a calm, safe place where you feel at ease.',
    steps: [
      { text: 'Close your eyes if you feel comfortable, or soften your gaze downward.' },
      { text: 'Take three slow, deep breaths. With each exhale, let your body get a little heavier.' },
      { text: 'Picture a place where you feel completely safe and calm. It can be real or imaginary — a beach, a forest, a cozy room, somewhere from your childhood.' },
      { text: 'Look around this place in your mind. What do you see? Notice the colors, the light, the shapes around you.' },
      { text: 'What do you hear in this place? Maybe water, wind through trees, soft music, or simply quiet.' },
      { text: 'Feel the temperature. Is it warm or cool? Notice the air on your skin, the surface beneath you.' },
      { text: 'Take a slow breath and breathe in the air of this place. Let it feel real. You are safe here.' },
      { text: 'Rest here for a moment. There is nothing you need to do. You are just here, and it is peaceful.' },
      { text: 'When you\'re ready, slowly bring your awareness back to the room. Wiggle your fingers, open your eyes gently.' },
    ],
  },

  // ── 4. Progressive Muscle Relaxation ──────────────────────
  {
    id: 'pmr',
    name: 'Progressive Muscle Relaxation',
    tagline: 'Release physical tension by tensing and letting go of each muscle group.',
    steps: [
      { text: 'Find a comfortable position, sitting or lying down. Take two slow breaths to settle in.' },
      { text: 'Hands and forearms: Make tight fists and squeeze hard.', duration: 5 },
      { text: 'Let your hands go completely. Feel the warmth and release flowing through your fingers.' },
      { text: 'Shoulders and neck: Shrug your shoulders up toward your ears as high as they\'ll go.', duration: 5 },
      { text: 'Drop your shoulders. Feel the weight fall away. Notice the difference.' },
      { text: 'Face: Scrunch everything — close your eyes tight, wrinkle your nose, press your lips together.', duration: 5 },
      { text: 'Release your face completely. Let your jaw go soft, let your eyes rest.' },
      { text: 'Core: Tighten your stomach muscles as if you\'re bracing for something.', duration: 5 },
      { text: 'Let your stomach soften. Breathe into your belly.' },
      { text: 'Legs and feet: Press your feet into the floor and tighten your legs.', duration: 5 },
      { text: 'Let your legs go soft. Feel them heavy and relaxed.' },
      { text: 'Scan your whole body from head to toe. Notice what feels different. Stay here as long as you like.' },
    ],
  },

  // ── 5. Cold Water ─────────────────────────────────────────
  {
    id: 'cold-water',
    name: 'Cold Water Reset',
    tagline: 'Activate your body\'s natural calm reflex with cold water.',
    steps: [
      { text: 'Go to a sink, or grab a glass of cold water or ice.' },
      { text: 'Run cold water over your wrists and inner forearms for about 30 seconds. The pulse points here help cool your body quickly.' },
      { text: 'If you have ice, hold a cube in your hand or press it to your wrists. This activates the dive reflex — your heart rate slows naturally.' },
      { text: 'Splash cold water on your face, especially your cheeks and forehead. Take a breath between splashes.' },
      { text: 'If you have a cold glass or bottle, hold it in both hands. Feel the cold, the weight, the condensation.' },
      { text: 'Drink a glass of cold water slowly. Each sip is a small anchor to the present moment.' },
      { text: 'Take a breath. Notice your heart rate. Your nervous system is resetting.' },
    ],
  },

  // ── 6. Movement & Shaking ─────────────────────────────────
  {
    id: 'movement-shaking',
    name: 'Movement & Shaking',
    tagline: 'Discharge stress energy from your body through gentle movement.',
    steps: [
      { text: 'Stand up if you can, or sit at the edge of your seat. Shake your hands out like you\'re flicking water off your fingertips.' },
      { text: 'Let the shaking travel up your arms, into your shoulders. Exaggerate it a little — this is on purpose.' },
      { text: 'Add your head with a gentle "no" shake — loose and easy, not forced.' },
      { text: 'If you\'re standing, let the shaking move into your hips and legs. Bend your knees softly and let your whole body vibrate loosely.' },
      { text: 'Walk around the room if you can — even just a few steps. Notice your feet on the floor.' },
      { text: 'Roll your shoulders backward three times, slowly. Feel the blades move.' },
      { text: 'Take a big breath in, rise up on your toes, then let everything drop as you exhale. Repeat twice.' },
      { text: 'Come to stillness. Notice how your body feels compared to when you started.' },
    ],
  },
]
