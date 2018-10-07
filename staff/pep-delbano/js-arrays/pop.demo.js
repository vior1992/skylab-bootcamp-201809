/*var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(pop(plants));
// "tomato"

console.log(plants);
// ["broccoli", "cauliflower", "cabbage", "kale"]

console.log(pop(plants));
// "kale"

console.log(plants);
// ["broccoli", "cauliflower", "cabbage"] */

var array = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

function pop(arr) {
    var emptyArr = [];
    emptyArr[0] = arr[arr.length-1];
    return emptyArr;
	arr.length = arr.length-1;
}

console.log(array);

pop(['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'])