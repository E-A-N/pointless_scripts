const canvas = document.getElementById("c");
let ctx = canvas.getContext("2d")

//ctx.strokeText("Herro Robo!", 50, 50);
//ctx.fillText("Herro Robo!", 50, 50);

const setupText = (context, textData) => {
        console.log(textData);
        //iterate through data and apply formatted text to textMsg
        let textMsg
        textData.args.forEach( (format, index) => {
            textMsg = textData.text.replace( `%${index + 1}`, format);
        });

        //Handle styling
        context.strokeStyle = textData.strokeStyle;
        context.fillStyle = textData.fillStyle;
        context.lineWidth = textData.lineWidth;

        const textRender = [textMsg, textData.x, textData.y];
        if (textData.stroked) context.strokeText(...textRender);
        context.fillText(...textRender);

        //return context;
};

var data = {
    strokeStyle: "black",
    fillStyle: "white",
    lineWidth: 8,
    font: "900 36px Arial",
    textAlign: "right",
    x: 75,
    y: 75,
    text: "Herro Robo, dis is a test!! <3 %1%2...%3",
    args: ["Uno", "Dos", "Thres!!"],
}

console.log("body loaded!! <3")
setupText(ctx,data);
