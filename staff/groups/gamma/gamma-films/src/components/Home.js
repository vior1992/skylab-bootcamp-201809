import React, { Component } from 'react'
import logic from '../logic'
import Card from './Card'
import { Route, withRouter, Redirect } from 'react-router-dom'
import Sidebar from './Sidebar';

class Home extends Component {

    state = {
        query: '',
        error: '',
        movies: []
    }

    handleQueryChange = event => {

        const query = event.target.value

        this.setState({ query })
    }

    handleSubmit = event => {

        event.preventDefault()

        const query = this.state.query

        let temporal=''

        try {
            logic.searchMovies(query)
            .then(res=> temporal=res)
            .then(()=>this.setState({movies:temporal}))
            .catch(err => this.setState({ error: err.message }))
        }
        catch (err) {
            this.setState({ error: err.message })
        }
    }

    verResultados = event => {
        event.preventDefault()
        console.log(this.state.movies)
    }


    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='write a title' onChange={this.handleQueryChange}></input>
                <button type='submit'>Search Title</button>
            </form>

            <Sidebar/>

            <section>
                {this.state.movies.map(film => <Card title={film.title} description={film.overview} release={film.release_date} imgRoute={film.poster_path} />)}
            </section>
            <button type="button" onClick={this.verResultados}>Ver</button> 

        </div>
    }

}

export default Home