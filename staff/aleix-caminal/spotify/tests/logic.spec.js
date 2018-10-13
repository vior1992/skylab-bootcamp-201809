describe('Logic', function () {
    describe('search', function () {
        it('should fail on non-function callback', function () {
            expect(function() {
                var form = document.createElement('form');
                LOGIC.search(form);
            }).toThrowError('callback is not a function');
        });
    });
});
