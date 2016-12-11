const {compose, head, tail, prop, map, length, last} = require('ramda');

// Given an array of numbers, you should compute the sum of the two smallest
// number values. You can assume that the array only contains
// numbers, is never undefined and the array has min length of 2.
const sumSmallestNumbers = function(numbers) {

  const [n1, n2] = findSmallPair(numbers, numbers[0], numbers[1])
  console.log(n1)
  console.log(n2)
  return n1 + n2
};

findSmallPair = function(array, n1, n2) {
  if(length(array) === 0) {
    return [n1, n2]
  }
  const firstIsLower = array[0] < n1;
  const notEqual2 = array[0] != n2

  if(firstIsLower && notEqual2) {
    n1 = array[0]
  }

  const secondIsLower = array[1] < n2;
  const notEqual1 = array[1] != n1
  if(secondIsLower && notEqual1) {
    n2 = array[1]
  }

  return findSmallPair(tail(array), n1, n2)
}

module.exports = sumSmallestNumbers;
