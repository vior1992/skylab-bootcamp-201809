import React, {Component} from 'react'
import Login from '../../login/login';
import Header from '../../header/header'
import userService from '../../../services/userlogic'

export default class TopSide extends Component{

    state = {isLogged:false}

    onLogin = ({ username, password }) => {
        
        try {
            userService.authenticateUser(username, password)
                .then((data) => {
                   
                   sessionStorage.setItem("user",JSON.stringify(data))
                   this.setState({isLogged:true})

                })
                .catch(err => alert(err.message))
        } catch (err) {
            alert("se fue aqui")
        }
    }

    logout = () =>{

        sessionStorage.clear();
        this.setState({isLogged:false})

    }

    render(){
        return (
            <section className="top">
                <Header></Header>
                {!this.state.isLogged && <Login handleLogin={this.onLogin}></Login>}
               {this.state.isLogged && <section className="top__seccion-button"><button onClick={this.logout} className="btn btn-warning">LOGOUT</button></section>}
           </section>
        );
    }
}
