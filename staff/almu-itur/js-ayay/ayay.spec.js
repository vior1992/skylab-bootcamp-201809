describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
        
    });

    describe('push', function () {
        it('should push one item', function () {
            ayay.push(1);

            expect(ayay.length).toEqual(1);
            expect(ayay[0]).toEqual(1);
        }); 
        
        it('should push more than one element', function () {
            
            var ayay = new Ayay;
            ayay.push(1, 2, 3);

            expect(ayay.length).toEqual(3);
        
            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });


        it('should be able to push a function', function () {
            ayay.push(function (a, b) {
                return a + b
            })
            expect(ayay[0] instanceof Function).toEqual(true);
        });

        it('should be able to push a string', function () {
            ayay.push('pepito')
            expect(typeof ayay[0]).toBe('string');
        });

        it('should be able to push a number', function () {
            ayay.push(10)
            expect(typeof ayay[0]).toBe('number');
        });

        it('should be able to push a boolean', function () {
            ayay.push(true)
            expect(typeof ayay[0]).toBe('boolean');
        });

        it('should be able to push an object', function () {
            var o = {}
            ayay.push(o)
            expect(typeof ayay[0]).toBe('object');
        });


        it('should return the new length of ayay', function () {
            
            var ayay = new Ayay;
            var newLength;
            
            newLength = ayay.push(1, 2, 3, 4);
            
            expect(newLength).toEqual(4);
        });

    });

    
    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1, 2, 3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should keep same length', function () {
            ayay.push(1, 2, 3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);
            
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

        it('should return last element of ayay', function () {
            var elementTest = 3;
            var lastItem;

            ayay.push(1);
            ayay.push(2);
            ayay.push(elementTest);
            lastItem = ayay.pop();
        
            expect(lastItem).toEqual(elementTest);
        });

        it('should reduce length by one unit', function () {
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