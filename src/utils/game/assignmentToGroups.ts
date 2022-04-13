interface AssignmentToGroupsProps {
  buttons: Element[];
  winnerButtons: Element[];
}

export function assignmentToGroups({ buttons, winnerButtons }: AssignmentToGroupsProps): [Element[], Element[]] {
  let losers: Element[] = []
  let winner: Element[] = [];

  buttons.forEach((button: Element) => {
    return winnerButtons.indexOf(button) > -1
      ? winner.push(button)
      : losers.push(button)
  })

  return [losers, winner]
}