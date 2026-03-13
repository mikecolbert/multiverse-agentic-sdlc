import { useLocation, useNavigate, Link } from 'react-router-dom'
import { CrisisBanner } from '../components/crisis/CrisisBanner'
import './ReflectiveComplete.css'

interface ReflectiveCompleteState {
  highIntensity?: boolean
  emotion?: string
  intensity?: number
  dayRating?: string
  highlight?: string
  lowlight?: string
}

export function ReflectiveComplete() {
  const location = useLocation()
  const navigate = useNavigate()
  const state = (location.state ?? {}) as ReflectiveCompleteState
  const { highIntensity, emotion, intensity, dayRating } = state

  function handleJournalPrompts() {
    navigate('/journal-prompts', {
      state: { emotion, intensity, dayRating, mode: 'reflective' },
    })
  }

  return (
    <div className="reflective-complete">
      <div className="reflective-complete__affirmation">
        <div className="reflective-complete__icon" aria-hidden="true">✦</div>
        <h1>You showed up for yourself today.</h1>
        <p>
          Taking time to reflect takes courage. Whatever today held, you
          paused to notice — and that matters more than you know.
        </p>
      </div>

      {highIntensity && <CrisisBanner />}

      <div className="reflective-complete__actions">
        <button
          className="reflective-complete__btn reflective-complete__btn--primary"
          onClick={handleJournalPrompts}
        >
          See journal prompts
        </button>
        <Link to="/regulate" className="reflective-complete__btn reflective-complete__btn--secondary">
          I need help right now
        </Link>
        <Link to="/" className="reflective-complete__btn reflective-complete__btn--ghost">
          Go home
        </Link>
      </div>
    </div>
  )
}
