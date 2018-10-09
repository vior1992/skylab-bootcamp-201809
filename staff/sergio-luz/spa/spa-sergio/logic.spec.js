// TODO


describe('Save data in safeBox', function(){
    it('Data should be set', function(){
        var name='sergio';
        var surname='luz';
        var username='slf';
        var password='olala';
        var repeatPass='olala';

        var result = safeBox.saveData(name, surname, username, password, repeatPass);

        expect(result).toEqual(true);
    })
});