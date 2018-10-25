//import logic from './logic'

require('isomorphic-fetch')

global.sessionStorage = require('sessionstorage')

const logic = require('./logic')

const { expect } = require('chai')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('logic', () => {
    describe('users', () => {
        describe('register', () => {
            it('should succeed on correct data', () =>
                logic.signIn(`jd-${Math.random()}`, 'john@john.com', 'John', 'Doe', '123')
                    .then(() => expect(true).to.be.true)
            )

            it('should fail on register same user twice', () => {
                const username = `jd-${Math.random()}`

                return logic.signIn(username, 'john@john.com', 'John', 'Doe', '123')
                    .then(() => logic.signIn(username, 'john@john.com', 'John', 'Doe', '123'))
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            it('should fail on undefined name', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, 'john@john.com', undefined, 'Doe', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on no username', () => {
                expect(() =>
                    logic.signIn('', 'john@john.com', 'John', 'Doe', '123')
                ).to.throw(Error, 'username is empty or blank')
            })

            it('should fail on no email', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, '', 'John', 'Doe', '123')
                ).to.throw(Error, 'email is empty or blank')
            })

            it('should fail on no name', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, 'john@john.com', '', 'Doe', '123')
                ).to.throw(Error, 'name is empty or blank')
            })

            it('should fail on no surname', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, 'john@john.com', 'John', '', '123')
                ).to.throw(Error, 'surname is empty or blank')
            })

            it('should fail on no password', () => {
                expect(() =>
                    logic.signIn(`jd-${Math.random()}`, 'john@john.com', 'John', 'Doe', '')
                ).to.throw(Error, 'password is empty or blank')
            })
        })

        describe('log in', () => {
            describe('with existing user', () => {
                let username, password

                beforeEach(() => {
                    const name = 'John', surname = 'Doe', email = 'john@john'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    return logic.signIn(username, email, name, surname, password)
                })

                it('should succeed on correct data', () =>
                    logic.logIn(username, password)
                        .then(() => expect(true).to.be.true)
                )

                it('should fail on wrong username', () => {
                    username = `dummy-${Math.random()}`

                    return logic.logIn(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal(`user with username "${username}" does not exist`)
                        })
                })

                it('should fail on wrong password', () => {
                    password = 'pepito'

                    return logic.logIn(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal('username and/or password wrong')
                        })
                })

                it('should fail on no username', () => {
                    expect(() =>
                        logic.logIn('', '123')
                    ).to.throw(Error, 'username is empty or blank')
                })

                it('should fail on no password', () => {
                    expect(() =>
                        logic.logIn('john', '')
                    ).to.throw(Error, 'password is empty or blank')
                })
            })

            it('should fail on undefined username', () => {
                const username = undefined

                expect(() =>
                    logic.logIn(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on boolean username', () => {
                const username = true

                expect(() =>
                    logic.logIn(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on numeric username', () => {
                const username = 123

                expect(() =>
                    logic.logIn(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            // TODO other cases
        })
        describe('user movies', () => {
            beforeEach(() => {
                return logic.logIn('test2', '1234')
                    .then(() => logic.retrieveUserData())
            })

            after(() => {
                logic.updateUserSeen([])
                logic.updateUserPending([])
            })

            describe('update user seen movies list', () => {
                it('should update the list of user seen movies', () => {
                    const movie = [{id: '001', name: 'the great movie'}]
                    logic.updateUserSeen(movie)
                        .then(() => {
                            expect(true).to.be.true
                            debugger
                            expect(logic._user.seen.length).to.be.equal(1)
                        })
                })

                it('should fail if no array is passed', () => {
                    const movie = {id: '001', name: 'the great movie'}

                    expect(() =>
                        logic.updateUserSeen(movie)
                    ).to.throw(Error, `${movie} is not an array`)
                })
            })

            describe('update user pending movies list', () => {
                it('should update the list of user seen movies', () => {
                    const movie = [{id: '100', name: 'awesome movie'}]
                    logic.updateUserPending(movie)
                        .then(() => {
                            expect(true).to.be.true
                            expect(logic._user.pending.length).to.equal(1)
                        })
                })

                it('should fail if no array is passed', () => {
                    const movie = {id: '100', name: 'awesome movie'}

                    expect(() =>
                        logic.updateUserPending(movie)
                    ).to.throw(Error, `${movie} is not an array`)
                })
            })

            describe('retrieve user seen list movies', () => {
                it('should return the list of user movies', () => {
                    logic.retrieveUserData()
                        .then(() => {
                            expect(true).to.be.true
                            expect(logic._user.seen.length).to.equal(1)
                            expect(logic._user.pending.length).to.equal(1)
                        })
                })
            })

            describe('delete user seen movies', () => {
                it('should delete the list of user seen movies', () => {
                    logic.deleteUserSeen('001')
                        .then(() => {
                            expect(true).to.be.true
                            expect(logic._user.seen.length).to.equal(0)
                        })
                })
            })

            describe('delete user pending movies', () => {
                it('should delete the list of user pending movies', () => {
                    logic.deleteUserPending('100')
                        .then(() => {
                            expect(true).to.be.true
                            expect(logic._user.pending.length).to.equal(0)
                        })
                })
            })
        })
    })

    describe('movies', () => {
        describe('not user intervention', () => {
            describe('movies areas', () => {
                it('should return trending movies', () => {
                    logic.retrieveTrending()
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.results.length).to.be.above(0)
                        })
                })
            })

            describe('in theatre', () => {
                it('should return in theatre movies', () => {
                    logic.retrieveInTheatre()
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.results.length).to.be.above(0)
                        })
                })
            })

            describe('populars', () => {
                it('should return popular movies', () => {
                    logic.retrievePopular()
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.results.length).to.be.above(0)
                        })
                })
            })
        })

        describe('user intervention', () => {
            describe('search movies', () => {
                let query = 'harry+potter'
                let page = 3

                it('should return movies with required page', () => {
                    logic.retrieveMovies(query, page)
                        .then(movies => {
                            expect(movies.page).to.equal(3)
                        })
                })

                it('should get page 1 if no page passed', () => {
                    page = undefined

                    logic.retrieveMovies(query, page).then(movies => {
                        expect(movies.page).to.equal(1)
                    })
                })

                it('should fail on undefined query', () => {
                    query = undefined
                    expect(() =>
                        logic.retrieveMovies(query)
                    ).to.throw(Error, `${query} is not a valid query`)
                })
            })

            describe('retrieve movie', () => {
                it('should return the movie extended information', () => {
                    let movieId = '293660'

                    logic.retrieveMovie(movieId)
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                        })
                })

                it('should fail on undefined movie id', () => {
                    movieId = undefined
                    expect(() =>
                        logic.retrieveMovie(movieId)
                    ).to.throw(Error, `${movieId} is not a valid movie id`)
                })

                it('should fail on blank movie id', () => {
                    expect(() =>
                        logic.retrieveMovie('')
                    ).to.throw(TypeError, ` is blank id`)
                })
            })
        })
    })
})