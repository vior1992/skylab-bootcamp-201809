import React, { Component } from 'react'

class FavouriteEvents extends Component {

    onClickDelete = () => {
        this.props.deleteFavourite(this.props.id)
    }

    render() {
        
    return <li>
    <div className="card">
    <img src={this.props.img}></img>
        <title>{this.props.title}</title>
        <p>{this.props.date}</p>
        <p>{this.props.city}</p>
        <button>GET TICKETS</button>
        <button onClick={this.onClickDelete}>X</button>

    </div>       
</li>
    }
}

export default FavouriteEvents