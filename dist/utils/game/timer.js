import { buttonCallback } from './buttonCallback.js';
import { qs } from '../dom/qs.js';
export function timer({ time, userStats, answer, selector }) {
    let count = time;
    let timer = setInterval(() => {
        qs('.timer').innerText = `${count}`;
        if (!count) {
            buttonCallback({ userStats, answer, selector, isWinner: false });
            clearInterval(timer);
        }
        count--;
    }, 1000);
    function clear() {
        return clearInterval(timer);
    }
    return {
        clear
    };
}
