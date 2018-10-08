function Landing(title, tag, registerCallback, loginCallback) {
    Panel.call(this, title, tag);

    this.register = document.createElement('button');
    this.register.innerText = 'Register';
    this.register.addEventListener('click', registerCallback);

    this.element.appendChild(this.register);

    this.login = document.createElement('button');
    this.login.innerText = 'Login';
    this.login.addEventListener('click', loginCallback);

    this.element.appendChild(this.login);
}

Landing.prototype = Object.create(Panel.prototype);
Landing.prototype.constructor = Landing;


function Login(title, tag, loginCallback, backCallback) {
    Panel.call(this, title, tag);

    this.hide();

    this.inputs = [{Username:"username"}, {Password:"password"}];

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


    this.login = document.createElement('button');
    this.login.type = "button";
    this.login.innerText = "Login";

    this.back = document.createElement('button');
    this.back.type = "button";
    this.back.innerText = "Back";

    this.login.addEventListener("click", eve => {
        loginCallback(this.element.username.value, this.element.password.value);
    });

    this.back.addEventListener("click", eve => {
        backCallback();
    });

    this.element.appendChild(this.login);
    this.element.appendChild(this.back);
}

Login.prototype = Object.create(Panel.prototype);
Login.prototype.constructor = Login;
Login.prototype.show = function(){
    this.element.reset();
    this.__proto__.__proto__.show.call(this);
    this.element.username.focus();
};



// TODO Register & Welcome


function Register(tag, registerCallback) {
    Component.call(this, tag);
    var username;
    var password;

    this.hide();

    this.getUsername = function(){
        return username;
    }

    this.getPassword = function(){
        return password;
    }

   
    this.inputs = [{FirstName:"firstname"}, {LastName:"lastname"}, {Addres:"addres"},{Email:"email"},{Phone:"phone"},{Username:"username"},{Password:"password"}];

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

    var button = document.createElement("button");
    button.type = "button";
    button.innerText = "Send";
    button.addEventListener("click", x => {
        username = this.element.username.value;
        password = this.element.password.value;
        registerCallback();
       
    });
    this.element.appendChild(button);
   
}

Register.prototype = Object.create(Component.prototype);
Register.prototype.constructor = Register;
Register.prototype.show = function(){
    this.element.reset();
    this.__proto__.__proto__.show.call(this);
    this.element.firstname.focus();
};



