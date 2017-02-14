
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

var num = 2;
expo(num,8,num);
