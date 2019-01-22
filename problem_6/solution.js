/*
    An XOR linked list is a more memory efficient doubly linked list. 
    Instead of each node holding next and prev fields, it holds a field
    named both, which is an XOR of the next node and the previous node.
    Implement an XOR linked list; it has an add(element) which adds the
    element to the end, and a get(index) which returns the node at index.

    If using a language that has no pointers (such as Python), you can
    assume you have access to get_pointer and dereference_pointer
    functions that converts between nodes and memory addresses.
*/

// next_node = address(previous_node) ^ npx(current_node)

class Node {
    constructor(value) {
        this.value = value;
        this.address = Math.floor(Math.random()*1e8);
        this.both = '';
    }
}

const nodes = {};
const input = [1, 3, 5, 7, 9];
let previousNode = null;
let headNode = null;
input.forEach((elem, index) => {
    const newNode = new Node(elem);
    newNode.both = previousNode + ',';
    nodes[newNode.address] = newNode;
    if (previousNode) {
        nodes[previousNode].both += newNode.address;
    }
    previousNode = newNode.address;
    if (index === input.length - 1) {
        newNode.both += 'null';
        tailNode = newNode;
    }
    if (index === 0) {
        headNode = newNode;
    }
});

// traversal front to back
let currentNode = headNode;
while (currentNode.both.split(',')[1]) {
    console.log(currentNode);
    currentNode = nodes[currentNode.both.split(',')[1]];
    if (!currentNode) {
        break;
    }
}

console.log();

// traversal back to front
currentNode = tailNode;
while (currentNode.both.split(',')[0]) {
    console.log(currentNode);
    currentNode = nodes[currentNode.both.split(',')[0]];
    if (!currentNode) {
        break;
    }
}

console.log();

function get(index) {
    currentNode = headNode;
    let i = 0;
    while (i < index) {
        currentNode = nodes[currentNode.both.split(',')[1]];
        i++;
    }
    return currentNode;
}
console.log(get(4));
