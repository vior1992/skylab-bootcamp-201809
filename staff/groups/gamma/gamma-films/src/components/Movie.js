import React, { Component } from 'react'
import logic from '../logic'

class Movie extends Component {
    state = {
        flag: false,
        theMovie: null,
        theOverview: null,
        thePoster: null,
        theDate: null, 
        err: ''
    }

    componentDidMount() {

        const id = this.props.id

        try {
            logic.searchMovie(id)
                .then(movie => {
                    
                    this.setState({ theMovie: movie.original_title, theOverview: movie.overview, thePoster: movie.poster_path, theDate:movie.release_date  })
                   
            
            })
                .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }
        
        }

    render() {
        return <div>
            <div>
            <img src={'https://image.tmdb.org/t/p/w500/' + this.state.thePoster}  />
            </div>
            <p>{this.state.theMovie}</p>
            <p>{this.state.theDate}</p>
            <p>{this.state.theOverview}</p>
        </div>
    
    }
}

export default Movie