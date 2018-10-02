//pop.js
//implement a function that works as Array.prototype.pop

// pop.js

function pop(arr) {
   var result = 0;
   result = arr[arr.length - 1]
   arr.length = arr.length - 1;  
   return result;
}
