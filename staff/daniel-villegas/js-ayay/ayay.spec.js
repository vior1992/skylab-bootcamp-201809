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
        it('should return result element * 2', function () {
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
        it('should return new array with numbers *3', function () {
            var ayay = new Ayay();

            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            ayay.push(4);

            var result = [];
            
            ayay.map(function(elem, index) { result[index] = elem * 3; });

            expect(result.length).toEqual(ayay.length);

            result.forEach(function (elem, index) {
                expect(elem).toEqual(ayay[index] * 3);
            });
        });
    });

    describe('pop', function () {
        it('should delete the last item', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);
            ayay.pop();
           
            expect(ayay.length).toEqual(2);

        });
    });    

    describe('filter', function () {
        it('should create new array with elements that satisfy the test (>5)', function () {
            var ayay = new Ayay();
        
            ayay.push(6);
            ayay.push(4);
            ayay.push(9);
            ayay.push(2);

            var result = ayay.filter(function(elem, index) { return elem > 5; });
           
            expect(result.length).toEqual(2);

        });
    });  
    
    describe('find', function () {
        it('should returns the value of the first element in the array that satisfies the provided testing function', function () {
            var ayay = new Ayay();
        
            ayay.push(6);
            ayay.push(15);
            ayay.push(24);
            ayay.push(39);
            
            var result = ayay.find(function(elem, index) { return elem > 16});
           
            expect(result).toEqual(24);

        });
    });  

});