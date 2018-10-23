import React, { Component } from 'react'
import logic from '../logic'
import ButtonBar from './ButtonBar'
import MiniCard from './MiniCard'


class TopRatedSlide extends Component {
    state = {
        error: '',
        movies: [],
        start: 1,
        stop: 7,
        flag: true

    }

    handleSearch = this.handleSearch.bind(this)

    handleSearch(date) {
        let temporal = [];

        try {
            logic.searchPopularMovies(date)
                .then(res => temporal = res)
                .then(() => this.setState({ movies: temporal }))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
        this.setState({ flag: false })
        console.log(this.state.movies)
    }


    render() {
        return <div className="slide1">
            {this.state.flag && this.handleSearch("week")}

            <h4>Popular movies</h4>

            <div class="bg-img" >
                {this.state.movies.map((film, index) => {
                    if (index >= this.state.start && index < this.state.stop) {
                        return <MiniCard imgRoute={film.poster_path} />
                    }
                })}
            </div>
            <a href="#">
            </a>
        </div>
    }
}

export default TopRatedSlide