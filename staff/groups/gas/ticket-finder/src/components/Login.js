import React, {Component} from 'react'
import { Button, Input } from "mdbreact"

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
        return <div className="login-container">
        <form onSubmit={this.handleSubmit}>
            <Input label="Username" type="text" onChange={this.handleUsernameChange} />
            <Input label="Password" type="password" onChange={this.handlePasswordChange} />
            {/* <button type="submit">Login</button> <a href="/#/">back</a> */}
            <Button color="unique" type="submit">Login</Button> <a href="#" onClick={this.props.onGoBack}>back</a>
        </form>
        </div>
    }
}

export default Login
