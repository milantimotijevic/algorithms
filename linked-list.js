
class Node {
	constructor (value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	insert (node) {
		if (this.head === undefined) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}

	printOut() {
		if (this.head === undefined) {
			return;
		}

		let current = this.head;

		while (current !== undefined) {
			console.log(current.value);
			current = current.next;
		}
	}
}

const linkedList = new LinkedList();
linkedList.insert(new Node(4));
linkedList.insert(new Node(6));
linkedList.insert(new Node(7));
linkedList.insert(new Node(9));
linkedList.printOut();
