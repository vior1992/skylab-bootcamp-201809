import React, { Component } from 'react'
import logic from '../logic'
import { withRouter } from 'react-router-dom'

class MovieDetail extends Component {

  state = { pending: false, seen: false, favourite: false, like: false, unlike: false }

  componentDidMount = () => {
    logic.retrieveMovie(this.props.id)
      .then(movie => { this.setState({ movie }) })
      .then(() => {

        if (JSON.stringify(logic._user) !== '{}') {

          //Check another way to know if logic._user is an empty object or not

          let indexSeen = logic.checkInList(this.props.id, 'seen')

          let indexPending = logic.checkInList(this.props.id, 'pending')

          if (indexSeen !== -1) this.setState({ seen: true })

          else if (indexPending !== -1) this.setState({ pending: true })
        }
      })
  }

  componentWillUnmount = (prevProps, prevState) => {
    // if(prevState.seen !== this.state.seen || prevState.pending !== this.state.pending || prevState.favourite !== this.state.favourite || prevState.like !== this.state.like || prevState.unlike !== this.state.unlike) {
    // if (prevState.seen !== this.state.seen) {

    //Where to put that to guarantee that the warning message disappears? 
    this.setState({ warning: null })
  }

  handleBackClick = event => {
    event.preventDefault()

    this.props.history.goBack()
  }

  handleSeenClick = event => {
    event.preventDefault()

    const check = logic.seenClick(this.props.id, this.state.movie)

    switch (check) {

      case '00':
        this.setState({ seen: false, warning: null })
        break
      case '10':
        this.setState({ seen: true, pending: false })
        break
      default:
        this.setState({ warning: check })
      //the state changes, but it doesn't call teh render yet
    }
  }

  handlePendingClick = event => {
    event.preventDefault()

    const check = logic.pendingClick(this.props.id, this.state.movie)

    switch (check) {

      case '00':
        this.setState({ pending: false })
        break
      case '01':
        this.setState({ seen: false, pending: true })
        break
      default:
        this.setState({ warning: check })
    }

  }

  handleFavouriteClick = event => {
    event.preventDefault()

    const check = logic.favouriteClick(this.props.id)

    switch (check) {

      case '0':
        this.setState({ favourite: false })
        break
      case '1':
        this.setState({ favourite: true })
        break
      default:
        this.setState({ warning: check })
    }

  }

  handleLikeClick = event => {
    event.preventDefault()

    const check = logic.likeClick(this.props.id)

    switch (check) {

      case '00':
        this.setState({ like: false })
        break
      case '10':
        this.setState({ like: true, Unlike: false })
        break
      default:
        this.setState({ warning: check })
    }
  }

  handleUnlikeClick = event => {
    event.preventDefault()

    const check = logic.unlikeClick(this.props.id)

    switch (check) {

      case '00':
        this.setState({ unlike: false })
        break
      case '01':
        this.setState({ like: false, Unlike: true })
        break
      default:
        this.setState({ warning: check })
    }
  }

  componentDidCatch(errorString, errorInfo) {
    this.setState({ error: errorString })
    //What is error info???! 
  }

  render() {
    return <div>
      {this.state.movie && <div>
        <div className='container'>

          <div className='div-backdrop'>
            {this.state.movie.backdrop_path ? <img className='backdrop img-fluid' src={`https://image.tmdb.org/t/p/w780/${this.state.movie.backdrop_path}`} /> : <img src='https://dummyimage.com/780x439/cfcfcf/000.jpg' />}
          </div>
          <div className='row row-move'>
            <div className='col'>
              <a onClick={this.handleBackClick}><i className="fa fa-arrow-left"></i></a>
              {this.state.movie.poster_path ? <img className='mr-5' src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} /> : <img src='https://dummyimage.com/185x278/cfcfcf/000.jpg' />}
            </div>
            <div className='col'>
              <p className='card-title mt-5 ml-4'>{this.state.movie.title}</p>
              <div className='card-text'>
                <span>{this.state.movie.release_date.slice(0, 4)}</span>  <span> | </span>
                <span>{`${this.state.movie.runtime}'`}</span>   <span> | </span>
                <span>{`${this.state.movie.vote_average} / 10`}</span>
                {this.state.movie.spoken_languages.map(languages => <p>{languages.name}</p>)}
                {this.state.movie.production_countries.map(companies => <p>{companies.origin_country}</p>)}
                {this.state.movie.budget !== 0 && <p>{`Budget $${this.state.movie.budget}`}</p>}
                {this.state.movie.genres.map(genres => <div className='d-inline'><span>{genres.name}</span><span> | </span></div>)}
              </div>
            </div>
          </div>
        </div>
        {/* <div className='movie-profile card container-fluid'>
          {this.state.movie.backdrop_path ? <img className='backdrop card-img container' src={`https://image.tmdb.org/t/p/w780/${this.state.movie.backdrop_path}`} /> : <img src='https://dummyimage.com/780x439/cfcfcf/000.jpg' />}
          <div className='movie-profile__card card-img-overlay media'>
          <a onClick={this.handleBackClick}><i className="fa fa-arrow-left"></i></a>
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
                {this.state.movie.genres.map(genres => <div className='d-inline'><span>{genres.name}</span><span> | </span></div>)}
              </div>
            </div>
          </div>
        </div> */}
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='container'>
                <div className='row-4' />
                <div className='row' />
              </div>
            </div>
            <div className='sinopsis col d-flex flex-row justify-content-start mt-3 ml-5'>

              <div>
                <a onClick={this.handleSeenClick}><i className="fa fa-eye"></i></a>
                <a onClick={this.handlePendingClick}><i className="fa fa-clock-o"></i></a>
                <a onClick={this.handleFavouriteClick}><i className="fa fa-star-o"></i></a>
                <a onClick={this.handleLikeClick}><i className="fa fa-thumbs-up"></i></a>
                <a onClick={this.handleUnlikeClick}><i className="fa fa-thumbs-down"></i></a>
                {this.state.warning && <p>{this.state.warning}</p>}
              </div>

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
      {this.state.error && <h3>{this.state.error}</h3>}
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