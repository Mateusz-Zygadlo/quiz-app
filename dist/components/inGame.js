import { createElement, addToParents } from '../utils/dom/index.js';
import { quizObj } from '../gameObj.js';
import { qsa, clearSelector } from '../utils/dom/index.js';
import { hasClass } from '../utils/css/index.js';
import { end } from './end.js';
import { nextAnswer } from '../index.js';
export function inGame({ selector, answer, gameState }) {
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
    for (const a of quizObj[answer.getCount()].answers) {
        const element = createElement({ ...a });
        addToParents({ selector: answersContainer, child: element });
    }
    addToParents({ selector, child: h1 });
    addToParents({ selector, child: answersContainer });
    const buttons = qsa('.quiz-grid button');
    let losers = [];
    let winner = buttons[0];
    buttons.forEach((button) => hasClass({ selector: button, name: 'winner' }) ? winner = button : losers.push(button));
    losers.forEach((button) => {
        button.addEventListener('click', () => {
            return isGame({ currentGame: answer.getCount() })
                ? nextAnswer({ currentStats: gameState, currentAnswer: answer, selector })
                : end({ selector, stats: { allAnswers: answer, yourResult: gameState } });
        });
    });
    winner.addEventListener('click', () => {
        gameState.increment();
        return isGame({ currentGame: answer.getCount() })
            ? nextAnswer({ currentStats: gameState, currentAnswer: answer, selector })
            : end({ selector, stats: { allAnswers: answer, yourResult: gameState } });
    });
}
export function isGame({ currentGame }) {
    return !!quizObj[currentGame + 1];
}
