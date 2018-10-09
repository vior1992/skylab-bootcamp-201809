var landing = new Landing("¡¡¡Welcome to WebComponents!!!", "section", function () {


    var register = new Register("form", function (username, password) {

        try{
            safeBox.setCredentials(username, password);
            register.hide();
            landing.show();
        }catch(err){
            var error = new Alert("¡¡¡ERROR!!!", err.message,"section", function () {
                error.hide();
                register.show();

            }, true)
            error.show();
            error.render(document.body);
            register.hide();
        }
    },function(){

        register.hide();
        landing.show();
    });
    register.render(document.body);
    register.show();
    landing.hide();

}, function () {

    var login = new Login("LOGIN", "form", function (username, password) {

        if ((username === safeBox.getCredentials().username) && (safeBox.getCredentials().password === password)) {
            var welcome = new Alert("¡¡¡WELCOME!!!", "Bienvenido a los Web Components", "section", function () {

                welcome.hide();
                login.hide();
                landing.show();

            });
            welcome.render(document.body);
            welcome.show();
            login.hide();
        }
        else {
            var error = new Alert("¡¡¡ERROR!!!", "The credentials are incorrect", "section", function () {
                error.hide();
                login.show();

            }, true)
            error.show();
            error.render(document.body);
            login.hide();
        }

    }, function () {
        login.hide();
        landing.show();
    });
    login.render(document.body);
    login.show();
    landing.hide();

});

landing.render(document.body);