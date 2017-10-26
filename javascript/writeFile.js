const fs = require('fs');
const fileName = './writeTEST.js';

var ray = ['not','once','twice','three times!!'];
var choice = Math.floor(Math.random(ray.length));
var msg = `console.log("Our love is ${ray[choice]} as large!")`;


fs.writeFile(fileName, msg, 'utf8', (arg) => {
    console.log("Finished!!");
})
fs.readFile(fileName,'utf8', (err, data) => {
    console.log(data);
    console.log("File has been read!!")
});
