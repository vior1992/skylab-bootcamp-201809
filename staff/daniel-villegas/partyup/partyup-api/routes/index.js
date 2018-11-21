const express = require('express')
const router = express.Router()
const jsonBP = require('body-parser').json()
const logic = require('../logic')
const routeHandler = require('./route-handler')

//falta route handler de errores
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
                res.status(201)

                res.json({
                    message: `Logged with user ${username}!`,
                    data: { id }
                })
            })
    },res)
})

router.get('/users/:id', jsonBP, (req, res) => {
    routeHandler(() => {
        const { params: { id }, sub } = req
        
        //if (id !== sub) throw Error('token sub does not match user id')
    
        return logic.retrieveLoggedUser(id)
                .then(user => {
                    res.status(200)

                    res.json({ data: user })
                })
    },res)
})

router.get('/partyups', jsonBP, (req, res) => {
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

router.get('/users/:userId/partyups', jsonBP, (req, res) => {
    routeHandler(() => {
        const { params: { userId }, sub } = req

        return logic.listPartyupsCreatedBy(userId)
            .then(partyups => {
                res.status(200)

                res.json({ partyups })
            })
    },res)
})

router.get('/users/:userId/partyups/assistence', jsonBP, (req, res) => {
    routeHandler(() => {
        const { params: { userId }, sub } = req

        return logic.listPartyupsIAssist(userId)
            .then(partyups => {
                res.status(200)

                res.json({ partyups })
            })
    },res)
})

router.get('/users/:userId/partyups/assistence/:partyupId', jsonBP, (req, res) => {
    routeHandler(() => {
        const { params: { userId , partyupId }, sub } = req

        return logic.assistToPartyup(userId, partyupId)
            .then(partyup => {
                res.status(200)

                res.json({ partyup })
            })
    },res)   
})

router.get('/users/:userId/partyups/noAssistence/:partyupId', jsonBP, (req, res) => {
    routeHandler(() => {
        const { params: { userId , partyupId }, sub } = req

        return logic.notAssistToPartyup(userId, partyupId)
            .then(partyup => {
                res.status(200)

                res.json({ partyup })
            })
    },res)
})

router.post('/users/:userId/partyups', jsonBP, (req, res) => {
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

router.get('/users/:userId/partyups/search/:city', jsonBP, (req, res) => {
    routeHandler(() => {
        let { query: { perPage = 10, page = 1 }, params: { tags, city }  } = req

        perPage = Number(perPage)

        page = Number(page)

        return logic.listPartyups(perPage = 30, page = 1, city, tags)
            .then(partyups => {
                res.status(200)

                res.json({ partyups })
            })
    },res)
})

module.exports = router