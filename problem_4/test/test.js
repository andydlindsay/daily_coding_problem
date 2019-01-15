const { assert } = require('chai');
const solution = require('../solution');

describe('Tests for Problem #4', () => {

    it('returns 2 given [3, 4, -1, 1]', () => {
        const input = [3, 4, -1, 1];
        const output = 2;
        assert.equal(solution(input), output);
    });

    it('returns 3 given [1, 2, 0]', () => {
        const input = [1, 2, 0];
        const output = 3;
        assert.equal(solution(input), output);
    });

});