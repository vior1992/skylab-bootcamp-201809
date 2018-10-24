import React, {Component} from 'react'
import  Cube  from '../cube/cube';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Landing from '../landing/landing'
import ModalAddPlaylist from '../modaladdplaylist/modaladdplaylist'

class App extends Component{

    state = {}

    handleClickEnter = () => {
     
        this.props.history.push('/cube')
    }

    render(){
    return <div>
             <ModalAddPlaylist ></ModalAddPlaylist>
            <Route exact path="/" render={() => <Landing onClickEnter = {this.handleClickEnter}></Landing>} />
            <Route path="/cube" render={() => <Cube></Cube>} />
            </div>
    }
}

export default withRouter(App)