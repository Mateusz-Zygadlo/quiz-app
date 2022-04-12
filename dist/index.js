import { qs } from './utils/dom/qs.js';
import { welcome } from './components/welcome.js';
import { counter } from './utils/counter.js';
const container = qs('.container');
const currentAnswer = counter();
const currentStats = counter();
welcome({
    selector: container,
    currentAnswer,
    currentStats
});
