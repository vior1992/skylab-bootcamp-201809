const { User, Partyup } = require('../data')
const validateLogic = require('../utilities/validate')
const { AlreadyExistsError, AuthError, NotFoundError, ValueError } = require('../errors')
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

            if (user) throw new AlreadyExistsError(`username ${username} already exists`)

            user = new User({ name, surname, city, username, password })

            await user.save()
        })()
    },

    authenticateUser(username, password) {
        validateLogic([
            { key: 'username', value: username, type: String },
            { key: 'password', value: password, type: String }
        ])

        return (async () => {
            const user = await User.findOne({ username })

            if (!user || user.password !== password) throw new AuthError('Wrong credentials, try again')

            return user.id
        })()
    },

    retrieveLoggedUser(id) {
        validateLogic([{ key: 'id', value: id, type: String }])
        return (async () => {
            const user = await User.findById(id, { '_id': 0, password: 0,  __v: 0 }).lean()

            if (!user) throw new NotFoundError(`user not found`)

            user.id = id
           
            return user
        })()
    },

    async searchUserById(userId) {
        validateLogic([{ key: 'userId', value: userId, type: String }])

        const user = await User.findById(userId)

        return user
    },

    createPartyup(title, description, date, city, place, tags, userId) {
        validateLogic([
            { key: 'title', value: title, type: String },
            { key: 'description', value: description, type: String },
            { key: 'date', value: date, type: Date },
            { key: 'city', value: city, type: String },
            { key: 'place', value: place, type: String },
            { key: 'tags', value: tags, type: String },
            { key: 'userId', value: userId, type: String }
        ])

        return (async () => {
            const user = await User.findById(userId)

            if (!user) throw new ValueError(`user not found`)

            const assistants = userId

            const partyup = new Partyup({ title, description, date, city, place, tags, assistants, user: user.id })

            await partyup.save()
        })()
    },

    async searchPartyupById(partyupId) {
        validateLogic([{ key: 'partyupId', value: partyupId, type: String }])

        const partyup = await Partyup.findById(partyupId)

        return partyup
    },

    async listPartyups(perPage, page, city, tags) {
        validateLogic([
            { key: 'perPage', value: perPage, type: Number },
            { key: 'page', value: page, type: Number },
        ])

        if(city) validateLogic([{ key: 'city', value: city, type: String }])

        if(tags) validateLogic([{ key: 'tags', value: tags, type: String }])

        let find = {
            
        }

        if(city) find.city = city
        if(tags) find.tags = tags

        const partyups = await Partyup        
            .find(find)
            .sort({ 'date': -1 })
            .limit(perPage)
            .skip(perPage * (page - 1))

        return partyups
    },

    async listPartyupsCreatedBy(userId) {
        validateLogic([{ key: 'userId', value: userId, type: String }])
      
        const partyups = await Partyup.find({ user: userId }, { description: 0, user: 0, tags: 0, "__v": 0})

        return partyups
    },

    async listPartyupsIAssist(userId) {
        validateLogic([{ key: 'userId', value: userId, type: String }])
      
        const partyups = await Partyup.find({ assistants: userId }, { description: 0, place: 0, assistants: 0, tags: 0, "__v": 0})

        return partyups
    },

    async assistToPartyup(userId, partyupId) {
        validateLogic([
            { key: 'userId', value: userId, type: String },
            { key: 'partyupId', value: partyupId, type: String },
        ])
        
        const partyup = await Partyup.findById(partyupId)

        const userAssist = partyup.assistants.find(user => user === userId)  

        if (typeof userAssist === 'string') throw new ValueError('User is on assistance list') 

        partyup.assistants.push(userId)

        return partyup.save()
    },

    async notAssistToPartyup(userId, partyupId) {
        validateLogic([
            { key: 'userId', value: userId, type: String },
            { key: 'partyupId', value: partyupId, type: String },
        ])

        const partyup = await Partyup.findById(partyupId)

        const userNoAssist = partyup.assistants.filter(user => {
            user === userId
            return user !== userId
        })

        partyup.assistants = userNoAssist

        return partyup.save()
    }
}

module.exports = logic