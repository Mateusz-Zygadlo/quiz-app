export function createElement({ type, options }) {
    const element = document.createElement(type);
    if (!options) {
        return element;
    }
    Object.entries(options).forEach(([key, value]) => {
        if (key === 'class') {
            return element.classList.add(value);
        }
        if (key === 'content') {
            return element.innerText = value;
        }
        return element.setAttribute(key, value);
    });
    return element;
}
export function qs(selector) {
    return document.querySelector(selector);
}
export function addToParents({ selector, child }) {
    return selector.appendChild(child);
}
export function qsa(selector) {
    return [...document.querySelectorAll(selector)];
}
export function clearSelector({ selector }) {
    return selector.textContent = '';
}
