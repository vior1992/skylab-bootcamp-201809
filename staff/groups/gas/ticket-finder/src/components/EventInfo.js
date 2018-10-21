import React from 'react'

class EventInfo extends Component {
    render() {
    return <div className="card">
            <img className="card-img-top" src={props.eventImgUrl } alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title"> {props.eventName }</h5>
                    <p> { props.eventCity } </p>
                    <p className="card-text"><a target="blank" href= {props.eventUrl }>Get tickets</a></p>
                    {/* <p> { props.eventPrice }</p> */}
                </div>
        </div>
    }
}

export default EventInfo