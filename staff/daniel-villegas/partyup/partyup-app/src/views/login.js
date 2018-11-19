import React, { Component } from 'react'

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

        this.props.onLogin( username, password )
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
                    <p>¿No eres miembro todavía? <a href="./register.html">Registrate</a></p>
                </div>
                <div className="login__formulary">
                    <form action="">
                            <h4>Nombre de usuario</h4>
                            <input className="login__input" type="text" onChange={this.handleUsernameChange}/>
                            <h4>Contraseña</h4>
                            <input className="login__input" type="password" onChange={this.handlePasswordChange}/>
                    </form>
                </div>
                <button className="login__button" onClick={this.handleSubmit}>Iniciar sesión</button>
            </div>
        </main>

        <footer className="footer">
            <p>© 2018 Partyup  Partyup es una subsidiaria totalmente controlada por Dani Companies Inc.</p>
        </footer>
    </div>
    }

}

export default Login