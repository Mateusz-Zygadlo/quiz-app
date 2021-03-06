import { qs } from './utils/dom/qs.js';
import { welcome } from './components/welcome.js';
import { counter } from './utils/counter.js';
import { setListenerForThemeMode, changeThemeMode } from './themeMode.js';
import { math } from './quizzes/math.js';
import { programming } from './quizzes/programming.js';
const container = qs('.quiz-container');
const themeElement = qs('.theme');
const answer = counter();
const userStats = counter();
const quizObj = [math, programming];
const actualQuiz = counter();
welcome({
    selector: container,
    answer,
    userStats,
    quizObj,
    actualQuiz
});
changeThemeMode();
setListenerForThemeMode({ selector: themeElement });
