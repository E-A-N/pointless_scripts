var quad = function() {

    this.length = 0;
    this.width = 0;
}


quad.prototype = function(){

    var init = function(l, w){
        this.length = l;
        this.width = w;
    };

    var setArea = function(){
        this.area = this.length * this.width;
    };

    var getArea = function(){
        return this.area;
    };

    return {
        init: init,
        area: getArea,
    }

}();
