import { expect } from 'chai'
import create from './create'
import hasClass from './has-class'
import addClass from './add-class'

describe('addClass', () => {
  it('adds a class to an element', () => {
    const classes = ['a', 'b', 'c']
    const el = create({ tag: 'p' })
    addClass(el, 'a')
    const checks = classes.map(className => hasClass(el, className))
    expect(JSON.stringify(checks)).to.equal('[true,false,false]')
  })

  it('adds multiple classes to an element', () => {
    const classes = ['a', 'b']
    const el = create({ tag: 'p' })
    addClass(el, ...classes)
    classes.push('c')
    const checks = classes.map(className => hasClass(el, className))
    expect(JSON.stringify(checks)).to.equal('[true,true,false]')
  })
})
