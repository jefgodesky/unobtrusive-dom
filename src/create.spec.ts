import { expect } from 'chai'
import hasClass from './has-class'
import create from './create'

describe('create', () => {
  it('creates an element', () => {
    const el = create({ tag: 'p' })
    expect(el.tagName).to.equal('P')
  })

  it('creates an element with the classes given', () => {
    const classes = ['a', 'b', 'c']
    const el = create({ tag: 'p', classes: classes.slice(0, 2) })
    const checks = classes.map(className => hasClass(el, className))
    expect(JSON.stringify(checks)).to.equal('[true,true,false]')
  })

  it('creates an element with the attributes given', () => {
    const attrs = { id: 'elem-id' }
    const el = create({ tag: 'p', attrs })
    expect(el.getAttribute('id')).to.equal(attrs.id)
  })

  it('creates an element with the inner text given', () => {
    const text = 'Hello, world!'
    const el = create({ tag: 'p', text })
    expect(el.innerText).to.equal(text)
  })

  it('creates an element with children', () => {
    const text = 'Hello, world!'
    const child = create({ tag: 'p', text })
    const parent = create({ tag: 'div', children: [child] })
    expect(parent.outerHTML).to.equal('<div><p></p></div>')
    expect((parent.children[0] as HTMLParagraphElement)?.innerText).to.equal(text)
  })

  it('can do it all at once', () => {
    const classes = ['a', 'b', 'c']
    const options = { tag: 'p', classes: classes.slice(0, 2), attrs: { id: 'test' }, text: 'Hello, world!' }
    const el = create(options)
    const checks = classes.map(className => hasClass(el, className))
    expect(el.tagName).to.equal(options.tag.toUpperCase())
    expect(JSON.stringify(checks)).to.equal('[true,true,false]')
    expect(el.getAttribute('id')).to.equal(options.attrs.id)
    expect(el.innerText).to.equal(options.text)
  })
})
