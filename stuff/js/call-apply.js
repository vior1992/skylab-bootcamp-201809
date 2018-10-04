function fun(a, b) { return a + b; }

console.log(fun(1, 2));
console.log(fun.call(undefined, 1, 2));
console.log(fun.apply(undefined, [1, 2]));
// VM56130:3 3
// VM56130:5 3
// VM56130:7 3