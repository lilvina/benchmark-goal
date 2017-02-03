import chai, { expect} from 'chai'
import chaiChange from 'chai-change'
import StringIndices from '../src/string-indices'

chai.use(chaiChange)

describe('StringIndices', () => {
  'use strict'

  it('exists', () => {
    expect(StringIndices).to.be.a('function')
  })

  it('returns the string in the sentence found at the index', () => {
    expect(StringIndices('catch me outside how about that', 1)).to.equal('catch')
  })

  it('should return an empty string if you ask for the word at index 7', () => {
    expect(StringIndices('You can\'t find me', 7)).to.equal('')
  })
  
})