import { end } from '../../components/end.js';
import { qs } from '../dom/qs.js';
import { qsa } from '../dom/qsa.js';
import { nextAnswer } from '../../utils/game/nextAnswer.js';
import { isGame } from '../../utils/game/isGame.js';
import { quizObj } from '../../quizObj.js';
export async function buttonCallback({ userStats, answer, selector, isWinner }) {
    qsa('.quiz-grid button').forEach((button) => {
        button.disabled = true;
    });
    if (isWinner) {
        userStats.increment();
    }
    qs('.timer').innerText = `${isWinner ? 'correct' : 'incorrect'}`;
    await sleep(2000);
    return isGame({ game: answer.getCount(), quizObj })
        ? nextAnswer({ userStats, answer, selector })
        : end({ selector, stats: { answers: answer, userStats } });
}
function sleep(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}
