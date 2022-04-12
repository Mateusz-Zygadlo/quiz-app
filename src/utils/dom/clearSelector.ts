interface ClearSelectorProps {
  selector: HTMLElement;
}

export function clearSelector({ selector }: ClearSelectorProps): string {
  return selector.textContent = ''
}