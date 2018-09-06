var img = new Image();
var framesPerSecond = 60; //Pass to start to control game speed
var manMove = function(){}

var update = function(fps){
    var oneSecond = 1000;
    setinterval(function(){
        manMove(); //All of the drawing "CTX stuff" goes in these functions
        fatManMove();
    }, fps * oneSecond);
};
var preload = function(){
    if(loaded){
      return true
    }
}
var startGame = function(fps){
  preload(); //preload is here to make sure it happens before game s
  create();
  update(fps); //this our game loop
}
img.onload = startGame(framesPerSecond);

var accelButton = document.createElement("button");
accelButton.setAttribute("onmousedown", accelerate);
accelButton.innerHTML = "ACCELERATE";
var eanDiv = document.createElement("div");
