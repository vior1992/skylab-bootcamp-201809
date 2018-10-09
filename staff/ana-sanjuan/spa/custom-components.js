function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'main';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.type = 'button';
    this.register.className = 'button';
    this.register.addEventListener('click', registerCallback);

    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.type = 'button';
    this.login.innerText = 'Login';
    this.login.className = 'button';
    this.login.addEventListener('click', loginCallback);

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, registerCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';
    this.element.className = 'main main__form';

    this.form = document.createElement('form');
    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.placeholder = 'Username';
    this.username.className = 'element__input'
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.className = 'element__input'
    this.password.placeholder = 'password';
    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    this.login.type = 'button';
    this.login.className = 'button element__input';
    this.login.innerText = 'submit';
    this.form.appendChild(this.login);
    this.login.addEventListener('click', registerCallback);
    
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Wellcome(title, tag) {
    Panel.call(this, title, tag);
    
    this.element.className = 'main ';
    this.element.style.display = 'none';

}

Wellcome.prototype = Object.create(Panel.prototype);
Wellcome.prototype.constructor = Login;

function Register(title, tag, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'main main__form';
    this.element.style.display = 'none';

    this.form = document.createElement('form');
    this.element.appendChild(this.form);
    
    
    this.username = document.createElement('input');
    this.username.className = 'element__input';
    this.username.placeholder = 'Username';
    this.form.appendChild(this.username);

    this.email = document.createElement('input');
    this.email.className = 'element__input';
    this.email.placeholder = 'email';
    this.form.appendChild(this.email);

    this.postcode = document.createElement('input');
    this.postcode.className = 'element__input';
    this.postcode.placeholder = 'postcode';
    this.form.appendChild(this.postcode);

    this.password = document.createElement('input');
    this.password.type = 'password';
    this.password.className = 'element__input';
    this.password.placeholder = 'password'
    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    this.login.type = 'button';
    this.login.className = 'button element__input';
    this.login.innerText = 'submit';
    this.form.appendChild(this.login);
    this.login.addEventListener('click', loginCallback);
    
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Login;