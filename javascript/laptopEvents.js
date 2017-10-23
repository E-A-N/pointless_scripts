const eventsPlus = require('events');

class soldier extends eventsPlus {
    // this.name = 'default';
    // this.happiness = 0;

    sayHi(phrase) {
        this.emit(phrase);
    }
    setName(name){
        this.name = name;
    }
    resetHappiness(){
        this.happiness = 0;
    }

}

const boss = new soldier();
boss.setName("Jack");
boss.on(boss.name,(arg1,arg2) =>{
    console.log(arg1 + " and arg2 is: " + arg2);
    console.log(boss.name + ", your name has been spoken!");
})
boss.emit("Jack", "5678", "Pookie");
