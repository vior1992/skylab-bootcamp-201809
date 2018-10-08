// ayay.test.js

(function() {
    console.log('TEST Ayay.prototype.push');

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
    console.log('TEST Ayay.prototype.pop');

    var tests = [];

    tests.push(function() {
        console.log('should delete the last value of ayay and return it');

        var ayay = new Ayay(); // ayay = [1,2,3]

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var res = ayay.pop(); // res = 3 ayay.length = 2

        if (ayay.length !== 2) throw Error('result length does not match expected one');
        if (res !== 3) throw Error('item does not match expected one');
    });

    testSuite(tests);
})();


(function() {
    console.log('TEST Ayay.prototype.map');

    var tests = [];

    tests.push(function() {
        console.log('should iterate a function in a valid array');

        var ayay = new Ayay(); // ayay = [1,2,3]

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var res = [];
        ayay.map(function(elem, index) {
            res[index] = elem * 2;
        }); // res = [2,4,6]

        if (res.length !== ayay.length) throw Error('result length does not match expected one: ' + res.length);

        res.forEach(function(elem, index) {
            if (elem !== ayay[index] * 2) throw Error('item does not match expected one, at position: ' + index);
        });
    });

    testSuite(tests);
})();


(function() {
    console.log('TEST Ayay.prototype.find');

    var tests = [];

    tests.push(function() {
        console.log('should returns the value of the first element in the array that satisfies the provided testing function');

        var ayay = new Ayay(); // ayay = [1,2,3]

        ayay.push(1);
        ayay.push(2);
        ayay.push(3);

        var res;

        res = ayay.find(function(item) {
            item > 1;
        });

        if (res !== 2) throw Error('result does not match expected one');

    });

    testSuite(tests);
})()
