import React, { Component } from 'react'
import logic from '../logic'
import MoviesList from './MoviesList'

class UserMovies extends Component {

    render() {
        return <div>
            {logic._user.pending.length !== 0 ?<div>
                <h3>Movies waiting to be seen</h3>
                <MoviesList movies={logic._user.pending} />
            </div>: <h4>You don't have any movie in your Seen list</h4>}
            {logic._user.seen.length !== 0 ?<div>
                <h3>Movies already seen</h3>
                <MoviesList movies={logic._user.seen} />
            </div>: <h4>You don't have any movie in your Waiting list</h4>}
        </div>
    }
}

export default UserMovies