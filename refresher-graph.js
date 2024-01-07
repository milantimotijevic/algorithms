
class Graph {
    constructor(nodes = []) {
        this.nodes = nodes;
    }

    addNode(node) {
        this.nodes.push(node);
    }

    printOut() {
        this.nodes.forEach(node => {
            let message = node.value;

            if (node.connection) {
                message += ` =======> ${node.connection.value}`
            }

            console.log(message);
        });
    }
}

class Node {
    constructor(value, connection) {
        this.value = value;
        this.connection = connection;
    }

    setConnection(node) {
        this.connection = node;
    }
}

const pera = new Node('Pera');
const mika = new Node('Mika', pera);
pera.setConnection(mika);

const laza = new Node('Laza', pera);
const zika = new Node('Zika', laza);
const jeca = new Node('Jeca');
const veca = new Node('Veca');
jeca.setConnection(veca);


const graph = new Graph([
    pera,
    mika,
    laza,
    zika,
    jeca,
    veca,
]);

graph.printOut();