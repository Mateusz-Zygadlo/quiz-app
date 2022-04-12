interface AddToParent {
  selector: HTMLElement;
  child: HTMLElement;
}

export function addToParent({ selector, child }: AddToParent): HTMLElement{
  return selector.appendChild(child)
}