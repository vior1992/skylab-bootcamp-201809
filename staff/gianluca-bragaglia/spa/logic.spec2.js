// TODO

describe('logic', function () {
    
    
    describe('register', function () {

        it('should succeed on correct data', function () {

            logic.register('gia@gia.com', 'gian', '123', 
            function () {
                expect(user.email).toEqual('gia@gia.com');
                expect(user.username).toEqual('gian');
                expect(user.password).toEqual('123');
            }, function (message) {
                throw Error(message);
            });
        });

        it('should fail on undefined email', function () {

            logic.register(undefined, 'gian', '123', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid email');    
            });
        });

        it('should fail on empty email', function () {

            logic.register('', 'gian', '123', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid email');    
            });
        });

        it('should fail on blank email', function () {

            logic.register('   ', 'gian', '123', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid email');    
            });
        });

        it('should fail on no string email (boolean)', function () {

            logic.register(true, 'gian', '123', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid email');    
            });
        });

        /* it('should throw error on undefined success callback', function () {

            expect(function() {
                logic.register('gig@gig.com', 'gian', '123', 
            undefined,
            function (message) {
                throw Error(message);    
            });
            }).toThrowError(TypeError + 'undefined is not a function')
        }); */
        
    });

    describe('login', function () {
        beforeEach(function(){
            user = {
                username: 'gian',
                password: '123'
            }
        });

        it('should succeed on correct credentials', function () {
            logic.login('gian', '123', 
            function (user) {
                expect(user).toBeDefined();
                expect(user.username).toEqual('gian');
                expect(user.password).not.toBeDefined();
            }, function (message) {
                throw Error(message);
            });
        }); 
        
    }); 

}); 