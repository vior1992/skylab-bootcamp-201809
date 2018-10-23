import React, {Component} from 'react'
import Header from '../../header/header'
import SideTitle from '../../sidetitle/sidetitle'
import List from '../../list/list';

export default class LeftSide extends Component{


  state = {logo:"" ,tracks:this.props.tracks, track:''}

  componentWillReceiveProps(props){
    let back = !this.state.tracks.length ? "" : this.state.tracks[0].albumImage
    this.setState({logo:back,tracks:props.tracks})

  }

  handlePlayTrack = (previewUrl) =>{
    this.setState({track:previewUrl})

  }

  

    render() {
        

       

        return (
    
          <section className="left">
            <div className="rotateY--180" >
              <Header track = {this.state.track}  showPlayer = {true}></Header>
                <SideTitle logo = {this.state.logo} image="metallica.png" title="Track List"></SideTitle>
                <List onPlayTrack={this.handlePlayTrack} showLink={true} type="songs" list = {this.state.tracks}></List>
            </div>
            
          </section>
        );
      }
}