function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = "buttons";
    this.register.addEventListener('click', registerCallback);

    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.className = "buttons";
    this.login.addEventListener('click', loginCallback);
    
    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, welcomeCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.username = document.createElement('input');

    this.form.appendChild(this.username);

    this.password = document.createElement('input');

    this.form.appendChild(this.password);

    this.send = document.createElement('button');
    this.send.type='button';
    this.send.innerText = 'Send';
    this.send.className = "buttons";
    this.send.addEventListener('click', welcomeCallback);
    
    this.form.appendChild(this.send);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome
function Register(title, tag, loginCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.username = document.createElement('input');

    this.form.appendChild(this.username);

    this.email = document.createElement('input');

    this.form.appendChild(this.email);

    this.password = document.createElement('input');

    this.form.appendChild(this.password);

    this.repeatPassword = document.createElement('input');

    this.form.appendChild(this.repeatPassword);

    this.register = document.createElement('button');
    this.register.type='button';
    this.register.innerText = 'Register';
    this.register.className = "buttons";
    this.register.addEventListener('click', loginCallback);

    this.form.appendChild(this.register);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Welcome(title, tag, alertCallback) {
    Panel.call(this, title, tag);

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.element.style.display = 'none';

    this.alert = document.createElement('button');
    this.alert.type='button';
    this.alert.innerText = 'Alert';
    this.alert.className = "buttons";
    this.alert.addEventListener('click', alertCallback);

    this.form.appendChild(this.alert);

}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;

