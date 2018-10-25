import React, {Component} from 'react'
import Header from '../../header/header'
import Search from '../../search/search';
import spotifyLogic from '../../../services/spotifylogic'

export default class FrontSide extends Component{

    state = {}

    constructor(props){
        super(props)
    }

    handleSearch = (value) =>{
        
        let artits = []
        spotifyLogic.getArtists(value).then(res => { 
         
            res.artists.items.map(item => {

                artits.push({id:item.id,name:item.name,image: !!item.images.length ? item.images[0].url : ""})

            })
            return artits
        
        })
        .then(data => {
                
            this.props.onArtistFound(data)

        }).catch(err => {}) ///mostrat pop pup bootstrap
        
    }
   
    render(){
       
        return (

            <section className="front">
                <Header ></Header>
                <Search onClearSearch = {this.props.onClearSearch} onSearch = {this.handleSearch}></Search>
            </section>
        );
    }
}
