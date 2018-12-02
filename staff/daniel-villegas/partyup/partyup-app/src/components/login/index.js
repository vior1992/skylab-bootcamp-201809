import React, { Component } from 'react'
import Footer from '../Footer'
import HeaderNotLogged from '../HeaderNotLogged'
import './styles.css'


class Login extends Component {
    state = { username: '', password: ''}

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { username, password } = this.state

        this.props.onLogin(username, password)
    }

    render() {
        return <div>
        <HeaderNotLogged onLogoClick={this.props.onLogoClick} onLoginClick={this.props.onLoginClick} onRegisterClick={this.props.onRegisterClick}/>
        
        <form className="login__background">
            <div className="login__container">
                <div className="login__titles">
                    <h2>Iniciar sesion</h2>
                    <p>¿No eres miembro todavía? <a href="#" onClick={this.props.onRegisterClick}>Registrate</a></p>
                </div>
                <div className="login__formulary">
                    <form action="">
                            <h4 className="formulary__titles">Nombre de usuario</h4>
                            <input className="formulary__input" type="text" maxlength="22" onChange={this.handleUsernameChange}/>
                            <h4 className="formulary__titles">Contraseña</h4>
                            <input className="formulary__input" type="password" maxlength="22" onChange={this.handlePasswordChange}/>
                    </form>
                </div>
                <div>
                    {this.props.error ? <h3 className="register__error">{this.props.error}</h3> : "" }
                </div>
                <button className="login__button" onClick={this.handleSubmit}>Iniciar sesión</button>
            </div>
        </form>

        <Footer/>
    </div>
    }

}

export default Login