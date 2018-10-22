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
        false && describe('register', () => {
            it('should succeed on correct data', () =>
                logic.registerUser('John', 'Doe', `jd-${Math.random()}`, '123')
                    .then(() => expect(true).to.be.true)
            )

            it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logic.registerUser('John', 'Doe', username, '123')
                    .then(() => logic.registerUser('John', 'Doe', username, '123'))
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

        false && describe('login', () => {
            describe('with existing user', () => {
                let username, password

                beforeEach(() => {
                    const name = 'John', surname = 'Doe'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    return logic.registerUser(name, surname, username, password)
                })

                it('should succeed on correct data', () =>
                    logic.login(username, password)
                        .then(() => expect(true).to.be.true)
                )

                it('should fail on wrong username', () => {
                    username = `dummy-${Math.random()}`

                    return logic.login(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal(`user with username "${username}" does not exist`)
                        })
                })

                it('should fail on wrong password', () => {
                    password = 'pepito'

                    return logic.login(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal('username and/or password wrong')
                        })
                })
            })

            it('should fail on undefined username', () => {
                const username = undefined

                expect(() =>
                    logic.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on boolean username', () => {
                const username = true

                expect(() =>
                    logic.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            it('should fail on numeric username', () => {
                const username = 123

                expect(() =>
                    logic.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            // TODO other cases
        })
    })

    describe('movies', () => {
        //Put max pagination to 5(100 movies)
        describe('not user intervention', () => {
            describe('trending-slider', () => {
                it('should return trending movies', () => {
                    logic.retrieveTrending()
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.length).to.be.above(0)
                        })
                })
            })
            describe('in theatre', () => {
                it('should return in theatre movies', () => {
                    logic.retrieveInTheatre()
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.length).to.be.above(0)
                        })
                })
            })
            describe('populars', () => {
                it('should return popular movies', () => {
                    logic.retrievePopular()
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.length).to.be.above(0)
                        })
                })
            })

        })
        describe('user intervention', () => {
            describe('search movies', () => {
                let  query, page
                beforeEach(() => {
                    query = 'harry+potter'
                    page = 1
                })
                it('should return movies with required and page', () => {
                    logic.retrieveMovies(query, page)
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.length).to.be.above(0)
                        })
                })
                it('should failon undefined query', () => {
                    query = undefined
                    expect(() =>
                        logic.retrieveMovies(query)
                    ).to.throw(Error, `${query} is not a valid query`)

                })
                //TODO other cases 
                it('should failon undefined page', () => {
                    page = undefined
                    expect(() =>
                        logic.retrieveMovies(page)
                    ).to.throw(Error, `${page} is not a valid page`)

                })
                //TODO other cases  
            })
            describe('retrieve movie', () => {
                it('should return the movie extended information', () => {
                    logic.retrieveMovie(movieId)
                        .then(movies => {
                            expect(movies).not.to.be.undefined
                            expect(movies.length).to.be.above(0)
                        })
                })
                it('should failon undefined movieId', () => {
                    movieId = undefined
                    expect(() =>
                        logic.retrieveMovie(movieId)
                    ).to.throw(Error, `${movieId} is not a valid movieId`)
                })
                //TODO other cases  
            })


        })

    })
})