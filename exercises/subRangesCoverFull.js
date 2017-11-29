/*
Write a function that takes 2 arguments, the 1st argument is a
range of numbers, the second argument is a collection of subRanges.

Assume mainRange and subRange are collections of linear ordered items like numbers or letters.

This function returns true if a consecutive amount of subranges covers the entire mainRange

  // exmapleMainRange = [1, ..., 100]
  //exampleSubRanges = [[1,2,3], [4,5,6], [7,8,9]];
*/


/**
*    This function checks if an item is in an collection and returns the position
*    @param {number} item - The value used to search with
*    @param {array} ray - The array that will be searched for item value
*    @returns {array} - A boolean and index value
*/
const isInArray = (item, ray) => {
    var isIn = false;
    for (var x = 0; x < ray.length; x++){
        if (item === ray[x]){
            isIn = true;
            break;
        }
    }
    //offset iterator by one become of 0-indexing
    return [isIn,x];
}

/**
*    This function checks if an entire array has true values
*    @param {array} ray - collection of booleans to traverse
*    @returns {boolean} - true if all values are true
*/
const pureArray = (ray) => {
    var match = true;
    for(var x = 0; x < ray.length; x++){
        if (ray[x] !== true){
          match = false;
          break;
        }
    }

    return match;
}

/**
 *    @param {array} mainRange - An ordered array of numbers
 *    @param {array} subs - A collection of ordered array of numbers
 *    @returns {boolean} - true if
 */
const  fullRange = (mainRange, subs) => {
    var coveredRange = false;
    var allSubs = subs.length;
    //create a collection of booleans that mimics the size of main array
    var coveredInMain = Array(mainRange.length - 1).fill(false);

    for (var s = 0; s < allSubs; s++){
        //console.log("Im iterating!!")
        var thisSub = subs[s];
        var tsLen = thisSub.length;
        for (var n = 0; n < tsLen; n++){

            var subVal = thisSub[n];
            //isInArray returns an array that's [boolean, valuePosition]
            var results = isInArray(subVal, mainRange);
            //displaying message in console for debugging
            var msg = "subVal is: " +subVal+ "\nresults is: " +results+ "\n";
            console.log(msg);

            if (results[0]) {
              coveredInMain[results[1]] = results[0];
            }
        }
    }

    console.log(coveredInMain);
    coveredInRange = pureArray(coveredInMain);
    return coveredInRange;
}

var main = [0,1,2,3,4,5,6,7,8,9];
var subs = [
  [1,2,3],
  [2,99,4],
  [7,8,9],
  [0,7,5,6],
];


fullRange(main,subs)
