import React, { Component } from 'react'
import logic from '../logic'

class MovieDetail extends Component {

  state = { movieId: sessionStorage.getItem('currentMovie'), movie: {} }
// movieId should be get from the URL, not session storage, cause  
  componentDidMount = () => {

    const movie = logic.retrieveMovie(this.state.movieId)
    this.setState({ movie })

  }

  render() {

    return <div>


    </div>
  }
}

export default MovieDetail