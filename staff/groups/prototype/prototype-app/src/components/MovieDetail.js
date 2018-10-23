import React, { Component } from 'react'
import logic from '../logic'
import { withRouter } from 'react-router-dom'


class MovieDetail extends Component {

  state = { index: undefined, pending: false, seen: false, favourite: false, like: false, unlike: false }

  componentDidMount = () => {
    logic.retrieveMovie(this.props.id)
      .then(movie => { this.setState({ movie }) })
      .then(() => {

        let indexSeen = logic._user.seen.findIndex(movie => movie.id === this.state.movie.id)

        if (indexSeen !== -1) {
          this.setState({ seen: true, index: indexSeen })

          let movieFavourite = logic._user.seen[indexSeen].favourite

          if (movieFavourite) this.setState({ favourite: true })

          let movieLike = logic._user.seen[indexSeen].like

          if (movieLike) this.setState({ like: true })

          let movieUnLike = logic._user.seen[indexSeen].Unlike

          if (movieUnLike) this.setState({ unlike: true })

        } else {

          let indexPending = logic._user.pending.findIndex(movie => movie.id === this.state.movie.id)

          if (indexPending !== -1) this.setState({ pending: true })
        }
      })
  }

  handleBackClick = event => {
    event.preventDefault()

    this.props.history.goBack()
  }

  handleSeenClick = event => {
    event.preventDefault()
    if (this.state.seen) {

      logic.deleteUserSeen(this.state.movie.id)
      this.setState({ seen: false })

    } else {

      logic.addUserSeen({ id: this.state.movie.id, name: this.state.movie.name, poster: this.state.movie.poster_path, like: false, unlike: false, favourite: false })
      this.setState({ seen: true })
      if (this.state.pending) {
        logic.deleteUserPending(this.state.movie.id)
        this.setState({ pending: false })
      }

    }
  }

  handlePendingClick = event => {
    event.preventDefault()

    if (this.state.pending) {
      logic.deleteUserPending(this.state.movie.id)
      this.setState({ pending: false })

    } else {

      logic.addUserPending({ id: this.state.movie.id, name: this.state.movie.name, poster: this.state.movie.poster_path, like: undefined, favourite: false })
      this.setState({ pending: true })
      if (this.state.seen) {

        logic.deleteUserSeen(this.state.movie.id)
        this.setState({ seen: false })
      }

    }
  
}

handleFavouriteClick = event => {
  event.preventDefault()

  if (this.state.seen) {
    if (this.state.favourite) {

      logic._user.seen[this.state.index].favourite = false
      logic.updateUserSeen(logic._user.seen)
      this.setState({ favourite: false })
    } else {
      debugger
      logic._user.seen[this.state.index].favourite = true
      logic.updateUserSeen(logic._user.seen)
      this.setState({ favourite: true })
    }
  } else {
    this.setState({ warning: 'You should have seen the movie first' })
  }
}

handleLikeClick = event => {
  event.preventDefault()

  if (this.state.seen) {
    if (this.state.like) {
      logic._user.seen[this.state.index].like = false
      logic.updateUserSeen(logic._user.seen)
      this.setState({ like: false })
    } else {
      logic._user.seen[this.state.index].like = true
      logic.updateUserSeen(logic._user.seen)
      this.setState({ like: true })
    }
  } else {
    this.setState({ warning: 'You should have seen the movie first' })
  }

}

handleUnlikeClick = event => {
  event.preventDefault()

  if (this.state.seen) {
    if (this.state.unlike) {
      logic._user.seen[this.state.index].unlike = false

      this.setState({ unlike: false })
    } else {
      logic._user.seen[this.state.index].unlike = true

      this.setState({ unlike: true })
    }

    logic.updateUserSeen(logic._user.seen)

  } else {
    this.setState({ warning: 'You should have seen the movie first' })
  }

}


render() {
  return <div>
    {this.state.movie && <div>
      <a onClick={this.handleBackClick}><i className="fa fa-arrow-left"></i></a>
      <img src={`https://image.tmdb.org/t/p/w300/${this.state.movie.backdrop_path}`} />
      <img src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} />
      <p>{this.state.movie.title}</p>
      <p>{this.state.movie.id}</p>

      <p>{this.state.movie.release_date.slice(0, 4)}</p>
      <p>{this.state.movie.runtime}</p>
      <p>{this.state.movie.vote_average}</p>
      {this.state.movie.spoken_languages.map(languages => <p>{languages.name}</p>)}
      {this.state.movie.production_countries.map(companies => <p>{companies.origin_country}</p>)}
      <p>{`Budget $${this.state.movie.budget}`}</p>
      {this.state.movie.genres.map(genres => <p>{genres.name}</p>)}
      <a onClick={this.handleSeenClick}><i className="fa fa-eye"></i></a>
      <a onClick={this.handlePendingClick}><i className="fa fa-clock-o"></i></a>
      <a onClick={this.handleFavouriteClick}><i className="fa fa-star-o"></i></a>
      <a onClick={this.handleLikeClick}><i className="fa fa-thumbs-up"></i></a>
      <a onClick={this.handleUnlikeClick}><i className="fa fa-thumbs-down"></i></a>
      <p>{`Overview  ${this.state.movie.overview}`}</p>
      {this.state.movie.credits.cast.slice(0, 5).map(cast => <div><img src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`} /><p>{cast.name}</p> </div>)}


    </div>}
  </div>
}
}

export default withRouter(MovieDetail)