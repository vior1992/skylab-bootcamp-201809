// // TODO ...
describe("Using callbacks", function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL=20000;
    beforeEach(function (done) {
        setTimeout(function () {
            done();
        }, 1);
    });

    it('should return no-undefined', function (done) {
        logic.call('/search/all?q=hello',
            function (res) {
                expect(res instanceof Object).toEqual(true);
                done()
            });
    });

    it('should return successfully the correct message', function (done) {
        logic.call('/search/all?q=mahou',
            function (res) {
                expect(res).toEqual(result_mahou);
                done()
            });
    });

    // it('should fail when path is not correct', function (done) {
    //     logic.call('/search/all?q=',
    //         function (res) {
    //             expect(res).toEqual(undefined);
    //             done()
    //         });
    // });

    it('should fail when callback is not a function (string)', function (done) {
        
       // expect(logic.call('/search/all?q=mahou', 'function')).toThrowError('callback is not a function');

        expect(function () {
            logic.call('/search/all?q=mahou',
                'undefined',' ',
                function (message) {
                    throw Error(message);
                }
            );
        }).toThrowError('callback is not a function');
    });


});