function reduce(arr, callback, initialValue = 0) {
    var accum = initialValue
    for (var i = 0; i < arr.length; i++){
        accum = callback(accum, arr[i])
    }
    return accum
}



console.log('DEMO reduce');

var nums = [1, 2, 3, 4];

console.log(reduce(nums, function(accum, num) { return accum + num; })); // 10

console.log(reduce(nums, function(accum, num) { return accum + num; }, 5)); // 15