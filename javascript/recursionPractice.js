
/*

Write a recurive function that takes a base and an exponent and returns an expotential value
*/

function expo(base,exp,val){
 	if (exp <= 1){
            return val
	}
    console.log(base,val,exp);
	return expo(base,exp -1, val * base)
}


var nums = [9,3,9];
expo(...nums);

/*
    Write a recursive function that doubles the values of a list
*/

var ray = [2,4,6,8];
function doubler(arg,iter=0){
    if (iter < arg.length) {
        arg[iter] += arg[iter++];
        return doubler(arg,iter);
    }
    else {
        return arg;
    }
}
doubler(ray);

/*
    Write a recursive reduce function
*/
let dub = function(a,b){
    return a + b;
}
function eanReduce(arg,highOrder,val=0,iter=0){
    if (iter < arg.length){
        let newVal = highOrder(val,arg[iter++])
        return eanReduce(arg,highOrder, newVal,iter);
    }
    else {
        return val;
    }
}

var arr = [2,4,6,8];
eanReduce(arr,dub);

/*
    write a recursive function to get the product of 2 numbers
*/

function product(a,b){
    if (b - 1 > 0){
        return product(a + a, b-1);
    }
    else if (b -1 === 0){
        return a;
    }
    else if (b === 0){
        return 0;
    }
}
