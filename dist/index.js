import { qs } from './utils/dom/index.js';
import { welcome } from './components/welcome.js';
import { inGame } from './components/inGame.js';
import { counter } from './utils/counter.js';
const container = qs('.container');
const currentAnswer = counter();
const currentStats = counter();
welcome({
    selector: container,
    currentAnswer,
    currentStats
});
export function nextAnswer({ currentStats, currentAnswer, selector }) {
    currentAnswer.increment();
    console.log(currentAnswer.getCount());
    return inGame({
        selector,
        answer: currentAnswer,
        gameState: currentStats,
    });
}
