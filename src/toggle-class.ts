export default function toggleClass (el: HTMLElement, ...classes: string[]): void {
  for (const className of classes) el.classList.toggle(className)
}
