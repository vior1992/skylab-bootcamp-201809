// TODO
describe('logic', function(){
    var user = {name: 'name',surname: 'surname',username: 'username',password: 'username'};
    var name;
    var surname;
    var username;
    var password;
    var error;
    var message;

    beforeEach(function(){
        name = 'Paco';
        surname = 'Fdez';
        username = 'Pacus';
        password = '123';
    });

    describe('register', function(){
        it ('should save the input elements', function(){
            debugger
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
});