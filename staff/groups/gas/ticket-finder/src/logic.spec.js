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
            false && it('should succeed on correct data', () =>
                logic.registerUser('John', 'doe@gmail.com', `jd-${Math.random()}`, '123', '123')
                    .then(() => expect(true).to.be.true)
            )

            false && it('should fail on trying to register twice same user', () => {
                const username = `jd-${Math.random()}`

                return logic.registerUser('John', 'doe@gmail.com', username, '123', '123')
                    .then(() => logic.registerUser('John', 'doe@gmail.com', username, '123', '123'))
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" already exists`)
                    })
            })

            false && it('should fail on undefined name', () => {
                expect(() =>
                    logic.registerUser(undefined, 'doe@gmail.com', 'jd', '123', '123')
                ).to.throw(TypeError, 'undefined is not a string')
            })

            false && it('should fail on different passwords', () => {
                return logic.registerUser('John', 'doe@gmail.com', `jd-${Math.random()}`, '123', '123')
                .catch(err => {
                    expect(err).not.to.be.undefined
                    expect(err.message).to.equal(`passwords do not match`)
                })
            })

            // TODO other cases
        })

        describe('login', () => {
            describe('with existing user', () => {
                let username, password

                beforeEach(() => {
                    const name = 'John', email = 'doe@gmail.com'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`

                    return logic.registerUser(name, email, username, password, password)
                })

                false && it('should succeed on correct data', () =>
                    logic.login(username, password)
                        .then(() => expect(true).to.be.true)
                )

                false && it('should fail on wrong username', () => {
                    username = `dummy-${Math.random()}`

                    return logic.login(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal(`user with username "${username}" does not exist`)
                        })
                })

                false && it('should fail on wrong password', () => {
                    password = 'pepito'

                    return logic.login(username, password)
                        .catch(err => {
                            expect(err).not.to.be.undefined
                            expect(err.message).to.equal('username and/or password wrong')
                        })
                })
            })

            false && it('should fail on undefined username', () => {
                const username = undefined

                expect(() =>
                    logic.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            false && it('should fail on boolean username', () => {
                const username = true

                expect(() =>
                    logic.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            false && it('should fail on numeric username', () => {
                const username = 123

                expect(() =>
                    logic.login(username, '123')
                ).to.throw(Error, `${username} is not a string`)
            })

            // TODO other cases
        })
    })

    describe('API requests', () => {

        describe('retrieve events', () => {
            let query
            beforeEach(() => {
                query = 'Metallica'
            })
            false && it('should return an array of objects with events', () => {
                logic.searchEvents(query)
                    .then(res => {
                        expect(res).not.to.be.undefined
                        expect(res.length).to.be.above(0)
                    })
            })

            // it('should find required properties', () => {
            //     logic.searchEvents(query)
            //         .then(res => {
            //             expect(res).not.to.be.undefined
            //             expect(res.length).to.be.above(0)
            //         })
            // })

            false && it('should fail on undefined search', () => {
                logic.searchEvents(query)
                    .then(res => {
                        expect(res).not.to.be.undefined
                        expect(res.length).to.be.above(0)
                    })
            })

            false && it('should fail on undefined query', () => {
                query = undefined
                expect(() =>
                    logic.searchEvents(query)
                ).to.throw(Error, `${query} is not a valid query`)
            })


        })

        describe('delete favourites from user array', () => {
            describe('with existing user', () => {
                let username, password, itemId

                beforeEach(() => {
                    const name = 'John', email = 'doe@gmail.com'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`
                    repeatPassword = password
                    


                    return logic.registerUser(name, email, username, password,repeatPassword)
                        .then(() => logic.login(username, password))
                        .then(() => logic.storeFavourites('KovZpZAEdJaA'))

                })

                describe('with existing postit', () => {

                    it('should succeed on deleting existing item', () =>
                    logic.deleteFavourite('KovZpZAEdJaA')
                        .then(() => expect(true).to.be.true)
                        .then(() => expect(logic._favouritesEventsArray).to.be.empty)
                )
            //     it('should fail on ', () =>
            //     logic.deleteFavourite('KovZpZAEdJaA')
            //         .then(() => expect(true).to.be.true)
            //         .then(() => expect(logic._favouritesEventsArray).to.be.empty)
            // )
                })

                

 
            })
        })

         describe('Store events in favourites', () => {
            describe('with existing user', () => {
                let username, password, item

                beforeEach(() => {
                    const name = 'John', email = 'doe@gmail.com'

                    username = `jd-${Math.random()}`
                    password = `123-${Math.random()}`
                    repeatPassword = password                  


                    return logic.registerUser(name, email, username, password,repeatPassword)
                        .then(() => logic.login(username, password)
                        )
                })
                false && it('should succeed on adding event to favourites', () =>
                        logic.storeFavourites('vvG1fZ411N-A7B')
                            .then(() => {
                                expect(true).to.be.true
                                expect(logic._favouritesEventsArray).to.not.be.empty                            })
                )

            })
        })
    })
})