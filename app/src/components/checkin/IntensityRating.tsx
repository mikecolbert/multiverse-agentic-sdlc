import { INTENSITY_HIGH_THRESHOLD } from '../../lib/constants'
import './IntensityRating.css'

const LEVELS = [
  { value: 1, label: 'Barely noticeable' },
  { value: 2, label: 'Mild' },
  { value: 3, label: 'Moderate' },
  { value: 4, label: 'Strong' },
  { value: 5, label: 'Overwhelming' },
] as const

interface IntensityRatingProps {
  onSelect: (value: 1 | 2 | 3 | 4 | 5) => void
}

export function IntensityRating({ onSelect }: IntensityRatingProps) {
  return (
    <div className="intensity-rating">
      <p className="intensity-rating__prompt">
        How intense does this feeling feel right now?
      </p>
      <div className="intensity-rating__options">
        {LEVELS.map(({ value, label }) => (
          <button
            key={value}
            className={`intensity-option${value >= INTENSITY_HIGH_THRESHOLD ? ' intensity-option--high' : ''}`}
            onClick={() => onSelect(value as 1 | 2 | 3 | 4 | 5)}
          >
            <span className="intensity-option__number">{value}</span>
            <span className="intensity-option__label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
