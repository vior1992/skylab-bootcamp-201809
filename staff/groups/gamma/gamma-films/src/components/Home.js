import React, { Component } from 'react'
import logic from '../logic'
import Card from './Card'
import Sidebar from './Sidebar';
import { Route, withRouter } from 'react-router-dom'
import Movie from './Movie'
import SearchResults from './SearchResults'
import TopRatedSlide from './TopRatedSlide'
import CategoryAction from './CategoryAction'
import CategoryFamily from './CategoryFamily'
import SearchBar from './SearchBar';


class Home extends Component {

    state = {
        query: '',
        error: '',
        movies: []
    }
    

    handleCardClick = id => {
        this.props.history.push(`/movie/${id}`)
    }

    render() {
        return <div className="home">

            <Route exact path="/" render={props =><SearchBar />}/>
            {/* <Sidebar/> */}
            <Route exact path="/" render={props =><TopRatedSlide/>}/>
            <Route exact path="/" render={props =><CategoryAction/>}/>
            <Route exact path="/" render={props =><CategoryFamily/>}/>

            <Route path="/search/:query" render={props => <SearchResults query={props.match.params.query} />} />

            <Route path="/movie/:id" render={props => <Movie id={props.match.params.id} isLoggedIn={this.props.isLoggedIn} handleFavourites={this.props.handleFavourites} />} />


        </div>
    }

}

export default withRouter(Home)