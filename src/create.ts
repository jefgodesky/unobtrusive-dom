interface CreateOptions {
  tag: string
  classes?: string[]
  attrs?: {
    [key: string]: string
  }
  text?: string
}

export default function create (options: CreateOptions): HTMLElement {
  const { tag, classes, attrs, text } = options
  const el = document.createElement(tag)
  if (classes !== undefined) el.classList.add(...classes)
  if (text !== undefined) el.innerText = text
  if (attrs !== undefined) {
    for (const attr of Object.keys(attrs)) {
      el.setAttribute(attr, attrs[attr] ?? '')
    }
  }
  return el
}

export { CreateOptions }
