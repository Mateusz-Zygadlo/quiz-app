import { clearSelector } from '../utils/dom/clearSelector.js';
import { createElement } from '../utils/dom/createElement.js';
import { addToParent } from '../utils/dom/addToParent.js';
import { welcome } from './welcome.js';
export function scoreboard({ selector, answer, userStats, quizObj, actualQuiz }) {
    clearSelector({ selector });
    const h1 = createElement({
        type: 'h1',
        options: {
            content: 'Welcome to scoreboard'
        }
    });
    const button = createElement({
        type: 'button',
        options: {
            content: 'back to welcome page',
            class: 'smaller'
        }
    });
    const welcomeStandardProps = {
        selector,
        answer,
        userStats,
        quizObj,
        actualQuiz
    };
    button.addEventListener('click', () => {
        welcome({ ...welcomeStandardProps });
    });
    addToParent({ selector, child: h1 });
    addToParent({ selector, child: button });
    const games = JSON.parse(localStorage.getItem('scoreboard'));
    if (!games) {
        const noStats = createElement({
            type: 'p',
            options: {
                content: 'No stats'
            }
        });
        addToParent({ selector, child: noStats });
        return;
    }
    const statsTable = createElement({
        type: 'table',
        options: {
            class: 'stats'
        }
    });
    for (let { quizName, username, date, result } of games.gamesHistory) {
        const gameTr = createElement({
            type: 'tr',
            options: {
                class: 'game'
            }
        });
        const td1 = createElement({
            type: 'td',
            options: {
                content: username
            }
        });
        const td2 = createElement({
            type: 'td',
            options: {
                content: result,
            }
        });
        const td3 = createElement({
            type: 'td',
            options: {
                content: quizName,
            }
        });
        const td4 = createElement({
            type: 'td',
            options: {
                content: date
            }
        });
        addToParent({ selector: gameTr, child: td1 });
        addToParent({ selector: gameTr, child: td2 });
        addToParent({ selector: gameTr, child: td3 });
        addToParent({ selector: gameTr, child: td4 });
        addToParent({ selector: statsTable, child: gameTr });
    }
    const clearHistoryButton = createElement({
        type: 'button',
        options: {
            class: 'smaller',
            content: 'clear history games'
        }
    });
    clearHistoryButton.addEventListener('click', () => {
        localStorage.removeItem('scoreboard');
        welcome({ ...welcomeStandardProps });
    });
    addToParent({ selector, child: statsTable });
    addToParent({ selector, child: clearHistoryButton });
}
