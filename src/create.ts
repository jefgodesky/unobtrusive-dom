export default function create (tag: string, classes?: string[], attrs?: { [key: string]: string }): HTMLElement {
  const el = document.createElement(tag)
  if (classes !== undefined) el.classList.add(...classes)
  if (attrs !== undefined) {
    for (const attr of Object.keys(attrs)) {
      el.setAttribute(attr, attrs[attr] ?? '')
    }
  }
  return el
}
