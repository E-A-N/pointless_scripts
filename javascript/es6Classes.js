class Crab {
    frosty(){
        console.log("Frosty!!");
    }
}

class Pookie extends Crab {
    eddy(){
        console.log("Eddie!!");
    }
    pook(){
        console.log("Pookie!!");
    }
    all(){
        this.frosty();
        this.pook();
        this.eddy();
        this.eddy();
    }
}


const ean = new Pookie();

ean.all();
