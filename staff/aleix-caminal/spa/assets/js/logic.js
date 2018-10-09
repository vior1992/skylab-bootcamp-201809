var user, safeBox;
(function () {
    _users = [];

    safeBox = {
        saveUser: function (name, username, password) {
            _users.push({
                name: name,
                username: username,
                password: password
            });
        },

        retrieveUser: function (username, password) {
            return _users.find(function (user) {
                return user.username === username && user.password === password;
            });
        },
    };
})();

var logic = {
    register: function(form, callback) {
        if (this.validate(form, ['name', 'username', 'password', 'confirm_password'])) {
            if (form.querySelector('#password').value === form.querySelector('#confirm_password').value) {
                safeBox.saveUser(
                    form.querySelector('#name').value,
                    form.querySelector('#username').value,
                    form.querySelector('#password').value
                );

                callback();
            } else {
                this.error('Passwords do not match');
            }
        } else {
            this.error('Fields in red are mandatory');
        }
    },

    login: function(form, callback) {
        if (user = safeBox.retrieveUser(form.querySelector('#username').value, form.querySelector('#password').value)) {
            callback();
        } else {
            this.error('Your credentials are invalid');
        }
    },

    logout: function(callback) {
        user = undefined;
        callback();
    },

    validate: function(form, inputs) {
        var result = 1;
        for (var i in inputs) {
            var input = form.querySelector('#' + inputs[i]);
            if (!input.value) {
                input.classList.add('is-invalid');
                result = 0;
            } else {
                input.classList.remove('is-invalid');
            }
        }

        return result;
    },

    error: function(message) {
        alert(message);
    }
};
