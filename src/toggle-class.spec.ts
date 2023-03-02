import { expect } from 'chai'
import create from './create'
import hasClass from './has-class'
import toggleClass from './toggle-class'

describe('toggleClass', () => {
  it('adds a class to an element that doesn\'t have it', () => {
    const classes = ['a', 'b', 'c']
    const el = create({ tag: 'p', classes })
    toggleClass(el, 'd')
    classes.push('d')
    const checks = classes.map(className => hasClass(el, className))
    expect(JSON.stringify(checks)).to.equal('[true,true,true,true]')
  })

  it('removes a class from an element that has it', () => {
    const classes = ['a', 'b', 'c']
    const el = create({ tag: 'p', classes })
    toggleClass(el, 'a')
    const checks = classes.map(className => hasClass(el, className))
    expect(JSON.stringify(checks)).to.equal('[false,true,true]')
  })

  it('toggles multiple classes at once', () => {
    const classes = ['a', 'b', 'c']
    const el = create({ tag: 'p', classes })
    classes.push('d')
    toggleClass(el, 'a', 'd')
    const checks = classes.map(className => hasClass(el, className))
    expect(JSON.stringify(checks)).to.equal('[false,true,true,true]')
  })
})
