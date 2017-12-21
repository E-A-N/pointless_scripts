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
                src: "https://vignette.wikia.nocookie.net/samuraijack/images/7/76/Samurai_Jack_Season_5_Trailer_Samurai_Jack_Adult_Swim/revision/latest/scale-to-width-down/600?cb=20170206193349",
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
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/2000px-Firefox_Logo%2C_2017.svg.png",
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

const canvas = document.getElementById("c");
const renderText = (canvas, data, call) => {
    const context = canvas.getContext("2d");
    const text = data.isScore ? parseInt(data.text).toLocaleString() : data.text;
    const concatStyles = (combination , style) => (combination += ` ${style}`);
    const textStyles = data.fontProperties.reduce(concatStyles);
    //Handle styling
    context.font = textStyles;
    context.strokeStyle = data.strokeStyle;
    context.fillStyle = data.fillStyle;
    context.lineWidth = data.lineWidth;
    context.textAlign = data.textAlign;

    const textRender = [text, data.x, data.y];
    if (data.stroked) context.strokeText(...textRender);
    context.fillText(...textRender);
    call();

    return context;
};

const renderImage = (canvas, data, call) => {
    const context = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonymous";

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
    img.onload = () => {
      context.drawImage(...imgArgs);
      call();
    };
    return context;
}

let loadProgress = 0;
const graphicLoader = () => {
    const loadSize = model.data.length - 1;
    if (loadProgress >= loadSize){
        console.log("Graphics are all loaded up!");
        console.log(canvas.toDataURL());
    }
    else {
      loadProgress++;
      const totalProgress = Math.floor((loadProgress/loadSize)*100);
      console.log(`Canvas Image is ${totalProgress}% loaded`);
    }
}

const main = (canvas, data, call) => {
    data.forEach( (x) => {

        if (x.type === "textInfo"){
            renderText(canvas, x, call);
        }
        else {
            renderImage(canvas, x, call);
        }
    });
}

main(canvas, model.data, graphicLoader);
