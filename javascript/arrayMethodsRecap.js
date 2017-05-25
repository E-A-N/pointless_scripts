var tay = [1,3,4,6,9,222];
var entries = [];

//None es6 anonymous functions
var doubleArray = tay.map(function(val){
    return val * 2;
})
entries.push(doubleArray);

var overNine = tay.filter(function(val){
    return val > 9;
})[0]
entries.push(overNine);

var totalSum= tay.reduce(function(a,b){
    return a + b;
});
entries.push(totalSum);

//es6 Syntax
var tripleArray = tay.map((val)=>(val * 3));
entries.push(tripleArray);

var underNine = tay.filter((val)=> (val < 9));
entries.push(underNine);

var subtractAll = tay.reduce((a,b)=> (a-b));
entries.push(subtractAll);

//Declared functions
var quadrupler = function(val){
    return val * 4;  
}
var quadArray = tay.map(quadrupler);
entries.push(quadArray);

var greaterThanFour = function(val){
    return val > 4;
}
var overFour = tay.filter(greaterThanFour);
entries.push(overFour);

var multiplyRay = function(a,b){
    return a * b;
}
var totalProduct = tay.reduce(multiplyRay);
entries.push(totalProduct);

//Print entries to console
entries.forEach(function(val){
    console.log(val + "\n");
});
