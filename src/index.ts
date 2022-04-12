import { qs } from './utils/dom/qs.js';
import { welcome } from './components/welcome.js'
import { counter } from './utils/counter.js';
import { math } from './quizzes/math.js'

const container = qs('.container')
const answer = counter()
const userStats = counter()
const quizObj = math

welcome({ 
  selector: container, 
  answer,
  userStats,
  quizObj
})