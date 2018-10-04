// safe-box.js

var safeBox = {
    saveSecret: function(secret, password) {
        if (typeof password === 'undefined') throw Error('invalid password');
        this.secret = {[password]:secret};
    },

    retrieveSecret: function(password) {
        return this.secret[password];
    },
}
