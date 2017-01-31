var banana = {

  contents : 100,
  edible : false,
  isPeeled : false,
  peel : 100,

  peelOff : function(force = 10){
      if (banana.isPeeled){
          console.log("The Banana has been fully peeled!!");
      }
      else{
          console.log("You peeled some of the banana!");
          banana.peel -= force;
      }
      return;
  },

  checkEdible: function(){
      let edible = banana.contents > banana.peel;
      return edible
  },

  setEdible: function(){
      banana.edible = banana.checkEdible();
  },

  consume : function(bite = 10){
      var biteAdjust = bite;
      var biteRoom = banana.content - banana.peel;
      banana.edible = banana.checkEdible();

      if (bite > biteRoom){
          bite = biteRoom;
      }
      if (banana.edible) {
          banana.contents -= bite
      }
      else{
          console.log("The Peel is in the way!!!");
      }
  },

};
