var user;

var logic = {
    login: function(username, password, onSuccess, onFail){
        //if callback is not a function
        if (!username || !username.trim().length) onFail('invalid username');
        else if (!password || !password.trim().length) onFail('invalid password');
        else if (user) {
            if (user.username === username && user.password === password) {
                onSuccess(user);
            }
            else onFail('wrong credentials!');
        }
    },
    register: function(name, email, username, password, onSuccess, onFail){
        if (!name || !name.trim().length) onFail('invalid name');
        else if (!username || !username.trim().length) onFail('invalid username');
        else if (!email || !email.trim().length) onFail('invalid email');
        else if (!password || !password.trim().length) onFail('invalid password');
        else {
            user = {
                name: name,
                email: email,
                username: username,
                password: password
            };
            onSuccess();
        }
    }

};