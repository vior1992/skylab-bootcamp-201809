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
    var user = document.querySelector('.user').value;
    var pass = document.querySelector('.pass').value;
    if(user === '_user' && pass === '_pass') {
        login.hide();
        welcome.show();
        error.hide();
    }else{
        error.show();
    }
   
});

document.body.appendChild(login.element);

var register = new Register('Register', 'section', function() {
    register.hide();
    login.show();
});

document.body.appendChild(register.element);

var welcome = new Welcome('Welcome', 'section');

document.body.appendChild(welcome.element);

var error = new Error('Error', 'section');

document.body.appendChild(error.element);
