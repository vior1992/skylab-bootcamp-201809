var user;
var landing = new Wellcome('Choose an option', 'section',
    function() {
        landing.hide();
        register.show();
    },
    function() {
        landing.hide();
        login.show();
    });

document.body.appendChild(landing.element);

var login = new Login('Login', 'section','div');


document.body.appendChild(login.element);

var register = new Register('Register', 'section', 'div',

function(){

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var username = document.getElementById('user_r').value;
    var pass = document.getElementById('password_r').value;

    safeBox.saveDates(username,pass,name,email,phone);

    alert('Saved!');

});

document.body.appendChild(register.element);

var welcome = new Welcome('Welcome', 'section');
document.body.appendChild(welcome.element);
