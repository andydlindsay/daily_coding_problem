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
        returnString += 'undefined,';
    }
    if (node.right instanceof Node) {
        returnString += visit(node.right);
    } else {
        returnString += 'undefined),'; 
    }
    return returnString;
}

module.exports.serialize = (node) => {
    return visit(node).replace(new RegExp(',$'), ')');
};

module.exports.deserialize = (node) => {
    // (root,(left,(left.left,undefined,undefined),undefined),(right,undefined,undefined))
    // Node { val: 'root', left: 
    //      Node {
    //        val: 'left',
    //        left: Node { val: 'left.left', left: undefined, right: undefined },
    //        right: undefined },
    //     right: Node { val: 'right', left: undefined, right: undefined } }
    // Node { val: 'root', left: undefined, right: undefined }

    let rootNode;
    for (let i = 0; i < node.length; i++) {
        switch (node[i]) {
            case '(':
                // new Node starting
                const nodeName = node.substr(i + 1, node.indexOf(',', i) - 1).split(',')[0];
                const newNode = new Node(nodeName);
                if (nodeName === 'root') {
                    rootNode = newNode;
                }
                i += nodeName.length - 1;
                break;
            case ')':
                // Node ending

                break;

        }
    }
    console.log(rootNode);
    return rootNode;
};
