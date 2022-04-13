import type { Counter } from '../../types/Counter.js'
import type { QuizObjType } from '../../types/QuizObj.js'
import { clearIntervals } from '../dom/clearIntervals.js'
import { addClass } from '../css/addClass.js'
import { buttonCallback } from './buttonCallback.js'

type Timers = {
  clear: () => void;
}

interface EventButtonsProps {
  arrOfSelectors: Element[];
  type: string;
  progressTimer: Timers;
  getTimer: Timers;
  winner: boolean;
  userStats: Counter;
  answer: Counter;
  selector: HTMLElement;
  quizObj: QuizObjType[];
  actualQuiz: Counter;
}

export function gameEventButton({ 
  arrOfSelectors,
  type,
  progressTimer,
  getTimer,
  winner, 
  userStats,
  answer,
  selector,
  quizObj,
  actualQuiz
}: EventButtonsProps) {
  arrOfSelectors.forEach((btn: Element) => {
    btn.addEventListener(type, () => {
      clearIntervals({ progressTimer, getTimer })
      addClass({ selector: btn, name: winner ? 'winner' : 'loser' })
      buttonCallback({ userStats, answer, selector, isWinner: winner, quizObj, actualQuiz })
    })
  })
}