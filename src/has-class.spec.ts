import { expect } from 'chai'
import { hasClass } from './has-class'

describe('hasClass', () => {
  it('returns true if the element has the class', () => {
    const el = document.createElement('p')
    el.classList.add('test')
    expect(hasClass(el, 'test')).to.equal(true)
  })

  it('returns false if the element does not have the class', () => {
    const el = document.createElement('p')
    el.classList.add('test')
    expect(hasClass(el, 'nope')).to.equal(false)
  })

  it('checks any number of classes', () => {
    const el = document.createElement('p')
    el.classList.add('test')
    expect(hasClass(el, 'nope', 'nada', 'zilch', 'test', 'maybe')).to.equal(true)
  })
})
