/* Eloquent JavaScript DataStructures Exercises */


/*Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and including)
end.*/

function ean_range(beg,end,step=1)
{
    var e_count = [];
    var diff = beg < end ? 'higher' : 'lower';
    step = step > 0 ? step : step * -1; //prevent infinite loop
    step = step === 0 ? 1 : step; //prevent incrementation by 0 (infinite loop)
    
switch (diff)
    {
        case 'higher': //end is higher than beg so increment iterations
        for (i = beg; i < end + 1; i += step)
        {
             e_count.push(i);
        };
        break;

        case 'lower': //end is lower than (or equal to) beg so decrement iterations
        for (i = beg; i > end - 1; i -= step)
        {
            e_count.push(i);
        };
        break;
    }
    return e_count; //return range array
}

/* Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the previous program and see whether
it does indeed return 55. */

function ean_sum(ray)
{
    var rLen = ray.length;
    var adder = 0;
    for (i = 0; i < rLen; i++)
    {
        adder += ray[i];
        console.log(adder + ray[i]);
    }
    return adder;
}

/*For this exercise, write two functions,
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
as argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace, does what the reverse
method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method. */

function reverseArray(ray)
{
    var rLen = ray.length;
    var nRay = [];

    for (i = rLen - 1; i > 0; i--)
    {
        nRay.push(ray[i]);        
    }
    return nRay;
}

//Reverse Array in Place
Array.prototype.revArr = function()
{
    var rLen = this.length;
    var oRay = []; //is there a way to copy array from this instance without a loop?

    for (i = 0; i < rLen; i++)
    {
        oRay[i] = this[i]
    }
    
    for (x = rLen, z=0; x > 0; x--,z++)
    {
        this[x] = oRay[z];
    }
    this.shift(); //shift method covers up a logical error that sets the beggining of
}                 //this array to 1???

// d = [1,2,3,4];  d.revArr()  ----> [1,4,3,2,1] <--- output without this.shift() at
// the end.
// shift method and the 1st (I'm assuming redundant) for-loop makes this extra slow


//Extend Array data type
Array.prototype.adda = function()
{
    this[0] += this[0] + 5;
} // [1,2,4].adda() == [7,2,4]


/* Write a function arrayToList that builds up a data structure like the
previous one when given [1, 2, 3] as argument, and write a listToArray
function that produces an array from a list. Also write the helper
functions prepend, which takes an element and a list and creates a new
list that adds the element to the front of the input list, and nth, which
takes a list and a number and returns the element at the given position
in the list, or undefined when there is no such element. */
//ray = [1,2,3,4]

function elevate(ray)
{
    var rLen    =  ray.length;
    var oLen    =  rLen;  //keep track of object length
    var oVal    =  ray[0]; //store 1st array value(of parameter) for indice
    var curITER =  {value: oVal, next: null};   //
    var orITER  =  curITER //original object
    var maxITER =  rLen - 1; //find last array indice of function parameter
    
    for (x = oVal; x < rLen - 1; x++)
    {
        if (curITER[value] != maxITER)
        {
            curITER['next'] = {value: i, next: {value:i + 1, next:null}};
            curITER = curITER['next']['next'];
        }
        else {break;}
    }
    var curITER = this.curITER;
    return curITER;
}

//Link List
rayREC = function(ray,iter=0)
{   //Default param 'inc' allows arbitrary implementation of this function
    var rLen = ray.length;
    if (iter > rLen) return;
    return  {//recurively increment objects
             iteration: iter,
             value: ray[iter],
             next: rayREC(ray,iter + 1), //recursion
            }
}

//List Prepend
/* Write the helper function prepend which takes an element and a list and creates a new
list that adds the element to the front of the input list */
lsPre = function(obj={})
{   
    var iter = 0;
    var maxIT = 0; //use to capture final object iteration
    var oldObj = obj; //initialize old object

    //create new object to prepend to old object
    var newObj = {iteration: iter,
                  value: 'Overwrite this Value',
                  next: oldObj.next
                 };
    
    while (oldObj.next != null) //(oldObj.iteration + 1 > maxIT)
    {
        maxIT++;
        newObj.next = oldObj.next;
        oldObj = oldObj.next;
    }
    return newObj;
}

//List to Array
obj2Ray = function(obj)
{
    var ray = [];
    for (y = obj['val'];obj != null;y++)
    {
        ray[y] = obj['val'];
        obj = obj['next'];
    }
    ray.shift();
    return ray;
}

//Reverse Array in Place Exercise
Array.prototype.tRev = function()
{
    var nRay = this.valueOf(); //copy instance of array

    for (var x = 0, y = this.length-1; x < this.length; x++,y--)
    {
        console.log("\n current x is = " + this[x],"new copy of y is = " + nRay[y]);
        console.log(" x iterator is = " + x,"z iterator is = " + y);
        this[x] = nRay[y];  //switch array element with copy of nRay elements
        console.log(" new x is = " + this[x],"old copy of y is = " + nRay[y]);
    } 
}

var z = [1,2,3,4,5];
var z1 = [343,32423,2434,4,5,5,3];
var z2 = ['hello','hi','goodbye'];















