const { toUpper } = require('ramda')

// TODO: make functional like
const sameXOAmount = function(str) {
  let xCount = 0
  let oCount = 0
  for(let i=0; i < str.length; i++) {

    if (toUpper(str[i]) === 'X') xCount++
    if (toUpper(str[i]) === 'O') oCount++
  }
  return xCount === oCount
}

module.exports = sameXOAmount
