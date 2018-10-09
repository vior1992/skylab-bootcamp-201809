function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.element.className = 'landing';  // esto es para los estilos

    this.title.className = 'landing__title';

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);
    this.register.className = 'landing__button';

    this.element.appendChild(this.register);

    this.element.appendChild(document.createTextNode(' or '));

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);
    this.login.className = 'landing__button';

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;

function Login(title, tag, loginCallback, backCallback) {
    Panel.call(this, title, tag);

    //this.element.style.display = 'none';
    this.element.className = 'login';

    this.title.className = 'login__title';

    this.hide();

    this.form = document.createElement('form');

    this.element.appendChild(this.form);

    this.username = document.createElement('input');

    this.form.appendChild(this.username);

    this.password = document.createElement('input');

    this.form.appendChild(this.password);

    this.login = document.createElement('button');

    this.login.type = "button";

    this.login.addEventListener('click',loginCallback);

    this.form.appendChild(this.login);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

function Register(title, tag, registerCallback, backCallback) {  //backcallback añadido
    Panel.call(this, title, tag);

    this.element.className = 'register';

    this.title.className = 'register__title';

    this.hide(); // desde primer momento esto no se debe ver

    this.form = document.createElement('form');  // se crea el constructor para facilidad 
    this.form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = this.name.value;
        var surname = this.surname.value;
        var username = this.username.value;
        var password = this.password.value;

        registerCallback(name, surname, username, password);
    }.bind(this));  // (?) necesito acceder al this del objeto padre (?)

    // this.element.style.display = 'none'; (?) substituido por linea 64

    // this.form = document.createElement('form');  puesto en el objeto

    this.element.appendChild(this.form);

    this.name = document.createElement('input');
    this.name.className = 'register__input';
    this.name.placeholder = 'name';  // placeholder para el form

    this.form.appendChild(this.name);

    this.surname = document.createElement('input');
    this.surname.className = 'register__input';
    this.surname.placeholder = 'surname';

    this.form.appendChild(this.surname);

    this.username = document.createElement('input');
    this.username.className = 'register__input';
    this.username.placeholder = 'username';

    this.form.appendChild(this.username);

    this.password = document.createElement('input');
    this.password.className = 'register__input';
    this.password.type = 'password';
    this.password.placeholder = 'password';

    this.form.appendChild(this.password);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.className = 'register__button';
    // this.register.type = "button";  desaparecido ?
    // this.register.addEventListener('click',registerCallback);  desaparecido ?
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
}

Welcome.prototype = Object.create(Panel.prototype);

Welcome.prototype.constructor = Welcome;