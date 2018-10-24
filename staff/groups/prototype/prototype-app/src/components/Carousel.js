import React, {Component} from 'react'
import logic from '../logic'
import { Link } from 'react-router-dom'

class Carousel extends Component {
  state = {}

  componentDidMount = () => {
    switch(this.props.listType) {
      case 'now_playing':
        logic.retrieveInTheatre()
          .then(movies => {
            this.setState({ movies })
          })
      break
      case 'popular':
        logic.retrievePopular()
          .then(movies => {
            this.setState({ movies })
          })
      break
      case 'trending':
        logic.retrieveTrending()
          .then(movies => {
            this.setState({ movies })
          })
      break
    }
  }

  render() {
    return (
      <section className="movies-carousel">
        <div className="container">
          <div className="row">
            <h5 className="font-weight-bold my-4">{this.props.title}</h5>
          </div>
          <div className="row carousel">
            { this.state.movies && this.state.movies.map(movie => {
              return (
                <div className="carousel-img" key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                  </Link>
                </div>
              )
            }) }
          </div>
        </div>
      </section>
    )
  }
}

export default Carousel