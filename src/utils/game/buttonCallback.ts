import type { Counter } from '../../types/Counter.js'
import type { QuizObjType } from '../../types/QuizObj.js'
import { end } from '../../components/end.js'
import { qs } from '../dom/qs.js'
import { qsa } from '../dom/qsa.js'
import { nextAnswer } from '../../utils/game/nextAnswer.js'
import { isGame } from '../../utils/game/isGame.js'
import { sleep } from '../sleep.js'

interface ButtonCallbackProps {
  userStats: Counter;
  answer: Counter;
  selector: HTMLElement;
  isWinner: boolean;
  quizObj: QuizObjType[];
  actualQuiz: Counter;
}

export async function buttonCallback({ 
  userStats, 
  answer, 
  selector, 
  isWinner, 
  quizObj, 
  actualQuiz 
}: ButtonCallbackProps): Promise<void> {
  qsa('.quiz-container .grid button').forEach((button: any) => {
    button.disabled = true
  })
  
  if(isWinner){
    userStats.increment()
  }
  
  qs('.quiz-container .timer-container .timer').innerText = `${isWinner ? 'correct' : 'incorrect'}`
  await sleep(2000)

  const standardProps = {
    selector, 
    quizObj, 
    actualQuiz 
  }
  
  return isGame({ 
    game: answer.getCount(), 
    quizObj: quizObj[actualQuiz.getCount()]
  }) 
    ? nextAnswer({
        ...standardProps, 
        userStats, 
        answer
      })
    : end({ 
        ...standardProps,
        stats: { 
          answers: answer, 
          userStats 
        }
      })
}