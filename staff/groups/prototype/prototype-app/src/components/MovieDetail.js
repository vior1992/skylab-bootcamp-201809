import React, { Component } from 'react'
import logic from '../logic'
import { withRouter } from 'react-router-dom'

class MovieDetail extends Component {

  state = { index: undefined, pending: false, seen: false, favourite: false, like: false, unlike: false }

  componentDidMount = () => {
    logic.retrieveMovie(this.props.id)
      .then(movie => { this.setState({ movie }) })
      .then(() => {

        if (JSON.stringify(logic._user) !== '{}') {
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
        } else this.setState({ warning: 'You should log in before to use that feature' })
      })
    //Where to put that to guarantee that the warning message disappears? 
    this.setState({ warning: null })

  }

  handleBackClick = event => {
    event.preventDefault()

    this.props.history.goBack()
  }

  handleSeenClick = event => {
    event.preventDefault()

    if (JSON.stringify(logic._user) !== '{}') {

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
  }

  handlePendingClick = event => {
    event.preventDefault()

    if (JSON.stringify(logic._user) !== '{}') {

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
    } else this.setState({ warning: 'You should log in before to use that feature' })

  }

  handleFavouriteClick = event => {
    event.preventDefault()

    if (JSON.stringify(logic._user) !== '{}') {

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
    } else this.setState({ warning: 'You should log in before to use that feature' })
  }

  handleLikeClick = event => {
    event.preventDefault()

    if (JSON.stringify(logic._user) !== '{}') {

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
    } else this.setState({ warning: 'You should log in before to use that feature' })
  }

  handleUnlikeClick = event => {
    event.preventDefault()

    if (JSON.stringify(logic._user) !== '{}') {

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
    } else this.setState({ warning: 'You should log in before to use that feature' })
  }


  render() {
    return <div>
      {this.state.movie && <div>
      <div className='movie-profile card container-fluid'>
        {this.state.movie.backdrop_path ? <img className='backdrop card-img container' src={`https://image.tmdb.org/t/p/w780/${this.state.movie.backdrop_path}`} /> : <img src='https://dummyimage.com/780x439/cfcfcf/000.jpg' />}
        <div className='movie-profile__card card-img-overlay media'>
          {this.state.movie.poster_path ? <img className='card__poster mr-5' src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} /> : <img src='https://dummyimage.com/185x278/cfcfcf/000.jpg' />}
          <div className='card__info media-body'>
            <p className='cardtitle mt-5 ml-4'>{this.state.movie.title}</p>
            <div className='cardtext ml-4'>
              <span>{this.state.movie.release_date.slice(0, 4)}</span>  <span> | </span>
              <span>{`${this.state.movie.runtime}'`}</span>   <span> | </span>
              <span>{`${this.state.movie.vote_average} / 10`}</span>
              {this.state.movie.spoken_languages.map(languages => <p>{languages.name}</p>)}
              {this.state.movie.production_countries.map(companies => <p>{companies.origin_country}</p>)}
              {this.state.movie.budget !== 0 && <p>{`Budget $${this.state.movie.budget}`}</p>}
              {this.state.movie.genres.map(genres => <div><span>{genres.name}</span><span> | </span></div>)}
            </div>
          </div>
        </div>
      </div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='container'>
                <div className='row-4' />
                <div className='row'>
                  <div>
                    <a>2nd row, 1º col</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='sinopsis col d-flex flex-row justify-content-start mt-3 ml-5'>
              <div>
                <h3 className='sinopsis-title mt-0 mr-5'>Overview</h3>
                <p className='sinopsis-text mr-5 text-justify'>{this.state.movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col'></div>
            <div className='cast col d-flex flex-row justify-content-start mt-3 ml-5'>
              <div>
                <h3 className='cast-title mr-5'>Cast</h3>
                <ul className='cast-text mr-5 text-justify'>
                  {this.state.movie.credits.cast.slice(0, 5).map(cast => <div>{cast.profile_path ? <img src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`} /> : <img src='https://dummyimage.com/92x138/cfcfcf/000.jpg' />}<p>{cast.name}</p> </div>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>}
    </div>
  }
}

{/* {this.state.movie && <div>
        <a onClick={this.handleBackClick}><i className="fa fa-arrow-left"></i></a>
        {this.state.movie.backdrop_path ? <img className='backdrop card-img container' src={`https://image.tmdb.org/t/p/w780/${this.state.movie.backdrop_path}`} /> : <img src='https://dummyimage.com/780x439/cfcfcf/000.jpg' />}
        {this.state.movie.poster_path ? <img className='card__poster mr-5' src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} /> : <img src='https://dummyimage.com/185x278/cfcfcf/000.jpg' />}
        <p className='cardtitle mt-5 ml-4'>{this.state.movie.title}</p>
        <p>{this.state.movie.release_date.slice(0, 4)}</p>
        <p>{`${this.state.movie.runtime}'`}</p>
        <p>{this.state.movie.vote_average}</p>
        {this.state.movie.spoken_languages.map(languages => <p>{languages.name}</p>)}
        {this.state.movie.production_countries.map(companies => <p>{companies.origin_country}</p>)}
        {this.state.movie.budget !== 0 && <p>{`Budget $${this.state.movie.budget}`}</p>}
        {this.state.movie.genres.map(genres => <p>{genres.name}</p>)}
        <a onClick={this.handleSeenClick}><i className="fa fa-eye"></i></a>
        <a onClick={this.handlePendingClick}><i className="fa fa-clock-o"></i></a>
        <a onClick={this.handleFavouriteClick}><i className="fa fa-star-o"></i></a>
        <a onClick={this.handleLikeClick}><i className="fa fa-thumbs-up"></i></a>
        <a onClick={this.handleUnlikeClick}><i className="fa fa-thumbs-down"></i></a>
        {this.state.warning && <p>{this.state.warning}</p>}
        <p className='sinopsis-text mr-5 text-justify'>{this.state.movie.overview}</p>
        {this.state.movie.credits.cast.slice(0, 5).map(cast => <div>{cast.profile_path ? <img src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`} /> : <img src='https://dummyimage.com/92x138/cfcfcf/000.jpg' />}<p>{cast.name}</p> </div>)}

      </div>}
    </div>
      <div> */}
    //   return <div>
    //   {this.state.movie && <div>
    //     <a onClick={this.handleBackClick}><i className="fa fa-arrow-left"></i></a>
    //     {this.state.movie.backdrop_path? <img src={`https://image.tmdb.org/t/p/w780/${this.state.movie.backdrop_path}`} />: <img src='https://dummyimage.com/780x439/cfcfcf/000.jpg' />}
    //     {this.state.movie.poster_path?<img src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} />: <img src='https://dummyimage.com/185x278/cfcfcf/000.jpg' />}
    //     <p>{this.state.movie.title}</p>
    //     <p>{this.state.movie.release_date.slice(0, 4)}</p>
    //     <p>{`${this.state.movie.runtime}'`}</p>
    //     <p>{this.state.movie.vote_average}</p>
    //     {this.state.movie.spoken_languages.map(languages => <p>{languages.name}</p>)}
    //     {this.state.movie.production_countries.map(companies => <p>{companies.origin_country}</p>)}
    //     {this.state.movie.budget !== 0 && <p>{`Budget $${this.state.movie.budget}`}</p>}
    //     {this.state.movie.genres.map(genres => <p>{genres.name}</p>)}
    //     <a onClick={this.handleSeenClick}><i className="fa fa-eye"></i></a>
    //     <a onClick={this.handlePendingClick}><i className="fa fa-clock-o"></i></a>
    //     <a onClick={this.handleFavouriteClick}><i className="fa fa-star-o"></i></a>
    //     <a onClick={this.handleLikeClick}><i className="fa fa-thumbs-up"></i></a>
    //     <a onClick={this.handleUnlikeClick}><i className="fa fa-thumbs-down"></i></a>
    //     {this.state.warning && <p>{this.state.warning}</p>}
    //     <p>{`Overview  ${this.state.movie.overview}`}</p>
    //     {this.state.movie.credits.cast.slice(0, 5).map(cast => <div>{cast.profile_path? <img src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`} />: <img src='https://dummyimage.com/92x138/cfcfcf/000.jpg' />}<p>{cast.name}</p> </div>)}

    //   </div>}
    // </div>

export default withRouter(MovieDetail)