export interface JournalPrompt {
  id: string
  text: string
  emotionCategories: string[]   // emotion category ids, or ['any'] for general
  intensityRange: [number, number]  // inclusive [min, max], 1–5
  context?: 'reflective' | 'quick' | 'any'
}

export const JOURNAL_PROMPTS: JournalPrompt[] = [
  // ─── Joy ───────────────────────────────────────────────────────────────────
  {
    id: 'joy-1',
    text: 'What specifically brought you joy today? What made that moment feel good?',
    emotionCategories: ['joy'],
    intensityRange: [1, 5],
  },
  {
    id: 'joy-2',
    text: 'Who or what are you most grateful for right now, and why?',
    emotionCategories: ['joy'],
    intensityRange: [1, 3],
  },
  {
    id: 'joy-3',
    text: 'When you feel this happy, what do you notice in your body? How does joy live in you physically?',
    emotionCategories: ['joy'],
    intensityRange: [3, 5],
  },
  {
    id: 'joy-4',
    text: 'What small thing made you smile today that you almost let pass unnoticed?',
    emotionCategories: ['joy'],
    intensityRange: [1, 3],
  },
  {
    id: 'joy-5',
    text: 'How can you carry this feeling forward into tomorrow? What would help you hold onto it?',
    emotionCategories: ['joy'],
    intensityRange: [3, 5],
  },

  // ─── Sadness ───────────────────────────────────────────────────────────────
  {
    id: 'sad-1',
    text: 'What are you grieving or missing right now? Give it room on the page.',
    emotionCategories: ['sadness'],
    intensityRange: [1, 5],
  },
  {
    id: 'sad-2',
    text: 'What does this sadness want you to know? If it could speak, what would it say?',
    emotionCategories: ['sadness'],
    intensityRange: [1, 5],
  },
  {
    id: 'sad-3',
    text: 'Is there one small act of kindness you could offer yourself today?',
    emotionCategories: ['sadness'],
    intensityRange: [3, 5],
  },
  {
    id: 'sad-4',
    text: 'Who in your life feels safe to be sad around? What makes them feel that way?',
    emotionCategories: ['sadness'],
    intensityRange: [1, 3],
  },
  {
    id: 'sad-5',
    text: 'Write about a time you moved through sadness. What helped you get to the other side?',
    emotionCategories: ['sadness'],
    intensityRange: [1, 3],
  },

  // ─── Anger ─────────────────────────────────────────────────────────────────
  {
    id: 'anger-1',
    text: 'What boundary was crossed or need went unmet? What would you say if you could speak freely?',
    emotionCategories: ['anger'],
    intensityRange: [1, 5],
  },
  {
    id: 'anger-2',
    text: 'Underneath the anger, what other feeling might be there — hurt, fear, disappointment?',
    emotionCategories: ['anger'],
    intensityRange: [1, 5],
  },
  {
    id: 'anger-3',
    text: 'What does your anger need right now — to be heard, to act, or to rest?',
    emotionCategories: ['anger'],
    intensityRange: [3, 5],
  },
  {
    id: 'anger-4',
    text: 'If a close friend described this situation to you, what would you tell them?',
    emotionCategories: ['anger'],
    intensityRange: [1, 3],
  },
  {
    id: 'anger-5',
    text: 'What would a healthy outlet for this feeling look like for you today?',
    emotionCategories: ['anger'],
    intensityRange: [2, 5],
  },

  // ─── Fear ──────────────────────────────────────────────────────────────────
  {
    id: 'fear-1',
    text: 'What specifically are you afraid of? Try to name it as precisely as you can.',
    emotionCategories: ['fear'],
    intensityRange: [1, 5],
  },
  {
    id: 'fear-2',
    text: 'What is the worst-case scenario you\'re imagining? How likely is it, really?',
    emotionCategories: ['fear'],
    intensityRange: [1, 3],
  },
  {
    id: 'fear-3',
    text: 'What is one thing within your control right now, even if everything else feels uncertain?',
    emotionCategories: ['fear'],
    intensityRange: [3, 5],
  },
  {
    id: 'fear-4',
    text: 'What has helped you feel safe in the past? How might you access that now?',
    emotionCategories: ['fear'],
    intensityRange: [3, 5],
  },
  {
    id: 'fear-5',
    text: 'Write a letter to the part of you that\'s scared. What does that part need to hear?',
    emotionCategories: ['fear'],
    intensityRange: [1, 5],
  },

  // ─── Disgust ───────────────────────────────────────────────────────────────
  {
    id: 'disgust-1',
    text: 'What values of yours feel violated right now? What matters deeply to you that this touches?',
    emotionCategories: ['disgust'],
    intensityRange: [1, 5],
  },
  {
    id: 'disgust-2',
    text: 'What are you trying to push away or protect yourself from? Is there information in that impulse?',
    emotionCategories: ['disgust'],
    intensityRange: [1, 5],
  },
  {
    id: 'disgust-3',
    text: 'What would it mean to create more distance from what\'s bothering you?',
    emotionCategories: ['disgust'],
    intensityRange: [2, 5],
  },

  // ─── Shame ─────────────────────────────────────────────────────────────────
  {
    id: 'shame-1',
    text: 'What is the story you\'re telling yourself right now? Is it true, or is it a fear?',
    emotionCategories: ['shame'],
    intensityRange: [1, 5],
  },
  {
    id: 'shame-2',
    text: 'If a friend told you they felt exactly the way you do right now, what would you say to them?',
    emotionCategories: ['shame'],
    intensityRange: [1, 5],
  },
  {
    id: 'shame-3',
    text: 'What would self-compassion look like in this moment — not excusing, but understanding?',
    emotionCategories: ['shame'],
    intensityRange: [3, 5],
  },
  {
    id: 'shame-4',
    text: 'Is there something you\'d like to do differently next time? What would that look like?',
    emotionCategories: ['shame'],
    intensityRange: [1, 3],
  },

  // ─── Love ──────────────────────────────────────────────────────────────────
  {
    id: 'love-1',
    text: 'Who or what are you feeling connected to right now? What does that connection mean to you?',
    emotionCategories: ['love'],
    intensityRange: [1, 5],
  },
  {
    id: 'love-2',
    text: 'How do you most naturally show care to others? How well do you offer that same care to yourself?',
    emotionCategories: ['love'],
    intensityRange: [1, 5],
  },
  {
    id: 'love-3',
    text: 'What does being truly seen or known by someone feel like to you?',
    emotionCategories: ['love'],
    intensityRange: [2, 5],
  },

  // ─── Surprise ──────────────────────────────────────────────────────────────
  {
    id: 'surprise-1',
    text: 'What caught you off guard today? What assumptions did it challenge?',
    emotionCategories: ['surprise'],
    intensityRange: [1, 5],
  },
  {
    id: 'surprise-2',
    text: 'How do you typically respond when things don\'t go as planned? What does that tell you?',
    emotionCategories: ['surprise'],
    intensityRange: [1, 5],
  },
  {
    id: 'surprise-3',
    text: 'Is there any part of what surprised you that contains something useful or even good?',
    emotionCategories: ['surprise'],
    intensityRange: [1, 4],
  },

  // ─── Unsure ────────────────────────────────────────────────────────────────
  {
    id: 'unsure-1',
    text: 'You don\'t need to name it perfectly. Just write what\'s floating around inside you right now.',
    emotionCategories: ['unsure'],
    intensityRange: [1, 5],
  },
  {
    id: 'unsure-2',
    text: 'If you drew your current feeling as a weather pattern, what would it look like?',
    emotionCategories: ['unsure'],
    intensityRange: [1, 5],
  },
  {
    id: 'unsure-3',
    text: 'What do you know for certain right now, even if everything else feels unclear?',
    emotionCategories: ['unsure'],
    intensityRange: [1, 5],
  },

  // ─── General / Any ─────────────────────────────────────────────────────────
  {
    id: 'any-1',
    text: 'What do you most need right now — and is there one small step you could take toward that?',
    emotionCategories: ['any'],
    intensityRange: [1, 5],
  },
  {
    id: 'any-2',
    text: 'What has been taking up the most space in your mind today?',
    emotionCategories: ['any'],
    intensityRange: [1, 5],
  },
  {
    id: 'any-3',
    text: 'Looking back at today: what would you tell yourself this morning if you could?',
    emotionCategories: ['any'],
    intensityRange: [1, 5],
  },
  {
    id: 'any-4',
    text: 'What feeling have you been avoiding noticing? What might happen if you let yourself feel it?',
    emotionCategories: ['any'],
    intensityRange: [1, 5],
  },
  {
    id: 'any-5',
    text: 'What\'s one thing — big or tiny — that you\'re proud of from today?',
    emotionCategories: ['any'],
    intensityRange: [1, 5],
  },
  {
    id: 'any-6',
    text: 'If your body could write this journal entry instead of your mind, what would it say?',
    emotionCategories: ['any'],
    intensityRange: [1, 5],
  },
  {
    id: 'any-7',
    text: 'What feels unfinished or unresolved right now? What would "done" look like?',
    emotionCategories: ['any'],
    intensityRange: [2, 5],
  },
  {
    id: 'any-8',
    text: 'Write about one moment from today as if you\'re describing it to someone who loves you.',
    emotionCategories: ['any'],
    intensityRange: [1, 5],
  },

  // ─── High-intensity general ────────────────────────────────────────────────
  {
    id: 'hi-1',
    text: 'You made it through today. What got you here — even if it was just getting through?',
    emotionCategories: ['any'],
    intensityRange: [4, 5],
  },
  {
    id: 'hi-2',
    text: 'When things feel this intense, what\'s the one thing that helps most — even a little?',
    emotionCategories: ['any'],
    intensityRange: [4, 5],
  },
  {
    id: 'hi-3',
    text: 'What would it feel like to set this down for just ten minutes? What would you do?',
    emotionCategories: ['any'],
    intensityRange: [4, 5],
  },
]
