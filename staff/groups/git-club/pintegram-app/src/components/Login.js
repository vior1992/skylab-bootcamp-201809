import React, {Component} from 'react'

class Login extends Component {
    state = { username: '', password: '' }

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

        this.props.onLogin(username, password)
    }

    render() {
        return <div className="landing"> 
        <div className="landing__page">
        <div className="group__login">
        <div className="login__center">
        <h1 className="login__header">Login</h1> 
        <form className = "login__form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" onChange={this.handleUsernameChange} />
            <input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            <button className="login__submit" type="submit">Login</button> 
        </form>
        <a className="login__back" href="#" onClick={this.props.onRegister}>Si no estas registrado. Hazlo aquí.</a>
        </div>
        </div>
        </div>
        </div>
    }
}

export default Login