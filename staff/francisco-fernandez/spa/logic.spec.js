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

    //for username
    it('should fail on undefined username', function()  {
        logic.register('Jhon', 'Doe', undefined, '123',
            function(){
                //expect(message).not.toBeDefined();
                throw Error(message);
        },
            function(message){
                expect(message).toEqual('invalid username');

        });

    });
    it('should fail on null username', function () {
        logic.register('Jhon', 'Doe', null, '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid username');
            }
        );
    });

    it('should fail on empty username', function () {
        logic.register('Jhon', 'Doe', '', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid username');
            }
        );
    });

    it('should fail on blank username', function () {
        logic.register('Jhon', 'Doe', '      \t\n', '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid username');
            }
        );
    });

    it('should fail on non-string username (object)', function () {
        logic.register('Jhon', 'Doe', {}, '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid username');
            }
        );
    });

    it('should fail on non-string username (number)', function () {
        logic.register('Jhon', 'Doe', 123, '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid username');
            }
        );
    });

    it('should fail on non-string username (boolean)', function () {
        logic.register('Jhon', 'Doe', true, '123',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid username');
            }
        );
    });

    // for password

    it('should fail on undefined password', function()  {
        logic.register('Jhon', 'Doe', 'jd', undefined,
            function(){
                //expect(message).not.toBeDefined();
                throw Error(message);
        },
            function(message){
                expect(message).toEqual('invalid password');

        });

    });
    it('should fail on null password', function () {
        logic.register('Jhon', 'Doe', 'jd', null,
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid password');
            }
        );
    });

    it('should fail on empty password', function () {
        logic.register('Jhon', 'Doe',  'jd', '',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid password');
            }
        );
    });

    it('should fail on blank password', function () {
        logic.register('Jhon', 'Doe', 'jd',  '      \t\n',
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid password');
            }
        );
    });

    it('should fail on non-string password (object)', function () {
        logic.register('Jhon', 'Doe', 'jd', {},
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid password');
            }
        );
    });

    it('should fail on non-string password (number)', function () {
        logic.register('Jhon', 'Doe', 'jd', 123,
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid password');
            }
        );
    });

    it('should fail on non-string password (boolean)', function () {
        logic.register('Jhon', 'Doe', 'jd', true,
            function () {
                throw Error();
            },
            function (message) {
                expect(message).toEqual('invalid password');
            }
        );
    });

    it('should throw error on null success callback', function () {
        expect(function () {
            logic.register('John', 'Doe', 'jd', '123',
                null,
                function (message) {
                    throw Error(message); // new Error(message);
                }
            );
        }).toThrowError(TypeError, 'null is not a function');
    });

    it('should throw error on undefined success callback', function () {
        expect(function () {
            logic.register('John', 'Doe', 'jd', '123',
                undefined,
                function (message) {
                    throw Error(message); // new Error(message);
                }
            );
        }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should throw error on null success callback', function () {
        expect(function () {
            logic.register('John', 'Doe', 'jd', '123',
                null,
                function (message) {
                    throw Error(message); // new Error(message);
                }
            );
        }).toThrowError(TypeError, 'null is not a function');
    });

    it('should throw error on non-function success callback (string)', function () {
        expect(function () {
            logic.register('John', 'Doe', 'jd', '123',
                '',
                function (message) {
                    throw Error(message); // new Error(message);
                }
            );
        }).toThrowError(TypeError, ' is not a function');
    });

    it('should throw error on non-function success callback (boolean)', function () {
        expect(function () {
            logic.register('John', 'Doe', 'jd', '123',
                true,
                function (message) {
                    throw Error(message); // new Error(message);
                }
            );
        }).toThrowError(TypeError, 'true is not a function');
    });

    // TODO implement analog cases for fail callback

    // afterEach(function() {
    //     user = undefined;
    // });
});

    

