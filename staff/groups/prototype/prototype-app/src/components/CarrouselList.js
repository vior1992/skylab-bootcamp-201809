import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CarrouselList extends Component {

    render() {
        return <div>
          {this.props.movies.map(movie => 
              <Link to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} /></Link>
              )}
      </div>
      }
}


export default CarrouselList