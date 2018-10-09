function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing'; //para definir el color de fondo luego en sass

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

function Login(title, tag, matchCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this._username = document.createElement('input');

    this._username.placeholder = "Username";

    this._username.className = 'userL';

    this.form.appendChild(this._username);

    this._password = document.createElement('input');

    this._password.placeholder = "Password";

    this._password.className = 'passL';

    this._password.type = "password";

    this.form.appendChild(this._password);

    this.login = document.createElement('button');

    this.login.innerText = 'Login';

    this.login.type='button';

    this.login.addEventListener('click', matchCallback);

    this.form.appendChild(this.login);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Register(title, tag, saveDataCallback) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.label = document.createElement('label');

    this.label.innerText = "First Name";

    this.form.appendChild(this.label);

    this.firstname = document.createElement('input');

    this.form.appendChild(this.firstname);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);




    this.label = document.createElement('label');

    this.label.innerText = "Last Name";

    this.form.appendChild(this.label);

    this.lastname = document.createElement('input');

    this.form.appendChild(this.lastname);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);



    this.label = document.createElement('label');

    this.label.innerText = "Postal Code";

    this.form.appendChild(this.label);

    this.PC = document.createElement('input');

    this.form.appendChild(this.PC);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);



    this.label = document.createElement('label');

    this.label.innerText = "Username";

    this.form.appendChild(this.label);

    this.username = document.createElement('input');

    this.username.className = 'userr';

    this.form.appendChild(this.username);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);



    this.label = document.createElement('label');

    this.label.innerText = "Password";

    
    this.form.appendChild(this.label);
    
    this.password = document.createElement('input');
    
    this.password.className = 'passs';

    this._password.type = "password";
    
    this.form.appendChild(this.password);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);



    this.label = document.createElement('label');

    this.label.innerText = "Confirm password";

    this._password.type = "password";

    this.form.appendChild(this.label);

    this.confirmPass = document.createElement('input');

    this.form.appendChild(this.confirmPass);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);

    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);


    
    this.br = document.createElement('br');
    
    this.form.appendChild(this.br);
    
    this.register = document.createElement('button');

    this.register.innerText = 'Register';
    
    this.register.type='button';

    this.register.addEventListener('click', saveDataCallback);

    this.form.appendChild(this.register);
}

Register.prototype = Object.create(Panel.prototype);
Register.prototype.constructor = Register;



function Welcome(title, tag) {
    Panel.call(this, title, tag);

    this.element.style.display = 'none';

    this.welcome = document.createElement('h1');
    this.welcome.innerText = 'Amazing Website!';

    this.element.appendChild(this.welcome);
}

Welcome.prototype = Object.create(Panel.prototype);
Welcome.prototype.constructor = Welcome;