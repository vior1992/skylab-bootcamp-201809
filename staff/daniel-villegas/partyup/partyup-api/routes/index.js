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

router.get('/users/:id', jsonBP, (req, res) => {
   
    const { params: { id }, sub } = req
    
    //if (id !== sub) throw Error('token sub does not match user id')
  
    return logic.retrieveLoggedUser(id)
            .then(user => {
                res.status(200)

                res.json({ data: user })
            })
})

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

router.get('/users/:userId/partyups', jsonBP, (req, res) => {
    const { params: { userId }, sub } = req

    return logic.listPartyupsCreatedBy(userId)
        .then(partyups => {
            res.status(200)

            res.json({ partyups })
        })
})

router.get('/users/:userId/partyups/assistence', jsonBP, (req, res) => {
    const { params: { userId }, sub } = req

    return logic.listPartyupsIAssist(userId)
        .then(partyups => {
            res.status(200)

            res.json({ partyups })
        })
})

router.get('/users/:userId/partyups/assistence/:partyupId', jsonBP, (req, res) => {
    const { params: { userId , partyupId }, sub } = req

    return logic.assistToPartyup(userId, partyupId)
        .then(partyup => {
            res.status(200)

            res.json({ partyup })
        })
})

router.get('/users/:userId/partyups/noAssistence/:partyupId', jsonBP, (req, res) => {
    const { params: { userId , partyupId }, sub } = req

    return logic.notAssistToPartyup(userId, partyupId)
        .then(partyup => {
            res.status(200)

            res.json({ partyup })
        })
})

router.post('/users/:userId/partyups', jsonBP, (req, res) => {
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