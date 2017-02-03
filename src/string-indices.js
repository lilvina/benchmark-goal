'use strict'

export default function StringIndices(input, index) {
  let toArray = input.toString().split(' ')

  if(index >= toArray.length) {
    return ""
  } else {
    let indexString = toArray[index - 1]
    return indexString
  }
}