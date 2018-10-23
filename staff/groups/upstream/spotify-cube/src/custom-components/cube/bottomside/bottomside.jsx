import React, {Component} from 'react'
import Register from '../../register/register'
import Header from '../../header/header'
import userService from '../../../services/userlogic'
import SideTitle from '../../sidetitle/sidetitle'
import List from '../../list/list';
import TopSide from '../topside/topside';

export default class BottomSide extends Component{

    state = {playlists:this.props.playlists, isLogged:false}

    componentWillReceiveProps(props){

        this.setState({isLogged:props.isLogged,playlists:props.playlists})
 
    }

    onRegister = ({ name, surname, email, username, password }) => {
       
        try {
            userService.registerUser(name, surname, email, username, password)
                .then(() => {
                    //mostrar modal avisando que el registro ha sido correcto
                    // rotar el cubo hacia la cara de login
                    this.props.showLogin(87, "bottom")
                    this.props.showLogin(87, "front")
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            //mostrar modal con el error
        }
    }

    render(){
        return (

            <section className="bottom">
                <div className="rotateX-180">
                    <Header></Header>
                    {this.state.isLogged && <SideTitle title="Play Lists" image="metallica.png"></SideTitle> }
                    {this.state.isLogged && <List type="playlist" list = {this.state.playlists}></List>}
                    {!this.state.isLogged && <Register onClickLogin={this.props.onClickLogin} handleRegister={this.onRegister}></Register>}
                </div>
            </section>
        );
    }
}
