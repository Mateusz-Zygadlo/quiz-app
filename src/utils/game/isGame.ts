import type { QuizObjType } from '../../types/QuizObj.js'

interface IsGameProps {
  currentGame: number;
  quizObj: QuizObjType;
}

export function isGame({ currentGame, quizObj }: IsGameProps): boolean {
  return !!quizObj[currentGame + 1]
}