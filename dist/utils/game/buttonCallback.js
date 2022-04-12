import { end } from '../../components/end.js';
import { qs } from '../dom/qs.js';
import { qsa } from '../dom/qsa.js';
import { nextAnswer } from '../../utils/game/nextAnswer.js';
import { isGame } from '../../utils/game/isGame.js';
import { sleep } from '../sleep.js';
export async function buttonCallback({ userStats, answer, selector, isWinner, quizObj }) {
    qsa('.quiz-grid button').forEach((button) => {
        button.disabled = true;
    });
    if (isWinner) {
        userStats.increment();
    }
    qs('.timer').innerText = `${isWinner ? 'correct' : 'incorrect'}`;
    await sleep(2000);
    return isGame({ game: answer.getCount(), quizObj })
        ? nextAnswer({ userStats, answer, selector, quizObj })
        : end({ selector, stats: { answers: answer, userStats }, quizObj });
}
