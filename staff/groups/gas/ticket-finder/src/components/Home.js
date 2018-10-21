import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Event from './Event'
import Error from './Error'
import Header from './Header'

class Home extends Component {
    state = { events: [], error: null, carousel: [] }
    
    componentDidMount() {
        logic.showEvents()
        .then(events =>  this.setState({ events }) )          

        // TODO error handling!
    }

    handleSubmit = query => {
        try{
            logic.searchEvents(query)
            
            .then(events => this.setState({ events }))
            .catch(err => this.setState({ error: `There are no events for this search :'(`}))
        }
        catch(err) { alert('Please write in English') }
        this.setState({ events: [], error: null })
    }

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
        const { error } = this.state

        return <div>
            <Header logout = { this.props.onLogout }></Header>

            <InputForm onSubmit={this.handleSubmit} />
            {error && <Error message={error} />}

            <section>
                {this.state.events.map(event => <Event key={event.id} eventImgUrl={event.images[9].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name} eventMinPrice={event.priceRanges[0].min}eventUrl={event.url} eventId={event.id} eventDate= {event.dates.start.localDate}  />)}

            </section>
        </div>
    }
}

export default Home
