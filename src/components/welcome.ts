import type { Counter } from '../types/Counter.js'
import { clearSelector } from '../utils/dom/clearSelector.js'
import { addToParent } from '../utils/dom/addToParent.js'
import { game } from './game.js';
import { createElement } from '../utils/dom/createElement.js'

interface WelcomeProps {
  selector: HTMLElement;
  answer: Counter;
  userStats: Counter;
}

export function welcome({ selector, answer, userStats }: WelcomeProps) {
  clearSelector({ selector })
  answer.reset()
  userStats.reset()
  
  const h1 = createElement({
    type: 'h1',
    options: {
      content: 'Welcome to Quiz App'
    }
  })
  const button = createElement({
    type: 'button',
    options: {
      content: 'Start',
      id: 'start'
    }
  })

  button.addEventListener('click', () => {
    return game({ 
      selector, 
      answer, 
      userStats, 
    })
  })

  addToParent({ selector, child: h1 })
  addToParent({ selector, child: button })
}