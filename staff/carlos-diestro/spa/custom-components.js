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
    this.element.style.display = 'none';

    this.form = document.createElement('form');

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
    this.login.type = 'button';
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.form.appendChild(this.login);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Register(title, tag, registerCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'register';
    this.element.style.display = 'none';

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.email = document.createElement('input');
    this.email.type = 'email';
    this.email.placeholder = 'Email';
    this.form.appendChild(this.email);

    this.username = document.createElement('input');
    this.username.type = 'text';
    this.username.placeholder = 'Name';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.placeholder = 'Password';
    this.form.appendChild(this.password);

    this.rePassword = document.createElement('input');
    this.rePassword.type = 'password';
    this.rePassword.placeholder = 'Repeat password';
    this.form.appendChild(this.rePassword);

    this.register = document.createElement('button');
    this.register.type = 'button';
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);
    this.form.appendChild(this.register);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Welcome(title, tag) {
    Panel.call(this, title, tag);

    this.element.className = 'welcome';
    this.element.style.display = 'none';

    this.element.appendChild(document.createTextNode('Hello my friend'));
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;