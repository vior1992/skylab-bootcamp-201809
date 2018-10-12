// // TODO ...
describe("Using callbacks", function () {

    
    describe('failing call (slow test)', function(){
        beforeEach(function () {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
            
        });

        it('failing call (slow test)', function (done) {
            logic.call('/search/all?q=fanta',
                function (res) {
                    expect(res).toEqual(false);
                    done();
                }, false);
        });

        afterEach(function () {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
            
        });

    });
    
    describe('function call', function () {

        it('should return no-undefined', function (done) {
            logic.call('/search/all?q=hello',
                function (res) {
                    expect(res instanceof Object).toEqual(true);
                    done();
                });
        });

        it('should return successfully the correct message', function (done) {
            logic.call('/search/all?q=mahou',
                function (res) {
                    expect(res).toEqual(result_mahou);
                    done();
                });
        });

        it('should fail when path is not a string (null)', function (done) {
            expect(function () {
                logic.call(null,
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('null is not a string');
            done();
        });

        it('should fail when path is not a string (undefined)', function (done) {
            expect(function () {
                logic.call(undefined,
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('undefined is not a string');
            done();
        });

        it('should fail when path is not a string (num)', function (done) {
            expect(function () {
                logic.call(123,
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('123 is not a string');
            done();
        });

        it('should fail when path is not a string (boolean)', function (done) {
            expect(function () {
                logic.call(true,
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('true is not a string');
            done();
        });

        it('should fail when path is not a string (array)', function (done) {
            expect(function () {
                logic.call([1, 2],
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('1,2 is not a string');
            done();
        });

        it('should fail when path is not a string (object)', function (done) {
            expect(function () {
                logic.call({
                        ob: 'ject'
                    },
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('[object Object] is not a string');
            done();
        });

        it('should fail when path is not a string (function)', function (done) {
            expect(function () {
                logic.call(function () {},
                    function (res) {
                        throw Error(res);
                    }, ' ',
                    function (message) {}
                );
            }).toThrowError('function () {} is not a string');
            done();
        });

        it('should fail when callback is not a function (string)', function (done) {
            expect(function () {
                logic.call('/search/all?q=mahou',
                    'undefined', ' ');
            }).toThrowError('callback is not a function');
            done();
        });

        it('should fail when callback is not a function (num)', function (done) {
            expect(function () {
                logic.call('/search/all?q=mahou',
                    123, ' ');
            }).toThrowError('callback is not a function');
            done();
        });

        it('should fail when callback is not a function (boolean)', function (done) {
            expect(function () {
                logic.call('/search/all?q=mahou',
                    true, ' ');
            }).toThrowError('callback is not a function');
            done();
        });

        it('should fail when callback is not a function (array)', function (done) {
            expect(function () {
                logic.call('/search/all?q=mahou',
                    [1, 2], ' ');
            }).toThrowError('callback is not a function');
            done();
        });

        it('should fail when callback is not a function (object)', function (done) {
            expect(function () {
                logic.call('/search/all?q=mahou', {
                    ob: [1, 2]
                }, ' ');
            }).toThrowError('callback is not a function');
            done();
        });

        it('should fail when callback is not a function (null)', function (done) {
            expect(function () {
                logic.call('/search/all?q=mahou',
                    null, ' ');
            }).toThrowError('callback is not a function');
            done();
        });
    });

});