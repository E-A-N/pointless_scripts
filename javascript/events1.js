const evEmitter = require('events');

class monkey extends evEmitter {

    //This is es6 syntax for methods
    execute(taskFunc) {
        this.emit('execution!!');
        taskFunc(9);
    }
}


const monk = new monkey();

monk.on('execution!!', () => {
    console.log("I am a monkey, I have executed!!");
});

monk.execute( x => {
    console.log(x * x);
});

console.log(evEmitter);
