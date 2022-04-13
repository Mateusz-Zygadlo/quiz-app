import type { Counter } from '../../types/Counter.js'
import type { QuizObjType } from '../../types/QuizObj.js';
import { game } from '../../components/game.js'

interface NextAnswerProps {
  userStats: Counter;
  answer: Counter;
  selector: HTMLElement;
  quizObj: QuizObjType[];
  actualQuiz: Counter;
}

export function nextAnswer({ 
  userStats, 
  answer, 
  selector, 
  quizObj, 
  actualQuiz 
}: NextAnswerProps) {
  answer.increment()
  
  return game({
    selector,
    answer,
    userStats,
    quizObj,
    actualQuiz
  })
}