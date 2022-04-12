import { game } from '../../components/game.js';
export function nextAnswer({ userStats, answer, selector }) {
    answer.increment();
    return game({
        selector,
        answer,
        userStats,
    });
}
