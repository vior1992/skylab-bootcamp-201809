require('dotenv').config()
const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser')
const logic = require('./logic')
const package = require('./package.json')

const { argv: [, , port = process.env.PORT || 8080] } = process

const app = express()

app.use(express.static('./public'))

let error = null

const formBodyParser = bodyParser.urlencoded({ extended: false })

const mySession = session({ 
    secret: 'my super secret', 
    cookie: { maxAge: 60 * 60 * 24 },
    resave: true,
    saveUninitialized: true,
    store: new FileStore({
        path: './.sessions'
    })
})

app.use(mySession)

app.get('/', (req, res) => {
    req.session.error = null

    res.render('/landing')
})

app.get('/register', (req, res) => {
    const error = req.session.error

    res.render('/register', {error: req.session.error})  
})

app.post('/register', formBodyParser, (req, res) => {
    const { name, surname, username, password } = req.body

    try {
        logic.registerUser(name, surname, username, password)
            .then(() => {
                req.session.error = null

                res.render('/register-confirm0', { name })
            })
            .catch(({ message }) => {
                req.session.error = message

                res.redirect('/register')
            })

        
    } catch ({ message }) {
        req.session.error = message

        res.redirect('/register')
    }
})

app.get('/login', (req, res) => {
    const error = req.session.error

    res.render('/login', { error: res.session.error })
})

app.post('/login', formBodyParser, (req, res) => {
    const { username, password } = req.body

    try {
        logic.authenticateUser(username, password)
            .then(id => {
                req.session.userId = id

                req.session.error = null

                res.redirect('/home')
            })
            .catch(({ message }) => {
                req.session.error = message

                res.redirect('/login')
            })
        
    } catch ({ message }) {
        req.session.error = message
        
        res.redirect('/login')
    }
})

app.get('/home', (req, res) => {
    const id = req.session.userId

    if (id) {
        try{
            logic.retrieveUser(id)
                .then(({ name }) => {
                    res.render('/home', { name })
                })
                .catch(({ message }) => {
                    req.session.error = message
                    res.redirect('/')
                })
        } catch { ({message}) 
            req.session.error = message
            res.redirect('/')
        } 
    } else res.redirect('/')
})

app.get('/postit', (req, res) => {
    const id = req.session.userId
    const error =  req.session.error
    
    if(id) {
        try {
            logic.retrieveUser(id)
                .then(user => {
                    res.render('/postits', { name })

                })

                .catch(({ message }) => {
                    req.session.error = message
                    res.redirect('/')
                })

        } catch ({ message }) {
            req.sessione.error = message
            res.redirect('/')
        }

    } else res.redirect('/')


})

app.post('/postit', formBodyParser, (req, res) => {
    const { posttext } = req.body
    userId = req.session.userId

    try {
        logic.savePostit(posttext, userId)
        .then(() => {
            res.redirect('/postits')
        })
        .catch(({ message }) => {
            req.session.error = message
            res.redirect('/postits')
        })
        

    } catch ({ message }) {
        req.session.error = message
        res.redirect('/postits')
    }

})

app.get('/logout', (req, res) => {
    req.session.userId = null

    res.redirect('/')
})

app.listen(port, () => console.log(`Server ${package.version} up and running on port ${port}`))