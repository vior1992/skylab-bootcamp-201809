const logic = require('.')
const { mongoose, models: { User, Partyup, Commentary } } = require('partyup-data')
const { expect } = require('chai')

const MONGO_URL = 'mongodb://localhost:27017/partyup-test'

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })

describe('logic', () => {
    before(() =>  mongoose.connect(`${MONGO_URL}`, { useNewUrlParser: true }))

    beforeEach(() => Promise.all([User.deleteMany(), Partyup.deleteMany(), Commentary.deleteMany()]))

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
                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })

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

        describe('find user by id', () => {
            let user

            beforeEach(() => {
                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                
                return user.save()
            })

            it('should succeed on correct data', async () => {
                    const _user = await logic.searchUserById(user.id)
                
                    expect(_user.id).to.be.a('string')
                    expect(_user.name).to.equal(user.name)
                    expect(_user.surname).to.equal(user.surname)
                    expect(_user.city).to.equal(user.city)
                    expect(_user.username).to.equal(user.username)
                    expect(_user.password).to.equal(user.password)
            })
        })

    false && describe('partyups', () => {
        describe('create', () => {
            let user, title, description, date, city, tags

            beforeEach(() => {
                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                title = "prueba"
                description = 'prueba en el test'
                date = new Date()
                city = '01'
                place = 'skylab'
                tags = "01"
                
                
                return user.save()
            })

            it('should succeed on correct data', async () => {
                    const res = await logic.createPartyup(title, description, date, city, place, tags, user.id)

                            expect(res).to.be.undefined

                            const _partyups = await Partyup.find()
        
                            expect(_partyups.length).to.equal(1)

                            const [partyup] = _partyups
                                            
                            expect(partyup.title).to.equal(title)
                            expect(partyup.title).to.be.a('string')

                            expect(partyup.description).to.equal(description)
                            expect(partyup.description).to.be.a('string')

                            // expect(partyup.date).to.equal(date)
                            // expect(partyup.date).to.be.a('date')
                            
                            expect(partyup.city).to.equal(city)
                            expect(partyup.city).to.be.a('string')

                            expect(partyup.place).to.equal(place)
                            expect(partyup.place).to.be.a('string')

                            expect(partyup.tags).to.equal(tags)
                            expect(partyup.tags).to.be.a('string')      
            })

            //TITLE FAIL TESTS//
            it('should fail on undefined title ', () => {
                expect(() => logic.createPartyup(undefined, description, date, city, place, tags, user.id)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank title', () => {
                expect(() => logic.createPartyup('  ', description, date, city, place, tags, user.id)).to.throw(Error, 'title is empty or blank')
            })

            it('should fail on number title (not a string)', () => {
                expect(() => logic.createPartyup(1, description, date, city, place, tags, user.id)).to.throw(Error, '1 is not a string')
            })

            it('should fail on boolean title (not a string)', () => {
                expect(() => logic.createPartyup(true, description, date, city, place, tags, user.id)).to.throw(Error, 'true is not a string')
            })

            //DESCRIPTION FAIL TESTS//
            it('should fail on undefined description ', () => {
                expect(() => logic.createPartyup(title, undefined, date, city, place, tags, user.id)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank description', () => {
                expect(() => logic.createPartyup(title, '  ', date, city, place, tags, user.id)).to.throw(Error, 'description is empty or blank')
            })

            it('should fail on number description (not a string)', () => {
                expect(() => logic.createPartyup(title, 1, date, city, place, tags, user.id)).to.throw(Error, '1 is not a string')
            })

            it('should fail on boolean description (not a string)', () => {
                expect(() => logic.createPartyup(title, true, date, city, place, tags, user.id)).to.throw(Error, 'true is not a string')
            })

            //CITY FAIL TEST
            it('should fail on undefined city ', () => {
                expect(() => logic.createPartyup(title, description, date, undefined, place, tags, user.id)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank city', () => {
                expect(() => logic.createPartyup(title, description, date, '  ', place, tags, user.id)).to.throw(Error, 'city is empty or blank')
            })

            it('should fail on number city (not a string)', () => {
                expect(() => logic.createPartyup(title, description, date, 1, place, tags, user.id)).to.throw(Error, '1 is not a string')
            })

            it('should fail on boolean city (not a string)', () => {
                expect(() => logic.createPartyup(title, description, date, true, place, tags, user.id)).to.throw(Error, 'true is not a string')
            })

            //PLACE FAIL TEST
            it('should fail on undefined place ', () => {
                expect(() => logic.createPartyup(title, description, date, city, undefined, tags, user.id)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank place', () => {
                expect(() => logic.createPartyup(title, description, date, city, '  ', tags, user.id)).to.throw(Error, 'place is empty or blank')
            })

            it('should fail on number place (not a string)', () => {
                expect(() => logic.createPartyup(title, description, date, city, 1, tags, user.id)).to.throw(Error, '1 is not a string')
            })

            it('should fail on boolean place (not a string)', () => {
                expect(() => logic.createPartyup(title, description, date, city, true, tags, user.id)).to.throw(Error, 'true is not a string')
            })

            //TAGS FAIL TEST
            it('should fail on undefined tags ', () => {
                expect(() => logic.createPartyup(title, description, date, city, place, undefined, user.id)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank tags', () => {
                expect(() => logic.createPartyup(title, description, date, city, place, '  ', user.id)).to.throw(Error, 'tags is empty or blank')
            })

            it('should fail on number tags (not a string)', () => {
                expect(() => logic.createPartyup(title, description, date, city, place, 1, user.id)).to.throw(Error, '1 is not a string')
            })

            it('should fail on boolean tags (not a string)', () => {
                expect(() => logic.createPartyup(title, description, date, city, place, true, user.id)).to.throw(Error, 'true is not a string')
            })

            //USER.ID FAIL TEST
            it('should fail on undefined userid ', () => {
                expect(() => logic.createPartyup(title, description, date, city, place, tags, undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty or blank userid', () => {
                expect(() => logic.createPartyup(title, description, date, city, place, tags, '  ')).to.throw(Error, 'userId is empty or blank')
            })

            it('should fail on number userid (not a string)', () => {
                expect(() => logic.createPartyup(title, description, date, city, place, tags, 1)).to.throw(Error, '1 is not a string')
            })

            it('should fail on boolean userid (not a string)', () => {
                expect(() => logic.createPartyup(title, description, date, city, place, tags, true)).to.throw(Error, 'true is not a string')
            })
        })

        false && describe('list', () => {
            let user, partyup, partyup2

            beforeEach(() => {

                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id, picture: "string"} )
                partyup2 = new Partyup({ title: "prueba2", description: 'prueba en el test2', date: new Date(), city: '02', place: 'skylab2', tags: "02", user: user.id, picture: "string"})

                return user.save()
                    .then(() => Promise.all([partyup.save(), partyup2.save()]))
            })

            it('should succeed on correct data', () => {
                logic.listPartyupsCreatedBy(user.id)
                    .then(partyups => {
                        return Partyup.find()
                            .then(_partyups => {
                                expect(partyups.length).to.equal(2)

                                expect(partyups.length).to.equal(_partyups.length)
                                const [_partyup, _partyup2] = _partyups

                                expect(_partyup.id).to.equal(partyup.id)
                                expect(_partyup.title).to.equal(partyup.title)
                                expect(_partyup.description).to.equal(partyup.description)
                                expect(_partyup.place).to.equal(partyup.place)
                                expect(_partyup.city).to.equal(partyup.city)
                                expect(_partyup.tags).to.equal(partyup.tags)

                                expect(_partyup2.id).to.equal(partyup2.id)
                                expect(_partyup2.title).to.equal(partyup2.title)
                                expect(_partyup2.description).to.equal(partyup2.description)
                                expect(_partyup2.place).to.equal(partyup2.place)
                                expect(_partyup2.city).to.equal(partyup2.city)
                                expect(_partyup2.tags).to.equal(partyup2.tags)

                                const [__partyup, __partyup2] = partyups

                                expect(_partyup.id).to.equal(__partyup.id)
                                expect(_partyup.title).to.equal(__partyup.title)
                                expect(_partyup.description).to.equal(__partyup.description)
                                expect(_partyup.place).to.equal(__partyup.place)
                                expect(_partyup.city).to.equal(__partyup.city)
                                expect(_partyup.tags).to.equal(__partyup.tags)

                                expect(_partyup2.id).to.equal(__partyup2.id)
                                expect(_partyup2.title).to.equal(__partyup2.title)
                                expect(_partyup2.description).to.equal(__partyup2.description)
                                expect(_partyup2.place).to.equal(__partyup2.place)
                                expect(_partyup2.city).to.equal(__partyup2.city)
                                expect(_partyup2.tags).to.equal(__partyup2.tags)
                            })
                    })
                
            })

            it('should succeed on correct data', () => {
                logic.listPartyups()
                    .then(partyup => {
                        return partyup.find()
                            .then(_partyups => {
                                expect(_partyups.length).to.equal(2)

                                expect(partyups.length).to.equal(_partyups.length)

                                const [_partyup, _partyup2] = _partyups

                                expect(_partyup.id).to.equal(partyup.id)
                                expect(_partyup.title).to.equal(partyup.title)
                                expect(_partyup.description).to.equal(partyup.description)
                                expect(_partyup.place).to.equal(partyup.place)
                                expect(_partyup.city).to.equal(partyup.city)
                                expect(_partyup.tags).to.equal(partyup.tags)

                                expect(_partyup2.id).to.equal(partyup2.id)
                                expect(_partyup2.title).to.equal(partyup2.title)
                                expect(_partyup2.description).to.equal(partyup2.description)
                                expect(_partyup2.place).to.equal(partyup2.place)
                                expect(_partyup2.city).to.equal(partyup2.city)
                                expect(_partyup2.tags).to.equal(partyup2.tags)

                                const [__partyup, __partyup2] = partyups

                                expect(_partyup.id).to.equal(__partyup.id)
                                expect(_partyup.title).to.equal(__partyup.title)
                                expect(_partyup.description).to.equal(__partyup.description)
                                expect(_partyup.place).to.equal(__partyup.place)
                                expect(_partyup.city).to.equal(__partyup.city)
                                expect(_partyup.tags).to.equal(__partyup.tags)

                                expect(_partyup2.id).to.equal(__partyup2.id)
                                expect(_partyup2.title).to.equal(__partyup2.title)
                                expect(_partyup2.description).to.equal(__partyup2.description)
                                expect(_partyup2.place).to.equal(__partyup2.place)
                                expect(_partyup2.city).to.equal(__partyup2.city)
                                expect(_partyup2.tags).to.equal(__partyup2.tags)
                            })
                    })
                
            })

        describe('search partyup by partyup Id', () => {
            let user, partyup

            beforeEach(() => {

                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id})    
                
                return user.save()
                    .then(() => Promise.all([ partyup.save() ]))

            })

            it('should succeed on correct data (Search partyup for partyupId', () => {
                logic.searchPartyupById(partyup._id)
                    .then(partyup => {
                        return partyup.find()
                            .then(_partyup => {
                                expect(_partyup).to.exist()
                                expect(_partyup.length).to.equal(1)

                                expect(_partyup.title).to.equal(partyup.title)
                                expect(_partyup.description).to.equal(partyup.description)
                                expect(_partyup.city).to.equal(partyup.city)
                                expect(_partyup.place).to.equal(partyup.id)
                                expect(_partyup.tags).to.equal(partyup.id)
                                expect(_partyup.user).to.equal(partyup.user)
                            })
                    })
            })
        })

        false && describe('search partyup Ill assist', () => {
            let user, partyup

            beforeEach(() => {

                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id})    
                
                return user.save()
                    .then(() => {
                        Promise.all([ partyup.save() ])
                        logic.assistToPartyup(user.id, partyup._id)
                    })

            })

            it('should succeed on correct data(Partyup Ill assist)', () => {
                logic.listPartyupsIAssist(user.id)
                    .then(partyup => {
                        return partyup.find()
                            .then(_partyup => {
                                expect(_partyup).to.exist()
                                expect(_partyup.length).to.equal(1)

                                expect(_partyup.title).to.equal(partyup.title)
                                expect(_partyup.description).to.equal(partyup.description)
                                expect(_partyup.city).to.equal(partyup.city)
                                expect(_partyup.place).to.equal(partyup.id)
                                expect(_partyup.tags).to.equal(partyup.id)
                                expect(_partyup.user).to.equal(partyup.user)
                            })
                    })   
            })
        })

        false && describe('assist to partyup', () => {
            let user, partyup

            beforeEach(() => {

                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id})    
                
                return user.save()
                    .then(() => Promise.all([ partyup.save() ]))

            })
        
            it('should succeed on correct data (assist to partyup)', () => {
                logic.assistToPartyup(user.id, partyup._id)
                    .then(partyup => {
                        return partyup.find()
                            .then(_partyups => {
                                expect(_partyups).to.exist()
                                expect(_partyups.length).to.equal(1)

                                expect(_partyup.assistants).to.equal(1)
                                expect(_partyups.assistants.length).to.equal(1)
                                expect(_partyup.assistants).to.equal(user.id)
                            })
                    })
                
            })
        })

        false && describe('NOT assist to partyup', () => {
            let user, partyup

            beforeEach(() => {

                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id})    
                
                return user.save()
                    .then(() => {
                        Promise.all([ partyup.save() ])
                        logic.assistToPartyup(user.id, partyup._id)
                    })
            })
        
            it('should succeed on correct data (Not assist)', () => {
                logic.notAssistToPartyup(user.id, partyup._id)
                    .then(partyup => {
                        return partyup.find()
                            .then(_partyups => {
                                expect(_partyups).to.exist()
                                expect(_partyups.length).to.equal(0)

                                expect(_partyup.assistants).to.equal(0)
                                expect(_partyups.assistants.length).to.equal(0)
                            })
                    })   
            })
            
            //ADD PARTYUP PICTURE

            describe('Add picture to partyup', () => {
                let user, partyup
    
                beforeEach(() => {
    
                    user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                    partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id})    
                    
                    return user.save()
                        .then(() => {
                            Promise.all([ partyup.save() ])
                        })
                })
            
                it('should succeed on correct data (upload a picture)', () => {
                    logic.addPartyupPicture(chunk)
                        .then(picture => {
                            return partyup.find()
                                .then(_partyups => {
                                    expect(_partyups).to.exist()
                                    expect(_partyups.picture).to.equal(1)
                                })
                        })   
                })
            })
            //DELETE PARTYUP
            describe('Should delete partyup', () => {
                let user, partyup
    
                beforeEach(() => {
    
                    user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                    partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id})    
                    
                    return user.save()
                        .then(() => {
                            Promise.all([ partyup.save() ])
                        })
                })
            
                it('should succeed on correct data (delete)', () => {
                    logic.deletePartyup(user._id, partyup._id)
                        .then(() => {
                            return partyup.find()
                                .then(_partyups => {
                                    expect(_partyups).to.be(undefined)
                                    expect(_partyups).to.equal(0)
                                })
                        })   
                })
            })
        })  
    })
}) 
        //COMMENT
        describe('Should create commentary', () => {
            
            let user, partyup, text

            beforeEach(() => {

                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id})    
                text = "Test text testing text" 
                
                return user.save()
                    .then(() => {
                        Promise.all([ partyup.save() ])
                        
                    })
            })
            
            it('should succeed on correct data (create comment)', () => {
                logic.commentPartyup(user.id, partyup.id, text)
                    .then(() => {
                        return Commentary.find()
                            .then(comment => {
                                expect(comment[0].text).to.equal("Test text testing text")
                                expect(comment[0].partyupId.toString()).to.equal(partyup.id)
                                expect(comment[0].userId.toString()).to.equal(user.id)
                            })
                    })   
            })
        })

        //RETRIEVE COMMENT
        describe('Should retrieve commentary from partyup', () => {
            let user, partyup, comment

            beforeEach(() => {

                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id})    
                comment = new Commentary({ userId: user.id, partyupId: partyup.id, text: "Test text testing text" })
                
                return user.save()
                    .then(() => {
                        Promise.all([ partyup.save(), comment.save() ])
                    })
            })
        
            it('should succeed on correct data (create comment)', () => {
                logic.retrieveComments(partyup.id)
                    .then(comment => {
                        debugger
                        expect(comment[0].text).to.equal(comment.text)
                        expect(comment[0].partyupId.toString()).to.equal(partyup.id)
                        expect(comment[0].userId.toString()).to.equal(user.id)
                    })
            })   
        })
                   
        //DELETE COMMENTS
        false && describe('Should delete commentary from partyup', () => {
            let user, partyup, comment

            beforeEach(() => {
                user = new User({ name: `Dani-${Math.random()}`, surname: `ville-${Math.random()}`, city: `bcn-${Math.random()}`, username: `db-${Math.random()}`, password: `1-${Math.random()}` })
                partyup = new Partyup({ title: "prueba", description: 'prueba en el test', date: new Date(), city: '01', place: 'skylab', tags: "01", user: user.id})    
                comment = new Commentary({ userId: user._id, partyupId: partyup._id, text: "Test text testing text" })

                return user.save()
                    .then(() => {
                        Promise.all([ partyup.save(), comment.save() ])
                    })
            })
        
            it('should succeed on correct data (delete comment)', () => {
                logic.deleteComment(comment._id.toString(), user._id.toString())
                    .then(res => {
                        expect(res).to.be.undefined
                    
                    })
                    .then(() => {
                        const comments = Commentary.find()
                        
                        expect(comments.length).to.equal(0)
                    })
            })   
        })
        
    
    })
    after(() => mongoose.disconnect())
})