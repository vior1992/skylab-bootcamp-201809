const express = require('express')
const router = express.Router()
const jsonBP = require('body-parser').json()
const logic = require('../logic')
const routeHandler = require('./route-handler')
const jwt = require('jsonwebtoken')
const jwtVerifier = require('./jwt-verifier')
const bearerTokenParser = require('../utilities/bearer-token-parser')

const { env: { JWT_SECRET } } = process

router.post('/users', jsonBP, (req, res) => {
    routeHandler(() => {
        const { name, surname, city, username, password} = req.body

        return logic.registerUser( name, surname, city, username, password)
            .then(() => {
                res.status(201)

                res.json({
                    message: `New user with username ${username} registered!`
                })
            })
    },res)
})

router.post('/authenticate', jsonBP, (req, res) => {
    routeHandler(() => {
        const { username, password } = req.body

        return logic.authenticateUser(username, password)
            .then(id => {
                const token = jwt.sign({ sub: id }, JWT_SECRET)

                res.json({
                    message: `Logged with user ${username}!`,
                    data: { id, token }
                })
            })
    },res)
})

router.get('/users/:id', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        const { params: { id }, sub } = req
        
        if (id !== sub) throw Error('token sub does not match user id')
    
        return logic.retrieveLoggedUser(id)
            .then(user => {
                res.status(200)

                res.json({ data: user })
            })
    },res)
})

router.get('/users/partyup/:userId', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        const { params: { userId }, sub } = req
        
        return logic.searchUserById(userId)
            .then(user => {
                res.status(200)

                res.json(user)
            })
    },res)
})

router.delete('/users/:userId', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        const { params: { userId }, sub } = req

        return logic.deleteUser(userId)
            .then(() => {
                res.status(200)

                res.json({
                    message: `User with id ${userId} and all his partyups has been deleted with success!`
                })
            })
    },res)
})

router.post('/users/:userId/partyups', [bearerTokenParser, jwtVerifier, jsonBP], (req, res) => {
    routeHandler(() => {
        const { title, description, date, city, place, tags } = req.body

        const { params: { userId } } = req

        return logic.createPartyup(title, description, date, city, place, tags, userId)
            .then(() => {
                res.status(201)

                res.json({
                    message: `Partyup in ${city} has been created for the user ${userId}!`
                })
            })
    },res)
})

router.get('/users/:userId/partyups/search?', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        let { query: { perPage = 10, page = 1, city, tags}} = req

        perPage = Number(perPage)

        page = Number(page)
        return logic.listPartyups(perPage = 30, page = 1, city, tags)
            .then(partyups => {
                res.status(200)

                res.json({ partyups })
            })
    },res)
})

router.get('/partyups/:partyupId', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        let { params: { partyupId }} = req

        return logic.searchPartyupById(partyupId)
            .then(partyup => {
                res.status(200)

                res.json(partyup)
            })
    },res)
})

router.get('/partyups', (req, res) => {
    routeHandler(() => {
        let { perPage = 10, page = 1, city, tags} = req.query

        perPage = Number(perPage)

        page = Number(page)

        return logic.listPartyups(perPage = 3, page, city, tags)
            .then(partyups => {
                res.status(200)

                res.json({ partyups })
            })
    },res)
})

router.get('/users/:userId/partyups', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        const { params: { userId }, sub } = req

        return logic.listPartyupsCreatedBy(userId)
            .then(partyups => {
                res.status(200)

                res.json({ partyups })
            })
    },res)
})

router.get('/users/:userId/partyups/assistence', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        const { params: { userId }, sub } = req

        return logic.listPartyupsIAssist(userId)
            .then(partyups => {
                res.status(200)

                res.json({ partyups })
            })
    },res)
})

router.get('/users/:userId/partyups/:partyupId/assistence', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        const { params: { userId , partyupId }, sub } = req

        return logic.assistToPartyup(userId, partyupId)
            .then(partyup => {
                res.status(200)

                res.json({ partyup })
            })
    },res)   
})

router.get('/users/:userId/partyups/:partyupId/notAssistence', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        const { params: { userId , partyupId }, sub } = req

        return logic.notAssistToPartyup(userId, partyupId)
            .then(partyup => {
                res.status(200)

                res.json( partyup )
            })
    },res)
})

router.delete('/users/:userId/partyups/:partyupId', [bearerTokenParser, jwtVerifier], (req, res) => {
    routeHandler(() => {
        const { params: { userId , partyupId }, sub } = req

        return logic.deletePartyup(userId, partyupId)
            .then(() => {
                res.status(200)

                res.json({
                    message: `Partyup in ${partyupId} created for ${userId} has been deleted with success!`
                })
            })
    },res)
})

module.exports = router