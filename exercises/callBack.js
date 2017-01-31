``
var ray = [2,3,4,5,8,99];

function doubleFun(data){
    //return data.map((x)=>(x+x));
    return data.map(
        function(data) {
            var val = data === 5 ? "Hey Bitch!": data + data;
            return val;
        }
)};

function cb(data,callBack){
    return callBack(data);
}

var one = cb(ray,doubleFun);
var two = cb(one,doubleFun);
var tee = cd(two,doubleFun);
