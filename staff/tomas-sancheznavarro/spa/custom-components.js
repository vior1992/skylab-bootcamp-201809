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
    this.username.placeholder = 'Enter userame';
    this.form.appendChild(this.username);


    this.password = document.createElement('input');
    this.password.placeholder = 'Enter password';
    this.form.appendChild(this.password);


    this.login = document.createElement('button');
    this.login.type = 'button';
    this.login.innerText = 'Login';


    this.login.addEventListener('click', loginCallback);

    this.form.appendChild(this.login);
}
Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome
function Register(title, tag, registerCallback, loginCallback) {

    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.form = document.createElement('form');
    this.element.appendChild(this.form);
    this.form.addEventListener('submit', function (event) {
        event.preventDefault(); // previene que se recargue el formulario (comportamiento por default)
        console.log('dadasdas');
    })

    this.name = document.createElement('input');
    this.form.appendChild(this.name);
    this.name.name = 'name';
    this.name.placeholder = 'name';

    this.lastname = document.createElement('input');
    this.form.appendChild(this.name);
    this.lastname.name = 'last name';
    this.lastname.placeholder = 'last name';

    this.password = document.createElement('input');
    this.form.appendChild(this.password);
    this.password.name = 'password';
    this.password.type = 'password';
    this.password.placeholder = 'password';

    this.repeatPassword = document.createElement('input');
    this.form.appendChild(this.repeatPassword);
    this.password.name = 'repeatPassword';
    this.repeatPassword.type = 'password';
    this.repeatPassword.placeholder = 'repeat password';

    //Confirm button
    this.register = document.createElement('button');
    this.register.type = 'button';
    this.register.addEventListener('click', loginCallback);
    this.form.appendChild(this.register);
    this.register.innerText = 'Register';
}


Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;

function Welcome(title, tag) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none'; // o this.hide() heredado de Components

    this.welcome = document.createElement('h1');
    this.welcome.innerText = 'Welcome To Skylab!';
    this.element.appendChild(this.welcome);
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;