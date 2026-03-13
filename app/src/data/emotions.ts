export interface EmotionCategory {
  id: string
  label: string
  color: string          // CSS custom property value for accent
  emotions: string[]
}

export const EMOTION_CATEGORIES: EmotionCategory[] = [
  {
    id: 'joy',
    label: 'Joy',
    color: '#e8c9a0',
    emotions: ['Happy', 'Grateful', 'Excited', 'Content', 'Playful'],
  },
  {
    id: 'sadness',
    label: 'Sadness',
    color: '#b8cce4',
    emotions: ['Sad', 'Lonely', 'Grieving', 'Disappointed', 'Hopeless'],
  },
  {
    id: 'anger',
    label: 'Anger',
    color: '#e4b8b8',
    emotions: ['Angry', 'Frustrated', 'Resentful', 'Irritated', 'Furious'],
  },
  {
    id: 'fear',
    label: 'Fear',
    color: '#c8b8e4',
    emotions: ['Anxious', 'Scared', 'Worried', 'Overwhelmed', 'Panicked'],
  },
  {
    id: 'disgust',
    label: 'Disgust',
    color: '#b8e4c8',
    emotions: ['Disgusted', 'Repulsed', 'Uncomfortable', 'Judgmental', 'Nauseated'],
  },
  {
    id: 'shame',
    label: 'Shame',
    color: '#e4d4b8',
    emotions: ['Ashamed', 'Guilty', 'Embarrassed', 'Humiliated', 'Regretful'],
  },
  {
    id: 'love',
    label: 'Love',
    color: '#e4b8d4',
    emotions: ['Loved', 'Connected', 'Warm', 'Caring', 'Tender'],
  },
  {
    id: 'surprise',
    label: 'Surprise',
    color: '#e4e4b8',
    emotions: ['Surprised', 'Shocked', 'Amazed', 'Confused', 'Startled'],
  },
  {
    id: 'unsure',
    label: "I'm not sure / something else",
    color: '#e2d9d1',
    emotions: ['Numb', 'Empty', 'Mixed up', 'Hard to say', 'Something else'],
  },
]
