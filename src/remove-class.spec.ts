import { expect } from 'chai'
import create from './create'
import hasClass from './has-class'
import removeClass from './remove-class'

describe('removeClass', () => {
  it('removes a class from an element', () => {
    const classes = ['a', 'b', 'c']
    const el = create({ tag: 'p', classes })
    removeClass(el, 'a')
    const checks = classes.map(className => hasClass(el, className))
    expect(JSON.stringify(checks)).to.equal('[false,true,true]')
  })

  it('removes multiple classes from an element', () => {
    const classes = ['a', 'b', 'c']
    const el = create({ tag: 'p', classes })
    removeClass(el, ...classes.slice(0, 2))
    const checks = classes.map(className => hasClass(el, className))
    expect(JSON.stringify(checks)).to.equal('[false,false,true]')
  })
})
