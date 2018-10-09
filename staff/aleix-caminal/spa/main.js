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

var landing = new Landing('Choose an option', 'section',
    function() {
        landing.hide();
        register.show();
    },

    function() {
        landing.hide();
        login.show();
    }
);

var login = new Login('Login', 'section',
    function() {
        let form = document.querySelector('#login');
        if (user = safeBox.retrieveUser(form.querySelector('#username').value, form.querySelector('#password').value)) {
            login.hide();
            welcome.show();
            welcome.element.querySelector('.panel__title').innerText = 'Welcome ' + user.name + '!';
        } else {
            error('Your credentials are invalid');
        }
    },

    function() {
        login.hide();
        landing.show();
    }
);

var register = new Register('Register', 'section',
    function() {
        let form = document.querySelector('#register');
        if (validate(form, ['name', 'username', 'password', 'confirm_password'])) {
            if (form.querySelector('#password').value === form.querySelector('#confirm_password').value) {
                safeBox.saveUser(
                    form.querySelector('#name').value,
                    form.querySelector('#username').value,
                    form.querySelector('#password').value
                );

                register.hide();
                login.show();
            } else {
                error('Passwords do not match');
            }
        } else {
            error('Fields in red are mandatory');
        }
    },

    function() {
        register.hide();
        landing.show();
    }
);

var welcome = new Welcome('Welcome', 'section', function() {
    user = undefined;
    welcome.hide();
    login.show();
});

document.body.appendChild(landing.element);
document.body.appendChild(login.element);
document.body.appendChild(register.element);
document.body.appendChild(welcome.element);

function validate(form, inputs) {
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
}

function error(message) {
    alert(message);
}
