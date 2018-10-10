describe('logic', function () {


    describe('register', function () {
        beforeEach(function () {
            user = undefined;
        });
        it('should succeed in correct data', function () { //onSuccess
            logic.register('John', 'Doe', 'jd', '123', function () {
                    expect(user.name).toEqual('John');
                    expect(user.surname).toEqual('Doe');
                    expect(user.username).toEqual('jd');
                    expect(user.password).toEqual('123');
                },
                function (message) { //onFail
                    //expect(message).not.toBeDefined();
                    throw Error(message);
                }
            );
        });

        it('should fail on undefined name', function () { //onSuccess
            logic.register(undefined, 'Doe', 'jd', '123', function () {
                    throw Error();
                },
                function (message) { //onFail
                    expect(message).toEqual('invalid name');
                }

            );
        });

        it('should fail on empty name', function () { //onSuccess
            logic.register('', 'Doe', 'jd', '123', function () {
                    throw Error();
                },
                function (message) { //onFail
                    expect(message).toEqual('invalid name');
                }

            );
        });

        it('should fail on blank name', function () { //onSuccess
            logic.register('         ', 'Doe', 'jd', '123', function () {
                    throw Error();
                },
                function (message) { //onFail
                    expect(message).toEqual('invalid name');
                }
            );
        });

        it('should fail on non-string name (number)', function () { //onSuccess
            logic.register(123, 'Doe', 'jd', '123', function () {
                    throw Error();
                },
                function (message) { //onFail
                    expect(message).toEqual('invalid name');
                }
            );
        });

        it('should fail on non-string name (boolean)', function () { //onSuccess
            logic.register(true, 'Doe', 'jd', '123', function () {
                    throw Error();
                },
                function (message) { //onFail
                    expect(message).toEqual('invalid name');
                }
            );
        });

        // TODO apply analog cases: surname, username, and password

    });

    describe('login', function () {
        beforeEach(function () {
            user = {
                name: 'John',
                surname: 'Doe',
                username: 'jd',
                password: '123'
            };
        });

        it('should succeed on correct credentials', function () {
            logic.login('jd', '123', function (user) {
                    expect(user).toBeDefined();
                    expect(user.name).toEqual('John');
                    expect(user.surname).toEqual('Doe');
                    expect(user.username).toEqual('jd');
                    expect(user.password).toEqual('123');
                },
                function (message) {
                    throw Error(message);
                }
            );
        });

    });
});