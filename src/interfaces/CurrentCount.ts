export interface GameStateProps {
  increment: () => number;
  decrement: () => number;
  reset: () => void;
  getCount: () => number;
}