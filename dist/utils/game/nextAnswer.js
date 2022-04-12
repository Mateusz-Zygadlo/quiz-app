import { game } from '../../components/game.js';
export function nextAnswer({ currentStats, currentAnswer, selector }) {
    currentAnswer.increment();
    return game({
        selector,
        answer: currentAnswer,
        gameState: currentStats,
    });
}
