describe('logic', function () {
    
    
    describe('register', function () {
        var name;
        var email;
        var username;
        var password;
        beforeEach(function () {
            name = 'ma';
            email = 'ma@ma.com';
            username = 'maryam';
            password = '123';
            user = undefined; //important per a netejar el user
        });
            it('should fail on undefined name', function () {
                name = undefined;
                var msg;
                logic.register(name, email, username, password, function () {
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid name');
            });
            it('should fail on undefined username', function () {
                username = undefined;
                var msg;
                logic.register(name, email, username, password, function () {
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid username');
            });
            it('should fail on undefined email', function () {
                email = undefined;
                var msg;
                logic.register(name, email, username, password, function () {
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid email');
            });
            it('should fail on undefined password', function () {
                password = undefined;
                var msg;
                logic.register(name, email, username, password, function () {
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid password');
            });
            //també es pot comprovar en empty
            it('should fail on blanck name', function () {
                name = '   ';
                var msg;
                logic.register(name, email, username, password, function () {
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid name');
            });
            it('should fail on blanck username', function () {
                username = '   ';
                var msg;
                logic.register(name, email, username, password, function () {
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid username');
            });
            it('should fail on blanck email', function () {
                email = '   ';
                var msg;
                logic.register(name, email, username, password, function () {
                    //Aquí podria posar un throw Error, per si un cas entra en aquesta funció. És convenient fer-ho així! En tots els exemples.
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid email');
            });
            it('should fail on blanck password', function () {
                password = '   ';
                var msg;
                logic.register(name, email, username, password, function () {
                }, function (message) {
                    msg = message;
                });
                expect(msg).toEqual('invalid password');
            });
            it('should fail on non-string name', function(){
                //mirar del seu exemple

            }, function(){

            });
            it('should throw error on undefined succes callback', function(){
                //mirar del seu exemple
            })
            it('should succeed on keeping user data', function(){

                var error;
                logic.register(name, email, username, password, function(){
                    error = false
                }, function(){
                    error = true;
                    //Aquí podria posar un throw Error, ja que en aquest expect no hi ha de passar. I si hi passa jasmin em mostrarà un error
                });
                expect(error).toEqual(false);
                expect(user.name).toEqual(name);
                expect(user.email).toEqual(email);
                expect(user.username).toEqual(username);
                expect(user.password).toEqual(password);
                //Aquests 4 ultims expects podrien directament anar dins de la 1º funció, i no caldria la variable error
            });
            afterEach(function(){
                user = undefined;
            }); //es pot posar aquest o el beforeEach

    });

    describe('login', function () {
        // var username;
        // var password;
        
        // beforeEach(function() {
        //     username = 'maryam';
        //     password= '123';
        // }); 
        it('should fail on undefined username', function () {
            var username = undefined;
            var password;
            var msg;
            logic.login(username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid username');
        });
        it('should fail on blank username', function () {
            var username = '    ';
            var password;
            var msg;
            logic.login(username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid username');
        });
        it('should fail on undefined password', function () {
            var username = 'maryam';
            var password = undefined;
            var msg;
            logic.login(username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid password');
        });
        it('should fail on blank password', function () {
            var username = 'maryam';
            var password = '    ';
            var msg;
            logic.login(username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid password');
        });
        it('should succeed on correct username and password', function () {

            logic.register('m', 'm', 'maryam', '123', function () { }, function () { })//Hauria d'intentar prescindir del register, per si fallés el register. hauria de posar-ho com a user = {name:'sss', username:.....}; Però en el beforeEach
            var username = 'maryam';
            var password = '123';
            var error;
            logic.login(username, password, function () {
                error = false;
            }, function (message) {
                error = true;
            });
            expect(error).toEqual(false);
        });
        it('should fail on incorrect username', function () {

            logic.register('m', 'm', 'maryam', '123', function () { }, function () { })
            var username = 'mar';
            var password = '123';
            var error;
            var msg;
            logic.login(username, password, function () {
                error = false;
            }, function (message) {
                error = true;
                msg = message
            });
            expect(error).toEqual(true);
            expect(msg).toEqual('wrong credentials!');
        });
        it('should fail on incorrect password', function () {

            logic.register('m', 'm', 'maryam', '123', function () { }, function () { })
            var username = 'maryam';
            var password = '13';
            var error;
            var msg;
            logic.login(username, password, function () {
                error = false;
            }, function (message) {
                error = true;
                msg = message
            });
            expect(error).toEqual(true);
            expect(msg).toEqual('wrong credentials!');
        }); 
    });

});