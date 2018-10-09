var landing = new Landing('Choose an option', 'section',
    function() {
        landing.hide();
        register.show();
    },
    function() {
        landing.hide();
        login.show();
    });

document.body.appendChild(landing.element);

var login = new Login('Login', 'section', function() {
        login.hide();
        welcome.show();
    });

var register = new Register('Register', 'section', function(email) {
        if (this.email.indexOf("@") === -1) throw Error("nonono");
        register.hide();
        login.show();
});

document.body.appendChild(login.element);

document.body.appendChild(register.element);

var welcome = new Welcome('Welcome', 'section');

document.body.appendChild(welcome.element);




