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
        
        it('should return the length of the ayay even if no element is passed as argument', function () {
            ayay.push(1);   
            ayay.push(2);
            ayay.push(3);
            ayay.push(4);

            var returnedValue = ayay.push();
            
            expect(returnedValue).toEqual(4);
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
        it('should remove and return last element of the ayay', function () {
            ayay.push(1);
            ayay.push(2);
            ayay.push(3);

            var lastElem = ayay[2];
            var poppedElem = ayay.pop();

            expect(poppedElem).toEqual(lastElem);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
            
        });
    });
});