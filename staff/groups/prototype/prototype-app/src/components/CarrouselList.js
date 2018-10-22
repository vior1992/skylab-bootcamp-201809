import React from 'react'
import { Link } from 'react-router-dom'

function CarrouselList(props) {
    
    return <div>
    {props.movies.map(movie => 
        <Link to={`/movies/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} /></Link>
    )}
</div>
}

export default CarrouselList