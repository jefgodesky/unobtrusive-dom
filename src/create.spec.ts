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
    expect(el.innerHTML).to.equal(text)
  })

  it('creates an element with children', () => {
    const text = 'Hello, world!'
    const child = create({ tag: 'p', text })
    const wrapper = create({ tag: 'div' })
    wrapper.appendChild(create({ tag: 'div', children: [child] }))
    expect(wrapper.innerHTML).to.equal('<div><p>Hello, world!</p></div>')
  })

  it('can do it all at once', () => {
    const classes = ['a', 'b', 'c']
    const options = { tag: 'p', classes: classes.slice(0, 2), attrs: { id: 'test' }, text: 'Hello, world!' }
    const wrapper = create({ tag: 'div' })
    wrapper.appendChild(create(options))
    expect(wrapper.innerHTML).to.equal('<p class="a b" id="test">Hello, world!</p>')
  })

  it('appends children after text', () => {
    const text = 'Hello, world!'
    const child = create({ tag: 'p', text })
    const wrapper = create({ tag: 'div' })
    wrapper.appendChild(create({ tag: 'div', children: [child], text }))
    expect(wrapper.innerHTML).to.equal('<div>Hello, world!<p>Hello, world!</p></div>')
  })

  it('can mix text nodes and other children', () => {
    const children = [
      document.createTextNode('This is '),
      create({ tag: 'strong', text: 'strong' }),
      document.createTextNode(' and '),
      create({ tag: 'em', text: 'emphasized' })
    ]
    const wrapper = create({ tag: 'div' })
    wrapper.appendChild(create({ tag: 'p', children }))
    expect(wrapper.innerHTML).to.equal('<p>This is <strong>strong</strong> and <em>emphasized</em></p>')
  })
})
