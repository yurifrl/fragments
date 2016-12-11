const sameXOAmount = require('../src/same-xo-amount.js');
const expect = require('expect.js');

describe('sameXOAmount()', () => {
  it('should return `true` if number of `X` and `O` is equal', () => {
    expect(sameXOAmount('xXoO')).to.eql(true);
    expect(sameXOAmount('aAxXXbBoOo')).to.eql(true);
    expect(sameXOAmount('abc')).to.eql(true);
  });
  it('should return `false` if number of `X` and `O` is not equal', () => {
    expect(sameXOAmount('OaAxXbBoO')).to.eql(false);
    expect(sameXOAmount('xgXoXsdxOxz')).to.eql(false);
    expect(sameXOAmount('aaAmmMxMM')).to.eql(false);
  });
});
