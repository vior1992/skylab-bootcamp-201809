// safe-box.js
function SafeBoxAdministration(_name, _surname, _username, _password, _repeatPass){
    var name;
    var surname;
    var username;
    var password;
    var safeBox = {
        saveData: function(_name, _surname, _username, _password, _repeatPass) {
            if(_password==undefined && typeof _password !=='string'){
                throw Error ("Password must be set");
            }
            if(_repeatPass==undefined && typeof _repeatPass !=='string' && _password!==_repeatPass){
                throw Error ("Password does not match");
            }
            if(_username==undefined && typeof _username !=='string'){
                throw Error ("username must be set");
            }
            if(_name==undefined && typeof _name !=='string'){
                throw Error ("name must be set");
            }
            if(_surname==undefined && typeof _surname !=='string'){
                throw Error ("surname must be set");
            }
            username=_username;
            name=_name;
            surname=_surname;
            password=_password;
            return true;
        },
        checkData: function(_password, _username) {
            console.log(username, password);
            // TODO
            if(password===_password && _username===username){
                return true;
            }else{

                throw Error("Password/Username is not correct");
            }
        }
    }
    return safeBox;
}
var safeBox=SafeBoxAdministration();