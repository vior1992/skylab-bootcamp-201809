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

    handleSubmit = this.handleSubmit.bind(this)
    handleSubmit(event) {
        event.preventDefault()

        console.log('iniciando login')

        const { username, password } = this.state

        console.log('username y password: ' + username + password)
        try {
            logic.loginUser(username, password)
                .then(() => this.setState({ error: "" }))
                .then(() => this.props.history.push('/'))
                .then(() => this.props.isLoggedIn())
                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
        console.log(this.props.isLoggedIn)
    }

    verResultados = event => {
        event.preventDefault()
        console.log(this.state.error)
    }

    render() {
        return <div className="login_component">
                        <form className="login_form" onSubmit={this.handleSubmit}>
                            <input type="text" class="form-control" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                            <br></br>
                            <input type="password" class="form-control" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                            <br></br>
                            <button class="btn btn-outline-secondary" type="submit">Login</button>
                            <a className="btn btn-link" href="#" onClick={this.props.onGoBack}>back</a>
                        </form>
                    </div>
                    }
                }
                
export default Login