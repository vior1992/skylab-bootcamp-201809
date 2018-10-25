import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = props => {
  console.log(props)
  debugger
  return (
    <div className="row">
      { props.movies.map(movie => {
        return (
          <div className="movie">
          { movie.poster_path && <Link to={`/movie/${movie.id}`}><img className="img-fluid img-medium-rounded" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} /></Link> }
          { !movie.poster_path && <Link to={`/movie/${movie.id}`}><img className="img-fluid img-medium-rounded" src="https://dummyimage.com/240x360/707070&text=+" /></Link> }
          </div>
        )
      })
      }
    </div>
  )
}

export default MoviesList
