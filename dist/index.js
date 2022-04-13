import { qs } from './utils/dom/qs.js';
import { welcome } from './components/welcome.js';
import { counter } from './utils/counter.js';
import { math } from './quizzes/math.js';
import { programming } from './quizzes/programming.js';
const container = qs('.container');
const answer = counter();
const userStats = counter();
const quizObj = [math, programming];
const actualQuiz = counter();
actualQuiz.setCount(1);
welcome({
    selector: container,
    answer,
    userStats,
    quizObj,
    actualQuiz
});
