describe('logic', function () {

        var name;
        var surname;
        var username;
        var password;

    beforeEach(function() {  
        name= 'pepe';
        surname= 'garcia';
        username= 'pepeg';
        password= '1234';

    });

    describe('register', function () {
        it('succes case', function () {

        logic.register(name, surname, username, password,
            function () {
                error = false;

            },
            function (message){
                msg = message;
                error = true;
            }
        );
            expect(!error).toBeTruthy();
        });

        it('should fail saving on undefined username', function () {

            username = "";
            logic.register(name, surname, username, password,
                function () {
                    error = false;
    
                },
                function (message){
                    msg = message;
                    error = true;
                }
            );
                expect(msg).toEqual('invalid username');
            });

        it('should fail saving on undefined password', function () {

            password = "";
            logic.register(name, surname, username, password,
                function () {
                    error = false;
    
                },
                function (message){
                    msg = message;
                    error = true;
                }
            );
                expect(msg).toEqual('invalid password');
            });

            it('should fail saving on undefined surname',function () {
    
                surname = "";
                logic.register(name, surname, username, password,
                    function () {
                        error = false;
        
                    },
                    function (message){
                        msg = message;
                        error = true;
                    }
                );
                    expect(msg).toEqual('invalid surname');
                });

            it('should fail saving on undefined name', function () {
    
                name = "";
                logic.register(name, surname, username, password,
                    function () {
                        error = false;
        
                    },
                    function (message){
                        msg = message;
                        error = true;
                    }
                );
                    expect(msg).toEqual('invalid name');
                });

    });


        describe('login', function () {

            beforeEach(function() {
                logic.register(name, surname, username, password, function(){}, function(){});
            });
            
            it('succes case', function () {

            logic.login(username, password,
                function () {
                    error = false;

                },
                function (message){
                    msg = message;
                    error = true;
                }
            );
                expect(!error).toBeTruthy();
            });


            it('should fail saving on undefined username', function () {
                
                username = "";
                logic.login(username, password,
                function () {
                    error = false;
        
                },
                function (message){
                    msg = message;
                    error = true;
                }
            );
                expect(msg).toEqual('invalid username');
            });

            it('should fail saving on undefined password', function () {

                password = "";
                
                logic.login(username, password,
                function () {
                    error = false;
        
                },
                function (message){
                    msg = message;
                    error = true;
                }
            );
                expect(msg).toEqual('invalid password');
            });

            it('wrong credentialsd', function () {

                password = "pepe";
                username = "1234";
                
                logic.login(username, password,
                function () {
                    error = false;
        
                },
                function (message){
                    msg = message;
                    error = true;
                }
            );
                expect(msg).toEqual('wrong credentials!');
            });

    });  
   
});
