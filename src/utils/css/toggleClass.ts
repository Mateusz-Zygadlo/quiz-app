interface ToggleClassProps {
  selector: HTMLElement;
  name: string;
}

export function toggleClass({ selector, name }: ToggleClassProps): boolean {
  return selector.classList.toggle(name)
}