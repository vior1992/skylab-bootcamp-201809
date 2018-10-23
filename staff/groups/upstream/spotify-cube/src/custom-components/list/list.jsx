import React, {Component} from 'react'


export default class List extends Component{

    state = {list:this.props.list, type:this.props.type}


    componentWillReceiveProps(props){

        this.setState({list:props.list})

    }
    
    handleAlbumList = (artistsId) =>{

        alert(artistsId)
    }

    render(){
      
        return (

            <section className="list">
            <ul>
              {this.state.list.map((item) => <li onClick={() => this.handleAlbumList(item.id)}><div><div><img src={item.image}></img></div><div>{item.name}</div></div></li>)} 
              </ul>
          </section>
           
        );
    }
}
