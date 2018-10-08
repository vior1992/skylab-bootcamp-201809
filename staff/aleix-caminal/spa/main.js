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

var login = new Login('Login', 'section', function() {
    login.hide();
    welcome.show();
});

var register = new Register('Register', 'section', function() {
    register.hide();
    login.show();
});

var welcome = new Welcome('Welcome', 'section', function() {
    welcome.hide();
    login.show();
});

document.body.appendChild(landing.element);
document.body.appendChild(login.element);
document.body.appendChild(register.element);
document.body.appendChild(welcome.element);
