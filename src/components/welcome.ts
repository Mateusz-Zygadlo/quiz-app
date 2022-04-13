import type { Counter } from '../types/Counter.js'
import type { QuizObjType } from '../types/QuizObj.js';
import { clearSelector } from '../utils/dom/clearSelector.js'
import { addToParent } from '../utils/dom/addToParent.js'
import { game } from './game.js';
import { createElement } from '../utils/dom/createElement.js'
import { allNames } from '../quizzes/allNames.js'
import { scoreboard } from './scoreboard.js'

interface WelcomeProps {
  selector: HTMLElement;
  answer: Counter;
  userStats: Counter;
  quizObj: QuizObjType[];
  actualQuiz: Counter
}

export function welcome({ 
  selector, 
  answer, 
  userStats, 
  quizObj, 
  actualQuiz 
}: WelcomeProps) {
  clearSelector({ selector })
  answer.reset()
  userStats.reset()
  
  const h1 = createElement({
    type: 'h1',
    options: {
      content: 'Welcome to Quiz App'
    }
  })

  const p = createElement({
    type: 'p',
    options: {
      content: 'Choose quiz'
    }
  })

  const buttonContainer = createElement({
    type: 'div',
    options: {
      class: 'grid'
    }
  })

  for(let { index, ...rest } of allNames) {
    const quizButton = createElement({ ...rest })

    quizButton.addEventListener('click', () => {
      actualQuiz.setCount(index)
      return game({ 
        selector, 
        answer, 
        userStats, 
        quizObj, 
        actualQuiz,
      })
    })

    addToParent({ selector: buttonContainer, child: quizButton })
  }

  const viewScoreboard = createElement({
    type: 'button',
    options: {
      content: 'view scoreboard',
      class: 'smaller'
    }
  })

  viewScoreboard.addEventListener('click', (): void => {
    scoreboard({
      selector, 
      answer, 
      userStats, 
      quizObj, 
      actualQuiz 
    })
  })

  addToParent({ selector, child: h1 })
  addToParent({ selector, child: p })
  addToParent({ selector, child: buttonContainer })
  addToParent({ selector, child:viewScoreboard })
}