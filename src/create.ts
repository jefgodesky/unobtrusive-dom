export default function create (tag: string, classes?: string[]): HTMLElement {
  const el = document.createElement(tag)
  if (classes !== undefined) el.classList.add(...classes)
  return el
}
