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
        return <form className="login" onSubmit={this.handleSubmit}>
            <div className="login__inputs" >
                <input className="login__input" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                <input className="login__input" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            </div>
            {/* <button type="submit">Login</button> <a href="/#/">back</a> */}
            <button className="login__button" type="submit">Login</button> <a className="register__back" href="#" onClick={this.props.onGoBack}>back</a>
        </form>
    }
}

export default Login