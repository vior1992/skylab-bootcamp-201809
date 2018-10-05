// ayay.test.js

(function() {
    console.log('%c Done %s', 'color: blue', 'TEST Ayay.prototype.push');
    
    var tests = [];
    
    tests.push(function() {
        console.log('should push values in ayay');

        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        if (ayay.length !== 3) throw Error('ayay length does not match expected one: ' + ayay.length);

        for (var i = 0; i < ayay.length; i++) 
        if (ayay[i] !== i + 1) throw Error('item does not match expected at position: ' + i);
        console.log('%c Done %s', 'color: green', '✔');
    });

    // TODO add more test cases

    tests.push(function() {
        console.log('should push an ayay in ayay');

        var ayay = new Ayay();
        var nums = new Ayay();
        var greet = 'Hello!';

        nums.push(greet);

        ayay.push(nums);

        if (ayay[0][0] !== greet) throw Error('ayay elemnt not match expected one: ' + greet);

        console.log('%c Done %s', 'color: green', '✔');
    });

    tests.push(function () {

        console.log('should fail on empty element');
    
        var ayay = new Ayay();
        var error;
    
        try {
            ayay.push();
        } catch (err) {
            error = err;
        }
    
        if (!error) throw Error('has not failed');
    
        if (error.message !== 'element not defined') throw Error('error message is not correct');
        
        console.log('%c Done %s', 'color: green', '✔');
    
    
    });
    
    testSuite(tests);
})();

(function() {
    console.log('%c Done %s', 'color: blue', 'TEST Ayay.prototype.forEach');
    
    var tests = [];
    
    tests.push(function() {
        console.log('should iterate on valid ayay');

        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var result = [];

        ayay.forEach(function(elem, index) { result[index] = elem * 2; });

        if (result.length !== ayay.length) throw Error('result length does not match expected one: ' + result.length);

        result.forEach(function(elem, index) {
            if (elem !== ayay[index] * 2) throw Error('item does not match expected one, at position: ' + index);
        });
        console.log('%c Done %s', 'color: green', '✔');
    });
    
    testSuite(tests);
})();

(function() {
    console.log('TEST Ayay.prototype.map');
    
    var tests = [];
    
    tests.push(function() {
        // TODO
    });
    
    testSuite(tests);
})();

