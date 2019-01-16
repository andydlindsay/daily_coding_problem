const { assert } = require('chai');
const { car, cons, cdr } = require('../solution');

describe('Tests for Problem #5', () => {

    it('car(cons(3, 4)) returns 3', () => {
        const input = car(cons(3, 4));
        const output = 3;
        assert.equal(input, output);
    });

    it('cdr(cons(3, 4)) returns 4', () => {
        const input = cdr(cons(3, 4));
        const output = 4;
        assert.equal(input, output);
    });

});
