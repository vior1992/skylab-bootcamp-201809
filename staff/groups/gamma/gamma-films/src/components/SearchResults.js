import React, { Component } from 'react'
import Card from './Card'
import logic from '../logic'

class SearchResults extends Component {
    state = { movies: [], error: null }

    componentDidMount() {
        this.searchMovies(this.props.query)
    }

    componentWillReceiveProps(props) {
        this.searchMovies(props.query)
    }

    searchMovies(query) {
        try {
            logic.searchMovies(query)
                .then(movies => this.setState({ movies }))
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <section>
            {this.state.movies.map(film => <Card title={film.title} description={film.overview} release={film.release_date} imgRoute={film.poster_path} id={film.id} onCardClick={this.handleCardClick} />)}
        </section>
    }
}

export default SearchResults