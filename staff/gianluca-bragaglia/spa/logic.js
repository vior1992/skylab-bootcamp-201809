var user;

var logic = {
    register: function (email, username, password, onSuccess, onFail) {
        
        if (typeof email !== 'string' || !email || !email.trim().length) onFail('invalid email');
        else if (typeof username !== 'string' || !username || !username.trim().length) onFail('invalid username');
        else if (typeof password !== 'string' || !password || !password.trim().length) onFail('invalid password');
        else if (typeof onSuccess !== 'function') throw TypeError(onSuccess + ' is not a function');
        else if (typeof onFail !== 'function') throw TypeError(onFail + ' is not a function');
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
        if (typeof username !== 'string' || !username || !username.trim().length) onFail('invalid username');
        else if (typeof password !== 'string' || !password || !password.trim().length) onFail('invalid password');
        else if (typeof onSuccess !== 'function') throw TypeError(onSuccess + ' is not a function');
        else if (typeof onFail !== 'function') throw TypeError(onFail + ' is not a function');
        else if (user) {
            if (user.username === username && user.password === password) {
                onSuccess({
                    username: user.username
                });
            }
            else onFail('wrong credentials!');
        }
    }
};