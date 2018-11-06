require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const logic = require('./logic')
const package = require('./package.json')
const jwt = require('jsonwebtoken')

const { env: { PORT, JWT_SECRET } } = process

const { argv: [, , port = PORT || 8080] } = process

const app = express()

const jsonBodyParser = bodyParser.json()

app.post('/api/user', jsonBodyParser, (req, res) => {
    const { name, surname, username, password } = req.body

    try {
        logic.registerUser(name, surname, username, password)
            .then(() =>
                res.json({
                    status: 'OK',
                    message: `${username} successfully registered`
                })
            )
            .catch(({ message }) =>
                res.json({
                    status: 'KO',
                    message
                })
            )
    } catch ({ message }) {
        res.json({
            status: 'KO',
            message
        })
    }
})

app.post('/api/auth', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    try {
        logic.authenticateUser(username, password)
            .then(id => {
                const token = jwt.sign({ sub: id }, JWT_SECRET)

                res.json({
                    status: 'OK',
                    data: {
                        id,
                        token
                    }
                })
            })
            .catch(({ message }) =>
                res.json({
                    status: 'KO',
                    message
                })
            )
    } catch ({ message }) {
        res.json({
            status: 'KO',
            message
        })
    }
})

app.get('/api/user/:id', (req, res) => {
    const { params: { id }, headers: { authorization } } = req

    const token = authorization.split(' ')[1]

    try {
        const { sub } = jwt.verify(token, JWT_SECRET)

        if (id !== sub) throw Error('token sub does not match user id')

        logic.retrieveUser(id)
            .then(user =>
                res.json({
                    status: 'OK',
                    data: user
                })
            )
            .catch(({ message }) =>
                res.json({
                    status: 'KO',
                    message
                })
            )
    } catch ({ message }) {
        res.json({
            status: 'KO',
            message
        })
    }
})

app.post('/api/user/postits/:id', jsonBodyParser, (req, res) => {
    
    const { body: { text }, params: { id }, headers: { authorization } } = req
    
    const token = authorization.split(' ')[1]
    
    try {
        const { sub } = jwt.verify(token, JWT_SECRET)

        if (id !== sub) throw Error('token sub does not match user id')

        logic.addPostit(id, text)
            .then(() => {
                res.json({
                    status: 'OK',
                    message: 'post successfully added'
                    
                })        
            })
            .catch(({ message }) =>
                res.json({
                    status: 'KO',
                    message
            })
        )
    } catch ({ message }) {
        res.json({
            status: 'KO',
            message
    })
    }          
})

app.delete('/api/user/postits/:id', jsonBodyParser, (req, res) => {

    const { body: { postitId }, params: { id }, headers: { authorization } } = req
    
    const token = authorization.split(' ')[1]
    
    try {
        const { sub } = jwt.verify(token, JWT_SECRET)

        if (id !== sub) throw Error('token sub does not match user id')

        logic.removePostit(id, postitId)
            .then(() => {
                res.json({
                    status: 'OK',
                    message: 'post successfully deleted'
                    
                })        
            })
            .catch(({ message }) =>
                res.json({
                    status: 'KO',
                    message
            })
        )
    } catch ({ message }) {
        res.json({
            status: 'KO',
            message
    })
    }          
})

app.put('/api/user/postits/:id', jsonBodyParser, (req, res) => {
    
    const { body: { postitId, text }, params: { id }, headers: { authorization } } = req
    
    const token = authorization.split(' ')[1]
    
    try {
        const { sub } = jwt.verify(token, JWT_SECRET)

        if (id !== sub) throw Error('token sub does not match user id')

        logic.modifyPostit(id, postitId, text)
            .then(() => {
                res.json({
                    status: 'OK',
                    message: 'post successfully edited'
                    
                })        
            })
            .catch(({ message }) =>
                res.json({
                    status: 'KO',
                    message
            })
        )
    } catch ({ message }) {
        res.json({
            status: 'KO',
            message
    })
    }          
})

app.post

app.listen(port, () => console.log(`${package.name} ${package.version} up and running on port ${port}`))