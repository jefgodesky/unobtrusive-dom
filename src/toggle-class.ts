export default function (el: HTMLElement, ...classes: string[]): void {
  for (const className of classes) el.classList.toggle(className)
}
