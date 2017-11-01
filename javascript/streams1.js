const fs = require('fs');
const file = fs.createWriteStream('./reloadCharacters.txt');
const completeMsg = (arg) => {console.log("It is done, my lord")};

//Finsh end signal means all data has been written
file.on('finish', completeMsg);

for (let x = 0; x < 10; x++){
    var favChars = "Venom, Johnny, RoboKy, Baiken. ";
    var favVersions  = "+R, AC, Reload, Isuka, Judgement. \n";
    file.write(favChars, 'utf8');
    file.write(favVersions, 'utf8');
}


file.end();
