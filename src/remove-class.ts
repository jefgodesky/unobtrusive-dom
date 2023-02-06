export default function removeClass (el: HTMLElement, ...classes: string[]): void {
  el.classList.remove(...classes)
}
