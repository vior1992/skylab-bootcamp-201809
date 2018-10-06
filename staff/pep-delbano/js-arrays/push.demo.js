/*var arr = [1, 2, 3];

push(arr, 4);

console.log(arr); // [1, 2, 3, 4] */

function push(arr, num) {
    arr[arr.length] = num;
    console.log(arr);
}


push([1,2,3], 4);