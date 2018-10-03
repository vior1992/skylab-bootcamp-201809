console.log('TEST forEach');

var tests = [];


tests.push(function () {
    console.log('should succeed on iterting and array(copyng it to another array)');
    
    var nums = [1,2,3];
    
    var res = [];

    forEach(nums, function(num, index) {
        res[index] = num;
    })



});

testSuite(tests);