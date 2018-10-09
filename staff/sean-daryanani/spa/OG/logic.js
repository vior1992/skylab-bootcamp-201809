var credentials = {
    userNames: ['seand52'],
    password: ['skylab']
}

var logic = {
    login: function (username, password, onSuccess, onFail) {
        var userNameCorrect = false;
        var passwordCorrect = false;
        credentials.userNames.forEach(function (el) {
            if (username === el) {
                return userNameCorrect = true;
            }
        })

        credentials.password.forEach(function (el) {
            if (password === el) {
                return passwordCorrect = true;
            }
        })
        if (userNameCorrect && passwordCorrect) {
            onSuccess();
        } else {

            onFail();
        }
    },

    register: function (email, fullname, username, password, onSuccess, onFail) {
        var arr = [email, fullname, username, password];
        var hasBlank = false;
        arr.forEach(function (el) {
            if (el === "") {
                hasBlank = true;
                onFail();
            }
        })
        if (!hasBlank) {
            credentials.userNames[credentials.userNames.length] = arr[2];
            credentials.password[credentials.password.length] = arr[3];
            onSuccess();
        }
    }
}