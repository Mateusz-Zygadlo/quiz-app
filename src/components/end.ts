import { clearSelector } from '../utils/dom/clearSelector.js'
import { addToParent } from '../utils/dom/addToParent.js'
import { createElement } from '../utils/dom/createElement.js'
import { welcome } from '../components/welcome.js'
import type { GameStateProps } from '../interfaces/CurrentCount.js'

interface EndProps {
  selector: HTMLElement;
  stats: {
    allAnswers: GameStateProps;
    yourResult: GameStateProps;
  }
}

export function end({ selector, stats: { allAnswers, yourResult} }: EndProps) {
  clearSelector({ selector })
  
  const h1 = createElement({
    type: 'h1',
    options: {
      content: `Your result is: ${yourResult.getCount()}/${allAnswers.getCount() + 1}`
    }
  });
  const button = createElement({
    type: 'button',
    options: {
      content: 'back to home page',
      id: 'end'
    }
  })

  button.addEventListener('click', () => welcome({ selector,  currentAnswer: allAnswers, currentStats: yourResult}))

  addToParent({ selector, child: h1 })
  addToParent({ selector, child: button })
}