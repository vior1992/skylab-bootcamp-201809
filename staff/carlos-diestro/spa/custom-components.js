function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);
    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'login';
    this.hide();

    this.form = document.createElement('form');
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        loginCallback(this.username.value, this.password.value);
    }.bind(this));
    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.type = 'text';
    this.username.placeholder = 'Name';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.placeholder = 'Password';
    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    // this.login.type = 'button';
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.form.appendChild(this.login);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Register(title, tag, registerCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'register';
    this.hide();

    this.form = document.createElement('form');
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        registerCallback(this.email.value, this.username.value, this.password.value, this.rePassword.value);
    }.bind(this));
    this.element.appendChild(this.form);

    this.email = document.createElement('input');
    this.email.type = 'text';
    this.email.name = 'email';
    this.email.placeholder = 'Email';
    this.form.appendChild(this.email);

    this.username = document.createElement('input');
    this.username.type = 'text';
    this.username.name = 'name';
    this.username.placeholder = 'Name';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.name = 'password';
    this.password.placeholder = 'Password';
    this.form.appendChild(this.password);

    this.rePassword = document.createElement('input');
    this.rePassword.type = 'password';
    this.rePassword.name = 'rePassword';
    this.rePassword.placeholder = 'Repeat password';
    this.form.appendChild(this.rePassword);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);
    this.form.appendChild(this.register);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Welcome(title, tag, logoutCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'welcome';
    this.hide();

    this.paragraph = document.createElement('p');
    this.paragraph.appendChild(document.createTextNode('Hello my friend'));
    this.element.appendChild(this.paragraph);

    this.logout = document.createElement('button');
    // this.logout.type = 'button';
    this.logout.innerText = 'Logout';
    this.logout.addEventListener('click', logoutCallback);
    this.element.appendChild(this.logout);
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;