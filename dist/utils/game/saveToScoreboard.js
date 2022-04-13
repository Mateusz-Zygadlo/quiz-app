const standardScoreboard = {
    gamesHistory: [{
            username: 'username',
            result: 'result',
            date: 'date',
            quizName: 'quizName'
        }]
};
export function saveToScoreboard({ username, result, date, quizName }) {
    const getScoreboard = localStorage.getItem('scoreboard');
    if (!getScoreboard) {
        localStorage.setItem('scoreboard', JSON.stringify(standardScoreboard));
    }
    const game = {
        quizName,
        username,
        result,
        date: date.toLocaleDateString(),
    };
    const takeScoreboard = JSON.parse(localStorage.getItem('scoreboard'));
    takeScoreboard.gamesHistory.push(game);
    localStorage.setItem('scoreboard', JSON.stringify(takeScoreboard));
}
