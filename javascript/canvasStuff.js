const canvas = document.getElementById("c");
const setupText = (canvas, data) => {
        const context = canvas.getContext("2d");

        //iterate through data and apply formatted text to textMsg
        let textMsg
        data.args.forEach( (format, index) => {
            textMsg = data.text.replace( `%${index + 1}`, format);
        });

        //Handle styling
        context.strokeStyle = data.strokeStyle;
        context.fillStyle = data.fillStyle;
        context.lineWidth = data.lineWidth;

        const textRender = [textMsg, data.x, data.y];
        if (data.stroked) context.strokeText(...textRender);
        context.fillText(...textRender);

        //return context;
};

const pJson = {
    strokeStyle: "black",
    stroked: true,
    fillStyle: "white",
    lineWidth: 3,
    font: "900 36px Arial",
    textAlign: "right",
    x: 75,
    y: 75,
    text: "Herro Robo, dis is a test!! <3 %1%2...%3",
    args: ["Uno", "Dos", "Thres!!"],
}

console.log("body loaded!! <3")
const ctx = setupText(canvas, pJson);
