export function counter() {
  let count = 0

  function increment(): number {
    return count += 1
  }

  function setCount(num: number): number {
    return count = num
  }

  function reset(): void {
    count = 0
  }

  function getCount(): number {
    return count
  }

  return {
    increment,
    setCount,
    reset,
    getCount
  }
}