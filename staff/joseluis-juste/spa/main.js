var safeBox = (function () {
    var _username;
    var _password;

    return {
        setCredentials: function (username, password) {
            if (typeof username !== 'string' || !username.trim().length) throw Error('invalid secret');

            if (typeof password !== 'string' || !password.trim().length) throw Error('invalid password');

            _username = username;
            _password = password;
        },

        getCredentials: function () {
            

            return {username:_username,password:_password};
        }
    };
})();


var login = new Login("LOGIN", "form", function (username, password) {

    if ((username === safeBox.getCredentials().username) && (safeBox.getCredentials().password === password)) {
        var welcome = new Alert("¡¡¡WELCOME!!!", "Bienvenido a los Web Components", "section", function () {

            welcome.hide();
            login.hide();
            landing.show();

        });
        welcome.render(document.body);
        welcome.show();
        login.hide();
    }
    else {
        var error = new Alert("¡¡¡ERROR!!!", "The credentials are incorrect", "section", function () {
            error.hide();
            login.show();

        }, true)
        error.show();
        error.render(document.body);
        login.hide();
    }

}, function () {
    login.hide();
    landing.show();
});


var register = new Register("form", function (username, password) {

    safeBox.setCredentials(username, password);
    register.hide();
    landing.show();
});

var landing = new Landing("¡¡¡Welcome to WebComponents!!!", "section", function () {


    register.render(document.body);
    register.show();
    landing.hide();

}, function () {


    login.render(document.body);
    login.show();
    landing.hide();

});

landing.render(document.body);