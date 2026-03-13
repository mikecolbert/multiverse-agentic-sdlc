import './DayOverviewStep.css'

type DayRating = 'good' | 'mixed' | 'tough'

interface DayOverviewStepProps {
  onSelect: (rating: DayRating) => void
}

const OPTIONS: { value: DayRating; label: string; emoji: string; description: string }[] = [
  { value: 'good',  label: 'Good',  emoji: '☀️', description: 'Mostly positive, felt okay' },
  { value: 'mixed', label: 'Mixed', emoji: '🌤', description: 'Had its ups and downs' },
  { value: 'tough', label: 'Tough', emoji: '🌧', description: 'Difficult or draining' },
]

export function DayOverviewStep({ onSelect }: DayOverviewStepProps) {
  return (
    <div className="day-overview">
      <p className="day-overview__prompt">How was your day overall?</p>
      <div className="day-overview__options">
        {OPTIONS.map(({ value, label, emoji, description }) => (
          <button
            key={value}
            className={`day-option day-option--${value}`}
            onClick={() => onSelect(value)}
          >
            <span className="day-option__emoji" aria-hidden="true">{emoji}</span>
            <span className="day-option__label">{label}</span>
            <span className="day-option__desc">{description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
