import React, {Component} from 'react'
import spotifyLogic from '../../services/spotifylogic'

export default class List extends Component{

    state = {list:this.props.list, type:this.props.type}


    componentWillReceiveProps(props){

        this.setState({list:props.list})

    }
    
    handleClick = (id) =>{

        switch(this.props.type)
        {
            case "playlist":
                alert(id);
            break;
            case "artists":
            alert(id);
            break;
            case "tracks":
               alert("track")
            break;
            case "albums":
                spotifyLogic.getAlbumsByArtistId(id).then((res) => {
                  
                    let albums = []
                    res.items.map(item => {
          
                        albums.push({id:item.id,name:item.name,image:item.images.length ? item.images[0].url : ""})
        
                    })
                    
                    this.props.onAlbums(albums)                   

                })
                .catch(err => alert(err.message) )// mostrar modal
            break;
        }
    }

   
    render(){
      
        return (

            <section className="list">
            <ul>
              {
                  this.state.list.map((item) => <li key = {item.id} onClick={() => this.handleClick(item.id)}><div><div><img src={item.image}></img></div><div>{item.name}</div></div></li>)}
              
            </ul>
          </section>
           
        );
    }
}
