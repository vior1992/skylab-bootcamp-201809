
console.log('TEST every');

var tests = [];

tests.push(function () {
    console.log('should be true when all the elements fullfil the condition');

    var nums = [1, 30, 39, 29, 10, 13];

    var res = undefined;

    var res = every(nums, function(num) { return num < 40; });

    if (res === undefined) throw Error('the function did not returned any value');
    
    if (res !== true) throw Error('the returned value is not correct, it is ' + res + ' and should be true');

});

tests.push(function () {
    console.log('should be false when not all the elements fullfil the condition');

    var words = words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];

    var res = undefined;

    var res = every(words, function(word) { return word.length < 10; });

    if (res === undefined) throw Error('the function did not returned any value');
    
    if (res !== false) throw Error('the returned value is not correct, it is '+ res + ' and should be false');

});


tests.push(function () {
    console.log('should fail on non-function callback');

    var nums = [1, 2, 3];

    var error;

    try {
        forEach(nums);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('has not failed');

    if (error.message !== 'callback is not a function') throw Error('error message is not correct');
});






testSuite(tests);