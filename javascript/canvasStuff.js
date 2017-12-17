setupText(context, textData){
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

        return context;
    };
