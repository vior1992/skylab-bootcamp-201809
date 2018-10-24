import React, { Component } from 'react'
import FavouriteEvents from './FavouriteEvents'


class Favourites extends Component {
    state = {
        favouritesList: []
    }

    onClickDelete = (id) => {
        this.props.deleteFavourite(id)
    }

    componentDidMount() {
        this.setState({favouritesList: this.props.favouritesList })
    }
    

    render() {
        return <div className="favouriteList-container">
            <ul>
            {this.state.favouritesList.map(item => <FavouriteEvents id={item.id} img={item.images[9].url} name={item.name} city={item._embedded.venues[0].city.name} date={item.dates.start.localDate} deleteFavourite={this.props.deleteFavourite} eventUrl={item.url}/>)}

            </ul>
        </div>

    }
}

export default Favourites