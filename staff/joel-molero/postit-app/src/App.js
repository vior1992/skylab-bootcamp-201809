import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'


class App extends Component {
    state = { register: false, login: false }

    handleRegister = () => {
        this.setState({ register: true })
    }

    handleLogin = () => {
        this.setState({ login: true })
    }

    handleRegisterClick = (name, surname, username, password) => {
        logic.registerUser(name, surname, username, password)
    }

    handleLoginClick = (username, password) => {
        try {
        const userId = logic.loginUser(username, password)         
        
        console.log(userId)
        } catch(err) {
            console.error("incorrect credentials")
        }
    }
        
        
        
        /* , res => {
        if (res === 'ok') ....
        else ... 
        })
        o tambien con promises
        .then(res => ...)
        .catch(res => ...) */
    

    render() {
        return <div>
            {!this.state.register && !this.state.login && <section><button onClick={this.handleRegister}>Register</button> or <button onClick={this.handleLogin}>Login</button></section>}
            {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
            {this.state.login && <Login onLoginClick={this.handleLoginClick} />}
            {}
        </div>
    }
}

export default App
