const express = require('express')
const router = express.Router()
const jsonBP = require('body-parser').json()
const logic = require('../logic')

//falta route handler de errores
router.post('/users', jsonBP, (req, res) => {
    const { name, surname, city, username, password} = req.body

    return logic.registerUser( name, surname, city, username, password)
        .then(() => {
            res.status(201)

            res.json({
                message: `New user with username ${username} registered!`
            })
        })
})

router.post('/authenticate', jsonBP, (req, res) => {
    const { username, password } = req.body

    return logic.authenticateUser(username, password)
        .then(id => {
            res.status(201)

            res.json({
                message: `Logged with user ${username}!`,
                data: { id }
            })
        })
})

router.get('/users/:id')

router.get('/partyups', jsonBP, (req, res) => {
    let { perPage = 10, page = 1, city, tags} = req.query

    perPage = Number(perPage)

    page = Number(page)

    return logic.listPartyups(perPage, page, city, tags)
        .then(partyups => {
            res.status(200)

            res.json({ partyups })
    })
})

router.post('/user/:userId/partyups', jsonBP, (req, res) => {
    const { title, description, date, city, place, tags } = req.body

    const { params: { userId } } = req

    return logic.createPartyup(title, description, date, city, place, tags, userId)
        .then(() => {
            res.status(201)

            res.json({
                message: `Partyup in ${city} has been created for the user ${userId}!`
            })
        })
})

module.exports = router