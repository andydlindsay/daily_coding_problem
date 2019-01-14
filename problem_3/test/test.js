const { assert } = require('chai');
const { Node, serialize, deserialize } = require('../solution');

describe('Test for Problem #3', () => {

    it('returns "left.left" given sample input data', () => {
        const input = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
        const output = 'left.left';
        assert.equal(deserialize(serialize(input)).left.left.val, output);
    });

});