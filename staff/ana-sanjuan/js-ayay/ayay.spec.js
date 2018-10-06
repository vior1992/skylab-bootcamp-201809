describe('Ayay', function () {
    var ayay;

    beforeEach(function() {
        ayay = new Ayay;
    });

    describe('push', function () {
        it('should add items to the provided ayay ', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should add consecutive items to the provided ayay ', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            ayay.push(4, 5, 6);

            expect(ayay.length).toEqual(6);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should return the length of the modified ayay ', function () {
           
            var result; 
            result =  ayay.push(1, 2, 3);
            
            expect(ayay.length).toEqual(3);
            expect(result).toEqual(ayay.length);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);

        });

        it('should fail when applied to non-ayays ', function () {
           
            var notAyay = 1;

            expect(function() {notAyay.push(9);}).toThrowError(TypeError, 'not implemented! to do')
           // expect(function() {ayay.forEach(p);}).toThrowError( TypeError, p + ' is not a function');
        });

    });

    describe('forEach', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1, 2, 3);

            var result = [];

            ayay.forEach(function (elem, index) { result[index] = elem * 2; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 2);
            });

        });
        it('should fail on non-function callback', function () {
            ayay.push(1, 2, 3);
            var p = 1;

            expect(function() {ayay.forEach(p);}).toThrowError( TypeError, p + ' is not a function');

        });

        it('should fail on non-ayay ', function () {
            var notAyay = 1;
            var callback = function(){}

            expect(function() {notAyay.forEach(callback);}).toThrowError( TypeError, '.forEach can not be applied to this element');

        });

        it('should succeed on iterating an array and passing all specified data to callback', function () {
            ayay.push(1, 2, 3);

            var elements = [];
            var indexes = [];
            var arrays = [];
        
            ayay.forEach(function (element, index, array) {
                elements.push(element);
                
                indexes.push(index);
        
                arrays.push(array);
            });
        
            expect(elements).toBeTruthy();
            expect(indexes).toBeTruthy();
            expect(arrays).toBeTruthy();
            
            elements.forEach(function (elem, index) {
                expect(elem).toBeEqual(ayay[index])      
            });
        
            indexes.forEach(function (i, index) {
                expect(i).toBeEqual(index)      
            });
        
            arrays.forEach(function(array) {
                expect(array).toBeEqual(chars)
            });
        });



        


    });


    describe('pop', function () {
        it('should return last item and exclude it from array', function () {
            ayay.push(1, 2, 3);

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
        it('should iterate through the elements of the array and return the elements modified by the callback in new array', function () {
            ayay.push(1, 2, 3);


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

    describe('sort', function () {
        it('should sort elements in original array', function () {
            ayay.push(2);
            ayay.push(3);
            ayay.push(1);
            ayay.push(0);

            var validate = new Ayay

            validate.push(0);
            validate.push(1);
            validate.push(2);
            validate.push(3);


            ayay.sort();
            
            expect(ayay.length).toEqual(validate.length); 

            for (var i = 0; i < ayay.length; i++){
                expect(validate[i]).toEqual(ayay[i]);
            }
            
        });
    });


    describe('filter', function () {
        it('should returns the items of the array that satifies the callback condition ', function () {
            ayay.push(1, 2, 3);

            var result;
            var callback = function(elem) { return elem > 2 }
            var validate = 3;

            result = ayay.filter(callback);
            
            expect(result).toBeTruthy();
            expect(result).toEqual(validate); 

        });
    });

    describe('find', function () {
        it('should return the first element that satisfais the callback condition', function () {
            ayay.push(1, 2, 3);


            var result;
            var callback = function(elem) { return elem > 2 }
            var validate = 3;

            result = ayay.find(callback);
            
            expect(result).toBeTruthy();
            expect(result).toEqual(validate); 

        });
    });


});
