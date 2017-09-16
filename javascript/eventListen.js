function EV(){
    this.data = {};
    this.msg = '';
    //['dub',{two: 2}]
};

EV.prototype.on = function(msg,call){
    //set the action for the message
    this.data[msg] = call;
}

EV.prototype.listen = funtion(){
    if (this.msg != ''){
        this.data[this.msg]();
    }
}
