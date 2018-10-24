import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logic from '../logic'
import { Route, withRouter } from 'react-router-dom'
import EventInfo from './EventInfo'

class Event extends Component {
    state ={
        favouriteSelected: false,
        error: null
    }
    
    handleSearchEvent = e => {
        e.preventDefault()

        this.props.eventSearch(this.props.eventId)

    }

    storeFavourites = (e) => {
        e.preventDefault()

        logic.storeFavourites(this.props.eventId)

        this.setState({favouriteSelected: !this.state.favouriteSelected})
    }

    handleDeleteFavourites = (e) => {
        e.preventDefault()

        logic.deleteFavourite(this.props.eventId)

        .catch(err => this.setState({error: err}))    

        this.setState({favouriteSelected: !this.state.favouriteSelected})
    }

    goToEvents = (e) => {
        e.preventDefault()

        this.props.history.push(`/eventinformation/${this.props.eventId}`)
    }

    changeDate = () => {
        const monthNames = ['', "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        const tempDate = this.props.eventDate.split('-')

        let date = tempDate[2] + ' ' + monthNames[parseInt(tempDate[1])] + ' ' + tempDate[0]

        return date
    }
    render(){    
    
    return <div className="col-lg-4">
        <Route path="/eventinformation/:id" render={props => <EventInfo id={props.match.params.id} />} />
        <div className="card">
            
        <a onClick={this.goToEvents}><img className="card-img-top" src={this.props.eventImgUrl } alt="Card cap" /></a>            

                <div className="card-body">

                    <h5 className="card-title"> {this.props.eventName }</h5>

                    <p>{this.changeDate()}</p>

                    <p> { this.props.eventCity } </p>

                    <p className="card-link"><a target="blank" href= {this.props.eventUrl }>Get tickets</a></p>

                   <a href="#" className="favourites-btn" onClick={this.state.favouriteSelected ? this.handleDeleteFavourites : this.storeFavourites}><i className="fas fa-star">  {this.state.favouriteSelected ? <span>Added to favourites</span>: <span>Add to favourites</span>}</i></a>
                   
                    </div>
                </div>
                </div> 

    }
}     
        
export default withRouter(Event)


