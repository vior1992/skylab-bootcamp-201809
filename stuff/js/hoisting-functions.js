// 1

console.log(fun(1, 2));

function fun(a, b) { return a + b; }
// VM54824:1 3

// 2

console.log(fun(1, 2));

var fun = function(a, b) { return a + b; };
// VM55025:1 Uncaught TypeError: fun is not a function
//     at <anonymous>:1:13