console.log("%Test forEach", 'background: orange');

var tests=[];

tests.push(function(){
    console.log("should succed on iterating and array (copying it to another array)");

    var nums=[1,2,3];
    var res=[];

    foreach(nums, function(num, index){
        res[index]=num;
    });

    if(res.length!==nums.length) throw Error("Result length is not equal to input length");

    res.forEach(function(val, index)
    {
        if (val!==nums[index]) throw Error("element at index "+index+ " does not match the original one");
    });
});

tests.push(function(){
    console.log("should fail on non-function callback");

    var nums=[1,2,3];
    var res=[];

    foreach(nums, function(num, index){
        res[index]=num;
    });

    if(res.length!==nums.length) throw Error("Result length is not equal to input length");

    res.forEach(function(val, index)
    {
        if (val!==nums[index]) throw Error("element at index "+index+ " does not match the original one");
    });
});