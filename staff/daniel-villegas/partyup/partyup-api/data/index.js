const mongoose = require('mongoose')
const { User , Partyup } = require('./schemas')

module.exports = {
    User: mongoose.model('User', User),
    Partyup: mongoose.model('Partyup', Partyup)
}