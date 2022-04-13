import { clearSelector } from '../utils/dom/clearSelector.js';
import { addToParent } from '../utils/dom/addToParent.js';
import { createElement } from '../utils/dom/createElement.js';
import { welcome } from '../components/welcome.js';
import { scoreboard } from './scoreboard.js';
import { endForm } from './endForm.js';
export function end({ selector, stats: { answers, userStats }, quizObj, actualQuiz }) {
    clearSelector({ selector });
    const h1 = createElement({
        type: 'h1',
        options: {
            content: `Your result is: ${userStats.getCount()}/${answers.getCount() + 1}`
        }
    });
    const button = createElement({
        type: 'button',
        options: {
            content: 'back to home page',
            class: 'smaller'
        }
    });
    const viewScoreboard = createElement({
        type: 'button',
        options: {
            content: 'view scoreboard',
            class: 'smaller'
        }
    });
    const nextGameProps = {
        selector,
        answer: answers,
        userStats,
        quizObj,
        actualQuiz
    };
    button.addEventListener('click', () => {
        welcome({ ...nextGameProps });
    });
    viewScoreboard.addEventListener('click', () => {
        scoreboard({ ...nextGameProps });
    });
    addToParent({ selector, child: h1 });
    addToParent({ selector, child: button });
    addToParent({ selector, child: viewScoreboard });
    endForm({
        actualQuiz,
        userStats,
        answers,
        selector
    });
}
