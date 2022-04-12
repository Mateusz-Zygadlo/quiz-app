import type { GameStateProps } from '../interfaces/CurrentCount.js'
import { clearSelector } from '../utils/dom/clearSelector.js'
import { addToParent } from '../utils/dom/addToParent.js'
import { game } from './game.js';
import { createElement } from '../utils/dom/createElement.js'

interface WelcomeProps {
  selector: HTMLElement;
  currentAnswer: GameStateProps;
  currentStats: GameStateProps;
}

export function welcome({ selector, currentAnswer, currentStats }: WelcomeProps) {
  clearSelector({ selector })
  currentStats.reset()
  currentAnswer.reset()
  
  const h1 = createElement({
    type: 'h1',
    options: {
      content: 'Welcome to Quiz App'
    }
  });
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
      answer: currentAnswer, 
      gameState: currentStats 
    })
  })

  addToParent({ selector, child: h1 })
  addToParent({ selector, child: button })
}