var rank = Number(process.argv[2]);

var rAdjust = function(r){
    var result;
   switch(r){
        case 1:
        case 2:
        case 3:
            result = 3;
            break;
        case 4:
            result = 4;
            break;

        //if current ranking is not within top 5 then default to displaying the current ranking last
        default:
            result = r + 4
            break;
    }

    return result;
}

rank = rAdjust(rank);
console.log("Your ranking is rank:",rank);
