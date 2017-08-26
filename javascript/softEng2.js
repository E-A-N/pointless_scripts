/*
    Write a function that combines two lists by alternatingly taking elements. Fpor example: given the two lists [a,b,c] and [1,2,3], the function should return [a,1,b,2,c,3]
*/


function comboList(ray1,ray2){
    var ray3 = []
    var equalSize = ray1.length === ray2.length ? true : false;

    if (equalSize){
        var sent = ray1.length;
        for(var i = 0; i < sent; i++){
            ray3.push(ray1[i]);
            ray3.push(ray2[i]);
        }
        return ray3;
    }
    else{
        return -1;
    }
}

const dualList = (l1,l2) => {
    let newRay = [];
    let equal = l1.length === l2.length;
}
