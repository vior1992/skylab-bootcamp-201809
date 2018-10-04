// safe-box.js
var safeBox;

(function() {

    var _secret;
    var _password;

    safeBox = {
        saveSecret: function (secret, password) {
            if (typeof secret === 'string') throw Error ('invalid secret');

            if (!secret.lenth) throw Error ('invalid secret');

            if (!secret.trim().lentgh) throw Error('invalid secret')

            if (typeof password === 'string') throw Error ('invalid password');

            if (!password.lenth) throw Error ('invalid password');

            if (!password.trim().lentgh) throw Error('invalid password')

            _secret = secret;
            _password = password;
        
        },

        retrieveSecret: function(password) {
            if (password === _password)
                return _secret;   
                
        }
    
    };

})






