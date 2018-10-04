// safe-box.js

function safeBoxHandler() {
    var _secret;
    var _password;
    var safeBox = {
        saveSecret: function (secret, password) {
            if (typeof password === 'undefined') throw Error('invalid password');
            _secret = secret;
            _password = password;
        },

        retrieveSecret: function (password) {
            if (password === _password) {
                return _secret;
            }
            throw Error('invalid password');
        },
    };
    return safeBox;
}

var safeBox = safeBoxHandler();
