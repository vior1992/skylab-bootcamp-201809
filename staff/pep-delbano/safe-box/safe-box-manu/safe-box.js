// safe-box.js

//with this function, we can save 
var safeBox = {

    saveSecret: function(secret, password) {
        var sec = secret;
            pass = password;
    },

    retrieveSecret: function(password) {
        if(password === pass) {
        return sec;
    }
}


safeBox("disismypassword", "disisasecret");

safeBox("disisasecret");