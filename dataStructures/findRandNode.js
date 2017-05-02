/*
create a random number from 0 to 500 Use a binary search tree to find this value
*/

var Node = function(){};

Node.prototype.init = function(val,left = null,right = null){
    this.value = 0;
    this.leftChild = left;
    this.rightChild = ritgt;
}

var Tree = function(){};

Tree.prototype.init = function(root){
    this.root = new Node;
    this.root.init(root);
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

Tree.prototype.generateTree = function(node,max,depth){
    if (depth > 0){

        node.leftChild = new Node;
        node.leftChild.value = node.value - 3;
        this.generateTree(node.leftChild, node.value, depth - 1);

        node.rightChild = new Node;
        node.rightChild.value = max - depth;
        this.generateTree(node.rightChild, max, depth - 1);
    }
    return;
}
