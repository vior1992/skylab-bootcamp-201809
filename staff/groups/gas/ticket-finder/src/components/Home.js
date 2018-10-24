import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Event from './Event'
import Error from './Error'
import Header from './Header'
import EventInfo from './EventInfo'
import { Route, withRouter } from 'react-router-dom'
import video from './video.mp4'
import { Button } from "mdbreact"

class Home extends Component {
     state = { events: [], 
            reducedEvents:[],
            error: null,
            carousel: [], 
            eventInfoArray: [], 
            flag: false,
            pageNumber:1,
            favouriteEvents: [],
            videoFlag:false,
            searchFlag: false
         }
    
    componentDidMount() {
        logic.showEvents()
            .then(events =>  this.setState({ carousel: events }) )         
            .catch(err => this.setState({ error: err}))

        logic.retrieveFavouriteEvents()
            .then( res => this.setState({favouriteEvents: res }))
            .then (() =>  this.props.favouriteState(this.state.favouriteEvents))
            .catch(err => this.setState({ error: err}))           
    }

    handleSubmit = query => {
        this.setState({ events: [], error: null, videoFlag: true, searchFlag: true})
        try{
            logic.searchEvents(query)
            .then(events => {
            this.setState({carousel: [], events: events, reducedEvents: [ ...events.slice(0,6)]})
                
        })      
            .catch(() => this.setState({ error: `There are no events for this search :'(`}))}      
        catch(err) { alert('Please write in English') }
    }
    
    addToEventInfoArray = (id) => {
        logic.searchEventInfo(id)
        .then(eventInfo =>  this.setState({ eventInfoArray: eventInfo, flag: true}))
        .catch(err => this.setState({error : err}))
    }

    goToNextPage = () => {
        if (this.state.pageNumber<5) {
        const nextPage = this.state.pageNumber + 1
        const paintArr = this.state.events.slice((nextPage*6)-6,nextPage*6)
        this.setState({pageNumber: nextPage, reducedEvents: paintArr})
        }
    }

    goToPreviousPage = () => {
        if (this.state.pageNumber>1) {
        const previousPage = this.state.pageNumber - 1
        const paintArr = this.state.events.slice((previousPage*6)-6,previousPage*6)
        this.setState({pageNumber: previousPage, reducedEvents: paintArr})
        }
    }

    render() {
        const { error, eventInfoArray } = this.state
        return <div>

            <InputForm onSubmit={this.handleSubmit} />
            {error && <Error message={error} />}

            {!this.state.videoFlag && <section>
                <div className="video-container">
                <video width="1920px" autoPlay muted loop src={video}></video>
                </div>
                </section>}


                {<section>
                <div className="index-content">
                <div className="container-carousel">
                {this.state.carousel.map(event => <Event key={event.id} eventImgUrl={event.images[9].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name}  eventUrl={event.url} eventId={event.id} eventDate= {event.dates.start.localDate} eventSearch={this.addToEventInfoArray} favourites = {this.props.favourites} />)}
                </div>
                </div>
                </section>}


                {this.state.searchFlag && <section>
                <div className="index-content">
                <div className="container-carousel">
                {this.state.reducedEvents.map(event => <Event favourites = {this.props.favourites}  key={event.id} eventImgUrl={event.images[9].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name}  eventUrl={event.url} eventMinPrice={ !!event.priceRanges ? event.priceRanges[0].min : false } eventId={event.id} eventDate= {event.dates.start.localDate} eventSearch={this.addToEventInfoArray} />)}
                </div>
                </div>
                <div className="page-btns">
                {<Button color="unique" onClick={this.goToPreviousPage}>Previous page</Button>}                
                {<Button color="unique" onClick={this.goToNextPage}>Next page</Button>}
                </div>
                </section>}


                {this.state.flag && <section>
                <EventInfo eventImage={eventInfoArray.images[9].url} eventName={eventInfoArray.name} eventDate={eventInfoArray.dates.start.localDate} eventTime={eventInfoArray.dates.start.localTime} eventCity={eventInfoArray._embedded.venues[0].city.name} eventGetTickets={eventInfoArray.url} eventMinPrice={ !!eventInfoArray.priceRanges ? eventInfoArray.priceRanges[0].min : false } latitude = {eventInfoArray._embedded.venues[0].location.latitude} longitude ={eventInfoArray._embedded.venues[0].location.longitude} />
                </section>}
            
        </div>
    }
}

export default withRouter(Home)


// eventSeatMap={eventInfoArray.seatmap.staticUrl