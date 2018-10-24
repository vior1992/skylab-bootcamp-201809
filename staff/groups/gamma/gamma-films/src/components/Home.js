import React, { Component } from 'react'
import logic from '../logic'
import Card from './Card'
import Sidebar from './Sidebar';
import { Route, withRouter } from 'react-router-dom'
import Movie from './Movie'
import SearchResults from './SearchResults'
import TopRatedSlide from './TopRatedSlide'
import CategoryAction from './CategoryAction'

class Home extends Component {

    state = {
        query: '',
        error: '',
        movies: [],
        favs: []
    }

    // componentDidMount() {
        
    //     const favourites = logic.listFavourites()
    //     this.setState({favs:favourites})
    // }

    handleQueryChange = event => {

        const query = event.target.value

        this.setState({ query })
    }

    handleSubmit = event => {

        event.preventDefault()

        const query = this.state.query

        this.props.history.push(`/search/${query}`)
    }

    verResultados = event => {
        event.preventDefault()
        console.log(this.state.movies)
    }

    handleCardClick = id => {
        this.props.history.push(`/movie/${id}`)
    }

    handleFavClick = id =>{
        let favourites = this.state.favs
        favourites.push(id)
        this.setState({favs:favourites})
    }

    render() {
        return <div className="home">
            <form className="form_search" onSubmit={this.handleSubmit}>
                <input className="input_search" type='text' placeholder='write a title' onChange={this.handleQueryChange}></input>
                <button className="button_search" type='submit'>Search Title</button>
            </form>

            <Route path="/search/:query" render={props => <SearchResults query={props.match.params.query} />} />

            {/* <TopRatedSlide/> */}

<<<<<<< HEAD
            <section>
            {/* <Route path="/movie/:id" render={() => <Card title={film.title} description={film.overview} release={film.release_date} imgRoute={film.poster_path} movieId={film.Id} />} /> */}
=======
            {/* <Sidebar/> */}
            <div>
                <Route exact path="/" render={props => <TopRatedSlide />} />
                <Route exact path="/" render={props => <TopRatedSlide />} />
                <Route exact path="/" render={props => <TopRatedSlide />} />
            </div>
>>>>>>> 93892d7f6a18155b702885bccc6e1df204ef4e02

            <div class="cards">
                <Route path="/movie/:id" render={props => <Movie id={props.match.params.id} handleFavClick={this.handleFavClick} isLoggedIn={this.props.isLoggedIn} />} />
            </div>

        </div>
    }

}

export default withRouter(Home)