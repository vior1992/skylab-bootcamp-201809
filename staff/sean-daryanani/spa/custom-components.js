function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);
    this.register.className = 'button landing__button'

    this.element.appendChild(this.register);

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.login.className = 'button landing__button'

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, loginCallback, newUserCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';
    this.element.className = 'login'

    this.form = document.createElement('form');
    this.form.className = 'login__form'

    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.type='text';
    this.username.className = 'testone'
    this.username.placeholder = 'Username';
    this.username.className = 'input login__username'

    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.type='password';
    this.password.className = 'testtwo'
    this.password.placeholder = 'Password';
    this.password.className = 'input login__password'

    this.form.appendChild(this.password);

    this.login = document.createElement('button');
    this.login.type = 'button';
    this.login.innerText = 'Submit'
    this.login.addEventListener('click', loginCallback);
    this.login.className = 'button login__button'

    this.form.appendChild(this.login);

    this.newUser = document.createElement('p');
    this.newUser.innerText = 'New user?';
    this.element.appendChild(this.newUser);
    
    
    this.backToRegister = document.createElement('button');
    this.backToRegister.type = 'button';
    this.backToRegister.innerText = 'Register here';
    this.backToRegister.addEventListener('click', newUserCallback);
    this.backToRegister.className = 'button login__back-to-register'

    this.element.appendChild(this.backToRegister);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome

function Register(title, tag, registerCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';
    this.element.className = 'register'

    this.form = document.createElement('form');
    this.form.className = 'register__form'
    this.element.appendChild(this.form);
    
    this.email = document.createElement('input');
    this.email.type = 'email';
    this.email.placeholder = 'test1234@gmail.com';
    this.email.className = 'input register__email'

    this.form.appendChild(this.email);

    this.fullName = document.createElement('input');
    this.fullName.type = 'text';
    this.fullName.placeholder = 'John Smith';
    this.fullName.className = 'input register__fullname'

    this.form.appendChild(this.fullName);

    this.userName = document.createElement('input');
    this.userName.type = 'text';
    this.userName.placeholder = 'Username';
    this.userName.className = 'input register__username'

    this.form.appendChild(this.userName);

    this.password = document.createElement('input');
    this.password.type='password';
    this.password.placeholder = 'Password';
    this.password.className = 'input register__password'

    this.form.appendChild(this.password);

    this.register = document.createElement('button');
    this.register.type = 'button';
    this.register.innerText = 'Register Now';
    this.register.className = 'button register__submit'
    this.register.addEventListener('click', registerCallback)

    
    this.form.appendChild(this.register);

}
Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Welcome(title, tag) {
    Panel.call(this, title, tag);
    this.element.style.display = 'none';
    this.element.className = 'welcome'
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;


function Credentials(title, tag) {
    Panel.call(this, title, tag); 
    this.element.className = 'login__error'

    this.element.style.display = 'none';

}