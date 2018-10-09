var user;

var logic = {
    register: function (email, username, password, onSuccess, onFail) {
        if (!email || !email.trim().length) onFail('invalid email');
        else if (!username || !username.trim().length) onFail('invalid username');
        else if (!password || !password.trim().length) onFail('invalid password');
        else {
            user = {
                email: email,
                username: username,
                password: password
            };

            onSuccess();
        }
    },

    login: function (username, password, onSuccess, onFail) {
        if (!username || !username.trim().length) onFail('invalid username');
        else if (!password || !password.trim().length) onFail('invalid password');
        else if (user) {
            if (user.username === username && user.password === password) {
                onSuccess(user);
            }
            else onFail('wrong credentials!');
        }
    }
};