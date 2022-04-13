import { game } from '../../components/game.js';
export function nextAnswer({ userStats, answer, selector, quizObj, actualQuiz }) {
    answer.increment();
    return game({
        selector,
        answer,
        userStats,
        quizObj,
        actualQuiz
    });
}
