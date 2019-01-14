const { assert } = require('chai');
const { Node, serialize, deserialize } = require('../solution');

describe('Tests for Problem #3', () => {

    it('correctly serializes data', () => {
        const input = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
        const output = '(root,(left,(left.left,undefined,undefined),undefined),(right,undefined,undefined))';
        assert.equal(serialize(input), output);
    });

    it('returns "left.left" given sample input data', () => {
        const input = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
        const output = 'left.left';
        assert.equal(deserialize(serialize(input)).left.left.val, output);
    });

});