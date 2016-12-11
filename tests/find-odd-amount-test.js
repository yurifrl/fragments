const findOddAmount = require('../src/find-odd-amount.js');
const expect = require('expect.js');

describe('findOddAmount()', () => {
  it('should return the number which occurs with an odd frequency', () => {
    expect(findOddAmount([1, 2, 2, 3, 3])).to.eql(1);
    expect(findOddAmount([8, 8, 7, 7, 7])).to.eql(7);
    expect(findOddAmount([10, 3, 3, 10, 6, 10, 6, 1, 1])).to.eql(10);
  });
});
