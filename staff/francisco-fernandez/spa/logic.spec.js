// TODO
describe('logic', function(){
    var user = {name: 'name',surname: 'surname',username: 'username',password: 'username'};
    var name;
    var surname;
    var username;
    var password;
    var error;
   

    beforeEach(function(){
        name = 'Paco';
        surname = 'Fdez';
        username = 'Pacus';
        password = '123';
    });

    describe('register', function(){
        it ('should save the input elements', function(){

            logic.register(name,surname,username,password,
                
            function () {
                
                user.name = name;
                user.surname = surname;
                user.username = username;
                user.password = password;
            },
            function (message) {
                
                alert(message);
            });
            
            expect(user.name).toEqual(name);
            expect(user.surname).toEqual(surname);
            expect(user.username).toEqual(username);
            expect(user.password).toEqual(password);
        });
        it ('should send on fail invalid name', function(){
            name = '';
            var p;
            logic.register(name,surname,username,password,
                
            function () {
                
                user.name = name;
                user.surname = surname;
                user.username = username;
                user.password = password;
            },
            function (message) {
                p = message;
            });
            
            expect(p).toEqual('invalid name');
            
        });
        it ('should send on fail invalid surname', function(){
            surname = '';
            var p;
            logic.register(name,surname,username,password,
                
            function () {
                
                user.name = name;
                user.surname = surname;
                user.username = username;
                user.password = password;
            },
            function (message) {
                p = message;
            });
            
            expect(p).toEqual('invalid surname');
            
        });
        it ('should send on fail invalid username', function(){
            username = undefined;
            var p;
            logic.register(name,surname,username,password,
                
            function () {
                
                user.name = name;
                user.surname = surname;
                user.username = username;
                user.password = password;
            },
            function (message) {
                p = message;
            });
            
            expect(p).toEqual('invalid username');
            
        });
    });

    describe('login', function(){
        beforeEach (function(){
            
            logic.register(name,surname,username,password,
                
                function () {
                    
                    user.name = name;
                    user.surname = surname;
                    user.username = username;
                    user.password = password;
                },
                function (message) {
                    
                    alert(message);
                });

        });
        it ('should launch on succes if username and password are correct', function(){
            
            var message = 0;

            logic.login(username,password,
                
            function () {
               message = 'succes';
            },
            function (message) {
                
            });
            expect(message).toEqual('succes');
        });
    });
});