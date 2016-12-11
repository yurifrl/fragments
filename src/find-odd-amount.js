// Given an array of numbers, you should find the number which occurs an odd
// number of times within the array. You can assume that there is
// always just one number with an odd amount. Furthermore the array is never
// undefined and contains only numbers.

const { forEach } = require('ramda')
//
const findOddAmount = function(numbers) {
  let res = 0
  forEach((e) => res = res ^ e, numbers)
  return res
}

module.exports = findOddAmount
