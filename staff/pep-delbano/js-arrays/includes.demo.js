/*var arr = ['ant', 'bison', 'camel', 'duck', 'bison', 'cat', 'dog', 'bat'];

var res = includes(arr, 'duck');

console.log(res); // true*/

function includes(arr, word) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }
    return false;
}

includes(['ant', 'bison', 'camel', 'duck', 'bison', 'cat', 'dog', 'bat'], 'duck');