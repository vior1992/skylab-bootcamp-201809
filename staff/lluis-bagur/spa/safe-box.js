// safe-box.js

var safeBox;
(function () {
    var _password;
    var _user;

    safeBox = {
        saveDates: function (user, pass, name, email, phone) {
            if (typeof user !== 'string' || !user.trim().length) alert('invalid user');
            if (typeof pass !== 'string' || !pass.trim().length) alert('invalid password');
            if (typeof name !== 'string' || !name.trim().length) alert('invalid user');
            if (typeof email !== 'string' || !email.trim().length) alert('invalid password');
            if (typeof phone !== 'string' || !phone.trim().length) alert('invalid password');


            _user = user;
            _password = pass;

        },

        retrieveDates: function (user,pass) {
            if (user !== _user) throw Error('invalid user');
            if (pass !== _password) throw Error('invalid password');

            return true;
        }
    };
})();

