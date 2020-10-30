const arr = [5, 12, 1, 4, 56, 21, 30, 9, 19, 3, 2];

class Node {
	value;
	left;
	right;
	constructor (value) {
		this.value = value;
	}

	insert (value) {
		if (value < this.value) {
			if (this.left === undefined) {
				this.left = new Node(value);
			} else {
				this.left.insert(value);
			}
		} else if (value > this.value) {
			if (this.right === undefined) {
				this.right = new Node(value);
			} else {
				this.right.insert(value);
			}
		}
	}

	contains (value) {
		if (this.value === value) {
			return true;
		}

		if (value < this.value && this.left !== undefined) {
			return this.left.contains(value);
		} else if (this.right !== undefined) {
			return this.right.contains(value);
		}

		return false;
	}

	printInOrder () {
		if (this.left !== undefined) {
			this.left.printInOrder();
		}

		console.log(this.value);

		if (this.right !== undefined) {
			this.right.printInOrder();
		}
	}

	printPreOrder () {
		console.log(this.value);

		if (this.left !== undefined) {
			this.left.printPreOrder();
		}

		if (this.right !== undefined) {
			this.right.printPreOrder();
		}
	}

	printPostOrder () {
		if (this.right !== undefined) {
			this.right.printPostOrder();
		}

		console.log(this.value);

		if (this.left !== undefined) {
			this.left.printPostOrder();
		}
	}

}

let node;

arr.forEach(item => {
	if (!node) {
		node = new Node(item);
	} else {
		node.insert(item);
	}
});

console.log('in order:');
node.printInOrder();

console.log('pre order:');
node.printPreOrder();

console.log('post order:');
node.printPostOrder();
