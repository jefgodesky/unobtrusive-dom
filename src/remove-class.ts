export default function (el: HTMLElement, ...classes: string[]): void {
  el.classList.remove(...classes)
}
