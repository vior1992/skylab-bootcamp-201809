//every.js
//implement a function that works as Array.prototype.every
// every.js

function every(arr, callback) {
    result = [];
    for (var i = 0; i < arr.length; i++) if (callback(arr[i])) result[i] = true; return result; 
    
}