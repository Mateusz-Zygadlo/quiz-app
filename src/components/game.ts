import type { GameStateProps } from '../interfaces/CurrentCount.js'
import { clearSelector } from '../utils/dom/clearSelector.js'
import { qsa } from '../utils/dom/qsa.js'
import { quizObj } from '../gameObj.js'
import { addToParent } from '../utils/dom/addToParent.js'
import { assignmentToGroups } from '../utils/game/assignmentToGroups.js'
import { buttonCallback } from '../utils/game/buttonCallback.js'
import { createElement } from '../utils/dom/createElement.js'

interface GameProps {
  selector: HTMLElement;
  answer: GameStateProps;
  gameState: GameStateProps;
}

export function game({ selector, answer, gameState }: GameProps) {
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
    addToParent({ selector: answersContainer, child: element })
  }  
  
  addToParent({ selector, child: h1 })
  addToParent({ selector, child: answersContainer })

  const buttons = qsa('.quiz-grid button')
  const [losers, winner] = assignmentToGroups({ buttons })
  
  winner.addEventListener('click', () => buttonCallback({ gameState, answer, selector, isWinner: true }))
  losers.forEach((button: Element) => {
    button.addEventListener('click', () => buttonCallback({ gameState, answer, selector, isWinner: false }))
  })
}