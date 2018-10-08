var welcome = new Welcome('Welcome', 'section');

document.body.appendChild(welcome.element);

var landing = new Landing('Choose an option', 'section',
    function() {
        // TODO on register click
        landing.hide();
        register.show();
    },
    function() {
        landing.hide();
        login.show();
    });

document.body.appendChild(landing.element);

var login = new Login('Login', 'section',
    function(){
        var user = document.getElementsByName("input1")[0].value;
        var pass = document.getElementsByName("input2")[0].value;
        console.log(user);
        console.log(pass);
        login.hide();
        welcome.show();
    });

document.body.appendChild(login.element);

var register = new Register('Register', 'section', 
    function(){
        register.hide();
        login.show();
    });

document.body.appendChild(register.element);


