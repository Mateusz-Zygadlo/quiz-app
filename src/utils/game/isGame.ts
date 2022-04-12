import type { QuizObjType } from '../../types/QuizObj.js'

interface IsGameProps {
  game: number;
  quizObj: QuizObjType;
}

export function isGame({ game, quizObj }: IsGameProps): boolean {
  return !!quizObj[game + 1]
}