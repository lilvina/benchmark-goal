import chai, {expect} from 'chai'
import chaiChange from 'chai-change'
import ScrabBag from '../src/scrab-bag'

chai.use(chaiChange)

describe('ScrabBag', () => {
  'use strict'

  it('exists', () => {
    expect(ScrabBag).to.be.a('function')
  })

  it('should return the remaining letters.', () => {
    console.log(ScrabBag('AERETOXMYCNS_B'))
  })

})