

tests.push(function () {
	console.log('should succeed on correct name');
	// setup
	var res;
	var log = console.log;
	console.log = function (greeting) { res = greeting; };
	// test
	greet('peter');
	// restore
	console.log = log;
	if (res !== 'hi peter') throw Error('should have greeted "hi peter"');
});

// 2

tests.push(function () {
	console.log('should fail on non-string name');
	var error;
	try {
		greet(0);
	} catch (err) {
		error = err;
	}
	if (!error) throw Error('should have thrown error on non-string name');
	if (error.message !== 'name is not a string') throw Error('should have thrown correct error, but got: ' + error.message);
});

// 3

console.log('DEMO forEach');

var arr = [1, 2, 3];

forEach(arr, function(num) { console.log(num * 2); });
// 2
// 4
// 6