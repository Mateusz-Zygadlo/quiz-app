import type { Counter } from "../types/Counter"

export function counter(): Counter {
  let count = 0

  function increment(): number {
    return count += 1
  }

  function reset(): void {
    count = 0
  }

  function getCount(): number {
    return count
  }

  return {
    increment,
    reset,
    getCount
  }
}