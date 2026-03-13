import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { InstallPrompt } from './InstallPrompt'
import './AppShell.css'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <Link to="/" className="app-shell__logo">
          Feel Check
        </Link>
      </header>
      <main className="app-shell__main">
        {children}
      </main>
      <InstallPrompt />
    </div>
  )
}
