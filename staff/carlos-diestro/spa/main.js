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

document.body.appendChild(landing.element);

var register = new Register('Register', 'section', function(email, name, password) {
  logic.register(email, name, password,
    function() {
        register.hide();
        registerError.element.remove();
        login.show();
    },
    function(message) {
      registerError.element.innerText = message;
    }
  );
});
var registerError = new inputError('', 'p');

document.body.appendChild(register.element);
register.element.appendChild(registerError.element);

var login = new Login('Login', 'section', function(name, password) {
  logic.login(name, password,
    function() {
      login.hide();
      loginError.element.remove();

      welcome.title.innerText = 'Welcome ' + user.name; 
      welcome.show();
    },
    function(message) {
      loginError.element.innerText = message;
    });
});
var loginError = new inputError('', 'p');

document.body.appendChild(login.element);
login.element.appendChild(loginError.element);

var welcome = new Welcome('Welcome', 'section', function() {
  welcome.hide();
  landing.show();
});

document.body.appendChild(welcome.element);