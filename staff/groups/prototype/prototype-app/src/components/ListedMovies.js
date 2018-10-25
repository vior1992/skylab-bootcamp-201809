import React, { Component } from 'react'
import logic from '../logic'
import Search from './Search';
import { Link } from 'react-router-dom'

class ListedMovies extends Component {
    state = { title: '', page: '1', search: false }

    componentDidMount = () => {
        switch (this.props.kind) {
            case 'trending':
                logic.retrieveTrending()
                    .then(movies => { this.setState({ movies, title: 'Trending movies' }) })
                break
            case 'now_playing':
                logic.retrieveInTheatre()
                    .then(movies => { this.setState({ movies, title: 'Now playing' }) })
                break
            case 'popular':
                logic.retrievePopular()
                    .then(movies => { this.setState({ movies, title: 'Popular movies' }) })
                break
            default:
                logic.retrieveMovies(this.props.kind, this.state.page)
                    .then(movies => {
                        let query = logic.beautifyQuery(this.props.kind)
                        this.setState({ movies, title: query }) })               
                
                this.setState({ search: true })
        }
    }

    componentWillReceiveProps = (nextProps) => {
        // debugger
        if (this.props !== nextProps) {
            switch (nextProps.kind) {
                case 'trending':
                    logic.retrieveTrending()
                        .then(movies => { this.setState({ movies, title: 'Trending movies' }) })
                    break
                case 'now_playing':
                    logic.retrieveInTheatre()
                        .then(movies => { this.setState({ movies, title: 'Now playing' }) })
                    break
                case 'popular':
                    logic.retrievePopular()
                        .then(movies => { this.setState({ movies, title: 'Popular movies' }) })
                    break
                default:
                    logic.retrieveMovies(nextProps.kind)
                        .then(movies => { 
                            let query = logic.beautifyQuery(nextProps.kind)
 
                            this.setState({ movies, title: query }) })
                            this.setState({ search: true })
            }
        }
    }

    pagination = () => {
        let pages = []
        let maxPages = this.state.movies.total_pages

        if(maxPages > 10) maxPages = 10

        for(let i = 1; i <= maxPages; i++) {
            if(i == this.state.page) {
                pages.push(<li className="page-item active"><a className="page-link" href="#" onClick={this.handleClick}>{i}</a></li>)
            } else {
                pages.push(<li className="page-item"><a className="page-link" href="#" onClick={this.handleClick}>{i}</a></li>)
            }
        }

        return pages
    }

    handleClick = event => {
        event.preventDefault()

        const page = event.target.innerText

        switch(this.props.kind) {
            case 'trending':
                logic.retrieveTrending(page)
                .then(movies => this.setState({ page, movies }))
            break
            case 'now_playing':
                logic.retrieveInTheatre(page)
                .then(movies => this.setState({ page, movies }))
            break
            case 'popular':
                logic.retrievePopular(page)
                .then(movies => this.setState({ page, movies }))
            break
            default:
                logic.retrieveMovies(this.props.kind, page)
                .then(movies => this.setState({ page, movies }))
        }
    }

    render() {
        return (
            <div>
                { this.state.search && <Search /> }
                { this.state.movies && <section className="list-movies">
                    <div className="container">
                        <div className="row">
                            <h3 className="font-weight-bold mt-5 mb-4">{this.state.title}</h3>
                        </div>
                        <div className="row">
                            { this.state.movies.results.map(movie => {
                                return (
                                    <div className="movie">
                                        { movie.poster_path && <Link to={`/movie/${movie.id}`}><img className="img-fluid img-medium-rounded" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} /></Link> }
                                        { !movie.poster_path && <Link to={`/movie/${movie.id}`}><img className="img-fluid img-medium-rounded" src="https://dummyimage.com/240x360/707070&text=+" /></Link> }
                                    </div>
                                )
                            }) }
                        </div>
                        <div className="row justify-content-center">
                            <nav className="my-3">
                                <ul className="pagination">
                                    {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li> */}
                                    { this.pagination().map(page => page) }
                                    {/* <li className="page-item"><a className="page-link" href="#">Next</a></li> */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section> }
            </div>
        )
    }
}

export default ListedMovies