import { clearSelector } from '../utils/dom/clearSelector.js';
import { qsa } from '../utils/dom/qsa.js';
import { quizObj } from '../quizObj.js';
import { addToParent } from '../utils/dom/addToParent.js';
import { assignmentToGroups } from '../utils/game/assignmentToGroups.js';
import { buttonCallback } from '../utils/game/buttonCallback.js';
import { createElement } from '../utils/dom/createElement.js';
export function game({ selector, answer, userStats }) {
    clearSelector({ selector });
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
    });
    let winnerButton = null;
    for (const { isWinner, ...rest } of quizObj[answer.getCount()].answers) {
        const element = createElement({ ...rest });
        if (isWinner) {
            winnerButton = element;
        }
        addToParent({ selector: answersContainer, child: element });
    }
    addToParent({ selector, child: h1 });
    addToParent({ selector, child: answersContainer });
    const buttons = qsa('.quiz-grid button');
    const [losers, winner] = assignmentToGroups({ buttons, winnerButton });
    winnerButton = null;
    winner.addEventListener('click', () => buttonCallback({ userStats, answer, selector, isWinner: true }));
    losers.forEach((button) => {
        button.addEventListener('click', () => buttonCallback({ userStats, answer, selector, isWinner: false }));
    });
}
