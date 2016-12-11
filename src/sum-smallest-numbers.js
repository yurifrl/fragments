// Given an array of numbers, you should compute the sum of the two smallest
// number values. You can assume that the array only contains
// numbers, is never undefined and the array has min length of 2.
const sumSmallestNumbers = function(numbers) {
  let first = Number.MAX_VALUE
  let second = Number.MAX_VALUE

  for(let i=0; i < numbers.length; i++) {
    const dist = numbers[i]
    if (dist < first) {
        second = first;
        first = dist;
    } else if (dist < second) {
        second = dist;
    }
  }
  return first + second
};

module.exports = sumSmallestNumbers;
