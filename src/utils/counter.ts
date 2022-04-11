export function counter() {
  let count = 0

  function increment(): number {
    return count += 1
  }

  function decrement(): number {
    return count -= 1
  }

  function reset(): void {
    count = 0
  }

  function getCount(): number {
    return count
  }

  return {
    increment,
    decrement,
    reset,
    getCount
  }
}