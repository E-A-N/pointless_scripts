/*
    Write a function the computes the list of the first 100 Fibonacci numbers.  By definition, the first two numbers in teh Fibonacci sequence are 0 and 1, and each subsequent number is the sum o the previous two.  As an example, here are the first Fibonnaci numbe3rs: 0,1,1,2,3,5,8,13,21, and 34.
*/

function fibonacci(){
    var pre = 0;
    var num = 0;
    var sub;
    let ray = [0,1];

    for (let i = 2; i < 100; i++){
        pre = ray[i-2];
        num = ray[i-1];
        ray.push(pre+num)
    }
    return ray;
}
