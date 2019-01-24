const { assert } = require('chai');
const solution = require('../solution');

describe('Tests for Problem #13', () => {

  it('returns "bcb" given s = "abcba" and k = 2', () => {
      const input = {
          s: 'abcba',
          k: 2
      };
      const output = 'bcb';
      assert.equal(solution(input), output);
  });

  it('returns "" given s = "" and k = 2', () => {
    const input = {
        s: '',
        k: 2
    };
    const output = '';
    assert.equal(solution(input), output);
  });

});
