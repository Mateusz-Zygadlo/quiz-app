interface AssignmentToGroupsProps {
  buttons: Element[];
  winnerButton: Element | null;
}

export function assignmentToGroups({ buttons, winnerButton }: AssignmentToGroupsProps): [Element[], Element] {
  let losers: Element[] = []
  let winner: Element = buttons[0];

  buttons.forEach((button: Element) => {
    return button == winnerButton
      ? winner = button
      : losers.push(button)
  })

  return [losers, winner]
}