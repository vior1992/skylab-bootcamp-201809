const mongoose = require('mongoose')
const { User , Postit } = require('./schemas')

module.exports = {
    User: mongoose.model('User', User),
    Postit: mongoose.model('Postit', Postit)
}