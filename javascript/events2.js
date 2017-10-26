const fs = require('fs');
const evEmit = require('events');

class reader extends evEmit {
    //es6 version of a method
    readThis(asyncFunc, ...args) {
        //emit is an inherited method from 'evEmit' object
        this.emit('readNow!!','hi!!');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error',err)
            }
            //display data recieved from listener
            console.log(data);
        })
    }
}

const letsRead = new reader();
letsRead.on('readNow!!', (data) => {
    console.log("The recieced data from the emmiter says: " + data);
});
letsRead.readThis(fs.readFile, "./events1.js", "utf8");

// const opts = {
//     flags: 'w',
//     encoding: 'utf8',
// }
// letsRead.readThis(fs.createWriteStream, "GGtopics.txt", opts )
