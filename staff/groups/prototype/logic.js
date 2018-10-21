const logic = {
  _apiKey: 'c2964a44ac33875ef00f6c6981a0c3e4',
  _trendingMovies: [],
  _inTheatreMovies: [],
  _popularMovies: [],
  _movies: [],

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