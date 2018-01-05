const loadJSON = (url, call) => {
    const file = new XMLHttpRequest();
    file.overrideMimeType("application/json");
    file.open("Get", url, true);
    file.onreadystatechange = () => {
        const fileReady = file.readyState === 4 && file.state === "200";
        if (fileReady) call(file.responseText);
        const body = document.getElementsByTagName("BODY")[0];
        body.innerHTML = file.responseText;
        frosty = JSON.parse(file.responseText);
    }
    file.send(null);

}
