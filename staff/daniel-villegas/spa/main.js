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

var register = new Register('Register', 'section', function (username, email, password, repeatPassword) {
    logic.register(username, email, password, repeatPassword,
        function () {
            register.hide();
            login.show();
        },
        function (message) {
            alert(message);   
        }
    );
},  function () {
    register.hide();
    landing.show();
});

document.body.appendChild(register.element);

var login = new Login('Login', 'section', function (username, password) {
    logic.login(username, password,
        function() {
            login.hide();
            welcome.show();
        },
        function(message) {
            alert(message);
        }
    );
}, function () {
    login.hide();
    landing.show();
});

document.body.appendChild(login.element);

var welcome = new Welcome('Welcome', 'section', function () {logic.welcome()});
document.body.appendChild(welcome.element);

