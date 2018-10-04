console.log('TEST fill');

var tests = [];

tests.push(function () {
    console.log('should succeed on modification');

    var nums = [1, 2, 3];

    var res = fill(nums, 6);

    forEach(res, function (val, index) {
        if (res[index] !== 6) throw Error('element at index ' + index + ' does not match with 6');
    });
});

tests.push(function () {
    console.log('should fail on non-array and non-elements');
    
    var error;

    try {
        fill();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non-element');

    var error;

    var nums = [1, 2, 3];

    try {
        fill(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'element is empty') throw Error('error message is not correct');
});

testSuite(tests);