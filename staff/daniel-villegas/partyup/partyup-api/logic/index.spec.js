const logic = require('.')
const { User, Partyup } = require('../data')

const MONGO_URL = 'mongodb://localhost:27017/kanban-test'

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })
