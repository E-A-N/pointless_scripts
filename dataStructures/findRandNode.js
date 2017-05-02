/*
create a random number from 0 to 500 Use a binary search tree to find this value
*/

var Node = function(){};

Node.prototype.init = function(){
    this.value = 0;
    this.leftChild = null;
    this.rightChild = null;
}

var Tree = function(){};

Tree.prototype.traverse = function(node, call){
    if (node.leftChild){
        call(node.leftChild);
        this.traverse(node.leftChild);
    }
    if (node.leftChild){
        call(node.leftChild);
        this.traverse(node.leftChild);
    }
}
