import React, {Component} from 'react'


export default class Header extends Component{

    state = {track:"",showPlayer:this.props.showPlayer}

    componentWillReceiveProps(props){

        this.setState({track:props.track})
    
      }

    render(){
        return (
            
            <header className="header">
                <div className="header__logo">
                <i class="fab fa-spotify"></i> <p className='logo'>MusicLab</p>
                </div>
                {this.state.showPlayer && <audio src={this.state.track} className="header__audio" controls autoPlay ></audio>}
            </header>

           
        );
    }
}
