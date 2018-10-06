/*var arr = [1, 2, 3];
var arr2 = [4, 5, 6];

var res = concat(arr, arr2);

console.log(res); // [1, 2, 3, 4, 5, 6]*/

function concat(arr1, arr2) {
    for (var i=0; i<arr2.length; i++) {
        arr1[arr1.length] = arr2[i];
    }

   console.log(arr1);
}

concat([1, 2, 3], [4, 5, 6]);