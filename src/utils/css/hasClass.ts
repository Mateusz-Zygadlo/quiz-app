interface HasClassProps {
  selector: HTMLElement;
  name: string
}

export function hasClass({ selector, name }: HasClassProps): boolean {
  return selector.classList.contains(name)
}