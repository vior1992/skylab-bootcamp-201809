// safe-box.js
function SafeBoxAdministration(_name, _surname, _username, _password, _repeatPass){
    var name;
    var surname;
    var username;
    var password;
    var safeBox = {
        saveData: function(_name, _surname, _username, _password, _repeatPass) {
            var count=0, arr=[];

            if(!_password || !_password.trim().length)  {arr[count]=("Password must be set"); count++;}
            if(!isNaN(_password))  {arr[count]=('Your password can not contain numbers'); count++;}
            
            if(!_repeatPass || !_repeatPass.trim().length)  {arr[count]=("Repeat the password please"); count++;}
            if(!isNaN(_repeatPass))  {arr[count]=('Your password can not contain numbers'); count++;}

            if(!_name || !_name.trim().length)  {arr[count]=("Name must be set"); count++;}
            if(!isNaN(_name))  {arr[count]=('Your name can not contain numbers'); count++;}

            if(!_surname || !_surname.trim().length)  {arr[count]=("Surname must be set"); count++;}
            if(!isNaN(_surname))  {arr[count]=('Your surname can not contain numbers'); count++;}

            if(!_username || !_username.trim().length)  {arr[count]=("Password must be set"); count++;}
            if(!isNaN(_username))  {arr[count]=('Your username can not contain numbers'); count++;}

            if(_password!==(_repeatPass)){ arr[count]='Password must be the same in both fields'; count++}

            if(count>0){
                console.log("algun error")
                return arr;
            }else{
                username=_username;
                name=_name;
                surname=_surname;
                password=_password;
                return true;
            }          
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