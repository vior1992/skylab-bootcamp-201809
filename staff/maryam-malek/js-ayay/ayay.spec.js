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
        // it('should fail on non-ayay', function () {
        //     var p = undefined;
        //     expect(function() {ayay.push(p);}).toThrowError(TypeError, p + ' is not a valid ayay')

        // });
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
        // it('should fail on non-ayay', function () {
        //     var p = undefined;
        //     ayay.push(p);
        //     expect(function() {ayay.forEach(function (elem, index) { 
        //         var result = [];
        //         result[index] = elem * 2; });}).toThrowError(TypeError, p + ' is not a valid ayay')
        // });
    });
    describe('pop', function () {
        it('should iterate on valid ayay', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var last = ayay[ayay.length-1];
            var result = ayay.pop();
            
            expect(ayay.length).toEqual(2);
            expect(result).toEqual(last);
            
        });
        // it('should fail on non-ayay', function () {
        //     var p = null;
        //     expect(function() {ayay.pop(p);}).toThrowError(TypeError, p + ' is not a valid ayay')
        
        // });
    });
    describe('map', function () {
        it('should succeed on iterating an array and multiply by 2', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var result = ayay.map(function(elem, i){return elem * 2});
            var comprovation = [2,4,6];

            expect(result).toBeTruthy();

            for(var i = 0; i<ayay.length; i++){
                expect(result[i]).toEqual(comprovation[i]);
            }

            expect(result.length).toEqual(ayay.length);
            
        });
        // it('should fail on non-ayay', function () {
        //     var p = null;
        //     expect(function() {ayay.map();}).toThrowError(TypeError, p + ' is not a valid ayay')
        
        // });
    });
    describe('filter', function () {
        it('should succeed on returning an array with the elements that pass the callback requirement', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);


            var result = ayay.filter(function(elem, i){return elem > 2});
            var comprovation = [3];
            expect(result).toBeTruthy();

            for(var i = 0; i<ayay.length; i++){
                expect(result[i]).toEqual(comprovation[i]);
            }

            expect(result.length).toEqual(comprovation.length);
            
        });
        
    });

    describe('find', function () {
        it('should succeed on returning the first element that pass the callback requirement', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);


            var result = ayay.find(function(elem){return elem > 1});
            var comprovation = 2;
            expect(result).toBeTruthy();

            expect(result).toEqual(comprovation);

            expect(result.length).toEqual(comprovation.length);
            
        });
        
    });

    describe('sort', function () {
        it('should succeed on sorting the elements of the array', function () {
            ayay.push(1);
            ayay.push(3);
            ayay.push(2);


            var result = ayay.sort();
            var comprovation = [1,2,3];
            expect(result).toBeTruthy();

            for(var i = 0; i<ayay.length; i++){
                expect(result[i]).toEqual(comprovation[i]);
            }
            expect(result.length).toEqual(comprovation.length);
            
        });
        
    });
});