import React, { Component } from 'react'
import logic from '../logic'
import MiniCard from './MiniCard'


class CategoryAction extends Component {
    state = {
        error: '',
        movies: [],
        flag: true

    }

    handleSearch = this.handleSearch.bind(this)

    debugger
    handleSearch(date) {
        try {
            logic.searchPopularMovies(date)
                .then(movies => this.setState({ movies }))
                .catch(err => this.setState({ error: err.message }))
                debugger
        }
        catch (err) {
            this.setState({ error: err.message })
        }
        this.setState({ flag: false })
    }
        


    render() {
        return <div class="contain">
            {this.state.flag && this.handleSearch("28")}
            <div class="row">
                <h4>Action movies</h4>
                <div class="row__inner">
                    {this.state.movies.map((film) => {
                        return <MiniCard title={film.title} description={film.overview} release={film.release_date} imgRoute={film.poster_path} id={film.id} onCardClick={this.handleCardClick} />
                    })}
                </div>
            </div>
        </div>

    }
}

export default CategoryAction