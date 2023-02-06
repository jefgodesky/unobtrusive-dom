import { expect } from 'chai'
import hasClass from './has-class'
import create from './create'

describe('create', () => {
  it('creates an element', () => {
    const el = create('p')
    expect(el.tagName).to.equal('P')
  })

  it('creates an element with the classes given', () => {
    const classes = ['a', 'b', 'c']
    const el = create('p', classes.slice(0, 2))
    const checks = classes.map(className => hasClass(el, className))
    expect(JSON.stringify(checks)).to.equal('[true,true,false]')
  })
})
