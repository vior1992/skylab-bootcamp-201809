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

            ayay.pop();

            expect(ayay.length).toEqual(2);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });
    });

    describe('forEach', function () {
        it('should apply the callback to each element of the ayay', function () {
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

        it('should return error if callback is not a function', function () {
            // ayay.push(1);
            var callback = 1;
            expect(function (){
                forEach(callback);
            }).toThrow();
            
        });
    });

    describe('map', function () {
        it('should apply the callback to each element of the ayay and return a new ayay', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.map(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });
    });

    describe('sort', function () {
        it('should sort an ayay', function () {
            ayay.push('bison');
            ayay.push('aligator');
            ayay.push('zebra');

            result = new Ayay;

            result.push('aligator');
            result.push('bison');
            result.push('zebra');

            ayay.sort();

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(result[index]).toEqual(ayay[index]);
            });
        });
    });

    describe('filter', function () {
        it('should filter an ayay', function () {
            var result = new Ayay;

            ayay.push(1,2,3);

            result = ayay.filter(isGreatThan);
            function isGreatThan(item){
                return item > 2;
            }
            
            expect(result.length).toEqual(1);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(3)});
            
        });

        it('should return an empty ayay if condition is not accomplished', function () {
            var result = new Ayay;

            ayay.push(1,2,3);

            result = ayay.filter(isGreatThan);
            function isGreatThan(item){
                return item < 1;
            }
            
            expect(result.length).toEqual(0);
          
        });
    });

    describe('find', function () {
        it('should find the first matching element', function () {
            
            ayay.push(3,5,1);
            
            result = ayay.find(isGreatThan);
            function isGreatThan(item){
                return item > 3;
            }

            expect(result).toEqual(5);
                
        });
    });
});