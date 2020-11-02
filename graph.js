class Node {
	constructor(value, connection) {
		this.value = value;
		this.connection = connection;
	}

	setConnection(connection) {
		this.connection = connection;
	}

	print() {
		console.log(`value ${this.value} ---> ${this.connection ? this.connection.value : null}`);
	}
}

class Graph {
	nodes = [];

	addNode(node) {
		this.nodes.push(node);
	}

	printOut() {
		this.nodes.forEach(node => {
			node.print();
		});
	}
}

const graph = new Graph();
graph.addNode(new Node(2));
graph.addNode(new Node(7, graph.nodes[0]));
graph.addNode(new Node(8, graph.nodes[0]));
graph.addNode(new Node(13, graph.nodes[1]));
graph.addNode(new Node(17, graph.nodes[2]));

graph.printOut();


