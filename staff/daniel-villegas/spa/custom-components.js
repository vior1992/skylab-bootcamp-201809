/////////////////////Landing/////////////////////////////////////////
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

/////////////////////Register/////////////////////////////////////////
function Register(title, tag, registerCallback, backCallback) {
    Panel.call(this, title, tag);

    this.hide();

    this.form = document.createElement('form');
    this.form.addEventListener('submit', function(event){
        event.preventDefault();

        var username = this.username.value;
        var email = this.email.value;
        var password = this.password.value;
        var repeatPassword = this.repeatPassword.value;

        registerCallback(username, email, password, repeatPassword);
    }.bind(this));
    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.placeholder = 'username';
    this.form.appendChild(this.username);

    this.email = document.createElement('input');
    this.email.placeholder = 'email';
    this.form.appendChild(this.email);

    this.password = document.createElement('input');
    this.password.placeholder = 'password';
    this.password.type = 'password';
    this.form.appendChild(this.password);

    this.repeatPassword = document.createElement('input');
    this.repeatPassword.placeholder = 'Repeat password';
    this.repeatPassword.type = 'password';
    this.form.appendChild(this.repeatPassword);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = "buttons";
    this.form.appendChild(this.register);

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.addEventListener('click', backCallback);

    this.element.appendChild(this.back);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

/////////////////////Login/////////////////////////////////////////
function Login(title, tag, welcomeCallback, backCallback) {
    Panel.call(this, title, tag);

    this.hide();

    this.form = document.createElement('form');

    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = this.username.value
        var password = this.password.value

        welcomeCallback(username, password);
    }.bind(this));

    this.element.appendChild(this.form);

    this.username = document.createElement('input');
    this.username.placeholder = 'username';
    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.placeholder = 'password';
    this.password.type = 'password';
    this.form.appendChild(this.password);

    this.send = document.createElement('button');
    this.send.innerText = 'Send';
    this.send.className = "buttons";
    
    this.form.appendChild(this.send);

    this.back = document.createElement('a');
    this.back.href = '#';
    this.back.innerText = 'Back';
    this.back.addEventListener('click', backCallback);

    this.element.appendChild(this.back);
    
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;



/////////////////////Welcome/////////////////////////////////////////
function Welcome(title, tag, alertCallback) {
    Panel.call(this, title, tag);

    this.form = document.createElement('form');;

    this.element.appendChild(this.form);

    this.element.style.display = 'none';

    this.alert = document.createElement('button');
    this.alert.type='button';
    this.alert.innerText = 'Enter';
    this.alert.className = "buttons";
    this.alert.addEventListener('click', alertCallback);

    this.form.appendChild(this.alert);

}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;

