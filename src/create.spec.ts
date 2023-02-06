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
})
