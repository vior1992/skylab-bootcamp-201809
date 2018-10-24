import React, { Component } from 'react'
import FavouriteEvents from './FavouriteEvents'
import logic from '../logic'


class Favourites extends Component {
    state = {
        favouritesList: []
    }

    onClickDelete = (id) => {
        this.props.deleteFavourite(id)
    }

    componentDidMount() {
        // this.setState({favouritesList: this.props.favouritesList })

        this.retrieveFavourites()
        
    }

    // componentWillUnmount() {
    //     this._isMount = false;
    // }
    
    // componentDidMount() {
    //     this._isMount = true;
    // }
    
    // setState(params) {
    //     if (this._isMount) {
    //         super.setState(params);
    //     }
    // }

    retrieveFavourites() {
        try {
           
        logic.retrieveFavouriteEvents()
        .then(res => {debugger; this.setState({ favouritesList: res })})
        .catch(err => this.setState({ error: err }))
        }
        catch(err) {alert('error')}
    
    }

    

    render() {
        console.log(this.state.favouritesList)
        return <div className="favouriteList-container">
            <ul>
            { this.state.favouritesList.map(item => <FavouriteEvents id={item.id} img={item.images[9].url} name={item.name} city={item._embedded.venues[0].city.name} date={item.dates.start.localDate} deleteFavourite={this.props.deleteFavourite} eventUrl={item.url}/>)}

            </ul>
        </div>

    }
}

export default Favourites