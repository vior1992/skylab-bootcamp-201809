import React, { Component } from 'react'
import Footer from '../footer/footer'


class Register extends Component {
    state = { name: '', surname: '', city: '', username: '', password: ''}

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
    }

    handleCityChange = event => {
        const city = event.target.value

        this.setState({ city })
    }

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

        const { name, surname, city, username, password } = this.state

        this.props.onRegister(name, surname, city, username, password)
    }

    render(){
        return <div>
        <header className="site__header">
            <a href="" className="logo" onClick={this.props.onLogoClick}>Logo</a>
            
            <div className="header__actions">
                <a href="#" className="login__link" onClick={this.props.onLoginClick}>Iniciar sesión</a>
                <a href="#" className="logup__link" onClick={this.props.onRegisterClick}>Registrarse</a>
            </div>
        </header>
        <form>
            <div className="register__container">
                <div className="register__titles">
                    <h2>Registrarse</h2>
                    <p>¿Ya eres miembro? <a href="#" onClick={this.props.onLoginClick}>Iniciar sesión</a></p>
                </div>
                <div className="register__formulary">
                    <div>
                            <h4>Nombre</h4>
                            <input className="register__input" type="text" maxlength="22" onChange={this.handleNameChange}/>
                            <h4>Apellidos</h4>
                            <input className="register__input" type="text" maxlength="22" onChange={this.handleSurnameChange}/>
                            <h4>Ciudad</h4>
                            <select defaultValue="CHOOSE" name="city" id="" onChange={this.handleCityChange}>
                                <option value="CHOOSE">Elige una ciudad</option>
                                <option value="Barcelona">Barcelona</option>
                                <option value="Madrid">Madrid</option>
                                <option value="Bilbao">Bilbao</option>
                                <option value="Valencia">Valencia</option>
                                <option value="Sevilla">Sevilla</option>
                            </select>
                            <h4>Nombre de usuario</h4>
                            <input className="register__input" type="text" maxlength="22" onChange={this.handleUsernameChange}/>
                            <h4>Contraseña</h4>
                            <input className="register__input" type="password" maxlength="22" onChange={this.handlePasswordChange}/>
                    </div>
                </div>
                <h3 className="register__error">{this.props.error}</h3>
                <button className="register__button" onClick={this.handleSubmit}>Registrarse</button>
            </div>
        </form>
        <Footer/>
    </div>
        
    }
}

export default Register