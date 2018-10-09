function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);
    // this.element.className = 'dialog';
    
    this.div=document.createElement('div');
    this.div.className='dialog';
    this.element.appendChild(this.div);

    this.title.className = 'dialog__title';
    this.div.appendChild(this.title);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.type = 'button';
    this.register.addEventListener('click', registerCallback);
    this.register.className = 'confirm__button';
    this.div.appendChild(this.register);

    this.div.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.login.className = 'confirm__button';
    this.div.appendChild(this.login);
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
    this.password.type='password';
    this.form.appendChild(this.password);

    this.repeatPass = document.createElement('input');
    this.repeatPass.name = '_repeatPass';
    this.repeatPass.value = 'password';
    this.repeatPass.type='password';
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
    this.submit.type='button';
    this.submit.addEventListener('click', function(event){
        event.preventDefault();
        submitCallback();
    });
    this.submit.className = 'confirm__button';
    this.form.appendChild(this.submit);

    this.errors = document.createElement('p');
    this.errors.innerText = '';
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
    this.password.type = 'password';
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
    this.element.className = 'dialog alert';
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
    this.errors.innerText = '';
    this.errors.classList.add("errors_login");
    this.errors.name = 'errors_login';
    this.element.style.display = 'none';
    this.element.className = 'dialog alert alert--danger';
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

