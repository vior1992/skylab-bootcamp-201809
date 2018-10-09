var credentials = {
    userNames: ['seand52'],
    password: ['skylab']
}

var landing = new Landing('Choose an option', 'section',
    function () {
        landing.hide();
        register.show();
    },
    function () {
        landing.hide();
        login.show();
    });

document.querySelector(".container").appendChild(landing.element);

var login = new Login('Login', 'section', function () {
    var userNameCorrect = false;
    var passwordCorrect = false;
    credentials.userNames.forEach(function (el) {
        if (document.querySelector(".login__username").value === el) {
            return userNameCorrect = true;
        }
    })

    credentials.password.forEach(function (el) {
        if (document.querySelector(".login__password").value === el) {
            return passwordCorrect = true;
        }
    })
    if (userNameCorrect && passwordCorrect) {
        login.hide();
        welcome.show();
    }
    else {
            wrongCredentials.element.style.display = 'block';
    }

}, function () {
    login.hide();
    register.show();

});

document.querySelector(".container").appendChild(login.element);

var wrongCredentials = new Credentials('Wrong password!', 'section');
document.querySelector(".login").appendChild(wrongCredentials.element);

var register = new Register('Register Now!', 'section', function() {
    var email = document.querySelector('.register__email');
    var fullName = document.querySelector('.register__fullname');
    var userName = document.querySelector('.register__username');
    var password = document.querySelector('.register__password');
    var arr = [email, fullName, userName, password]; 
    var hasBlank = false;
    arr.forEach(function(el) {
        if (el.value==="") {
            hasBlank=true;
            wrongRegister.element.style.display = 'block';
        }        
    })
    if (!hasBlank) {                
        credentials.userNames[credentials.userNames.length] = userName.value;
        credentials.password[credentials.password.length]= password.value;
        register.hide();
        login.show();
    }
});

document.querySelector(".container").appendChild(register.element);

var wrongRegister = new Credentials("Can't have blank fields!", 'section');
document.querySelector(".register").appendChild(wrongRegister.element);

var welcome = new Welcome('Welcome to the app!', 'section');

document.querySelector(".container").appendChild(welcome.element);




// function checkCredentials() {
//     credentials.userNames.forEach(function(el) {
//         if (document.querySelector(".testone").value===el) {
//             return userNameCorrect = true;
//         }
//     })

//     credentials.password.forEach(function(el) {
//         if (document.querySelector(".testtwo").value === el) {
//             return passwordCorrect = true;
//         }
//     })


// }