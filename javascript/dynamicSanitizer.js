/**
* @param iter {string} - The value that individually combine with eath input array element
* @param  ray {array} - Collection of elements to combine with iter argument
* @returns {array}
*/
const concatTraverse = (iter, ray) => {
    var items = [];
    for (let x = 0; x < ray.length; x++){
        items.push(iter + ray[x]);
    }
    return items;
}



const sanitizer = (chrs, reps = 2) => {
    var combinations = chrs.slice(); //copy the initial array
    var usedReps = reps;
    chrs.map( (x, index) => {
        while (usedReps --> 0) {
            var newCombos = concatTraverse(combinations[index],combinations);
            combinations = combinations.concat(newCombos);
            console.log(combinations);
        }
        usedReps = reps;
        combinations = combinations.concat(chrs);
    })

    return combinations;
}


var ray = ["Frosty", "Pookie", "Eddy", "Eddie"];
sanitizer(ray);


const traverseAndSanitize = (items, structure) => {
    items.forEach( (item , index) => {
        while( structure.includes(item) ) {
            structure = structure.replace(item, '');
        }
    })
    return structure;
}

var ray = "FrostyPookieEddyEddie";
traverseAndSanitize(['o','d'], ray);
