import { hasClass } from '../css/hasClass.js';
export function assignmentToGroups({ buttons }) {
    let losers = [];
    let winner = buttons[0];
    buttons.forEach((button) => {
        return hasClass({ selector: button, name: 'winner' })
            ? winner = button
            : losers.push(button);
    });
    return [losers, winner];
}
