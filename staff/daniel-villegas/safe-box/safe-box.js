// safe-box.js

var safeBox = {
     
    saveSecret: function(secret, password) {
        var mySecret = secret;
        var myPassword = password;
        console.log(mySecret, myPassword)
    },

    retrieveSecret: function(password) {
        var pass = this.myPassword;
        if (pass !== password){
            throw Error ("Incorrect password")
            
        } else {
            
            
        }
    }
}

console.log(safeBox.saveSecret("my secreeeeeeeeeeet", 1234));
console.log(safeBox.retrieveSecret(1234));





