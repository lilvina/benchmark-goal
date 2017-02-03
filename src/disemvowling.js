'use strict'

export default function Disemvoweling(str) {
  let removeSpace = str.replace(/\s/g, '')
  let removeVowel = removeSpace.replace(/[aeiou]/gi, '')
  return removeVowel
}

