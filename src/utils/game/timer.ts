import type { Counter } from '../../types/Counter.js'
import { buttonCallback } from './buttonCallback.js'
import { qs } from '../dom/qs.js'

interface TimerProps {
  time: number;
  userStats: Counter; 
  answer: Counter;
  selector: HTMLElement;
}

export function timer({ time, userStats, answer, selector }: TimerProps) {
  let count = time
  let timer = setInterval(() => {
    qs('.timer').innerText = `${count}`

    if(!count) {
      buttonCallback({ userStats, answer, selector, isWinner: false })
      clearInterval(timer)
    }
    count--
  }, 1000)

  function clear() {
    return clearInterval(timer)
  }

  return {
    clear
  }
}