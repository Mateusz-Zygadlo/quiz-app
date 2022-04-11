import { createElement, addToParents } from '../utils/dom/index.js';
const quizObj = {
    question: 'This is answer',
    answers: [{
            type: 'button',
            options: {
                content: 'one'
            }
        }, {
            type: 'button',
            options: {
                content: 'two'
            }
        }, {
            type: 'button',
            options: {
                content: 'three'
            }
        }, {
            type: 'button',
            options: {
                content: 'four'
            }
        }]
};
export function inGame({ selector }) {
    const h1 = createElement({
        type: 'h1',
        options: {
            content: 'Answear'
        }
    });
    const answersContainer = createElement({
        type: 'div',
        options: {
            class: "quiz-grid"
        }
    });
    for (const answer of quizObj.answers) {
        const element = createElement({ ...answer });
        addToParents({ selector: answersContainer, child: element });
    }
    addToParents({ selector, child: h1 });
    addToParents({ selector, child: answersContainer });
}
