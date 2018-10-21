
require('isomorphic-fetch')

global.sessionStorage = require('sessionstorage')

const logic = require('./logic')

const {expect} = require('chai')

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000



describe ('logic', () => {
    !false && describe('register', () => {
        it('should suceed on correct data', () => {
            return logic.registerUser('ana','san', `as-${Math.random()}`,'a@a','123') 
                .then(() => expect(true).to.be.true)
                
        })

        it('should save userId on sessionStorage', () => 
            logic.registerUser('ana','san', `as-${Math.random()}`,'a@a','123') 
                .then(() => expect(true).to.be.true)
                .then(() => {
                    const userId = sessionStorage.getItem('userId') 
                    expect(userId).not.to.be.undefined
                })
        )

        it('should fail on trying to register with existing username', () => {
            let username = `as-${Math.random()}`
            return logic.registerUser('ana','san', username,'a@a','123') 
                .then(() => expect(true).to.be.true)
                .then(() => logic.registerUser('ana','san', username,'a@a','123'))
                .catch( err => {
                    expect(err).not.to.be.undefined
                    expect(err.message).to.equal(`user with username "${username}" already exists`)
                })
            
        })

        it('should fail on undefined name', () => {
            expect(() => 
                logic.registerUser(undefined,'san', `as-${Math.random()}`,'a@a','123') 
            
            ).to.throw(TypeError, `undefined is not a string`)
        })

        it ('should fail on empty name', () => {
            expect(()=>
                logic.registerUser('','san', `as-${Math.random()}`,'a@a','123') 

            ).to.throw(Error, 'name is blank or empty')
        })

        it ('should fail on blank name', () => {
            expect(()=>
                logic.registerUser('        ','san', `as-${Math.random()}`,'a@a','123') 

            ).to.throw(Error, 'name is blank or empty')
        })

        it ('should fail on incorrect name(number)', () => {
            expect(()=>
                logic.registerUser(123,'san', `as-${Math.random()}`,'a@a','123') 

            ).to.throw(TypeError, `123 is not a string`)
        })

        it ('should fail on incorrect name(boolean)', () => {
            expect(()=>
                logic.registerUser(true,'san', `as-${Math.random()}`,'a@a','123') 

            ).to.throw(TypeError, `true is not a string`)
        })

        it ('should fail on incorrect name(object)', () => {
            expect(()=>
                logic.registerUser({},'san', `as-${Math.random()}`,'a@a','123') 

            ).to.throw(TypeError, `[object Object] is not a string`)
        })

        it ('should fail on incorrect name(array)', () => {
            expect(()=>
                logic.registerUser([],'san', `as-${Math.random()}`,'a@a','123') 

            ).to.throw(TypeError, ` is not a string`)
        })

        //TODO with other parameters



    })


    !false && describe('login', () => {
        describe('test on autenticating existent user', () => {
            let username, password

            beforeEach(() => {
                const name = 'dani', surname = 'ville', email = 'da@da'

                username = `dv-${Math.random()}`
                password = `123-${Math.random()}`

                return logic.registerUser(name, surname, username, email, password)
                
            })

            

            it ('should succed on correct username', () => 
                logic.LogInUser(username, password)
                    .then(() => expect(true).to.be.true)

            )

            it('should save userId on sessionStorage', () => 
                logic.LogInUser(username, password)
                    .then(() => expect(true).to.be.true)
                    .then(() => {
                        const userId = sessionStorage.getItem('userId') 
                        expect(userId).not.to.be.undefined
                    })
            )

            it ('should fail on incorrect username', () => {
                username = 'wrong'

                return logic.LogInUser(username, password)
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`user with username "${username}" does not exist`)
                    })
            })

            it ('should fail on incorrect password', () => {
                password = '111'

                return logic.LogInUser(username, password)
                    .catch(err => {
                        expect(err).not.to.be.undefined
                        expect(err.message).to.equal(`username and/or password wrong`)
                    })
            })
        })

        it('should fail on undefined username', () => {
            const username = undefined

            expect(() => 
                logic.LogInUser(username, '123')
            ).to.throw(Error, `${username} is not a string`)
        })

        it('should fail on blank username', () => {
            const username = ' '

            expect(() =>
                logic.LogInUser(username, '123')
            ).to.Throw(Error, `username is blank or empty`)
        })

        //TODO with other parameters (finish)
        
    })

    describe(' UserLogOut ', () => {
        beforeEach(() => {
            const name = 'dani', surname = 'ville', email = 'da@da'

            username = `dv-${Math.random()}`
            password = `123-${Math.random()}`

            return logic.registerUser(name, surname, username, email, password)
            
        })

        it('should succed on deleting userId on sessionStorage', () => {
            const userId = sessionStorage.getItem('userId') 
            expect(userId).not.to.be.undefined

            logic.userLogOut()
            const userId2 = sessionStorage.getItem('userId')
            
            expect(userId2).to.equal(null)
            
        })

    })


})