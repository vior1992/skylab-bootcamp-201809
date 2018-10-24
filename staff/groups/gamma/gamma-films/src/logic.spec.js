//import logic from './logic'

require('isomorphic-fetch')

const logic = require('./logic')

const { expect } = require('chai')

const flag = false


describe('logic', () => {
    describe('users', () => {
        flag && describe('register', () => {
            it('should succeed on correct data', () =>
                logic.registUser('John', 'Doe', `jd-${Math.random()}`, '123')
                    .then(() => expect(true).to.be.true)
            )

            it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logic.registUser('John', 'Doe', username, '123')
                    .then(() => logic.registUser('John', 'Doe', username, '123'))
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            it('should fail on undefined name', () => {
                expect(() =>
                    logic.registUser(undefined, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null name', () => {
                expect(() =>
                    logic.registUser(null, 'Doe', 'jd', '123')
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object name', () => {
                expect(() =>
                    logic.registUser({}, 'Doe', 'jd', '123')
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty name', () => {
                expect(() =>
                    logic.registUser('      ', 'Doe', 'jd', '123')
                ).to.throw(Error, 'name is empty or blank')
            })

            it('should fail on undefined surname', () => {
                expect(() =>
                    logic.registUser('Jhon', undefined, 'jd', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null surname', () => {
                expect(() =>
                    logic.registUser('Jhon', null, 'jd', '123')
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object surname', () => {
                expect(() =>
                    logic.registUser('Jhon', {}, 'jd', '123')
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty surname', () => {
                expect(() =>
                    logic.registUser('Jhon', '      ', 'jd', '123')
                ).to.throw(Error, 'surname is empty or blank')
            })

            it('should fail on undefined username', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', undefined, '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null username', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', null, '123')
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object username', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', {}, '123')
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty username', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', '      ', '123')
                ).to.throw(Error, 'username is empty or blank')
            })

            it('should fail on undefined password', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', 'jd', undefined)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null password', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', 'jd', null)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object password', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', 'jd', {})
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty password', () => {
                expect(() =>
                    logic.registUser('Jhon', 'Doe', 'jd', '      ')
                ).to.throw(Error, 'password is empty or blank')
            })
        })

        flag && describe('login', () => {
            describe('with existing user', () => {
                let username, password

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    return logic.registUser(name, surname, username, password)
                })

                it('should succeed on correct data', () =>
                    logic.loginUser(username, password)
                        .then(() => expect(true).to.be.true)
                )

                it('should fail on wrong username', () => {
                    username = `dummy-${Math.random()}`

                    return logic.loginUser(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal(`user with username "${username}" does not exist`)
                        })
                })

                it('should fail on wrong password', () => {
                    password = 'pepito'

                    return logic.loginUser(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal('username and/or password wrong')
                        })
                })
            })

            it('should fail on undefined username', () => {
                const username = undefined

                expect(() =>
                    logic.loginUser(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on boolean username', () => {
                const username = true

                expect(() =>
                    logic.loginUser(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on numeric username', () => {
                const username = 123

                expect(() =>
                    logic.loginUser(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on object username', () => {
                const username = {}

                expect(() =>
                    logic.loginUser(username, '123')
                ).to.throw(Error, `[object Object] is not a string`)
            })

            it('should fail on undefined password', () => {
                const password = undefined

                expect(() =>
                    logic.loginUser('Jhon', password)
                ).to.throw(Error, `${password} is not a string`)
            })

            it('should fail on boolean password', () => {
                const password = true

                expect(() =>
                    logic.loginUser('Jhon', password)
                ).to.throw(Error, `${password} is not a string`)
            })

            it('should fail on numeric password', () => {
                const password = 123

                expect(() =>
                    logic.loginUser('Jhon', password)
                ).to.throw(Error, `${password} is not a string`)
            })

            it('should fail on object password', () => {
                const password = {}

                expect(() =>
                    logic.loginUser('Jhon', password)
                ).to.throw(Error, `[object Object] is not a string`)
            })

        })

        // !flag && describe('logout', () => {
        //     describe('with user logged', () => {
        //         let username, password

        //         beforeEach(() => {
        //             const name = 'John', surname = 'Doe'

        //             username = `jd-${Math.random()}`
        //             password = `123-${Math.random()}`

        //             return logic.registUser(name, surname, username, password)
        //                 .then(() => logic.loginUser(username, password))
        //         })

        //         it('should logout when logged', () =>
        //             logic.logout()
        //                 expect(logic._user).not.to.be.undefined
        //                 expect(logic._user).to.equal('')

        //         )
        //     })
        // })

        flag && describe('searchMovies', () => {

            it('should succes on correct query', () => {
                const search = 'Batman'
                return logic.searchMovies(search)
                    .then(() => expect(true).to.be.true)
            })

            it('should fail on undefined query', () => {
                const search = undefined
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null query', () => {
                const search = null
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object query', () => {
                const search = {}
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty query', () => {
                const search = '    \t'
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(Error, 'query is empty or blank')
            })

        })

        !flag && describe('searchMovies', () => {

            it('should succes on correct query', () => {
                const search = 'Batman'
                return logic.searchMovies(search)
                    .then(() => expect(true).to.be.true)
            })

            it('should return an object', () => {
                const search = 'Batman'
                return logic.searchMovies(search)
                    .then((results) => {
                        expect(results).not.to.be.undefined
                    })
            })

            it('should fail on undefined query', () => {
                const search = undefined
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on null query', () => {
                const search = null
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, 'null is not a string')
            })

            it('should fail on object query', () => {
                const search = {}
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(TypeError, '[object Object] is not a string')
            })

            it('should fail on empty query', () => {
                const search = '    \t'
                expect(() =>
                    logic.searchMovies(search)
                ).to.throw(Error, 'query is empty or blank')
            })

        })

    })
})