const { assert } = require('chai');
const solution = require('../solution');

describe('Tests for Problem #27', () => {

    it('returns true given "([])[]({})"', () => {
        const input = '([])[]({})';
        const output = true;
        assert.equal(solution(input), output);
    });

    it('returns false given "([)]"', () => {
        const input = '([)]';
        const output = false;
        assert.equal(solution(input), output);
    });

    it('returns false given "((()"', () => {
        const input = '((()';
        const output = false;
        assert.equal(solution(input), output);
    });

});
