import React, {Component} from 'react'
import Register from '../../register/register'
import Header from '../../header/header'
import userService from '../../../services/userlogic'

export default class BottomSide extends Component{

    state = {}

    onRegister = ({ name, surname, email, username, password }) => {
       
        try {
            userService.registerUser(name, surname, email, username, password)
                .then(() => {
                    //mostrar modal avisando que el registro ha sido correcto
                    // rotar el cubo hacia la cara de login
                    alert("creado");
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
                    <Register handleRegister={this.onRegister}></Register>
                </div>
            </section>
        );
    }
}
