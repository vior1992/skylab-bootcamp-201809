// safe-box.js

var safeBox = {

    saveSecret: function(secret, password) {
        if (password === undefined) throw Error ('invalid password')
        data = []
        data.push = [{secret: secret, password: password}];
    },

    retrieveSecret: function(password) {
        myData = data.forEach(function(item) {
            if (item.password = password);
            return item
        });
        if (password ===  myData.password) {
            return myData.secret;
        } else {
            throw Error ('invalid password');
        }
    }
}