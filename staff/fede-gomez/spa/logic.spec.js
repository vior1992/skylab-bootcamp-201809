describe('SPA', function () {

    beforeEach(function() {
        //Something to execute before each describe
    });

    describe('register', function () {
        it('register the correct values', function () {

            var name = 'Fede';
            var surname = 'Gomez';
            var username = 'Username';
            var password = '123';
            
            var expectedName = name;
            var expectedSurname = surname;
            var expectedUsername = username;
            var expectedPassword = password;

            logic.register(name, surname, username, password);

           expect(user.name).toEqual(expectedName);
           expect(user.surname).toEqual(expectedSurname);
           expect(user.username).toEqual(expectedUsername);
           expect(user.password).toEqual(expectedPassword);
        });
        
    });
});