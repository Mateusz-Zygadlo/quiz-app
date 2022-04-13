interface ClearIntervalsProps {
  [key: string]: {
    clear: () => void;
  }
}

export function clearIntervals({ progressTimer, getTimer }: ClearIntervalsProps) {
  progressTimer.clear()
  getTimer.clear()
}