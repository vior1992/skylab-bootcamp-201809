// TODO
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

        //TO IMPLEMENT VALIDATION ON LOGIC - con throw Error
        // it('should fail on first callback non-function', function(){
        //     var name = 'Ana';
        //     var surname = 'San';
        //     var username = 'asan';
        //     var password;
        //     onSuccess = 1;
        //     onFail = function(message){
        //         msg = message
        //     };

        //     logic.register(name, surname, username, password, onSuccess, onFail)
        //     expect(msg).toEqual('invalid password')
        // })

         //TO IMPLEMENT VALIDATION ON LOGIC - con throw Error
        // it('should fail on non-callback', function(){
        //     var name = 'Ana';
        //     var surname = 'San';
        //     var username = 'asan';
        //     var password;
        //     onSuccess = 1;
        //     onFail = function(message){
        //         msg = message
        //     };

        //     logic.register(name, surname, username, password, onSuccess, onFail)
        //     expect(msg).toEqual('invalid password')
        // })

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

    })

    describe ('logic.register', function(){
        it('should fail on invalid name', function(){
            var name;
            var surname = 'Sanjuan';
            var username = 'asan';
            var password = '123';
            onSuccess = function(){};
            onFail = function(message){
                msg = message
            };

            logic.register(name, surname, username, password, onSuccess, onFail)
            expect(msg).toEqual('invalid name')
        })

    })


});
