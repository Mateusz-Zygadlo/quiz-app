import { clearSelector } from '../utils/dom/clearSelector.js';
import { addToParent } from '../utils/dom/addToParent.js';
import { game } from './game.js';
import { createElement } from '../utils/dom/createElement.js';
import { allNames } from '../quizzes/allNames.js';
export function welcome({ selector, answer, userStats, quizObj, actualQuiz }) {
    clearSelector({ selector });
    answer.reset();
    userStats.reset();
    const h1 = createElement({
        type: 'h1',
        options: {
            content: 'Welcome to Quiz App'
        }
    });
    const buttonContainer = createElement({
        type: 'div',
        options: {
            class: 'start-button-container'
        }
    });
    for (let { index, ...rest } of allNames) {
        const quizButton = createElement({ ...rest });
        quizButton.addEventListener('click', () => {
            actualQuiz.setCount(index);
            return game({
                selector,
                answer,
                userStats,
                quizObj,
                actualQuiz,
            });
        });
        addToParent({ selector: buttonContainer, child: quizButton });
    }
    addToParent({ selector, child: h1 });
    addToParent({ selector, child: buttonContainer });
}
