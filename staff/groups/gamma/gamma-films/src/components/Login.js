import React, {Component} from 'react'
import logic from '../logic'

class Login extends Component {
    state = { username: '', password: '', error:'' }

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

    handleSubmit = event => {
        event.preventDefault()

        console.log('iniciando login')

        const { username, password } = this.state

        console.log('username y password: '+username+password)

        try {
            logic.login(username, password)
                .then(() =>  this.props.history.push('/postits'))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" onChange={this.handleUsernameChange} />
            <input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            <button type="submit">Login</button> <a href="#" onClick={this.props.onGoBack}>back</a>
        </form>
    }
}

export default Login