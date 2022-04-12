interface HasClassProps {
  selector: Element;
  name: string;
}

export function hasClass({ selector, name }: HasClassProps): boolean {
  return selector.classList.contains(name)
}