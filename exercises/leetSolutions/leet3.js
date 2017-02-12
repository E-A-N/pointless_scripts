/**
 * @param {string} strIn
 * @return {number}
 */
var lengthOfLongestSubstring = function(strIn) {
    let subSeq = [];
    let topNum = 0;
    let sentinel = 0;
    let previous;
    
    for(let x = sentinel; x < strIn.length; x++){
        
        //Check for character duplicate in sub string
        let inStr = isIn(subSeq,strIn[x]);
        if (inStr) {
            //duplicate is in substring rollback to the point before duplicate.
            subSeq = isAt(subSeq,strIn[x]);
            console.log(subSeq,strIn[x]);
        }
        else {
            //If character is not already in array append character to array
            subSeq.push(strIn[x]);
        }
        
        //Check for greatest substring length
        topNum = subSeq.length > topNum ? subSeq.length : topNum;
        
    }
    //console.log(subSeq);
    return topNum;
};



/** Check if character is in a string
 * @param {string} data - A string
 * @param {string} val - A character
 * @return {boolean}
 */
function isIn(data,val){
    let itsIn = false;
    for (let x = 0; x < data.length + 1; x++){
        if (data[x] === val) {
            itsIn = true;
            break;
        }
    }
    return itsIn;
}

function isAt(data,val){
    //Assuming the calling point of this function is at the index of the duplicated letter
    let giveBack = [];
    giveBack.push(val);
    
    for (let x = data.length - 1; x > -1; x--){
        if (data[x] !== val) {
            giveBack.push(data[x]);
        }
        else{
            break;
        }
    }
    return giveBack;
}

