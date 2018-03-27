//Pure JavaScript example request animation frame timing

const id = "example";
const div = document.createElement("div");
div.setAttribute("id", id);
div.setAttribute("align", "center");
div.innerHTML = "Eans Test!!";

document.body.appendChild(div);

const log = (msg) => {
    let d = document.getElementById(id);
    d.innerHTML = msg;
}

const fps = 10; //read: frames per second, control the rate of the animation with this value
var num = 0;

const animate = () => {
  setTimeout(function(){
      //do stuff here!!!
      log(num++)
    
      //Call this last!
      requestAnimationFrame(animate);
  }, 1000/fps)
}

animate();
