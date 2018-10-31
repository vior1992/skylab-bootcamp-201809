//modulo de node
const express = require('express')

//destructuring de process.argv, nos quedamos con el terder argumento que sera el puerto
const { argv: [, , port] } = process

//modulo de express que nos hemos descargado previamente
const app = express()

const users = []

//Desde el punto de vista del cliente, get/coge del navegador o pagina '/' lo que le respondamos.
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <a href="/login">Login</a> or <a href="/register">Register</a>
    </body>
</html>`)
})

//Desde el punto de vista del cliente, get/coge/pide al servidora traves del navegador o pagina 
//en la que esta '/login' lo que le respondamos.
app.get('/login', (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
//Este formulario actua cuando este en login y el cliente le postea/da al servidor/nosotros
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button type="submit">Login</button>
        </form>
        <a href="/">go back</a>
    </body>
</html>`)
})

//Desde el punto de vista del cliente, post/nos da del navegador o pagina '/login' y ademas lo respondemos.
app.post('/login', (req, res) => {
    let dataStr = ''
    let position = -1

    req.on('data', chunk => {
        
        dataStr += chunk
    })

    req.on('end', () => {
        const keyValues = dataStr.split('&')

        const log = {}

        keyValues.forEach(keyValue => {

            const [key, value] = keyValue.split('=')

            log[key] = value

            users.forEach(user => {
                if(user.username === log.username && user.password === log.password){
                    user.logged = true
                    res.redirect('/homepage')
                } 
            })
        })
    } )
    
   
})
//app.get desde el punto de vista del puto cliente
app.get('/register', (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <form action="/register" method="POST">
            <input type="text" name="name" placeholder="Name">
            <input type="text" name="surname" placeholder="Surname">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button type="submit">Register</button>
        </form>
        <a href="/">go back</a>
    </body>
</html>`)
})

//Desde el punto de vista del cliente, post/nos da del navegador o pagina '/register' y ademas lo respondemos.

app.post('/register', (req, res) => {
    let data = ''

    req.on('data', chunk => data += chunk)

    req.on('end', () => {
        const keyValues = data.split('&')

        const user = { id: Date.now(), logged: false }

        keyValues.forEach(keyValue => {
            const [key, value] = keyValue.split('=')

            user[key] = value
        })

        users.push(user)

        res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>Ok! user ${user.name} registered.
        <a href="/">go back</a>
    </body>
</html>`)
    })
})

app.get('/users', (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <ul>
            ${users.map(user => `<li>${user.id} ${user.name} ${user.surname}</li>`).join('')}
        </ul>
        <a href="/">go back</a>
    </body>
</html>`)
})

app.get('/homepage', (req, res) => {
    if(users.length !== 0){

        users.forEach(user => {
            if(user.logged === true){
                
                res.send(`<!DOCTYPE html>
                <html>
                <head>
                <title>Hello World!</title>
                </head>
                <body>
                <h1>Welcome ${user.name}</h1>
                <a href="/">go back</a>
                </body>
                </html>`)
            } else {
                res.redirect('/')
            }
        })
    } else {
        res.redirect('/')
    }
})

app.listen(port || 3000)