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
        it('should pop items', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var lastItem = ayay.pop();

            expect(ayay.length).toEqual(2);
        });
    });

    describe('map', function () {
        it('should map items', function () {
            //var result = new Ayay;
            var result = [];

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            
            ayay.map(function (element, index) {
                result[index] = element*2;
                //result.map(element * 2);
            });
            
            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

    });

    describe('sort', function () {
        it('should sort items on array', function () {
            
            ayay.push(1);
            ayay.push(30);
            ayay.push(4);
            ayay.push(21);
            
            ayay.sort();
            
            expect(ayay.length).toEqual(4);
            expect(ayay[0]).toEqual(1);
            expect(ayay[1]).toEqual(21);
            expect(ayay[2]).toEqual(30);
            expect(ayay[3]).toEqual(4);
        });
    });

    describe('filter', function () {
        it('should filter items', function () {
            var result = new Ayay;

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
                  
            result = ayay.filter(isGreaterThan);
            function isGreaterThan(item) {
                return item > 2
            }

            expect(result.length).toEqual(1);

            result.forEach(function (elem, index) {
                expect(elem).toBeGreaterThan(2);
            });
            
        });
        
    });

    describe('find', function () {
        it('should find items', function () {
            var result = [];

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
                  
            result = ayay.find(2);

            expect(result).toBe(2);
            
        });
        
    });

});