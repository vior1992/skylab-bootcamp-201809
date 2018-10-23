// import data from "./data"
const data = require('./data')

const { User } = data

const logic = {

    _user: "",
    _userId: "",
    _token: "",
    results: "",


    registUser(name, surname, username, password) {

        const user = new User(name, surname, username, password)
        console.log(name, surname, username, password)
        this._user = user
        console.log(this._user)
        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, surname, username, password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)
            })
    },

    loginUser(username, password) {
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
                console.log(this._token)
            })
    },

    retrieveUser() {
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${this._userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this._token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) throw Error(res.error)

                console.log('respuesta retrieve: ' + res)
                return this._user = res.data || []
            })
    },

    get loggedIn() {
        return !!this._userId
    },

    get user() {
        return this._user

    },

    searchMovies(query) {

        return fetch('https://api.themoviedb.org/3/search/movie?api_key=e187746b7167e4886a5d0a2f1ead5a18&query=' + query, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res === 'undefined') throw Error(res.error)

                const results = res.results

                return results;
            })
    },

    searchMoviesByCategories(genres) {
        return fetch('https://api.themoviedb.org/3/discover/movie?api_key=e187746b7167e4886a5d0a2f1ead5a18&with_genres=' + genres, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res === 'undefined') throw Error(res.error)

                const results = res.results

                return results
            })
    },

    searchPopularMovies(date) {
        return fetch('https://api.themoviedb.org/3/trending/movie/' + date + '?api_key=e187746b7167e4886a5d0a2f1ead5a18', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res === 'undefined') throw Error(res.error)

                const results = res.results

                return results
            })
    }

}

// export default logic
module.exports = logic