import { createElement, addToParents } from '../utils/dom/index.js'
import { quizObj } from '../gameObj.js'
import { qsa, clearSelector } from '../utils/dom/index.js'
import { hasClass } from '../utils/css/index.js';
import { end } from './end.js'
import { nextAnswer } from '../index.js';

import type { GameStateProps } from '../interfaces/CurrentCount.js'

interface InGameProps {
  selector: HTMLElement;
  answer: GameStateProps;
  gameState: GameStateProps;
}

export function inGame({ selector, answer, gameState }: InGameProps) {
  clearSelector({ selector })
  
  const h1 = createElement({
    type: 'h1',
    options: {
      content: quizObj[answer.getCount()].question
    }
  });

  const answersContainer = createElement({
    type: 'div',
    options: {
      class: "quiz-grid"
    }
  })

  for(const a of quizObj[answer.getCount()].answers) {
    const element = createElement({ ...a })
    addToParents({ selector: answersContainer, child: element })
  }  
  
  addToParents({ selector, child: h1 })
  addToParents({ selector, child: answersContainer })

  const buttons = qsa('.quiz-grid button')
  let losers: Element[] = []
  let winner: Element = buttons[0];
  
  buttons.forEach((button: Element) => hasClass({ selector: button, name: 'winner'}) ? winner = button : losers.push(button))
  
  losers.forEach((button: Element) => {
    button.addEventListener('click', () => {
      return isGame({ currentGame: answer.getCount() }) 
        ? nextAnswer({ currentStats: gameState, currentAnswer: answer, selector })
        : end({ selector, stats: { allAnswers: answer, yourResult: gameState } })
    })
  })

  winner.addEventListener('click', () => {
    gameState.increment()
     return isGame({ currentGame: answer.getCount() }) 
        ? nextAnswer({ currentStats: gameState, currentAnswer: answer, selector })
        : end({ selector, stats: { allAnswers: answer, yourResult: gameState } })
  })
}

interface IsGameProps {
  currentGame: number
}

export function isGame({ currentGame }: IsGameProps): boolean {
  return !!quizObj[currentGame + 1]
}