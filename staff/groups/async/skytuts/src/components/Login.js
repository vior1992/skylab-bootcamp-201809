import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import logicAuth from '../logic/auth'


class Login extends Component {

    state = { username: '', password: '', error: null }


    handleLogin = (username, password) => {
        console.log(this.props)
        try {
            logicAuth.login(username, password)
                .then(() => this.props.history.push('/'))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
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

        const { username, password } = this.state

        this.handleLogin(username, password)
    }

    render() {
        return (
            <div className="Home">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                    <input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                    <button type="submit">Login</button>

                    <NavLink to="/register">Don't have an account? Sign up here</NavLink>
                </form>
                {this.state.error &&
                    <p color="red">{this.state.error}</p>
                }
            </div>
        )
    }
}

export default Login