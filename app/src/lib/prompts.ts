import { JOURNAL_PROMPTS, type JournalPrompt } from '../data/prompts'

export interface PromptContext {
  emotion?: string | null
  emotionCategory?: string | null
  intensity?: number | null
  dayRating?: string | null
  mode?: 'quick' | 'reflective' | null
}

/**
 * Selects exactly 3 prompts based on the user's session context.
 *
 * Strategy:
 *   1. Pick 1 prompt matching the emotion category
 *   2. Pick 1 prompt matching the intensity range (different from #1)
 *   3. Pick 1 general 'any' prompt (different from #1 and #2)
 *
 * Falls back to 3 general prompts if context is missing or no matches found.
 */
export function selectPrompts(ctx: PromptContext | null | undefined): JournalPrompt[] {
  const category = ctx?.emotionCategory ?? null
  const intensity = ctx?.intensity ?? null

  const generals = JOURNAL_PROMPTS.filter(p => p.emotionCategories.includes('any'))

  // No context — return 3 general prompts
  if (!category && !intensity) {
    return pickN(generals, 3, [])
  }

  const used: string[] = []
  const result: JournalPrompt[] = []

  // 1. Emotion-category match
  if (category) {
    const emotionPool = JOURNAL_PROMPTS.filter(
      p =>
        p.emotionCategories.includes(category) &&
        !p.emotionCategories.includes('any') &&
        withinIntensity(p, intensity)
    )
    const pick = pickOne(emotionPool, used)
    if (pick) {
      result.push(pick)
      used.push(pick.id)
    }
  }

  // 2. Intensity-matched prompt (prefer emotion-agnostic or different category)
  if (intensity !== null) {
    const intensityPool = JOURNAL_PROMPTS.filter(
      p => withinIntensity(p, intensity) && !used.includes(p.id)
    )
    const pick = pickOne(intensityPool, used)
    if (pick) {
      result.push(pick)
      used.push(pick.id)
    }
  }

  // 3. General fallback prompt
  const generalPick = pickOne(generals.filter(p => !used.includes(p.id)), used)
  if (generalPick) {
    result.push(generalPick)
    used.push(generalPick.id)
  }

  // If we still need prompts (e.g. sparse category coverage), fill from generals
  while (result.length < 3) {
    const fill = pickOne(generals.filter(p => !used.includes(p.id)), used)
    if (!fill) break
    result.push(fill)
    used.push(fill.id)
  }

  // Last resort: deduplicated slice
  if (result.length === 0) {
    return pickN(generals, 3, [])
  }

  return result
}

function withinIntensity(prompt: JournalPrompt, intensity: number | null): boolean {
  if (intensity === null) return true
  return intensity >= prompt.intensityRange[0] && intensity <= prompt.intensityRange[1]
}

function pickOne(pool: JournalPrompt[], used: string[]): JournalPrompt | null {
  const available = pool.filter(p => !used.includes(p.id))
  if (available.length === 0) return null
  return available[Math.floor(Math.random() * available.length)]
}

function pickN(pool: JournalPrompt[], n: number, used: string[]): JournalPrompt[] {
  const shuffled = [...pool].filter(p => !used.includes(p.id)).sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}
