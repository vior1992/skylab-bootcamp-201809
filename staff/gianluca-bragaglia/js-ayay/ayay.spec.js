describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should succeed if ayay length increment by 1', function () {
            ayay.push(1);

            expect(ayay.length).toEqual(1);

        });

        it('should succeed if push items', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should fail if no element is passed', function () {
            expect(function() {
              ayay.push();
            }).toThrowError('undefined is not a valid element');
        });;
    });


    describe('pop: should succeed if delete the last item of ayay', function () {
        it('should succeed if the ayay length is one less than the original', function () {
            
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            ayay.pop();

            expect(ayay.length).toEqual(2);
            
        });

        it('should succeed if return the last item', function () {
            
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            var lastItem = ayay.pop();

            expect(lastItem).toEqual(3);
            
        });

    });


    describe('forEach', function () {
        it('should succeed if ayay length is still the same', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

        });

        it('should should succeed if result is multiply by 2', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should fail if no function is passed', function () {
            expect(function() {
              ayay.forEach();
            }).toThrowError('undefined is not a function');
          });
      
          it('should fail if other thing than a function is passed', function () {
            expect(function() {
              ayay.forEach(1);
            }).toThrowError('1 is not a function');
          });


    });

    describe('map: should returns the value of the first element in the array that satisfies the provided testing function', function () {
        it('should succeed if ayay length should still the same', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.map(function (elem, index) {result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

        });

        it('should should succeed if the result is multiply by 2', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = [];

            ayay.map(function (elem, index) {result[index] = elem * 2; });

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });
        });

        it('should fail if no function is passed', function () {
            expect(function() {
              ayay.forEach();
            }).toThrowError('undefined is not a function');
        });

        it('should fail if other thing than a function is passed', function () {
            expect(function() {
              ayay.forEach(1);
            }).toThrowError('1 is not a function');
        });
    });

     

    describe('filter: creates a new array with all elements that pass the test implemented by the provided function', function () {
        it('should should succeed if items are greather than 4', function () {
            ayay.push(12);
            ayay.push(3);
            ayay.push(15);

            var result = [];

            result = ayay.filter(greater);
            function greater(item) {
                return item > 4;
            }
            
            expect(result.length).toEqual(2);
          
        });

        it('should should succeed if items are greather than 4', function () {
            ayay.push(12);
            ayay.push(3);
            ayay.push(15);

            var result = [];

            result = ayay.filter(greater);
            function greater(item) {
                return item > 4;
            }

            result.forEach(function(item) {
                expect(item).toBeGreaterThan(4);
            });
            
        });

        it('should fail if other thing than a function is passed', function () {
            expect(function() {
              ayay.filter(1);
            }).toThrowError('1 is not a function');
        });

        it('should fail if no function is passed', function () {
            expect(function() {
              ayay.filter();
            }).toThrowError('undefined is not a function');
        });
    });

    describe('find: returns the value of the first element in the array that satisfies the provided testing function', function () {
        it('should succeed if the first number is 12', function () {
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

        it('should fail if other thing than a function is passed', function () {
            expect(function() {
              ayay.find(1);
            }).toThrowError('1 is not a function');
        });

        it('should fail if no function is passed', function () {
            expect(function() {
              ayay.find();
            }).toThrowError('undefined is not a function');
        });
    });


    describe('sort: sorts the elements of an array in place and returns the array', function () {
        it('should succeed if return a,b,c', function () {

            ayay.push('c');
            ayay.push('a');
            ayay.push('b');

            var result = ['a', 'b', 'c'];

            ayay.sort();

            result.forEach(function (element, index) {
                expect(element).toEqual(ayay[index]);
            });
        }); 
        
        it('should succeed if ayay length is still the same', function () {

            ayay.push('c');
            ayay.push('a');
            ayay.push('b');

            ayay.sort();

            expect(ayay.length).toEqual(3);
        });
    });

    describe('includes: should succeed on determines if the array includes a certain element, returning true or false as appropriate', function () { 
        it('should succeed if ayay length is still the same', function () {

            ayay.push('c');
            ayay.push('a');
            ayay.push('b');

            var result = ayay.includes('a');

            expect(result).toEqual(true);

        });

        it('should fail if element is undefined', function () {
            expect(function() {
              ayay.includes();
            }).toThrowError('element is not defined');
        });
    });

});