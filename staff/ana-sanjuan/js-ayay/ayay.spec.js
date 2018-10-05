describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should push items', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

    });

    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });

        });
    });


    describe('pop', function () {
        it('should pop an item', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var last = ayay[ayay.length-1];
            var length = ayay.length;

            var result;

            result = ayay.pop();

            expect(result).toBeTruthy();
            expect(result).toEqual(last);
            expect(ayay.length).toEqual(length-1);
           
        });
    });

    describe('map', function () {
        it('should map items in new array', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);


            var result;
            var callback = function(elem) { return elem * 2 }
            var validate = [2,4,6]

            result = ayay.map(callback);
            
            expect(result).toBeTruthy();
            for (var i = 0; i < ayay.length; i++){
                expect(result[i]).toEqual(validate[i]);
            }
            
            expect(ayay.length).toEqual(result.length);
           
        });
    });
});