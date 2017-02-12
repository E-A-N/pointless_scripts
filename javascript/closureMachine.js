/**
 * This Function builds a custom character
 * @constructor
 * @param {string} arg - The class of a given character


*/
function clo(arg){
    var str = 0;
    var spd = 0;
    var wse = 0;
    var lifter = function(val){
        return "I'm a " + val + " and I lift bro!";
    }
    var statCheck = function(){
        return "your strentgh is " + str + "\n" +
               "your speed is " + spd + "\n" +
               "your wisdom is " + wse;
    }
    return function(state){
        switch(arg){
            case "lifter":
                spd += 7;
                str += 10;
                wse += 1;
                lifter(arg);
                break;

            case "coder":
                spd += 4;
                str += 1;
                wse += 8;
                break;

            case "sprinter":
                spd += 10;
                str += 6;
                wse += 3;
                break;
        }
        statCheck();
    };
}
