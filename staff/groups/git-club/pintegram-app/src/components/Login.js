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

        return <div className="login__page"> 
        <div className="login">
        <h1 className="login__header">Login</h1> 
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" onChange={this.handleUsernameChange} />
            <input type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            {/* <button type="submit">Login</button> <a href="/#/">back</a> */}
            <button className="login__submit" type="submit">Login</button> <a className="login__back" href="#" onClick={this.props.onGoBack}>back</a>
        </form>
        </div>
        </div>
        
    }
}

export default Login