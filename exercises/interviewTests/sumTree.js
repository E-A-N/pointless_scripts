function findSum(node){
    /**
     * @param {object} node - basic component of a tree
     * @param {array}  node.children - a list child nodes
     * @param {int}    node.value - the value of the current node
     * @returns {int}  Total value of current node and all of it's children
     */
    //writing test cases in webconsole
    var cur = node;
    var incr; //value used to pass summed value of children to current value
    
    //this traversal assumes a node without any children is null, may also find a solution for undefined too
    if (cur.children !== null) {
        for(var i = 0; i < cur.children.length; i++){
            var incr = findSum(cur.children[i]);
            cur.value += incr;
        }
    }
    
    return cur.value;
}

function Node(value,children){
    this.value = value;
    this.children = children || null;
    this.visited = false;
}

var n1 = new Node(9);
var n1Family = [new Node(2), new Node(4), new Node(6)];
n1.children = n1Family;

var n2 = new Node(9);
var n2Family = [new Node(3), new Node(4), new Node(6)];
n2.children = n2Family;

n1.children.push(n2);

findSum(n1);
