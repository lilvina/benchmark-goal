import chai, { expect} from 'chai'
import chaiChange from 'chai-change'
import Disemvoweling from '../src/disemvowling'

chai.use(chaiChange)

describe('Disemvoweling', () => {
  'use strict'

  it('exists', () => {
    expect(Disemvoweling).to.be.a('function')
  })

  it('remove returns the disemvowled text with spaces removed', () => {
    expect(Disemvoweling('hello world')).to.equal('hllwrld')
  })
})