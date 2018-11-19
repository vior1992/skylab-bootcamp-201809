const logic = require('.')
const { User, Partyup } = require('../data')
const mongoose = require('mongoose')
const { expect } = require('chai')

const MONGO_URL = 'mongodb://localhost:27017/kanban-test'

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })

describe('logic', () => {
    before(() =>  mongoose.connect(`${MONGO_URL}`, { useNewUrlParser: true }))

    beforeEach(() => Promise.all([User.deleteMany(), Partyup.deleteMany()]))

    describe('user', () => {
        describe('register', () => {
            let name, surname, city, username, password

            beforeEach(() => {
                name = `name-${Math.random()}`
                surname = `surname-${Math.random()}`
                city = `city-${Math.random()}`
                username = `username-${Math.random()}`
                password = `password-${Math.random()}`
            })

            it('should succeed on correct data', async () => {
                const res = await logic.registerUser(name, surname, city, username, password)
                
                expect(res).to.be.undefined
                
                const _users = await User.find()
            
                expect(_users.length).to.equal(1)

                const [user] = _users

                expect(user.id).to.be.a('string')
                expect(user.name).to.equal(name)
                expect(user.surname).to.equal(surname)
                expect(user.city).to.equal(city)
                expect(user.username).to.equal(username)
                expect(user.password).to.equal(password)
                    
                })

            //NAME FAIL TESTS//

            it('should fail on undefined name', () => {
                expect(() => logic.registerUser(undefined, surname, city, username, password)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank username', () => {
                expect(() => logic.registerUser('  ', surname, city, username, password)).to.throw(Error, 'name is empty or blank')
            })

            it('should fail on number username (not a string)', () => {
                expect(() => logic.registerUser(1, surname, city, username, password)).to.throw(Error, '1 is not a string')
            })

            it('should fail on boolean username (not a string)', () => {
                expect(() => logic.registerUser(false, surname, city, username, password)).to.throw(Error, 'false is not a string')
            })

            //SURNAME FAIL TESTS//

            it('should fail on undefined surname', () => {
                expect(() => logic.registerUser(name, undefined, city, username, password)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank surname', () => {
                expect(() => logic.registerUser(name, '  ', city, username, password)).to.throw(Error, 'surname is empty or blank')
            })

            it('should fail on number surname (not a string)', () => {
                expect(() => logic.registerUser(name, 1, city, username, password)).to.throw(Error, '1 is not a string')
            })

            it('should fail on boolean surname (not a string)', () => {
                expect(() => logic.registerUser(name, false, city, username, password)).to.throw(Error, 'false is not a string')
            })

            //CITY FAIL TESTS//

            it('should fail on undefined city', () => {
                expect(() => logic.registerUser(name, surname, undefined, username, password)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank city', () => {
                expect(() => logic.registerUser(name, surname, '  ', username, password)).to.throw(Error, 'city is empty or blank')
            })

            it('should fail on number city (not a string)', () => {
                expect(() => logic.registerUser(name, surname, 1, username, password)).to.throw(Error, '1 is not a string')
            })

            it('should fail on boolean city (not a string)', () => {
                expect(() => logic.registerUser(name, surname, false, username, password)).to.throw(Error, 'false is not a string')
            })

            //USERNAME FAIL TESTS//

            it('should fail on undefined username', () => {
                expect(() => logic.registerUser(name, surname, city, undefined, password)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank username', () => {
                expect(() => logic.registerUser(name, surname, city, '  ', password)).to.throw(Error, 'username is empty or blank')
            })

            it('should fail on number username (not a string)', () => {
                expect(() => logic.registerUser(name, surname, city, 9, password)).to.throw(Error, '9 is not a string')
            })

            it('should fail on boolean username (not a string)', () => {
                expect(() => logic.registerUser(name, surname, city, true, password)).to.throw(Error, 'true is not a string')
            })

            //PASSWORD FAIL TESTS//

            it('should fail on undefined password', () => {
                expect(() => logic.registerUser(name, surname, city, username, undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank password', () => {
                expect(() => logic.registerUser(name, surname, city, username, '  ')).to.throw(Error, 'password is empty or blank')
            })

            it('should fail on number password (not a string)', () => {
                expect(() => logic.registerUser(name, surname, city, username, 90)).to.throw(Error, '90 is not a string')
            })

            it('should fail on boolean password (not a string)', () => {
                expect(() => logic.registerUser(name, surname, city, username, false)).to.throw(Error, 'false is not a string')
            })

        })

        describe('authenticate', () => {

            beforeEach(() => {
                user = new User({ name: 'Dani', surname: 'Prueba', city: "bcn", username: 'db', password: '1234' })

                return user.save()
            })

            it('should authenticate on correct credentials', () => {
                const { username, password } = user

                return logic.authenticateUser(username, password)
                    .then(id => {
                        expect(id).to.exist
                        expect(id).to.be.a('string')

                        return User.find()
                            .then(_users => {
                                const [_user] = _users

                                expect(_user.id).to.equal(id)
                            })
                    })
            })

            //USERNAME FAIL TESTS//

            it('should fail on undefined username', () => {
                expect(() => logic.authenticateUser(undefined, user.password)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank username', () => {
                expect(() => logic.authenticateUser('   ', user.password)).to.throw(Error, 'username is empty or blank')
            })

            it('should fail on number username (not a string)', () => {
                expect(() => logic.authenticateUser(3, user.password)).to.throw(Error, '3 is not a string')
            })

            it('should fail on boolean username (not a string)', () => {
                expect(() => logic.authenticateUser(true, user.password)).to.throw(Error, 'true is not a string')
            })

            //PASSWORD FAIL TESTS//

            it('should fail on undefined password', () => {
                expect(() => logic.authenticateUser(user.username, undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank password', () => {
                expect(() => logic.authenticateUser(user.username, '   ')).to.throw(Error, 'password is empty or blank')
            })

            it('should fail on number password (not a string)', () => {
                expect(() => logic.authenticateUser(user.username, 3)).to.throw(Error, '3 is not a string')
            })

            it('should fail on boolean password (not a string)', () => {
                expect(() => logic.authenticateUser(user.username, true)).to.throw(Error, 'true is not a string')
            })
        })

        //FALTA EL RETRIEVE

        describe('partyups', () => {
            describe('create', () => {
                let user, title
    
                beforeEach(() => {
                    user = new User({ name: 'Dani', surname: 'Prueba', city: "bcn", username: 'db', password: '1234' })
                    title = "prueba"
                    let description = 'prueba en el test'
                    let date = "2018-12-18T10:57:36.247Z"
                    let city = '01'
                    let tags = "01"
                    debugger
                    return user.save()
                })
    
                it('should succeed on correct data', () => {
                        logic.createPartyup(title, description, date, city, place, tags, user.id)
                        debugger
                            
                        
                    
                })
    
                // TODO other test cases
            })
    
            false&&describe('list', () => {
                let user, postit, postit2
    
                beforeEach(() => {
                    user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })
    
                    postit = new Postit({ text: 'hello text', user: user.id, status: "TODO"})
                    postit2 = new Postit({ text: 'hello text 2', user: user.id, status: "TODO"})
    
                    return user.save()
                        .then(() => Promise.all([postit.save(), postit2.save()]))
                })
    
                it('should succeed on correct data', () => {
                    logic.listPostits(user.id)
                        .then(postits => {
                            return Postits.find()
                                .then(_postits => {
                                    expect(_postits.length).to.equal(2)
    
                                    expect(postits.length).to.equal(_postits.length)
    
                                    const [_postit, _postit2] = _postits
    
                                    expect(_postit.id).to.equal(postit.id)
                                    expect(_postit.text).to.equal(postit.text)
    
                                    expect(_postit2.id).to.equal(postit2.id)
                                    expect(_postit2.text).to.equal(postit2.text)
    
                                    const [__postit, __postit2] = postits
    
                                    expect(_postit.id).to.equal(__postit.id)
                                    expect(_postit.text).to.equal(__postit.text)
    
                                    expect(_postit2.id).to.equal(__postit2.id)
                                    expect(_postit2.text).to.equal(__postit2.text)
                                })
                        })
                    
                })
            })
        })


    })
    after(() => mongoose.disconnect())
})