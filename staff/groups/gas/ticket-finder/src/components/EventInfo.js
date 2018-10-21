import React, { Component } from 'react'

class EventInfo extends Component {
    render() {
    return <div className="card">
            <img className="card-img-top" src={this.props.eventImage} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title"> {this.props.eventName }</h5>
                    <p> {this.props.eventDate}</p>
                    <p> {this.props.eventTime? this.props.eventTime : 'Event time to be announced' } </p>
                    <p> {this.props.eventCity } </p>
                    <p>From {this.props.eventMinPrice } EUR</p>
                    <p className="card-text"><a target="blank" href= {this.props.eventGetTickets}>Get tickets</a></p>
                    {/* <img src={this.props.eventSeatMap} alt="seatmap" /> */}
                                     
                </div>
        </div>
    }
}

export default EventInfo