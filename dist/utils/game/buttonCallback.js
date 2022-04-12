import { end } from '../../components/end.js';
import { nextAnswer } from '../../utils/game/nextAnswer.js';
import { isGame } from '../../utils/game/isGame.js';
import { quizObj } from '../../quizObj.js';
export function buttonCallback({ userStats, answer, selector, isWinner }) {
    if (isWinner) {
        userStats.increment();
    }
    return isGame({ game: answer.getCount(), quizObj })
        ? nextAnswer({ userStats, answer, selector })
        : end({ selector, stats: { answers: answer, userStats } });
}
