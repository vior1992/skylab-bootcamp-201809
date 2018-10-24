import React, { Component } from 'react'
import logic from '../logic'

class EventInfo extends Component {

    state = {eventInfoArray: []}

    componentDidMount() {

        this.addToEventInfoArray(this.props.test)     

    }

    addToEventInfoArray = id => {

            try {
                logic.searchEventInfo(id)
                .then(eventInfo => this.setState({ eventInfoArray: eventInfo }))
                .catch(err => this.setState({ error: err }))
                   
            }
            catch (err) { alert('Please write in English') }
    }

    render() {

        const { eventInfoArray } = this.state

    return <div className="card">

            <img className="card-img-top" src={eventInfoArray.images && eventInfoArray.images[9].url} alt="Card cap" />

                <div className="card-body">

                    <h5 className="card-title"> {eventInfoArray.name }</h5>

                    <p> {eventInfoArray.dates && (eventInfoArray.dates.start.localTime ? eventInfoArray.dates.start.localTime : 'Event time to be announced') } </p>
                    
                    <p> {eventInfoArray._embedded && eventInfoArray._embedded.venues[0].city.name} </p>

                    {/* <p>{this.props.eventMinPrice ? <span>From {this.props.eventMinPrice} EUR</span> : <span>Price to be announced</span>}</p> */}
                    <p>PRICE</p>

                    <p className="card-text"><a target="blank" href= {eventInfoArray.url}>Get tickets</a></p>

                    {<iframe width="100%" height="450" frameBorder="0"  src={"https://www.google.com/maps/embed/v1/view?key=AIzaSyCk3qtl1MWipyqiAvMNKewzEjZbD-zrw7A&center=" + (eventInfoArray._embedded && eventInfoArray._embedded.venues[0].location.latitude) + "," + (eventInfoArray._embedded && eventInfoArray._embedded.venues[0].location.longitude) + "&zoom=16&maptype=roadmap"} />}
                    
                </div>
        </div>
    }
}

export default EventInfo

