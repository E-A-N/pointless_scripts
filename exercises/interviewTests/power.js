/* Write a function in Javascript that executes the power function (X^n) and returns the value.

function power ( x, n ) { }

However, you cannot: 
- Use for-loops, while-loops, or do-while loops
- Create any local variables beyond the parameters

BONUS:
- Can you alter this function to perform in O(logn) time? Previous rules can be removed in order to do so.
*/

function power(root, rep, sum = 0){
    /**
     *    @params {int} root: the root value to increase expontentially
     *    @parsms {int} rep: the power to increase the root by
     */
     
    //configure default paramter to be zero only once
    if (sum === 0){
        sum = root;
    }
   
    result = rep > 1 ? power(root, --rep, sum * root) : sum;
    return result;
}

/* 
   hmmmm...logn runtime?
*/
