import React, {Component} from 'react'
import logic from '../logic'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import 'slick-carousel'

class Carousel extends Component {
  state = {}

  componentDidMount = () => {
    let slick

    switch(this.props.listType) {
      case 'now_playing':
        slick = logic.retrieveInTheatre()
          .then(movies => {
            this.setState({ movies })
          })
      break
      case 'popular':
      slick = logic.retrievePopular()
          .then(movies => {
            this.setState({ movies })
          })
      break
      case 'trending':
      slick = logic.retrieveTrending()
          .then(movies => {
            this.setState({ movies })
          })
      break
    }

    slick.then(() => {
      this.$el = $(this.el);
      this.$el.slick({
        infinite: true,
        arrows: false,
        dots: false,
        centerMode: true,
        slidesToShow: 4,
        responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
          }
        }]
      })
    })
  }

  componentWillUnmount() {
    this.$el.slick('destroy');
  }

  render() {
    return (
      <section className="movies-carousel">
        <div className="container">
          <div className="row">
            <h5 className="font-weight-bold my-4">{this.props.title}</h5>
          </div>
          <div className="row carousel" ref={el => this.el = el}>
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