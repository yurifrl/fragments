const sumSmallestNumbers = require('../src/sum-smallest-numbers.js');
const expect = require('expect.js');

describe('sumSmallestNumbers()', () => {
  it('should return the sum of the two smallest numbers', () => {
    // expect(sumSmallestNumbers([1, 2, 3, 4])).to.eql(3);
    // expect(sumSmallestNumbers([6, 7, 56, 2, 9, 34, 3])).to.eql(5);
    // expect(sumSmallestNumbers([4, 4])).to.eql(8);
    expect(sumSmallestNumbers([5, 38, 15, 1, 1, -19, 9])).to.eql(-18);
    // expect(sumSmallestNumbers([1, 1, 1, 1])).to.eql(2);
  });
});



