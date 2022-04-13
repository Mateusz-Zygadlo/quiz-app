import type { Counter } from '../types/Counter.js'
import type { QuizObjType } from '../types/QuizObj.js'
import { clearSelector } from '../utils/dom/clearSelector.js'
import { timer } from '../utils/game/timer.js'
import { qsa } from '../utils/dom/qsa.js'
import { addToParent } from '../utils/dom/addToParent.js'
import { assignmentToGroups } from '../utils/game/assignmentToGroups.js'
import { createElement } from '../utils/dom/createElement.js'
import { progressbar } from '../utils/game/progressbar.js' 
import { gameEventButton } from '../utils/game/gameEventButtons.js'

interface GameProps {
  selector: HTMLElement;
  answer: Counter;
  userStats: Counter;
  quizObj: QuizObjType[];
  actualQuiz: Counter;
}

export function game({ 
  selector, 
  answer, 
  userStats, 
  quizObj, 
  actualQuiz 
}: GameProps) {
  clearSelector({ selector })
  
  const h1 = createElement({
    type: 'h1',
    options: {
      content: quizObj[actualQuiz.getCount()][answer.getCount()].question
    }
  });

  const answersContainer = createElement({
    type: 'div',
    options: {
      class: "grid"
    }
  })

  let winnerButtons: Element[] | null = []

  for(const { isWinner, ...rest } of quizObj[actualQuiz.getCount()][answer.getCount()].answers) {
    const element = createElement({ ...rest })
    if (isWinner) {
      winnerButtons.push(element) 
    }
    addToParent({ selector: answersContainer, child: element })
  }  
  
  addToParent({ selector, child: h1 })
  addToParent({ selector, child: answersContainer })

  const timerContainer = createElement({
    type: 'div',
    options: {
      class: 'timer-container'
    }
  })

  const timerDiv = createElement({
    type: 'p',
    options: {
      class: 'timer',
      content: '10'
    }
  })

  const progress = createElement({
    type: 'progress',
    options: {
      value: '0',
      max: '100'
    }
  })

  addToParent({  selector: timerContainer, child: timerDiv })
  addToParent({ selector: timerContainer, child: progress })

  addToParent({ selector, child: timerContainer })

  const buttons = qsa('.quiz-container .grid button')
  const [losers, winner] = assignmentToGroups({ buttons, winnerButtons })
  winnerButtons.length = 0

  const progressTimer = progressbar({
    delay: 10,
    progressbar: progress,
  })

  const gameStandardsProps = {
    userStats,
    answer,
    selector,
    quizObj,
    actualQuiz
  }

  const getTimer = timer({
    ...gameStandardsProps,
    time: 10,
    progressTimer,
  })

  gameEventButton({
    ...gameStandardsProps,
    arrOfSelectors: winner,
    type: 'click',
    progressTimer,
    getTimer,
    winner: true,
  })

  gameEventButton({
    ...gameStandardsProps,
    arrOfSelectors: losers,
    type: 'click',
    progressTimer,
    getTimer,
    winner: false,
  })
}