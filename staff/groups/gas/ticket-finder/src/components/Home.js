import React, { Component } from 'react'
import logic from '../logic'
import SearchForm from './SearchForm'
import Event from './Event'
import Error from './Error'
import Header from './Header'
import EventInfo from './EventInfo'
import { Route, withRouter } from 'react-router-dom'
import video from './video.mp4'
import { Button } from "mdbreact"
import SearchResults from './SearchResults'

class Home extends Component {
    state = {
        error: null,
        carousel: [],
        eventInfoArray: [],
        flag: false,
        pageNumber: 1,
        favouriteEvents: [],
        videoFlag: false,
        searchFlag: false
    }

    componentDidMount() {
        logic.showEvents()
            .then(events => this.setState({ carousel: events }))
            .catch(err => this.setState({ error: err }))

        logic.retrieveFavouriteEvents()
            .then(res => this.setState({ favouriteEvents: res }))
            .then(() => this.props.favouriteState(this.state.favouriteEvents))
            .catch(err => this.setState({ error: err }))
    }

    handleSubmit = query => {
        this.setState({ events: [], error: null, videoFlag: true }, () => this.props.history.push(`/home/search/${query}`))
    }

    addToEventInfoArray = id => {
        logic.searchEventInfo(id)
            .then(eventInfo => this.setState({ eventInfoArray: eventInfo, flag: true }))
            .catch(err => this.setState({ error: err }))
    }

    render() {
        const { query, error, eventInfoArray } = this.state
        return <div>

            <SearchForm onSubmit={this.handleSubmit} />
            {error && <Error message={error} />}

            <Route path="/home/search/:query" render={props => <SearchResults query={props.match.params.query} />} />

            {!this.state.videoFlag && <section>
                <div className="video-container">
                    <video width="1920px" autoPlay muted loop src={video}></video>
                </div>
            </section>}


            {<section>
                <div className="index-content">
                    <div className="container-carousel">
                        {this.state.carousel.map(event => <Event key={event.id} eventImgUrl={event.images[9].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name} eventUrl={event.url} eventId={event.id} eventDate={event.dates.start.localDate} eventSearch={this.addToEventInfoArray} favourites={this.props.favourites} />)}
                    </div>
                </div>
            </section>}




            {this.state.flag && <section>
                <EventInfo eventImage={eventInfoArray.images[9].url} eventName={eventInfoArray.name} eventDate={eventInfoArray.dates.start.localDate} eventTime={eventInfoArray.dates.start.localTime} eventCity={eventInfoArray._embedded.venues[0].city.name} eventGetTickets={eventInfoArray.url} eventMinPrice={!!eventInfoArray.priceRanges ? eventInfoArray.priceRanges[0].min : false} latitude={eventInfoArray._embedded.venues[0].location.latitude} longitude={eventInfoArray._embedded.venues[0].location.longitude} />
            </section>}

        </div>
    }
}

export default withRouter(Home)


// eventSeatMap={eventInfoArray.seatmap.staticUrl