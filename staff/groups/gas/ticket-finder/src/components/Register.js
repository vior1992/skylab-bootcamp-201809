import React, { Component } from 'react'

class Register extends Component {
    state = { name: '', email: '', username: '', password: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleEmailChange = event => {
        const email = event.target.value

        this.setState({ email })
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

        const { name, email, username, password } = this.state

        this.props.onRegister(name, email, username, password)
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Name" onChange={this.handleNameChange} />
            <input type="text" placeholder="Email" onChange={this.handleEmailChange} />
            <input type="text" placeholder="Username" onChange={this.handleUsernameChange} />
            <input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            <button type="submit">Register</button> <a href="#" onClick={this.props.onGoBack}>back</a>
        </form>
    }
}

export default Register