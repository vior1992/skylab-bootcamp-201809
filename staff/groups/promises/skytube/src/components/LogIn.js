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
        return <div className="logIn">
            <div className="logIn__title">
                <img className="logIn__logo" src="/img/skytube.logo.png" alt="logo"></img>
                <h1>Skytube</h1>
            </div>
            <form className = "logIn__form" onSubmit={this.handleSubmit}>
                <h4 className = "logIn__form--text" >Username</h4>
                <input className = "logIn__input" placeholder='Username' onChange={this.handleUsernameChange}/>
                <h4 className = "logIn__form--text" >Password</h4>
                <input className = "logIn__input" type='assword' placeholder='Password' onChange={this.handlePasswordChange}/>
                <button className = "logIn__button" type='submit'>Log In</button>
                <Link className = "logIn__return" to='/'>Return</Link>
            </form>
        </div>
    }
}

export default LogIn
