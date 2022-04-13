import { end } from '../../components/end.js';
import { qs } from '../dom/qs.js';
import { qsa } from '../dom/qsa.js';
import { nextAnswer } from '../../utils/game/nextAnswer.js';
import { isGame } from '../../utils/game/isGame.js';
import { sleep } from '../sleep.js';
import { APP_CONFIG } from '../../config.js';
export async function buttonCallback({ userStats, answer, selector, isWinner, quizObj, actualQuiz }) {
    const { SLEEP_IN_SECONDS } = APP_CONFIG;
    qsa('.quiz-container .grid button').forEach((button) => {
        button.disabled = true;
    });
    if (isWinner) {
        userStats.increment();
    }
    qs('.quiz-container .timer-container .timer').innerText = `${isWinner ? 'correct' : 'incorrect'}`;
    await sleep(SLEEP_IN_SECONDS * 1000);
    const standardProps = {
        selector,
        quizObj,
        actualQuiz
    };
    return isGame({
        game: answer.getCount(),
        quizObj: quizObj[actualQuiz.getCount()]
    })
        ? nextAnswer({
            ...standardProps,
            userStats,
            answer
        })
        : end({
            ...standardProps,
            stats: {
                answers: answer,
                userStats
            }
        });
}
