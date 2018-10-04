// safe-box.js

var safeBox = {
    saveSecret: function(secret, password) {
        function a(){
            var password = this.password
            var secret = this.secret;
        }
    },

    retrieveSecret: function(password) {
        if (password === a(password)){
            return safeBox.a.secret;
        }
        
    }
}