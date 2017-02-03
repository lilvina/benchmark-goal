'use strict'

// export const Disemvoweling {
//   remove() {
//     return str.replace(/[aeiou]/gi, "")
//   }
// }

// export default class Disemvoweling {
//   constructor() {
//     this.str = str
//   }

//   remove() {
//     return str.replace(/[aeiou]/gi, "")
//   }
// }

// class Disemvoweling {
//   constructor() {
//     this.str = str
//   }

//   remove() {
//     str = "Hello World"
//     return str.replace(/[aeiou]/gi, "")
//   }
// }

// export default Disemvoweling

export default function Disemvoweling(str) {
  let removeSpace = str.replace(/\s/g, '')
  let removeVowel = removeSpace.replace(/[aeiou]/gi, '')
  return removeVowel
  // return str.replace(/[aeiou]/gi, '')
}

