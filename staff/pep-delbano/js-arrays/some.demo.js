/*var nums = [1, 2, 3, 4, 5];

var res = some(nums, function(elem) { return elem % 2 === 0; });

console.log(res); // true */

function some(arr) {
    var biggerthan = [];
    var pos = 0;
    for(var i=0; i<arr.length; i++) {
            if(arr[i] % 2 === 0) {
                biggerthan[pos] = arr[i];
                pos++;
            }
    }
    if(biggerthan.length > 0) {
        return true;
    }
return false;

}

some([1, 3, 4, 5, 7]);