export function clearSelector({ selector }: { selector: HTMLElement}): string {
  return selector.textContent = ''
}