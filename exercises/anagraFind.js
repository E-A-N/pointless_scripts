//Take input for an array of words(ray), and any group of letters (word)
/*For words that are the same size as arg word, check to make sure they are the
same size.*/
/*Iterate through all words of the same size using each letter of arg word.
append matching words*/

var ray= ['dog','rat','fog','cat','star','god']
var word= 'ogd';
//function anagram(ray,word)
//{
    var newRay    = [];
    var letMatch  = false;
    var wordMatch = false;
    var match;

    //Iterate through every word of arg array
    for (var x = 0; x < ray.length;x++)
    {
        if (ray[x].length !== word.length)
        {//move on to next word in array if they're not the same size
            continue;
        }
        //iterate through arg word and find current letter
        for(var y = 0; y < word.length; y++)
        {
            console.log(word[y]);
            var curLet = word[y];

            /*iterate through current word(ray[x]), check if current letter is
            in the word */
            for (z = 0; z < ray[x].length; z++)
            {
                console.log(ray[x][z]);
                if (ray[x][z] === curLet)
                {
                    letMatch = true;
                }
                else// if (z === ray[x].length-1)
                {
                    letMatch  = false;
                    wordMatch = false;
                    break;
                }
            }
            if (letMatch)
            {
                wordMatch = true;
            }
            if (wordMatch)
            {
                newRay.push(ray[x][z]);
            }
        }
    }
    console.log(newRay);
    //sreturn newRay;
//}

//var rayray = ['dog','rat','fog','cat','star','god'];
//anagram(rayray,'ogd');
