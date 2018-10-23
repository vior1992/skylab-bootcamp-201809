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
        movies: []
    }

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

    render() {
        return <div className="home">
            <form className="form_search" onSubmit={this.handleSubmit}>
                <input className="input_search" type='text' placeholder='write a title' onChange={this.handleQueryChange}></input>
                <button className="button_search" type='submit'>Search Title</button>
            </form>

            {/* <TopRatedSlide/> */}

            {/* <Sidebar/> */}
            <Route exact path="/" render={props =><TopRatedSlide/>}/>
            <Route exact path="/" render={props =><TopRatedSlide/>}/>
            <Route exact path="/" render={props =><TopRatedSlide/>}/>

            <Route path="/search/:query" render={props => <SearchResults query={props.match.params.query} />} />

            <Route path="/movie/:id" render={props => <Movie id={props.match.params.id} />} />

        </div>
    }

}

export default withRouter(Home)