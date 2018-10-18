//import logic from './logic'

require('isomorphic-fetch')

const logic = require('./userService')

const { expect } = require('chai')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('logic', () => {
    beforeEach(() => {
        // ?
    })

    describe('users', () => {
        describe('register', () => {
            it('should succeed on correct data', () =>
                logic.registerUser('John', 'Doe', `jd-${Math.random()}`, '123')
                    .then(id => expect(id).to.be.a('string'))
            )

            it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logic.registerUser('John', 'Doe', username, '123')
                    .then(id => {
                        expect(id).to.be.a('string')

                        return logic.registerUser('John', 'Doe', username, '123')
                    })
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            it('should fail on undefined name', () => {
                expect(() =>
                    logic.registerUser(undefined, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other cases
        })

        describe('authenticate', () => {
            beforeEach(() => {
                const user = { name: 'John', surname: 'Doe', username: 'jd', password: '123', id: Date.now() }
              
            })

            it('should not succeed on incorrect data', () => {
               
                    logic.authenticateUser("pedrito", "1234").catch(error => {

                        expect(error.message).to.be.equal("username and/or password wrong")
                    
                    })
                    
               
            })

            it('should succeed on correct data', () => {
               
                logic.authenticateUser("pedrito", "123").then(res => {

                    expect(res).to.be.a("string")
                
                })
                
           
            })

            false && it('should fail on undefined username', () => {
                expect(() =>
                    logic.authenticate(undefined, '123')
                ).to.throw(Error, 'wrong credentials')
            })

            // TODO other cases
        })
    })

    describe('users', () => {
        // TODO  
    })
})