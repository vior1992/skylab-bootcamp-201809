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

    this.form.appendChild(this.login);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;

// TODO Register & Welcome

function Register(tag, submitCallback) {
    Component.call(this, tag);

    this.element.style.display = 'none';
    this.inputs = [{FirstName:"firstname"}, {LastName:"lastname"}, {Addres:"addres"},{Email:"email"},{Phone:"phone"}];
    this.button = document.createElement("button");
    this.button.type = "submit";
    this.button.innerText = "Send";

    this.inputs.forEach((x,i) => {

        var groupfield = document.createElement('div');
        var label = document.createElement('label');
        var input = document.createElement('input');
        for(var key in x){
            label.innerText = key;
            input.placeholder = key;
            input.name  = x[key];
            input.id = x[key];
        }
        groupfield.appendChild(label);
        groupfield.appendChild(input);
        this.element.appendChild(groupfield);
        


    });

    this.element.appendChild(this.button);
    this.addAsChild(document.body);

}

Register.prototype = Object.create(Component.prototype);
Register.prototype.constructor = Register;