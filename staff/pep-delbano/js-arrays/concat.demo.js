/*var arr = [1, 2, 3];
var arr2 = [4, 5, 6];

var res = concat(arr, arr2);

console.log(res); // [1, 2, 3, 4, 5, 6]*/

//Victor:

function concat(arr, arr2) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }
    for (var i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return (result);
}