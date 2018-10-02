console.log('14) Executing every demo');

var values = [1, 30, 39, 29, 10, 13];

var res = every(values, function(elem) { return elem < 40; });

console.log(res); // true