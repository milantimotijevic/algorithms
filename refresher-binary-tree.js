class Node {
    constructor(value) {
        this.value = value;
    }

    addNode(node) {
        if (this.value >= node.value) {
            if (this.left) {
                this.left.addNode(node);
            } else {
                this.left = node;
            }
        } else {
            if (this.right) {
                this.right.addNode(node);
            } else {
                this.right = node;
            }
        }
    }

    collectToArray() {
        let leftArray = [];
        if (this.left) {
            leftArray = this.left.collectToArray();
        }
        
        let rightArray = [];
        if (this.right) {
            rightArray = this.right.collectToArray();
        }

        return [...leftArray, this.value, ...rightArray];
    }

    printPreOrder() {
        console.log(this.value);
        if (this.left) {
            this.left.printPreOrder();
        }

        if (this.right) {
            this.right.printPreOrder();
        }
    }

    printInOrder() {
        if (this.left) {
            this.left.printInOrder();
        }

        console.log(this.value);

        if (this.right) {
            this.right.printInOrder();
        }
    }

    printPostOrder() {
        if (this.left) {
            this.left.printPostOrder();
        }

        if (this.right) {
            this.right.printPostOrder();
        }

        console.log(this.value);
    }

    contains(value) {
        if (this.value === value) return true;

        if (this.value > value && this.left) return this.left.contains(value);

        if (this.value < value && this.right) return this.right.contains(value);
    }
}

class BinaryTree {
    constructor(nodeArray) {
        this.buildFromArray(nodeArray);
    }

    buildFromArray(array) {
        console.log('Building tree from array...');
        delete this.topNode;
        for (let i = 0; i < array.length; i++) {
            this.addNode(array[i]);
        }
    }

    addNode(value) {
        if (!this.topNode) {
            this.topNode = new Node(value);
            return;
        }

        this.topNode.addNode(new Node(value));
    }

    printPreOrder() {
        console.log('Printing pre-order');
        if (!this.topNode) {
            console.log('The tree is empty');
            return;
        }

        this.topNode.printPreOrder();
    }

    printInOrder() {
        console.log('Printing in-order');
        if (!this.topNode) {
            console.log('The tree is empty');
            return;
        }

        this.topNode.printInOrder();
    }

    printPostOrder() {
        console.log('Printing post-order');
        if (!this.topNode) {
            console.log('The tree is empty');
            return;
        }

        this.topNode.printPostOrder();
    }

    contains(value) {
        let contains = false;
        if (this.topNode) {
            contains = this.topNode.contains(value);
        }
        
        if (contains) {
            console.log(`The tree does contain value ${value}`);
        } else {
            console.log(`The tree does not contain value ${value}`);
        }
    }

    balance() {
        if (!this.topNode) {
            console.log('The tree is empty');
            return;
        }

        console.log('Rebalancing tree...')
        const array = this.topNode.collectToArray();
        this.buildFromArray(array);
    }
}

const binaryTree = new BinaryTree([30, 15, 67, 120, 1]);
binaryTree.addNode(7);
binaryTree.addNode(8);
binaryTree.addNode(200);
binaryTree.addNode(119);


binaryTree.printPreOrder();
binaryTree.printInOrder();
binaryTree.printPostOrder();

binaryTree.contains(67);
binaryTree.contains(10);

binaryTree.balance();
binaryTree.printInOrder();
