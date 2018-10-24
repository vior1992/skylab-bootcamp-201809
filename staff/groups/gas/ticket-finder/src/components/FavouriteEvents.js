import React, { Component } from 'react'

class FavouriteEvents extends Component {

    onClickDelete = () => {
        this.props.deleteFavourite(this.props.id)
    }

    render() {
        
    return <li class="favourites-list">
    <img src={this.props.img}></img>
        <p>{this.props.name}</p>
        <p>{this.props.date}</p>
        <p>{this.props.city}</p>
        <p ><a className="card-link" target="blank" href= {this.props.eventUrl }>Get tickets</a></p>
        <button className="delete-button" href="#" onClick={this.onClickDelete}>X</button>
 
</li>
    }
}

export default FavouriteEvents