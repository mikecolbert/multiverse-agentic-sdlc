import { useState } from 'react'
import './BodyLocationInput.css'

interface BodyLocationInputProps {
  onNext: (location: string) => void
}

export function BodyLocationInput({ onNext }: BodyLocationInputProps) {
  const [value, setValue] = useState('')

  function handleNext() {
    onNext(value.trim())
  }

  return (
    <div className="body-location">
      <p className="body-location__prompt">
        Where do you feel this in your body?
      </p>
      <p className="body-location__hint">
        This is just for you — it won't be saved.
      </p>
      <textarea
        className="body-location__input"
        placeholder="e.g. chest, throat, shoulders, stomach..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
        aria-label="Where do you feel this in your body?"
      />
      <button className="btn-next" onClick={handleNext}>
        {value.trim() ? 'Continue' : 'Skip'}
      </button>
    </div>
  )
}
