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

// tests.push(function () {
//     console.log('should fail on element not defined');

//     var error;

//     var nums = [1, 2, 3];

//     try {
//         fill(nums,o);
//     } catch (err) {
//         error = err;
//     }

//     if (!error) throw Error('has not failed');

//     if (error.message !== 'element is not defined') throw Error('error message is not correct');
// });

// tests.push(function () {
//     console.log('should fail if there are too many elements');

//     var error;

//     var nums = [1, 2, 3];

//     try {
//         fill(nums, 2, 3, 5, 6);
//     } catch (err) {
//         error = err;
//     }

//     if (!error) throw Error('has not failed');

//     if (error.message !== 'there are too many elements') throw Error('error message is not correct');
// });

testSuite(tests);