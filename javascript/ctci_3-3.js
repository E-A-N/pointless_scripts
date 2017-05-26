var setOfStacks = function(){};

//plateStack Constructor
var plateStack = function(top){
    this.top = top || null;
}

plateStack.prototype.pop = function(){
    var item = this.top.data;
    this.top = this.top.next;
    return item;
}

plateStack.prototyp.push = function(item){
    var top = this.top
    var plate = new plateNode(item,top);
    this.top = plate;
}

plateStack.prototype.peek = function(){
    var result = this.top.data
    return result || "There are no plates!";
}

//Constructor
var plateNode = function(data,next){
    this.data = data || "Ordinary Plate";
    this.next = next || null;
};
