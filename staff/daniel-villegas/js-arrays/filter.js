//implement a function that works as Array.prototype.filter
// filter.js

function filter(arr, callback) {
    result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
        result.push(arr[i]) 
        }
    }
    return result
}






  