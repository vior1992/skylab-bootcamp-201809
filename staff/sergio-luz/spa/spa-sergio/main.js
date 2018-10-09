

var landing = new Landing('Choose an option', 'section',
    function () {
        landing.hide();
        register.show();
    },
    function () {
        landing.hide();
        login.show();
    });
document.body.appendChild(landing.element);

var register = new Register('Register', 'section', function () {
    var name = document.getElementsByName("_name")[0].value;
    var surname = document.getElementsByName("_surname")[0].value;
    var username = document.getElementsByName("_username")[0].value;
    var password = document.getElementsByName("_password")[0].value;
    var repeatPass = document.getElementsByName("_repeatPass")[0].value;

    console.log(name, surname, username, password, repeatPass);
    var result = safeBox.saveData(name, surname, username, password, repeatPass);

    console.log(safeBox.checkData(password, username));
    if (result) {
        register.hide();
        login.show();
        //login.flex();
    } else {
        //document.getElementsByName('errors_register')[0].innerText = error.message;
    }
})
document.body.appendChild(register.element);

var login = new Login('Login', 'section', function () {
    
    var username = document.getElementsByName("confirm_username")[0].value;
    var password = document.getElementsByName("confirm_password")[0].value;

    var error;
    try {
        var result = safeBox.checkData(password, username);
    } catch (err) {
        error = err;
    }

    if (result) {
        login.hide();
        welcome.show();
        login_errors.hide();
    } else {
        login_errors.show();
        login_errors.errors.innerText='hola';
        //login.hide();
        // var text=document.getElementsByClassName("errors_login")[0].innerText;
        // text.innerText=error.message.innerText;
        //        // var text = document.getElementByClassName("errors_login").innerText;
        // console.log(text);
    }
});
document.body.appendChild(login.element);


var welcome = new Welcome('Welcome!', 'section', function () {
    welcome.hide();
    landing.show();
});
document.body.appendChild(welcome.element);

var login_errors=new Login_Errors('Error','section', function (){
    login_errors.hide();
    login.show();
});
document.body.appendChild(login_errors.element);