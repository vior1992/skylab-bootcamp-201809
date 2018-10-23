import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CarrouselList extends Component {

    handleClick = (event, movie) => {
        event.preventDefault()
    
        sessionStorage.setItem('currentMovie', movie)
    }

    render() {

        return <div>
        {this.props.movies.map(movie => 
            <Link to={`/movies/${movie.id}`} onClick={event => this.handleClick(event, movie.id)}><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} /></Link>
            )}
    </div>
    }
}


export default CarrouselList