const childProc = require('child_process');
const args = process.argv;

//console.log(args);

//Check for communication from possible parent node!!
process.on('message', (data) => {
    console.log(data.msg);

    var msg;
    switch(args[2]){
        case "x":
            msg = "Wow, you\'re a shit Father!!";
        break;

        case "myChild":
            msg = "Hello dear Father!";
        break;
    }

    //send message back to parent node
    process.send({msg:msg});
})


const commandFork = (arg) => {
    switch(arg){
        
        case "myChild":
        case "x":
            process.send({msg: 'ready'});
        break;

        case "Father":
            const childName = args[3] === 'x' ? [args[3]] : ['myChild'];
            const childNode = childProc.fork(`${__dirname}/fork1.js`, childName);
            var msg = "Hello my child, this is your Father!";
            childNode.on('message', (data) => {
                //async, check if the child is ready
                switch(data.msg) {
                    case 'ready':
                        childNode.send({msg:msg});
                        break;

                    default:
                        console.log(data.msg);
                        break;
                }

            });
        break;

        default:
            console.log("Nothing else going on around here, **shrugs**");
            process.exit();
        break;
    }
}

commandFork(args[2]);
