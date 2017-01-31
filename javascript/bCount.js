function bCount(stri,choice){

    var trueOrFalse = (x)=>(x===choice);
    //convert true to 1 or false to 0
    var zeroOne = function(x){return x === true ? 1 : 0};
    var total = stri.split().reduce((x,y)=>(x + zeroOne(trueOrFalse(y))));
    return total;
}

var ray = "ABCDBBEFG";
bCount(ray,"B");
