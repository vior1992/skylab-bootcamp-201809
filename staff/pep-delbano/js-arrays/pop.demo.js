/*var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(pop(plants));
// "tomato"

console.log(plants);
// ["broccoli", "cauliflower", "cabbage", "kale"]

console.log(pop(plants));
// "kale"

console.log(plants);
// ["broccoli", "cauliflower", "cabbage"] */

//...........................

//By Henry:
function pop(arr) {

    if (!(arr instanceof Array)) throw Error("input is not an array");
    if(!arr.length) throw Error("array is empty");
    if(arguments.length > 1) throw Error("only one argument allowed")
    var result = 0;
    result = arr[arr.length - 1]
    arr.length = arr.length - 1;  
    return result;
 }



//By me:
// var array = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// function pop(arr) {
//     var emptyArr = [];
//     emptyArr[0] = arr[arr.length-1];
//     return emptyArr;
// 	arr.length = arr.length-1;
// }

// console.log(array);

// pop(['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'])