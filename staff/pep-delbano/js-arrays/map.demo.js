var array = [1,2,3];
var emptyarr = [];

function map (arr, num) {
    for(var i= 0; i<arr.length; i++) {
    emptyarr += arr[i]*num;
    console.log(emptyarr);
    }
}

map(array, 2);