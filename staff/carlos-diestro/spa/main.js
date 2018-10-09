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
        login.show();
    },
    function(message) {
        alert(message);
    }
  );
});

document.body.appendChild(register.element);

var login = new Login('Login', 'section', function(name, password) {
  logic.login(name, password,
    function() {
      login.hide();

      welcome.title.innerText = 'Welcome ' + user.name; 
      welcome.show();
    },
    function(message) {
      alert(message)
    });
});

document.body.appendChild(login.element);

var welcome = new Welcome('Welcome', 'section', function() {
  welcome.hide();
  landing.show();
});

document.body.appendChild(welcome.element);