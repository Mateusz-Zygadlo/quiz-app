import { qs } from './utils/dom/index.js';
import { welcome } from './components/welcome.js'
import { inGame } from './components/inGame.js'
import { counter } from './utils/counter.js';
import type { GameStateProps } from './interfaces/CurrentCount.js'

const container = qs('.container')
const currentAnswer = counter()
const currentStats = counter()

welcome({ 
  selector: container, 
  currentAnswer,
  currentStats
})

interface NextAnswerProps {
  currentStats: GameStateProps;
  currentAnswer: GameStateProps;
  selector: HTMLElement;
}

export function nextAnswer({ currentStats, currentAnswer, selector }: NextAnswerProps) {
  currentAnswer.increment()
  console.log(currentAnswer.getCount())
  
  return inGame({
    selector,
    answer: currentAnswer,
    gameState: currentStats,
  })
}