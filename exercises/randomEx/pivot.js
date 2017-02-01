//Write a function that switches two positions in an array, if one is is larger or smaller than the other.


function pivot(direction,preInd,nextInd){
/*
inRay is array argument
direction to pivot the array elements, 1 is low to high, -1 is high to low
ind and ind2 are index positions
*/
    let lowerVal;
    let higherVal;
    let output;

    if (preInd > nextInd){
        higherVal = true;
        lowerVal = false;
    }
    else{
        higherVal = false;
        lowerVal =  true;
    }

    output = direction === 1 ? higherVal : lowerVal;
    output = arguments.length === 3 ? output : false;
    return output;
}

function orderCheck(direction = 1,ray){
    let prev = 0;
    let order;
    for (var i = 0; i < ray.length; i++){
        //direction determines if comparisons are positive or negative
        if (ray[prev] * direction <= ray[i] * direction) {
            prev = i;
            order = true;
            continue;
        }
        else {
            order = false;
            break;
        }
        order = true;
    }
    return order;
}

function linSort(direction,ray){
    var sortRay = ray;
    var curOrder;
    var preVal;
    var exchange1;
    var exchange2;
    var inBound1;
    var inBound2;
    let pre = 0;
    for(var i = 0; i < ray.length; i++){
        //check if the array is sorted
        inBound1 = ray[pre + direction] === undefined ? 0 : 1;
        inBound2 = ray[i + direction] === undefined ? 0 : 1;
        //check iff the array
        if (orderCheck(direction,ray)) {
            console.log("order check is " + orderCheck(direction,ray));
            break;
        }
        else if (pivot(direction,ray[pre],ray[i])){
        //check if array positions need to be swapped
            exchange1 = ray[pre + (1 * direction)];
            exchange2 = ray[i + (1 * direction)];
            ray[pre + (1 * direction)] = ray[i + (1 * direction)];
            pre = i;
            //If the end of the array is reached, reset iterators
            if (i === ray.length-1){
                i   = -1; //set loop to -1 to offset auto incrementation
                pre =  0;
            }
        }
    }
    return ray;
}

var ray = [1,4,3,2,7,1];
nRay = linSort(1,ray);
