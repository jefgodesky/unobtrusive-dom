interface CreateOptions {
  tag: string
  attrs?: {
    [key: string]: string
  }
  children?: NodeListOf<HTMLElement | Text> | Array<HTMLElement | Text>
  classes?: string[]
  text?: string
}

export default function create (options: CreateOptions): HTMLElement {
  const { tag, classes, attrs, children, text } = options
  const el = document.createElement(tag)
  if (classes !== undefined) el.classList.add(...classes)
  if (text !== undefined) el.innerHTML = text
  if (attrs !== undefined) {
    for (const attr of Object.keys(attrs)) {
      el.setAttribute(attr, attrs[attr] ?? '')
    }
  }
  if (children !== undefined) {
    const kids = Array.isArray(children) ? children : Array.from(children)
    for (const child of kids) el.appendChild(child)
  }
  return el
}

export { CreateOptions }
