//TESTS

console.log("TEST FIND")

var tests = [];

//TEST 1


tests.push(function (){
    console.log("should give fail if callback is not defined");
    
    var nums = [5, 12, 8, 130, 44];

    var error;

    try {
        find(nums);
    } catch(err){
        error = err;
    }

    if (!error) throw Error ("expected error");

    if (error.message !== "undefined is not a function") throw Error ("Fail on error message, is not the same");

});


//TEST2


tests.push(function (){
    console.log("should return undefined if not satisfy the provided testing function");

    var nums = [5, 1, 8, 3, 4];

    var respuesta = [];

    respuesta = find(nums, function (elem) { return elem > 10; });
    
    if (respuesta !== undefined) throw Error ("The output should be undefined");

});

//TEST3 


tests.push(function (){
    console.log("Should return 12");
   
    var nums = [5, 12, 8, 130, 44];

    var respuesta = [];

    
    respuesta = find(nums, function (elem) { return elem > 10; });
    
    if (respuesta !== 12) throw Error ("The output should be 12");

});

testSuite(tests);