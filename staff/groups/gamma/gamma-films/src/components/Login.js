import React, { Component } from 'react'
import logic from '../logic'

class Login extends Component {
    state = { username: '', password: '', error: '' }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })

        console.log(this.state.username)
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })

        console.log(this.state.password)

    }

    handleSubmit=this.handleSubmit.bind(this)
    handleSubmit (event) {
        event.preventDefault()

        console.log('iniciando login')

        const { username, password } = this.state

        console.log('username y password: ' + username + password)
        debugger
        try {
            logic.loginUser(username, password)
                .then(() => this.setState({ error: "" }))
                .then(() => this.props.history.push('/'))
                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
        debugger
    }

    verResultados = event => {
        event.preventDefault()
        console.log(this.state.error)
    }

    render() {
        return <div className="login_component">

            <form className="login_form" onSubmit={this.handleSubmit}>
                <input className="login_input" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                <input className="login_input" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                <button className="login_btn" type="submit">Login</button>
                <a className="login_back" href="#" onClick={this.props.onGoBack}>back</a>
            </form>
        </div>
    }
}

export default Login