 var test = (function () {
    var secret;
    var password = "1234";
       return safeBox = {
            saveSecret: function(sec, pass) {
                if (typeof pass === 'string' && pass.length!==0) {
                secret = sec;
                }
            },
            retrieveSecret: function(pass) {
                if (pass===password) {
                    return secret;
                }
                else {
                    throw Error('invalid password');
                }
            }
        }
    })


test();
safeBox.saveSecret("asdf", "1234");
safeBox.retrieveSecret("4214");
safeBox.retrieveSecret("1234");