function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing';
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

function Login(title, tag, loginCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.title.className = 'title';

    this.form = document.createElement('form');
    this.form.className = 'form';
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.password.value;

       loginCallback(username, password);
    }.bind(this));
    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.className = 'user';
    this.username.placeholder = 'Enter name';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.className = 'pass';
    this.password.placeholder = 'Enter password';
    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.className = 'btn';
    this.form.appendChild(this.login);

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.addEventListener('click', backCallback);
    this.element.appendChild(this.back);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome


function Register(title, tag, registerCallback, backCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.title.className = 'title';

    this.form = document.createElement('form');
    this.element.appendChild(this.form);
    this.form.className = 'form';
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var email = this.email.value;
        var username = this.username.value;
        var password = this.password.value;

        registerCallback(email, username, password);
    }.bind(this));

    this.email = document.createElement('input');
    this.email.className = 'input';
    this.email.placeholder = 'Enter email';
    this.email.type = 'email';
    this.form.appendChild(this.email);

    this.username = document.createElement('input');
    this.username.className = 'input';
    this.username.placeholder = 'Enter name';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.className = 'input';
    this.password.type = 'password';
    this.password.placeholder = 'Enter password';
    this.form.appendChild(this.password);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = 'btn';
    this.form.appendChild(this.register);

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.addEventListener('click', backCallback);
    this.element.appendChild(this.back);
    

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