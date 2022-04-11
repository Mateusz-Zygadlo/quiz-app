export function hasClass({ selector, name }: { selector: Element, name: string}): boolean {
  return selector.classList.contains(name)
}