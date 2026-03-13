import { useState } from 'react'
import { EMOTION_CATEGORIES, type EmotionCategory } from '../../data/emotions'
import './EmotionPicker.css'

interface EmotionPickerProps {
  onSelect: (category: string, emotion: string) => void
}

export function EmotionPicker({ onSelect }: EmotionPickerProps) {
  const [selected, setSelected] = useState<EmotionCategory | null>(null)

  function handleCategory(cat: EmotionCategory) {
    setSelected(cat)
  }

  function handleEmotion(emotion: string) {
    if (!selected) return
    onSelect(selected.label, emotion)
  }

  function handleBack() {
    setSelected(null)
  }

  if (selected) {
    return (
      <div className="emotion-picker">
        <button className="emotion-picker__back" onClick={handleBack}>
          ← Back
        </button>
        <p className="emotion-picker__prompt">
          Which feels most like what you're experiencing?
        </p>
        <div className="emotion-picker__grid">
          {selected.emotions.map((emotion) => (
            <button
              key={emotion}
              className="emotion-chip"
              style={{ '--chip-color': selected.color } as React.CSSProperties}
              onClick={() => handleEmotion(emotion)}
            >
              {emotion}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="emotion-picker">
      <p className="emotion-picker__prompt">
        What's the closest to what you're feeling right now?
      </p>
      <div className="emotion-picker__categories">
        {EMOTION_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className="emotion-category"
            style={{ '--chip-color': cat.color } as React.CSSProperties}
            onClick={() => handleCategory(cat)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}
