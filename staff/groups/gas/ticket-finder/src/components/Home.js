import React, { Component } from 'react'
import logic from '../logic'
import SearchForm from './SearchForm'
import Event from './Event'
import Error from './Error'
import EventInfo from './EventInfo'
import { Route, withRouter } from 'react-router-dom'
import video from './video.mp4'
import SearchResults from './SearchResults'

class Home extends Component {
    state = {
        error: null,
        carousel: [],
        eventInfoArray: [],
        favouriteEvents: [],
        searchFlag: true,
    }

    componentDidMount() {
        logic.showEvents()
            .then(events => this.setState({ carousel: events }))
            .catch(err => this.setState({ error: err }))            
    }

    handleSubmit = query => {
        this.setState({ error: null, searchFlag: false}, () => this.props.history.push(`/home/search/${query}`))
    }


    render() {
        const { error } = this.state
        return <div>
            {<SearchForm onSubmit={this.handleSubmit}/>}
            {error && <Error message={error} />}

            <Route path="/home/search/:query" render={props => <SearchResults query={props.match.params.query} />} />
            <Route path="/home/events/:id" render={props => <EventInfo id={props.match.params.id} />} />
            {this.state.searchFlag && <section>
                <div className="video-container">
                    <video width="1920px" autoPlay muted loop src={video}></video>
                </div>
            </section>}


            {this.state.searchFlag && <section>
                <div className="index-content">
                    <div className="container-carousel">
                        {this.state.carousel.map(event => <Event key={event.id} eventImgUrl={event.images[9].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name} eventUrl={event.url} eventId={event.id} eventDate={event.dates.start.localDate} eventSearch={this.addToEventInfoArray} favourites={this.props.favourites} hideCarousel={this.handleHideCarousel} />)}
                    </div>
                </div>
            </section>}
        </div>
    }
}

export default withRouter(Home)




