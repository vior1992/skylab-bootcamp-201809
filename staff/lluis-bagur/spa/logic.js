var logic = {

        saveDates: function (user, pass, name, email, phone) {
            if (typeof user !== 'string' || !user.trim().length) onFail ('invalid user');
            if (typeof pass !== 'string' || !pass.trim().length) onFail ('invalid password');
            if (typeof name !== 'string' || !name.trim().length) onFail ('invalid user');
            if (typeof email !== 'string' || !email.trim().length) alert('invalid password');
            if (typeof phone !== 'string' || !phone.trim().length) alert('invalid password');

            user = {
                
                
            }

        },

        retrieveDates: function (user,pass) {
            if (user !== _user) throw Error('invalid user');
            if (pass !== _password) throw Error('invalid password');

            return true;
        }
    };


