import React, { Component } from 'react'

class Register extends Component {
    state = { name: '', surname: '', username: '', password: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
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

        const { name, surname, username, password } = this.state

        this.props.onRegister(name, surname, username, password)
    }

    render() {
        return <form className="register" onSubmit={this.handleSubmit}>
            <div className="register__inputs">
                <input className="register__input" type="text" placeholder="Name" onChange={this.handleNameChange} />
                <input className="register__input" type="text" placeholder="Surname" onChange={this.handleSurnameChange} />
                <input className="register__input" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                <input className="register__input" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            </div>

            <div className="register__buttons">
            <button className="register__button" type="submit">Register</button> <a className="register__back" href="#" onClick={this.props.onGoBack}>back</a>
            </div>
        </form>
    }
}

export default Register