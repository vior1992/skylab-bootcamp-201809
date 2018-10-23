import React, { Component } from 'react'
import logic from '../logic'

class MovieDetail extends Component {

  state = { movieId: sessionStorage.getItem('currentMovie') }
  // movieId should be get from the URL, not session storage, cause  

  componentDidMount = () => {
    logic.retrieveMovie(this.props.id)
      .then(movie => { this.setState({ movie }) })
  }



  render() {
    return <div>
      {this.state.movie && <div>
        <img src={`https://image.tmdb.org/t/p/w300/${this.state.movie.backdrop_path}`} />
        <img src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} />
        <p>{this.state.movie.title}</p>
        <p>{this.state.movie.id}</p>

        <p>{this.state.movie.release_date.slice(0,5)}</p>
        <p>{this.state.movie.runtime}</p>
        <p>{this.state.movie.vote_average}</p>
        {this.state.movie.spoken_languages.map(languages => <p>{languages.name}</p>)}
        {this.state.movie.production_countries.map(companies => <p>{companies.origin_country}</p>)}
        <p>{`Budget $${this.state.movie.budget}`}</p>
        {this.state.movie.genres.map(genres => <p>{genres.name}</p>)}
        <a onClick={}><i className="la la-eye"></i></a>
        <a onClick={}><i className="la la-clock-o"></i></a>
        <a onClick={}><i className="la la-star-o"></i></a>
        <a onClick={}><i className="la la-thumbs-up"></i></a>
        <a onClick={}><i className="la la-thumbs-down"></i></a>
        <p>{`Overview  ${this.state.movie.overview}`}</p>
        {this.state.movie.credits.cast.slice(0,5).map(cast => <div><img src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`} /><p>{cast.name}</p> </div>)}

        
      </div>}
    </div>
  }
}

export default MovieDetail