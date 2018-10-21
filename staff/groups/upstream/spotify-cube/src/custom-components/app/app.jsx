import React, {Component} from 'react'
import  Cube  from '../cube/cube';
import { Route, withRouter, Redirect } from 'react-router-dom'
import Landing from '../landing/landing'


class App extends Component{

    state = {}

    handleClickEnter = () => {
     
        this.props.history.push('/cube')
    }

    render(){
    return <div><Route exact path="/" render={() => <Landing onClickEnter = {this.handleClickEnter}></Landing>} />
  
            <Route path="/cube" render={() => <Cube></Cube>} /></div>
    }
}

export default withRouter(App)