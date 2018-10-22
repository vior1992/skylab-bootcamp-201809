import React, { Component } from 'react'
import logic from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import ButtonBar from './ButtonBar';


class Sidebar extends Component {

    state = {
        error: '',
        movies: []
    }

    getMoviesByGenre=this.getMoviesByGenre.bind(this)
    getMoviesByGenre (genres) {

        let temporal = [];

        console.log('error '+this.state.error )

        try {
            logic.searchMoviesByCategories(genres)
                .then(res => temporal = res)
                .then(() => this.setState({ movies: temporal }))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }

        console.log(this.state.movies)

    }


    render() {
        return <nav>

            <ul>

                <li>
                    {/* <a href='#' onClick={this.getMoviesByGenre} category={28} >Categoria 28: Action</a> */}
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={28} />
                </li>

                <li>
                    <a>Que</a>
                </li>

                <li>
                    <a>Tal</a>
                </li>

                <li>
                    <a>Te</a>
                </li>

                <li>
                    <a>Va?</a>
                </li>

            </ul>


        </nav>
    }
}

export default Sidebar