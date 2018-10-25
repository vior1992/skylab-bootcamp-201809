import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class LogIn extends Component {
    state = { username: '', password: ''}

    handleUsernameChange = event => {
        const username = event.target.value
        this.setState({username})
    }

    handlePasswordChange = event => {
        const password = event.target.value
        this.setState({password})
    }

    handleSubmit = event =>{
        event.preventDefault()
        const {username,password} = this.state
        this.props.onLogInSubmit( username, password)
    }

    render () {
        return <div>
            <h1>Skytube</h1>
            <form className = "logIn" onSubmit={this.handleSubmit}>
                <input placeholder='username' onChange={this.handleUsernameChange}/>
                <input type='password' placeholder='password' onChange={this.handlePasswordChange}/>
                <button className = "logIn__button" type='submit'>Log In</button>
                <Link to='/'>Return</Link>
            </form>
    </div>
    }
}

export default LogIn
