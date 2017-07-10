const folks = {
   first:{
     hair: "blue",
     age: 9,
   },
   
   second:{
     hair: "red",
     age: 15,
   },
   
   third:{
     hair: "green",
     age: 7777,
   },
   
   fourth:{
     hair: "blue",
     age: 0,
   }
}

const getBlue = users => 
    (Object.keys(folks)
        .filter((folk) => 
            (folks[folk]["hair"] == "blue" )));

var blues = getBlue(folks)
console.log(blues);
//var difficult_tasks = tasks.filter((task) => task.duration >= 120 );
