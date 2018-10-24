import React, { Component } from 'react'

class FavouriteEvents extends Component {

    onClickDelete = () => {
        this.props.deleteFavourite(this.props.id)
    }

    render() {
        
    return <li>
    <div className="card">
    <img src={this.props.img}></img>
        <p>{this.props.name}</p>
        <p>{this.props.date}</p>
        <p>{this.props.city}</p>
        <button>GET TICKETS</button>
        <button onClick={this.onClickDelete}>X</button>

    </div>       
</li>
    }
}

export default FavouriteEvents