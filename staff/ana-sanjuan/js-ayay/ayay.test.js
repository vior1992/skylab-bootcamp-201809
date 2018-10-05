// ayay.test.js

(function() {
    console.log('TEST Ayay.prototype.push');
    
    var tests = [];
    
    tests.push(function() {
        console.log('should push values in ayay');
        debugger
        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        if (ayay.length !== 3) throw Error('ayay length does not match expected one: ' + ayay.length);

        for (var i = 0; i < ayay.length; i++) 
            if (ayay[i] !== i + 1) throw Error('item does not match expected at position: ' + i);
    });

    tests.push(function() {
        console.log('should push arrays in ayay');

        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);
        ayay.push([4,5])

        if (ayay.length !== 5) throw Error('ayay length does not match expected one: ' + ayay.length);

        for (var i = 0; i < ayay.length; i++) 
            if (ayay[i] !== i + 1) throw Error('item does not match expected at position: ' + i);
    });

    // TODO add more test cases
    
    testSuite(tests);
})();

(function() {
    console.log('TEST Ayay.prototype.forEach');
    
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
    });
    
    testSuite(tests);
})();

(function() {
    console.log('TEST Ayay.prototype.map');
    
    var tests = [];
    
    tests.push(function() {
        console.log('should pop values in ayay');

        var result;
        var ayay = new Ayay();

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);
        ayay.push(4);

        result = ayay.pop()

        if (ayay.length !== 3) throw Error('ayay length does not match expected one: ' + ayay.length);
        
        if (result !== 4) throw Error('returned value is not the last value');

    });
    
    testSuite(tests);
})();