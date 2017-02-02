'use strict'

const readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout)

export const GuessNum = {
   generateRandomNumber() {
    let randomNum = Math.floor(Math.random()*100)
    return randomNum
   },

   promptUserForGuess() {
    let point = 0
    rl.question('Please enter a number between 1 and 100', (guess) => {
      if(guess === randomNum) {
        point++

      } else {
        point--

      }
      return point
    })

   }
}
