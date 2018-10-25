
const logic = {
  _apiKey: 'c2964a44ac33875ef00f6c6981a0c3e4',
  _user: JSON.parse(sessionStorage.getItem('user')) || {},
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

        const { id, token } = response.data

        this._user.id = id
        this._user.token = token

        sessionStorage.setItem('user', JSON.stringify(this._user))
      })
  },

  get loggedIn() {
    if (JSON.stringify(logic._user) !== '{}') return true
    else return false
  },

  logout() {
    this._user = {}
    this._trendingMovies = []
    this._inTheatreMovies = []
    this._popularMovies = []

    sessionStorage.removeItem('user')
  },

  retrieveTrending(page = 1) {
    const basePath = 'https://api.themoviedb.org/3/trending/movie/week'
    return fetch(`${basePath}?page=${page}&api_key=${this._apiKey}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {
        if (response.status_message) throw Error(response.status_message)

        this._trendingMovies = response.results || []

        return response
      })
  },

  retrieveInTheatre(page = 1) {
    const basePath = 'https://api.themoviedb.org/3/movie/now_playing'
    return fetch(`${basePath}?page=${page}&api_key=${this._apiKey}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {
        if (response.status_message) throw Error(response.status_message)

        this._inTheatreMovies = response.results || []

        return response
      })
  },

  retrievePopular(page = 1) {
    const basePath = 'https://api.themoviedb.org/3/movie/popular'

    return fetch(`${basePath}?page=${page}&api_key=${this._apiKey}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {
        if (response.status_message) throw Error(response.status_message)

        this._popularMovies = response.results || []

        return response
      })
  },

  retrieveMovies(query, page) {
    debugger

    const basePath = 'https://api.themoviedb.org/3/search/movie'

    return fetch(`${basePath}?api_key=${this._apiKey}&query=${query}&page=${page}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {
        if (response.status_message) throw Error(response.status_message)

        debugger

        return response || {}
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
        sessionStorage.setItem('user', JSON.stringify(this._user))
      })
  },

  addUserSeen(movie) {
    this._user.seen.push(movie)
    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._user.token}`
      },
      body: JSON.stringify({ movies_seen: this._user.seen })
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
      })
  },

  updateUserSeen(movies) {
    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._user.token}`
      },
      body: JSON.stringify({ movies_seen: movies })
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
      })
  },

  deleteUserSeen(id) {
    const seen = this._user.seen.filter(movie => movie.id != id)
    this._user.seen = seen
    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._user.token}`
      },
      body: JSON.stringify({ movies_seen: seen })
    }
    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
      })
  },

  addUserPending(movie) {
    this._user.pending.push(movie)

    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._user.token}`
      },
      body: JSON.stringify({ movies_pending: this._user.pending })
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
      })
  },

  updateUserPending(movies) {
    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._user.token}`
      },
      body: JSON.stringify({ movies_pending: movies })
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
      })
  },

  deleteUserPending(id) {
    const pending = this._user.pending.filter(movie => movie.id != id)
    this._user.pending = pending
    const endpoint = `https://skylabcoders.herokuapp.com/api/user/${this._user.id}`
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._user.token}`
      },
      body: JSON.stringify({ movies_pending: pending })
    }

    return fetch(endpoint, params)
      .then(response => response.json())
      .then(response => {
        if (response.error) throw Error(response.error)
      })
  },

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
  },

  checkInList(id, list) {
    if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
    if (typeof list !== 'string') throw TypeError(`${list} is not a string`)

    if (!id.trim()) throw Error('id is empty or blank')
    if (!list.trim()) throw Error('list is empty or blank')

    let index = -1
    if (JSON.stringify(this._user) !== '{}') {
      switch (list) {
        case 'seen':
          index = this._user.seen.findIndex(movie => movie.id == id)
          break
        case 'pending':
          index = this._user.pending.findIndex(movie => movie.id == id)
          break
      }
    }
    return index
  },

  checkState(id, state) {
    if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
    if (typeof state !== 'string') throw TypeError(`${state} is not a string`)

    if (!id.trim()) throw Error('id is empty or blank')
    if (!state.trim()) throw Error('state is empty or blank')

    let check = false
    
    if (JSON.stringify(this._user) !== '{}') {
      let indexSeen = this.checkInList(id, 'seen')
      
      switch (state) {
        case 'favourite':
          check = this._user.seen[indexSeen].favourite
          break
        case 'like':
          check = this._user.seen[indexSeen].like
          break
        case 'unlike':
          check = this._user.seen[indexSeen].unlike
          break
      }
    }
    return check
  },

  seenClick(movie) {
    if (!(movie instanceof Object)) throw TypeError(`${movie} is not an object`)
    if (movie instanceof Array) throw TypeError(`${movie} is not an object`)

    let ret = undefined

    if (JSON.stringify(this._user) !== '{}') {

      let indexSeen = this.checkInList(movie.id, 'seen')
      let indexPending = this.checkInList(movie.id, 'pending')

      if (indexSeen !== -1) {

        logic.deleteUserSeen(movie.id)

        ret = '00'

      } else {

        logic.addUserSeen({ id: movie.id, name: movie.title, poster_path: movie.poster_path, like: false, unlike: false, favourite: false })

        ret = '10'

        if (indexPending !== -1) {
          logic.deleteUserPending(movie.id)
        }
      }
    } else {
      ret = 'You should log in before to use that feature'
    }
    return ret
  },

  pendingClick(movie) {
    if (!(movie instanceof Object)) throw TypeError(`${movie} is not an object`)
    if (movie instanceof Array) throw TypeError(`${movie} is not an object`)

    let ret = undefined

    if (JSON.stringify(logic._user) !== '{}') {

      let indexSeen = this.checkInList(movie.id, 'seen')
      let indexPending = this.checkInList(movie.id, 'pending')

      if (indexPending !== -1) {

        logic.deleteUserPending(movie.id)
        ret = '00'

      } else {

        logic.addUserPending({ id: movie.id, name: movie.title, poster_path: movie.poster_path, like: undefined, favourite: false })
        ret = '01'

        if (indexSeen !== -1) {

          logic.deleteUserSeen(movie.id)

        }

      }
    } else ret = 'You should log in before to use that feature'
    return ret
  },

  favouriteClick(id) {
    if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
    if (!id.trim()) throw Error('id is empty or blank')

    let ret = undefined

    if (JSON.stringify(logic._user) !== '{}') {

      let indexSeen = this.checkInList(id, 'seen')

      if (indexSeen !== -1) {

        let check = this._user.seen[indexSeen].favourite

        if (check) {

          this._user.seen[indexSeen].favourite = false

          logic.updateUserSeen(this._user.seen)

          ret = '0'

        } else {
          this._user.seen[indexSeen].favourite = true

          logic.updateUserSeen(this._user.seen)

          ret = '1'
        }
      } else {
        ret = 'You should have seen the movie first'
      }

    } else ret = 'You should log in before to use that feature'

    return ret
  },

  likeClick(id) {
    if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
    if (!id.trim()) throw Error('id is empty or blank')

    let ret = undefined

    if (JSON.stringify(logic._user) !== '{}') {
      let indexSeen = this.checkInList(id, 'seen')

      if (indexSeen !== -1) {

        let checkLike = this._user.seen[indexSeen].like

        if (checkLike) {

          this._user.seen[indexSeen].like = false

          logic.updateUserSeen(logic._user.seen)

          ret = '00'

        } else {

          this._user.seen[indexSeen].like = true

          this._user.seen[indexSeen].unlike = false

          logic.updateUserSeen(logic._user.seen)

          ret = '10'

        }
      } else ret = 'You should have seen the movie first'

    } else ret = 'You should log in before to use that feature'

    return ret
  },

  unlikeClick(id) {
    if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
    if (!id.trim()) throw Error('id is empty or blank')

    let ret = undefined

    if (JSON.stringify(logic._user) !== '{}') {
      let indexSeen = this.checkInList(id, 'seen')

      if (indexSeen !== -1) {

        let checkUnlike = this._user.seen[indexSeen].unlike

        if (checkUnlike) {

          this._user.seen[indexSeen].unlike = false

          logic.updateUserSeen(logic._user.seen)

          ret = '00'

        } else {

          this._user.seen[indexSeen].unlike = true

          this._user.seen[indexSeen].like = false

          logic.updateUserSeen(logic._user.seen)

          ret = '01'

        }
      } else ret = 'You should have seen the movie first'

    } else ret = 'You should log in before to use that feature'

    return ret
  },

  beautifyQuery(string) {
    if (typeof string !== 'string') throw TypeError(`${string} is not a string`)
    if (!string.trim()) throw Error('string is empty or blank')


    let repl = string.replace('+', ' ')
    let q1 = string[0].toUpperCase()
    let query = q1.concat(repl.slice(1))
    return query
  }
}

// export default logic
module.exports = logic