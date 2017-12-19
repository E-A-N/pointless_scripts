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

    // const profileArgs = [
    //     data.playerInfo.playerImage,
    //     data.playerInfo.dx,
    //     data.playerInfo.dy,
    //     data.playerInfo.playerImage.width,
    //     data.playerInfo.playerImage.height,
    //     data.playerInfo.playerImage.subX,
    //     data.playerInfo.playerImage.subY,
    //     data.playerInfo.playerImage.subWidth,
    //     data.playerInfo.playerImage.subHeight,
    // ];

    context.drawImage(...backgroundArgs);
    //context.drawImage(...profileArgs);
    return context;
}

const model = {
    fbInfo: {
        update: {
            action: 'CUSTOM',
            template: 'beat_my_score',
            cta: 'Play Dragonz Rising',
            strategy: 'IMMEDIATE',
            notification: 'NO_PUSH'
       },
       share: {
            intent: 'REQUEST',
            text: 'Can you beat my score?'
       }
    },
    data: [
        {type: 'playerInfo',
            playerImage: [Object],
            url: 'www.imagelocation.com'
        },
        {type: 'imageInfo',
            src: 'imagelocation.com',
            dx: 0,
            dy: 0,
            destinationWidth: 250,
            destinationHeight: 250,
            subX: 0,
            subY: 0,
            subWidth: 250,
            subHeight: 250
        },
        {type: 'textInfo',
            strokeStyle: 'black',
            stroked: true,
            fillStyle: 'white',
            lineWidth: 4,
            fontProperties: [Array],
            textAlign: 'right',
            x: 275,
            y: 75,
            text: 'Can you beat my score?'
        },
        {type: 'textInfo',
            strokeStyle: 'black',
            stroked: true,
            fillStyle: 'white',
            lineWidth: 4,
            fontProperties: [Array],
            textAlign: 'right',
            x: 275,
            y: 75,
            text: '9999999'
        },
        { type: 'playerInfo',
           playerImage: [Object],
           url: 'www.imagelocation.com'
        }
    ]
}



console.log("body loaded!! <3")

const imgCtx = renderImage(canvas, model);
const ctx = renderText(canvas, model);
