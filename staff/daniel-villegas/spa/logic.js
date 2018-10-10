var user;

var logic = {
    register: function (username, email, password, repeatPassword, onSuccess, onFail) {
        if (typeof username !== 'string' || !username || !username.trim().length) onFail('User name not valid');
        else if (typeof email !== 'string' || !email || !email.trim().length) onFail('E-mail not valid');
        else if (typeof password !== 'string' || !password || !password.trim().length) onFail('Password not valid');
        else if (typeof repeatPassword !== 'string' || !repeatPassword || !repeatPassword.trim().length) onFail('Repeat password not valid');
        else if (password !== repeatPassword) onFail('Passwords are diferent: ' + 'was introduced ' + password + ' like a password and ' + repeatPassword + ' like a repeatPassword');
        else if (typeof onSuccess !== 'function') throw TypeError(onSuccess + ' is not a function');
        else if (typeof onFail !== 'function') throw TypeError(onFail + ' is not a function');
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
        if (typeof username !== 'string' || !username || !username.trim().length) onFail('User name not valid');
        else if (typeof password !== 'string' || !password || !password.trim().length) onFail('Password not valid');
        else if (username) {
            if (user.username === username && user.password === password) {
                onSucces({
                    username: user.username,
                    email: user.email
                });
            }
            else onFail('wrong credentials!');
        }
    },

    welcome: function () {
        alert('Welcome ' + user.username + '!' );
        window.location.href="http://www.humordev.com"
        }
};