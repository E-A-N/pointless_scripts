function registerHandlers() {
  var as = document.getElementsByTagName('a');

  for (var i = 0; i < as.length; i++) {
    //pass iterator to give div element value
    setValue(i,as[i])();
  }
}

function setValue(i,as){
   //@param {int} i - an iteration value
   //@param {object} as - an "a" DOM element
   return function(){   
     as.onclick = function(){
       window.alert(i);
       return false;
     }
   }
}

registerHandlers();


/* HTML code for testing purposes (do not submit uncommented):
<body>
  In my life, I used the following web search engines:<br/>
  <a href="//www.yahoo.com">Yahoo!</a><br/>
  <a href="//www.altavista.com">AltaVista</a><br/>
  <a href="//www.google.com">Google</a><br/>
</body>
*/
