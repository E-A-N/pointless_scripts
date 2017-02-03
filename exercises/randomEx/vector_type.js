/* Eloquent JavaScript Object Exercises */

/*Write a constructor Vector that represents a vector in two-dimensional
space. It takes x and y parameters (numbers), which it should save to
properties of the same name.
Give the Vector prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum
or difference of the two vectors� (the one in this and the parameter) x
and y values.
Add a getter property length to the prototype that computes the length
of the vector�that is, the distance of the point (x, y) from the origin (0,
0).*/

/* extra challenges:
-Write an original program that creates a table similar to on page 115
    "write a program that, given an array of arrays of table cells, builds up a
    string that contains a nicely laid out table—meaning that the columns
    are straight and the rows are aligned."
-Utilize getters and setters (pg 121-122) in atleast two of these exercises
*/

//Create Object Type Vector
function vect(x,y)
{
    this.x = x;
    this.y = y;
    this.plus = function(vector)
    {  //create new object combined of 2 vector instances
       return new vect(this.x += vector.x,this.y += vector.y);
    };
    this.minus = function(vector)
    {
      return new vect(this.x -= vector.x,this.y -= vector.y);
    };

    //get len() { return [this.x,this.y]};
    //set len(value) { console.log("nah dog, nah " + value)};
    //research getters and setters to figure out how to get above to work
}


//Guilty Gear Main Table
var ggMains = function(ray,off=12)
{    
  /* Print Data Table from array of array elements
      ['name', game ('+r' or 'xrd'), character]
  */
    
//Establish Table Size
    var catergories = [['Name','Game','Character']]; //nest array to sync with ray[[]] paramater and forEach() implementation
    var offSet      = off; //control the spacing of the entire table, default value is 12
    var orgRow      = 0; //keep track of row being printed
    var rowLen      = catergories.length * offSet; //allow arbitrary implementation

    var table = '';

    function str_rep(num,spc = ' ') //function for string repititon
    {
        var val = '';
        for (var i = 0; i < num; i++)
        {
           val += spc; 
        }
        return val
    }
    
    //ideal input: [['Upball','+R','Venom'],['Wingz','Both','Jam'],['DQRF','Both','Sol-Badguy']]
    function elmOrganizer(element,index,array) //duplicate function, rewrite above to be eligible for forEach()
    {
        var rowCount = rowLen; //for iteration, decrement equally to use of table characters
        for (var nextSet = 0;nextSet < element.length; nextSet++)
        {
            //adjust size, make sure charElm does not go beyond offSet
            element[nextSet] = element[nextSet].length > offSet ? element[nextSet].slice(0,offSet) : element[nextSet];
            var spaces       = str_rep(offSet - element[nextSet].length); //<--calculate spaces
            table           += element[nextSet]; //add current Character Element to table
            rowCount        -= element[nextSet].length; //update rowCount decrementation
            table           += spaces; //add blank spaces
            rowCount        -= spaces; //update rowCount decrementation
        }
        table += '\n';
    }
   

    catergories.forEach(elmOrganizer);
    table += str_rep(catergories[0].length * offSet,'*'); //create star outline
    table += '\n';
    ray.forEach(elmOrganizer);
    return table;
} 

var xRay = [['Upball','+R','Venom'],['Wingz','Both','Jam'],['DQRF','Both','Sol-Badguy']];
var x = ggMains(xRay);





















