const { User, Partyup } = require('../data')
const validateLogic = require('../utilities/validate')
const fs = require('fs')
const path = require('path')

const logic = {
    registerUser(name, surname, city, username, password) {
        validateLogic([
            { key: 'name', value: name, type: String }, 
            { key: 'surname', value: surname, type: String },
            { key: 'city', value: city, type: String },
            { key: 'username', value: username, type: String }, 
            { key: 'password', value: password, type: String }
        ])
        
        return (async () => {
            let user = await User.findOne({ username })

            if (user) throw TypeError(`username ${username} already exists`)

            user = new User({ name, surname, city, username, password })

            await user.save()
        })()
    },

    authenticateUser( username, password ) {
        validateLogic([
            { key: 'username', value: username, type: String }, 
            { key: 'password', value: password, type: String }
        ])

        return (async () => {
            const user = await User.findOne({ username })

            if (!user || user.password !== password) throw TypeError ('Wrong credentials, try again')

            return user.id
        })()
    },

    retrieveLoggedUser(id) {
        validateLogic([{ key: 'id', value: id, type: String }])
            return (async () => {
                const user = await User.findById(id, { '_id': 0, password: 0, postits: 0, __v: 0 }).lean()

                if (!user) throw TypeError(`user not found`)

                user.id = user

                return user
            })()
    },

    createPartyup(title, description, date, city, place, tags, id) {
        validateLogic([
            { key: 'title', value: title, type: String }, 
            { key: 'description', value: description, type: String },
            { key: 'date', value: date, type: String },
            { key: 'city', value: city, type: String },
            { key: 'place', value: place, type: String }, 
            { key: 'tags', value: tags, type: String },
            { key: 'id', value: id, type: String }
        ])

        return (async () => {
            const user = await User.findById(id)

            if (!user) throw TypeError(`user not found`)

            const partyup = new Partyup({ title, description, date, city, place, tags, user: user.id })

            await partyup.save()  
        })()
    }
}

module.exports = logic