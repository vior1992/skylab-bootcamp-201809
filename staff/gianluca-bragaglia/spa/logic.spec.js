// TODO

describe('logic', function () {
    
    
    describe('register', function () {
        
        beforeEach(function () {
            email = 'gia@Ga.com';
            username = 'gian';
            password = '123'; 
        });

        var email;
        var username;
        var password;
        
        it('should fail on undefined email', function () {
            email = undefined;
            var msg;
            logic.register(email, username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid email');
        });
        it('should fail on undefined username', function () {
            username = undefined;
            var msg;
            logic.register(email, username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid username');
        });
        it('should fail on undefined password', function () {
            password = undefined;
            var msg;
            logic.register(email, username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid password');
        });
        it('should fail on blanck username', function () {
            username = '   ';
            var msg;
            logic.register(email, username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid username');
        });
        it('should fail on blanck email', function () {
            email = '   ';
            var msg;
            logic.register(email, username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid email');
        });
        it('should fail on blanck password', function () {
            password = '   ';
            var msg;
            logic.register(email, username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid password');
        });
        it('should succeed on keeping user data', function(){

            var error;
            logic.register(email, username, password, function(){
                error = false
            }, function(){
                error = true;
            });
            expect(error).toEqual(false);
            expect(user.email).toEqual(email);
            expect(user.username).toEqual(username);
            expect(user.password).toEqual(password);
        });
      

    });

    describe('login', function () {
        
        beforeEach(function () {
            email = 'gia@Ga.com';
            username = 'gian';
            password = '123'; 
        });

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
            var username = 'gian';
            var password = undefined;
            var msg;
            logic.login(username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid password');
        });
        it('should fail on blank password', function () {
            var username = 'gian';
            var password = '    ';
            var msg;
            logic.login(username, password, function () {
            }, function (message) {
                msg = message;
            });
            expect(msg).toEqual('invalid password');
        }); 
        it('should succeed on correct username and password', function () {

            logic.register('e', 'gian', '123', function () { }, function () { })
            var username = 'gian';
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

            logic.register('p', 'gian', '123', function () { }, function () { })
            var username = 'gol';
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

            logic.register('p', 'gian', '123', function () { }, function () { })
            var username = 'gian';
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