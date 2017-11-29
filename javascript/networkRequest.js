const net = new XMLHttpRequest();
var response;

//Setup request
net.open("GET", "https://www.google.com", true);

//Action for response
net.onreadystatechange = (noArgs) =>{
    const ready = net.readyState === 4;
    if (ready){
        console.log("I'm ready coach!!");
        // const header = net.getResponseHeader();
        // console.log(header);
        // console.log(net.response);
        response = JSON.parse(net.responseText);
        console.log(response);
    }
}

net.onload = () => {
    console.log("Done!!!");
}

//Send request
net.send()
