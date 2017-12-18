const canvas = document.getElementById("c");
const renderText = (canvas, data) => {
    const context = canvas.getContext("2d");
    const concatStyles = (combination , style) => (combination += ` ${style}`);
    const textStyles = data.fontProperties.reduce(concatStyles);

    //Handle styling
    context.font = textStyles;
    context.strokeStyle = data.strokeStyle;
    context.fillStyle = data.fillStyle;
    context.lineWidth = data.lineWidth;
    context.textAlign = data.textAlign;

    const textRender = [data.text, data.x, data.y];
    if (data.stroked) context.strokeText(...textRender);
    context.fillText(...textRender);

    const score = data.score.toLocaleString();
    const scoreRender = [score, data.x, data.y + 30];
    if (data.stroked) context.strokeText(...scoreRender);
    context.fillText(...scoreRender);

    return context;
};

const renderImage = (canvas, data) => {
    const context = canvas.getContext("2d");
    const img = new Image();

    img.src = data.imageInfo.src;
    //img.onload = renderImage;

    //background image
    const backgroundArgs = [
        img,
        data.imageInfo.dx,
        data.imageInfo.dy,
        data.imageInfo.destinationWidth,
        data.imageInfo.destinationHeight,
        data.imageInfo.subX,
        data.imageInfo.subY,
        data.imageInfo.subWidth,
        data.imageInfo.subHeight,
    ];

    const profileArgs = [
        data.playerInfo.playerImage,
        data.playerInfo.dx,
        data.playerInfo.dy,
        data.playerInfo.playerImage.width,
        data.playerInfo.playerImage.height,
        data.playerInfo.playerImage.subX,
        data.playerInfo.playerImage.subY,
        data.playerInfo.playerImage.subWidth,
        data.playerInfo.playerImage.subHeight,
    ];

    context.drawImage(...backgroundArgs);
    context.drawImage(...profileArgs);
    return context;
}

const pJson = {
    strokeStyle: "black",
    stroked: true,
    fillStyle: "white",
    lineWidth: 4,
    fontProperties: ["normal", "24px", "Arial"], //keep this order
    textAlign: "right",
    x: 275,
    y: 75,
    text: "Can you beat my score?",
    score: 9999999,
    imageInfo : {
        src: "assets/folder/location.png", //TODO: test a real image location
        dx: 0,
        dy: 0,
        destinationWidth: 250,
        destinationHeight: 250,
        subX: 0,
        subY: 0,
        subWidth: 250,
        subHeight: 250,
    },
    playerInfo: {
        name: "Ean Moore",
        id: 1363528553768175,
        userFriends: [{id: 0, name: "Friends Name!!", photoURL:"www.imgloc.com"}], //array of objects
        score: 0,
        playerImage: {width: 400, height: 400}, //image that's apart of the DOM
        url: "www.imagelocation.com", //url location of image
    },
}

console.log("body loaded!! <3")
const ctx = renderText(canvas, pJson);
