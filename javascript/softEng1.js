/* Write three functions that compute the sum of the numbers in a given list using a forloop, whileloop, and recursion.

www.shiftedup.com
*/

function forList(list){
        var lisLength = list.length;
        var sum = 0;
        for (var i = 0; i < lisLength; i++){
                sum+= list[i];
        }
        return sum;
}

function whileList(list){
        var lisLength = list.length;
        var sum = 0;
        var iter = 0;

        while (iter < lisLength) {
                sum += list[iter];
                iter++;
        }
        return sum;
}

function recursionList(){
        var args = arguments;
        var ray = args[0];
        var listLength = ray.length;
        var sum = args[1] || 0;
        var iter = args[2] || 0;
        console.log("sum is " + sum);
        if (iter === listLength) {
                return sum;
        }

        sum+= ray[iter];
        iter++;
        recursionList(ray,sum,iter);
}
