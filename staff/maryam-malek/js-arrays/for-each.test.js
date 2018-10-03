console.log('TEST forEach');

var tests = [];

// 1

tests.push(function() {
    console.log('should fail on non-array input');

    var error;

    try {
        forEach(10);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error ('should have thrown error on non-array input');

    if(error.message !== 'input is not an array') throw Error ('should have thrown correct error message, but got: ' + error.message);

});

testSuite(tests);