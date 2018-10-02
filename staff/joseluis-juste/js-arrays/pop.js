// pop.js

function pop(arr) {
    if (arr.length == 0) return undefined;
    var aux = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return aux;
}