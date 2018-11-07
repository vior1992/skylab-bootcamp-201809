require('dotenv').config()

const express = require('express')
const package = require('./package.json')
const router = require('./routes')

const { env: { PORT } } = process

const { argv: [, , port = PORT || 8080] } = process

const app = express()

function cors(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Headers', 'Content-Type')

    next()
}

app.use(cors)

app.use('/api', router)

app.listen(port, () => console.log(`${package.name} ${package.version} up and running on port ${port}`))