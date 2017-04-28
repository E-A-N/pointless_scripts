function countOcurrences(ray,target){
    /**
    * @param {array} ray - a collection of numbers to search through
    * @param {int} target - a value to check for in array
    * @returns {int} the number of times a target value is within an array
    */
    var reps = 0; //address the amount of times target repeats
    var len = ray.length;
    
    for(var x = 0; x < len; x++){
         if (ray[x] === target){
            ++reps;
        }
    }
    
    return reps;
}


var tRay = [ 1,2,4,4,2,6,5,7,7,7,777,9];
var test = countOcurrences(tRay,4);
console.log(test);
