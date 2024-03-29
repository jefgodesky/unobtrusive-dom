export default function (el: HTMLElement, ...classes: string[]): boolean {
  for (const className of classes) {
    if (el.classList.contains(className)) return true
  }
  return false
}
