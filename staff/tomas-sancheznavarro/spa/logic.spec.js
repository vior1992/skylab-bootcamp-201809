describe('logic', function () {
    var user;

    beforeEach(function () {
        user = {
            name: 'Tomás',
            surname: 'Sánchez',
            username: 'calvino',
            password: '123'
        };
    });

    describe('login', function () {
        it('should push one or more items', function () {
            ayay.push(1, 2, 3);

            expect(ayay.length).toEqual(3);

            for (var i = 0; i < ayay.length; i++)
                expect(ayay[i]).toEqual(i + 1);
        });

        it('should continue being an ayay', function () {
            ayay.push(1, 2, 3);
            expect(ayay instanceof Ayay).toBe(true);
        });
    });
});