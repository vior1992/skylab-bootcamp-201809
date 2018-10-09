var service = (function () {
    var _firstname;
    var _lastname;
    var _username;
    var _password;

    return {
        setUserData: function (firstname,lastname,username, password,registerSuccess,registerFail) {
            if (typeof firstname !== 'string' || !firstname.trim().length){registerFail('invalid firstname'); return}

            if (typeof lastname !== 'string' || !lastname.trim().length){registerFail('invalid lastname'); return}
            
            if (typeof username !== 'string' || !username.trim().length){registerFail('invalid username'); return}

            if (typeof password !== 'string' || !password.trim().length){registerFail('invalid password'); return};

            _firstname = firstname;
            _lastname = lastname;
            _username = username;
            _password = password;
            registerSuccess();
        },
        getUserData: function () {


            return { firsname:_firstname, lastname:_lastname,username: _username, password: _password };
        },
        login: function(username, password, loginSuccess, loginFail){

            if (typeof username !== 'string' || !username.trim().length){loginFail('invalid username'); return}

            if (typeof password !== 'string' || !password.trim().length){loginFail('invalid password'); return}

            if (username === _username && password === _password){
                loginSuccess();
            }else{
                loginFail("The credentials are not correct...");
            }
        }
    };
})();