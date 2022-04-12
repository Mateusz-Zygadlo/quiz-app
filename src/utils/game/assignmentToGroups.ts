import { hasClass } from '../css/hasClass.js'

interface AssignmentToGroupsProps {
  buttons: Element[]
}

export function assignmentToGroups({ buttons }: AssignmentToGroupsProps): [Element[], Element] {
  let losers: Element[] = []
  let winner: Element = buttons[0];
  buttons.forEach((button: Element) => hasClass({ selector: button, name: 'winner'}) ? winner = button : losers.push(button))

  return [losers, winner]
}