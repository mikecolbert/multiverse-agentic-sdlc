import { storage, STORAGE_KEYS } from './storage'

function todayString(): string {
  return new Date().toISOString().slice(0, 10) // YYYY-MM-DD
}

function yesterdayString(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

/** Record a check-in for today. Idempotent — safe to call multiple times per day. */
export function recordCheckIn(): void {
  const today = todayString()
  const stored = storage.get<string[]>(STORAGE_KEYS.STREAK_DATES) ?? []
  if (!stored.includes(today)) {
    storage.set(STORAGE_KEYS.STREAK_DATES, [...stored, today].sort())
  }
}

/** Return the current consecutive-day streak count. */
export function getStreak(): number {
  const stored = storage.get<string[]>(STORAGE_KEYS.STREAK_DATES) ?? []
  if (stored.length === 0) return 0

  const today = todayString()
  const yesterday = yesterdayString()

  // Streak only counts if the user has checked in today or yesterday
  const hasRecentCheckIn = stored.includes(today) || stored.includes(yesterday)
  if (!hasRecentCheckIn) return 0

  // Count consecutive days backward from today
  let streak = 0
  const d = new Date()

  while (true) {
    const dateStr = d.toISOString().slice(0, 10)
    if (stored.includes(dateStr)) {
      streak++
      d.setDate(d.getDate() - 1)
    } else {
      break
    }
  }

  return streak
}
