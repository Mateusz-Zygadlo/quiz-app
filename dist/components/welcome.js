import { createElement, addToParents } from '../utils/dom/index.js';
export function welcome({ selector }) {
    const h1 = createElement({
        type: 'h1',
        options: {
            content: 'Welcome to Quiz App'
        }
    });
    const button = createElement({
        type: 'button',
        options: {
            content: 'Start',
            id: 'start'
        }
    });
    addToParents({ selector, child: h1 });
    addToParents({ selector, child: button });
}
