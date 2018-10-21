import React, { Component } from 'react'

class EventInfo extends Component {
    render() {
        console.log(this.props.eventArray)
    return <div className="card">
            <img className="card-img-top" src={this.props.eventImgUrl } alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title"> {this.props.eventName }</h5>
                    <p> {this.props.eventDate}</p>
                    <p> { this.props.time } </p>
                    <p> { this.props.eventCity } </p>
                    <p>From { this.props.eventMinPrice } EUR</p>
                    <p className="card-text"><a target="blank" href= {this.props.eventUrl }>Get tickets</a></p>
                    {/* <p> { this.props.eventPrice }</p> */}
                </div>
        </div>
    }
}

export default EventInfo