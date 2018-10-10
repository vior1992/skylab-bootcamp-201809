// TODO REGISTER
describe( 'logic', function(){

    describe ('logic.register', function(){
        it('should fail on invalid name', function(){
            var name;
            var surname = 'San';
            var username = 'asan';
            var password = '123';
            onSuccess = function(){};
            onFail = function(message){
                msg = message
            };

            logic.register(name, surname, username, password, onSuccess, onFail)
            expect(msg).toEqual('invalid name')
        })

        it('should fail on invalid surname', function(){
            var name = 'Ana';
            var surname;
            var username = 'asan';
            var password = '123';
            onSuccess = function(){};
            onFail = function(message){
                msg = message
            };

            logic.register(name, surname, username, password, onSuccess, onFail)
            expect(msg).toEqual('invalid surname')
        })

        it('should fail on invalid surname', function(){
            var name = 'Ana';
            var surname = 'San';
            var username;
            var password = '123';
            onSuccess = function(){};
            onFail = function(message){
                msg = message
            };

            logic.register(name, surname, username, password, onSuccess, onFail)
            expect(msg).toEqual('invalid username')
        })

        it('should fail on invalid password', function(){
            var name = 'Ana';
            var surname = 'San';
            var username = 'asan';
            var password;
            onSuccess = function(){};
            onFail = function(message){
                msg = message
            };

            logic.register(name, surname, username, password, onSuccess, onFail)
            expect(msg).toEqual('invalid password')
        })

        
        it('should fail on first callback non-function', function(){
            var name = 'Ana';
            var surname = 'San';
            var username = 'asan';
            var password= '123';
            onSuccess = 1;
            onFail = function(){}
            expect(function() {logic.register(name, surname, username, password, onSuccess, onFail)}).toThrowError(TypeError, onSuccess + ' is not a function')
        })
        it('should fail on second callback non-function', function(){
            var name = 'Ana';
            var surname = 'San';
            var username = 'asan';
            var password= '234';
            onSuccess =  function(){};
            onFail = 1;
            expect(function() {logic.register(name, surname, username, password, onSuccess, onFail)}).toThrowError(TypeError, onFail + ' is not a function')
        })

        it('should succed on saving the variables', function(){
            var name = 'Ana';
            var surname = 'San';
            var username = 'asan';
            var password = '123';
            onSuccess = function(){};
            onFail = function(){};

            logic.register(name, surname, username, password, onSuccess, onFail)
            expect(user.name).toEqual('Ana')
            expect(user.surname).toEqual(surname)
            expect(user.username).toEqual(username)
            expect(user.password).toEqual(password)
        })

        it('should succed on saving the variables', function(){
            var name = 'Ana';
            var surname = 'San';
            var username = 'asan';
            var password = '123';

            logic.register(name, surname, username, password, function(){
                expect(user.name).toEqual('Ana')
                expect(user.surname).toEqual(surname)
                expect(user.username).toEqual(username)
                expect(user.password).toEqual(password)
            },function(message){
                throw Error(message)
            })
        })

    })


});
