// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    var newRay = []
    var rayLen = array.length;
  
    for(let i = 0; i < rayLen; i++){
      newRay.push(callback(array[i]));   
    }
    
    
    return newRay;  
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
    var newRay = []
    var rayLen = array.length;
    if (!callback){
        for(let i = 0; i < rayLen; i++){
          callback(array[i])   
        }
    }
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    
     forEach(array,callback);
    
}

//Extension 2
function reduce(array, callback, initialValue) {
    let newVal = initialValue;
    for(let i = 0; i < array.length; i++){
        newVal += callback(array[i]);
    }  
  
  
    return newVal;
}

//Extension 3
function intersection(arrays) {
  	const rayNum = arrays.length;
    let maxLen = 0;
    let newRay = [];
  
    //figure out the length of the longest array
    for (let i = 0; i < rayNum; i++){
      
        let thisLength = arrays[i].length;
        maxLen = thisLength > maxLen ? thisLength : maxLen;      
    }  
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [15, 5]

//Extension 4
function union(arrays) {
    const rays = arrays.length;
    let newRay = [];
    for (let x = 0; x < rays; x++){
      
        for (let y = 0; y < arrays[x].length; y++){
            newRay.push(arrays[x][y]);
        }
    }
  
    return newRay;
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]
