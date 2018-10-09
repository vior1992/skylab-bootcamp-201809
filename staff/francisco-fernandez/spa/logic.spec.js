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
    });

    describe('login', function(){
        it ('should launch on succes if username and password are correct', function(){
            
            user = {name: 'Paco',surname: 'Fdez',username: 'Pacus',password: '123'};
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