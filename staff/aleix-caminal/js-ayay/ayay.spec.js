describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay(1, 2, 3);
    });

    describe('push', function () {
        it('should push items', function () {
            ayay.push(4);

            expect(ayay.length).toEqual(4);

            for (var i = 0; i < ayay.length; i++) {
                expect(ayay[i]).toEqual(i + 1);
            }
        });
    });

    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should fail on non-function callback', function () {
            expect(function() {
                ayay.forEach();
            }).toThrowError('callback is not a function');
        });

    });

    describe('pop', function () {
        it('should remove last element', function () {
            var original = new Ayay();
            ayay.forEach(function (elem, index) {
                original[index] = elem;
                original.length++;
            });

            var result = ayay.pop();

            expect(result).toEqual(original[original.length - 1]);
            expect(ayay.length).toEqual(original.length - 1);

            ayay.forEach(function (elem, index) {
                expect(elem).toEqual(original[index]);
            });
        });
    });

    describe('map', function () {
        it('should fail on non-function callback', function () {
            expect(function() {
                ayay.map();
            }).toThrowError('callback is not a function');
        });
    });
});
