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

export function nextAnswer(props: NextAnswerProps): void {
  props.answer.increment()
  
  return game({ ...props })
}