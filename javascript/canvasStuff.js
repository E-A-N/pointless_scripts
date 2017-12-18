const canvas = document.getElementById("c");
const setupText = (canvas, data) => {
        const context = canvas.getContext("2d");

        //iterate through data and apply formatted text to textMsg
        let textMsg;
        data.args.forEach( (format, index) => {
            textMsg = index === 0
                ? data.text.replace( `%${index + 1}`, format)
                : textMsg.replace( `%${index + 1}`, format);
        });
        const concatStyles = (combination , style) => (combination += ` ${style}`);
        const textStyles = data.fontProperties.reduce(concatStyles);

        //Handle styling
        context.font = textStyles;
        context.strokeStyle = data.strokeStyle;
        context.fillStyle = data.fillStyle;
        context.lineWidth = data.lineWidth;
        context.textAlign = data.textAlign;

        const textRender = [textMsg, data.x, data.y];
        if (data.stroked) context.strokeText(...textRender);
        context.fillText(...textRender);

        return context;
};

const pJson = {
    strokeStyle: "black",
    stroked: true,
    fillStyle: "white",
    lineWidth: 3,
    fontProperties: ["normal", "10px", "Arial"],
    textAlign: "right",
    x: 250,
    y: 75,
    text: "Herro World, %1 is One, %2 is Two, %3 is Three",
    args: ["Uno", "Dos", "Thres!!"],
    playerInfo: {
        name: "Ean Moore",
        id: 1363528553768175,
        userFriends: [{id: 0, name: "Friends Name!!", photoURL:"www.imgloc.com"}], //array of objects
        score: 0,
        playerImage: {}, //image that's apart of the DOM
        url: "www.imagelocation.com", //url location of image

    },
}

console.log("body loaded!! <3")
const ctx = setupText(canvas, pJson);
