import React, { Component } from 'react'
import logic from '../logic'
import MoviesList from './MoviesList'

class UserMovies extends Component {


    render() {
        return <div>
            <MoviesList movies={logic._user.pending} />
            <MoviesList movies={logic._user.seen} />
        </div>
    }
}

export default UserMovies