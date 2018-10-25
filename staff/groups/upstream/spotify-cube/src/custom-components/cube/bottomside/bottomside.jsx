import React, {Component} from 'react'
import Register from '../../register/register'
import Header from '../../header/header'
import userService from '../../../services/userlogic'
import SideTitle from '../../sidetitle/sidetitle'
import List from '../../list/list';


export default class BottomSide extends Component{

    state = {messageButton:"Add PlayList",registerMessage:"", registerPlaylistMessage:"", showFormAddPlayList:false, playlists:this.props.playlists, isLogged:false, playListName:""}

    componentWillReceiveProps(props){
        
        this.setState({isLogged:props.isLogged,playlists:props.playlists})
 
    }

    onRegister = ({ name, surname, email, username, password }) => {
       
        try {
            userService.registerUser(name, surname, email, username, password)
                .then(() => {
                    this.setState({ registerMessage: "User registered correctly" }, () => {

                        
                    })
                })
                .catch(err => this.setState({ registerMessage: err.message }))
        } catch (err) {
            //mostrar modal con el error
        }
    }

    handleChange = (ev) =>{

        this.setState({playListName:ev.target.value})

    }

    handleCreatePlayList = (ev) => {
        ev.preventDefault()

        userService.createPlayList(this.state.playListName).then(res => {

                userService.getUserPlayLists().then(res => {

                  
                    res.map(el => {

                        el.image = require('../../../assets/img/playlist.png')
                    })

                    this.setState({messageButton:"Add PlayList",registerPlaylistMessage:"The playlist has been created",showFormAddPlayList:false, playlists:res}, () =>{
    
                                  
                    })
    
                })
           

           
            
         }).catch(err => {
 
             this.setState({registerPlaylistMessage:err.message})
            
         
         })
    }

    handleAddPlaylistClick = () => {

        if (this.state.messageButton === "Add PlayList"){
            this.setState({messageButton:"Close form"})
        }else{
            this.setState({messageButton:"Add PlayList"})
        }
        this.state.showFormAddPlayList = !this.state.showFormAddPlayList
        this.setState({registerPlaylistMessage:"", showFormAddPlayList:this.state.showFormAddPlayList})
    }

    handleDeleteClick = (id) => {
        
        userService.deletePlayList(id).then(res => {

            res.playLists.map(el => {
                el.image = require('../../../assets/img/playlist.png')
            })

            this.setState({playlists:res.playLists})

        }).catch(err => {



        })

    }

    render(){
        return (
            
            <section className="bottom">
                <div className="rotateX-180">
                
                    <Header></Header>
                    {this.state.isLogged && <SideTitle  messageButton = {this.state.messageButton} onClickAddPlayList = {this.handleAddPlaylistClick} showAddPlayListButton = {true} title="Play Lists"></SideTitle> }
                    {this.state.isLogged && !this.state.showFormAddPlayList  && <List onDeleteClick = {this.handleDeleteClick} type="playlist" list = {this.state.playlists}></List>}
                    {!this.state.isLogged && <Register registerMessage = {this.state.registerMessage} onClickLogin={this.props.onClickLogin} handleRegister={this.onRegister}></Register>}
                    {this.state.showFormAddPlayList && <form className="custom-form" onSubmit = {(ev) => {this.handleCreatePlayList(ev)}}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Add Playlist</label>
                            <input onChange={(ev) => this.handleChange(ev)} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Add PlayList..." />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Playlist</button>
                        <h3>{this.state.registerPlaylistMessage}</h3>
                    </form>}
                </div>
            </section>
        );
    }
}
