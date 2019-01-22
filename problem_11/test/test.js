const { assert } = require('chai');
const solution = require('../solution');

describe('Tests for Problem #11', () => {

    it('given [dog, deer, deal] and a query string of \'de\', return [deer, deal]', () => {
        const inputObj = {
            input: [ 'dog', 'deer', 'deal' ],
            queryString: 'de'
        };
        const output = [ 'deer', 'deal' ];
        assert.equal(solution(inputObj).toString(), output.toString());
    });

    it('given [spider, special, spin, spindle] and a query string of \'spin\', return [spin, spindle]', () => {
        const inputObj = {
            input: [ 'spider', 'special', 'spin', 'spindle' ],
            queryString: 'spin'
        };
        const output = [ 'spin', 'spindle' ];
        assert.equal(solution(inputObj).toString(), output.toString());
    });

    it('given [cat, case, carry, crying, cream] and a query string of \'ca\', return [cat, case, carry]', () => {
        const inputObj = {
            input: [ 'cat', 'case', 'carry', 'crying', 'cream' ],
            queryString: 'ca'
        };
        const output = [ 'cat', 'case', 'carry' ];
        assert.equal(solution(inputObj).toString(), output.toString());
    });

});