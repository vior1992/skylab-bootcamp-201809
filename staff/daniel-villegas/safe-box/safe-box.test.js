// safe-box.test.js

var tests = [];

tests.push(function() {
    console.log('should succeed saving and retrieving secret on correct password');

    var secret = 'this is my secret';

    safeBox.saveSecret(secret, '123');

    var recovered = safeBox.retrieveSecret('123');

    if (secret !== recovered) throw Error('recovered secret does not match original one');
});

tests.push(function() {
    console.log('should fail saving on wrong password');

    var secret = 'this is my secret';

    var error;

    try {
        safeBox.saveSecret(secret);
    } catch(err) {
        error = err;
    }

    if (!error) throw Error('no error thrown from safe box');

    if (error.message !== 'invalid password') throw Error('error message does not match expected one');
});

tests.push(function() {
    console.log('should fail saving on empty password');

    var secret = 'this is my secret';

    var error;

    try {
        safeBox.saveSecret(secret, '');
    } catch(err) {
        error = err;
    }

    if (!error) throw Error('no error thrown from safe box');

    if (error.message !== 'invalid password') throw Error('error message does not match expected one');
});

tests.push(function() {
    console.log('should fail saving on blank password');

    var secret = 'this is my secret';

    var error;

    try {
        safeBox.saveSecret(secret, '    \t');
    } catch(err) {
        error = err;
    }

    if (!error) throw Error('no error thrown from safe box');

    if (error.message !== 'invalid password') throw Error('error message does not match expected one');
});


tests.push(function() {
    console.log('should not password be a property of safe box');

    var secret = 'this is my secret';

    var error;

    safeBox.saveSecret(secret, 'abc');

    for (var prop in safeBox) 
        if (safeBox[prop] === password) throw Error('password is a property of safe box');

    if (error.message !== 'invalid password') throw Error('error message does not match expected one');
});



testSuite(tests);