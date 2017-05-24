/*
Write a JavaScript program to calculate the factorial of a number. Go to the editor
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
*/

/**
* @param {number} n - value to find calculate factorial of
* @returns {number}
*/
var factorial = function(n){
    var product = n * (n -1);
    for(var x = n - 2; x > 0; x--){
        product *= x;
    }
  
    return product;
}

factorial(5);

//Do a recursive solution below later on
