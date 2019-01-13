const { assert } = require('chai');
const solution = require('../solution');

describe('Tests for Problem #2', () => {

    it('returns [120, 60, 40, 30, 24] given [1, 2, 3, 4, 5]', () => {
        const input = [1, 2, 3, 4, 5];
        const output = [120, 60, 40, 30, 24];
        assert.equal(solution(input).toString(), output.toString());
    });

    it('returns [2, 3, 6] given [3, 2, 1]', () => {
        const input = [3, 2, 1];
        const output = [2, 3, 6];
        assert.equal(solution(input).toString(), output.toString());
    });

});