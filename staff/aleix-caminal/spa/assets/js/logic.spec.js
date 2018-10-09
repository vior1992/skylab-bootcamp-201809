describe('Logic', function () {
    describe('register', function () {
        it('should fail on non form argument', function () {
            expect(function() {
                logic.register({});
            }).toThrowError('no form passed as argument');
        });

        it('should fail on non-function callback', function () {
            expect(function() {
                var form = document.createElement('form');
                logic.register(form);
            }).toThrowError('callback is not a function');
        });
    });

    describe('login', function () {
        it('should fail on non form argument', function () {
            expect(function() {
                logic.login({});
            }).toThrowError('no form passed as argument');
        });

        it('should fail on non-function callback', function () {
            expect(function() {
                var form = document.createElement('form');
                logic.login(form);
            }).toThrowError('callback is not a function');
        });
    });

    describe('logout', function () {
        it('should fail on non-function callback', function () {
            expect(function() {
                var form = document.createElement('form');
                logic.logout(form);
            }).toThrowError('callback is not a function');
        });
    });
});
