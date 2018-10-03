console.log("TEST forEach");

var tests = [];

tests.push(function() {
    console.log("should succeed on iterating and array (copying it to another array)")

    var nums = [1,2,3];

    var res = [];

    forEach(nums, function(num, index) {
        res[index] = num;
    });

    if (res.length !== nums.length) throw Error("result length is not equal to nums length");

    res.forEach(function(val, index) {
        if (val !== nums[index]) throw Error("element at index " + index + " does not match the original")
    });

});

tests.push(function() {
    console.log("should fail on non-function callback");

    var nums = [1,2,3];

    var error;

    try {
        forEach(nums);
    } catch(err) {
        error = err;
    }

    if (!error) throw Error("has not failed");

    if (error.message !== "array is not valid") throw Error("error message is not correct");

});

tests.push(function() {
    console.log("should fail on non array");
    
})
testSuite(tests);