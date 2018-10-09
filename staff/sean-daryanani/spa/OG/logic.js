var credentials = {
    userNames: ['seand52'],
    password: ['skylab1']
}

var logic = {
    login: function (username, password, onSuccess, onFail) {
        var userNameCorrect = false;
        var passwordCorrect = false;
        credentials.userNames.forEach(function (el) {
            if (username === el) {
                return userNameCorrect = true;
            }
            else {
                onFail('wrong username!')
            }
        })
        credentials.password.forEach(function (el) {
            if (password === el) {
                return passwordCorrect = true;
            }
            else {
                onFail('wrong password!');
            }
        })
        if (!userNameCorrect && !passwordCorrect) {
            onFail('wrong username and password!')
        }
        else if (userNameCorrect && passwordCorrect) {
            onSuccess();
        }
        
    },

    register: function (email, fullname, username, password, onSuccess, onFail) {
        if (!email || !email.trim().length) onFail('invalid email');
        else if (!fullname || !fullname.trim().length) onFail('invalid name');
        else if (!username || !username.trim().length) onFail('invalid username');
        else if (!password || !password.trim().length) onFail('blank password');
        else if (password.length <6) onFail('Password must be at least 6 characters');
        else if (password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)===null) onFail('Password must contain at least one number');

        else {
            credentials.userNames[credentials.userNames.length] = username;
            credentials.password[credentials.password.length] = password;
            onSuccess();
        }
    }
}