import { qs } from './utils/dom/qs.js';
import { welcome } from './components/welcome.js';
import { counter } from './utils/counter.js';
const container = qs('.container');
const answer = counter();
const userStats = counter();
welcome({
    selector: container,
    answer,
    userStats
});
