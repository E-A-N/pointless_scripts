/*
	Create a file system with the ability to:
		-change directories (cd)
		-display directories (pwd)
		-create directory
*/
//constants
var DNAME    = 0;
var DCONTENT = 1;

var directoryObj = {home: [{name: "home"},
					   {contents: "n/a"},
]};
var location = directoryObj["home"][DNAME]; //store default pwd

// In directory objects, directories go inside of contents
function commandLine(){
	let args  = arguments || null;
	let tasks = args.length || null;
	let curTask = task || null;

	//Iterate through arguments
	if (args) {
		for (let i = 0; i < tasks; i++){
			switch(args[i]){
				case "pwd":
				case "cwd":
				dirDisplay(location);
				break;

				case "mkdir":
				break;

				case "cd":
				break;
				//Add functinality for command line arguments
			}
		}
	}
}

dirDisplay(obj){
    console.log(obj);
}
