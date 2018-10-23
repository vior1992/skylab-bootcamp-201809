
// import logic from './logic'

require('isomorphic-fetch')

global.sessionStorage = require('sessionstorage')

const logicAuth = require('./logic/auth')

const logicUdacity = require('./logic/udacity')

const { expect } = require('chai')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('logicAuth', () => {
    describe('users', () => {
        !true && describe('register', () => {
            it('should succeed on correct data', () =>
                logicAuth.registerUser('John', 'Doe', `jd-${Math.random()}`, '123')
                    .then(() => expect(true).to.be.true)
            )

            it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logicAuth.registerUser('John', 'Doe', username, '123')
                    .then(() => logicAuth.registerUser('John', 'Doe', username, '123'))
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            it('should fail on undefined name', () => {
                expect(() =>
                    logicAuth.registerUser(undefined, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other cases
        })

        !true && describe('login', () => {
            describe('with existing user', () => {
                let username, password

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    return logicAuth.registerUser(name, surname, username, password)
                })

                it('should succeed on correct data', () =>
                    logicAuth.login(username, password)
                        .then(() => expect(true).to.be.true)
                )

                it('should fail on wrong username', () => {
                    username = `dummy-${Math.random()}`

                    return logicAuth.login(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal(`user with username "${username}" does not exist`)
                        })
                })

                it('should fail on wrong password', () => {
                    password = 'pepito'

                    return logicAuth.login(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal('username and/or password wrong')
                        })
                })
            })

            it('should fail on undefined username', () => {
                const username = undefined

                expect(() =>
                    logicAuth.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on boolean username', () => {
                const username = true

                expect(() =>
                    logicAuth.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on numeric username', () => {
                const username = 123

                expect(() =>
                    logicAuth.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            // TODO other cases
        })
    })
})

describe('logicUdacity', () => {
    describe('connect to the API', () => {
        it('should fetch courses', () => {
            return logicUdacity.getCourses()
                .then((res) => {
                    expect(res).to.be.true
                })
        })

        it('should fail on incorrect URL', () => {
            return logicUdacity.getCourses('https://www.fake-udacity.com/public-api/v0/courses')
                .then(() => {
                    expect(false).to.be.true
                })
                .catch(err => {
                    expect(err.message).to.equal('Unable to load courses')
                })
        })
    })

})


