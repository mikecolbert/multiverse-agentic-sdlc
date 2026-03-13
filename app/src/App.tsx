import { Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { Home } from './pages/Home'
import { QuickCheckin } from './pages/QuickCheckin'
import { ReflectiveCheckin } from './pages/ReflectiveCheckin'
import { CheckInComplete } from './pages/CheckInComplete'

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkin/quick" element={<QuickCheckin />} />
        <Route path="/checkin/reflective" element={<ReflectiveCheckin />} />
        <Route path="/checkin/complete" element={<CheckInComplete />} />
        {/* Phase 4 & 6 routes — placeholders until those phases are built */}
        <Route path="/regulate" element={<Navigate to="/" replace />} />
        <Route path="/crisis-support" element={<Navigate to="/" replace />} />
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}

export default App
