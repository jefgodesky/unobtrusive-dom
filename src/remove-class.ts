const removeClass = (el: HTMLElement, ...classes: string[]): void => {
  el.classList.remove(...classes)
}

export { removeClass }
