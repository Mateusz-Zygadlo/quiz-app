export interface GameStateProps {
  increment: () => number;
  setCount: (num: number) => number;
  reset: () => void;
  getCount: () => number;
}