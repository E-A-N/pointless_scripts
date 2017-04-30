function Monster(){}

Monster.prototype.init = function(name,level,hp,death){
     /**
    *   @param {string} name:  name of the current monster
    *   @param {int}    level: A number value that represents experience of current monster
    *   @param {int}    hitpoints: The number of points a this monster can lose before it's death event
    *   @param {function} deathEvent: A function that will trigger if the monster's HP is reduced to zero
    */
    
    this.name = name;
    this.level = level;
    this.hpCap = 25;
    this.hp = hp;
    //I'm going to assume rule #2 about hp never being above 25 also applies to starting max hp
    this.hp = this.hp > this.hpCap ? this.hpCap : this.hp;
    this.deathEvent = death;
}

Monster.prototype.hpAdjust = function(adjustment){
    /**
    *  @param {int} adjustment: a number of hit points to adjust current instance of monster hp by
    */
     var cap = 25;
     
     //Monster is taking damage
     if (adjustment < 0){
         
         //assuming level is always positive and adjustment and incoming damage is always negative
         adjustment += this.level; 
         
         //prevent inadvertant healing, if a monster's level is too high, they'll simply 'block' and attack with 0 damage.
         adjustment = adjustment > 0 ? 0 : adjustment;
         console.log(adjustment);
     }
     
    //Keeping a Monsters HP maxed at cap should handle situations in which the adjustment value is healing based
    this.hp += adjustment;
    
    //check if hp is over cap
    this.checkHp();
}

//Added this method to check on hitpoints
Monster.prototype.checkHp = function(){
    //Check if hp is maxed
    this.hp = this.hp > this.hpCap ? this.hpCap : this.hp;
    
    console.log(`${this.name} has ${this.hp} hit points left!`);
    
    //Check if hp is below
    if ((this.hp < 0) && (this.deathEvent)){
        this.deathEvent(this);
    }
}

function monsterDeath(monster){
    /**
     * @param {object} monster: current instance of monster that is dying
     */
    var msg =`Oh no, ${monster.name} has fallen!`;
    console.log(msg);
}



var gorilla = new Monster();
gorilla.init("Mighty Joe Young",30,100, monsterDeath); //gorilla.hp -> 25
console.log(gorilla.name);
gorilla.hpAdjust(-44) //"Mighty Joe Young has 11 hit points left"
//death(gorilla); //callback works on monster instances
gorilla.hpAdjust(-44);
