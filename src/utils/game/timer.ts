import type { Counter } from '../../types/Counter.js'
import type { QuizObjType } from '../../types/QuizObj.js'
import { buttonCallback } from './buttonCallback.js'
import { qs } from '../dom/qs.js'

interface TimerProps {
  time: number;
  userStats: Counter; 
  answer: Counter;
  selector: HTMLElement;
  quizObj: QuizObjType[];
  actualQuiz: Counter;
  progressTimer: {
    clear: () => void;
  };
}

type Timer = {
  clear: () => void;
}

export function timer({ 
  time, 
  userStats, 
  answer, 
  selector, 
  quizObj, 
  actualQuiz, 
  progressTimer 
}: TimerProps): Timer {
  let count = time
  let timer = setInterval(() => {
    count--
    qs('.quiz-container .timer-container .timer').innerText = `${count}`

    if(!count) {
      buttonCallback({ userStats, answer, selector, isWinner: false, quizObj, actualQuiz })
      progressTimer.clear()
      clearInterval(timer)
    }
  }, 1000)

  function clear() {
    return clearInterval(timer)
  }

  return {
    clear
  }
}