// safe-box.js
function SafeBoxAdministration(_secret, _password){
    var secret=_secret;
    var password;
    var safeBox = {
        saveSecret: function(_secret, _password) {
            // TODO
            if(_password==undefined && typeof _password !==String){
                throw Error ("Password must be set");
            }
            secret=_secret;
            password=_password;
        },
        retrieveSecret: function(_password) {
            // TODO
            if(password===_password){
                return secret;
            }
            throw Error("Password is not correct");
        }
    }
    return safeBox;
}
var safeBox=SafeBoxAdministration();