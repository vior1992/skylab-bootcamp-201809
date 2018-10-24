import React, {Component} from 'react'
import FrontSide from './frontside/frontside'
import BackSide from './backside/backside'
import BottomSide from './bottomside/bottomside'
import TopSide from './topside/topside'
import RightSide from './rightside/rightside'
import LeftSide from './leftside/leftside'
import userService from '../../services/userlogic'


export default class Cube extends Component{

    state = {artists:[], tracks:[], albums:[], playlists:[], isLogged:false} 

    constructor(props){

        super(props)
        this.xdeg = 0
        this.face = "top"
        document.addEventListener("keypress", (ev) => this.cubeControler(ev.keyCode, this.face))
    }

    componentDidMount(){
        this.addRotation("rotateX--90")
    }


    cubeControler = (keyCode, face) => {
           
            
            switch(keyCode){
                

                case 87,119:  //UP
                    switch(face){

                        case "front":
                            this.addRotation("rotateX--90")
                            this.face = "top"
                        break;
                        case "bottom":
                            this.addRotation("rotateX-0")
                            this.face = "front"
                        break;
                    }
                break;

                case 83,115:  //DOWN
                    switch(face){

                        case "front":
                            this.addRotation("rotateX-90")
                            this.face = "bottom"
                        break;
                        case "top":
                            this.addRotation("rotateX-0")
                            this.face = "front"
                        break;
                    
                    }
                break;

                case 100: //LEFT
                    switch(face){

                        case "front":
                            this.xdeg += -90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "right"
                        break;
                        case "left":
                            this.xdeg = 0
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "front"
                        break;
                        case "right":
                            this.xdeg += -90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "back"
                        break;
                        case "back":
                            this.xdeg += -90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "left"
                        break;
                    }
                break;

                case 97: //RIGHT
                    switch(face){

                        case "front":
                            this.xdeg += 90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "left"
                        break;
                        case "left":
                            this.xdeg += 90    
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "back"
                        break;
                        case "right":
                            this.xdeg = 0
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "front"
                        break;
                        case "back":
                            this.xdeg += 90
                            this.addRotation("rotateY-" + this.xdeg)
                            this.face = "right"
                        break;
                    }
                break;

        }
        
    }

    addRotation = (_class) => {

        this.setState({rotationClass:_class});
      
    }

    handlerArtistFound = (data) => {        
    
      this.setState({artists:data}, () => {

            this.addRotation("rotateY--90")
            this.face = "right"
      })         
    }

    handlerAlbumsFound = (data) => {        
    
        this.setState({albums:data}, () => {
  
              this.addRotation("rotateY--180")
              this.face = "right"
        })         
      }

      handlerTracksFound = (data) => {    
          

    
        this.setState({tracks:data}, () => {
  
              this.addRotation("rotateY--270")
              this.face = "left"
        })         
      }

      handleLogin = (isLogged) =>{

        if (isLogged){
          
            userService.getUserPlayLists().then(res => {

                if (res.length)
                    res.map(el => {

                        el.image = require("../../assets/img/playlist.png")
                    })

                this.setState({playlists:res, isLogged:isLogged}, () =>{

                    this.addRotation("rotateX-0")
                    this.face = "front"
                  
                   
                })

            })
              
        }
       
        
      }

      handleLogout = () =>{

        this.setState({isLogged:false}, () => {

            
        })
        
 
       }

       handleRegister = () =>{
            
            this.addRotation("rotateX-90")
            this.face = "bottom"

       }

       handleClickRegisterLogin = () =>{

            this.addRotation("rotateX--90")
            this.face = "top"
       }

       handleAlbums = (albums) =>{
            this.setState({albums:albums}, () =>{

                this.addRotation("rotateY--180")
                this.face = "back"
            
            
            })
       }

    render(){

        return <section className="container">
       
            <section className={`cube ${this.state.rotationClass}`}>
                <FrontSide onArtistFound = {this.handlerArtistFound}></FrontSide>
                <BackSide onTracks={this.handlerTracksFound} albumlist = {this.state.albums}></BackSide>
                <LeftSide tracks = {this.state.tracks}></LeftSide>
                <RightSide onAlbums = {this.handleAlbums} artists = {this.state.artists}></RightSide>
                <TopSide onLogout={this.handleLogout} onLogin={this.handleLogin} onClickRegister = {this.handleRegister}></TopSide>
                <BottomSide onRotation = {this.addRotation} playlists = {this.state.playlists} onClickLogin = {this.handleClickRegisterLogin} isLogged = {this.state.isLogged}></BottomSide>    

            </section>
        </section>
            
    }
}