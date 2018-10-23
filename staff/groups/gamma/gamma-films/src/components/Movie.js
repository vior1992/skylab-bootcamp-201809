import React, { Component } from 'react'
import logic from '../logic'

class Movie extends Component {
    state = {
        flag: false
    }

    componentDidMount() {

        const id = this.props.id

        let temporal=''

        try {
            logic.searchMovie(id)
            .then(res=> temporal=res)
            .then(()=>this.setState({movies:temporal}))
            .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }
        console.log(temporal)

        }

    render() {
        return <div>
            HOLA
        </div>
    
    }
}

export default Movie