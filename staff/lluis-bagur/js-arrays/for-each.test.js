console.log('TEST foreach');
var tests=[];

//caso 1

tests.push(function(){
    console.log('should succeed on iterating and array (coying it to another array)');
    var nums= [1,2,3];
    var res = [];
    forEach(nums,function(num,index){

        res[index] = num;
    })

    if(res.length !== nums-length) throw Error('result length is not equal to nums length');
    
    res.forEach(function(value, index){

            if(!val !== nums[index]) throw Error ('element at index ' + '');
    })
})

// caso 2

tests.push(function(){
    console.log('should succeed on iterating and array (coying it to another array)');
    var nums= [1,2,3];
    var error;

    try{
        forEach(nums);
    } catch(err) {
        error=err;
    }

    if(!error) throw Error('has not a filed');

    if(error.message !== 'callback is not a function') throw Error('error message is not correct');

})


// caso 3

tests.push(function(){
    console.log('should fail on non-array input and non-callback)');
    var error;

    try{
        forEach();
    } catch(err) {
        error=err;
    }

    if(!error) throw Error('has not a filed');

    if(error.message !== 'array is not valid') throw Error('error message is not correct');

})


// caso 4

tests.push(function(){
    console.log('should fail on non-array)');
    var error;

    try{
        forEach(undefined,function(){});
    } catch(err) {
        error=err;
    }

    if(!error) throw Error('has not a filed');

    if(error.message !== 'array is not valid') throw Error('error message is not correct');

})

testSuite(tests);
