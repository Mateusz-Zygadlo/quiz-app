import type { Counter } from '../types/Counter.js'
import type { QuizObjType } from '../types/QuizObj.js'
import { clearSelector } from '../utils/dom/clearSelector.js'
import { createElement } from '../utils/dom/createElement.js'
import { addToParent } from '../utils/dom/addToParent.js'
import { welcome } from './welcome.js'

interface ScoreboardProps {
  selector: HTMLElement;
  answer: Counter;
  userStats: Counter;
  quizObj: QuizObjType[];
  actualQuiz: Counter
}

export function scoreboard({
  selector,
  answer,
  userStats,
  quizObj,
  actualQuiz
}: ScoreboardProps): void {
  clearSelector({ selector })

  const h1 = createElement({
    type: 'h1',
    options: {
      content: 'Welcome to scoreboard'
    }
  })

  const button = createElement({
    type: 'button',
    options: {
      content: 'back to welcome page',
      class: 'smaller'
    }
  })

  button.addEventListener('click', (): void => {
    welcome({
      selector,
      answer,
      userStats,
      quizObj,
      actualQuiz
    })
  })

  console.log(JSON.parse(localStorage.getItem('scoreboard') as string))

  addToParent({ selector, child: h1 })
  addToParent({ selector, child: button })
}