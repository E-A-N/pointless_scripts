/**
Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
*    @param {number} a - 1st number to find common divisor with
*    @param {number} b - 2nd number to find common divisor with
*    @param {number} common - current greatest common divisor discovered
*    @return {number}
* 
*/

var gcd = function(a,b,common = 0){
    var remainder = a % b;
    var result = remainder == 0 ? common : gcd(b,remainder,remainder);
    
    //console.log(remainder);
    return result
}

gcd(48,18); //6
gcd(20,55); //5
gcd(62,148); //2
