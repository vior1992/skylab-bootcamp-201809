console.log('TEST Push');
var tests = [];
tests.push(function () {
    console.log('must succeed when pushing a new element');
    var arr = [1, 2, 3];
    var expectedResult = [1, 2, 3, 4]
    var error;
    try {
        push(arr, 4);
    } catch (err) {
        error = err;
    }
    if (!!error) throw Error('not return the expected result');
    arr.forEach((element, i) => {
        if (element !== expectedResult[i]) throw Error('no son iguales');
    });
    
    console.log('%c Done %s','color: green', '✔');
});
tests.push(function () {
    console.log('should push an array inside another');
    var arr = [1, 2, 3];
    var esperatedResult = [1, 2, 3, [4]]
    var error;
    try {
        push(arr, [4]);
    } catch (err) {
        error = err;
    }
    if (!!error) throw Error('error salvaje...');
    arr.forEach((element, i) => {
        if (!!element.length) {
            if (!(element instanceof Array)  && element[0] !== esperatedResult[i][0]) throw Error('results do not match');
        } 
    });
    
    console.log('%c Done %s','color: green', '✔');
});
tests.push(function () {
    console.log('%c Done: %s','color: green', 'should fail on non-array');
    var error;
    try {
        push(null, null);
    } catch (err) {
        error = err;
    }
    if (!error) throw Error('has not failed');
    if (error.message !== 'array is not valid') throw Error('error message is not correct');
    
    console.log('%c Done %s','color: green', '✔');
});
tests.push(function () {
    console.log('element is required');
    
    var arr = [1, 2, 3];
    var error;
    try {
        push(arr);
    } catch (err) {
        error = err;
    }
    if (!error) throw Error('has not failed');
    if (error.message !== 'element not defined') throw Error('error message is not correct');
    
    console.log('%c Done %s','color: green', '✔');
});
tests.push(function () {
    console.log('it return an array')
    var arr = [1, 2, 3];
    var error;
    try {
        push(arr, 'SKYLAB');
    } catch (err) {
        error = err;
    }
    if (!(arr instanceof Array)) throw Error('not return array');
    
    console.log('%c Done %s','color: green', '✔');
});
testSuite(tests);
