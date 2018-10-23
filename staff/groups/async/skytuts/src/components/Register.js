import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import logicAuth from '../logic/auth'

class Register extends Component {

    state = { name: '', surname: '', username: '', password: '', error: null }


    componentWillMount() {
        if (sessionStorage.getItem('userId') || sessionStorage.getItem('token') ) this.props.history.push('/')
    }

    handleRegister = (name, surname, username, password) => {
        try {
            logicAuth.registerUser(name, surname, username, password)
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/login'))
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

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

        this.handleRegister(name, surname, username, password)
    }

    render() {
        return (
            <div className="Home" >
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" onChange={this.handleNameChange} />
                    <input type="text" placeholder="Surname" onChange={this.handleSurnameChange} />
                    <input type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                    <input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                    <button type="submit">Register</button>

                    <NavLink to="/login">Already have an account? Login here!</NavLink>
                </form>
                {this.state.error &&
                    <p color="red">{this.state.error}</p>
                }
            </div>
        )
    }
}

export default Register