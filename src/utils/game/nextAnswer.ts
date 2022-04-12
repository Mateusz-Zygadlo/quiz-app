import type { Counter } from '../../types/Counter.js'
import { game } from '../../components/game.js'

interface NextAnswerProps {
  userStats: Counter;
  answer: Counter;
  selector: HTMLElement;
}

export function nextAnswer({ userStats, answer, selector }: NextAnswerProps) {
  answer.increment()
  
  return game({
    selector,
    answer,
    userStats,
  })
}