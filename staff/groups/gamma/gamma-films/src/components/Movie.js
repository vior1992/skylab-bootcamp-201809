import React, { Component } from 'react'
import logic from '../logic'
import SearchBar from './SearchBar'

class Movie extends Component {
    state = {
        flag: false,
        theMovie: null,
        theOverview: null,
        thePoster: null,
        theDate: null,
        err: '',
        showFavButton: false,
        flagController:true,
        youtubeKey: null,
        cast: null
    }

    componentDidMount() {

        const id = this.props.id

        try {
            logic.searchMovie(id)
                .then(movie => {
                    this.favButtonController()
                    this.setState({ theMovie: movie.original_title, theOverview: movie.overview, thePoster: movie.poster_path, theDate: movie.release_date })
                })
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }
        
        try {
            
            logic.searchTrailer(id)
                .then(trailer => {

                    this.setState({ youtubeKey: trailer[0].key})
                })
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }

        try {
            
            logic.searchCharacters(id)
                .then(results => {

                    this.setState({ cast : results})
                })
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleAddFav = () => {
        this.setState({ flagController: true })
        logic.listFavourites(this.props.id)
            .then(res => {
                logic.updateFavourites(res, this.props.id, this.state.thePoster )
                    .then(()=>this.favButtonController())
            })
    }

    handleRemoveFav = () => {
        this.setState({ flagController: true })
        logic.listFavourites(this.props.id)
            .then(res => {
                logic.removeFavourites(res, this.props.id, this.state.thePoster )
                    .then(()=>this.favButtonController())
            })
    }

    favButtonController() {

        const id = this.props.id

        if (!!this.props.isLoggedIn) {
            let listFav = ''
            try {
                logic.listFavourites()
                    .then(res => listFav = res)
                    .then(() => {
                        const showFavButton = listFav.find(F =>F.id === id)
                
                        this.setState({ showFavButton })
                        this.setState({ flagController: false })
                    })
                    .catch(err => this.setState({ error: err.message }))

            } catch (err) {
                if (err.message) throw Error(err.message)
            }
        }
    }

    render() {
        
        return <div className="home">
        <SearchBar />
        <div className='card'>

            <div className='card_left'>
                <img src={'https://image.tmdb.org/t/p/w500/' + this.state.thePoster}></img>
            </div>

            <div className='card_right'>

                <h1>{this.state.theMovie}</h1>

                <div className='card_right__details'>

                    <ul>
                        <li>ID: {this.props.id}</li>
                        <li>{this.state.theDate}</li>
                        <li>Action</li>
                    </ul>
                    <div className='card_right__rating'>
                        {this.props.isLoggedIn && !!!this.state.showFavButton && <button type="button" onClick={this.handleAddFav} > Add to favorites </button>}
                        {this.props.isLoggedIn && !!this.state.showFavButton && <button type="button" onClick={this.handleRemoveFav} > Remove from favorites </button>}
                    </div>

                    <div className='card_right__review'>
                        <p>{this.state.theOverview}</p>
                    </div>

                    {!!this.state.youtubeKey && <div className='card_right__button'>
                        <a href={'https://www.youtube.com/watch?v='+this.state.youtubeKey} target='_blank'>WATCH TRAILER</a>
                    </div>}
                    
                </div>
            </div>
        </div>
        {!!this.state.cast && <div>
                        <h3>Main Characters</h3>
                        <div><p>{this.state.cast[0].name+ ' as ' +this.state.cast[0].character}</p></div>
                        <img src={'https://image.tmdb.org/t/p/w300/' + this.state.cast[0].profile_path}></img>
                        <div><p>{this.state.cast[1].name+ ' as ' +this.state.cast[1].character}</p></div>
                        <img src={'https://image.tmdb.org/t/p/w300/' + this.state.cast[1].profile_path}></img>
                        <div><p>{this.state.cast[2].name+ ' as ' +this.state.cast[2].character}</p></div>
                        <img src={'https://image.tmdb.org/t/p/w300/' + this.state.cast[2].profile_path}></img>
                        <div><p>{this.state.cast[3].name+ ' as ' +this.state.cast[3].character}</p></div>
                        <img src={'https://image.tmdb.org/t/p/w300/' + this.state.cast[3].profile_path}></img>
                        <div><p>{this.state.cast[4].name+ ' as ' +this.state.cast[4].character}</p></div>
                        <img src={'https://image.tmdb.org/t/p/w300/' + this.state.cast[4].profile_path}></img>
                    </div>}
    </div>

    }
}

export default Movie