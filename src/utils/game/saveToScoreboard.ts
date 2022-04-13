const standardScoreboard = {
  gamesHistory: [{
    username: 'username',
    result: 'result',
    date: 'date',
    quizName: 'quizName'
  }]
}

interface SaveToScoreboardProps {
  username: string;
  result: `${number}/${number}`
  date: Date;
  quizName: string;
}

export function saveToScoreboard({ username, result, date, quizName }: SaveToScoreboardProps): void {
  const getScoreboard = localStorage.getItem('scoreboard')
  if(!getScoreboard) {
    localStorage.setItem('scoreboard', JSON.stringify(standardScoreboard))
  }

  const game = {
    quizName,
    username,
    result,
    date: date.toLocaleDateString(),
  }

  const takeScoreboard = JSON.parse(localStorage.getItem('scoreboard') as string)
  takeScoreboard.gamesHistory.push(game)
  localStorage.setItem('scoreboard', JSON.stringify(takeScoreboard))
}