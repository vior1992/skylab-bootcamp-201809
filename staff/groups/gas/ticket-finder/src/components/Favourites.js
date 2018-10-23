import React, { Component } from 'react'


class Favourites extends Component {

    onClickDelete = (id) => {
        this.props.deleteFavourite(id)
    }

    render() {
        return <div>
            <ul>
                {this.props.favouritesList.map((event,index) => {
                    return <li>
                        <img src={event.images[9].url}></img>
                        <title>{event.name}</title>
                        <p>{event._embedded.venues[0].city.name}</p>
                        <p>{event.dates.start.localDate}</p>
                        <button>GET TICKETS</button>
                        <button onClick={this.onClickDelete}>X</button>
                    </li>
                })}

            </ul>
        </div>

    }
}

export default Favourites