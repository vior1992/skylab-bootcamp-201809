/**
 * 
 * 
 * 
 * Everything in here represents the "Business Logic" and the "Presentation Logic"
 *
 * 
 * 
 * 
 * */

var landing = new Landing('Choose an option', 'section',
    function() {
        landing.hide();
        login.hide();
        register.show();
    },
    function() {
        landing.hide();
        register.hide();
        login.show();
    });

document.body.appendChild(landing.element);

var login = new Login('Login', 'section');

document.body.appendChild(login.element);

var register = new Register ('Register', 'section');

document.body.appendChild(register.element);

var welcome = new Welcome ('Welcome', 'section');

document.body.appendChild(welcome.element);
