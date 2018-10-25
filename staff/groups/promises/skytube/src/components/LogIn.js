import React, {Component} from 'react'
import Error from './Error'
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
        return <div className="login">
            <div className="login__title">
                <img className="login__logo" src="/img/skytube.logo.png" alt="logo"></img>
                <h1>Skytube</h1>
            </div>
            <Error error={this.props.error}/>
            <form className = "login__form" onSubmit={this.handleSubmit}>
                <h4 className = "login__label" >Username</h4>
                <input className = "login__input" placeholder='Username' onChange={this.handleUsernameChange}/>
                <h4 className = "login__label" >Password</h4>
                <input className = "login__input" type='password' placeholder='Password' onChange={this.handlePasswordChange}/>
                <button className = "login__button" type='submit'>Log In</button>
                <Link className = "login__return" to='/'>Return</Link>
            </form>
        </div>
    }
}

export default LogIn
