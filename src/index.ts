import { qs } from './utils/dom/index.js';
import { welcome } from './components/welcome.js'
import { end } from './components/end.js'
import { inGame } from './components/inGame.js'

const container = qs('.container')
// welcome({ selector: container })
inGame({ selector: container })