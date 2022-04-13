export type Counter = {
  increment: () => number;
  reset: () => void;
  setCount: (num: number) => number;
  getCount: () => number;
}