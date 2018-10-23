import React, { Component } from 'react'
import logic from '../logic'

class MovieDetail extends Component {

  state = { movieId: sessionStorage.getItem('currentMovie') }
  // movieId should be get from the URL, not session storage, cause  

  componentDidMount = () => {
    debugger
    logic.retrieveMovie(this.props.id)
      .then(movie => { this.setState({ movie }) })
  }

  render() {
    debugger
    return <div>
      {this.state.movie && <div>
        <img src={`https://image.tmdb.org/t/p/w300/${this.state.movie.backdrop_path}`} />
        <img src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} />
        <h3>{this.state.movie.title}</h3>
        <h3>{this.state.movie.id}</h3>

        <h3>{this.state.movie.release_date.slice(0,5)}</h3>
        <h3>{this.state.movie.runtime}</h3>
        <h3>{this.state.movie.vote_average}</h3>
        {this.state.movie.spoken_languages.map(languages => <h3>{languages.name}</h3>)}
        {this.state.movie.production_countries.map(companies => <h3>{companies.origin_country}</h3>)}
        <h3>{`Budget $${this.state.movie.budget}`}</h3>
        {this.state.movie.genres.map(genres => <h3>{genres.name}</h3>)}
        <a></a>
      </div>}
    </div>
  }
}

export default MovieDetail