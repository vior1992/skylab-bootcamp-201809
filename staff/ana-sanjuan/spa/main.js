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

var login = new Login('Login', 'section',
    function() {
        login.hide();
        wellcome.show();
    });

document.body.appendChild(login.element);

var wellcome = new Wellcome('Wellcome', 'section');

document.body.appendChild(wellcome.element);

var register = new Register('Register', 'section',
    function() {
        register.hide();
        login.show();
    });

document.body.appendChild(register.element);


