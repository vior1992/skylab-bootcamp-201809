const { expect } = require('chai')
const LOGIC = require('./logic')

describe('Logic', function () {
    describe('register', function () {
        it('should fail on object as form', function () {
            expect(function() {
                LOGIC.register({})
            }).to.throw('no form passed as argument')
        })

        it('should fail on empty form argument', function () {
            expect(function() {
                LOGIC.register()
            }).to.throw('no form passed as argument')
        })
    })

    describe('login', function () {
        it('should fail on non form argument', function () {
            expect(function() {
                LOGIC.login({})
            }).to.throw('no form passed as argument')
        })

        it('should fail on empty form argument', function () {
            expect(function() {
                LOGIC.login()
            }).to.throw('no form passed as argument')
        })
    })

    describe('validate', function () {
        it('should fail on object as form', function () {
            expect(function() {
                LOGIC.validate({})
            }).to.throw('no form passed as argument')
        })

        it('should fail on empty form argument', function () {
            expect(function() {
                LOGIC.validate()
            }).to.throw('no form passed as argument')
        })
    })

    describe('error', function () {
        it('should fail on invalid message', function () {
            expect(function() {
                LOGIC.error()
            }).to.throw('message is not valid')
        })
    })
})
