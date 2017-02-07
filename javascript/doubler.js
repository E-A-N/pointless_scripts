var dubThis  = (x) => x + x;
var cubeThis = (x) => x * x * x;
var expThis  = (x,y) => x ** y; //returns an error

var expClo = function(x){
    let y = x
    return function exp(z){
        return exp()
    }
}

function anotherFun (x){
    return (y) => y + x
}
