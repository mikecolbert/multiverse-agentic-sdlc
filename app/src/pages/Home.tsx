import { Link } from 'react-router-dom'
import { getStreak } from '../lib/streak'
import './Home.css'

export function Home() {
  const streak = getStreak()

  return (
    <div className="home">
      <div className="home__greeting">
        <h1>How are you doing?</h1>
        <p className="home__subtext">
          Take a moment to check in with yourself. You showed up — that matters.
        </p>
      </div>

      {streak > 0 && (
        <div className="home__streak">
          <span className="home__streak-count">{streak}-day streak</span>
          <span className="home__streak-label">Keep going</span>
        </div>
      )}

      <div className="home__actions">
        <Link to="/checkin/quick" className="btn btn--primary btn--large">
          Quick Check-In
          <span className="btn__hint">~2 minutes</span>
        </Link>
        <Link to="/checkin/reflective" className="btn btn--secondary btn--large">
          End of Day Reflection
          <span className="btn__hint">~5 minutes</span>
        </Link>
      </div>

      <div className="home__help">
        <Link to="/regulate" className="btn btn--outline">
          Need help right now?
        </Link>
      </div>

      <footer className="home__footer">
        <Link to="/crisis-support" className="home__crisis-link">
          Crisis support
        </Link>
      </footer>
    </div>
  )
}
