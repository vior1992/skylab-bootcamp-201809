import data from './data'
// const data = require('./data')

// const { Event } = data

const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,
    _events: [],
    _favouritesIdArray: [],

    registerUser(name, email, username, password, passwordRepeat) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof email !== 'string') throw TypeError(`${email} is not a string`)
        if (email.match(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)===null) throw Error(`${email} is an invalid email`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
        if (typeof passwordRepeat !== 'string') throw TypeError(`${passwordRepeat} is not a string`)
        if (password !== passwordRepeat) throw TypeError (`passwords do not match`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!email.trim()) throw Error('email is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')
        if (!passwordRepeat.trim()) throw Error('password is empty or blank')

        const favouritesIdArray = this._favouritesIdArray

        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, email, username, password, favouritesIdArray })
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

    

    logout() {
        this._events = []
        this._userId = null
        this._token = null

        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
    },

    showEvents() {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=ES&apikey=ELXA0H0YPzUTFYrjeH4AG5g6y4eWTVSO&size=200`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                this._events = res._embedded.events || []
                return this.randomEvents()
            })
    },

    randomEvents() {
        let randomArray = Array.from(this._events)
        randomArray.sort(() => .5 - Math.random())
        let randomArrayCarousel = randomArray.slice(0,5)
        return randomArrayCarousel
    },

    searchEvents(query) {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=30&apikey=r0q6sz0wtLwGERyuLMtBsrS1lrlfAJGp&keyword=${query}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                return this._events = res._embedded.events || []
            })
    },

    searchEventInfo(id) {
        return fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=r0q6sz0wtLwGERyuLMtBsrS1lrlfAJGp`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
                return res
            })
    },

    storeIdFavourites(favouriteId) {
        if (typeof favouriteId !== 'string') throw TypeError(`${favouriteId} not a string`)
        if (!favouriteId.trim()) throw Error(`favouriteId is empty or blank`)

        this._favouritesIdArray.push(favouriteId)

        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({ favouritesIdArray: this._favouritesIdArray })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    }

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