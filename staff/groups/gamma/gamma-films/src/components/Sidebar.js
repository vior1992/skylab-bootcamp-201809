import React, { Component } from 'react'
import logic from '../logic'
import ButtonBar from './ButtonBar';


class Sidebar extends Component {

    state = {
        error: '',
        movies: []
    }

    getMoviesByGenre = this.getMoviesByGenre.bind(this)

    getMoviesByGenre(genres) {
        let temporal = [];

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

    getPopularMovies = this.getPopularMovies.bind(this)

    getPopularMovies(date) {
        let temporal = [];

        try {
            logic.searchPopularMovies(date)
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

            <h4>Popular movies</h4>

            <ul>
                <li>
                    <ButtonBar onClick={this.getPopularMovies} category={'week'} name={'Popular this week'} />
                </li>
                <li>
                    <ButtonBar onClick={this.getPopularMovies} category={'day'} name={'Popular today'} />
                </li>
            </ul>

            <h4>Now playing</h4>
            <ul>
                <li>
                    <ButtonBar onClick={this.getPopularMovies} category={'week'} name={'Popular this week'} />
                </li>
                <li>
                    <ButtonBar onClick={this.getPopularMovies} category={'day'} name={'Popular today'} />
                </li>
            </ul>

            <h4>Categories</h4>
            <ul>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={28} name={'Action'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={12} name={'Adventure'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={16} name={'Animation'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={35} name={'Comedy'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={80} name={'Crime'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={99} name={'Documentary'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={10751} name={'Family'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={14} name={'Fantasy'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={36} name={'History'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={27} name={'Horror'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={10402} name={'Music'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={9648} name={'Mistery'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={10749} name={'Romance'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={878} name={'Science Fiction'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={10770} name={'TV Movie'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={53} name={'Thriller'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={10752} name={'War'} />
                </li>

                <li>
                    <ButtonBar onClick={this.getMoviesByGenre} category={37} name={'Western'} />
                </li>
            </ul>



        </nav>
    }
}

export default Sidebar