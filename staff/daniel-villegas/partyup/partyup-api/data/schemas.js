const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

const Partyup = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User',
        unique: true,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    assistants: {
        type: String,
        required: true
    }
})

const User = new Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    partyups: {
        type: ObjectId,
        ref: 'Partyup'
    }
})

module.exports = {
    Partyup,
    User
}