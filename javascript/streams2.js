const fs = require('fs');
const server = require('http').createServer();

// server.on('request', (req, res) => {
//     fs.readFile("./ggCharacters.txt", (err,data) => {
//         if (err) throw err;
//         res.end(data);
//     });
// });

server.on('request', (req, res) => {
    const src = fs.createReadStream('ggCharacters.txt');

    //piping is essetially --> readableSrc.pipe(wriableDestination)
    src.pipe(res);
});

server.listen(7777);
console.log("Server is running on port 7777");
