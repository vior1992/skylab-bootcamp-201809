console.log('TEST sort');

var sortTests = [];

sortTests.push(function () {
    console.log('should fail on non-array');

    var error;

    try {
        sort();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

sortTests.push(function () {
    console.log('should fail on empty array');

    var arr = [];
    var error;

    try {
        sort(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is empty') throw Error('error message is not correct');
});

sortTests.push(function () {
    console.log('should not modify the original array');

    var arr = [1, 211, 98, 3];

    var original = arr.slice();

    var error;

    var res = sort(arr);

    if (JSON.stringify(arr) !== JSON.stringify(original)) throw Error('the original array has been modified');
});

testSuite(sortTests);