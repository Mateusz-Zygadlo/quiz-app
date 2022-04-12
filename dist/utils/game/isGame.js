export function isGame({ currentGame, quizObj }) {
    return !!quizObj[currentGame + 1];
}
