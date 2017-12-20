const canvas = document.getElementById("c");
const renderText = (canvas, data) => {
    const context = canvas.getContext("2d");
    const text = data.isScore ? parseInt(data.text).toLocaleString() : data.text;
    const concatStyles = (combination , style) => (combination += ` ${style}`);
    const textStyles = data.fontProperties.reduce(concatStyles);
    console.log(data.isScore);
    //Handle styling
    context.font = textStyles;
    context.strokeStyle = data.strokeStyle;
    context.fillStyle = data.fillStyle;
    context.lineWidth = data.lineWidth;
    context.textAlign = data.textAlign;

    const textRender = [text, data.x, data.y];
    if (data.stroked) context.strokeText(...textRender);
    context.fillText(...textRender);

    return context;
};

const renderImage = (canvas, data) => {
    const context = canvas.getContext("2d");
    const img = new Image();

    console.log(data);
    let imgArgs;
    if (data.type === "imageInfo") {
        img.src = data.src;
        imgArgs = [
            img,
            data.x,
            data.y,
            data.width,
            data.height,
            data.subX,
            data.subY,
            data.subWidth,
            data.subHeight,
        ];
    }
    else {
        img.src = data.playerImage.src
        imgArgs = [
            img,
            data.playerImage.x,
            data.playerImage.y,
            data.playerImage.width,
            data.playerImage.height,
            data.playerImage.subX,
            data.playerImage.subY,
            data.playerImage.subWidth,
            data.playerImage.subHeight,
        ];
    }

    //draw asynchrously
    img.onload = () => {context.drawImage(...imgArgs)};
    return context;
}

const model = {
    fbInfo: {
        update: {
            action: 'CUSTOM',
            template: 'beat_my_score',
            cta: 'Play Dragonz Rising',
            strategy: 'IMMEDIATE',
            notification: 'NO_PUSH',
       },
       share: {
            intent: 'REQUEST',
            text: 'Can you beat my score?'
       }
    },
    data: [
        {type: 'playerInfo',
            playerImage: {
                src: "samuraiJack.jpg",
                x: 0,
                y: 0,
                width: 400,
                height: 269,
                subX: 100,
                subY: 0,
                subWidth: 100,
                subHeight: 100,
            },
            url: 'www.imagelocation.com'
        },
        {type: 'imageInfo',
            //src: "samuraiJack.jpg",
            src: 'https://lh3.googleusercontent.com/lLuGGvsk-c5ZoKZudOk4hfC3fYgj9VAEVTZx3CRfg5GDQzu-5Augh_Yo9_991NBKAho',
            x: 0,
            y: 0,
            width: 512,
            height: 512,
            subX: 0,
            subY: 0,
            subWidth: 100,
            subHeight: 100,
        },
        {type: 'textInfo',
            strokeStyle: 'black',
            stroked: true,
            fillStyle: 'white',
            lineWidth: 4,
            fontProperties: [
                "normal",
                "24px",
                "Arial",
            ],
            textAlign: 'right',
            x: 275,
            y: 75,
            text: 'Can you beat my score?'
        },
        {type: 'textInfo',
            strokeStyle: 'black',
            stroked: true,
            isScore: true,
            fillStyle: 'white',
            lineWidth: 4,
            fontProperties: [
                "normal",
                "24px",
                "Arial",
            ],
            textAlign: 'right',
            x: 275,
            y: 75,
            text: '9999999'
        },
        {type: 'playerInfo',
            playerImage: {
                src: "samuraiJack.jpg",
                x: 0,
                y: 0,
                width: 400,
                height: 269,
                subX: 100,
                subY: 0,
                subWidth: 100,
                subHeight: 100,
            },
           url: 'www.imagelocation.com'
        }
    ]
}



console.log("body loaded!! <3")

//const imgCtx = renderImage(canvas, model.data[1]);
const ctx = renderText(canvas, model.data[3]);
