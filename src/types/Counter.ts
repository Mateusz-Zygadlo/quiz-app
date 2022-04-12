export type Counter = {
  increment: () => number;
  setCount: (num: number) => number;
  reset: () => void;
  getCount: () => number;
}