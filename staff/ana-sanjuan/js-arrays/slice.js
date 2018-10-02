function slice(arr, begin = 0, end = arr.length) {
    var result = [], counter= 0;
    for (var i = begin; i < end; i++){
        result[counter++] = arr[i];
    }
    return result
}


console.log('DEMO slice');

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(slice(animals, 2));
// ["camel", "duck", "elephant"]

console.log(slice(animals, 2, 4));
// ["camel", "duck"]

console.log(slice(animals, 1, 5));
// ["bison", "camel", "duck", "elephant"]