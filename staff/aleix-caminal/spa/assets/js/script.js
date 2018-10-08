function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);
    this.element.appendChild(this.register);
    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Log In';
    this.login.addEventListener('click', loginCallback);
    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, loginCallback, cancelCallback) {
    Panel.call(this, title, tag);
    this.element.style.display = 'none';

    this.form = new Form(['username', 'password']);
    this.element.appendChild(this.form);

    this.cancel = document.createElement('button');
    this.cancel.type = 'button';
    this.cancel.innerText = 'Cancel';
    this.cancel.className = 'form__button';
    this.cancel.addEventListener('click', cancelCallback);
    this.form.appendChild(this.cancel);

    this.login = document.createElement('button');
    this.login.type = 'button';
    this.login.innerText = 'Log In';
    this.login.className = 'form__button';
    this.login.addEventListener('click', loginCallback);
    this.form.appendChild(this.login);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Register(title, tag, registerCallback, cancelCallback) {
    Panel.call(this, title, tag);
    this.element.style.display = 'none';

    this.form = new Form(['name', 'username', 'password', 'confirm_password']);
    this.element.appendChild(this.form);

    this.cancel = document.createElement('button');
    this.cancel.type = 'button';
    this.cancel.innerText = 'Cancel';
    this.cancel.className = 'form__button';
    this.cancel.addEventListener('click', cancelCallback);
    this.form.appendChild(this.cancel);

    this.register = document.createElement('button');
    this.register.type = 'button';
    this.register.innerText = 'Register';
    this.register.className = 'form__button';
    this.register.addEventListener('click', registerCallback);
    this.form.appendChild(this.register);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Welcome(title, tag, logoutCallback) {
    Panel.call(this, title, tag);
    this.element.style.display = 'none';


    this.logout = document.createElement('button');
    this.logout.type = 'button';
    this.logout.innerText = 'Log Out';
    this.logout.className = 'panel__button';
    this.logout.addEventListener('click', logoutCallback);
    this.element.appendChild(this.logout);
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;
