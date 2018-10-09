var user;

var logic = {
    register: function (username, email, password, repeatPassword, onSuccess, onFail) {
        if (!username || !username.trim().length) onFail('User name not valid');
        else if (!email || !email.trim().length) onFail('E-mail not valid');
        else if (!password || !password.trim().length) onFail('Password not valid');
        else if (!repeatPassword || !repeatPassword.trim().length) onFail('Repeat password not valid');
        else if (password !== repeatPassword) onFail('Paswords are diferent');
        else {
            user = {
                username: username,
                email: email,
                password: password,
                repeatPassword: repeatPassword
            };

            onSuccess();
        }
    },

    login: function (username, password, onSucces, onFail) {
        if (!username || !username.trim().length) onFail('User name not valid');
        else if (!password || !password.trim().length) onFail('Password not valid');
        else if (username) {
            if (user.username === username && user.password === password) {
                onSucces(username);
            }
            else onFail('wrong credentials!');
        }
    },

    welcome: function () {
        alert('Welcome ' + user.username + '!' );
        window.location.href="http://www.humordev.com"
        }
};