require('dotenv').config()

const mongoose = require('mongoose')
const { User, Postit } = require('../data')
const logic = require('.')
const { AlreadyExistsError } = require('../errors')

const { expect } = require('chai')

const { env: { MONGO_URL } } = process

// running test from CLI
// normal -> $ mocha src/logic.spec.js --timeout 10000
// debug -> $ mocha debug src/logic.spec.js --timeout 10000

describe('logic', () => {
    before(() =>  mongoose.connect(`${MONGO_URL}/postit-test`, { useNewUrlParser: true }))

    beforeEach(() => User.deleteMany())

    describe('user', () => {
        describe('register', () => {
            let name, surname, username, password

            beforeEach(() => {
                name = `name-${Math.random()}`
                surname = `surname-${Math.random()}`
                username = `username-${Math.random()}`
                password = `password-${Math.random()}`
            })

            it('should succeed on correct data', () =>
                logic.registerUser(name, surname, username, password)
                    .then(() => User.find())
                    .then(_users => {
                        expect(_users.length).to.equal(1)

                        const [user] = _users

                        expect(user.id).to.be.a('string')
                        expect(user.name).to.equal(name)
                        expect(user.surname).to.equal(surname)
                        expect(user.username).to.equal(username)
                        expect(user.password).to.equal(password)
                    })
            )

            it('should fail on undefined name', () => {
                expect(() => logic.registerUser(undefined, surname, username, password)).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other test cases
        })

        describe('authenticate', () => {

            beforeEach(() => {
                user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })

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

            it('should fail on undefined username', () => {
                expect(() => logic.authenticateUser(undefined, user.password)).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other test cases
        })

        describe('retrieve', () => {
            beforeEach(() => {
                postit = new Postit({ text:'hello text', status: "TODO" })
                user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123', postits: [postit] })
               
                return user.save()
            })
            
            it('should succeed on valid id', () => {
                User.findOne({ username: user.username })
                    .then(user => {

                    logic.retrieveUser(username.id)
                        .then(_user => {
                            expect(_user).not.to.be.instanceof(User)

                            const { id, name, surname, username, password, postits } = _user
                            
                            expect(id).to.exist
                            expect(id).to.equal(user.id)
                            expect(name).to.equal(user.name)
                            expect(surname).to.equal(user.surname)
                            expect(username).to.equal(user.username)
                            expect(password).to.be.undefined
                            expect(postits).not.to.exist
                            
                        })
                    })
                })
        })

        describe('update', () => {
            
            beforeEach(() =>  user = new User({ name: 'John', surname: 'Doe', username: 'jd', password: '123' }).save())

            it('should update on correct data and password', () => {
                const { id, name, surname, username, password } = user

                const newName = `${name}-${Math.random()}`
                const newSurname = `${surname}-${Math.random()}`
                const newUsername = `${username}-${Math.random()}`
                const newPassword = `${password}-${Math.random()}`

                User.findOne({ username: user.username })
                    .then(user => {

                    logic.updateUser(id, newName, newSurname, newUsername, newPassword, password)
                        .then(() => user.find())
                        .then(_users => {
                            const [_user] = _users

                            expect(_user.id).to.equal(id)

                            const { name, surname, username, password } = _user

                            expect(name).to.equal(newName)
                            expect(surname).to.equal(newSurname)
                            expect(username).to.equal(newUsername)
                            expect(password).to.equal(newPassword)
                        })
                })
            })

            it('should update on correct id, name and password (other fields null)', () => {
                const { id, name, surname, username, password } = user

                const newName = `${name}-${Math.random()}`

                User.findOne({ username: user.id })
                    .then(user => {

                    logic.updateUser(id, newName, null, null, null, password)
                        .then(() => user.find())
                        .then(_users => {
                            const [_user] = _users

                            expect(_user.id).to.equal(id)

                            expect(_user.name).to.equal(newName)
                            expect(_user.surname).to.equal(surname)
                            expect(_user.username).to.equal(username)
                            expect(_user.password).to.equal(password)
                        })
                    })
                })    

            it('should update on correct id, surname and password (other fields null)', () => {
                const { id, name, surname, username, password } = user

                const newSurname = `${surname}-${Math.random()}`

                User.findOne({ username: user.id })
                    .then(user => {

                    logic.updateUser(id, null, newSurname, null, null, password)
                    .then(() => user.find())
                    .then(_users => {
                        const [_user] = _users

                        expect(_user.id).to.equal(id)

                        expect(_user.name).to.equal(name)
                        expect(_user.surname).to.equal(newSurname)
                        expect(_user.username).to.equal(username)
                        expect(_user.password).to.equal(password)
                    })
                })
            })

            // TODO other combinations of valid updates

            it('should fail on undefined id', () => {
                const { id, name, surname, username, password } = user

                expect(() => logic.updateUser(undefined, name, surname, username, password, password)).to.throw(TypeError, 'undefined is not a string')
            })

            // TODO other test cases

            describe('with existing user', () => {
                let user2

                beforeEach(() => {
                    user = User.create({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })
                    user2 = User.create({ name: 'John', surname: 'Doe', username: 'jd2', password: '123' })

                    return User
                })

                it('should update on correct data and password', () => {
                    const { id, name, surname, username, password } = user2

                    const newUsername = 'jd'

                    User.findOne({ username: user.id })
                        .then(user => {

                        logic.updateUser(id, null, null, newUsername, null, password)
                        .then(() => expect(true).to.be.false)
                        .catch(err => {
                            expect(err).to.be.instanceof(AlreadyExistsError)

                            return user.findOne({ id })
                        })
                        .then(_user => {
                            expect(_user.id).to.equal(id)

                            expect(_user.name).to.equal(name)
                            expect(_user.surname).to.equal(surname)
                            expect(_user.username).to.equal(username)
                            expect(_user.password).to.equal(password)
                        })
                    })
                })
            })
        })
    })

    describe('postits', () => {
        describe('add', () => {

            beforeEach(() => {
                User.create({ name: 'John', surname: 'Doe', username: 'jd', password: '123' })

                Postit.create({text: `text-${Math.random()}`, status: "TODO"})

                return user
            })

            it('should succeed on correct data', () => {

                User.findOne({ username: user.id })
                    .then(user => {

                    logic.addPostit(user.id, text)
                        .then(() => users.find().toArray())
                        .then(_users => {
                            const [_user] = _users

                            expect(_user.id).to.equal(user.id)

                            const { postits } = _user

                            expect(postits.length).to.equal(1)

                            const [postit] = postits

                            expect(postit.text).to.equal(text)
                        })
                    
                })
            })

            // TODO other test cases
        })

        describe('list', () => {

            beforeEach(() => {
                postit = Postit.create({ text: 'hello text' , status: "TODO"})
                postit2 = Postit.create({ text: 'hello text 2' , status: "TODO"})

                User.create({ name: 'John', surname: 'Doe', username: 'jd', password: '123', postits: [postit, postit2] })

                return user
            })

            it('should succeed on correct data', () => {

                User.findOne({ username: user.id })
                    .then(user => {

                logic.listPostits(user.id)
                    .then(postits => {
                        return user.find()
                            .then(_users => {
                                expect(_users.length).to.equal(1)

                                const [_user] = _users

                                expect(_user.id).to.equal(user.id)

                                const { postits: _postits } = _user

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

        describe('remove', () => {
           
            beforeEach(() => {
                Postit.create({ text: 'hello text', status: "TODO"})
                User.create({ name: 'John', surname: 'Doe', username: 'jd', password: '123', postits: [postit] })

                return user
            })

            it('should succeed on correct data', () => {

                User.findOne({ username: user.id })
                    .then(user => {

                logic.removePostit(user.id, postit.id)
                    .then(() => user.find())
                    .then(_users => {
                        expect(_users.length).to.equal(1)

                        const [_user] = _users

                        expect(_user.id).to.equal(user.id)

                        const { postits } = _user

                        expect(postits.length).to.equal(0)
                    })
                })
            })
        })

        describe('modify', () => {
           

            beforeEach(() => {
                Postit.create({ text: 'hello text', status: "TODO" })
                User.create({ name: 'John', surname: 'Doe', username: 'jd', password: '123', postits: [postit] })

                newText = `new-text-${Math.random()}`

                return user
            })

            it('should succeed on correct data', () => {

                User.findOne({ username: user.id })
                    .then(user => {

                logic.modifyPostit(user.id, postit.id, newText)
                    .then(() => user.find())
                    .then(_users => {
                        expect(_users.length).to.equal(1)

                        const [_user] = _users

                        expect(_user.id).to.equal(user.id)

                        const { postits } = _user

                        expect(postits.length).to.equal(1)

                        const [postit] = postits

                        expect(postit.text).to.equal(newText)
                    })
                })    
            })
        })
    })

    after(() => mongoose.disconnect())
})