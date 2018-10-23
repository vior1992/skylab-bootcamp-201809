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
                    <p>{this.props.eventMinPrice ? <span>From {this.props.eventMinPrice} EUR</span> : <span>Price to be announced</span>}</p>
                    <p className="card-text"><a target="blank" href= {this.props.eventGetTickets}>Get tickets</a></p>
                    {/* <img src={this.props.eventSeatMap} alt="seatmap" /> */}
                    <iframe width="100%" height="450" frameBorder="0"  src={"https://www.google.com/maps/embed/v1/view?key=AIzaSyCk3qtl1MWipyqiAvMNKewzEjZbD-zrw7A&center=" + this.props.latitude + "," + this.props.longitude + "&zoom=16&maptype=roadmap"} />            
                </div>
        </div>
    }
}

export default EventInfo