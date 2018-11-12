require('dotenv').config()

const { MongoClient } = require('mongodb')
const { expect } = require('chai')
const { User } = require('.')

const { env: { MONGO_URL } } = process

describe('User (model)', () => {
    let client, users

    before(() => {
        client = new MongoClient(MONGO_URL, { useNewUrlParser: true })

        return client.connect()
            .then(() => {
                const db = client.db('postit-test')

                users = db.collection('users')

                User._collection = users
            })
    })

    describe('save', () => {
        let name, surname, username, password

        beforeEach(() => {
            name = `name-${Math.random()}`
            surname = `surname-${Math.random()}`
            username = `username-${Math.random()}`
            password = `password-${Math.random()}`

            return users.deleteMany()
        })

        it('should succeed on correct data', () =>
            new User({ name, surname, username, password }).save()
                .then(() => users.find().toArray())
                .then(_users => {
                    expect(_users.length).to.equal(1)

                    const [user] = _users

                    expect(user.name).to.equal(name)
                    expect(user.surname).to.equal(surname)
                    expect(user.username).to.equal(username)
                    expect(user.password).to.equal(password)
                })
        )

        describe('when user already exists', () => {
            let name, surname, username, password, id

            beforeEach(() => {
                name = `name-${Math.random()}`
                surname = `surname-${Math.random()}`
                username = `username-${Math.random()}`
                password = `password-${Math.random()}`

                const user = new User({ name, surname, username, password }).save()
                    .then(() => user.find().toArray())
                    .then(_users => {
                        let _user = _users[0]
                        id = _user.id
                        return _user
                    })

            })

            it('should succeed on correct username', () => {
                return user.find().toArray()
                 .then(_users => {
                    expect(_users.length.to.equal(1))
                    let _user = _users[0]
                    expect(_user).to.exist
                    expect(_user.name).to.equal(name)
                    expect(_user.surname).to.equal(surname)
                    expect(_user.username).to.equal(username)
                    expect(user.password).to.equal(password)

                    newName = `name-${Math.random()}`

                    const
                 })
        
                expect(users.length).to.equal(1)

                let [user] = users

                expect(user).to.exist

                expect(user.name).to.equal(name)
                expect(user.surname).to.equal(surname)
                expect(user.username).to.equal(username)
                expect(user.password).to.equal(password)

                const newName = `${name}-${Math.random()}`

                const _user = new User({ name: newName, surname, username, password })

                _user.id = id

                return _user.save()
                    .then(() => {
                        json = fs.readFileSync(User._file)

                        users = JSON.parse(json)

                        expect(users.length).to.equal(1)

                        user = users[0]

                        expect(user).to.exist

                        expect(user.name).to.equal(newName)
                        expect(user.surname).to.equal(surname)
                        expect(user.username).to.equal(username)
                        expect(user.password).to.equal(password)
                    })
            })
        })
    })

    describe('findByUsername', () => {
        let name, surname, username, password

        beforeEach(() => {
            name = `name-${Math.random()}`
            surname = `surname-${Math.random()}`
            username = `username-${Math.random()}`
            password = `password-${Math.random()}`

            fs.writeFileSync(User._file, JSON.stringify([new User({ name, surname, username, password })]))
        })

        it('should succeed on correct username', () =>
            User.findByUsername(username)
                .then(user => {
                    expect(user).to.exist
                    expect(user).to.be.instanceOf(User)

                    expect(user.name).to.equal(name)
                    expect(user.surname).to.equal(surname)
                    expect(user.username).to.equal(username)
                    expect(user.password).to.equal(password)
                })

        )
    })
})