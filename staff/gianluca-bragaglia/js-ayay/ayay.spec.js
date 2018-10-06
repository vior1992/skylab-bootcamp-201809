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


    describe('pop', function () {
        it('should pop items', function () {
            
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var lastItem = ayay.pop();
            

            expect(ayay.length).toEqual(2);
            expect(lastItem).toEqual(3);

            
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

    describe('map', function () {
        it('should returns the value of the first element in the array that satisfies the provided testing function', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.map(function (elem, index) {result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });
    });

    /*describe('sort', function () {
        it('should sorts the elements of an array', function () {
            ayay.push(12);
            ayay.push(3);
            ayay.push(15);

            //var result = [];

            ayay.sort();
            
            expect(ayay).toEqual([3, 12, 15]);
            
        });
    }); */

    describe('filter', function () {
        it('creates a new array with all elements that pass the test implemented by the provided function', function () {
            ayay.push(12);
            ayay.push(3);
            ayay.push(15);

            var result = [];

            result = ayay.filter(greater);
            function greater(item) {
                return item > 4;
            }

            
            expect(result.length).toEqual(2);
            result.forEach(function(item) {
                expect(item).toBeGreaterThan(3);
            });
            
        });
    });

    describe('find', function () {
        it('returns the value of the first element in the array that satisfies the provided testing function', function () {
            ayay.push(12);
            ayay.push(3);
            ayay.push(15);

            var result;

            result = ayay.find(greater);
            function greater(item) {
                return item > 4;
            }
 
            expect(result).toEqual(12);       
        });
    });

});