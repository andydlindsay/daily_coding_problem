/*
    Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

    For example, given the following Node class

    class Node:
        def __init__(self, val, left=None, right=None):
            self.val = val
            self.left = left
            self.right = right
    The following test should pass:

    node = Node('root', Node('left', Node('left.left')), Node('right'))
    assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

const Node = class Node {
    constructor(val, left = undefined, right = undefined) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
};
module.exports.Node = Node;

function visit(node) {
    let returnString = '(' + node.val + ',';
    if (node.left instanceof Node) {
        returnString += visit(node.left);
    } else {
        returnString += node.left ? `${node.left.val},` : 'undefined,';
    }
    if (node.right instanceof Node) {
        returnString += visit(node.right);
    } else {
        returnString += node.right ? `${node.right.val}` : 'undefined),'; 
    }
    return returnString;
}

module.exports.serialize = (node) => {
    return visit(node).replace(new RegExp(',$'), ')');
};

module.exports.deserialize = (node) => {
    // (root,(left,(left.left,undefined,undefined),undefined),(right,undefined,undefined))
    console.log(node);
};
