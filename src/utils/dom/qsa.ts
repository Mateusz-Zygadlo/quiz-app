export function qsa(selector: string): Element[] {
  return [...document.querySelectorAll(selector)]
}
