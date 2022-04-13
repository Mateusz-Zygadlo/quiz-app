export function assignmentToGroups({ buttons, winnerButtons }) {
    let losers = [];
    let winner = [];
    buttons.forEach((button) => {
        return winnerButtons.indexOf(button) > -1
            ? winner.push(button)
            : losers.push(button);
    });
    return [losers, winner];
}
