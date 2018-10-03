console.log("TEST forEach");

var tests = [];

tests.push(function() {
    console.log("Should succed on iterating an array");
    var nums = [1, 2, 3];

    var res = [];

    if (res.length !== num.length) throw Error("res.length is not the same than num.length");
    
    res.forEach(function(value, index) {
        if (value !== nums[index]) { 
        throw Error("element at index" + index + " doesnt match the original")
        }
    }

})


//TEST 2

tests.push(function() {
    console.log("Should succed on iterating an array");
    var nums = [1, 2, 3];

    var res = [];

    if (res.length !== num.length) throw Error("res.length is not the same than num.length");
    
    res.forEach(function(val, index) {
        if (value !== nums[index]) { 
        throw Error("element at index" + index + " doesnt match the original")
        }
    }

})

testSuite(tests);