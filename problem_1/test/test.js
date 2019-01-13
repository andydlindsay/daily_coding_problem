const { assert } = require('chai');
const solution = require('../solution');

describe('Tests for Problem #1', () => {

    it('returns true given [10, 15, 3, 7] and k of 17', () => {
        const arr = [10, 15, 3, 7];
        const k = 17;
        assert.equal(solution(arr, k), true);
    });

    it('returns false given [10, 15, 3, 7] and k of 14', () => {
        const arr = [10, 15, 3, 7];
        const k = 14;
        assert.equal(solution(arr, k), false);
    });

    it('returns false given [] and k of 0', () => {
        const arr = [];
        const k = 0;
        assert.equal(solution(arr, k), false);
    });

    it('returns true given [10, 15, 3, 7] and k of 18', () => {
        const arr = [10, 15, 3, 7];
        const k = 18;
        assert.equal(solution(arr, k), true);
    });

});
