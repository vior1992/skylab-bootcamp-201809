// TODO
describe('Logic', function () {
    var name = '';
    var surname = '';
    var username = '';
    var password = '';
    var repeatPass = '';
    var result=[];

    beforeEach(function () {
        name = 'sergio';
        surname = 'luz';
        username = 'slf';
        password = 'olalaolala';
        repeatPass = 'olalaolala';
        result=undefined;
    });

    describe('Save data in safeBox', function () {

        it('Data should be set', function () {

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result).toEqual(true);
        })

        it('Should fail when no-name', function () {
            name = '     ';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when name is a number', function () {
            name = '90';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when name contains symbols', function () {
            name = 'sergio!';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })


        it('Should fail when no-surname', function () {
            surname = '';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when surname is a number', function () {
            surname = '90';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when no-username', function () {
            username = '';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when username is a number', function () {
            username = '90';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when no-password', function () {
            password = '';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when password is a number', function () {
            password = '90';
            repeatPass='90';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when password has less than 8 characters', function () {
            password = 'hola';
            repeatPass='hola';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when no-repeatPassword', function () {
            repeatPass = '';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when Repeatpassword has less than 8 characters', function () {
            password = 'hola';
            repeatPass='hola';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail when passwords are not equal', function () {
            repeatPass = 'ola';

            result = safeBox.saveData(name, surname, username, password, repeatPass);
            expect(result instanceof Array).toEqual(true);
        })
    });

    describe('Retrieve data of safeBox', function () {

        it('Data should be retrieved successfully', function () {
            safeBox.saveData(name, surname, username, password, repeatPass);

            result = safeBox.checkData(password, username);
            expect(result).toEqual(true);
        })

        it('Should fail if username does not match the one saved', function () {
            safeBox.saveData(name, surname, username, password, repeatPass);
            username='Lola';

            result = safeBox.checkData(password, username);

            expect(result instanceof Array).toEqual(true);
        })

        it('Should fail if password does not match the one saved', function () {
            safeBox.saveData(name, surname, username, password, repeatPass);
            password='Lola';

            result = safeBox.checkData(password, username);

            expect(result instanceof Array).toEqual(true);
        })
    });
});