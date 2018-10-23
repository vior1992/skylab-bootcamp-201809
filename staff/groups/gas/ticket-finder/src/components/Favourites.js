import React, { Component } from 'react'
import FavouriteEvents from './FavouriteEvents'


class Favourites extends Component {

    onClickDelete = (id) => {
        this.props.deleteFavourite(id)
    }

    render() {
        return <div>
            <ul>
            {this.props.favouritesList.map(item => <FavouriteEvents id={item.id} img={item.images[9].url} title={item.name} city={item._embedded.venues[0].city.name} date={item.dates.start.localDate} deleteFavourite={this.props.deleteFavourite}/>)}

            </ul>
        </div>

    }
}

export default Favourites