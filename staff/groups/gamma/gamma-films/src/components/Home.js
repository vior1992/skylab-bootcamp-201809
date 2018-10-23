import React, { Component } from 'react'
import logic from '../logic'
import Card from './Card'
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
        return <div className="home">
            <form className="form_search" onSubmit={this.handleSubmit}>
                <input className="input_search" type='text' placeholder='write a title' onChange={this.handleQueryChange}></input>
                <button className="button_search" type='submit'>Search Title</button>
            </form>

            <Sidebar/>


            <section>
            {/* <Route path="/movie/:id" render={() => <Card title={film.title} description={film.overview} release={film.release_date} imgRoute={film.poster_path} movieId={film.Id} />} /> */}

                {this.state.movies.map(film => <Card title={film.title} description={film.overview} release={film.release_date} imgRoute={film.poster_path} />)}
            </section>

        </div>
    }

}

export default Home