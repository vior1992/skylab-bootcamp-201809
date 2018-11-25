import React, { Component } from 'react'
import Footer from '../footer/footer'

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
        <header className="site__header">
            <a href="" className="logo" onClick={this.props.onLogoClick}>Logo</a>
            
            <div className="actions">
                <a href="#" className="login__link" onClick={this.props.onLoginClick}>Iniciar sesión</a>
                <a href="#" className="logup__link" onClick={this.props.onRegisterClick}>Registrarse</a>
            </div>
        </header>

        <main>
            <div className="login__container">
                <div className="login__titles">
                    <h2>Iniciar sesion</h2>
                    <p>¿No eres miembro todavía? <a href="#" onClick={this.props.onRegisterClick}>Registrate</a></p>
                </div>
                <div className="login__formulary">
                    <form action="">
                            <h4>Nombre de usuario</h4>
                            <input className="login__input" type="text" maxlength="22" onChange={this.handleUsernameChange}/>
                            <h4>Contraseña</h4>
                            <input className="login__input" type="password" maxlength="22" onChange={this.handlePasswordChange}/>
                    </form>
                </div>
                <h3 className="login__error">{this.props.error}</h3>
                <button className="login__button" onClick={this.handleSubmit}>Iniciar sesión</button>
            </div>
        </main>

        <Footer/>
    </div>
    }

}

export default Login