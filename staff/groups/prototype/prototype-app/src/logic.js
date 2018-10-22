const logic = {
  _apiKey: 'c2964a44ac33875ef00f6c6981a0c3e4',
  _user: {},
  _trendingMovies: [],
  _inTheatreMovies: [],
  _popularMovies: [],

  signIn(username, email, name, surname, password) {
    if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
    if (typeof email !== 'string') throw TypeError(`${email} is not a string`)
    if (typeof name !== 'string') throw TypeError(`${name} is not a string`)
    if (typeof surname !== 'string') throw TypeError(`${surname} is not a string`)
    if (typeof password !== 'string') throw TypeError(`${password} is not a string`)

    if (!username.trim()) throw Error('username is empty or blank')
    if (!email.trim()) throw Error('email is empty or blank')
    if (!name.trim()) throw Error('name is empty or blank')
    if (!surname.trim()) throw Error('surname is empty or blank')
    if (!password.trim()) throw Error('password is empty or blank')

    const endpoint = 'https://skylabcoders.herokuapp.com/api/user'
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, name, surname, password })
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
    })
  },

  logIn(username, password) {
    if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
    if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
    
    if (!username.trim()) throw Error('username is empty or blank')
    if (!password.trim()) throw Error('password is empty or blank')

    const endpoint = 'https://skylabcoders.herokuapp.com/api/auth'
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)

        const {id, token} = response.data

        this._user.id = id
        this._user.token = token

        sessionStorage.setItem('user', JSON.stringify(this._user))
      })
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
  },

  retrieveUserData() {
    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this._user.token}`
      }
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)

        this._user.username = response.data.username || ''
        this._user.email = response.data.email || ''
        this._user.name = response.data.name || ''
        this._user.surname = response.data.surname || ''
        this._user.seen = response.data.movies_seen || []
        this._user.pending = response.data.movies_pending || []
        // this._userFavourites = response.data.movies_favourites || []
      })
  },

  updateUserSeen(movie) {
    this._userSeen.push(movie)

    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._user.token}`
      },
      body: JSON.stringify({ movies_seen: this._userSeen})
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
      })
  },

  updateUserPending(movie) {
    this._userPending.push(movie)

    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._user.token}`
      },
      body: JSON.stringify({ movies_pending: this._userPending})
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
      })
  },

  // updateUserFavourites(movie) {
  //   this._userFavourites.push(movie)

  //   const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
  //   const params = {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${this._user.token}`
  //     },
  //     body: JSON.stringify({ movies_favourites: this._userFavourites})
  //   }

  //   return fetch(endpoint, params)
  //     .then(response => response.json())
  //     .then(response => {
  //       if (response.error) throw Error(response.error)
  //     })
  // },

  updateUserData(data) {
    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._user.token}`
      },
      body: JSON.stringify(data)
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
      })
  }
}