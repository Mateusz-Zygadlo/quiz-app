import type { GameStateProps } from '../../interfaces/CurrentCount.js'
import { game } from '../../components/game.js'

interface NextAnswerProps {
  currentStats: GameStateProps;
  currentAnswer: GameStateProps;
  selector: HTMLElement;
}

export function nextAnswer({ currentStats, currentAnswer, selector }: NextAnswerProps) {
  currentAnswer.increment()
  
  return game({
    selector,
    answer: currentAnswer,
    gameState: currentStats,
  })
}