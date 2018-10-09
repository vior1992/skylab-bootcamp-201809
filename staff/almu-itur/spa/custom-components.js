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
    this.login.type='button';
    this.login.innerText=('login');
    this.login.addEventListener('click', loginCallback);
    this.form.appendChild(this.login);

    //this.login.addEventListener('click', loginCallback);
    //this.login.appendChild(this.login);

}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;


// TODO Register & Welcome
function Register(title, tag, registerCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.form = document.createElement('form');
    this.element.appendChild(this.form);

    //this.element.appendChild(document.createTextNode('User name:'));
    this.user = document.createElement('p');
    this.user.innerText = 'User';
    this.form.appendChild(this.user);

    this.username = document.createElement('input');
    this.form.appendChild(this.username);

    //this.element.appendChild(document.createTextNode('Password:'));
    this.password = document.createElement('p');
    this.password.innerText = 'Password';
    this.form.appendChild(this.password);

    this.password = document.createElement('input');
    this.form.appendChild(this.password);

    this.register = document.createElement('button');
    this.register.type = 'button';
    this.form.appendChild(this.register);
    this.register.innerText = ('register');
    this.register.addEventListener('click', welcome);
    //this.register.appendChild(this.register);

}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Welcome(title, tag) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';
    
    this.title = document.createElement('h1');
    this.element.appendChild(this.title); //this.form.appendChild(this.welcome);
    this.title.className = 'title';
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;
