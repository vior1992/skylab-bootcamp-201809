function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.title.className = 'title';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = 'btn';
    this.register.addEventListener('click', registerCallback);
    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.className = 'btn';
    this.login.addEventListener('click', loginCallback);
    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, loginCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.title.className = 'title';

    this.form = document.createElement('form');
    this.form.className = 'form';
    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.className = 'user';
    this.username.placeholder = 'Enter name';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.className = 'pass';
    this.password.placeholder = 'Enter password';
    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    this.login.type = 'button';
    this.login.innerText = 'Login';
    this.login.className = 'btn';
    this.login.addEventListener('click', loginCallback);
    this.form.appendChild(this.login);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome


function Register(title, tag, registerCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.title.className = 'title';

    this.form = document.createElement('form');
    this.element.appendChild(this.form);
    this.form.className = 'form';

    this.email = document.createElement('input');
    this.email.className = 'input';
    this.email.placeholder = 'Enter email';
    this.form.appendChild(this.email);

    this.username = document.createElement('input');
    this.username.className = 'input';
    this.username.placeholder = 'Enter name';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.className = 'input';
    this.password.placeholder = 'Enter password';
    this.form.appendChild(this.password);

    this.register = document.createElement('button');
    this.register.type = 'button';
    this.register.innerText = 'Register';
    this.register.className = 'btn';
    this.register.addEventListener('click', registerCallback);
    this.form.appendChild(this.register);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;


function Welcome(title, tag) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.title.className = 'title';
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;


function Error(title, tag) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.title.className = 'title--error';

}

Error.prototype = Object.create(Panel.prototype);
Error.prototype.constructor = Error;