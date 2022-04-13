import { buttonCallback } from './buttonCallback.js';
import { qs } from '../dom/qs.js';
export function timer({ time, userStats, answer, selector, quizObj, actualQuiz, progressTimer }) {
    let count = time;
    let timer = setInterval(() => {
        count--;
        qs('.quiz-container .timer-container .timer').innerText = `${count}`;
        if (!count) {
            buttonCallback({ userStats, answer, selector, isWinner: false, quizObj, actualQuiz });
            progressTimer.clear();
            clearInterval(timer);
        }
    }, 1000);
    function clear() {
        return clearInterval(timer);
    }
    return {
        clear
    };
}
