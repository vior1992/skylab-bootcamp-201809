import React, { Component } from 'react'
import logic from '../logic'
import Event from './Event'
import { Button } from "mdbreact"

class SearchResults extends Component {
    state = {
        events: [],
        pageNumber: 1,
        reducedEvents: []
    }

    componentDidMount() {
        this.searchEvents(this.props.query)
    }

    componentWillReceiveProps(props) {
        debugger
        this.searchEvents(props.query)
    }

    searchEvents(query) {
        try {
            logic.searchEvents(query)
                .then(events => {
                    this.setState({ events: events, reducedEvents: [...events.slice(0, 6)] })

                })
                .catch(() => this.setState({ error: `There are no events for this search :'(` }))
        }
        catch (err) { alert('Please write in English') }
    }

    goToNextPage = () => {
        if (this.state.pageNumber < 5) {
            const nextPage = this.state.pageNumber + 1
            const paintArr = this.state.events.slice((nextPage * 6) - 6, nextPage * 6)
            this.setState({ pageNumber: nextPage, reducedEvents: paintArr })
        }
    }

    goToPreviousPage = () => {
        if (this.state.pageNumber > 1) {
            const previousPage = this.state.pageNumber - 1
            const paintArr = this.state.events.slice((previousPage * 6) - 6, previousPage * 6)
            this.setState({ pageNumber: previousPage, reducedEvents: paintArr })
        }
    }

    render() {
        return <section>
            <div className="index-content">
                <div className="container-carousel">
                    {this.state.reducedEvents.map(event => <Event favourites={this.props.favourites} key={event.id} eventImgUrl={event.images[9].url} eventName={event.name} eventCity={event._embedded.venues[0].city.name} eventUrl={event.url} eventMinPrice={!!event.priceRanges ? event.priceRanges[0].min : false} eventId={event.id} eventDate={event.dates.start.localDate} eventSearch={this.addToEventInfoArray} />)}
                </div>
            </div>
            <div className="page-btns">
                {<Button color="unique" onClick={this.goToPreviousPage}>Previous page</Button>}
                {<Button color="unique" onClick={this.goToNextPage}>Next page</Button>}
            </div>
        </section>
    }
}

export default SearchResults