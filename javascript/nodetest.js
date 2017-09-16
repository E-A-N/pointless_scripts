process.stdout.write(process.argv.toString() + '\n');
const args = process.argv;

//Use exec to run other binarys (programs)
const exec  = require('child_process').exec;
//Spawn is the same as exec but offers more control and power
const spawn = require('child_process').spawn;

// var count = 0;
// setInterval(()=>{
//     count++;
//     count > 5 ? process.exit() : console.log("Frosty Pookie Ed..");
// }, 500)

console.log(args[2]);
console.log(__filename);

// Child process example using the exec function
// exec('cat nodetest.js',(err, out, stderr) => {
//     console.log('This is our current file!!: ', out);
// })
const nodejs = 'cat';
//Child process exmaple using the spawn function
if (args[2] === 'child') {
    console.log("This is the child!");
}
else {
    var child = spawn(nodejs, [__filename, 'child']);
    child.stdout.on('data', (data) => {
        console.log('This is the parent');
    })
}
