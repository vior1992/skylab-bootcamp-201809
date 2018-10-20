import data from './data'
// const data = require('./data')

// const { Event } = data

const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,
    _events: [],

    registerUser(name, email, username, password) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof email !== 'string') throw TypeError(`${email} is not a string`)
        if (email.match(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)===null) throw Error(`${email} is an invalid email`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!email.trim()) throw Error('email is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, email, username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    login(username, password) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                const { id, token } = res.data

                this._userId = id
                this._token = token

                sessionStorage.setItem('userId', id)
                sessionStorage.setItem('token', token)
            })
    },

    get loggedIn() {
        return !!this._userId
    },

    // logout() {
    //     this._events = []
    //     this._userId = null
    //     this._token = null

    //     sessionStorage.removeItem('userId')
    //     sessionStorage.removeItem('token')
    // },

    // createPostit(text) {
    //     if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

    //     if (!text.trim()) throw Error('text is empty or blank')

    //     this._events.push(new Postit(text))

    //     return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': `Bearer ${this._token}`
    //         },
    //         body: JSON.stringify({ postits: this._events })
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })
    // },

    // listPostits() {
    //     return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${this._token}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)

    //             return this._events = res.data.postits || []
    //         })
    // },

    // deletePostit(id) {
    //     if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

    //     this._events = this._events.filter(postit => postit.id !== id)

    //     return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': `Bearer ${this._token}`
    //         },
    //         body: JSON.stringify({ postits: this._events })
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })
    // },

    // updatePostit(id, text) {
    //     if (typeof id !== 'number') throw new TypeError(`${id} is not a number`)

    //     if (typeof text !== 'string') throw TypeError(`${text} is not a string`)

    //     if (!text.trim()) throw Error('text is empty or blank')

    //     const postit = this._events.find(postit => postit.id === id)

    //     postit.text = text

    //     return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': `Bearer ${this._token}`
    //         },
    //         body: JSON.stringify({ postits: this._events })
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.error) throw Error(res.error)
    //         })
    // }
}

export default logic
// module.exports = logic