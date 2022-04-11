import { createElement, addToParents, clearSelector } from '../utils/dom/index.js'
import { inGame } from './inGame.js';
import type { GameStateProps } from '../interfaces/CurrentCount.js'

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
    return inGame({ 
      selector, 
      answer: currentAnswer, 
      gameState: currentStats 
    })
  })

  addToParents({ selector, child: h1 })
  addToParents({ selector, child: button })
}