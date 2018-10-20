import React, {Component} from 'react'

class Login extends Component {
    state = {username: '', password:''}

    handleUsernameChange = event => {
        const username = event.target.value
        
        this.setState({username})
    }
    handlePasswordChange = event => {
        const password = event.target.value
        
        this.setState({password})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.onLoginSubmit()
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Username' onChange={this.handleUsernameChange}/>
            <input type='password' placeholder='Password' onChange={this.handlePasswordChange}/>
            <button>Register</button>
            <button>Login</button>
            <a href='#'>Go back</a>
        </form>
    }
}

export default Login