import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Event from './Event'

class Home extends Component {
    state = { events: [] }
    
    // componentDidMount() {
    //     logic.showEvents()
        
    //         .then(events =>  this.setState({ events }) )

    //     // TODO error handling!
    // }

    handleSubmit = query =>
        logic.searchEvents(query)
            
            .then(events => this.setState({ events }))

    // TODO error handling!

    // handleDeletePost = id =>
    //     logic.deletePostit(id)
    //         .then(() => logic.listevents())
    //         .then(events => this.setState({ events }))

    // // TODO error handling!


    // handleUpdatePost = (id, query) =>
    //     logic.updatePostit(id, query)
    //         .then(() => logic.listevents())
    //         .then(events => this.setState({ events }))

    // // TODO error handling!


    render() {
        console.log(this.state.events)
        return <div>
            <h1>Home page</h1>

            <InputForm onSubmit={this.handleSubmit} />

            <section>
                {this.state.events.map(event => <Event key={event.id} eventImgUrl={event.images[9].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name} eventUrl={event.url} eventId={event.id} />)}
            </section>
        </div>
    }
}

export default Home
