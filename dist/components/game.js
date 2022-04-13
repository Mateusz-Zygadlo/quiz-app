import { clearSelector } from '../utils/dom/clearSelector.js';
import { timer } from '../utils/game/timer.js';
import { qsa } from '../utils/dom/qsa.js';
import { addToParent } from '../utils/dom/addToParent.js';
import { assignmentToGroups } from '../utils/game/assignmentToGroups.js';
import { createElement } from '../utils/dom/createElement.js';
import { progressbar } from '../utils/game/progressbar.js';
import { gameEventButton } from '../utils/game/gameEventButtons.js';
import { APP_CONFIG } from '../config.js';
export function game({ selector, answer, userStats, quizObj, actualQuiz }) {
    clearSelector({ selector });
    const { DELAY_IN_MILISECONS, TIME_IN_SECONDS } = APP_CONFIG;
    const h1 = createElement({
        type: 'h1',
        options: {
            content: quizObj[actualQuiz.getCount()][answer.getCount()].question
        }
    });
    const answersContainer = createElement({
        type: 'div',
        options: {
            class: "grid"
        }
    });
    let winnerButtons = [];
    for (const { isWinner, ...rest } of quizObj[actualQuiz.getCount()][answer.getCount()].answers) {
        const element = createElement({ ...rest });
        if (isWinner) {
            winnerButtons.push(element);
        }
        addToParent({ selector: answersContainer, child: element });
    }
    addToParent({ selector, child: h1 });
    addToParent({ selector, child: answersContainer });
    const timerContainer = createElement({
        type: 'div',
        options: {
            class: 'timer-container'
        }
    });
    const timerDiv = createElement({
        type: 'p',
        options: {
            class: 'timer',
            content: `${TIME_IN_SECONDS}`
        }
    });
    const progress = createElement({
        type: 'progress',
        options: {
            value: '0',
            max: '100'
        }
    });
    addToParent({ selector: timerContainer, child: timerDiv });
    addToParent({ selector: timerContainer, child: progress });
    addToParent({ selector, child: timerContainer });
    const buttons = qsa('.quiz-container .grid button');
    const [losers, winner] = assignmentToGroups({ buttons, winnerButtons });
    winnerButtons.length = 0;
    const progressTimer = progressbar({
        delay: DELAY_IN_MILISECONS,
        progressbar: progress,
    });
    const gameStandardsProps = {
        userStats,
        answer,
        selector,
        quizObj,
        actualQuiz
    };
    const getTimer = timer({
        ...gameStandardsProps,
        time: TIME_IN_SECONDS,
        progressTimer,
    });
    gameEventButton({
        ...gameStandardsProps,
        arrOfSelectors: winner,
        type: 'click',
        progressTimer,
        getTimer,
        winner: true,
    });
    gameEventButton({
        ...gameStandardsProps,
        arrOfSelectors: losers,
        type: 'click',
        progressTimer,
        getTimer,
        winner: false,
    });
}
