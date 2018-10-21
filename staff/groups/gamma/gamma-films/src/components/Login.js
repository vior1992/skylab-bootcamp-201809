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

    handleSubmit = event => {
        event.preventDefault()

        console.log('iniciando login')

        const { username, password } = this.state

        console.log('username y password: ' + username + password)

        try {
            logic.loginUser(username, password)
                .then(()=> this.setState({error:""}))
                .then(() =>  this.props.history.push('/login'))
                .catch(err => this.setState({ error: err.message }))

        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    verResultados = event => {
        event.preventDefault()
        console.log(this.state.error)
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" onChange={this.handleUsernameChange} />
            <input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            <button type="submit">Login</button> 
            <a href="#" onClick={this.props.onGoBack}>back</a>


            <button type="button" onClick={this.verResultados}>Ver</button> 

        </form>
    }
}

export default Login