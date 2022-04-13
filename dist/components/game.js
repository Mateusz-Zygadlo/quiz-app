import { clearSelector } from '../utils/dom/clearSelector.js';
import { timer } from '../utils/game/timer.js';
import { qsa } from '../utils/dom/qsa.js';
import { addToParent } from '../utils/dom/addToParent.js';
import { assignmentToGroups } from '../utils/game/assignmentToGroups.js';
import { buttonCallback } from '../utils/game/buttonCallback.js';
import { createElement } from '../utils/dom/createElement.js';
import { addClass } from '../utils/css/addClass.js';
export function game({ selector, answer, userStats, quizObj, actualQuiz }) {
    clearSelector({ selector });
    const h1 = createElement({
        type: 'h1',
        options: {
            content: quizObj[actualQuiz.getCount()][answer.getCount()].question
        }
    });
    const answersContainer = createElement({
        type: 'div',
        options: {
            class: "quiz-grid"
        }
    });
    let winnerButton = null;
    for (const { isWinner, ...rest } of quizObj[actualQuiz.getCount()][answer.getCount()].answers) {
        const element = createElement({ ...rest });
        if (isWinner) {
            winnerButton = element;
        }
        addToParent({ selector: answersContainer, child: element });
    }
    addToParent({ selector, child: h1 });
    addToParent({ selector, child: answersContainer });
    const timerDiv = createElement({
        type: 'div',
        options: {
            class: 'timer'
        }
    });
    addToParent({ selector, child: timerDiv });
    const buttons = qsa('.quiz-grid button');
    const [losers, winner] = assignmentToGroups({ buttons, winnerButton });
    winnerButton = null;
    const getTimer = timer({
        time: 10,
        userStats,
        answer,
        selector,
        quizObj,
        actualQuiz
    });
    winner.addEventListener('click', () => {
        getTimer.clear();
        addClass({ selector: winner, name: 'winner' });
        buttonCallback({ userStats, answer, selector, isWinner: true, quizObj, actualQuiz });
    });
    losers.forEach((button) => {
        button.addEventListener('click', () => {
            getTimer.clear();
            addClass({ selector: button, name: 'loser' });
            buttonCallback({ userStats, answer, selector, isWinner: false, quizObj, actualQuiz });
        });
    });
}
