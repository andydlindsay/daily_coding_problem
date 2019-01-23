const { assert } = require('chai');
const solution = require('../solution');

describe('Tests for Problem #12', () => {

    it('returns 1 given x is [1] and n is 4', () => {
        const input = {
            x: [ 1 ],
            n: 4
        };
        const output = 1;
        assert.equal(solution(input), output);
    });

    it('returns 2 given x is [1, 2] and n is 2', () => {
        const input = {
            x: [ 1, 2 ],
            n: 2
        };
        const output = 2;
        assert.equal(solution(input), output);
    });

    it('returns 3 given x is [1, 2] and n is 3', () => {
        const input = {
            x: [ 1, 2 ],
            n: 3
        };
        const output = 3;
        assert.equal(solution(input), output);
    });

    it('returns 5 given x is [1, 2] and n is 4', () => {
        const input = {
            x: [ 1, 2 ],
            n: 4
        };
        const output = 5;
        assert.equal(solution(input), output);
    });

    it('returns 8 given x is [1, 2] and n is 5', () => {
        const input = {
            x: [ 1, 2 ],
            n: 5
        };
        const output = 8;
        assert.equal(solution(input), output);
    });

    it('returns 11 given x is [1, 3, 5] and n is 5', () => {
        const input = {
            x: [ 1, 3, 5 ],
            n: 5
        };
        const output = 11;
        assert.equal(solution(input), output);
    });

});
