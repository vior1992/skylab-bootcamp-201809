const { User, Partyup } = require('../data')
const validateLogic = require('../utilities/validate')
const { AlreadyExistsError, AuthError, NotFoundError, ValueError } = require('../errors')
const cloudinary = require('cloudinary')
const fs = require('fs')
const path = require('path')

cloudinary.config({
    cloud_name: 'vior1992',
    api_key: '193425753116639',
    api_secret: 'xCezhtXMWcCFHWY8xB6W1m9feIs'
})

const logic = {
     /**
     * 
     * @param {string} base64Image 
     */
    _saveImage(base64Image) {
        return Promise.resolve().then(() => {
            if (typeof base64Image !== 'string') throw new LogicError('base64Image is not a string')

            return new Promise((resolve, reject) => {
                return cloudinary.v2.uploader.upload(base64Image, function (err, data) {
                    if (err) return reject(err)

                    resolve(data.url)
                })
            })
        })
    },

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

    async addUserAvatar(userId, chunk) {
        validateLogic([
            { key: 'userId', value: userId, type: String },
            { key: 'chunk', value: chunk, type: String }
        ])

        const user = await User.findById(userId)

        if (!user) throw new NotFoundError(`user with id ${userId} not found`)

        const imageCloudinary = await logic._saveImage(chunk)

        user.avatar = imageCloudinary

        await user.save()
    },

    async deleteUser(userId) {
        validateLogic([{ key: 'userId', value: userId, type: String }])

        //ELIMINA TODAS LAS PARTYUPS DEL USUARIO
        const userPartyups = await Partyup.find({ user: userId })

        if (userPartyups)
        userPartyups.map(async() => {
           await Partyup.findOneAndDelete({ user: userId })
        })

        // QUITA ASISTENCIA A LAS PARTYUPS
        logic.listPartyupsIAssist(userId)
            .then(partyups => {
                partyups.forEach(partyup => {
                    logic.notAssistToPartyup(userId, partyup.id)
                })
            })
        
        //ELIMINA USUARIO
        const user = await User.findByIdAndDelete(userId)
    },

    createPartyup(title, description, date, city, place, tags, userId, chunk) {
        validateLogic([
            { key: 'title', value: title, type: String },
            { key: 'description', value: description, type: String },
            { key: 'date', value: date, type: Date },
            { key: 'city', value: city, type: String },
            { key: 'place', value: place, type: String },
            { key: 'tags', value: tags, type: String },
            { key: 'userId', value: userId, type: String },
            { key: 'chunk', value: chunk, type: String }
        ])

        return (async () => {
            const user = await User.findById(userId)

            if (!user) throw new ValueError(`user not found`)

            const assistants = userId

            const partyup = new Partyup({ title, description, date, city, place, tags, assistants, user: user.id })

            const imageCloudinary = await logic._saveImage(chunk)

            partyup.picture = imageCloudinary

            await partyup.save()
        })()
    },

    async addPartyupPicture(chunk) {
        validateLogic([{ key: 'chunk', value: chunk, type: String }])

        const picture = await logic._saveImage(chunk)
        
        return picture
    },

    async searchPartyupById(partyupId) {
        validateLogic([{ key: 'partyupId', value: partyupId, type: String }])

        const partyup = await Partyup.findById(partyupId, { '_id': 0, password: 0, __v: 0 }).lean()

        if (!partyup) throw new NotFoundError(`partyup with id ${partyupId} not found`)

        partyup.id = partyupId.toString()

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
            .find(find, { password: 0, __v: 0 }).lean()
            .sort({ 'date': -1 })
            .limit(perPage)
            .skip(perPage * (page - 1))

        partyups.forEach(partyup => {
            partyup.id = partyup._id.toString()
            delete partyup._id
        })
        

        return partyups
    },

    async listPartyupsCreatedBy(userId) {
        validateLogic([{ key: 'userId', value: userId, type: String }])
      
        const partyups = await Partyup.find({ user: userId }, { description: 0, user: 0, tags: 0, "__v": 0}).lean()

        partyups.forEach(partyup => {
            partyup.id = partyup._id.toString() 
            delete partyup._id
        })

        return partyups
    },

    async listPartyupsIAssist(userId) {
        validateLogic([{ key: 'userId', value: userId, type: String }])
      
        const partyups = await Partyup.find({ assistants: userId }, { description: 0, place: 0, assistants: 0, tags: 0, "__v": 0}).lean()

        partyups.forEach(partyup => {
            partyup.id = partyup._id.toString()
            delete partyup._id
        })

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
    },

    async deletePartyup(userId, partyupId) {
        validateLogic([
            { key: 'userId', value: userId, type: String },
            { key: 'partyupId', value: partyupId, type: String },
        ])

        const partyup = await Partyup.findById(partyupId)

        if (userId === partyup.user)

        await Partyup.findByIdAndDelete(partyupId)

        const _partyup = await Partyup.findByIdAndDelete(partyupId)
    }
}

module.exports = logic