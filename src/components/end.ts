import { clearSelector } from '../utils/dom/clearSelector.js'
import { addToParent } from '../utils/dom/addToParent.js'
import { createElement } from '../utils/dom/createElement.js'
import { welcome } from '../components/welcome.js'
import type { Counter } from '../types/Counter.js'
import type { QuizObjType } from '../types/QuizObj.js'

interface EndProps {
  selector: HTMLElement;
  stats: {
    answers: Counter;
    userStats: Counter;
  };
  quizObj: QuizObjType;
}

export function end({ selector, stats: { answers, userStats}, quizObj }: EndProps) {
  clearSelector({ selector })
  
  const h1 = createElement({
    type: 'h1',
    options: {
      content: `Your result is: ${userStats.getCount()}/${answers.getCount() + 1}`
    }
  });
  const button = createElement({
    type: 'button',
    options: {
      content: 'back to home page',
      id: 'end'
    }
  })

  button.addEventListener('click', (): void => {
    welcome({ 
      selector,  
      answer: answers, 
      userStats, 
      quizObj 
    })
  })

  addToParent({ selector, child: h1 })
  addToParent({ selector, child: button })
}