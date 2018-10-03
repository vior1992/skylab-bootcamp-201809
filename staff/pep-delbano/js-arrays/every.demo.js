/*var nums = [1, 30, 39, 29, 10, 13];

var res = every(nums, function(num) { return num < 40; });

console.log(res); // true

var words = words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];

var res = every(words, function(word) { return word.length < 10; });

console.log(res); // false*/


function every(arr) {
    var biggerthan = [];
    var pos = 0;
    for(var i=0; i<arr.length; i++) {
            if(arr[i].length > 6) {
                biggerthan[pos] = arr[i];
                pos++;
            }
    }
    if(biggerthan.length === arr.length) {
        return true;
    }
return false;
}

every(['spray', 'limit', 'elite', 'exuberant', 'construction', 'present']);