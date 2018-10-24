import React, { Component } from 'react'
import FavouriteEvents from './FavouriteEvents'
import logic from '../logic'


class Favourites extends Component {
    state = {
        favouritesList: []
    }

    componentDidMount() {
        this.retrieveFavourites()        
    }

    handleDeleteFavourites = (id) => {
        logic.deleteFavourite(id)
        .then(res => this.setState({favouritesList: res}))
        .catch(err => this.setState({error: err}))    
    }

    retrieveFavourites() {
        try {
           
        logic.retrieveFavouriteEvents()
        .then(res => {this.setState({ favouritesList: res })})
        .catch(err => this.setState({ error: err }))
        }
        catch(err) {alert('error')}
    
    }   

    render() {
        console.log(this.state.favouritesList)
        return <div className="favouriteList-container">
            <ul>
            { this.state.favouritesList.map(item => <FavouriteEvents key={item.id} id={item.id} img={item.images[9].url} name={item.name} city={item._embedded.venues[0].city.name} date={item.dates.start.localDate} deleteFavourite={this.handleDeleteFavourites} eventUrl={item.url}/>)}

            </ul>
        </div>

    }
}

export default Favourites