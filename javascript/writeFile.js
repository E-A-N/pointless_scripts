const fs = require('fs');
const fileName = './writeTEST';

var msg = "Aye we in there! ";
for(let x = 0; x < 10; x++){
    msg += msg + "\n";
}

fs.writeFile(fileName, msg, 'utf8', (arg) => {
    console.log("Finished!!");
})

fs.readFile()
