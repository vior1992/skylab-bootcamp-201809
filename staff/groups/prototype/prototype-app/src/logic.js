import data from './data'
// const data = require('./data')


const logic = {
    _userId: sessionStorage.getItem('userId') || null,
    _token: sessionStorage.getItem('token') || null,
    _apiKey: 'c2964a44ac33875ef00f6c6981a0c3e4',
    _trendingMovies: [],
    _inTheatreMovies: [],
    _popularMovies: [],
    _movies: [],

    registerUser(name, surname, username, password) {
        if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
        if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

        if (!name.trim()) throw Error('name is empty or blank')
        if (!surname.trim()) throw Error('surname is empty or blank')
        if (!username.trim()) throw Error('username is empty or blank')
        if (!password.trim()) throw Error('password is empty or blank')

        return fetch('https://skylabcoders.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, surname, username, password })
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
        this._postits = []
        this._userId = null
        this._token = null

        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
    },
  
    retrieveTrending() {
      const basePath = 'https://api.themoviedb.org/3/trending/movie/week'
  
      return fetch(`${basePath}?api_key=${this._apiKey}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(response => {
          if (response.status_message) throw Error(response.status_message)
  
          return this._trendingMovies = response.results || []
        })
    },
  
    retrieveInTheatre() {
      const basePath = 'https://api.themoviedb.org/3/movie/now_playing'
  
      return fetch(`${basePath}?api_key=${this._apiKey}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(response => {
          if (response.status_message) throw Error(response.status_message)
  
          return this._inTheatreMovies = response.results || []
        })
    },
  
    retrievePopular() {
      const basePath = 'https://api.themoviedb.org/3/movie/popular'
  
      return fetch(`${basePath}?api_key=${this._apiKey}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(response => {
          if (response.status_message) throw Error(response.status_message)
  
          return this._popularMovies = response.results || []
        })
    },
  
    retrieveMovies(query, page) {
      const basePath = 'https://api.themoviedb.org/3/search/movie'
  
      return fetch(`${basePath}?api_key=${this._apiKey}&query=${query}&page=${page}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(response => {
          if (response.status_message) throw Error(response.status_message)
  
          return response.results || []
        })
    },
  
    retrieveMovie(id) {
      const basePath = 'https://api.themoviedb.org/3/movie/'
  
      return fetch(`${basePath}${id}?api_key=${this._apiKey}&append_to_response=credits`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(response => {
          if (response.status_message) throw Error(response.status_message)
  
          return response || {}
        })
    }

}

export default logic
// module.exports = logic