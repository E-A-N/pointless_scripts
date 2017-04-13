var num = 5;

const dub = (x) => {x + x};
const doMath = (fun, arg) => (fun(arg));


const varyNums = [2,4,6,8,10];

const runAll = function(ray,fun){
    const rayLen = ray.length;
    let newRay;
    for (let i = 0; i < rayLen; i++){
        newRay[i] = fun(ray[i]);
    }

    return newRay;
}


var newRay = runAll(varyNums,dub);
console.log(newRay);
