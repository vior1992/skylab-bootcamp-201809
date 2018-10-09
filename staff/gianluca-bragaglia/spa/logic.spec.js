// TODO

describe('spa/logic', function () {
    var user;
    user = {
        email: email,
        username: username,
        password: password
    };
    var email;
    var username;
    var password;


    describe('register', function () {
        it('should succeed if username and password are valid', function () {

            logic.login('gi@gio.it', 'gia', '123', 
                function(){

            },
            function(message) {
                alert(message);
            });

            expect(user.password).toEqual('123');
            expect(user.username).toEqual('gia');
        }); 
        
       /*  it('should fail if no username is passed', function () {
            user = {
                username: undefined,
                password: 123
            };

            expect(function(){
                logic.login();
            }).toThrowError('invalid username');
        }); */
    });
});
