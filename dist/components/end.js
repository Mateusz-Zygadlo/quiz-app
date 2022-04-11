import { createElement, addToParents } from '../utils/dom/index.js';
export function end({ selector }) {
    const h1 = createElement({
        type: 'h1',
        options: {
            content: 'Your result is: 10/15'
        }
    });
    const button = createElement({
        type: 'button',
        options: {
            content: 'back to home page',
            id: 'end'
        }
    });
    addToParents({ selector, child: h1 });
    addToParents({ selector, child: button });
}
