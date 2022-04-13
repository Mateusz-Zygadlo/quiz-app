import { clearIntervals } from '../dom/clearIntervals.js';
import { addClass } from '../css/addClass.js';
import { buttonCallback } from './buttonCallback.js';
export function gameEventButton({ arrOfSelectors, type, progressTimer, getTimer, winner, userStats, answer, selector, quizObj, actualQuiz }) {
    arrOfSelectors.forEach((btn) => {
        btn.addEventListener(type, () => {
            clearIntervals({ progressTimer, getTimer });
            addClass({ selector: btn, name: winner ? 'winner' : 'loser' });
            buttonCallback({ userStats, answer, selector, isWinner: winner, quizObj, actualQuiz });
        });
    });
}
