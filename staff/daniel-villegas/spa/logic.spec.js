describe('logic', function(){
/////Register tests///////////////////////////////////////////////////////////////////////////
    describe('register', function() {
        it('should give us the parameters introduced for the user', function () {
            
            logic.register('Dani', 'falso@gmail.com', '1234', '1234', 
                function(){
                    expect(user.username).toEqual('Dani');
                    expect(user.email).toEqual('falso@gmail.com');
                    expect(user.password).toEqual('1234');
                    expect(user.repeatPassword).toEqual('1234');
    
                },
                function(message){
                    throw Error(message);
                },
            );
        });
    
        it('should give us an error if name is not the same', function () {
            
            logic.register(undefined, 'falso@gmail.com', '1234', '1234', 
                function(){
                    throw Error();
                },
                function(message){
                    expect(message).toEqual('User name not valid');
                },
            ); 
        });

        it('should give us an error if name is empty', function () {
            
            logic.register(' ', 'falso@gmail.com', '1234', '1234', 
                function(){
                    throw Error();
                },
                function(message){
                    expect(message).toEqual('User name not valid');
                },
            );
        });

        it('should give us an error if name is a object', function () {
            
            logic.register({ }, 'falso@gmail.com', '1234', '1234', 
                function(){
                    throw Error();
                },
                function(message){
                    expect(message).toEqual('User name not valid');
                },
            );
        });

        it('should give us an error if name is a boolean', function () {
            
            logic.register(true, 'falso@gmail.com', '1234', '1234', 
                function(){
                    throw Error();
                },
                function(message){
                    expect(message).toEqual('User name not valid');
                },
            );
        });
    //Hacer lo mismo con los demas parametros: null y undefined 
        it('should give us an error if callback is undefined', function () {
            expect(function () {
                logic.register("Dani", 'falso@gmail.com', '1234', '1234', 
                    undefined,
                    function(message){
                        throw Error(message);
                    },
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        })
    });
/////Login tests///////////////////////////////////////////////////////////////////////////
    describe('login', function () {
        it('ssssssss', function() {
        
        })
    })
/////Welcome tests///////////////////////////////////////////////////////////////////////////
    describe('welcome', function () {
        it('', function() {
            
            
        })
    })
})