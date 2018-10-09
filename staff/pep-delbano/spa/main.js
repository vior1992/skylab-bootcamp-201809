var savedName;
var savedPass;

var usernLogin;
var passLogin;



var landing = new Landing('Choose an option', 'section',
    function() { //registerCallback
       landing.hide();
       register.show();
    },
    function() { //loginCallback
        landing.hide();
        login.show();
    });

document.body.appendChild(landing.element);





var login = new Login('Login', 'section',
    function(){  //matchCallback tiene que comprobar que las var savedName y savedPass del global scope coincidan con el valor de los inputs del login

        usernLogin = document.getElementsByClassName("userL")[0].value;
        passLogin = document.getElementsByClassName("passL")[0].value;

        if(usernLogin == savedName && passLogin == savedPass){
            login.hide();
            welcome.show();
        }
    });

document.body.appendChild(login.element);




var register = new Register('Register','section',
function(){   //saveDataCallback tiene q definir las var savedName y savedPass del global scope, y abrir pagina de Login

    
    if(!(savedName === '' || savedName === null ) && !(savedPass === '' || savedPass === null)) {

            savedName = document.getElementsByClassName("userr")[0].value;
            savedPass = document.getElementsByClassName("passs")[0].value;
            
            register.hide();
            login.show(); 

        } else {
            alert("username and password are required!");
        }
        
});

document.body.appendChild(register.element);




var welcome = new Welcome ('Welcome','Section',
    function(){ //welcomeCallback, simplemente nos muestra la pagina welcome tras comprobar campos login
        login.hide();
        welcome.show();
    });

document.body.appendChild(welcome.element);