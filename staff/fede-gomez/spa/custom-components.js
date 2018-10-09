function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.register = document.createElement('button');
    this.register.className = 'btn btn-success';
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);

    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.className = 'btn btn-primary';
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
    this.username.placeholder = "username";

    this.password = document.createElement('input');

    this.form.appendChild(this.password);
    this.password.placeholder = "password";
    this.password.type = "password";

    this.login = document.createElement('button');

    this.form.appendChild(this.login);
    this.login.innerText = "ok";
    this.login.className = "btn btn-primary";
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome

function Register (title, tag, registerCallback ) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.form = document.createElement('form');
    // this.form.addEventListener('submit', function(event){
    //     event.preventDefault();



    // }.bind(this));

    this.element.appendChild(this.form);

    this.name = document.createElement('input');
    this.form.appendChild(this.name);
    this.name.placeholder = "Name";

    this.surname = document.createElement('input');
    this.form.appendChild(this.surname);
    this.surname.placeholder = "Surname";

    this.username = document.createElement('input');
    this.form.appendChild(this.username);
    this.username.placeholder = "New username";

    this.password = document.createElement('input');
    this.form.appendChild(this.password);
    this.password.placeholder = "New password";

    this.password = document.createElement('input');
    this.form.appendChild(this.password);
    this.password.placeholder = "Repeat password";

    this.register = document.createElement('button');
    this.form.appendChild(this.register);
    this.register.innerText = "ok";
    this.register.className = "btn btn-primary";
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;


function Welcome (title, tag) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';


}