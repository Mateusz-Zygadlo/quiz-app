interface AddClassProps {
  selector: Element;
  name: string;
}

export function addClass({ selector, name }: AddClassProps): void {
  return selector.classList.add(name)
}