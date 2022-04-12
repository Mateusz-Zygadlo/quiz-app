import { end } from '../../components/end.js';
import { nextAnswer } from '../../utils/game/nextAnswer.js';
import { isGame } from '../../utils/game/isGame.js';
import { quizObj } from '../../gameObj.js';
export function buttonCallback({ gameState, answer, selector, isWinner = false }) {
    if (isWinner) {
        gameState.increment();
    }
    return isGame({ currentGame: answer.getCount(), quizObj })
        ? nextAnswer({ currentStats: gameState, currentAnswer: answer, selector })
        : end({ selector, stats: { allAnswers: answer, yourResult: gameState } });
}
