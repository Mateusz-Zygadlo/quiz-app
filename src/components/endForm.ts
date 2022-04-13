import type { Counter } from '../types/Counter.js'
import { createElement } from '../utils/dom/createElement.js'
import { addToParent } from '../utils/dom/addToParent.js'
import { qs } from '../utils/dom/qs.js'
import { saveToScoreboard } from '../utils/game/saveToScoreboard.js'
import { allNames } from '../quizzes/allNames.js'

interface EndFormProps {
  actualQuiz: Counter;
  userStats: Counter;
  answers: Counter;
  selector: HTMLElement;
}

export function endForm({ actualQuiz, userStats, answers, selector }: EndFormProps): void {
  const form = createElement({
    type: 'form',
  })

  const fieldset = createElement({
    type: 'fieldset',
  })
  
  const legend = createElement({
    type: 'legend',
    options: {
      content: 'Enter your username'
    }
  })

  addToParent({ selector: fieldset, child: legend })
  const inputsContainer = createElement({ type: 'div' })

  const usernameInput = createElement({
    type: 'input',
    options: {
      id: 'username',
      type: 'text',
      name: 'username',
      placeholder: 'username'
    }
  })

  addToParent({ selector: inputsContainer, child: usernameInput })

  const submitInput = createElement({
    type: 'input',
    options: {
      type: 'submit'
    }
  }) as HTMLInputElement

  addToParent({ selector: inputsContainer, child: submitInput })
  addToParent({ selector: fieldset, child: inputsContainer })

  const p = createElement({
    type: 'p',
    options: {
      content: 'Add to your scoreboard'
    }
  })

  addToParent({ selector: fieldset, child: p})
  addToParent({ selector: form, child: fieldset })

  const thanksH1 = createElement({ 
    type: 'h1',
    options: {
      content: 'Adding your score to your scoreboard', 
      class: 'thanks'
    }
  })

  submitInput.addEventListener('click', (e) => {
    e.preventDefault()
    const input = (qs('#username') as HTMLInputElement)
    if(input.value) {
      saveToScoreboard({
        quizName: `${allNames[actualQuiz.getCount()].options.title}`,
        username: input.value,
        result: `${userStats.getCount()}/${answers.getCount() + 1}`,
        date: new Date()
      })
      qs('.quiz-container form').remove()
      addToParent({ selector, child: thanksH1 })
    }
  })

  addToParent({ selector, child: form })
}