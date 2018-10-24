import React, { Component } from 'react'

class Event extends Component {
    
    handleSearchEvent = e => {
        e.preventDefault()

        this.props.eventSearch(this.props.eventId)

    }

    storeFavourites = (e) => {
        e.preventDefault()
        this.props.favourites(this.props.eventId)
    }

    changeDate = () => {
        const monthNames = ['', "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        const tempDate = this.props.eventDate.split('-')

        let date = tempDate[2] + ' ' + monthNames[parseInt(tempDate[1])] + ' ' + tempDate[0]

        return date
    }
    render(){    
    
    return <div className="col-lg-4">
        <div className="card">
            
            <a onClick={this.handleSearchEvent} href="#"><img className="card-img-top" src={this.props.eventImgUrl } alt="Card cap" /></a>

                <div className="card-body">

                    <h5 className="card-title"> {this.props.eventName }</h5>

                    <p>{this.changeDate()}</p>

                    <p> { this.props.eventCity } </p>

                    <p className="card-link"><a target="blank" href= {this.props.eventUrl }>Get tickets</a></p>

                   <a href="#" className="favourites-btn" onClick={this.storeFavourites}><i className="fas fa-star">  Add to favourites</i></a>
                    </div>
                </div>
                </div> 

    }
}     
        
export default Event


