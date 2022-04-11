import { createElement, addToParents, clearSelector } from '../utils/dom/index.js'
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

  addToParents({ selector, child: h1 })
  addToParents({ selector, child: button })
}