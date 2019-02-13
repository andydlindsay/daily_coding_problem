const chai = require('chai');
const { expect } = chai;
const { solution } = require('../solution');
require('mocha-sinon');
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe('Tests for problem 33', () => {

    beforeEach(function() {
        this.sinon.spy(console, 'log');
    });

    it('solution() is a function', () => {
        expect(solution).to.be.a('function');
    });

    it('solution() should print to the console once for every element of input', () => {
        const input = [2, 1, 5, 7, 2, 0, 5];
        solution(input);
        expect(console.log).to.have.callCount(input.length);
    });

    it('solution() should print the proper median value to the console once for every element of input', () => {
        const input = [2, 1, 5, 7, 2, 0, 5];
        solution(input);
        expect(console.log).to.have.callCount(input.length);
        expect(console.log).to.have.calledWith(2);
        expect(console.log).to.have.calledWith(1.5);
        expect(console.log).to.have.calledWith(3.5);
    });

});