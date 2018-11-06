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

app.get('/logout', (req, res) => {
    req.session.userId = null

    res.redirect('/')
})

app.post('/postits', jsonBodyParser, (req, res) => {
    const { operation } = req.body

    try {
        switch (operation) {
            case 'add':
                const { text } = req.body

                logic.addPostit(req.session.userId, text)
                    .then(() => {
                        delete req.session.error

                        res.redirect('/home')
                    })
                    .catch(({ message }) => {
                        req.session.error = message

                        res.redirect('/home')
                    })

                break
            case 'remove':
                const { postitId } = req.body

                logic.removePostit(req.session.userId, Number(postitId))
                    .then(() => res.redirect('/home'))
                    .catch(({ message }) => {
                        req.session.error = message

                        res.redirect('/home')
                    })
                break
            case 'edit':
                {
                    const { postitId } = req.body

                    req.session.postitId = postitId
                }

                res.redirect('/home')
                break
            case 'save':
                {
                    const { postitId, text } = req.body

                    logic.modifyPostit(req.session.userId, Number(postitId), text)
                        .then(() => {
                            delete req.session.postitId

                            res.redirect('/home')
                        })
                        .catch(({ message }) => {
                            req.session.error = message

                            res.redirect('/home')
                        })
                }
                break
            default:
                res.redirect('/home')
        }
    } catch ({ message }) {
        req.session.error = message

        res.redirect('/home')
    }
})

app.listen(port, () => console.log(`${package.name} ${package.version} up and running on port ${port}`))