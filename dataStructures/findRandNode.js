/*
create a random number from 0 to 500 Use a binary search tree to find this value
*/

var Node = function(){};

Node.prototype.init = function(val,left,right){
    this.value = val || 0;
    this.leftChild = left || null;
    this.rightChild = right || null;
}

var Tree = function(){};

Tree.prototype.init = function(rootValue){
    this.root = new Node;
    this.root.init(rootValue);
    this.generateTree(rootValue, 10);
}

Tree.prototype.traverse = function(node, call){

    //In Order Traversal
    if (node.leftChild){
        call(node.leftChild);
        this.traverse(node.leftChild,call);
    }
    call(node);
    if (node.rightChild){
        call(node.rightChild);
        this.traverse(node.rightChild,call);
    }

    return node.value;
}

Tree.prototype.generateTree = function(node,depth){
    if (depth > 0){

        var offset = Math.floor(Math.random() * 3) + 1;
        node.leftChild = new Node;
        node.leftChild.init();
        node.leftChild.value = node.value - offset;
        this.generateTree(node.leftChild, depth - 1);

        node.rightChild = new Node;
        node.rightChild.init();
        node.rightChild.value = max + offset;
        this.generateTree(node.rightChild, depth - 1);
    }
    return;
}

var printNode = function(node){
    console.log(node.value);
}
console.log("Herro Robo! <3");
var oak = new Tree;
oak.init(44);
oak.traverse(oak.root,printNode);
