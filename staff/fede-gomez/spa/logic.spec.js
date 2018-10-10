describe('logic', function () {

    beforeEach(function() {
        //Something to execute before each describe
    });

    describe('register', function () {
        it('should register the correct values', function () {

            var name = 'Fede';
            var surname = 'Gomez';
            var username = 'Username';
            var password = '123';
            
            var expectedName = name;
            var expectedSurname = surname;
            var expectedUsername = username;
            var expectedPassword = password;

            logic.register(name, surname, username, password, function(){
                expect(user.name).toEqual(expectedName);
                expect(user.surname).toEqual(expectedSurname);
                expect(user.username).toEqual(expectedUsername);
                expect(user.password).toEqual(expectedPassword);
            }, 
            function(errorMessage){
                throw Error(errorMessage);
            });

           
        });

        afterEach(function(){
            //To do something after each "it". E.g: reset the User variable...
        });
        
    });
});