Write a multiply function that returns the product of any amount of arguments
    -examples: 
      multiply(2,3) //returns 6
      multiply(6,4,5) //returns 120
      multiply(6,4,5,7,25,0) //returns 0
*/
const multiply = (...args) => {
    let val = args.reduce((a,b)=>(a*b));
    return val;
}
