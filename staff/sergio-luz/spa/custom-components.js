function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);
    this.element.className = 'dialog';
    this.title.className = 'dialog__title';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.type = 'button';
    this.register.addEventListener('click', registerCallback);
    this.register.className = 'confirm__button';
    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.login.className = 'confirm__button';
    this.element.appendChild(this.login);
}
Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;



function Register(title, tag, submitCallback) {
    Panel.call(this, title, tag);
    this.element.style.display = 'none';
    this.element.className = 'dialog';
    this.title.className = 'dialog__title';

    this.form = document.createElement('form');
    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.name = '_username';
    this.username.value = 'username';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.name = '_password';
    this.password.value = 'password';
    this.form.appendChild(this.password);

    this.repeatPass = document.createElement('input');
    this.repeatPass.name = '_repeatPass';
    this.repeatPass.value = 'password';
    this.form.appendChild(this.repeatPass);

    this.name = document.createElement('input');
    this.name.name = '_name';
    this.name.value = 'name';
    this.form.appendChild(this.name);

    this.surname = document.createElement('input');
    this.surname.name = '_surname';
    this.surname.value = 'surname';
    this.form.appendChild(this.surname);

    this.submit = document.createElement('button');
    this.submit.innerText = 'Submit';
    this.submit.addEventListener('click', submitCallback);
    this.submit.className = 'confirm__button';
    this.element.appendChild(this.submit);

    this.errors = document.createElement('p');
    this.errors.innerText = 'hola';
    this.errors.name = 'errors_register';
    this.element.appendChild(this.errors);
}
Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Login(title, tag, login_Callback) {
    Panel.call(this, title, tag);
    this.element.className = 'dialog';
    this.title.className = 'dialog__title';

    this.element.style.display = 'none';

    this.form = document.createElement('form');
    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.name = 'confirm_username';
    this.username.value = 'username';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.name = 'confirm_password';
    this.password.value = 'password';
    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    this.login.type = 'button';
    this.login.addEventListener('click', login_Callback);
    this.login.className = 'confirm__button';
    this.login.innerText = 'Login';

    this.form.appendChild(this.login);
}
Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Welcome(title, tag, WelcomeCallback) {
    Panel.call(this, title, tag);
    this.element.className = 'alert';
    this.title.className = 'alert__title';

    this.element.style.display = 'none';

    this.but = document.createElement('button');
    this.but.type = 'button';
    this.but.addEventListener('click', WelcomeCallback);
    this.but.innerText = 'Confirm';
    this.but.className = 'confirm__button';
    this.element.appendChild(this.but);
}
Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;

function Login_Errors(title, tag, error_Callback) {
    Panel.call(this, title, tag);

    this.errors = document.createElement(tag);
    this.errors.innerText = 'Username or password is not valid';
    this.errors.classList.add("errors_login");
    this.errors.name = 'errors_login';
    this.element.style.display = 'none';
    this.element.className = 'alert alert--danger';
    this.title.className = 'alert__title--danger';
    this.element.appendChild(this.errors);

    this.but = document.createElement('button');
    this.but.type = 'button';
    this.but.addEventListener('click', error_Callback);
    this.but.innerText = 'Confirm';
    this.but.className = 'confirm__button';
    this.element.appendChild(this.but);

}
Login_Errors.prototype = Object.create(Panel.prototype);
Login_Errors.prototype.constructor = Login_Errors;

// TODO Register & Welcome