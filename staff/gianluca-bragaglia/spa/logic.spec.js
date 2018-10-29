// TODO

describe('logic', function () {
    
    
    describe('register', function () {

        beforeEach(function() {
            user = undefined;
        });

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

        //password
        it('should fail on undefined password', function () {

            logic.register('gia@gia.com', 'gian', undefined, 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');    
            });
        });

        it('should fail on empty password', function () {

            logic.register('gia@gia.com', 'gian', '', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');    
            });
        });

        it('should fail on blank password', function () {

            logic.register('gia@gia.com', 'gian', '   ', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');    
            });
        });

        it('should fail on no string password (boolean)', function () {

            logic.register('gia@gia.com', 'gian', true, 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid password');    
            });
        });

        //username
        it('should fail on undefined username', function () {

            logic.register('gia@gia.com', undefined,'123', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');    
            });
        });

        it('should fail on empty username', function () {

            logic.register('gia@gia.com', '', '123', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');    
            });
        });

        it('should fail on blank username', function () {

            logic.register('gia@gia.com', '   ', '123', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');    
            });
        });

        it('should fail on no string username (boolean)', function () {

            logic.register('gia@gia.com', false, '123', 
            function () {
                throw Error();
            }, function (message) {
                expect(message).toEqual('invalid username');    
            });
        });


        //onSuccess
        it('should throw error on undefined success callback', function () {
            expect(function () {
                logic.register('gia@gia.com', 'gian', '123',
                    undefined,
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        });

        it('should throw error on null success callback', function () {
            expect(function () {
                logic.register('gia@gia.com', 'gian', '123',
                    null,
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'null is not a function');
        });

        it('should throw error on non-function success callback (string)', function () {
            expect(function () {
                logic.register('gia@gia.com', 'gian', '123',
                    'hola',
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'hola is not a function');
        });

        it('should throw error on non-function success callback (boolean)', function () {
            expect(function () {
                logic.register('gia@gia.com', 'gian', '123',
                    false,
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'false is not a function');
        });

         //onFail       
        it('should throw error on undefined fail callback', function () {
            expect(function () {
                logic.register('gia@gia.com', 'gian', '123',
                    function() {
                        throw Error(message); // new Error(message);
                    },
                    undefined
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        });

        it('should throw error on null fail callback', function () {
            expect(function () {
                logic.register('gia@gia.com', 'gian', '123',
                    function() {
                        throw Error(message); // new Error(message);
                    },
                    null
                );
            }).toThrowError(TypeError, 'null is not a function');
        });

        it('should throw error on non-function fail callback (string)', function () {
            expect(function () {
                logic.register('gia@gia.com', 'gian', '123',
                    function() {
                        throw Error(message); // new Error(message);
                    },
                    'hola'
                );
            }).toThrowError(TypeError, 'hola is not a function');
        });

        it('should throw error on non-function fail callback (boolean)', function () {
            expect(function () {
                logic.register('gia@gia.com', 'gian', '123',
                    function() {
                        throw Error(message); // new Error(message);
                    },
                    true
                );
            }).toThrowError(TypeError, 'true is not a function');
        });
        
    });


    //LOGIN

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

        it('should fail on wrong username', function() {
            logic.login('jd-', '123',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('wrong credentials!');
                }
            );
        });

        it('should fail on wrong password', function() {
            logic.login('gian', '126',
                function() {
                    throw Error();
                },
                function(message) {
                    expect(message).toEqual('wrong credentials!');
                }
            );
        });


        //onSuccess
        it('should throw error on undefined success callback', function () {
            expect(function () {
                logic.login('gian', '123',
                    undefined,
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        });

        it('should throw error on null success callback', function () {
            expect(function () {
                logic.login('gian', '123',
                    null,
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'null is not a function');
        });

        it('should throw error on non-function success callback (string)', function () {
            expect(function () {
                logic.login('gian', '123',
                    'hola',
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'hola is not a function');
        });

        it('should throw error on non-function success callback (boolean)', function () {
            expect(function () {
                logic.login('gian', '123',
                    false,
                    function (message) {
                        throw Error(message); // new Error(message);
                    }
                );
            }).toThrowError(TypeError, 'false is not a function');
        });

         //onFail       
         it('should throw error on undefined fail callback', function () {
            expect(function () {
                logic.login('gian', '123',
                    function() {
                        throw Error(message); // new Error(message);
                    },
                    undefined
                );
            }).toThrowError(TypeError, 'undefined is not a function');
        });

        it('should throw error on null fail callback', function () {
            expect(function () {
                logic.login('gian', '123',
                    function() {
                        throw Error(message); // new Error(message);
                    },
                    null
                );
            }).toThrowError(TypeError, 'null is not a function');
        });

        it('should throw error on non-function fail callback (string)', function () {
            expect(function () {
                logic.login('gian', '123',
                    function() {
                        throw Error(message); // new Error(message);
                    },
                    'hola'
                );
            }).toThrowError(TypeError, 'hola is not a function');
        });

        it('should throw error on non-function fail callback (boolean)', function () {
            expect(function () {
                logic.login('gian', '123',
                    function() {
                        throw Error(message); // new Error(message);
                    },
                    true
                );
            }).toThrowError(TypeError, 'true is not a function');
        });
        
    }); 

}); 