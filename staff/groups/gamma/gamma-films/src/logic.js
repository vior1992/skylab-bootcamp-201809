// import data from "./data"
const data = require('./data')

const { User } = data

const logic = {

    _user: "",
    _userId: "",
    _token: "",
    results: "",


    registUser(name, surname, username, password) {

        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

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
                console.log(this._token)
            })
    },

    logout(){
        this._user=''
        this._userId=''
        this._token=''
        this.results=[]
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

        if (typeof query !== 'string') throw TypeError(`${query} is not a string`)

        if (!query.trim()) throw Error('query is empty or blank')

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

    searchMovie(id) {

        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)

        if (!id.trim()) throw Error('id is empty or blank')
        

        return fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=e187746b7167e4886a5d0a2f1ead5a18', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(res => res.json())
            .then(res => {
                
                if (res === 'undefined') throw Error(res.error)

                return res;
            })
    },

    searchMoviesByCategories(genres) {

        if (typeof genres !== 'string') throw TypeError(`${genres} is not a string`)

        if (!genres.trim()) throw Error('genres is empty or blank')

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

        if (typeof date !== 'string') throw TypeError(`${date} is not a string`)

        if (!date.trim()) throw Error('date is empty or blank')

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