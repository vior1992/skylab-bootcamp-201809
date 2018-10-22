import React, { Component } from 'react'
import logic from '../logic'
import MoviesList from './MoviesList'

class ListedMovies extends Component {
    state={movies: []}

    componentDidMount = () => {
        switch(this.props.kind){
            case 'trending':
            logic.retrieveTrending()
                .then(movies => { this.setState({ movies }) })
            break
            case 'inTheatre':
            logic.retrieveInTheatre()
                .then(movies => { this.setState({ movies }) })
            break
            case 'popular':
            logic.retrievePopular()
                .then(movies => { this.setState({ movies }) })
            break
        }
    }

    render() {
        return <div>
            <MoviesList movies={this.state.movies} />
        </div>
    }
}

export default ListedMovies