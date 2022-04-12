export function isGame({ game, quizObj }) {
    return !!quizObj[game + 1];
}
