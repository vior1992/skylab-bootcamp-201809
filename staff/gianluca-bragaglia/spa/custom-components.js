function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

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

    this.element.style.display = 'none';

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.username = document.createElement('input');

    this.form.appendChild(this.username);

    this.password = document.createElement('input');

    this.form.appendChild(this.password);

    this.login = document.createElement('button');

    this.form.appendChild(this.login);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome


function Register(title, tag, registerCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.email = document.createElement('input');

    this.form.appendChild(this.email);

    this.username = document.createElement('input');

    this.form.appendChild(this.username);

    this.password = document.createElement('input');

    this.form.appendChild(this.password);

    this.register = document.createElement('button');

    this.form.appendChild(this.register);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;