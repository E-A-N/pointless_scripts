var banana = {

    contents : 100,
    edible   : false,
    isPeeled : false,
    peel     : 100,

    //setup setters
    setContents: function(defaultVar = 100){
        banana.contents = defaultVar;
    },

    setIsPeeled: function(defaultVar = false){
        banana.isPeeled = defaultVar || banana.peel == 0;
    },

    setEdible: function(){
        banana.edible = banana.contents > banana.peel;
    },

    setPeelAmount: function(defaultVar = 100){
        banana.peel = defaultVar;
    },

    //setup getters
    getContents: function(){
        return banana.contents;
    },

    getIsPeeled: function(){
        return banana.isPeeled;
    },

    getEdible: function(){
        return banana.edible;
    },

    getPeelAmount: function(){
        return banana.peel;
    },

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

    consume : function(bite = 10){
        var biteAdjust = bite;

        //check to see if there's biting over the peel
        var biteRoom = banana.content - banana.peel;
        banana.edible = banana.setEdible();

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
