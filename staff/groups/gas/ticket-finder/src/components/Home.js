import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Event from './Event'
import Error from './Error'
import Header from './Header'
import EventInfo from './EventInfo'

class Home extends Component {
    state = { events: [], error: null, carousel: [], eventInfoArray: [], flag: false }
    
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

    addToInfoArray = (id) => {

        logic.searchEventInfo(id)
        .then(eventInfo =>  this.setState({ eventInfoArray: eventInfo, flag: true}) )
    }
    

    render() {
        console.log(this.state.eventInfoArray)
        const { error, eventInfoArray } = this.state

        return <div>

            <InputForm onSubmit={this.handleSubmit} />
            {error && <Error message={error} />}

            {!this.state.flag && <section>
                {this.state.events.map(event => <Event key={event.id} eventImgUrl={event.images[9].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name} eventMinPrice={event.priceRanges[0].min} eventUrl={event.url} eventId={event.id} eventDate= {event.dates.start.localDate} test={this.addToInfoArray} />)}
            </section>}

            {this.state.flag && <section>
                <EventInfo eventImage={eventInfoArray.images[9].url} eventName={eventInfoArray.name} eventDate={eventInfoArray.dates.start.localDate} eventTime={eventInfoArray.dates.start.localTime} eventCity={eventInfoArray._embedded.venues[0].city.name} eventMinPrice={eventInfoArray.priceRanges[0].min} eventGetTickets={eventInfoArray.url} />
            </section>
            }
        </div>
    }
}

export default Home

// eventSeatMap={eventInfoArray.seatmap.staticUrl