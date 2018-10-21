import React, { Component } from 'react'
import logic from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'

class Home extends Component {

    state = {query: '', error:''}

    handleQueryChange = event =>{

        const query = event.target.value

        this.setState ({ query })
    }

    handleSubmit = event => {

        event.preventDefault()

        const query = this.state.query

        try{
            logic.searchMovies (query)
            .then(()=>{
                this.setState({error: null})
            })
            .catch( err => this.setState({error: err.message}))
        }
        catch (err) {
            this.setState({error: err.message})
        }
        debugger
        console.log("movies: "+logic.movies)

        

    }


    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='write a title' onChange={this.handleQueryChange}></input>
            <button type='submit'>Search Title</button>
        </form>
    }

}

export default Home