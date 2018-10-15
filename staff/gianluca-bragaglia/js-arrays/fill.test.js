function fill(){
    if (!(arguments[0] instanceof Array)) throw Error(arguments[0] +' is not valid');
    
    if (arguments[1] == undefined){
        for (i=0;i<arguments[0].length;i++){
            arguments[0][i]=undefined;
        }
    }
    if (arguments[2] == undefined){
        for (i=0;i<arguments[0].length;i++){
            arguments[0][i]=arguments[1];
        }
    }else if (arguments[3] == undefined){
        var save;
        if (arguments[2]<0){
            save = arguments[0].length+arguments[2];
        }
        for (i=save;i<arguments[0].length;i++){
            arguments[0][i]=arguments[1];
        }  
    } else  {
        var save;
        var save1;
        if (arguments[2]<0){
            save = arguments[0].length+arguments[2];
        }
        if (arguments[3]<0){
            save1 = arguments[0].length+arguments[3];
        }

        if (save<0){
            save=0;
        }

        if (save1>arguments[0].length){
            save1=arguments[0].length;
        }

        for (i=save;i<save1;i++){
            arguments[0][i]=arguments[1];
        }  
    }
    return arguments[0];
}



 
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
    console.log('should fail on non-array');
    
    var error;

    try {
        fill();
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'undefined is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non-array (undefined)');
    
    var error;
    var arr;

    try {
        fill(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non-array (string)');
    
    var error;
    var arr='hola';

    try {
        fill(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not valid') throw Error('error message is not correct');
});

tests.push(function () {
    console.log('should fail on non-array (number)');
    
    var error;
    var arr=5;

    try {
        fill(arr);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== arr + ' is not valid') throw Error('error message is not correct');
});


testSuite(tests);