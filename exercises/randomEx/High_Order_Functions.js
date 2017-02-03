/* Eloquent JavaScript High-Order Function Exercises */


/*Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the input
arrays.*/

/*Arrays also come with the standard methods every and some. Both take a
predicate function that, when called with an array element as argument,
returns true or false. Just like && returns a true value only when the
expressions on both sides are true, every returns true only when the
predicate returns true for all elements of the array. Similarly, some returns
true as soon as the predicate returns true for any of the elements. They
do not process more elements than necessary—for example, if some finds
that the predicate holds for the first element of the array, it will not look
at the values after that.
Write two functions, every and some, that behave like these methods,
except that they take the array as their first argument rather than being
a method.*/


function combine(cur, ray)
{
    var rLen = ray.length;
    var currentSum = 0;

    for (var i = 0; i < rLen; i++)
    {
        currentSum += ray[i];
    }

    return currentSum;
}

function flatten(ray1,ray2)
{
    var nRay = [];
    var rL1 = ray1.length;
    var rL2 = ray2.length;
    

    for (var i = 0; i < rL1; i++)
    {
        nRay.push(ray1[i]);
    }

    for (var n = 0; n < rL2; n++)
    {
        nRay.push(ray2[n]);
    }
    return nRay;
}


var z = [1,2,3,4,5,6];
function some(ray,func) //2nd parameter is function that manipulates 1st parameter
{
    for (var i = 0; i < ray.length; i++)
    {
        if (func(ray[i]))
        {
            return "true: " + String(ray[i]);
        }
    }
    return false;
}

function every(ray,func)
{
    for (var i = 0; i < ray.length; i++)
    {
        if (!func(ray[i]))
        {
            return false;
        }
    }
    return true;
}

//Inheritance + High Order Functions

//Function to check if element can be divided by 3
var dibi3 = function(elm)
{
    return elm % 3 == 0;
}

//Add a psuedo 'some' method to Array Objects
Array.prototype.sommen = function(func)
{
    for (var i = 0; i < this.length; i++)
    {
        if (func(this[i]))
        {
            return true;
        }
    }
    return false; //no elements met function requirements
}

var arry = [4,5,3,1,23,4,6,6,9];
arry.sommen(dibi3);

//console log: true == arry[2] is divisible by 3 =]


var tRay = [["$6"],["$12"],["$25"],["$18"],["$22"],["$18"],["$22"],["$10"],["$0"],["$15"],["$3"],["$75"],["$5"],["$100"],["$7"],["$3"],["$75"],["$5"],]


function flatten2(ray)
{
    var nRay = [];
    for (var i = 0; i < ray.length -1;i++)
    {
        nRay.push(ray[i][0]);
    }
    return nRay;
}



function fun(name,pro)
{
    console.log("My name is " + name + " and I am  a " + pro);

}

Array.prototype.showme = function()
{
    
    return this.valueOf(); //value of contains value of original object
}






