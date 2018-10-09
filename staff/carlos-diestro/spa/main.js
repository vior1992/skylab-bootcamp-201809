var user;

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
    function(name, password) {
        if(user.name === name && user.password === password) {
            login.hide();

            welcome.title.innerText = 'Welcome ' + user.name; 
            welcome.show();
        }
    });

document.body.appendChild(login.element);

var register = new Register('Register', 'section',
    function(email, name, password, rePassword) {
        user = {
            email: email,
            name: name,
            password: password,
            rePassword: rePassword
        };
        register.hide();
        login.show();
    });

document.body.appendChild(register.element);

var welcome = new Welcome('Welcome', 'section',
    function() {
        welcome.hide();
        landing.show();
    });

document.body.appendChild(welcome.element);