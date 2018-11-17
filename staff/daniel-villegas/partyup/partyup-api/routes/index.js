const router = express.Router();
const jsonBP = bodyParser.json()

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
        .then(() => {
            res.status(201)

            res.json({
                message: `Logged with user ${username}!`
            })
        })
})

router.get('/users/:id')

router.post('/user/:id/partyup', jsonBP, (req, res) => {
    const { title, description, date, city, place, tags } = req.body

    const { params: { id } } = req

    return logic.createPartyup(title, description, date, city, place, tags, id)
        .then(() => {
            res.status(201)

            res.json({
                message: `Partyup in ${city} has been created for the user ${id}!`
            })
        })
})

