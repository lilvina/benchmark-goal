import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {GuessNum} from '../src/guess-number'

chai.use(chaiChange)

describe('GuessNum', () => {
  'use strict'

  it('exists', () => {
    expect(GuessNum).to.be.a('object')
  }) 

  it('generateRandomNumber returns a number between 1 and 100.', () => {
    expect(GuessNum.generateRandomNumber()).to.be.within(1, 100)
  })

  it('promptUserForGuess returns if the user won.', () => {
    expect(GuessNum.promptUserForGuess()).to.be.undefined
  }) 

})