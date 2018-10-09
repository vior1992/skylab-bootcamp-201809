function Wellcome(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = 'login_button';
    this.register.addEventListener('click', registerCallback);

    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.className = 'login_button';
    this.login.addEventListener('click', loginCallback);

    this.element.appendChild(this.login);
}

Wellcome.prototype = Object.create(Panel.prototype);
Wellcome.prototype.constructor = Wellcome;

function Login(title, tag, tag, loginCallback) {
    Panel.call(this, title, tag, tag, tag);

    this.element.className = 'login';

    this.element.style.display = 'none';

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.className = 'login_input';
    this.username.id = 'user';
    this.username.placeholder = 'username';

    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.className = 'login_input';
    this.password.id='password';
    this.password.placeholder = 'password';
    this.password.type='password';

    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.className = 'login_button';
    this.login.addEventListener('click', loginCallback);
    this.login.type='button';


    this.form.className = 'login_form';
    this.form.appendChild(this.login);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome

function Register (title,tag, tag, registerCallback,backCallback){
    Panel.call(this, title, tag, tag, tag);
    this.element.className="register";

    this.element.style.display = 'none';

    this.form = document.createElement('form');
    this.element.appendChild(this.form);

    this.name = document.createElement('input');
    this.name.placeholder = 'name';
    this.name.id = 'name';
    this.name.className = 'login_input';
    this.form.appendChild(this.name);

    this.email = document.createElement('input');
    this.email.placeholder = 'email';
    this.email.id = 'email';
    this.email.className = 'login_input';
    this.form.appendChild(this.email);

    this.phone = document.createElement('input');
    this.phone.placeholder = 'phone';
    this.phone.id = 'phone';
    this.phone.className = 'login_input';
    this.form.appendChild(this.phone);

    this.username = document.createElement('input');
    this.username.placeholder = 'username';
    this.username.id = 'user_r';
    this.username.className = 'login_input';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.placeholder = 'password';
    this.password.id = 'password_r';
    this.password.className = 'login_input';
    this.password.type='password';
    this.form.appendChild(this.password);

    this.send = document.createElement('button');
    this.send.innerText = "Send";
    this.send.className = 'login_button';
    this.send.addEventListener('submit', registerCallback);
    this.send.type='button';

    this.back = document.createElement('a');
    this.back.innerText = "back";
    this.back.href = '#';
    this.back.addEventListener('click', backCallback);
    this.element.appendChild(this.back);

    this.form.className = 'register_form';
    this.form.appendChild(this.send);

}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

