export type Counter = {
  increment: () => number;
  reset: () => void;
  getCount: () => number;
}