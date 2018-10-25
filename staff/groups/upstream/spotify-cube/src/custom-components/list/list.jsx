import React, {Component} from 'react'
import spotifyLogic from '../../services/spotifylogic'
import $ from 'jquery'

export default class List extends Component{

    state = {list:this.props.list, type:this.props.type}


    componentWillReceiveProps(props){

        this.setState({list:props.list})

    }
    
    handleClick = (id) =>{

        switch(this.state.type)
        {
            case "playlist":
                alert(id);
            break;
            case "artists":
            alert(id);
            break;
            case "tracks":
         
                spotifyLogic.getSongsbyAlbumId(id)
                    .then((res)=>{

                    let songs = []
                    let albumImage = $('.list').first().find('img').first().attr('src')

                    res.items.map(item => {

                        songs.push({id:item.id, name:item.name, preview_url:item.preview_url, albumImage:albumImage})

                    })
                    this.props.onTracks(songs)
                    
                })
                .catch(err => alert(err.message) )// mostrar modal
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
            case "songs":
                let track = this.state.list.find((el) => {

                    return el.id === id

                })
                let preview_url = !track.preview_url ? require("../../assets/audio/default.mp3") : track.preview_url
                this.props.onPlayTrack(preview_url)
                break;
        }
    }

    
    render(){
       

        return (

            <section className="list">
            <ul className="list__container">
              {
              this.state.list.map((item) => 
              
              <li className="list__container__item">
                
                    <div className="list__container__item__group"> 
                        <div className="list__container__item__group__img">
                            <img src={!item.image ? require("../../assets/img/playlist.png") : item.image}></img>
                        </div>
                        <div onClick={() => this.handleClick(item.id)} className="list__container__item__group__name">{item.name}</div>
                        {this.state.type === "playlist" && <div><button onClick={() => this.props.onDeleteClick(item.id)} className="list__container__item__group__button-delete btn btn-sm btn-dark">Eliminar</button></div>}
                    </div>
                </li>)}
              
            </ul>
          </section>
           
        );
    }
}
