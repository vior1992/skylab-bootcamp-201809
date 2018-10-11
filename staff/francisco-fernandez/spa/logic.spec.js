// TODO
describe('logic', function(){
    describe('register', function(){
        beforeEach(function(){
            user = undefined;
        });
    });
    

    it('should succeed on correct data', function () {
        logic.register('John', 'Doe', 'jd', '123',
            function () {
                expect(user.name).toEqual('John');
                expect(user.surname).toEqual('Doe');
                expect(user.username).toEqual('jd');
                expect(user.password).toEqual('123');
            },
            function (message) {
                //expect(message).not.toBeDefined();
                throw Error(message);
            }
        );
    });

    it('should fail on undefined name', function()  {
        logic.register(undefined, 'Doe', 'jd', '123',
            function(){
                //expect(message).not.toBeDefined();
                throw Error(message);
        },
            function(message){
                expect(message).toEqual('invalid name');

        });

    });
    it('should fail on null name', function () {
        logic.register(null, 'Doe', 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid name');
            }
        );
    });

    it('should fail on empty name', function () {
        logic.register('', 'Doe', 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid name');
            }
        );
    });

    it('should fail on blank name', function () {
        logic.register('    \t\n', 'Doe', 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid name');
            }
        );
    });

    it('should fail on non-string name (object)', function () {
        logic.register({}, 'Doe', 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid name');
            }
        );
    });

    it('should fail on non-string name (number)', function () {
        logic.register(123, 'Doe', 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid name');
            }
        );
    });

    it('should fail on non-string name (boolean)', function () {
        logic.register(true, 'Doe', 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid name');
            }
        );
    });
    // TODO apply analog cases for: sursurname, usersurname, and password
    it('should fail on undefined surname', function()  {
        logic.register('Jhon', undefined, 'jd', '123',
            function(){
                //expect(message).not.toBeDefined();
                throw Error(message);
        },
            function(message){
                expect(message).toEqual('invalid surname');

        });

    });
    it('should fail on null surname', function () {
        logic.register('Jhon', null, 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid surname');
            }
        );
    });

    it('should fail on empty surname', function () {
        logic.register('Jhon', '', 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid surname');
            }
        );
    });

    it('should fail on blank surname', function () {
        logic.register('Jhon', '    \t\n', 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid surname');
            }
        );
    });

    it('should fail on non-string surname (object)', function () {
        logic.register('Jhon', {}, 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid surname');
            }
        );
    });

    it('should fail on non-string surname (number)', function () {
        logic.register('Jhon', 123, 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid surname');
            }
        );
    });

    it('should fail on non-string surname (boolean)', function () {
        logic.register('Jhon', true, 'jd', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid surname');
            }
        );
    });
});
