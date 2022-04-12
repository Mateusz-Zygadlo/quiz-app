export function assignmentToGroups({ buttons, winnerButton }) {
    let losers = [];
    let winner = buttons[0];
    buttons.forEach((button) => {
        return button == winnerButton
            ? winner = button
            : losers.push(button);
    });
    return [losers, winner];
}
