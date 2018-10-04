// 1

var a = 1;

function fun(b) {
	a = b;

	return a;
}

console.log(fun(2));

console.log(a);
// VM54199:9 2
// VM54199:11 2

// 2

var a = 1;

function fun(b) {
	var a = b;

	return a;
}

console.log(fun(2));

console.log(a);
// VM54233:9 2
// VM54233:11 1

// 3

var a = 1;

function fun(b) {
	a = b;

	return a;

	var a;
}

console.log(fun(2));

console.log(a);
// VM54281:11 2
// VM54281:13 1

// 4

var a = 1;

function fun(b) {
	return a;

	var a = b;
}

console.log(fun(2));

console.log(a);
// VM54323:9 undefined
// VM54323:11 1