import { expect } from 'chai'
import create from './create'

describe('create', () => {
  it('creates an element', () => {
    const el = create('p')
    expect(el.tagName).to.equal('P')
  })
})
