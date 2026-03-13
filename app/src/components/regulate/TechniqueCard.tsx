import { useNavigate } from 'react-router-dom'
import { type Technique } from '../../data/techniques'
import './TechniqueCard.css'

interface TechniqueCardProps {
  technique: Technique
  isOpen: boolean
  onToggle: (id: string) => void
}

export function TechniqueCard({ technique, isOpen, onToggle }: TechniqueCardProps) {
  const navigate = useNavigate()

  return (
    <div className={`technique-card${isOpen ? ' technique-card--open' : ''}`}>
      <div className="technique-card__header">
        <div className="technique-card__info">
          <h3 className="technique-card__name">{technique.name}</h3>
          <p className="technique-card__tagline">{technique.tagline}</p>
        </div>
      </div>

      <div className="technique-card__actions">
        <button
          className="technique-card__remind"
          onClick={() => onToggle(technique.id)}
          aria-expanded={isOpen}
        >
          {isOpen ? 'Hide steps ↑' : 'Remind me how ↓'}
        </button>
        <button
          className="technique-card__guide"
          onClick={() => navigate(`/regulate/${technique.id}`)}
        >
          Guide me through it
        </button>
      </div>

      {isOpen && (
        <ol className="technique-card__steps">
          {technique.steps.map((step, i) => (
            <li key={i} className="technique-card__step">
              <span className="technique-card__step-text">{step.text}</span>
              {step.duration && (
                <span className="technique-card__step-duration">{step.duration}s</span>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
