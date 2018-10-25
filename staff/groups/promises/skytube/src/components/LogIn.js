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
        return <div className="logIn">
            <div className="logIn__title">
                <img className="logIn__logo" src="/img/skytube.logo.png" alt="logo"></img>
                <h1>Skytube</h1>
            </div>
            <Error error={this.props.error}/>
            <form className = "logIn__form" onSubmit={this.handleSubmit}>
                <h4 className = "logIn__form--text" >Username</h4>
                <input className = "logIn__input" placeholder='' onChange={this.handleUsernameChange}/>
                <h4 className = "logIn__form--text" >Password</h4>
                <input className = "logIn__input" type='password' placeholder='' onChange={this.handlePasswordChange}/>
                <button className = "logIn__button" type='submit'>Log In</button>
                <Link className = "logIn__return" to='/'>Go back</Link>
            </form>
        </div>
    }
}

export default LogIn
