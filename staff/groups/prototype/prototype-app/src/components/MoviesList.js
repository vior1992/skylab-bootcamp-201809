import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class MoviesList extends Component {
    
    handleClick = (event, movie) => {
        // event.preventDefault()
        //If finally we don't need prevent default, we should delete both events of handleClick
        
        sessionStorage.setItem('currentMovie', movie)
    }

    render() {
debugger
        return <div>
        {this.props.movies.map(movie => 
            <Link to={`/movie/${movie.id}`} onClick={event => this.handleClick(event, movie.id)}><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} /></Link>
            )}
    </div>
    }
}

export default MoviesList
