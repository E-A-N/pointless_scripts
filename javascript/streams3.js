const fs = require('fs');
var data = '';

//highWaterMark allows the control of chunk size
var options = {highWaterMark: 23};
const src = fs.createReadStream('./randomFile.txt', options);
src.setEncoding('UTF8');
src.on('data', (chunk) => {
    console.log(`This chunk is ${chunk.length} long, and consits of: ${chunk}`);
    data += chunk;
});

//end event signal allosw you do something with the data that has been passed
src.on('end', (arg) => {console.log(data)});
